/*
 * Consistency skyline: the canvas renderer, morph, hover, keyboard and orbit.
 * Loaded on its own after first paint (see SkylineCard); the card's DOM and a
 * static flat grid are already on the page, so nothing shifts when it starts.
 *
 * Adapted from "Contribution Skyline" by Kedhareswer Naidu (MIT),
 * https://21st.dev/@kedhareswer/components/contribution-skyline. The full
 * notice is in ./model.ts.
 *
 * Changes for MyGrowth: the stage keeps one fixed size (CSS) for both views,
 * so the rise never moves the page; colours come from the site's tokens
 * (--surface, --text, --g0 to --g4) and follow its data-theme switch; orbit
 * is mouse only, so a finger always scrolls the page.
 */
import {
  barHeight, camera, easeInOutCubic, lerp, mixRGB, project, riseAt, smoothstep,
  ELEV_3D, ELEV_RANGE, YAW_3D, YAW_RANGE, type Cam, type Cell, type RGB,
} from "./model";

export type EngineConfig = {
  cells: Cell[];
  weeks: number;
  months: { week: number; label: string }[];
  weekdays: { day: number; label: string }[];
  /** 0 flat, 1 skyline. */
  target: number;
  legendLevel: number;
  duration: number;
  setActive: (i: number) => void;
  announce: (i: number) => void;
};

export type Engine = { kick: () => void; load: () => void; retheme: () => void; tipWidth: (w: number) => void; destroy: () => void };

const FG_FALLBACK: RGB = [31, 35, 40];
const BG_FALLBACK: RGB = [255, 255, 255];

// Any CSS colour to sRGB, by letting the browser paint it.
let probe: CanvasRenderingContext2D | null = null;
const toRGB = (color: string, fallback: RGB): RGB => {
  if (!probe) {
    const c = document.createElement("canvas");
    c.width = c.height = 1;
    probe = c.getContext("2d", { willReadFrequently: true });
  }
  if (!probe || !color) return fallback;
  probe.clearRect(0, 0, 1, 1);
  probe.fillStyle = "rgba(0,0,0,0)";
  probe.fillStyle = color;
  probe.fillRect(0, 0, 1, 1);
  const d = probe.getImageData(0, 0, 1, 1).data;
  return d[3] < 8 ? fallback : [d[0], d[1], d[2]];
};

const rgb = (r: number, g: number, b: number) => "rgb(" + Math.round(r) + "," + Math.round(g) + "," + Math.round(b) + ")";
const rgba = (c: RGB, a: number) => "rgba(" + Math.round(c[0]) + "," + Math.round(c[1]) + "," + Math.round(c[2]) + "," + a.toFixed(3) + ")";

const pointInQuad = (p: Float32Array, o: number, x: number, y: number): boolean => {
  let sign = 0;
  for (let k = 0; k < 4; k++) {
    const ax = p[o + k * 2], ay = p[o + k * 2 + 1];
    const bx = p[o + ((k + 1) % 4) * 2], by = p[o + ((k + 1) % 4) * 2 + 1];
    const cross = (bx - ax) * (y - ay) - (by - ay) * (x - ax);
    if (Math.abs(cross) < 1e-9) continue;
    const s = cross > 0 ? 1 : -1;
    if (sign === 0) sign = s;
    else if (s !== sign) return false;
  }
  return sign !== 0;
};

const quadPath = (ctx: CanvasRenderingContext2D, p: Float32Array, o: number, r: number) => {
  if (r < 0.3) {
    ctx.moveTo(p[o], p[o + 1]);
    ctx.lineTo(p[o + 2], p[o + 3]);
    ctx.lineTo(p[o + 4], p[o + 5]);
    ctx.lineTo(p[o + 6], p[o + 7]);
    ctx.closePath();
    return;
  }
  ctx.moveTo((p[o + 6] + p[o]) / 2, (p[o + 7] + p[o + 1]) / 2);
  for (let k = 0; k < 4; k++) {
    const b = (k + 1) % 4;
    ctx.arcTo(p[o + k * 2], p[o + k * 2 + 1], p[o + b * 2], p[o + b * 2 + 1], r);
  }
  ctx.closePath();
};

/** Flat-view geometry, shared with the static placeholder so the swap is seamless. */
export const FLAT = { top: 20, gutterMin: 440, cell: 0.8 };
/** World units in front of the grid kept free for the 3D month labels. */
const LABEL_BAND = 2.6;
const LABEL_GAP = 4;

/** The largest size, 8 to 11 px, at which every label fits the room it has. */
const fitFont = (room: number[], widths: number[]) => {
  let px = 11;
  room.forEach((r, i) => { if (widths[i] > 0) px = Math.min(px, (r - LABEL_GAP) / widths[i]); });
  return Math.max(8, Math.floor(px * 2) / 2);
};

export function createEngine(
  root: HTMLElement, stage: HTMLElement, canvas: HTMLCanvasElement, tip: HTMLElement,
  cfg: { current: EngineConfig },
): Engine | null {
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
  const darkMq = window.matchMedia("(prefers-color-scheme: dark)");
  let reduced = reduceMq.matches;

  // morph: t is linear time 0 (flat) to 1 (skyline); the camera eases it, the bars wave it
  let t = 0, target = 0;
  // orbit offsets, eased toward their goals
  let yaw = 0, elev = 0, yawGoal = 0, elevGoal = 0;
  // layout
  let W = 0, H = 0, dpr = 1, gutter = 0, labelW = 30, wide = false;
  let family = "sans-serif";
  let font = "400 11px sans-serif";
  // Month label widths at 1 px, for sizing the labels to the space they have.
  let monthW: number[] = [];
  // colours: [empty, l1, l2, l3, l4] x rgb, eased toward the goal
  const col = new Float32Array(15);
  const colGoal = new Float32Array(15);
  let colReady = false;
  let fg: RGB = FG_FALLBACK, bg: RGB = BG_FALLBACK, muted: RGB = FG_FALLBACK;
  // cells
  let n = 0, weeks = 0;
  let wk = new Float32Array(0), dy = new Float32Array(0), lv = new Uint8Array(0);
  let hgt = new Float32Array(0), zs = new Float32Array(0), hover = new Float32Array(0), dim = new Float32Array(0);
  let polys = new Float32Array(0), faces = new Uint8Array(0);
  let order: number[] = [];
  // interaction
  let hovered = -1, pinned = -1, activeIdx = -1, tipW = 0, raf = 0, last = 0;

  const load = () => {
    const m = cfg.current;
    n = m.cells.length;
    weeks = m.weeks;
    if (wk.length !== n) {
      wk = new Float32Array(n); dy = new Float32Array(n); lv = new Uint8Array(n);
      hgt = new Float32Array(n); zs = new Float32Array(n); hover = new Float32Array(n); dim = new Float32Array(n);
      polys = new Float32Array(n * 24); faces = new Uint8Array(n);
      order = Array.from({ length: n }, (_, i) => i);
    }
    for (let i = 0; i < n; i++) {
      const c = m.cells[i];
      wk[i] = c.week; dy[i] = c.day; lv[i] = c.level; hgt[i] = barHeight(c.value);
    }
    if (hovered >= n) hovered = -1;
    if (pinned >= n) pinned = -1;
  };

  const retheme = () => {
    const cs = getComputedStyle(root);
    const v = (name: string) => cs.getPropertyValue(name).trim();
    fg = toRGB(v("--text"), FG_FALLBACK);
    bg = toRGB(v("--surface"), BG_FALLBACK);
    muted = toRGB(v("--text-2"), mixRGB(bg, fg, 0.6));
    family = v("--sans") || "sans-serif";
    font = "400 11px " + family;
    const all: RGB[] = ["--g0", "--g1", "--g2", "--g3", "--g4"].map((name) => toRGB(v(name), FG_FALLBACK));
    for (let k = 0; k < 5; k++) for (let ch = 0; ch < 3; ch++) colGoal[k * 3 + ch] = all[k][ch];
    if (!colReady || reduced) {
      col.set(colGoal);
      colReady = true;
    }
    ctx.font = font;
    labelW = Math.ceil(Math.max(20, ...cfg.current.weekdays.map((r) => ctx.measureText(r.label).width))) + 8;
    ctx.font = "400 100px " + family;
    monthW = cfg.current.months.map((m) => ctx.measureText(m.label).width / 100);
    kick();
  };

  // Projected extent of the scene for camera e, with each bar at its height (full) or current z.
  const extent = (cam: Cam, e: number, full: boolean) => {
    const w = lerp(FLAT.cell, 0.9, e);
    const off = (1 - w) / 2;
    let minx = Infinity, maxx = -Infinity, miny = Infinity, maxy = -Infinity;
    const add = (x: number, y: number, z: number) => {
      const p = project(cam, x, y, z);
      if (p[0] < minx) minx = p[0];
      if (p[0] > maxx) maxx = p[0];
      if (p[1] < miny) miny = p[1];
      if (p[1] > maxy) maxy = p[1];
    };
    for (let i = 0; i < n; i++) {
      const x0 = wk[i] + off, y0 = dy[i] + off;
      const z = full ? hgt[i] * e : zs[i];
      add(x0, y0, z); add(x0 + w, y0, z); add(x0, y0 + w, z);
      add(x0 + w, y0 + w, 0); add(x0, y0 + w, 0); add(x0 + w, y0, 0);
    }
    // A band of its own for the month labels along the front edge in 3D.
    add(0, 7 + LABEL_BAND * e, 0);
    add(weeks, 7 + LABEL_BAND * e, 0);
    return { minx, maxx, miny, maxy };
  };

  const relayout = () => {
    const w = Math.round(stage.clientWidth), h = Math.round(stage.clientHeight);
    if (!w || !h || !n) return;
    W = w; H = h;
    wide = W >= FLAT.gutterMin;
    // Narrow cards give the weekday column to the grid; rows get too tight to label.
    gutter = wide ? labelW : 0;
    dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    draw();
  };

  const draw = () => {
    if (!W || !n) return;
    const e = easeInOutCubic(t);
    const cam = camera(e, yaw, elev);
    for (let i = 0; i < n; i++) zs[i] = riseAt(t, wk[i], weeks, dy[i]) * hgt[i];
    const b = extent(cam, e, false);
    const pad = lerp(2, 16, e);
    const left = pad + gutter * (1 - e);
    const top = pad + FLAT.top * (1 - e);
    const aw = W - left - pad;
    const ah = H - top - pad;
    const bw = Math.max(1e-6, b.maxx - b.minx);
    const bh = Math.max(1e-6, b.maxy - b.miny);
    const s = Math.min(aw / bw, ah / bh);
    // Flat: the grid sits at the top on wide cards (the stats fill the space
    // below it), centred on narrow ones. The skyline is always centred.
    const align = lerp(wide ? 0 : 0.5, 0.5, e);
    const ox = left + (aw - bw * s) / 2 - b.minx * s;
    const oy = top + (ah - bh * s) * align - b.miny * s;
    const { cs, sn, se, ce } = cam;
    const px = (x: number, y: number) => ox + (x * cs - y * sn) * s;
    const py = (x: number, y: number, z: number) => oy + ((x * sn + y * cs) * se - z * ce) * s;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    order.sort((a, c) => (wk[a] + 0.5) * sn + (dy[a] + 0.5) * cs - ((wk[c] + 0.5) * sn + (dy[c] + 0.5) * cs));

    const w = lerp(FLAT.cell, 0.9, e);
    const off = (1 - w) / 2;
    const radius = lerp(0.17, 0.03, e) * s;
    const lift = 0.7 * e;
    const ex = col[0], ey = col[1], ez = col[2];

    for (let k = 0; k < n; k++) {
      const i = order[k];
      const x0 = wk[i] + off, y0 = dy[i] + off, x1 = x0 + w, y1 = y0 + w;
      const z = zs[i] + hover[i] * lift;
      const o = i * 24;
      // top
      polys[o] = px(x0, y0); polys[o + 1] = py(x0, y0, z);
      polys[o + 2] = px(x1, y0); polys[o + 3] = py(x1, y0, z);
      polys[o + 4] = px(x1, y1); polys[o + 5] = py(x1, y1, z);
      polys[o + 6] = px(x0, y1); polys[o + 7] = py(x0, y1, z);
      // +y face (left on screen)
      polys[o + 8] = px(x0, y1); polys[o + 9] = py(x0, y1, 0);
      polys[o + 10] = px(x1, y1); polys[o + 11] = py(x1, y1, 0);
      polys[o + 12] = polys[o + 4]; polys[o + 13] = polys[o + 5];
      polys[o + 14] = polys[o + 6]; polys[o + 15] = polys[o + 7];
      // +x face (right on screen)
      polys[o + 16] = px(x1, y0); polys[o + 17] = py(x1, y0, 0);
      polys[o + 18] = polys[o + 10]; polys[o + 19] = polys[o + 11];
      polys[o + 20] = polys[o + 4]; polys[o + 21] = polys[o + 5];
      polys[o + 22] = polys[o + 2]; polys[o + 23] = polys[o + 3];

      const tall = z * ce * s;
      let f = 0;
      if (tall > 0.35 && w * cs * s > 0.35) f |= 1;
      if (tall > 0.35 && w * sn * s > 0.35) f |= 2;
      faces[i] = f;

      const L = lv[i] * 3;
      let r = col[L], g = col[L + 1], bl = col[L + 2];
      const d = dim[i];
      if (d > 0.002) {
        r += (ex - r) * 0.72 * d; g += (ey - g) * 0.72 * d; bl += (ez - bl) * 0.72 * d;
      }
      const hv = hover[i];
      if (hv > 0.002) {
        const m = 0.16 * hv;
        r += (fg[0] - r) * m; g += (fg[1] - g) * m; bl += (fg[2] - bl) * m;
      }
      if (f & 1) {
        ctx.beginPath(); quadPath(ctx, polys, o + 8, 0);
        ctx.fillStyle = rgb(r * 0.84, g * 0.84, bl * 0.84); ctx.fill();
      }
      if (f & 2) {
        ctx.beginPath(); quadPath(ctx, polys, o + 16, 0);
        ctx.fillStyle = rgb(r * 0.68, g * 0.68, bl * 0.68); ctx.fill();
      }
      ctx.beginPath(); quadPath(ctx, polys, o, radius);
      ctx.fillStyle = rgb(r, g, bl); ctx.fill();
      if (hv > 0.02) {
        ctx.strokeStyle = rgba(fg, 0.85 * hv); ctx.lineWidth = 1.5; ctx.stroke();
      }
    }

    // Labels: along the top and left when flat, along the front edge in 3D.
    // Every month gets one, sized to the room it has. They fade, never pop.
    const a2 = 1 - smoothstep(0, 0.4, e);
    const a3 = smoothstep(0.62, 1, e);
    const months = cfg.current.months;
    if (a2 > 0.004) {
      const xs = months.map((m) => px(m.week + off, -0.3));
      const room = months.map((m, i) => (i + 1 < months.length ? xs[i + 1] - xs[i] : W - xs[i] + LABEL_GAP));
      const size = fitFont(room, monthW);
      ctx.font = "400 " + size + "px " + family;
      ctx.fillStyle = rgba(muted, a2);
      ctx.textAlign = "left";
      ctx.textBaseline = "bottom";
      months.forEach((m, i) => {
        const x = Math.min(xs[i], W - monthW[i] * size - 1);
        ctx.fillText(m.label, x, py(m.week + off, -0.3, 0) - 3);
      });
      ctx.font = font;
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      if (gutter > 0) for (const r of cfg.current.weekdays) ctx.fillText(r.label, px(0, r.day + 0.5) - 6, py(0, r.day + 0.5, 0));
    }
    if (a3 > 0.004) {
      // Text runs along the edge, so a word never drifts into the next weeks' bars.
      const ux = cs * s, uy = sn * se * s;
      const unit = Math.hypot(ux, uy);
      const room = months.map((m, i) => ((i + 1 < months.length ? months[i + 1].week : weeks) - m.week) * unit);
      const size = fitFont(room, monthW);
      ctx.font = "400 " + size + "px " + family;
      ctx.fillStyle = rgba(muted, a3);
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      const angle = Math.atan2(uy, ux);
      months.forEach((m, i) => {
        const len = (monthW[i] * size) / unit;
        const at = Math.min(m.week + 0.15, weeks - len);
        ctx.save();
        ctx.translate(px(at, 7.35), py(at, 7.35, 0));
        ctx.rotate(angle);
        ctx.fillText(m.label, 0, 0);
        ctx.restore();
      });
      ctx.font = font;
    }

    // The tooltip rides the active cell through morphs and orbits.
    if (activeIdx >= 0 && activeIdx < n) {
      const i = activeIdx;
      const z = zs[i] + hover[i] * lift;
      const tx = px(wk[i] + 0.5, dy[i] + 0.5);
      const ty = Math.min(py(wk[i] + off, dy[i] + off, z), py(wk[i] + off + w, dy[i] + off, z), py(wk[i] + off, dy[i] + off + w, z));
      const half = tipW / 2;
      const cx = Math.min(W - half - 2, Math.max(half + 2, tx));
      tip.style.transform = "translate(" + (cx - half).toFixed(1) + "px," + (ty - 8).toFixed(1) + "px) translateY(-100%)";
      tip.style.setProperty("--arrow", (tx - cx + half).toFixed(1) + "px");
    }
  };

  const tick = (now: number) => {
    raf = 0;
    const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
    last = now;
    let moving = false;
    if (t !== target) {
      const step = reduced ? 1 : (dt * 1000) / Math.max(1, cfg.current.duration);
      t = target > t ? Math.min(target, t + step) : Math.max(target, t - step);
      moving = true;
    }
    const ko = reduced ? 1 : 1 - Math.exp(-dt * 12);
    yaw += (yawGoal - yaw) * ko;
    elev += (elevGoal - elev) * ko;
    if (Math.abs(yawGoal - yaw) > 1e-4 || Math.abs(elevGoal - elev) > 1e-4) moving = true;
    else { yaw = yawGoal; elev = elevGoal; }
    const kc = reduced ? 1 : 1 - Math.exp(-dt * 7);
    for (let k = 0; k < 15; k++) {
      const d = colGoal[k] - col[k];
      if (Math.abs(d) > 0.4) { col[k] += d * kc; moving = true; } else col[k] = colGoal[k];
    }
    const kh = reduced ? 1 : 1 - Math.exp(-dt * 16);
    const kd = reduced ? 1 : 1 - Math.exp(-dt * 10);
    const leg = cfg.current.legendLevel;
    for (let i = 0; i < n; i++) {
      const hg = i === activeIdx ? 1 : 0;
      const dg = leg >= 0 && lv[i] !== leg ? 1 : 0;
      const h = hover[i], d = dim[i];
      if (h !== hg) { hover[i] = Math.abs(hg - h) < 0.003 ? hg : h + (hg - h) * kh; moving = true; }
      if (d !== dg) { dim[i] = Math.abs(dg - d) < 0.003 ? dg : d + (dg - d) * kd; moving = true; }
    }
    draw();
    if (moving) raf = requestAnimationFrame(tick);
  };

  function kick() {
    if (raf) return;
    last = performance.now();
    raf = requestAnimationFrame(tick);
  }

  // The active day is the hovered one, else the pinned one (tap, click or keyboard).
  const refreshActive = () => {
    const next = hovered >= 0 ? hovered : pinned;
    if (next === activeIdx) return;
    activeIdx = next;
    cfg.current.setActive(next);
    kick();
  };

  const hit = (x: number, y: number): number => {
    for (let k = n - 1; k >= 0; k--) {
      const i = order[k], o = i * 24;
      if (pointInQuad(polys, o, x, y)) return i;
      if (faces[i] & 1 && pointInQuad(polys, o + 8, x, y)) return i;
      if (faces[i] & 2 && pointInQuad(polys, o + 16, x, y)) return i;
    }
    return -1;
  };

  const local = (ev: PointerEvent) => {
    const r = canvas.getBoundingClientRect();
    return [ev.clientX - r.left, ev.clientY - r.top] as const;
  };

  const cursor = () => (target === 1 ? "grab" : "default");
  let drag: { id: number; x: number; y: number; yaw: number; elev: number; moved: boolean; orbit: boolean } | null = null;

  const onDown = (ev: PointerEvent) => {
    if (ev.button !== 0) return;
    // Orbit with a mouse only: on touch a drag always scrolls the page.
    const can = target === 1 && ev.pointerType === "mouse";
    drag = { id: ev.pointerId, x: ev.clientX, y: ev.clientY, yaw: yawGoal, elev: elevGoal, moved: false, orbit: can };
    if (can) {
      try { canvas.setPointerCapture(ev.pointerId); } catch { /* capture is a nicety */ }
    }
  };

  const onMove = (ev: PointerEvent) => {
    if (drag && drag.orbit && ev.pointerId === drag.id) {
      const dx = ev.clientX - drag.x, dyy = ev.clientY - drag.y;
      if (drag.moved || Math.hypot(dx, dyy) > 4) {
        drag.moved = true;
        yawGoal = Math.min(YAW_RANGE[1] - YAW_3D, Math.max(YAW_RANGE[0] - YAW_3D, drag.yaw + dx * 0.006));
        elevGoal = Math.min(ELEV_RANGE[1] - ELEV_3D, Math.max(ELEV_RANGE[0] - ELEV_3D, drag.elev + dyy * 0.004));
        canvas.style.cursor = "grabbing";
        hovered = -1;
        refreshActive();
        kick();
        return;
      }
    }
    if (ev.pointerType !== "mouse") return;
    const [x, y] = local(ev);
    const i = hit(x, y);
    if (i !== hovered) { hovered = i; refreshActive(); }
    canvas.style.cursor = target === 1 ? "grab" : i >= 0 ? "pointer" : "default";
  };

  const onUp = (ev: PointerEvent) => {
    if (!drag || ev.pointerId !== drag.id) return;
    const wasMoved = drag.moved;
    drag = null;
    if (canvas.hasPointerCapture(ev.pointerId)) canvas.releasePointerCapture(ev.pointerId);
    canvas.style.cursor = cursor();
    if (wasMoved) return;
    const [x, y] = local(ev);
    const i = hit(x, y);
    pinned = i === pinned ? -1 : i;
    if (ev.pointerType !== "mouse") hovered = -1;
    refreshActive();
  };

  const onCancel = () => { drag = null; };
  const onLeave = () => { if (!drag) { hovered = -1; refreshActive(); } };
  const onDbl = () => { yawGoal = 0; elevGoal = 0; kick(); };

  const onKey = (ev: KeyboardEvent) => {
    const keys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "Escape"];
    if (!keys.includes(ev.key) || !n) return;
    ev.preventDefault();
    if (ev.key === "Escape") { pinned = -1; hovered = -1; refreshActive(); return; }
    let i = pinned >= 0 ? pinned : activeIdx >= 0 ? activeIdx : n - 1;
    if (pinned >= 0 || activeIdx >= 0) {
      if (ev.key === "ArrowLeft") i -= 7;
      if (ev.key === "ArrowRight") i += 7;
      if (ev.key === "ArrowUp") i -= 1;
      if (ev.key === "ArrowDown") i += 1;
      if (ev.key === "Home") i = 0;
      if (ev.key === "End") i = n - 1;
    }
    i = Math.max(0, Math.min(n - 1, i));
    pinned = i;
    hovered = -1;
    refreshActive();
    cfg.current.announce(i);
  };

  const onBlur = () => { pinned = -1; refreshActive(); };

  const setTarget = () => {
    const goal = cfg.current.target;
    if (goal === target) return;
    target = goal;
    if (goal === 0) { yawGoal = 0; elevGoal = 0; }
    canvas.style.cursor = cursor();
    kick();
  };

  load();
  retheme();
  relayout();

  // The card decides when the skyline rises (first view, or the toggle); under
  // reduced motion it starts in its final view.
  if (reduced) t = cfg.current.target;
  setTarget();
  kick();

  const ro = new ResizeObserver(() => {
    if (Math.round(stage.clientWidth) !== W || Math.round(stage.clientHeight) !== H) relayout();
  });
  ro.observe(stage);

  // The site's theme toggle sets data-theme on <html>; the OS setting covers the rest.
  const mo = new MutationObserver(retheme);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  const onReduce = () => { reduced = reduceMq.matches; kick(); };
  reduceMq.addEventListener("change", onReduce);
  darkMq.addEventListener("change", retheme);
  // Canvas text needs the web font; redraw once it is in.
  document.fonts?.ready.then(() => { ctx.font = font; draw(); });

  canvas.addEventListener("pointerdown", onDown);
  canvas.addEventListener("pointermove", onMove);
  canvas.addEventListener("pointerup", onUp);
  canvas.addEventListener("pointercancel", onCancel);
  canvas.addEventListener("pointerleave", onLeave);
  canvas.addEventListener("dblclick", onDbl);
  canvas.addEventListener("keydown", onKey);
  canvas.addEventListener("blur", onBlur);

  return {
    kick: () => { setTarget(); kick(); },
    load: () => { load(); retheme(); relayout(); },
    retheme,
    tipWidth: (w: number) => { tipW = w; draw(); },
    destroy: () => {
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
      mo.disconnect();
      reduceMq.removeEventListener("change", onReduce);
      darkMq.removeEventListener("change", retheme);
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onCancel);
      canvas.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("dblclick", onDbl);
      canvas.removeEventListener("keydown", onKey);
      canvas.removeEventListener("blur", onBlur);
    },
  };
}

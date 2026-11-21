// Hand-drawn primitives: a TypeScript port of the app's
// MyLifeStats/DesignSystem/SketchyShapes.swift (MyGrowth 3.0.0).
//
// Same rules as the app:
// * Every irregularity comes from a seed built from a stable string key
//   (FNV-1a), drawn through SplitMix64. Never Math.random(), never time.
//   The same seed and size give the same path on every load.
// * Outlines read as ink: corners stay within about 1 px of their place, the
//   stroke is open, runs past one or two corners and varies in width.
// * Data marks (heatmap cells, bars, chart lines) are never drawn with this.
//
// Random values are drawn in the same order as the Swift code, so a seed
// produces the same geometry here as in the app.

const MASK = (1n << 64n) - 1n;
const GOLDEN = 0x9e3779b97f4a7c15n;

/** FNV-1a over the UTF-8 bytes of `key`. */
export function seedFrom(key: string): bigint {
  let h = 0xcbf29ce484222325n;
  for (const byte of new TextEncoder().encode(key)) {
    h ^= BigInt(byte);
    h = (h * 0x00000100000001b3n) & MASK;
  }
  return h;
}

/** An independent stream for a further pass. */
export function derived(seed: bigint, n: number): bigint {
  return (seed + ((BigInt(n) * GOLDEN) & MASK)) & MASK;
}

/** SplitMix64, as in the app. */
export class SketchRandom {
  private state: bigint;
  constructor(seed: bigint) {
    this.state = seed & MASK;
  }
  next(): bigint {
    this.state = (this.state + GOLDEN) & MASK;
    let z = this.state;
    z = ((z ^ (z >> 30n)) * 0xbf58476d1ce4e5b9n) & MASK;
    z = ((z ^ (z >> 27n)) * 0x94d049bb133111ebn) & MASK;
    return z ^ (z >> 31n);
  }
  /** 0 ..< 1 */
  unit(): number {
    return Number(this.next() >> 11n) / 2 ** 53;
  }
  /** -1 ... 1 */
  signed(): number {
    return this.unit() * 2 - 1;
  }
  range(lo: number, hi: number): number {
    return lo + (hi - lo) * this.unit();
  }
  /** `Int(next() % n)` */
  mod(n: number): number {
    return Number(this.next() % BigInt(n));
  }
}

export interface Jitter {
  amplitude: number;
  cornerJitter: number;
  cornerVariance: number;
  overshoot: [number, number];
  gap: [number, number];
  width: [number, number];
  taper: number;
  secondPass: boolean;
}

/** `SG.Jitter.card`: open, 4 to 6 px overshoot, ink 0.8x to 1.3x, second pass. */
export const CARD: Jitter = {
  amplitude: 0.5, cornerJitter: 0.4, cornerVariance: 0.08,
  overshoot: [4, 6], gap: [2, 4], width: [0.8, 1.3], taper: 10, secondPass: true,
};

/** `SG.Jitter.control`: chips, buttons, controls. */
export const CONTROL: Jitter = {
  amplitude: 0.25, cornerJitter: 0.25, cornerVariance: 0.05,
  overshoot: [2, 3], gap: [1.5, 3], width: [0.8, 1.3], taper: 6, secondPass: false,
};

export const STEP = 4;
/** `SG.Stroke.contour` */
export const CONTOUR = 1.25;
export const SECOND_PASS_OPACITY = 0.35;

type P = [number, number];
interface Stroke { points: P[]; startLength: number }
export interface InkGeometry {
  loop: P[];
  normals: P[];
  strokes: Stroke[];
  phases: [number, number];
}

const add = (a: P, b: P): P => [a[0] + b[0], a[1] + b[1]];
const mul = (a: P, k: number): P => [a[0] * k, a[1] * k];
const dist = (a: P, b: P) => Math.hypot(b[0] - a[0], b[1] - a[1]);

/** `SketchGeometry.ink`: the rounded rect a pen would draw in w x h. */
export function inkGeometry(
  w: number, h: number, cornerRadius: number, j: Jitter, lineWidth: number, seed: bigint,
): InkGeometry | null {
  const inset = lineWidth * 0.7 + j.amplitude + j.cornerJitter;
  const minX = inset, minY = inset, maxX = w - inset, maxY = h - inset;
  if (maxX - minX <= 4 || maxY - minY <= 4) return null;
  const rng = new SketchRandom(seed);
  const rMax = Math.min(maxX - minX, maxY - minY) / 2;
  const base = Math.min(Math.max(0, cornerRadius), rMax);
  const rc = [0, 1, 2, 3].map(() => Math.min(rMax, Math.max(0, base * (1 + j.cornerVariance * rng.signed()))));
  const cj: P[] = [0, 1, 2, 3].map(() => {
    const x = j.cornerJitter * rng.signed();
    const y = j.cornerJitter * rng.signed();
    return [x, y];
  });
  const bows = [0, 1, 2, 3].map(() => j.amplitude * rng.signed());
  const openSide = rng.mod(4);
  const openAt = 0.15 + 0.15 * rng.unit();
  const openGap = rng.range(j.gap[0], j.gap[1]);
  const openOverlaps = rng.unit() < 0.5;
  const twoOvershoots = rng.unit() < 0.35;
  const overshootA = rng.mod(4);
  const overshootB = (overshootA + 1 + rng.mod(3)) % 4;
  const overshootLength = [0, 1, 2, 3].map(() => rng.range(j.overshoot[0], j.overshoot[1]));
  const leadIn = [0, 1, 2, 3].map(() => 0.5 + 1.5 * rng.unit());
  const phases: [number, number] = [rng.unit() * 2 * Math.PI, rng.unit() * 2 * Math.PI];

  // Corners TL 0, TR 1, BR 2, BL 3. Side i runs from corner i to corner i + 1.
  const centres: P[] = [
    [minX + rc[0], minY + rc[0]], [maxX - rc[1], minY + rc[1]],
    [maxX - rc[2], maxY - rc[2]], [minX + rc[3], maxY - rc[3]],
  ];
  const dirs: P[] = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const outward: P[] = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  const sideStart = (i: number) => add(add(centres[i], mul(outward[i], rc[i])), cj[i]);
  const sideEnd = (i: number) => {
    const c = (i + 1) % 4;
    return add(add(centres[c], mul(outward[i], rc[c])), cj[c]);
  };

  const loop: P[] = [];
  const normals: P[] = [];
  const sideStartIndex = [0, 0, 0, 0];
  const sideCount = [0, 0, 0, 0];
  const arcStartCorner = new Map<number, number>();
  for (let i = 0; i < 4; i++) {
    const s = sideStart(i), e = sideEnd(i);
    const n = Math.max(2, Math.trunc(dist(s, e) / STEP));
    sideStartIndex[i] = loop.length;
    sideCount[i] = n;
    for (let k = 0; k < n; k++) {
      const t = k / n;
      const p: P = [s[0] + (e[0] - s[0]) * t, s[1] + (e[1] - s[1]) * t];
      loop.push(add(p, mul(outward[i], bows[i] * Math.sin(Math.PI * t))));
      normals.push(outward[i]);
    }
    const c = (i + 1) % 4;
    arcStartCorner.set(loop.length, c);
    const a0 = Math.atan2(outward[i][1], outward[i][0]);
    const segments = Math.max(3, Math.trunc((rc[c] * Math.PI) / 2 / STEP) + 2);
    for (let k = 0; k < segments; k++) {
      const a = a0 + (Math.PI / 2) * (k / segments);
      const dir: P = [Math.cos(a), Math.sin(a)];
      loop.push(add(add(centres[c], mul(dir, rc[c])), cj[c]));
      normals.push(dir);
    }
  }
  const count = loop.length;
  const cumulative = new Array<number>(count + 1).fill(0);
  for (let k = 0; k < count; k++) cumulative[k + 1] = cumulative[k] + dist(loop[k], loop[(k + 1) % count]);

  const overshootCorners = new Set<number>();
  if (j.overshoot[1] > 0) {
    overshootCorners.add(overshootA);
    if (twoOvershoots) overshootCorners.add(overshootB);
  }

  const openIndex = sideStartIndex[openSide] + Math.max(1, Math.trunc(openAt * sideCount[openSide]));
  const strokes: Stroke[] = [];
  let current: P[] = [];
  let currentStart = cumulative[openIndex];
  let k = 0;
  while (k < count) {
    const index = (openIndex + k) % count;
    const corner = arcStartCorner.get(index);
    if (corner !== undefined && overshootCorners.has(corner)) {
      const incoming = (corner + 3) % 4;
      const from = loop[index];
      current.push(from);
      const run = rc[corner] + overshootLength[corner];
      for (let d = STEP; d < run; d += STEP) current.push(add(from, mul(dirs[incoming], d)));
      current.push(add(from, mul(dirs[incoming], run)));
      strokes.push({ points: current, startLength: currentStart });
      const nextIndex = sideStartIndex[corner];
      const to = loop[nextIndex];
      const back = rc[corner] * 0.6 + leadIn[corner];
      current = [add(to, mul(dirs[corner], -back)), add(to, mul(dirs[corner], -back / 2))];
      currentStart = cumulative[nextIndex] - back;
      k += (nextIndex - index + count) % count;
      continue;
    }
    current.push(loop[index]);
    k += 1;
  }
  if (openOverlaps) {
    let run = 0;
    let m = 0;
    const inward = mul(outward[openSide], -0.8);
    while (run < openGap && m < count) {
      const a = loop[(openIndex + m) % count], b = loop[(openIndex + m + 1) % count];
      run += dist(a, b);
      current.push(add(b, mul(inward, Math.min(1, run / Math.max(openGap, 0.01)))));
      m += 1;
    }
  } else {
    let trimmed = 0;
    while (current.length > 2 && trimmed < openGap) {
      trimmed += dist(current[current.length - 1], current[current.length - 2]);
      current.pop();
    }
  }
  strokes.push({ points: current, startLength: currentStart });
  return { loop, normals, strokes, phases };
}

function widthFactor(s: number, phases: [number, number], range: [number, number]) {
  const wave = 0.6 * Math.sin((2 * Math.PI * s) / 97 + phases[0]) + 0.4 * Math.sin((2 * Math.PI * s) / 41 + phases[1]);
  const mid = (range[0] + range[1]) / 2, half = (range[1] - range[0]) / 2;
  return mid + half * wave;
}

const f = (n: number) => Math.round(n * 100) / 100;

/** Douglas-Peucker: drops points that lie within `eps` px of the line through
 *  their neighbours. The drawn shape moves by at most `eps`; straight runs of
 *  the 4 px sampling collapse to their ends, so the SVG stays small. */
function simplify(pts: P[], eps: number): P[] {
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack: [number, number][] = [[0, pts.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop()!;
    const [ax, ay] = pts[a], [bx, by] = pts[b];
    const dx = bx - ax, dy = by - ay, len = Math.hypot(dx, dy) || 1e-9;
    let max = 0, idx = -1;
    for (let i = a + 1; i < b; i++) {
      const d = Math.abs(dy * (pts[i][0] - ax) - dx * (pts[i][1] - ay)) / len;
      if (d > max) { max = d; idx = i; }
    }
    if (max > eps && idx > 0) { keep[idx] = 1; stack.push([a, idx], [idx, b]); }
  }
  return pts.filter((_, i) => keep[i]);
}

/** Closed polygon as compact SVG: absolute start, then relative steps at
 *  0.1 px (the simplification tolerance is finer than the display). */
function polygon(points: P[]): string {
  const pts = simplify(points, 0.06);
  if (pts.length === 0) return "";
  const r = (n: number) => Math.round(n * 10);
  let px = r(pts[0][0]), py = r(pts[0][1]);
  let d = `M${px / 10} ${py / 10}l`;
  for (let i = 1; i < pts.length; i++) {
    const x = r(pts[i][0]), y = r(pts[i][1]);
    const dx = (x - px) / 10, dy = (y - py) / 10;
    if (dx === 0 && dy === 0) continue;
    d += `${i > 1 && dx >= 0 ? " " : ""}${dx}${dy >= 0 ? " " : ""}${dy}`;
    px = x; py = y;
  }
  return d + "z";
}

/** A filled ribbon along `points`, tapering to 35 % over `taper` at both ends. */
function ribbon(points: P[], startLength: number, lineWidth: number, taper: number,
  phases: [number, number], range: [number, number]): string {
  if (points.length < 2) return "";
  const lengths = [0];
  for (let k = 1; k < points.length; k++) lengths.push(lengths[k - 1] + dist(points[k - 1], points[k]));
  const total = lengths[lengths.length - 1];
  if (total <= 0.5) return "";
  const left: P[] = [], right: P[] = [];
  for (let k = 0; k < points.length; k++) {
    const a = points[Math.max(0, k - 1)], b = points[Math.min(points.length - 1, k + 1)];
    let tx = b[0] - a[0], ty = b[1] - a[1];
    const len = Math.max(0.0001, Math.hypot(tx, ty));
    tx /= len; ty /= len;
    const edge = Math.min(lengths[k], total - lengths[k]);
    const taperFactor = taper > 0 ? Math.min(1, 0.35 + (0.65 * edge) / taper) : 1;
    const wd = (lineWidth * widthFactor(startLength + lengths[k], phases, range) * taperFactor) / 2;
    left.push([points[k][0] - ty * wd, points[k][1] + tx * wd]);
    right.push([points[k][0] + ty * wd, points[k][1] - tx * wd]);
  }
  return polygon(left.concat(right.reverse()));
}

export interface InkPaths {
  /** Closed centreline: fill it for a drawn card surface. */
  fill: string;
  /** The outline as ink: fill it with the outline colour. */
  ink: string;
  /** Faint second pass (large shapes only): fill at SECOND_PASS_OPACITY. */
  second: string;
}

const cache = new Map<string, InkPaths>();

/** All paths for one hand-drawn rounded rect, cached per key (half-px grid). */
export function inkRect(opts: {
  seed: string; width: number; height: number; radius?: number; jitter?: Jitter; lineWidth?: number;
}): InkPaths {
  const w = Math.round(opts.width * 2) / 2, h = Math.round(opts.height * 2) / 2;
  const radius = opts.radius ?? 14, j = opts.jitter ?? CARD, lw = opts.lineWidth ?? CONTOUR;
  const key = `${opts.seed}|${w}|${h}|${radius}|${lw}|${j === CARD ? "c" : j === CONTROL ? "k" : JSON.stringify(j)}`;
  const hit = cache.get(key);
  if (hit) return hit;
  const seed = seedFrom(opts.seed);
  const g = inkGeometry(w, h, radius, j, lw, seed);
  let out: InkPaths = { fill: "", ink: "", second: "" };
  if (g) {
    const ink = g.strokes.map((s) => ribbon(s.points, s.startLength, lw, j.taper, g.phases, j.width)).join("");
    let second = "";
    if (j.secondPass && Math.min(w, h) >= 60 && g.loop.length > 8) {
      const rng = new SketchRandom(derived(seed, 77));
      const side = rng.unit() < 0.5 ? -1 : 1;
      const coverage = rng.range(0.6, 0.8);
      const start = Math.trunc(rng.unit() * g.loop.length);
      const n = Math.trunc(coverage * g.loop.length);
      const pts: P[] = [];
      for (let k = 0; k < n; k++) {
        const i = (start + k) % g.loop.length;
        pts.push([g.loop[i][0] + g.normals[i][0] * side, g.loop[i][1] + g.normals[i][1] * side]);
      }
      second = ribbon(pts, start * STEP, lw * 0.7, j.taper * 1.5, [g.phases[1], g.phases[0]], j.width);
    }
    out = { fill: polygon(g.loop), ink, second };
  }
  if (cache.size > 400) cache.clear();
  cache.set(key, out);
  return out;
}

/** `SketchGeometry.inkLine`: an exact straight line with open, tapered ends. */
export function inkLine(length: number, lineWidth: number, seed: string, thickness = 4): string {
  if (length <= 6) return "";
  const rng = new SketchRandom(seedFrom(seed));
  const head = 0.5 + 2 * rng.unit(), tail = 0.5 + 2 * rng.unit();
  const phases: [number, number] = [rng.unit() * 2 * Math.PI, rng.unit() * 2 * Math.PI];
  const n = Math.max(2, Math.trunc((length - head - tail) / STEP));
  const pts: P[] = [];
  for (let k = 0; k <= n; k++) pts.push([head + ((length - head - tail) * k) / n, thickness / 2]);
  return ribbon(pts, 0, lineWidth, 6, phases, [0.8, 1.3]);
}

/** `SketchGeometry.rule`: a hand-drawn underline (stroke it, round caps). */
export function rule(width: number, height: number, seed: string, double = false, j: Jitter = CONTROL): string {
  if (width <= 0) return "";
  const rng = new SketchRandom(seedFrom(seed));
  const a = Math.max(0.4, Math.min(j.amplitude * 2.4, height / 2));
  const y = height / 2;
  const p0: P = [0, y + a * 0.5 * rng.signed()];
  const p1: P = [width, y - a * (0.4 + 0.6 * rng.unit())];
  const c1: P = [width * 0.33, y + a * rng.signed()];
  const c2: P = [width * 0.7, y + a * rng.signed()];
  let d = `M${f(p0[0])} ${f(p0[1])}C${f(c1[0])} ${f(c1[1])} ${f(c2[0])} ${f(c2[1])} ${f(p1[0])} ${f(p1[1])}`;
  if (double) {
    const q0: P = [width * (0.06 + 0.06 * rng.unit()), y + a * 1.6];
    const q1: P = [width * (0.62 + 0.16 * rng.unit()), y + a * (1.0 + 0.5 * rng.unit())];
    const qc: P = [(q0[0] + q1[0]) / 2, y + a * (1.4 + rng.signed())];
    d += `M${f(q0[0])} ${f(q0[1])}Q${f(qc[0])} ${f(qc[1])} ${f(q1[0])} ${f(q1[1])}`;
  }
  return d;
}

function catmullRom(p: P[], closed: boolean): string {
  if (p.length < 3) return "";
  const count = p.length;
  const at = (i: number) => (closed ? p[((i % count) + count) % count] : p[Math.min(Math.max(i, 0), count - 1)]);
  let d = `M${f(p[0][0])} ${f(p[0][1])}`;
  const segments = closed ? count : count - 1;
  for (let i = 0; i < segments; i++) {
    const p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2);
    d += `C${f(p1[0] + (p2[0] - p0[0]) / 6)} ${f(p1[1] + (p2[1] - p0[1]) / 6)} ${f(p2[0] - (p3[0] - p1[0]) / 6)} ${f(p2[1] - (p3[1] - p1[1]) / 6)} ${f(p2[0])} ${f(p2[1])}`;
  }
  return closed ? d + "Z" : d;
}

/** `SketchGeometry.blob`: the accent node (fill it). */
export function blob(size: number, seed: string, wobble = 0.12): string {
  const r = size / 2;
  const rng = new SketchRandom(seedFrom(seed));
  const phase = rng.unit() * Math.PI * 2;
  const pts: P[] = [];
  for (let i = 0; i < 7; i++) {
    const t = phase + (i / 7) * Math.PI * 2 + rng.signed() * 0.15;
    const rr = r * (1 - wobble + wobble * rng.signed());
    pts.push([r + Math.cos(t) * rr, r + Math.sin(t) * rr]);
  }
  return catmullRom(pts, true);
}

/** `SketchGeometry.ring`: a loose circle that overshoots its start (stroke it). */
export function ring(size: number, seed: string, j: Jitter = CONTROL): string {
  const a = Math.min(j.amplitude, size * 0.04) * 1.6;
  const o = Math.min(j.overshoot[1], size * 0.08);
  const r = size / 2 - a;
  if (r <= 0) return "";
  const rng = new SketchRandom(seedFrom(seed));
  const start = -Math.PI / 2 + rng.signed() * 0.3;
  const sweep = Math.PI * 2 + o / r;
  const pts: P[] = [];
  for (let i = 0; i <= 10; i++) {
    const t = start + (sweep * i) / 10;
    const rr = r + a * rng.signed();
    pts.push([size / 2 + Math.cos(t) * rr, size / 2 + Math.sin(t) * rr]);
  }
  return catmullRom(pts, false);
}

/** `GaugeFill`: the filled part of today's tile, with a seeded wavy top. */
export function gaugeFill(w: number, h: number, level: number, seed: string): string {
  if (level <= 0) return "";
  if (level >= 1) return `M-2 -2H${w + 2}V${h + 2}H-2Z`;
  const top = h - h * level;
  const rng = new SketchRandom(seedFrom(seed));
  const phase = rng.unit() * Math.PI * 2;
  const crests = 2 + rng.unit();
  let d = `M-1 ${h + 1}L-1 ${f(top)}`;
  for (let i = 0; i <= 12; i++) {
    const t = i / 12;
    d += `L${f(-1 + (w + 2) * t)} ${f(top + 0.8 * Math.sin(t * crests * Math.PI + phase))}`;
  }
  return d + `L${w + 1} ${h + 1}Z`;
}

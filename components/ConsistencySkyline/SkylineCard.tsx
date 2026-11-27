"use client";

/*
 * Consistency skyline card: a year of example daily Consistency as the app's
 * Grid heatmap that rises into an isometric skyline the first time it is
 * seen. The DOM (title, toggle, stats, legend) and a static flat grid render
 * on the server; the canvas engine loads after first paint and takes over the
 * same fixed-size stage, so nothing on the page moves.
 *
 * Adapted from "Contribution Skyline" by Kedhareswer Naidu (MIT),
 * https://21st.dev/@kedhareswer/components/contribution-skyline. The full
 * notice is in ./model.ts.
 */
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { InkFrame } from "@/components/Ink";
import { fill, type Site } from "@/lib/dict";
import { buildGrid, computeStats, dayMs, monthLabels, LEVEL_FLOORS, GOAL } from "./model";
import type { Engine, EngineConfig } from "./engine";
import s from "./Skyline.module.css";

type View = "2d" | "3d";
type Strings = Site["skyline"];

export type SkylineCardProps = {
  values: number[];
  end: string;
  /** BCP 47 tag of the page (Intl formatting). */
  lang: string;
  t: Strings;
  less: string;
  more: string;
};

const DURATION = 1300;

export function SkylineCard({ values, end, lang, t, less, more }: SkylineCardProps) {
  const model = useMemo(() => {
    const grid = buildGrid(values, end, 1);
    return { ...grid, stats: computeStats(grid.cells), months: monthLabels(grid.cells, grid.weeks, lang) };
  }, [values, end, lang]);

  const fmt = useMemo(() => {
    const pct = new Intl.NumberFormat(lang, { style: "percent", maximumFractionDigits: 0 });
    const days = new Intl.NumberFormat(lang, { style: "unit", unit: "day", unitDisplay: "long" });
    const short = new Intl.DateTimeFormat(lang, { month: "short", day: "numeric", timeZone: "UTC" });
    const year = new Intl.DateTimeFormat(lang, { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
    const long = new Intl.DateTimeFormat(lang, { weekday: "long", month: "long", day: "numeric", timeZone: "UTC" });
    const wd = new Intl.DateTimeFormat(lang, { weekday: "short", timeZone: "UTC" });
    /** "12 days" split into number and word, in the page's language and plural rules. */
    const dayParts = (n: number) => {
      const parts = days.formatToParts(n);
      const value = parts.filter((p) => p.type === "integer" || p.type === "group").map((p) => p.value).join("");
      const unit = parts.filter((p) => p.type === "unit").map((p) => p.value).join("").trim();
      return { value: value || String(n), unit };
    };
    return { pct: (v: number) => pct.format(v), short, year, long, wd, dayParts };
  }, [lang]);

  const range = (a: string | null, b: string | null, withYear = false) => {
    if (!a || !b) return "";
    const f = withYear ? fmt.year : fmt.short;
    return fill(t.range, { a: f.format(dayMs(a)), b: f.format(dayMs(b)) });
  };
  const describe = (i: number) => {
    const c = model.cells[i];
    if (!c) return "";
    const date = fmt.long.format(dayMs(c.date));
    return c.level === 0 ? fill(t.empty, { date }) : fill(t.tooltip, { pct: fmt.pct(c.value), date });
  };

  const { stats } = model;
  const longest = fmt.dayParts(stats.longest.days);
  const current = fmt.dayParts(stats.current.days);
  const statBlocks = [
    { key: "avg", label: t.avg, value: fmt.pct(stats.average), unit: "", sub: range(stats.first, stats.last, true) },
    { key: "week", label: t.bestWeek, value: fmt.pct(stats.bestWeek.value), unit: "", sub: range(stats.bestWeek.start, stats.bestWeek.end) },
    { key: "longest", label: t.longest, value: longest.value, unit: longest.unit, sub: range(stats.longest.start, stats.longest.end) },
    { key: "current", label: t.current, value: current.value, unit: current.unit, sub: range(stats.current.start, stats.current.end) },
  ];
  const levelNames = [
    t.levelEmpty,
    fill(t.levelUnder, { pct: fmt.pct(LEVEL_FLOORS[2]) }),
    fill(t.range, { a: fmt.pct(LEVEL_FLOORS[2]), b: fmt.pct(0.79) }),
    fill(t.range, { a: fmt.pct(LEVEL_FLOORS[3]), b: fmt.pct(0.99) }),
    fmt.pct(1),
  ];

  // Flat until the card is first seen, then the skyline; the toggle after that.
  const [view, setView] = useState<View>("2d");
  const [active, setActive] = useState(-1);
  const [legendLevel, setLegendLevel] = useState(-1);
  const [announce, setAnnounce] = useState("");
  const [ready, setReady] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const engine = useRef<Engine | null>(null);

  const weekdays = useMemo(() => {
    const out: { day: number; label: string }[] = [];
    for (let d = 0; d < 7 && d < model.cells.length; d++) {
      const ms = dayMs(model.cells[d].date);
      const dow = new Date(ms).getUTCDay();
      if (dow === 1 || dow === 3 || dow === 5) out.push({ day: d, label: fmt.wd.format(ms) });
    }
    return out;
  }, [model, fmt]);

  // Everything the render loop reads, refreshed every render.
  const cfg = useRef<EngineConfig | null>(null);
  // No deps on purpose: refreshed after every render; setActive is passed, not called.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(() => {
    cfg.current = {
    cells: model.cells, weeks: model.weeks, months: model.months, weekdays,
    target: view === "3d" ? 1 : 0, legendLevel, duration: DURATION,
    setActive, announce: (i: number) => setAnnounce(describe(i)),
    };
  });

  // The engine waits for the browser to be idle after first paint.
  useEffect(() => {
    let cancelled = false;
    const start = () => {
      import("./engine").then(({ createEngine }) => {
        const root = rootRef.current, stage = stageRef.current, canvas = canvasRef.current, tip = tipRef.current;
        if (cancelled || !root || !stage || !canvas || !tip || !cfg.current) return;
        engine.current = createEngine(root, stage, canvas, tip, cfg as { current: EngineConfig });
        if (engine.current) setReady(true);
      });
    };
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number; cancelIdleCallback?: (id: number) => void };
    const id = w.requestIdleCallback ? w.requestIdleCallback(start, { timeout: 2500 }) : window.setTimeout(start, 600);
    return () => {
      cancelled = true;
      if (w.cancelIdleCallback) w.cancelIdleCallback(id); else window.clearTimeout(id);
      engine.current?.destroy();
      engine.current = null;
    };
  }, []);

  // Rise once, the first time a good part of the card is in view.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || !("IntersectionObserver" in window)) { setView("3d"); return; }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { setView("3d"); io.disconnect(); }
    }, { threshold: 0.35 });
    io.observe(stage);
    return () => io.disconnect();
  }, []);

  useEffect(() => { engine.current?.kick(); }, [view, legendLevel, ready]);
  useEffect(() => { engine.current?.load(); }, [model]);

  // The tooltip's width keeps it inside the card; measure when its text changes.
  useLayoutEffect(() => {
    const tip = tipRef.current;
    if (tip && active >= 0) engine.current?.tipWidth(tip.offsetWidth);
  }, [active, model]);

  // Static flat grid, painted until the engine takes over: one path per level.
  const placeholder = useMemo(() => {
    const d = ["", "", "", "", ""];
    for (const c of model.cells) d[c.level] += `M${c.week + 0.1} ${c.day + 0.1}h.8v.8h-.8z`;
    return d;
  }, [model]);

  const is3d = view === "3d";
  const activeCell = active >= 0 ? model.cells[active] : undefined;

  const renderStats = (where: "corners" | "row") => (
    <dl className={where === "corners" ? s.corners : s.row}>
      {statBlocks.map((b) => (
        <div key={b.key} className={s.stat} data-stat={b.key}>
          <dt className={s.statLabel}>{b.label}</dt>
          <dd className={s.statValue}>
            <span className={s.statNum} suppressHydrationWarning>{b.value}</span>
            {b.unit && <span className={s.statUnit} suppressHydrationWarning>{b.unit}</span>}
          </dd>
          <dd className={s.statSub} suppressHydrationWarning>{b.sub}</dd>
        </div>
      ))}
    </dl>
  );

  return (
    <InkFrame seed="hero.skyline" className={s.card} hint={[600, 520]}>
      <div ref={rootRef} className={s.root} data-view={view} data-ready={ready ? "" : undefined}>
        <header className={s.head}>
          <div>
            <h2 className={s.title}>{t.title}</h2>
            <p className={s.caption}>{t.caption}</p>
          </div>
          <div role="group" aria-label={t.viewGroup} className={s.toggle}>
            <span aria-hidden="true" className={s.thumb} />
            {(["2d", "3d"] as const).map((v) => (
              <button key={v} type="button" aria-pressed={view === v} aria-label={v === "2d" ? t.flat : t.skyline}
                title={v === "2d" ? t.flat : t.skyline} onClick={() => setView(v)} className={s.toggleBtn}>
                {v === "2d" ? (
                  <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                    <rect x="1.5" y="1.5" width="5.5" height="5.5" rx="1" fill="currentColor" />
                    <rect x="9" y="1.5" width="5.5" height="5.5" rx="1" fill="currentColor" />
                    <rect x="1.5" y="9" width="5.5" height="5.5" rx="1" fill="currentColor" />
                    <rect x="9" y="9" width="5.5" height="5.5" rx="1" fill="currentColor" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                    <path d="M8 1.2 14.2 4.6v6.8L8 14.8 1.8 11.4V4.6Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M1.8 4.6 8 8l6.2-3.4M8 8v6.8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </header>

        <div className={s.body}>
          <div ref={stageRef} className={s.stage}>
            <svg className={s.placeholder} viewBox={`0 0 ${model.weeks} 7`} preserveAspectRatio="xMidYMin meet" aria-hidden="true">
              {placeholder.map((d, l) => <path key={l} d={d} className={s[`l${l}`]} />)}
            </svg>
            <canvas
              ref={canvasRef}
              tabIndex={0}
              role="img"
              aria-label={fill(t.aria, { a: fmt.year.format(dayMs(model.cells[0].date)), b: fmt.year.format(dayMs(end)), avg: fmt.pct(stats.average) })}
              className={s.canvas}
            />
            {renderStats("corners")}
          </div>
          {renderStats("row")}
          <div ref={tipRef} role="tooltip" aria-hidden={active < 0} className={s.tip} data-show={active >= 0 ? "" : undefined}>
            {activeCell ? (activeCell.level === 0
              ? <span>{fill(t.empty, { date: fmt.long.format(dayMs(activeCell.date)) })}</span>
              : <TipText template={t.tooltip} pct={fmt.pct(activeCell.value)} date={fmt.long.format(dayMs(activeCell.date))} />) : " "}
            <span aria-hidden="true" className={s.arrow} />
          </div>
        </div>

        <footer className={s.foot}>
          <p className={s.hint}>
            <span className={s.hintMouse}>{is3d ? t.hintOrbit : t.hintFlat}</span>
            <span className={s.hintTouch}>{t.hintTouch}</span>
          </p>
          <div className={s.legend} onMouseLeave={() => setLegendLevel(-1)}>
            <span>{less}</span>
            {levelNames.map((name, i) => (
              <button key={i} type="button" className={s.swatch}
                aria-label={fill(t.highlight, { level: name })} aria-pressed={legendLevel === i} title={name}
                onMouseEnter={() => setLegendLevel(i)} onFocus={() => setLegendLevel(i)} onBlur={() => setLegendLevel(-1)}
                onClick={() => setLegendLevel((l) => (l === i ? -1 : i))}>
                <span className={`${s.chip} ${s[`l${i}`]}`} />
              </button>
            ))}
            <span>{more}</span>
          </div>
        </footer>
        <p className={s.goal}>{fill(t.goal, { goal: fmt.pct(GOAL) })}</p>
        <p aria-live="polite" className="sr-only">{announce}</p>
      </div>
    </InkFrame>
  );
}

/** The tooltip with its percentage in bold, wherever the language puts it. */
function TipText({ template, pct, date }: { template: string; pct: string; date: string }) {
  const parts = template.split(/(\{pct\}|\{date\})/);
  return <>{parts.map((p, i) => (p === "{pct}" ? <strong key={i}>{pct}</strong> : p === "{date}" ? <span key={i}>{date}</span> : p))}</>;
}

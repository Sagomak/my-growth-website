"use client";

import type { CSSProperties } from "react";
import { inkLine } from "@/lib/ink";
import { consistencySeries } from "@/lib/sample";
import { rampVars } from "@/lib/colors";
import { useInView } from "@/components/Reveal";

const W = 420, H = 210, L = 34, R = 10, T = 12, B = 12;
const PW = W - L - R, PH = H - T - B;

/** Consistency over 30 days: the fill is there from the first frame, the line
 *  draws in over 3 s on the even curve (easeInOut), with a pen tip that fades
 *  over the last 10 %. Data and gridlines sit at exact positions. */
export function ConsistencyChart({ label, title, sub }: { label: string; title: string; sub: string }) {
  const [ref, inView] = useInView<HTMLDivElement>(0.35);
  const data = consistencySeries(30);
  const x = (i: number) => L + (PW * i) / (data.length - 1);
  const y = (v: number) => T + PH * (1 - v / 100);
  const line = data.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join("");
  const area = `${line}L${x(data.length - 1).toFixed(1)} ${y(0)}L${x(0).toFixed(1)} ${y(0)}Z`;
  const ticks = [0, 25, 50, 75, 100];
  return (
    <div ref={ref} className={`chart${inView ? " in" : ""}`}>
      <div className="chart-head">
        <span className="hand chart-title">{title}</span>
        <span className="chart-sub">{sub}</span>
        <span className="num chart-value">{data[data.length - 1]}%</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="chart-svg" role="img" aria-label={label}>
        {ticks.map((t) => (
          <g key={t}>
            <path d={inkLine(PW, t === 0 ? 1 : 0.5, `chart.grid.${t}`)} className="chart-grid"
              transform={`translate(${L} ${y(t) - 2})`} />
            <text x={L - 7} y={y(t) + 4} className="chart-axis num" textAnchor="end">{t}</text>
          </g>
        ))}
        <path d={area} className="chart-area" />
        <path d={line} className="chart-line" pathLength={1} />
        <circle r="5" className="chart-pen" style={{ offsetPath: `path("${line}")` } as CSSProperties} />
        <circle r="4.5" cx={x(data.length - 1)} cy={y(data[data.length - 1])} className="chart-end" />
      </svg>
    </div>
  );
}

const BARS = [22, 35, 18, 41, 30, 47, 38];

/** Bars grow from the baseline (1.2 s, the app's draw-in curve). */
export function BarsChart({ label, title, color, lang = "en" }: { label: string; title: string; color: string; lang?: string }) {
  const days = Array.from({ length: 7 }, (_, i) => new Intl.DateTimeFormat(lang, { weekday: "narrow" }).format(new Date(2024, 0, 1 + i)));
  const [ref, inView] = useInView<HTMLDivElement>(0.35);
  const w = 220, h = 140, top = 8, bottom = 22, max = 50;
  const bw = 18, step = (w - 16) / BARS.length;
  return (
    <div ref={ref} className={`bars ramp-host${inView ? " in" : ""}`} style={rampVars(color) as CSSProperties}>
      <span className="hand chart-title">{title}</span>
      <svg viewBox={`0 0 ${w} ${h}`} className="bars-svg" role="img" aria-label={label}>
        {BARS.map((v, i) => {
          const bh = ((h - top - bottom) * v) / max;
          const bx = 8 + step * i + (step - bw) / 2;
          return (
            <g key={i}>
              <rect x={bx} y={h - bottom - bh} width={bw} height={bh} rx="4" className="bar"
                style={{ "--i": i } as CSSProperties} />
              <text x={bx + bw / 2} y={h - 6} className="chart-axis hand-axis" textAnchor="middle">{days[i]}</text>
            </g>
          );
        })}
        <path d={inkLine(w - 8, 1, "bars.base")} className="chart-grid" transform={`translate(4 ${h - bottom - 2})`} />
      </svg>
    </div>
  );
}

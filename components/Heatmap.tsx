"use client";

import { useEffect, useId, useMemo, useRef, useState, type CSSProperties } from "react";
import { ring } from "@/lib/ink";
import { DAY, isoDay, level, startOfDay, weekday } from "@/lib/sample";
import { rampVars } from "@/lib/colors";
import { useInView } from "@/components/Reveal";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

type Props = {
  habit: string;
  /** Habit colour; without it the MyGrowth green ramp (mlsGreen1 to 4). */
  color?: string;
  /** Build time, so the first client render matches the static HTML. */
  initialNow: string;
  label: string;
  cell?: number;
  gap?: number;
  maxWeeks?: number;
  months?: boolean;
  className?: string;
  /** Draw the squares only after mount (below-the-fold grids keep the
   *  static HTML small; the box keeps its size, so nothing shifts). */
  deferCells?: boolean;
};

/** A year grid ending today, one square per day (the app's HeatmapCanvasGrid).
 *  Cells are exact; only today's circle is drawn by hand. */
export function Heatmap({ habit, color, initialNow, label, cell = 12, gap = 3, maxWeeks = 53, months = true, className, deferCells = false }: Props) {
  const [now, setNow] = useState(() => new Date(initialNow));
  const [weeks, setWeeks] = useState(maxWeeks);
  const [mounted, setMounted] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const [viewRef, inView] = useInView<HTMLDivElement>(0.2);

  useEffect(() => {
    // Static HTML carries the build date; move to the visitor's clock once.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(new Date());
    setMounted(true);
    const el = boxRef.current;
    if (!el) return;
    const fit = () => setWeeks(Math.max(8, Math.min(maxWeeks, Math.floor((el.clientWidth - 6 + gap) / (cell + gap)))));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, [cell, gap, maxWeeks]);

  const { cells, todayCell, monthLabels } = useMemo(() => {
    const today = startOfDay(now);
    const lastCol = weeks - 1;
    const firstDay = new Date(today.getTime() - (lastCol * 7 + weekday(today)) * DAY);
    const span = (today.getTime() - firstDay.getTime()) / DAY || 1;
    const out: { y: number; l: number; key: string }[][] = [];
    const labels: { x: number; text: string }[] = [];
    let todayPos = { x: 0, y: 0 };
    let lastMonth = -1;
    for (let c = 0; c <= lastCol; c++) {
      const column: { y: number; l: number; key: string }[] = [];
      out.push(column);
      for (let r = 0; r < 7; r++) {
        // Calendar days: add whole days on the date, so DST never skips one.
        const d = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() + c * 7 + r);
        if (d > today) continue;
        const key = isoDay(d);
        const t = (d.getTime() - firstDay.getTime()) / DAY / span;
        const x = c * (cell + gap), y = r * (cell + gap);
        column.push({ y, l: level(habit, key, t), key });
        if (r === 0 && d.getMonth() !== lastMonth) {
          if (c > 0 || d.getDate() <= 7) labels.push({ x, text: MONTHS[d.getMonth()] });
          lastMonth = d.getMonth();
        }
        if (d.getTime() === today.getTime()) todayPos = { x, y };
      }
    }
    // Drop a month label that would collide with the next one.
    const spaced = labels.filter((m, i) => i === labels.length - 1 || labels[i + 1].x - m.x >= 3 * (cell + gap));
    return { cells: out, todayCell: todayPos, monthLabels: spaced };
  }, [now, weeks, habit, cell, gap]);

  const w = weeks * (cell + gap) - gap;
  const top = months ? 16 : 0;
  const h = top + 7 * (cell + gap) - gap;
  const ringSize = cell + 8;
  const style = (color ? rampVars(color) : {}) as CSSProperties;
  // One shared cell shape, placed by <use>: the year is about 370 squares
  // per grid, so each square stays a few bytes in the static HTML.
  const cellId = `hc${useId().replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <div ref={boxRef} className={`heat-box ${className ?? ""}`}>
      <div ref={viewRef} className={`heat ${color ? "ramp-host" : "ramp-green"}${inView ? " in" : ""}`} style={style}>
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} role="img" aria-label={label} style={{ overflow: "visible" }}>
          {months && monthLabels.map((m) => (
            <text key={m.x} x={m.x} y={10} className="heat-month">{m.text}</text>
          ))}
          <g transform={`translate(0 ${top})`}>
            <defs><rect id={cellId} width={cell} height={cell} rx={+(cell * 0.22).toFixed(2)} /></defs>
            {(!deferCells || mounted) && cells.map((col, c) => (
              <g key={c} transform={`translate(${c * (cell + gap)} 0)`} style={{ "--c": c } as CSSProperties}>
                {col.map((k) => <use key={k.key} href={`#${cellId}`} y={k.y} className={`cell l${k.l}`} />)}
              </g>
            ))}
            <path className="heat-today" d={ring(ringSize, `heat.today.${habit}`)}
              style={{ "--ring-delay": `${weeks * 16 + 250}ms` } as CSSProperties}
              transform={`translate(${todayCell.x - 4} ${todayCell.y - 4})`} />
          </g>
        </svg>
      </div>
    </div>
  );
}

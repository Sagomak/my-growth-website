import type { CSSProperties } from "react";
import { SketchRandom, seedFrom } from "@/lib/ink";
import { HABIT, accentLight } from "@/lib/colors";

const COLORS = [HABIT.teal, HABIT.amber, HABIT.rose];
const WEEKS = 26, CELL = 10, GAP = 3;

/** Half a year of events: a day takes its category's colour. Fixed pattern
 *  from a seed (no dates involved), cells exact. */
export function EventsMosaic({ legend }: { legend: string[] }) {
  const r = new SketchRandom(seedFrom("events.mosaic"));
  const cells: { x: number; y: number; c: number }[] = [];
  let run = -1, left = 0;
  for (let c = 0; c < WEEKS; c++) {
    for (let d = 0; d < 7; d++) {
      if (left <= 0) {
        const u = r.unit();
        run = u < 0.62 ? -1 : u < 0.78 ? 0 : u < 0.92 ? 1 : 2;
        left = run === 0 ? 2 + Math.floor(r.unit() * 6) : run === 1 ? 1 + Math.floor(r.unit() * 3) : 1;
      }
      left--;
      cells.push({ x: c * (CELL + GAP), y: d * (CELL + GAP), c: run });
    }
  }
  const w = WEEKS * (CELL + GAP) - GAP, h = 7 * (CELL + GAP) - GAP;
  const vars = Object.fromEntries(COLORS.flatMap((c, i) => [[`--e${i}l`, accentLight(c)], [`--e${i}d`, c]])) as CSSProperties;
  return (
    <div className="events" style={vars}>
      <svg viewBox={`0 0 ${w} ${h}`} className="events-svg" role="img"
        aria-label={`Example events grid: half a year of days coloured by ${legend.join(", ")}.`}>
        {cells.map((k, i) => (
          <rect key={i} x={k.x} y={k.y} width={CELL} height={CELL} rx="2.2" className={k.c < 0 ? "ev-empty" : `ev ev${k.c}`} />
        ))}
      </svg>
      <ul className="events-legend" aria-hidden="true">
        {legend.map((l, i) => <li key={l}><i className={`ev ev${i}`} />{l}</li>)}
      </ul>
    </div>
  );
}

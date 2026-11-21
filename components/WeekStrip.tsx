"use client";

import { useEffect, useState } from "react";
import { inkRect, gaugeFill, CONTROL } from "@/lib/ink";
import { dayLevel, isoDay, level, startOfDay, weekday } from "@/lib/sample";

const LETTERS = ["M", "T", "W", "T", "F", "S", "S"];
const TW = 40, TH = 54;

/** The Dashboard week strip. Today's tile is a gauge that fills from the
 *  bottom with the share of the local day gone (DayGauge), updated once a
 *  minute, never animated on a tick. */
export function WeekStrip({ initialNow, label, todayLabel }: {
  initialNow: string; label: string; todayLabel: string;
}) {
  const [now, setNow] = useState(() => new Date(initialNow));
  useEffect(() => {
    // Static HTML carries the build time; move to the visitor's clock once.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(new Date());
    let id: number | undefined;
    // Tick on the minute boundary, then every minute.
    const first = window.setTimeout(() => {
      setNow(new Date());
      id = window.setInterval(() => setNow(new Date()), 60_000);
    }, 60_000 - (Date.now() % 60_000));
    return () => { clearTimeout(first); if (id) clearInterval(id); };
  }, []);

  const today = startOfDay(now);
  const monday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - weekday(today));
  const gauge = dayLevel(now);
  const pct = Math.round(gauge * 100);

  return (
    <ol className="week" aria-label={label}>
      {LETTERS.map((letter, i) => {
        const d = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + i);
        const isToday = d.getTime() === today.getTime();
        const future = d > today;
        const key = isoDay(d);
        const l = future ? 0 : Math.max(isToday ? 2 : 1, level("dashboard", key, 0.9));
        const p = inkRect({ seed: `week.${i}`, width: TW, height: TH, radius: 10, jitter: CONTROL });
        const clip = `wk-clip-${i}`;
        return (
          <li key={i} className={`week-tile${isToday ? " is-today" : ""}${future ? " is-future" : ""}`}
            aria-current={isToday ? "date" : undefined}>
            <span className="week-letter hand">{letter}</span>
            <svg width={TW} height={TH} viewBox={`0 0 ${TW} ${TH}`} aria-hidden="true">
              <defs><clipPath id={clip}><path d={p.fill} /></clipPath></defs>
              <path d={p.fill} className="week-bg" />
              {!future && (
                <g clipPath={`url(#${clip})`}>
                  <path className={`week-fill l${l}`}
                    d={isToday ? gaugeFill(TW, TH, gauge, `week.gauge.${key}`) : `M-2 -2H${TW + 2}V${TH + 2}H-2Z`} />
                </g>
              )}
              <path d={p.ink} className={isToday ? "week-ink-today" : "week-ink"} />
            </svg>
            <span className="week-date num">{d.getDate()}</span>
            {isToday && <span className="sr-only">{todayLabel.replace("{pct}", String(pct))}</span>}
          </li>
        );
      })}
    </ol>
  );
}

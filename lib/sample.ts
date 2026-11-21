// Deterministic example data for the visuals. A day's value comes from the
// habit key and the date alone, so a square never changes between loads, and
// the year grows from patchy to steady towards today.

import { SketchRandom, seedFrom } from "@/lib/ink";

export const DAY = 86_400_000;

export function isoDay(d: Date): string {
  const y = d.getFullYear(), m = d.getMonth() + 1, day = d.getDate();
  return `${y}-${m < 10 ? "0" : ""}${m}-${day < 10 ? "0" : ""}${day}`;
}

export function startOfDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

/** Monday-first weekday, 0 to 6. */
export const weekday = (d: Date) => (d.getDay() + 6) % 7;

/** Level 0 to 4 for `habit` on `day`, `t` = 0 a year ago to 1 today. */
export function level(habit: string, day: string, t: number): number {
  const r = new SketchRandom(seedFrom(`${habit}:${day}`));
  const p = 0.3 + 0.6 * Math.pow(t, 0.8);
  if (r.unit() > p) return 0;
  const strength = 0.25 + 0.75 * t;
  const v = r.unit() * 0.6 + strength * 0.5;
  return v < 0.35 ? 1 : v < 0.6 ? 2 : v < 0.85 ? 3 : 4;
}

/** Local share of `now`'s day gone (the app's DayGauge.level), DST-safe. */
export function dayLevel(now: Date): number {
  const start = startOfDay(now);
  const next = new Date(start.getFullYear(), start.getMonth(), start.getDate() + 1);
  const len = next.getTime() - start.getTime();
  return len > 0 ? Math.min(1, Math.max(0, (now.getTime() - start.getTime()) / len)) : 0;
}

/** 30 days of Consistency (share of habits done), rising with a little noise. */
export function consistencySeries(n = 30): number[] {
  const r = new SketchRandom(seedFrom("charts.consistency"));
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    const v = 38 + 52 * (t * t * (3 - 2 * t)) + (r.unit() - 0.5) * 14;
    out.push(Math.max(8, Math.min(100, Math.round(v))));
  }
  return out;
}

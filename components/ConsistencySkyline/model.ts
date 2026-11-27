/*
 * Consistency skyline: the pure part (dates, grid, levels, stats, camera,
 * projection, easing, colour maths). No DOM, no React; run by the tests.
 *
 * Adapted from "Contribution Skyline" by Kedhareswer Naidu,
 * https://21st.dev/@kedhareswer/components/contribution-skyline
 * source: github.com/Kedhareswer/21stdev-my-components, components/contribution-skyline,
 * commit 2a8b05c. Published on 21st.dev under the MIT License:
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions: the above copyright
 *   notice and this permission notice shall be included in all copies or
 *   substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS",
 *   WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.
 *
 * Changes for MyGrowth: values are daily Consistency shares (0 to 1), levels
 * are the app's Consistency buckets, bar height is proportional to the share,
 * the stats are average, best week and runs at or above the 75 % goal, weeks
 * start on Monday as in the app.
 */

export type Cell = { date: string; value: number; level: number; week: number; day: number };
export type Run = { days: number; start: string | null; end: string | null };
export type SkylineStats = {
  first: string | null;
  last: string | null;
  average: number;
  bestWeek: { value: number; start: string | null; end: string | null };
  longest: Run;
  current: Run;
};
export type RGB = [number, number, number];

export const DAY_MS = 86_400_000;
/** The app's daily Consistency goal. */
export const GOAL = 0.75;

export const clamp01 = (v: number): number => (v > 0 ? (v < 1 ? v : 1) : 0);
export const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;
export const easeInOutCubic = (x: number): number => {
  const t = clamp01(x);
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};
export const easeOutCubic = (x: number): number => 1 - Math.pow(1 - clamp01(x), 3);
export const smoothstep = (a: number, b: number, x: number): number => {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};

/** UTC midnight to "YYYY-MM-DD". */
export const toKey = (ms: number): string => new Date(ms).toISOString().slice(0, 10);
/** "YYYY-MM-DD" to UTC midnight, read literally (no time zone drift). */
export const dayMs = (key: string): number => {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(key);
  return m ? Date.UTC(+m[1], +m[2] - 1, +m[3]) : NaN;
};

/**
 * The app's Consistency buckets (HeatmapRules.consistencyCell): empty under
 * 1 % (and on days with nothing logged), then under 50, under 80, under 100,
 * and 100 %.
 */
export const levelOf = (v: number): number => (v < 0.01 ? 0 : v < 0.5 ? 1 : v < 0.8 ? 2 : v < 1 ? 3 : 4);
/** Lower bound of each level, for the legend. */
export const LEVEL_FLOORS = [0, 0.01, 0.5, 0.8, 1];

/**
 * The grid: columns are weeks, rows are weekdays (row 0 = Monday when
 * `weekStart` is 1). `values[i]` is the day `end - (values.length - 1 - i)`.
 * It ends on `end` and starts on the week holding the day a year earlier.
 */
export const buildGrid = (values: number[], end: string, weekStart = 1) => {
  const endMs = dayMs(end);
  const byDay = new Map<string, number>();
  values.forEach((v, i) => byDay.set(toKey(endMs - (values.length - 1 - i) * DAY_MS), clamp01(v)));
  let start = endMs - 364 * DAY_MS;
  start -= ((new Date(start).getUTCDay() - weekStart + 7) % 7) * DAY_MS;
  const cells: Cell[] = [];
  for (let ms = start, i = 0; ms <= endMs; ms += DAY_MS, i++) {
    const date = toKey(ms);
    const value = byDay.get(date) ?? 0;
    cells.push({ date, value, level: levelOf(value), week: Math.floor(i / 7), day: i % 7 });
  }
  return { cells, weeks: cells.length ? cells[cells.length - 1].week + 1 : 0 };
};

/**
 * Average over the year, the best full week (latest on a tie), the longest
 * run of days at or above the goal, and the run that reaches today. Today
 * is not over, so a run still counts when only today is below the goal.
 */
export const computeStats = (cells: Cell[], goal = GOAL): SkylineStats => {
  let sum = 0;
  let run = 0;
  let runStart: string | null = null;
  let longest: Run = { days: 0, start: null, end: null };
  for (const c of cells) {
    sum += c.value;
    if (c.value >= goal) {
      if (run === 0) runStart = c.date;
      run++;
      if (run >= longest.days) longest = { days: run, start: runStart, end: c.date };
    } else run = 0;
  }
  let bestWeek: SkylineStats["bestWeek"] = { value: 0, start: null, end: null };
  for (let i = 0; i + 7 <= cells.length; i += 7) {
    let s = 0;
    for (let k = i; k < i + 7; k++) s += cells[k].value;
    const v = s / 7;
    if (v >= bestWeek.value) bestWeek = { value: v, start: cells[i].date, end: cells[i + 6].date };
  }
  let j = cells.length - 1;
  if (j >= 0 && cells[j].value < goal) j--;
  const endAt = j;
  while (j >= 0 && cells[j].value >= goal) j--;
  const days = endAt - j;
  const current: Run = days > 0 ? { days, start: cells[j + 1].date, end: cells[endAt].date } : { days: 0, start: null, end: null };
  return {
    first: cells.length ? cells[0].date : null,
    last: cells.length ? cells[cells.length - 1].date : null,
    average: cells.length ? sum / cells.length : 0,
    bestWeek,
    longest,
    current,
  };
};

/** A label on each week whose first day starts a new month; a cramped first label is dropped. */
export const monthLabels = (cells: Cell[], weeks: number, locale: string) => {
  const fmt = new Intl.DateTimeFormat(locale, { month: "short", timeZone: "UTC" });
  const out: { week: number; label: string }[] = [];
  let prev = -1;
  for (let w = 0; w < weeks; w++) {
    const c = cells[w * 7];
    if (!c) break;
    const m = +c.date.slice(5, 7);
    if (m !== prev) out.push({ week: w, label: fmt.format(dayMs(c.date)) });
    prev = m;
  }
  if (out.length > 1 && out[1].week - out[0].week < 3) out.shift();
  return out;
};

/** Box height in grid units: proportional to the share (100 % is the tallest,
 *  7.6 cells), never thinner than a sliver; an empty day is a thin slab. */
export const barHeight = (v: number, scale = 1): number => (v >= 0.01 ? Math.max(0.4, v * 7.6 * scale) : 0.2);

/** Share of the morph each bar spends waiting: the wave sweeps oldest week to newest. */
export const WAVE = 0.42;
/** 0 to 1 as a bar rises during the morph. Every bar is flat at t=0 and fully up at t=1. */
export const riseAt = (t: number, week: number, weeks: number, day: number): number => {
  const d = (weeks > 1 ? week / (weeks - 1) : 0) * 0.36 + (day / 6) * 0.06;
  return easeOutCubic((t - d) / (1 - WAVE));
};

export const YAW_3D = Math.PI / 4;
export const ELEV_3D = (34 * Math.PI) / 180;
export const YAW_RANGE: [number, number] = [(8 * Math.PI) / 180, (82 * Math.PI) / 180];
export const ELEV_RANGE: [number, number] = [(18 * Math.PI) / 180, (62 * Math.PI) / 180];

export type Cam = { cs: number; sn: number; se: number; ce: number };

/**
 * e=0 looks straight down (a plain heatmap); e=1 is the isometric corner
 * view. Orbit offsets apply in proportion to e, so the flat view never tilts.
 */
export const camera = (e: number, dYaw = 0, dElev = 0): Cam => {
  const yaw = Math.min(YAW_RANGE[1], Math.max(0, lerp(0, YAW_3D + dYaw, e)));
  const elev = lerp(Math.PI / 2, Math.min(ELEV_RANGE[1], Math.max(ELEV_RANGE[0], ELEV_3D + dElev)), e);
  return { cs: Math.cos(yaw), sn: Math.sin(yaw), se: Math.sin(elev), ce: Math.cos(elev) };
};

/** World (x = week, y = weekday, z = up) to screen, before scale and offset. */
export const project = (c: Cam, x: number, y: number, z: number): [number, number] => [
  x * c.cs - y * c.sn,
  (x * c.sn + y * c.cs) * c.se - z * c.ce,
];

export const mixRGB = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];

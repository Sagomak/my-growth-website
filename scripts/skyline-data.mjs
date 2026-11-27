// Writes lib/skyline.json: one year of example daily Consistency for the home
// hero, computed from eight demo habits (the app's defaults and suggestions,
// the same set the App Store screenshots show). Never real user data.
//
// Consistency is the app's rule: habits done / habits scheduled that day,
// 0 to 1. A day's outcome comes from the habit and the date alone (seeded),
// so a square never changes between builds; only the window moves with the
// build date. Runs in predev and prebuild.
// Usage: node scripts/skyline-data.mjs [YYYY-MM-DD end date, default today]
import { writeFileSync } from "node:fs";

const DAY = 86_400_000;
const DAYS = 371; // 53 weeks: enough to fill the grid's first, partial week

// FNV-1a 32 bit, then mulberry32.
const hash = (s) => { let h = 0x811c9dc5; for (const c of s) { h ^= c.codePointAt(0); h = Math.imul(h, 0x01000193) >>> 0; } return h; };
const rng = (seed) => { let a = seed >>> 0; return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };

// Monday = 0. `days` null means every day; `p` is how reliably it gets done
// at the start of the year (`p0`) and by the end (`p1`).
const HABITS = [
  { key: "sleep", days: null, p0: 0.78, p1: 0.93 },
  { key: "water", days: null, p0: 0.7, p1: 0.9 },
  { key: "reading", days: null, p0: 0.5, p1: 0.86 },
  { key: "meditation", days: null, p0: 0.35, p1: 0.8 },
  { key: "workout", days: [0, 2, 4], p0: 0.62, p1: 0.9 },
  { key: "running", days: [1, 3, 5], p0: 0.6, p1: 0.92 },
  { key: "biking", days: [6], p0: 0.45, p1: 0.8 },
  { key: "intervals", days: [2], p0: 0.4, p1: 0.75 },
];

const iso = (ms) => new Date(ms).toISOString().slice(0, 10);
const arg = process.argv[2];
const now = new Date();
const endMs = arg ? Date.parse(arg + "T00:00:00Z") : Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
if (!Number.isFinite(endMs)) throw new Error(`bad date: ${arg}`);

// A week's mood drifts slowly; a holiday week and a sick patch sit at fixed
// points of the year so the picture has believable gaps.
const weekMood = (ms) => {
  const wk = Math.floor(ms / (7 * DAY));
  const r = rng(hash(`mood:${wk}`));
  const prev = rng(hash(`mood:${wk - 1}`));
  return 0.5 * r() + 0.5 * prev() - 0.5; // -0.5 to 0.5, correlated week to week
};

const values = [];
for (let i = 0; i < DAYS; i++) {
  const ms = endMs - (DAYS - 1 - i) * DAY;
  const t = i / (DAYS - 1); // 0 a year ago, 1 today
  const dow = (new Date(ms).getUTCDay() + 6) % 7;
  const holiday = i >= 214 && i < 222; // eight days away, nothing logged
  const sick = i >= 118 && i < 123;
  const mood = weekMood(ms) * 0.22 + (sick ? -0.45 : 0);
  let scheduled = 0, done = 0;
  for (const h of HABITS) {
    if (h.days && !h.days.includes(dow)) continue;
    scheduled++;
    if (holiday) continue;
    const ease = t * t * (3 - 2 * t);
    const p = Math.min(0.99, Math.max(0.02, h.p0 + (h.p1 - h.p0) * ease + mood + (dow >= 5 ? -0.06 : 0)));
    if (rng(hash(`${h.key}:${iso(ms)}`))() < p) done++;
  }
  values.push(scheduled ? Math.round((done / scheduled) * 1000) / 1000 : 0);
}

writeFileSync(new URL("../lib/skyline.json", import.meta.url), JSON.stringify({ end: iso(endMs), values }) + "\n");
const avg = values.reduce((a, b) => a + b, 0) / values.length;
console.log(`skyline: ${values.length} days to ${iso(endMs)}, average ${(avg * 100).toFixed(1)}%`);

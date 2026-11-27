// Unit tests for the Consistency skyline model (run: node --test tests/).
import { test } from "node:test";
import assert from "node:assert/strict";
import { levelOf, buildGrid, computeStats, barHeight, camera, project } from "../components/ConsistencySkyline/model.ts";

test("levels are the app's Consistency buckets", () => {
  assert.deepEqual([0, 0.009, 0.01, 0.49, 0.5, 0.79, 0.8, 0.999, 1].map(levelOf), [0, 0, 1, 1, 2, 2, 3, 3, 4]);
});

test("the grid ends on the end date, starts on a Monday, a year back", () => {
  const values = Array.from({ length: 371 }, (_, i) => (i % 7) / 6);
  const { cells, weeks } = buildGrid(values, "2026-11-27", 1);
  assert.equal(cells.at(-1)!.date, "2026-11-27");
  assert.equal(new Date(cells[0].date + "T00:00:00Z").getUTCDay(), 1);
  assert.ok(cells.length >= 365 && cells.length <= 371);
  assert.equal(weeks, Math.ceil(cells.length / 7));
  assert.equal(cells.at(-1)!.day, (cells.length - 1) % 7);
});

test("stats: average, best week, longest and current run at the 75% goal", () => {
  // 14 days from a Monday: week 1 all 0.8, week 2 all 1 except a dip on day 10.
  const vals = [0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 1, 1, 1, 0.5, 1, 1, 1];
  const cells = vals.map((value, i) => ({ date: `2026-01-${String(5 + i).padStart(2, "0")}`, value, level: levelOf(value), week: Math.floor(i / 7), day: i % 7 }));
  const s = computeStats(cells);
  assert.equal(Math.round(s.average * 1000) / 1000, Math.round((vals.reduce((a, b) => a + b) / 14) * 1000) / 1000);
  assert.equal(s.bestWeek.start, "2026-01-12");
  assert.equal(s.longest.days, 10);
  assert.equal(s.longest.start, "2026-01-05");
  assert.equal(s.current.days, 3);
  assert.equal(s.current.end, "2026-01-18");
});

test("the current run survives an unfinished today below the goal", () => {
  const vals = [0.9, 0.9, 0.9, 0.2];
  const cells = vals.map((value, i) => ({ date: `2026-02-0${i + 1}`, value, level: levelOf(value), week: 0, day: i }));
  assert.equal(computeStats(cells).current.days, 3);
});

test("bar height is proportional to the share, 100% is the tallest, 0 is a slab", () => {
  assert.equal(barHeight(0), 0.2);
  assert.ok(Math.abs(barHeight(1) / barHeight(0.5) - 2) < 1e-9);
  assert.ok(barHeight(1) > barHeight(0.99));
});

test("the flat camera looks straight down", () => {
  const [x, y] = project(camera(0), 3, 2, 5);
  assert.ok(Math.abs(x - 3) < 1e-9 && Math.abs(y - 2) < 1e-9);
});

// Unit tests for the SketchyShapes port (run: node --test tests/).
import { test } from "node:test";
import assert from "node:assert/strict";
import { seedFrom, SketchRandom, inkGeometry, inkRect, CARD, CONTROL } from "../lib/ink.ts";

test("FNV-1a seed matches the reference value", () => {
  // FNV-1a 64 of "a" is 0xaf63dc4c8601ec8c (published test vector).
  assert.equal(seedFrom("a"), 0xaf63dc4c8601ec8cn);
  assert.equal(seedFrom(""), 0xcbf29ce484222325n);
});

test("SplitMix64 matches the reference sequence for seed 0", () => {
  const r = new SketchRandom(0n);
  assert.equal(r.next(), 0xe220a8397b1dcdafn);
  assert.equal(r.next(), 0x6e789e6aa1b965f4n);
});

test("same seed and size give the same paths, different seeds differ", () => {
  const a = inkRect({ seed: "card.1", width: 320, height: 180 });
  const b = inkRect({ seed: "card.1", width: 320, height: 180 });
  const c = inkRect({ seed: "card.2", width: 320, height: 180 });
  assert.deepEqual(a, b);
  assert.notEqual(a.ink, c.ink);
});

test("closed shape stays within 1 px of the true rect over 100 seeds", () => {
  for (const j of [CARD, CONTROL]) {
    for (let s = 0; s < 100; s++) {
      const g = inkGeometry(300, 160, 14, j, 1.25, seedFrom(`bounds.${s}`));
      assert.ok(g);
      const inset = 1.25 * 0.7 + j.amplitude + j.cornerJitter;
      for (const [x, y] of g.loop) {
        assert.ok(x >= inset - 1 && x <= 300 - inset + 1, `x ${x}`);
        assert.ok(y >= inset - 1 && y <= 160 - inset + 1, `y ${y}`);
      }
    }
  }
});

test("strokes are open, with one or two overshoot breaks", () => {
  for (let s = 0; s < 100; s++) {
    const g = inkGeometry(300, 160, 14, CARD, 1.25, seedFrom(`open.${s}`))!;
    assert.ok(g.strokes.length >= 2 && g.strokes.length <= 3, `${g.strokes.length} strokes`);
  }
});

test("second pass only on large card shapes", () => {
  assert.ok(inkRect({ seed: "big", width: 300, height: 160 }).second.length > 0);
  assert.equal(inkRect({ seed: "small", width: 120, height: 40 }).second, "");
  assert.equal(inkRect({ seed: "chip", width: 300, height: 160, jitter: CONTROL }).second, "");
});

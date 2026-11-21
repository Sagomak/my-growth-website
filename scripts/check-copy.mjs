// Fails on any em dash (U+2014) or en dash (U+2013) in copy: content, pages,
// components, public text files. Brief rule: no dashes anywhere in the copy.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const ROOTS = ["content", "app", "components", "lib", "public/llms.txt"];
const EXT = new Set([".ts", ".tsx", ".json", ".txt", ".css", ".md"]);
const bad = [];
function walk(p) {
  if (statSync(p).isDirectory()) return readdirSync(p).forEach((f) => walk(join(p, f)));
  if (!EXT.has(extname(p))) return;
  readFileSync(p, "utf8").split("\n").forEach((line, i) => {
    if (/[–—]/.test(line)) bad.push(`${p}:${i + 1}: ${line.trim().slice(0, 100)}`);
  });
}
ROOTS.forEach(walk);
// The built pages too, when present.
try { walk("out"); } catch { /* not built yet */ }
if (bad.length) { console.error("Dashes found:\n" + bad.join("\n")); process.exit(1); }
console.log("copy: no em or en dashes");

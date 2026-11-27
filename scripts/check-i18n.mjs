// Checks every locale's copy against the English source:
// same keys and array lengths, same {placeholders} and <tags>, protected
// fields and names unchanged, no em or en dashes, nothing left empty.
// Usage: node scripts/check-i18n.mjs [locale ...]
import { readFileSync, existsSync } from "node:fs";

const LOCALES = ["it", "es", "de", "fr", "pt-br", "da", "pl", "ro", "tr", "id", "ms", "ru", "uk", "sq", "fil",
  "el", "vi", "hi", "th", "ja", "ko", "zh-hans", "bn", "ne"];
const PROTECTED_KEYS = new Set(["col", "src", "href"]);
const NAMES = ["MyGrowth", "Sagomak", "RevenueCat", "App Store", "hello@sagomak.com", "revenuecat.com", "apple.com/legal/privacy", "CSV", "#HABITS"];
const want = process.argv.slice(2).length ? process.argv.slice(2) : LOCALES;
const errors = [];
const tokens = (s) => [...s.matchAll(/\{[a-z]+\}|<\/?[a-z]+>/g)].map((m) => m[0]).sort().join(" ");

function walk(src, tr, path, loc, file) {
  if (typeof src === "string") {
    if (typeof tr !== "string") return errors.push(`${loc} ${file} ${path}: missing or not a string`);
    if (!tr.trim()) errors.push(`${loc} ${file} ${path}: empty`);
    if (/[–—]/.test(tr)) errors.push(`${loc} ${file} ${path}: dash`);
    if (tokens(src) !== tokens(tr)) errors.push(`${loc} ${file} ${path}: placeholders/tags differ (${tokens(src)} vs ${tokens(tr)})`);
    const key = path.split(".").pop();
    if (PROTECTED_KEYS.has(key) && src !== tr) errors.push(`${loc} ${file} ${path}: protected field changed`);
    for (const n of NAMES) if (src.includes(n) && !tr.includes(n)) errors.push(`${loc} ${file} ${path}: lost "${n}"`);
    return;
  }
  if (typeof src === "number" || typeof src === "boolean") { if (src !== tr) errors.push(`${loc} ${file} ${path}: value changed`); return; }
  if (Array.isArray(src)) {
    if (!Array.isArray(tr) || tr.length !== src.length) return errors.push(`${loc} ${file} ${path}: array length differs`);
    src.forEach((v, i) => walk(v, tr[i], `${path}[${i}]`, loc, file));
    return;
  }
  if (!tr || typeof tr !== "object") return errors.push(`${loc} ${file} ${path}: missing object`);
  for (const k of Object.keys(src)) walk(src[k], tr[k], path ? `${path}.${k}` : k, loc, file);
  for (const k of Object.keys(tr)) if (!(k in src) && !(path === "" && ["locale", "_review"].includes(k))) errors.push(`${loc} ${file} ${path}.${k}: extra key`);
}

for (const file of ["site", "legal"]) {
  const en = JSON.parse(readFileSync(`content/${file}/en.json`, "utf8"));
  for (const loc of want) {
    const p = `content/${file}/${loc}.json`;
    if (!existsSync(p)) { errors.push(`${loc} ${file}: file missing`); continue; }
    const tr = JSON.parse(readFileSync(p, "utf8"));
    const src = file === "legal" ? { ...en, locale: undefined } : en;
    delete src.locale;
    walk(src, tr, "", loc, file);
  }
}
if (errors.length) { console.error(errors.join("\n")); console.error(`${errors.length} problem(s)`); process.exit(1); }
console.log(`i18n: ${want.length} locale(s) match the English source`);

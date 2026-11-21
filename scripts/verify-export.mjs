// Checks the static export in out/:
// 1. every path the old site (mygrowth.myellelab.com) served is a file here,
//    or one of the planned 301s in vercel.json;
// 2. no Agentation code (dev tool) and no old brand or address;
// 3. the Smart App Banner, JSON-LD and canonical tags are in place.
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
const fail = [];
const files = [];
(function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) walk(p); else files.push(p); } })(OUT);

// Old site: 4 locales x (home, privacy, terms, support, tutorial), plus assets.
const OLD = ["", "/privacy", "/terms", "/support", "/tutorial"].flatMap((p) => ["en", "it", "es", "de"].map((l) => `/${l}${p}/`));
const ASSETS = ["/mhs-import-template.csv", "/og-image.png", "/app-icon.png", "/apple-touch-icon.png", "/favicon.ico",
  "/favicon-32.png", "/favicon-192.png", "/favicon-512.png", "/app-store-badge-en.svg", "/app-store-badge-it.svg",
  "/app-store-badge-es.svg", "/app-store-badge-de.svg", "/MyHabitStats-Promo.webp", "/robots.txt", "/sitemap.xml", "/llms.txt"];
const vercel = JSON.parse(readFileSync("vercel.json", "utf8"));
const redirected = (path) => vercel.redirects.some((r) => {
  const re = new RegExp("^" + r.source.replace(/:(\w+)\(([^)]+)\)/g, "($2)") + "$");
  return re.test(path) || re.test(path.replace(/\/$/, ""));
});
for (const p of [...OLD, "/"]) {
  const file = join(OUT, p, "index.html");
  if (!existsSync(file) && !redirected(p)) fail.push(`missing and not redirected: ${p}`);
}
for (const a of ASSETS) if (!existsSync(join(OUT, a))) fail.push(`missing asset: ${a}`);

for (const f of files) {
  if (!/\.(html|js|txt|css|xml|json|webmanifest)$/.test(f)) continue;
  const s = readFileSync(f, "utf8");
  if (/agentation/i.test(s)) fail.push(`Agentation code in ${f}`);
  if (/myellelab/i.test(s)) fail.push(`old brand or address in ${f}`);
}
const home = readFileSync(join(OUT, "en/index.html"), "utf8");
if (!home.includes('name="apple-itunes-app" content="app-id=6761617617"')) fail.push("Smart App Banner meta missing");
if (!home.includes("application/ld+json")) fail.push("JSON-LD missing");
if (!home.includes('rel="canonical" href="https://mygrowth.sagomak.com/en/"')) fail.push("canonical missing");
for (const l of ["en", "it", "es", "de"]) {
  const s = readFileSync(join(OUT, l, "privacy/index.html"), "utf8");
  if (!s.includes("hello@sagomak.com") || !s.includes("RevenueCat")) fail.push(`${l} privacy lacks contact or Purchases section`);
}
if (fail.length) { console.error(fail.join("\n")); process.exit(1); }
console.log(`export: ${OLD.length + 1} old paths covered, ${ASSETS.length} assets present, no Agentation, no old brand`);

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
// New site: 25 locales x 5 pages, each with html lang, 25 hreflang links and x-default.
const LOCS = [...readFileSync("lib/i18n.ts", "utf8").matchAll(/code: "([a-z-]+)", hreflang: "([A-Za-z-]+)"/g)].map((m) => [m[1], m[2]]);
const ASSETS = ["/mhs-import-template.csv", "/og-image.png", "/app-icon.png", "/apple-touch-icon.png", "/favicon.ico",
  "/favicon-32.png", "/favicon-192.png", "/favicon-512.png", "/app-store-badge-en.svg", "/app-store-badge-it.svg",
  "/app-store-badge-es.svg", "/app-store-badge-de.svg", "/MyHabitStats-Promo.webp", "/robots.txt", "/sitemap.xml", "/llms.txt"];
const vercel = JSON.parse(readFileSync("vercel.json", "utf8"));
const OG = JSON.parse(readFileSync("lib/og.json", "utf8"));
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
let pages = 0;
for (const [code, tag] of LOCS) for (const p of ["", "privacy/", "terms/", "support/", "tutorial/"]) {
  const f = join(OUT, code, p, "index.html");
  if (!existsSync(f)) { fail.push(`missing page /${code}/${p}`); continue; }
  pages++;
  const h = readFileSync(f, "utf8");
  if (!h.includes(`<html lang="${tag}"`)) fail.push(`/${code}/${p}: html lang is not ${tag}`);
  const alts = (h.match(/<link rel="alternate" hrefLang="/g) || []).length;
  if (alts !== LOCS.length + 1) fail.push(`/${code}/${p}: ${alts} hreflang links, want ${LOCS.length + 1}`);
  if (!h.includes('hrefLang="x-default"')) fail.push(`/${code}/${p}: no x-default`);
  // Open Graph and Twitter cards point at the current, versioned image.
  if (!h.includes(`property="og:image" content="https://mygrowth.sagomak.com${OG.image}"`)) fail.push(`/${code}/${p}: og:image is not ${OG.image}`);
  if (!h.includes(`name="twitter:image" content="https://mygrowth.sagomak.com${OG.image}"`)) fail.push(`/${code}/${p}: twitter:image is not ${OG.image}`);
}
if (!existsSync(join(OUT, OG.image))) fail.push(`missing Open Graph image ${OG.image}`);
// Screenshots: only content-hashed files ship, and every referenced one exists.
const SCREEN_RE = /^[a-z-]+\.[0-9a-f]{10}(-\d+)?\.webp$/;
for (const f of readdirSync(join(OUT, "screens"))) if (!SCREEN_RE.test(f)) fail.push(`screenshot without a content hash: /screens/${f}`);
for (const [code] of LOCS) {
  const h = readFileSync(join(OUT, code, "index.html"), "utf8");
  for (const m of h.matchAll(/\/screens\/[^"\s,)]+\.webp/g)) if (!existsSync(join(OUT, m[0]))) fail.push(`/${code}/: missing ${m[0]}`);
}
const home = readFileSync(join(OUT, "en/index.html"), "utf8");
if (!home.includes('name="apple-itunes-app" content="app-id=6761617617"')) fail.push("Smart App Banner meta missing");
if (!home.includes("application/ld+json")) fail.push("JSON-LD missing");
if (!home.includes('rel="canonical" href="https://mygrowth.sagomak.com/en/"')) fail.push("canonical missing");
for (const [l] of LOCS) {
  const s = readFileSync(join(OUT, l, "privacy/index.html"), "utf8");
  if (!s.includes("hello@sagomak.com") || !s.includes("RevenueCat")) fail.push(`${l} privacy lacks contact or Purchases section`);
}
if (fail.length) { console.error(fail.join("\n")); process.exit(1); }
console.log(`export: ${pages} pages in ${LOCS.length} languages, ${OLD.length + 1} old paths covered, ${ASSETS.length} assets present, no Agentation, no old brand`);

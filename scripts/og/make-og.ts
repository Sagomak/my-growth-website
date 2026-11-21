// Builds scripts/og/og.html (1200 x 630), the Open Graph card in the 3.0.0
// design: paper, ink frame, a year heatmap, Caveat. Then render it to
// public/og-image.png with scripts/og/shot.py.
// Run: node scripts/og/make-og.ts && python3 scripts/og/shot.py
import { writeFileSync, readFileSync } from "node:fs";
import { inkRect, ring, blob, rule, SketchRandom, seedFrom } from "../../lib/ink.ts";

const root = new URL("../../", import.meta.url);
const b64 = (p: string) => readFileSync(new URL(p, root)).toString("base64");
const caveat = b64("public/fonts/caveat-bold.woff2");
const nunito = b64("public/fonts/nunito-latin-var.woff2");
const icon = b64("public/img/icon-light-256.webp");

const G = ["#efece6", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
const cols = 25, cell = 13, gap = 4;
let cells = "";
for (let c = 0; c < cols; c++) for (let r = 0; r < 7; r++) {
  const t = (c * 7 + r) / (cols * 7);
  const rng = new SketchRandom(seedFrom(`og:${c}:${r}`));
  const p = 0.3 + 0.62 * t;
  let l = 0;
  if (rng.unit() < p) { const v = rng.unit() * 0.6 + (0.25 + 0.75 * t) * 0.5; l = v < 0.35 ? 1 : v < 0.6 ? 2 : v < 0.85 ? 3 : 4; }
  cells += `<rect x="${c * (cell + gap)}" y="${r * (cell + gap)}" width="${cell}" height="${cell}" rx="3" fill="${G[l]}"/>`;
}
const gw = cols * (cell + gap) - gap, gh = 7 * (cell + gap) - gap;
const lastX = (cols - 1) * (cell + gap), lastY = 6 * (cell + gap);
const cardW = 520, cardH = 290;
const card = inkRect({ seed: "og.card", width: cardW, height: cardH });

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Caveat;src:url(data:font/woff2;base64,${caveat}) format("woff2");font-weight:700}
@font-face{font-family:Nunito;src:url(data:font/woff2;base64,${nunito}) format("woff2");font-weight:200 1000}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#f7f4ee;color:#1f2328;font-family:Nunito,sans-serif;position:relative;overflow:hidden}
.l{position:absolute;left:72px;top:84px;width:500px}
.brand{display:flex;align-items:center;gap:18px}
.brand img{width:76px;height:76px;border-radius:18px;box-shadow:0 0 0 1px #ece9e3}
.brand span{font-family:Caveat;font-size:64px;font-weight:700;line-height:1}
h1{font-family:Caveat;font-weight:700;font-size:78px;line-height:.98;margin-top:36px}
p{margin-top:24px;font-size:24px;color:#57606a;line-height:1.4}
.url{position:absolute;left:72px;bottom:56px;font-family:Caveat;font-weight:700;font-size:30px;color:#1a7f37;display:flex;align-items:center;gap:10px}
.card{position:absolute;right:60px;top:170px;width:${cardW}px;height:${cardH}px}
.card svg.f{position:absolute;inset:0}
.inner{position:absolute;left:40px;top:34px}
.inner .h{font-family:Caveat;font-weight:700;font-size:34px;margin-bottom:14px}
</style></head><body>
<div class="l">
  <div class="brand"><img src="data:image/webp;base64,${icon}"><span>MyGrowth</span></div>
  <h1>You become what you repeatedly do.</h1>
  <p>A hand-drawn habit tracker for iPhone. Private by design: no account, no cloud.</p>
</div>
<div class="url"><svg width="10" height="10" viewBox="0 0 10 10"><path d="${blob(10, "og.node")}" fill="#1a7f37"/></svg>mygrowth.sagomak.com</div>
<div class="card">
  <svg class="f" width="${cardW}" height="${cardH}" viewBox="0 0 ${cardW} ${cardH}">
    <path d="${card.fill}" fill="#ffffff"/><path d="${card.second}" fill="#57606a" opacity=".35"/><path d="${card.ink}" fill="#57606a"/>
  </svg>
  <div class="inner">
    <div class="h">Reading</div>
    <svg width="${gw + 10}" height="${gh + 10}" viewBox="-5 -5 ${gw + 10} ${gh + 10}" style="overflow:visible">${cells}
      <path d="${ring(cell + 8, "og.today")}" transform="translate(${lastX - 4} ${lastY - 4})" fill="none" stroke="#1f2328" stroke-width="1.8" stroke-linecap="round"/>
    </svg>
    <svg width="200" height="10" viewBox="0 0 200 10" style="margin-top:18px;overflow:visible"><path d="${rule(200, 8, "og.rule")}" fill="none" stroke="#1a7f37" stroke-width="2.4" stroke-linecap="round"/></svg>
  </div>
</div>
</body></html>`;
writeFileSync(new URL("scripts/og/og.html", root), html);
console.log("wrote scripts/og/og.html");

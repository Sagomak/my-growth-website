// Builds scripts/og/og.html (1200 x 630), the Open Graph card in the 3.0.0
// design: paper, Caveat, the brand and headline on the left, and on the
// right the real Consistency skyline card, captured from the built site by
// scripts/og/shot.py (scripts/og/skyline.png). Run through `npm run og`.
import { writeFileSync, readFileSync } from "node:fs";
import { blob } from "../../lib/ink.ts";

const root = new URL("../../", import.meta.url);
const b64 = (p: string) => readFileSync(new URL(p, root)).toString("base64");
const caveat = b64("public/fonts/caveat-bold.woff2");
const nunito = b64("public/fonts/nunito-latin-var.woff2");
const icon = b64("public/img/icon-light-256.webp");

const skyline = b64("scripts/og/skyline.png");
const SKY_W = 560; // CSS px; the capture is 2x

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Caveat;src:url(data:font/woff2;base64,${caveat}) format("woff2");font-weight:700}
@font-face{font-family:Nunito;src:url(data:font/woff2;base64,${nunito}) format("woff2");font-weight:200 1000}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#f7f4ee;color:#1f2328;font-family:Nunito,sans-serif;position:relative;overflow:hidden}
.l{position:absolute;left:72px;top:84px;width:480px}
.brand{display:flex;align-items:center;gap:18px}
.brand img{width:76px;height:76px;border-radius:18px;box-shadow:0 0 0 1px #ece9e3}
.brand span{font-family:Caveat;font-size:64px;font-weight:700;line-height:1}
h1{font-family:Caveat;font-weight:700;font-size:78px;line-height:.98;margin-top:36px}
p{margin-top:24px;font-size:24px;color:#57606a;line-height:1.4;text-wrap:pretty}
.url{position:absolute;left:72px;bottom:56px;font-family:Caveat;font-weight:700;font-size:30px;color:#1a7f37;display:flex;align-items:center;gap:10px}
.sky{position:absolute;right:44px;top:50%;transform:translateY(-50%);width:${SKY_W}px}
.sky img{display:block;width:100%;height:auto}
</style></head><body>
<div class="l">
  <div class="brand"><img src="data:image/webp;base64,${icon}"><span>MyGrowth</span></div>
  <h1>You become what you repeatedly do.</h1>
  <p>Track your habits every day, build consistency, and become who you want to be.</p>
</div>
<div class="url"><svg width="10" height="10" viewBox="0 0 10 10"><path d="${blob(10, "og.node")}" fill="#1a7f37"/></svg>mygrowth.sagomak.com</div>
<div class="sky"><img src="data:image/png;base64,${skyline}" alt=""></div>
</body></html>`;
writeFileSync(new URL("scripts/og/og.html", root), html);
console.log("wrote scripts/og/og.html");

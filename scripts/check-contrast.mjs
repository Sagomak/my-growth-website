// Contrast of every text and outline pair, both themes (WCAG 2.x).
// Text 4.5:1, outlines and non-text marks 3:1, as the app's rules.
const T = {
  light: { page: "#f7f4ee", surface: "#ffffff", cardOpen: "#ffffff", cardLogged: "#faf8f3", surface2: "#f0ede7",
    text: "#1f2328", text2: "#57606a", muted: "#67717b", accent: "#1a7f37", onAccent: "#f7f4ee", border: "#d8d6d0" },
  dark: { page: "#1e1f1d", surface: "#282927", cardOpen: "#2e2f2d", cardLogged: "#282927", surface2: "#30312f",
    text: "#e6edf3", text2: "#9da5ad", muted: "#939aa3", accent: "#39d353", onAccent: "#1e1f1d", border: "#464745" },
};
const lin = (v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
const lum = (h) => { const n = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).map(lin); return 0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2]; };
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
// surface2 only carries primary text (hover washes), checked below.
const grounds = ["page", "surface", "cardOpen", "cardLogged"];
const checks = [];
for (const [theme, c] of Object.entries(T)) {
  for (const g of grounds) {
    for (const t of ["text", "text2", "muted"]) checks.push([theme, `${t} on ${g}`, ratio(c[t], c[g]), 4.5]);
    // Accent is used for text links and CTA labels: hold it to text contrast.
    checks.push([theme, `accent on ${g}`, ratio(c.accent, c[g]), 4.5]);
    // Outlines: ink in the secondary text colour (SG.contour).
    checks.push([theme, `contour on ${g}`, ratio(c.text2, c[g]), 3]);
  }
  checks.push([theme, "text on surface2 (hover)", ratio(c.text, c.surface2), 4.5]);
  checks.push([theme, "onAccent on accent (button)", ratio(c.onAccent, c.accent), 4.5]);
}
let fail = 0;
for (const [theme, name, r, min] of checks) {
  const ok = r >= min;
  if (!ok) fail++;
  if (!ok || process.argv.includes("-v")) console.log(`${ok ? "ok  " : "FAIL"} ${theme.padEnd(5)} ${name.padEnd(30)} ${r.toFixed(2)} (min ${min})`);
}
if (fail) { console.error(`${fail} contrast pair(s) below the minimum`); process.exit(1); }
console.log(`contrast: ${checks.length} pairs pass`);

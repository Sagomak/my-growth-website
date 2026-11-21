// Heatmap ramps for any habit colour, as the app computes them
// (Color+Theme.swift: rampColor, habitAccentLightRGB).

type RGB = [number, number, number];
const rgb = (hex: string): RGB => {
  const h = hex.replace("#", "");
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255) as RGB;
};
const hex = (c: RGB) => "#" + c.map((v) => Math.round(Math.min(1, Math.max(0, v)) * 255).toString(16).padStart(2, "0")).join("");

/** Light-mode base: bright colours darkened so full cells stay visible on white. */
export function accentLight(h: string): string {
  const c = rgb(h);
  const lum = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  if (lum <= 0.62) return h;
  const k = Math.max(0.55, 1 - (lum - 0.62) * 1.15);
  return hex([c[0] * k, c[1] * k, c[2] * k]);
}

const ALPHA = [0, 0.2, 0.45, 0.72, 1];

/** Levels 1 to 4 (0 is the empty cell token) for light and dark. */
export function ramp(h: string): { light: string[]; dark: string[] } {
  const baseL = rgb(accentLight(h)), baseD = rgb(h);
  const bgL: RGB = [1, 1, 1], bgD: RGB = [40 / 255, 41 / 255, 39 / 255];
  const mix = (bg: RGB, base: RGB, a: number) => hex([0, 1, 2].map((i) => bg[i] + (base[i] - bg[i]) * a) as RGB);
  return {
    light: ALPHA.slice(1).map((a) => mix(bgL, baseL, a)),
    dark: ALPHA.slice(1).map((a) => mix(bgD, baseD, a)),
  };
}

/** CSS custom properties for a ramp, read by .ramp-host in components.css. */
export function rampVars(h: string): Record<string, string> {
  const r = ramp(h);
  const v: Record<string, string> = {};
  r.light.forEach((c, i) => (v[`--l${i + 1}`] = c));
  r.dark.forEach((c, i) => (v[`--d${i + 1}`] = c));
  v["--hl"] = accentLight(h);
  v["--hd"] = h;
  return v;
}

export const HABIT = {
  green: "#39d353", orange: "#f97316", sky: "#38bdf8", violet: "#a78bfa", rose: "#f43f5e",
  amber: "#fbbf24", pink: "#ec4899", teal: "#14b8a6", lime: "#84cc16",
} as const;

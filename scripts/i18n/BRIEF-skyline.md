# Translation brief: Consistency skyline strings (2026-11-27)

New English keys in `content/site/en.json`: the whole `skyline` block (after `hero`)
and `footer.skyline`. Add exactly these keys to `content/site/<locale>.json`, in the
same position (`skyline` right after `hero`; `skyline` as the last key of `footer`).
Change nothing else in the file.

Context: an interactive chart in the home page hero. It shows one year of example
"Consistency" (the app's word: the share of scheduled habits done each day, 0 to 100 %)
as a flat heatmap that rises into a 3D skyline of bars.

- `title`: card title, handwritten style, short.
- `caption`: small line saying the data is an example.
- `viewGroup`, `flat`, `skyline`: aria labels of the 2D/3D toggle.
- `hintFlat`, `hintOrbit`, `hintTouch`: hint line under the chart (mouse, mouse in 3D, touch).
- `tooltip`: "{pct} on {date}". {pct} becomes e.g. "85%", {date} a full date such as
  "Thursday, 12 November 2026" (both formatted by the browser in your language).
  Reorder freely for natural grammar; keep both placeholders.
- `empty`: tooltip for a day with nothing logged.
- `range`: joins two dates, "{a} to {b}" (e.g. "12 Nov to 18 Nov"). NEVER a dash.
- `avg`, `bestWeek`, `longest`, `current`: stat labels. "run" = consecutive days
  (use the app's word for streak if the glossary has one, e.g. "Current streak").
- `goal`: footnote; {goal} becomes "75%".
- `levelEmpty`, `levelUnder` ("Under {pct}"): legend swatch names.
- `highlight`: aria label of a legend swatch, {level} is a level name.
- `aria`: description of the chart for screen readers.
- `footer.skyline`: "Skyline chart adapted from", followed by a link
  "Contribution Skyline by Kedhareswer Naidu (21st.dev)" (not translated). Must read
  naturally before that link.

Rules: same as `scripts/i18n/BRIEF.md` (read it): natural App Store quality, match
the register of the locale's existing site copy (informal where the site is
informal), use the glossary `scripts/i18n/glossary/<locale>.json` for app terms
(Consistency, Grid, Charts, streak words), keep placeholders exactly, no em or
en dash, no " - " used as a dash. "double click": write it the natural way in
your language, but without a dash character (a hyphen inside a word is fine).

After writing, run `node scripts/check-i18n.mjs <your locales>` (it must pass for
the skyline keys; report any failure unrelated to them without fixing it) and
append to `scripts/i18n/review/<locale>.md` a section
"## Skyline strings, 2026-11-27" listing any low-confidence string with the
English, your text and why. Write JSON with 2-space indent, UTF-8 unescaped,
trailing newline (python: json.dump(d, f, ensure_ascii=False, indent=2) + "\n").
Do not commit. Do not touch `content/legal/`.

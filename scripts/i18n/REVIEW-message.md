# Review brief: new message (2026-11-27)

Review the keys listed in `scripts/i18n/BRIEF-message.md` in
`content/site/<locale>.json` against `content/site/en.json`. You are a second,
independent reviewer. Check: meaning matches the English (no added or lost
claims, privacy body exact), natural App Store quality phrasing, app terms from
`scripts/i18n/glossary/<locale>.json`, register consistent with the rest of the
locale's site copy, no em or en dashes, no " - " as a dash. Fix what is wrong
directly in the JSON (only those keys). Append to
`scripts/i18n/review/<locale>.md` a section "## Review: new message,
2026-11-27" listing each change you made (key, before, after, why) and
anything still doubtful, and give the locale a confidence rating (high,
medium, low). Run `node scripts/check-i18n.mjs <your locales>` at the end
(must pass). Do not commit. Use your own scratch subfolder.

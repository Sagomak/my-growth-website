# Review brief: MyGrowth website translations

You are an independent reviewer, a native-level editor for your locales. The
translator already wrote `content/site/<locale>.json`, `content/legal/<locale>.json`
and flagged doubts in `scripts/i18n/review/<locale>.md`. Read `scripts/i18n/BRIEF.md`
(all its rules still apply), the English sources, the glossary and the tone file.

For each locale:
1. Read the whole translation against the English. Fix in place: meaning errors,
   omissions, grammar, unnatural phrasing, register inconsistency, wrong glossary use,
   any dash. Keep the translator's choices where they are fine; do not rewrite for taste.
   Legal text: check that every statement is present and precise.
2. Resolve the translator's flags where you can with confidence (fix or confirm).
3. Run `node scripts/check-i18n.mjs <locale>` until it passes.
4. Append to `scripts/i18n/review/<locale>.md`:
   ```
   ## Reviewer
   Confidence after review: high | medium | low (why)
   Changes: N (one line each: key, before, after, reason)
   Still flagged for a native speaker: (table: Key | English | Translation | Why)
   ```
   Keep the translator's table above as it is. Remove nothing.
Write only those three files per locale. No git.

# Translation brief: MyGrowth website (MyGrowth 3.0.0, a Sagomak app)

Translate the website copy from English into your assigned locales. The
standard is the same as the App Store metadata: natural phrasing a native
speaker would write, not a literal translation.

## Inputs (read only)
- `content/site/en.json`: marketing pages (home, support, tutorial, navigation, footer, metadata).
- `content/legal/en.json`: privacy policy and terms of use (plus `meta` and `chrome` labels).
- `scripts/i18n/glossary/<locale>.json`: the app's own words for its UI (tab names,
  Becoming, settings paths, units, default habit names). Use these exact terms
  whenever the copy names something in the app. If a glossary term reads badly
  in a sentence, keep the term as the app has it anyway and flag it.
- Tone reference: `/Users/leo_frht/Desktop/MyWorld/4. MyElleLab/Projects/MyDailySuccess/MyGrowth/MyG - AppStore/Metadata/v3.0.0/<code>.txt`
  (codes: pt-BR, zh-Hans, others as the locale; there is none for bn, fil, ne, sq).
  Match its register (formal or informal address) and its wording for shared ideas.
- For it, es, de only: the current `content/legal/<locale>.json` is already live.
  Keep its wording; change only what the glossary or the English source now requires,
  and add the missing keys.

## Outputs (the only files you may write)
- `content/site/<locale>.json` and `content/legal/<locale>.json`: same structure,
  keys and array lengths as English. In legal files set `"locale": "<locale>"`.
- `scripts/i18n/review/<locale>.md`: your flags (format below).

## Rules
1. No em dash (U+2014) or en dash (U+2013) anywhere, and no hyphen used as a dash
   (" - "). Use commas, colons, full stops or a rewrite. Hyphens inside words are fine.
2. Keep unchanged: MyGrowth, Sagomak, App Store, iPhone, iOS, Apple, Apple ID,
   RevenueCat, RevenueCat, Inc., CSV, JSON, Excel, Google Sheets, Numbers,
   hello@sagomak.com, revenuecat.com, revenuecat.com/privacy, apple.com/legal/privacy, #HABITS, Pro.
3. Keep placeholders exactly: `{pct}`, `{year}`. Keep tags exactly: `<b>…</b>`, `<link>…</link>`
   (translate the text inside them).
4. Never change fields named `col`, `src` or `href`.
5. Settings paths: the English writes them as "Settings, Data Management, Import Data".
   Use the glossary names in the same order, separated the same way (commas), no arrows.
6. Durations and units follow the glossary (h, min, s and so on).
7. Legal text: translate completely and precisely; do not add, drop or soften any
   statement. Use the local official names (for example the local name and acronym
   of the GDPR). Dates in the local format ("Last updated: November 20, 2026").
   Translate `languageNote` and `englishLink` too.
8. Headlines: keep them about as short as the English; they are set large.
9. `lang` object: `label` is the word for "Language"; `current` is the language's own
   name exactly as in this list: English, Italiano, Español, Deutsch, Français,
   Português (Brasil), Dansk, Polski, Română, Shqip, Türkçe, Bahasa Indonesia,
   Bahasa Melayu, Filipino, Русский, Українська, Ελληνικά, हिन्दी, বাংলা, नेपाली, ไทย,
   Tiếng Việt, 日本語, 한국어, 简体中文. `suggest` = "Available in <this language>" written
   in this language (Italian: "Disponibile in italiano"). `switchTo` = "Switch to
   <this language>" in this language (Italian: "Passa all'italiano"). `dismiss` = "Dismiss".
10. CJK and Thai: use the script's own punctuation; no spaces added between words in ja and zh.
11. Run `node scripts/check-i18n.mjs <locale>` and fix until it prints that the locale matches.

## Review file format (`scripts/i18n/review/<locale>.md`)
```
# <locale> (<language name>)
Confidence: high | medium | low (one line why)

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.hero.title | You become what you repeatedly do. | ... | idiom, rendered as ... |
```
Flag every string you are not sure of: idioms, glossary terms that read oddly, legal
terms without a clear local equivalent, anything you would want a native speaker to check.
Write "No flags" under the table header if there are none.

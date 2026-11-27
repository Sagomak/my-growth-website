# Translation brief: new message (2026-11-27)

The English site copy changed to lead with the value for the user (track your
habits every day, build consistency, become who you want to become). Privacy
is now secondary. Update `content/site/<locale>.json` so it matches the new
`content/site/en.json` for exactly these keys (translate each from the new
English; do not touch any other key):

- meta.home.title, meta.home.description
- hero.sub, hero.trust
- year.eyebrow, year.title, year.body
- features.eyebrow, features.title
- features.items.{dashboard,grid,charts,events,widgets,timers}.title and .body
- features.items.themes.body, features.items.languages.body
- privacy.title, privacy.body
- REMOVE privacy.storedTitle, privacy.stored, privacy.neverTitle, privacy.never
  (they no longer exist in English).

Context and tone: warm, direct, second person, like the App Store copy
(`/Users/leo_frht/Desktop/MyWorld/4. MyElleLab/Projects/MyDailySuccess/MyGrowth/MyG - AppStore/Metadata/v3.0.0/<code>.txt`,
codes pt-BR and zh-Hans; none for bn, fil, ne, sq). Reuse the App Store
listing's wording where the idea is the same (the headline "You become what you
repeatedly do." already exists in each locale's hero.title: keep the voice
consistent with it). Use the app glossary `scripts/i18n/glossary/<locale>.json`
for app terms (Consistency, Grid, Charts, Dashboard, Becoming, Events, Today
widget, Habit Grid, Home Screen, Lock Screen). Keep the register of the
locale's existing marketing copy (informal where it is informal).

- meta.home.title: keep "MyGrowth:" at the start; it is a page title, keep it
  under about 65 characters if the language allows.
- hero.trust: a short, rhythmic two-part line under the App Store badge.
- Privacy body: keep the meaning exactly (everything you log stays on your
  iPhone, no account, no cloud, no tracking).

Rules from `scripts/i18n/BRIEF.md` apply: no em or en dash, no " - " used as a
dash, keep names (MyGrowth, iPhone, App Store), keep placeholders. JSON with
2-space indent, UTF-8 unescaped, trailing newline. After writing run
`node scripts/check-i18n.mjs <your locales>` (must pass) and append to
`scripts/i18n/review/<locale>.md` a section "## New message, 2026-11-27" with
any low-confidence string (English, yours, why). Use your own scratch subfolder
if you need helper scripts. Do not commit. Do not touch content/legal.

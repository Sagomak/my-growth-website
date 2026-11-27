# ro (Română)
Confidence: medium (natural copy in the App Store register; several glossary terms read badly and were kept as instructed)

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.tutorial.reminders.items[1][0] | Evening nudge | Împingere de Seară | glossary term kept; literal "push", reads oddly, "Memento de seară" would be better in the app |
| site.tutorial.reminders.items[0][0] | Morning reminder | Alerte de dimineață | glossary term kept; plural "alerts" for a single reminder |
| site.gallery.items[2].alt | days shown up | Zilele afișate | glossary term kept; it means "displayed days" |
| site.faq.items[2].a, site.tutorial.backup.restoreSteps[1] | Import Data | Importă Date | glossary capitalisation kept |
| site.features.items.dashboard.becomingLabel | Becoming | Devii | glossary term; "obiectivul Devii" in running text is stiff |
| site.features.items.charts.consistency | Consistency | Constanță | glossary term; App Store copy uses "consecvență" |
| site.nav.theme.light / dark | Paper / Graphite | Hârtie / Grafit | theme names not in glossary; check the app's labels |
| site.nav.faq | FAQ | Întrebări | shortened for the nav; "Întrebări frecvente" in full elsewhere |
| site.tutorial.importLogs.tips[1] | 'Work out' does not match 'Workout' | 'Antrenamente' nu se potrivește cu 'Antrenament' | example adapted to a plural form |
| site.cta.title | A year from now you will be glad you did. | Peste un an îți vei mulțumi. | rewritten to avoid gendered "bucuros" |
| site.year.body | Every day you show up | Fiecare zi în care ești prezent | "prezent" is masculine; acceptable generic form, check |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Combină cu datele existente | no glossary entry; check the app's option label |
| legal.privacy.rights.* | Your Rights (GDPR) | Drepturile tale (RGPD) | local acronym RGPD used; confirm preference over GDPR |
| legal.terms.liability.body | consequential damages | daune de consecință | legal term, native lawyer check |

## Reviewer
Confidence after review: high (copy and legal text are complete and natural; remaining doubts are app glossary terms, not website wording)

Changes: 2
- site.faq.items[6].a: "Preferăm să construim bine o platformă decât prost două." → "Preferăm să construim bine o singură platformă decât două prost." (natural word order)
- site.a11y.eventsLabel: "o jumătate de an de zile în culorile categoriilor lor" → "zilele unei jumătăți de an, în culorile categoriilor lor" ("an de zile" is an idiom for "a year" and made the phrase ambiguous)

Confirmed translator choices: RGPD is the official Romanian acronym and correct here; "daune de consecință" is in common use in Romanian EULAs; "Peste un an îți vei mulțumi" is a good gender-neutral CTA; "prezent" as generic masculine is acceptable; "Întrebări" in the nav is fine.

Still flagged for a native speaker:

| Key | English | Translation | Why |
|---|---|---|---|
| site.tutorial.reminders.items[0][0] | Morning reminder | Alerte de dimineață | app glossary term is plural; app should say "Memento de dimineață" |
| site.tutorial.reminders.items[1][0] | Evening nudge | Împingere de Seară | app glossary term is a literal "push"; app should say "Memento de seară" |
| site.gallery.items[2].alt | days shown up | Zilele afișate | app glossary term means "displayed days"; fix in the app |
| site.features.items.charts.consistency (and all "Constanță") | Consistency | Constanță | glossary vs App Store "consecvență"; align app, store and site |
| site.faq.items[2].a, site.tutorial.backup.* | Import Data / Export Backup | Importă Date / Exportă Backup | glossary title case is not Romanian style; fix in the app first |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Combină cu datele existente | not in glossary; check the app's option label |

## Skyline strings, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.skyline.skyline | 3D skyline | Skyline 3D | Loanword kept (also in hintOrbit "skyline-ul" and footer); "panoramă" is the alternative. |
| site.skyline.range | {a} to {b} | {a} până la {b} | "de la {a} până la {b}" may read better depending on context. |
| site.skyline.tooltip | {pct} on {date} | {date}: {pct} | Reordered with a colon to avoid preposition choice before a weekday-first date. |
| site.skyline.hintOrbit | ...double click to reset | ...dublu clic ca să resetezi | Check "dublu clic" vs "clic dublu". |

## New message, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.meta.home.title | MyGrowth: track your habits daily and build consistency | MyGrowth: urmărește-ți obiceiurile zilnic și construiește constanță | 67 characters, slightly over the 65 target; Romanian has no shorter natural form. |
| site.features.title | Show up daily. Watch it add up. | Fii prezent zilnic. Privește cum se adună. | Masculine "prezent" (matches the existing "ești prezent" in year.body). |
| site.features.items.widgets.title | Your habits, one glance away. | Obiceiurile tale, la o privire distanță. | Calque of "one glance away"; alternative "mereu la vedere". |
| site.year.body | Small days add up. | Zilele mici se adună. | Literal; "Pas cu pas, zilele se adună" is an option. |

## Review: new message, 2026-11-27

Second reviewer. Meaning, privacy body, glossary (Constanță, Serie, Astăzi, Habit Grid), informal register and dashes checked on all listed keys; removed privacy keys are gone.

| Key | Before | After | Why |
|---|---|---|---|
| site.features.items.widgets.title | Obiceiurile tale, la o privire distanță. | Obiceiurile tale, la doar o privire. | Calque of "one glance away"; "la doar o privire" is the natural form. |
| site.year.body | ... Zilele mici se adună. | ... Pas cu pas, zilele se adună. | "Zilele mici" reads oddly; translator's own alternative is more natural. |

Still doubtful: meta.home.title is 67 characters (target about 65); no shorter natural form without losing meaning. "ești prezent" / "Fii prezent" are masculine, kept because the existing year.body already used it.

Confidence: high.

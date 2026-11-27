# it (Italiano)
Confidence: medium (copy follows the informal "tu" and wording of the App Store text; a few glossary terms from the app read oddly and need a native check)

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.hero.sub | watch showing up turn into progress | vedere la costanza diventare progresso | "showing up" idiom rendered as "costanza" (App Store text has the literal "il presentarti", which reads stiffly) |
| site.year.body | Every day you show up fills a square. | Ogni giorno in cui ti presenti riempie un quadrato. | "show up" idiom, literal; check it reads naturally |
| site.features.items.dashboard.* | Becoming / Becoming goal | Diventi / obiettivo Diventi | glossary term "Diventi" kept; "obiettivo Diventi" reads a little oddly as a label |
| site.features.items.dashboard.becomingGoal | someone who keeps their promises | una persona che mantiene le promesse | written to follow "Diventi ..." |
| site.gallery.items[2].alt | days shown up | Giorni visualizzati | glossary term is a mistranslation ("days displayed", not "days you showed up"). Kept as in the app; the app string should be fixed |
| site.pro.proItems[1] | Full history | Storia completa | glossary term; "Cronologia completa" would be more natural |
| site.pro.free[1] | Current year | Anno corrente | glossary has "Anno corrente solo" (word order odd); used the shorter form without "solo" |
| site.nav.theme.light/dark, themes.* | Paper / Graphite | Carta / Grafite | not in glossary (app has Chiaro/Scuro); website theme names, matched to App Store wording |
| site.features.items.widgets.* | Habit Grid widget, Today widget, Live Activity | widget Griglia delle abitudini, widget Oggi, Attività in tempo reale | widget names not in glossary; Live Activity uses Apple's Italian name; check against the app's widget gallery |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Unisci ai dati esistenti | button not in glossary; check against the app |
| site.tutorial.importLogs.tips[1] | 'Work out' does not match 'Workout' | 'Allena mento' non corrisponde ad 'Allenamento' | example adapted (split word) to the glossary name Allenamento |
| site.tutorial.reminders.items | Morning reminder / Evening nudge | Promemoria Mattutino / Promemoria Serale | glossary names; both are "Promemoria", the nudge nuance is lost |
| site.tutorial.pace.* | Pace, Biking, Track time | Andatura, Bicicletta, Traccia tempo | glossary terms; "Andatura" is less common than "passo" for running |
| site.tutorial.importLogs.columns[0].desc | YYYY-MM-DD | YYYY-MM-DD | format code kept in English letters because the file must use it; Italian would be AAAA-MM-GG |
| legal.privacy.rights.export | Settings, Data Management, Export | Impostazioni, Gestione Dati, Esporta | "Export" is not a glossary item (app has Esporta Backup); check the button label |
| legal.privacy.rights.title | GDPR | GDPR | Italian usage commonly keeps GDPR; the official Italian acronym RGPD is rare |

## Changes to the live legal text
- privacy.rights.export: "tramite Impostazioni → Gestione dati → Esporta (JSON o CSV)" became "tramite Impostazioni, Gestione Dati, Esporta (JSON o CSV)" (brief rule 5: commas, no arrows; glossary "Gestione Dati").
- privacy.rights.delete: "tramite Impostazioni → Gestione dati → Cancella tutti i dati" became "tramite Impostazioni, Gestione Dati, Cancella Tutti i Dati" (rule 5; glossary "Gestione Dati", "Cancella Tutti i Dati").
- Added languageNote: "Questa è una traduzione. In caso di differenze, prevale la versione inglese."
- Added englishLink: "Leggi la versione inglese".

## Reviewer
Confidence after review: high (meaning, glossary use and legal statements check out against the English; the live legal text is unchanged by the review; what remains are app glossary terms and Apple feature names to confirm in the app)

Changes: 3
- site.meta.home.description: "Privato per progettazione: ..." → "Privato fin dalla progettazione: ..." (calque; "fin dalla progettazione" is the established Italian rendering of "by design")
- site.hero.trust: "Privato per progettazione. ..." → "Privato fin dalla progettazione. ..." (same reason)
- site.year.body: "Ogni giorno in cui ti presenti riempie un quadrato." → "Ogni giorno in cui ci sei riempie un quadrato." (resolves the translator's flag; "ti presenti" reads as "introduce yourself")

Translator flags resolved: site.hero.sub confirmed ("costanza" reads naturally); site.year.body fixed; site.pro.free[1] confirmed; legal.privacy.rights.title confirmed (GDPR is standard Italian usage, also in the live text); site.tutorial.importLogs.columns[0].desc confirmed (the file format must stay YYYY-MM-DD). Legal changes made by the translator (paths with commas, glossary "Gestione Dati" / "Cancella Tutti i Dati", languageNote, englishLink) checked and correct.

Still flagged for a native speaker:

| Key | English | Translation | Why |
|---|---|---|---|
| site.features.items.dashboard.*, hero.phoneAlt | Becoming goal | obiettivo Diventi | app glossary term; reads oddly as a label |
| site.gallery.items[2].alt | days shown up | Giorni visualizzati | app string is a mistranslation ("days displayed"); fix in the app, then here |
| site.pro.proItems[1] | Full history | Storia completa | app glossary term; "Cronologia completa" would be more natural |
| site.features.items.widgets.* | Live Activity | Attività in tempo reale | confirm against Apple's Italian name for Live Activities on iOS |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Unisci ai dati esistenti | button not in glossary; confirm against the app |
| site.tutorial.reminders.items | Morning reminder / Evening nudge | Promemoria Mattutino / Promemoria Serale | app glossary names; "nudge" nuance lost |
| site.tutorial.pace.* | Pace, Track time | Andatura, Traccia tempo | app glossary terms; "passo" is more usual for running |
| legal.privacy.rights.export | Settings, Data Management, Export | Impostazioni, Gestione Dati, Esporta | confirm the button label in the app |


## Skyline strings, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.skyline.range | {a} to {b} | dal {a} al {b} | "dal 1 nov" should strictly be "dall'1 nov"; also starts lowercase if shown alone at line start |
| site.skyline.tooltip | {pct} on {date} | {date}: {pct} | reordered with a colon, since "il giovedì 12 novembre" reads awkwardly |
| site.skyline.levelEmpty | Nothing logged | Nessuna registrazione | glossary "Not logged" is "Non registrato"; chose the noun form for a legend swatch |
| site.skyline.flat | Flat heatmap | Heatmap piatta | "piatta" could read as "dull"; "Heatmap 2D" is an alternative |

## New message, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.features.title | Show up daily. Watch it add up. | Esserci ogni giorno. Vederlo crescere. | infinitives instead of imperatives; "Presentati" would read as "introduce yourself"; "add up" rendered as "grow" |
| site.hero.trust | One small step a day. A year of proof. | Un piccolo passo al giorno. Un anno che lo dimostra. | "Un anno di prove" reads as "a year of tests/trials" |
| site.year.body | ... Small days add up. | ... Anche i giorni piccoli si sommano. | "giorni piccoli" is slightly unusual; alternative "Ogni piccolo giorno conta" |
| site.meta.home.title | MyGrowth: track your habits daily and build consistency | MyGrowth: traccia le abitudini ogni giorno e costruisci costanza | "costruisci costanza" is a calque but common in coaching copy; 64 chars |

## Review: new message, 2026-11-27

| Key | Before | After | Why |
|---|---|---|---|
| site.year.body | ... Anche i giorni piccoli si sommano. | ... Anche i giorni più piccoli si sommano. | "i giorni più piccoli" ("even the smallest days") reads more natural than "i giorni piccoli" |
| site.features.items.themes.body | Un look disegnato a mano che rende aprire l'app ogni giorno un piccolo piacere. ... | Un look disegnato a mano che rende un piccolo piacere aprire l'app ogni giorno. ... | word order: "rendere aprire" was awkward |

Still doubtful: site.features.title uses infinitives ("Esserci ogni giorno. Vederlo crescere.") while the rest is imperative; natural for an Italian headline, kept. "costruisci costanza" in meta.home.title and hero.sub is a calque but common in coaching copy, kept. Privacy body checked: exact. Glossary terms (Griglia delle abitudini, widget Oggi, schermata Home, schermata di blocco, Serie, Costanza) correct.

Confidence: high

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

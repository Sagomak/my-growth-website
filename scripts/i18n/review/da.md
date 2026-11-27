# da (Dansk)
Confidence: high ("du" register and wording from the App Store copy; a few glossary terms differ from the store text and need a check)

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.features.items.grid.body | streaks | stimer | glossary "Stime"; the App Store copy says "streaks", kept glossary |
| site.features.items.charts.consistency | Consistency | Konsekvens | glossary term; "Konsekvens" mostly means "consequence" in everyday Danish, "Stabilitet" would read better |
| site.features.items.dashboard.becomingLabel | Becoming | På vej mod | glossary term; goal written as "at blive en, der holder sine løfter" so it reads "På vej mod at blive..." |
| site.gallery.items[2].alt | days shown up | dage vist | glossary "Dage vist" means "days displayed"; likely a wrong app string |
| site.faq.items[2].a | Import Data | Importer Data | glossary capitalisation and missing accent ("Importér data") kept as the app has it; inconsistent with "Eksportér backup" |
| site.features.items.widgets.eyebrow | Live Activity | Live Activity | Apple keeps the English term in Danish; confirm |
| site.features.items.widgets.body | Habit Grid widget | Vanegitter-widget | widget name not in glossary |
| site.tutorial.importLogs.tips[1] | 'Work out' does not match 'Workout' | »Traening« svarer ikke til »Træning« | example adapted: æ spelled out instead of a split word |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Flet med eksisterende | not in glossary; check the app's button label |
| site.tutorial.pace.items[1][1] | km/h | km/h | Danish often writes km/t; kept km/h as glossary units are unchanged |
| site.tutorial.eyebrow | Tutorial | Vejledning | chosen over "Tutorial"; check consistency with any app label |
| legal.privacy.rights.intro | General Data Protection Regulation | databeskyttelsesforordningen (GDPR) | Danish official short name; GDPR acronym kept as commonly used |
| legal.terms.liability.body | indirect, incidental, special, or consequential damages | indirekte tab, hændelige skader, særlige skader eller følgeskader | US-style liability terms have no exact Danish equivalent; native legal check advised |
| legal.terms.governingLaw.body | without regard to conflict of law principles | uden hensyn til lovvalgsregler | legal term to confirm |

## Reviewer
Confidence after review: high (accurate and complete, "du" register and shared phrases match the App Store copy; open points are glossary strings and US-style liability terms)

Changes: 10
- site.nav.home: "MyGrowth forside" → "MyGrowths forside" (Danish does not allow the open compound)
- site.year.todayLabel: "{pct} %" → "{pct} %" (no-break space so % cannot wrap)
- site.features.items.charts.body: "dage med mål nået" → "dage, hvor målet er nået" (ungrammatical noun stack)
- site.features.items.charts.chartLabel: "40 % / 90 %" → no-break spaces (same wrap issue)
- site.features.items.widgets.body: "timere, der lever på din låseskærm" → "timere, der bliver på din låseskærm" (calque of "live on")
- site.features.items.themes.body: "Ord står med håndskrift" → "Ord er håndskrevne" (unidiomatic)
- site.pro.body: "Pro åbner for det hele." → "Pro låser op for det hele." (matches glossary "Lås op")
- site.faq.items[0].a: "Et kort ark åbner" → "Et lille ark åbnes" ("kort" clashed with "kort" = card in the same sentence)
- site.notFound.title: "Siden er her ikke." → "Siden findes ikke." (literal)
- legal.terms.ip.body: "er dets udvikler Sagomaks immaterielle ejendom" → "tilhører som immateriel ejendom dets udvikler, Sagomak" (stacked genitive was hard to parse; meaning unchanged)

Confirmed translator flags: "Live Activity" kept in English (Apple's Danish UI uses it), "Vejledning" for Tutorial (fine), legal.terms.governingLaw.body "uden hensyn til lovvalgsregler" (standard Danish wording), legal.privacy.rights.intro "databeskyttelsesforordningen (GDPR)" (official short name, acronym in common use). "Track det" and "Du bliver det, du gentager" kept: App Store wording.

Still flagged for a native speaker:

| Key | English | Translation | Why |
|---|---|---|---|
| site.features.items.charts.consistency | Consistency | Konsekvens | glossary term; reads as "consequence"; "Stabilitet" would be better, fix in the app first |
| site.features.items.grid.body | streaks | stimer | glossary "Stime"; App Store copy says "streaks" |
| site.features.items.dashboard.becomingLabel | Becoming | På vej mod | glossary term; incomplete as a bare label |
| site.gallery.items[2].alt | days shown up | dage vist | glossary string means "days displayed"; likely wrong in the app |
| site.faq.items[2].a and tutorial steps | Import Data | Importer Data | glossary spelling kept; inconsistent with "Eksportér backup" |
| site.features.items.widgets.body | Habit Grid widget | Vanegitter-widget | widget name not in glossary |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Flet med eksisterende | button label not in glossary |
| site.tutorial.pace.items[1][1] | km/h | km/h | Danish usually writes km/t |
| legal.terms.liability.body | indirect, incidental, special, or consequential damages | indirekte tab, hændelige skader, særlige skader eller følgeskader | US liability categories have no exact Danish equivalent; legal check advised |

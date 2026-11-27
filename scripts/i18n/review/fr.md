# fr (Français)
Confidence: high (informal "tu" as in the App Store copy, glossary terms used throughout; a few glossary terms and one adapted example need a native check)

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.hero.title | You become what you repeatedly do. | Tu deviens ce que tu fais chaque jour. | idiom; App Store uses "ce que tu fais avec régularité", shortened for the headline |
| site.hero.sub | so you can watch showing up turn into progress | pour que tu voies ta régularité devenir un progrès | "showing up" rendered as "ta régularité"; App Store keeps the literal "être présent" |
| site.features.items.dashboard.becomingLabel | Becoming | Deviens | glossary term; reads oddly as a bare label and in "l'objectif Deviens" |
| site.gallery.items[2].alt | days shown up | jours affichés | glossary "Days shown up" = "Jours affichés" means "days displayed"; likely a wrong app string |
| site.features.items.widgets.eyebrow | Widgets and Live Activity | Widgets et Activité en direct | Apple's French name for Live Activities to confirm ("Activités en direct") |
| site.features.items.widgets.body | Habit Grid widget | widget Grille d'habitude | widget name not in glossary; check against the app's widget name |
| site.features.items.languages.title | In your language. 25 of them. | Dans ta langue. Parmi 25. | compressed phrasing, check it reads naturally |
| site.tutorial.importLogs.tips[1] | 'Work out' does not match 'Workout' | « Entrainement » sans accent ne correspond pas à « Entraînement » | example adapted: missing accent instead of a split word |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Fusionner avec l'existant | not in glossary; check the app's button label |
| site.tutorial.reminders.items | Default: 9:00 / 21:00 | 9:00 / 21:00 | kept app format; French usage would be 9 h 00 |
| site.year.todayLabel | {pct}% | {pct} % | French spacing before %; regular space, may wrap |
| legal.* | (whole file) | tutoiement | legal text uses "tu" to match the app and the Italian legal page; confirm this register is wanted in French legal copy |
| legal.privacy.rights.title | Your Rights (GDPR) | Tes droits (RGPD) | local acronym RGPD used throughout |
| legal.terms.governingLaw.body | without regard to conflict of law principles | sans égard aux principes de conflit de lois | legal term to confirm |

## Reviewer
Confidence after review: high (accurate and complete, consistent "tu" register, glossary respected; remaining doubts are app strings and one register choice only the owner can settle)

Changes: 13
- site.hero.sub: "pour que tu voies ta régularité devenir un progrès" → "pour voir ta régularité se transformer en progrès" (more natural, "un progrès" read oddly)
- site.year.todayLabel: "{pct} %" → "{pct} %" (no-break space so the % sign cannot wrap; resolves flag)
- site.features.items.charts.body: "jours objectif atteint" → "jours où la cible est atteinte" (ungrammatical noun stack; glossary "Cible")
- site.features.items.charts.chartLabel: "40 % / 90 %" → no-break spaces (same wrap issue)
- site.features.items.widgets.body: "des minuteurs qui vivent sur ton écran verrouillé" → "qui restent affichés sur ton écran verrouillé" (calque of "live on")
- site.features.items.languages.title: "Dans ta langue. Parmi 25." → "Dans ta langue. 25 au choix." (fragment did not read as French; resolves flag)
- site.pro.body: "Pro ouvre tout." → "Pro débloque tout." (idiomatic for unlocking features)
- site.pro.proItems[2]: "sur tout le temps" → "sur tout l'historique" (calque of "all time")
- site.pro.plans: "une fois pour toujours" → "une fois pour toutes" (fixed expression)
- site.notFound.title: "Cette page n'est pas là." → "Cette page est introuvable." (literal)
- site.a11y.mainNav: "Principale" → "Navigation principale" (bare adjective as an aria label is meaningless to a screen reader user)
- legal.privacy.children.title: "Protection des enfants" → "Vie privée des enfants" (precision: the section is about privacy, not child protection in general)
- legal.terms.governingLaw.body: "sans égard aux principes de conflit de lois" → "sans tenir compte des règles de conflit de lois" (standard French contract wording; resolves flag)

Confirmed translator flags: site.hero.title (fine as is), widgets.eyebrow "Activité en direct" (matches Apple's French "Activités en direct"; App Store copy also says "en direct").

Still flagged for a native speaker:

| Key | English | Translation | Why |
|---|---|---|---|
| site.features.items.dashboard.becomingLabel | Becoming | Deviens | glossary term; imperative reads oddly as a label and in "l'objectif Deviens" |
| site.gallery.items[2].alt | days shown up | jours affichés | glossary string means "days displayed"; the app string itself looks wrong |
| site.features.items.widgets.body | Habit Grid widget | widget Grille d'habitude | widget name not in glossary; check against the app |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Fusionner avec l'existant | button label not in glossary; check against the app |
| site.tutorial.reminders.items | Default: 9:00 / 21:00 | 9:00 / 21:00 | kept app format; French print usage is 9 h 00 |
| site.pro.proItems[2] | All time charts and averages | Graphiques et moyennes sur tout l'historique | glossary has "Tout le temps + moyennes", which is a calque; I deviated here as this is marketing copy, not a UI label |
| legal.* | (whole file) | tutoiement | "tu" in legal text matches the app and the Italian page; confirm the owner wants it in French legal copy |

## Formal address (legal), 2026-11-27

Legal pages switched from informal to formal address (tu → vous). Marketing copy (content/site) stays informal. Changed key paths (31):

- legal.meta.privacy.description
- legal.privacy.intro
- legal.privacy.short.body
- legal.privacy.stored.intro
- legal.privacy.stored.footer
- legal.privacy.rights.title
- legal.privacy.rights.intro
- legal.privacy.rights.access
- legal.privacy.rights.export
- legal.privacy.rights.delete
- legal.privacy.rights.rectify
- legal.privacy.rights.footer
- legal.privacy.retention.body
- legal.privacy.purchases.body[0]
- legal.privacy.purchases.body[1]
- legal.privacy.purchases.body[2]
- legal.terms.intro
- legal.terms.acceptance.body
- legal.terms.description.body
- legal.terms.responsibilities.items[0]
- legal.terms.responsibilities.items[1]
- legal.terms.responsibilities.items[2]
- legal.terms.responsibilities.items[3]
- legal.terms.dataPrivacy.item1
- legal.terms.dataPrivacy.item2
- legal.terms.dataPrivacy.item3
- legal.terms.ip.body
- legal.terms.iap.body
- legal.terms.liability.body
- legal.terms.dataLoss.body
- legal.terms.termination.body

Doubts:

- terms.acceptance.body: "vous acceptez d'être lié" keeps the masculine singular "lié" (polite singular vous, generic masculine as before); "liés" would only fit a plural reading.
- terms.responsibilities.items[0], [1]: "Vous êtes responsable" kept singular for the same reason.
- chrome.*, englishLink ("Lire la version anglaise"): infinitive or neutral, no address, left unchanged.


## Skyline strings, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.skyline.range | {a} to {b} | du {a} au {b} | "du 1 nov." where French would write "1er"; lowercase "du" if it opens a line |
| site.skyline.skyline | 3D skyline | Skyline 3D | feminine "la skyline" used in hintOrbit; gender of the anglicism varies |
| site.skyline.hintOrbit | Drag to turn the skyline, double click to reset | Fais glisser pour faire tourner la skyline, double-clique pour la réinitialiser | "double-clique" uses an in-word hyphen (allowed by the brief) |

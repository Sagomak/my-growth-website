# es (Español)
Confidence: medium (copy follows the informal "tú" and wording of the App Store text; several glossary terms read oddly in sentences and need a native check)

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.year.body | Every day you show up fills a square. | Cada día que cumples llena un cuadrado. | "show up" idiom rendered as "cumplir" |
| site.hero.sub | watch showing up turn into progress | veas cómo la constancia se convierte en progreso | idiom rendered freely |
| site.features.items.dashboard.* | Becoming / Becoming goal | Rumbo a / meta de Rumbo a | glossary term "Rumbo a" kept; "tu meta de Rumbo a" reads oddly |
| site.features.items.dashboard.becomingGoal | someone who keeps their promises | ser alguien que cumple sus promesas | written to follow "Rumbo a ..." |
| site.gallery.items[2].alt | days shown up | Días mostrados | glossary term is a mistranslation ("days displayed"). Kept as in the app; the app string should be fixed |
| site.footer.privacy/terms, legal titles | Privacy Policy / Terms of Use | Política de privacidad / Términos de uso | glossary has title case (Política de Privacidad, Términos de Uso); kept the live legal pages' sentence case, which is standard Spanish. Confirm |
| site.nav.theme.light/dark, themes.* | Paper / Graphite | Papel / Grafito | not in glossary (app has Claro/Oscuro); matched to App Store wording |
| site.features.items.widgets.* | Habit Grid widget, Today widget, Live Activity | widget de Cuadrícula de hábitos, widget Hoy, Actividad en vivo | widget names not in glossary; check against the app |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Combinar con los existentes | button not in glossary; check against the app |
| site.tutorial.importLogs.tips[1] | 'Work out' does not match 'Workout' | 'Entrena miento' no coincide con 'Entrenamiento' | example adapted to the glossary name |
| site.tutorial.reminders.items | Morning reminder / Evening nudge | Recordatorio de la mañana / Recordatorio Nocturno | glossary names, with inconsistent capitalisation in the app |
| site.tutorial.pace.intro | turn on time tracking | activa Rastrear tiempo | glossary term; "Rastrear" sounds like a calque, "Registrar tiempo" would be more natural |
| site.nav.faq | FAQ | Preguntas | short nav label; "FAQ" is less common in Spanish |
| site.features.items.languages.title | In your language. 25 of them. | En tu idioma. Y en 24 más. | rewritten as "and 24 more" |
| legal.privacy.rights.export | Settings, Data Management, Export | Configuración, Gestión de Datos, Exportar | "Export" not a glossary item; check the button label |
| legal.terms.liability.body | consequential damages | daños consecuentes | common-law term; a lawyer may prefer "daños emergentes" or similar |

## Changes to the live legal text
- privacy.rights.export: "en Ajustes → Gestión de datos → Exportar (JSON o CSV)" became "en Configuración, Gestión de Datos, Exportar (JSON o CSV)" (rule 5: commas, no arrows; glossary "Configuración", "Gestión de Datos").
- privacy.rights.delete: "en Ajustes → Gestión de datos → Borrar todos los datos" became "en Configuración, Gestión de Datos, Borrar Todos los Datos" (rule 5; glossary "Configuración", "Gestión de Datos", "Borrar Todos los Datos").
- Added languageNote: "Esta es una traducción. En caso de diferencias, prevalece la versión en inglés."
- Added englishLink: "Leer la versión en inglés".

## Reviewer
Confidence after review: high (meaning, register and legal statements check out against the English; the live legal text is unchanged by the review; what remains are app glossary terms and Apple feature names to confirm in the app)

Changes: 0

Translator flags resolved: site.year.body and site.hero.sub confirmed ("cumplir" and "constancia" read naturally); site.footer.privacy/terms and legal titles confirmed (sentence case is the standard Spanish spelling for these page titles); site.nav.faq confirmed ("Preguntas" works as a short nav label); site.features.items.languages.title confirmed; site.tutorial.importLogs.tips[1] confirmed. Legal changes made by the translator (paths with commas, glossary "Configuración" / "Gestión de Datos" / "Borrar Todos los Datos", languageNote, englishLink) checked and correct.

Still flagged for a native speaker:

| Key | English | Translation | Why |
|---|---|---|---|
| site.features.items.dashboard.*, hero.phoneAlt | Becoming goal | meta de Rumbo a | app glossary term; reads oddly as a label |
| site.gallery.items[2].alt | days shown up | Días mostrados | app string is a mistranslation ("days displayed"); fix in the app, then here |
| site.features.items.widgets.* | Live Activity | Actividad en vivo | confirm against Apple's Spanish name for Live Activities (Spain vs Latin America may differ) |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Combinar con los existentes | button not in glossary; confirm against the app |
| site.tutorial.reminders.items | Morning reminder / Evening nudge | Recordatorio de la mañana / Recordatorio Nocturno | app glossary names with inconsistent capitalisation |
| site.tutorial.pace.intro | Track time | Rastrear tiempo | app glossary term; "Registrar tiempo" would be more natural |
| legal.privacy.rights.export | Settings, Data Management, Export | Configuración, Gestión de Datos, Exportar | confirm the button label in the app |
| legal.terms.liability.body | consequential damages, including but not limited to | daños consecuentes, incluida, entre otros | live wording kept; a lawyer may prefer "daños emergentes" and "sin carácter limitativo" |


## Skyline strings, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.skyline.range | {a} to {b} | del {a} al {b} | lowercase "del" if the string opens a line on its own |
| site.skyline.avg | Average consistency | Constancia promedio | glossary Average = Promedio; "Constancia media" is equally natural |
| site.skyline.goal | Runs count the days at or above the {goal} goal. | Las rachas cuentan los días que alcanzan o superan la meta del {goal}. | glossary Goal = Meta (site elsewhere says "objetivo") |

# de (Deutsch)
Confidence: medium (copy follows the informal "du" and wording of the App Store text; several glossary terms from the app are awkward German and need a native check)

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.features.items.dashboard.*, hero.phoneAlt | Becoming / Becoming goal | Werde zu / Ziel bei „Werde zu“ | glossary term kept; awkward as a label in running text |
| site.features.items.dashboard.becomingGoal | someone who keeps their promises | jemandem, der seine Versprechen hält | dative so it continues "Werde zu ..." |
| site.gallery.items[2].alt | days shown up | Tage angezeigt | glossary term is a mistranslation ("days displayed"). Kept as in the app; the app string should be fixed |
| site.faq.items[3].a, tutorial.backup.exportSteps[1] | Export Backup | Exportieren Backup | glossary term is ungrammatical ("Backup exportieren" would be correct). Kept as in the app; the app string should be fixed |
| site.tutorial.reminders.items | Morning reminder / Evening nudge | Morgen Erinnerung / Abend Erinnerung | glossary names miss the compound ("Morgenerinnerung"). Kept as in the app |
| site.tutorial.importLogs.columns[2].desc, faq | hours | Stunden | glossary has lowercase "stunden" (an app bug); capitalised as German requires |
| site.nav.support, footer.support, support.eyebrow | Support | Support | glossary has "Unterstützung"; kept "Support" as in the live legal pages, which is standard for a help page |
| site.pro.free[1] | Current year | Aktuelles Jahr | glossary "Aktuelles Jahr nur" has odd word order; used the short form |
| site.nav.theme.light/dark, themes.* | Paper / Graphite | Papier / Graphit | not in glossary (app has Hell/Dunkel); matched to App Store wording |
| site.features.items.widgets.* | Habit Grid widget, Today widget, Live Activity | Gewohnheitsraster-Widget, Heute-Widget, Live-Aktivität | widget names not in glossary; check against the app |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Mit vorhandenen zusammenführen | button not in glossary; check against the app |
| site.tutorial.pace.* | Pace | Tempo | glossary term; fine for running |
| site.features.items.languages.title | In your language. 25 of them. | In deiner Sprache. Eine von 25. | rewritten |
| legal.terms.acceptance.body | agree to be bound by | erklärst du dich mit diesen Nutzungsbedingungen einverstanden | live wording kept; it does not say "bound" explicitly, a lawyer may want "an diese Nutzungsbedingungen gebunden zu sein" |
| legal.terms.liability.body | incidental, special damages | zufällige, besondere Schäden | common-law terms with no exact German equivalent; under German law such exclusions are limited anyway |
| legal.privacy.rights.export | Settings, Data Management, Export | Einstellungen, Datenverwaltung, Exportieren | "Export" not a glossary item; check the button label |

## Changes to the live legal text
- privacy.rights.export: "über Einstellungen → Datenverwaltung → Exportieren (JSON oder CSV)" became "über Einstellungen, Datenverwaltung, Exportieren (JSON oder CSV)" (rule 5: commas, no arrows).
- privacy.rights.delete: "über Einstellungen → Datenverwaltung → Alle Daten löschen" became "über Einstellungen, Datenverwaltung, Alle Daten löschen" (rule 5).
- Added languageNote: "Dies ist eine Übersetzung. Bei Abweichungen gilt die englische Fassung."
- Added englishLink: "Englische Fassung lesen".

## Reviewer
Confidence after review: high (meaning, register and legal statements check out against the English after one legal fix; what remains are app glossary terms that are awkward German and should be fixed in the app first)

Changes: 6
- site.nav.home: "MyGrowth Startseite" → "MyGrowth-Startseite" (German compound needs the hyphen)
- site.hero.phoneAlt: "Das MyGrowth Dashboard: ..." → "Das MyGrowth-Dashboard: ..." (same)
- site.gallery.items[2].alt: "Ein Diagramm für Laufen mit seinem Ziel von 5 km, mit Tage angezeigt, ..." → "Ein Diagramm für Laufen, gemessen am Ziel von 5 km, mit „Tage angezeigt“, ..." ("against" was lost; the app label in running text needs quotes to parse)
- site.faq.items[3].a: "Mit Pro speichert Einstellungen, Datenverwaltung, Exportieren Backup jede Gewohnheit ..." → "Mit Pro tippst du unter Einstellungen, Datenverwaltung auf Exportieren Backup: Das speichert jede Gewohnheit ..." (verb-second order made "Einstellungen" read as the subject)
- site.tutorial.pace.intro: "schaltest du in der Gewohnheit Zeit verfolgen ein" → "schaltest du in der Gewohnheit „Zeit verfolgen“ ein" (the setting name ran into the verb)
- legal.terms.dataPrivacy.item2 (LEGAL CHANGE to live text): "Wir erheben, übertragen oder haben keinen Zugriff auf deine Gewohnheiten, Einträge oder Notizen" → "Wir erheben und übertragen deine Gewohnheiten, Einträge oder Notizen nicht und haben keinen Zugriff darauf" (the live sentence put the negation only on "Zugriff", so it literally read "we collect, transmit or have no access")

Translator flags resolved: site.features.items.languages.title confirmed; site.pro.free[1] confirmed; site.nav.support confirmed ("Support" is standard for a help page); hours capitalised as "Stunden" confirmed; legal.terms.acceptance.body confirmed as not wrong ("erklärst du dich einverstanden" is the usual German consent wording), kept live. Legal changes made by the translator (paths with commas, languageNote, englishLink) checked and correct.

Still flagged for a native speaker:

| Key | English | Translation | Why |
|---|---|---|---|
| site.features.items.dashboard.*, hero.phoneAlt | Becoming goal | Ziel bei „Werde zu“ | app glossary term; awkward as a label |
| site.gallery.items[2].alt | days shown up | Tage angezeigt | app string is a mistranslation ("days displayed"); fix in the app, then here |
| site.faq.items[3].a, tutorial.backup.exportSteps[1] | Export Backup | Exportieren Backup | app string is ungrammatical ("Backup exportieren"); fix in the app, then here |
| site.tutorial.reminders.items | Morning reminder / Evening nudge | Morgen Erinnerung / Abend Erinnerung | app strings miss the compound ("Morgenerinnerung"); fix in the app, then here |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Mit vorhandenen zusammenführen | button not in glossary; confirm against the app |
| legal.privacy.rights.export | Settings, Data Management, Export | Einstellungen, Datenverwaltung, Exportieren | confirm the button label in the app |
| legal.terms.liability.body | incidental, special damages | zufällige, besondere Schäden | common-law terms with no exact German equivalent; such exclusions are limited under German law anyway |

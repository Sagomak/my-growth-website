# pl (Polski)
Confidence: medium (copy reads naturally, but several glossary terms are weak and some forms default to masculine address)

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.tutorial.reminders.items[0][0] | Morning reminder | Poranna Przypomnienie | glossary term kept as the app has it; it is ungrammatical (should be "Poranne przypomnienie"), fix in the app |
| site.gallery.items[2].alt | days shown up | Pokazane dni | glossary term kept; it means "displayed days", not "days you showed up" |
| site.gallery.items[2].alt | total | Całkowity | glossary term kept; adjective used as a label, "Suma" would read better |
| site.features.items.grid.body, site.tutorial.streaks.* | streaks | passy | glossary "Passa"; App Store copy uses "seria", check which the app shows |
| site.features.items.dashboard.becomingLabel | Becoming | Stajesz się | glossary term; as a label before "kimś, kto dotrzymuje obietnic" it works, but "cel Stajesz się" in running text is stiff |
| site.nav.theme.light / dark | Paper / Graphite | Papier / Grafit | theme names not in glossary; check the app's own labels |
| site.pro.proItems[2] | All time charts and averages | Wykresy i średnie z całego czasu | glossary has "Cały czas + średnie"; rewritten as a phrase |
| site.pro.proItems[6] | Habits on scheduled days | Nawyki w zaplanowane dni | glossary "Zaplanuj dni" is an imperative, not used |
| site.hero.sub | watch showing up turn into progress | żeby było widać, jak codzienna obecność zamienia się w postęp | idiom "showing up" rendered as "daily presence" |
| site.tutorial.importLogs.tips[1] | 'Work out' does not match 'Workout' | 'Treningi' nie pasuje do 'Trening' | example adapted: plural form instead of a split word |
| site.cta.title | A year from now you will be glad you did. | Za rok sobie za to podziękujesz. | rewritten to avoid gendered past tense |
| site.features.items.widgets.body | Habit Grid widget | Widżet Habit Grid | widget name left in English; check the name in the Polish widget gallery |
| legal.privacy.rights.export | Export | Eksportuj | no glossary entry for plain "Export"; check the button label |
| legal.privacy.children.body | under 16 | poniżej 16 roku życia | legal phrasing, native check |
| legal.terms.governingLaw.body | without regard to conflict of law principles | z wyłączeniem norm kolizyjnych | legal term, native lawyer check |

## Reviewer
Confidence after review: high (copy and legal text are complete and natural; remaining doubts are glossary terms the app itself must fix, not website wording)

Changes: 4
- site.privacy.never[1]: "adresu e-mail, telefonu ani" → "adresu e-mail, numeru telefonu ani" (we collect a phone number, not a phone)
- site.pro.proItems[2]: "Wykresy i średnie z całego czasu" → "Wykresy i średnie z całej historii" ("z całego czasu" is unidiomatic)
- legal.privacy.children.body: "poniżej 16 roku życia" → "poniżej 16. roku życia" (ordinal needs the full stop)
- legal.privacy.stored.items[2]: "stan wprowadzenia" → "stan wprowadzenia do aplikacji" (bare "wprowadzenie" is unclear for onboarding)

Confirmed translator choices: "Tryb jasny leży na ciepłym papierze" matches the App Store copy; "Za rok sobie za to podziękujesz" is a good gender-neutral CTA; "Treningi" example is fine; "z wyłączeniem norm kolizyjnych" is the standard Polish legal phrase; "poniżej 16. roku życia" is correct legal phrasing.

Still flagged for a native speaker:

| Key | English | Translation | Why |
|---|---|---|---|
| site.tutorial.reminders.items[0][0] | Morning reminder | Poranna Przypomnienie | app glossary term is ungrammatical; should be "Poranne przypomnienie" in the app, then here |
| site.gallery.items[2].alt | days shown up / total | Pokazane dni / Całkowity | app glossary terms with wrong meaning or part of speech; fix in the app ("Dni obecności", "Suma") |
| site.features.items.grid.body, site.tutorial.streaks.* | streak | passa | glossary "Passa" while App Store copy uses "seria"; pick one across app, store and site |
| site.features.items.widgets.body, widget.label | Habit Grid widget | Widżet Habit Grid | widget name left in English; confirm against the Polish widget gallery |

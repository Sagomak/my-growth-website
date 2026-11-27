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

## Skyline strings, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.skyline.skyline | 3D skyline | Panorama 3D | "skyline" rendered as "panorama" (city panorama); also used in hintOrbit and footer ("Wykres panoramy"). A native may prefer the loanword "skyline". |
| site.skyline.tooltip | {pct} on {date} | {date}: {pct} | Reordered with a colon; "w dniu {date}" before a weekday-first date reads stiffly. |
| site.skyline.range | {a} to {b} | od {a} do {b} | "od" added; check it reads well after a stat label. |
| site.skyline.levelEmpty | Nothing logged | Brak wpisów | Glossary "Not logged" is "Nie zalogowano" (means "not signed in"), so not used. |
| site.skyline.goal | Runs count the days at or above the {goal} goal. | Do passy liczą się dni, w których osiągasz cel {goal} lub więcej. | Rephrased; "Passa" glossary term used for "run". |

## New message, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.year.body | Small days add up. | Małe dni się sumują. | Literal; a native may prefer "Drobne kroki się sumują." |
| site.features.title | Show up daily. Watch it add up. | Pojawiaj się codziennie. Patrz, jak to się sumuje. | "Pojawiaj się" mirrors "się pojawiasz" in year.body; "to" is vague, as in English. |
| site.hero.trust | One small step a day. A year of proof. | Jeden mały krok dziennie. Rok dowodów. | "Rok dowodów" is short but slightly abstract. |
| site.features.items.widgets.title | Your habits, one glance away. | Twoje nawyki zawsze pod ręką. | Idiom swapped ("always at hand"); no natural "one glance away". |

## Review: new message, 2026-11-27

Second reviewer. Meaning, privacy body, glossary (Konsekwencja, Passa, Dziś, Habit Grid), informal "ty" register and dashes checked on all listed keys; removed privacy keys are gone.

| Key | Before | After | Why |
|---|---|---|---|
| site.features.title | Pojawiaj się codziennie. Patrz, jak to się sumuje. | Działaj codziennie. Patrz, jak to się sumuje. | "Pojawiaj się" as an imperative reads as "make appearances"; "Działaj" is the natural motivational verb. |
| site.year.body | ... Małe dni się sumują. | ... Drobne kroki się sumują. | "Małe dni" is a calque; "drobne kroki" echoes hero.trust ("mały krok"). |
| site.features.items.charts.body | Przesuń wstecz przez historię ... | Przewiń historię wstecz ... | More idiomatic for scrolling back through history. |

Still doubtful: "w którym się pojawiasz" in year.body is kept because it predates this change; a native may prefer "w którym działasz". "Rok dowodów" (hero.trust) is acceptable but abstract.

Confidence: high.

# ru (Русский)
Confidence: medium (copy reads naturally in formal "вы" as in the App Store text, but several glossary terms read oddly in sentences and need a native check)

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.hero.phoneAlt, site.features.items.dashboard.* | Becoming / Becoming goal | «Стать» / цель «Стать» | glossary term "Стать" is an infinitive; reads oddly as a label ("цель «Стать»"). Kept as in the app |
| site.features.items.dashboard.becomingGoal | someone who keeps their promises | человеком, который держит слово | instrumental case so it continues "Стать …"; idiom "держать слово" |
| site.gallery.items[2].alt | days shown up | «Показаны дни» | glossary term is a mistranslation ("days are displayed", not "days you showed up"). Kept as in the app; the app string itself should be fixed |
| site.pro.proItems[0] | Unlimited habits | Неограниченные привычки | glossary term; more natural would be "Неограниченное число привычек" |
| site.year.body | Every day you show up fills a square. | Каждый день, когда вы делаете своё дело, заполняет квадрат. | "show up" idiom rendered freely |
| site.hero.sub | watch showing up turn into progress | как ежедневное появление превращается в прогресс | wording taken from the App Store description; slightly literal |
| site.features.items.widgets.* | Habit Grid widget, Today widget, Live Activity | виджет «Сетка привычек», виджет «Сегодня», Live Activity | widget names not in glossary; check against the app's widget gallery. "Live Activity" left in English |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | «Объединить с существующими» | button not in glossary; check against the app |
| site.tutorial.importLogs.tips[1] | 'Work out' does not match 'Workout' | «Тренировки» не совпадает с «Тренировка» | example changed (plural form instead of split word) so it works in Russian |
| site.nav.theme.light/dark | Paper / Graphite | Бумага / Графит | website theme names, not the glossary "Светлый/Темный" |
| site.pace.items[1] | Biking | Велосипед | glossary habit name |
| legal.privacy.rights.* | General Data Protection Regulation (GDPR) | Общий регламент ЕС по защите данных (GDPR) | no Russian legal equivalent; English acronym kept as is common |
| legal.privacy.rights.export | Settings, Data Management, Export | Настройки, Управление данными, Экспорт | "Export" is not a glossary item; check the button label in the app |
| legal.terms.liability.body | indirect, incidental, special, or consequential damages | косвенные, случайные, особые или последующие убытки | common-law terms with no exact Russian equivalent; a lawyer may prefer different wording |
| legal.privacy.purchases.body[1] | locale | языковой регион | technical term, check |

## Reviewer
Confidence after review: high (meaning, register and legal statements all check out against the English; remaining doubts are app glossary strings, not website copy)
Changes: 6
- site.features.items.themes.body, "Светлая тема лежит на тёплой бумаге. Тёмная тема стала мягким графитом вместо чистого чёрного.", "Светлая тема построена на тёплой бумаге. Тёмная выполнена в мягком графите, а не в чистом чёрном.", "лежит на" is unnatural; "стала" wrongly implies a change
- site.pro.body, "…пользоваться им с тремя привычками.", "…пользоваться им, если привычек не больше трёх.", "up to three" was lost
- site.tutorial.reminders.footer, "Оба можно изменить в Настройки, Уведомления.", "Оба можно изменить в разделе Настройки, Уведомления.", grammar (path after preposition needs a head noun)
- site.tutorial.importLogs.tips[1], "подходят оба,", "подходят оба варианта,", agreement with feminine nouns
- legal.privacy.thirdParty.body, "Единственный сторонний SDK в нём это RevenueCat", "В нём есть только один сторонний SDK: RevenueCat", copula needs a dash in Russian; rewritten to avoid it
- legal.terms.description.body, "MyGrowth это персональное приложение … для iOS.", "MyGrowth представляет собой персональное приложение … на iOS.", same dash issue, and doubled "для"

Translator flags resolved: Paper/Graphite theme names (confirmed, website names), tips[1] example (confirmed), GDPR naming (confirmed, usual Russian practice), "языковой регион" for locale (confirmed), liability terms (confirmed, standard Russian rendering of common-law terms).

Still flagged for a native speaker:

| Key | English | Translation | Why |
|---|---|---|---|
| site.hero.phoneAlt, site.features.items.dashboard.* | Becoming | «Стать» | app glossary term; an infinitive reads oddly as a label |
| site.gallery.items[2].alt | days shown up | «Показаны дни» | app glossary mistranslation ("days are displayed"); fix in the app |
| site.pro.proItems[0] | Unlimited habits | Неограниченные привычки | app glossary term; "Неограниченное число привычек" is more natural |
| site.hero.sub | watch showing up turn into progress | ежедневное появление превращается в прогресс | taken from the App Store text; "появление" is literal |
| site.features.items.widgets.body | Habit Grid widget, Today widget | виджет «Сетка привычек», виджет «Сегодня» | check the app's widget gallery names |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | «Объединить с существующими» | button not in glossary; check the app |
| legal.privacy.rights.export | Settings, Data Management, Export | Настройки, Управление данными, Экспорт | "Export" button not in glossary |


## Skyline strings, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.skyline.skyline | 3D skyline | 3D-вид | "skyline" has no natural Russian toggle label; used "3D view" |
| site.skyline.tooltip, empty | {pct} on {date} / Nothing logged on {date} | {date}: {pct} / {date}: нет записей | reordered as "date: value" to avoid case agreement with the browser date |
| site.skyline.range | {a} to {b} | с {a} по {b} | needs genitive dates ("12 нояб."), which Intl gives; check in the browser |
| site.skyline.goal | Runs count the days at or above the {goal} goal. | В серию входят дни с результатом не ниже цели {goal}. | rephrased |
| site.skyline.levelEmpty | Nothing logged | Нет записей | glossary "Not logged" is «Не зафиксировано»; shorter form chosen for the legend |
| site.footer.skyline | Skyline chart adapted from | Диаграмма skyline создана на основе | followed by the English link title |

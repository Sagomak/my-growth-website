# uk (Українська)
Confidence: medium (copy follows the formal "ви" of the App Store text and reads naturally, but several glossary terms are awkward in sentences and need a native check)

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.hero.phoneAlt, site.features.items.dashboard.* | Becoming / Becoming goal | «Стаєш» / мета «Стаєш» | glossary term is informal 2nd person ("you become") while the site uses "ви"; reads oddly as a label. Kept as in the app |
| site.features.items.dashboard.becomingGoal | someone who keeps their promises | людиною, яка тримає слово | instrumental case so it continues "Стаєш …"; idiom "тримати слово" |
| site.gallery.items[2].alt | days shown up | «Дні, що відображаються» | glossary term is a mistranslation ("days that are displayed"). Kept as in the app; the app string should be fixed |
| site.pro.proItems[5] | Custom colours | Кастомні кольори | glossary term is colloquial; "Власні кольори" would be more standard |
| site.pro.proItems[0] | Unlimited habits | Безлімітні звички | glossary term, slightly colloquial |
| site.tutorial.importLogs.columns[2].desc | Examples: hours, minutes, km | години, хвилин, км | glossary units mix nominative and genitive ("хвилин"); kept as in the app |
| site.tutorial.pace.*, site.tutorial.pace.items[1] | Biking | Велосипедування | glossary habit name; uncommon word, "Велосипед" or "Їзда на велосипеді" is more usual |
| site.year.body | Every day you show up fills a square. | Кожен день, коли ви робите своє, заповнює квадрат. | "show up" idiom rendered freely |
| site.hero.sub | watch showing up turn into progress | як щоденна присутність стає поступом | wording from the App Store description |
| site.features.items.widgets.* | Home Screen, Habit Grid widget, Today widget, Live Activity | екран «Початок», віджет «Сітка звичок», віджет «Сьогодні», Live Activity | check Apple's Ukrainian name for the Home Screen and the app's widget names; "Live Activity" left in English |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | «Об'єднати з наявними» | button not in glossary; check against the app |
| site.tutorial.importLogs.tips[1] | 'Work out' does not match 'Workout' | «Тренування вранці» не збігається з «Тренування» | example changed so it works in Ukrainian |
| site.nav.theme.light/dark | Paper / Graphite | Папір / Графіт | website theme names, not the glossary "Світлий/Темний" |
| legal.privacy.rights.* | General Data Protection Regulation (GDPR) | Загальний регламент ЄС про захист даних (GDPR) | Ukrainian texts use both "GDPR" and "ЗРЗД"; English acronym kept |
| legal.privacy.rights.export | Settings, Data Management, Export | Налаштування, Управління даними, Експорт | "Export" is not a glossary item; check the button label in the app |
| legal.terms.liability.body | indirect, incidental, special, or consequential damages | непрямі, випадкові, особливі чи побічні збитки | common-law terms with no exact Ukrainian equivalent; legal review advised |
| legal.privacy.stored.items[2] | onboarding status | стан ознайомлення | no settled Ukrainian term for "onboarding" |

## Reviewer
Confidence after review: high (meaning, register and legal statements check out; remaining doubts are app glossary strings and Apple UI names)
Changes: 7
- site.features.items.themes.body, "Світла тема лежить на теплому папері. Темна тема стала м'яким графітом замість чистого чорного.", "Світла тема побудована на теплому папері. Темна виконана в м'якому графіті, а не в чистому чорному.", "лежить на" is unnatural; "стала" wrongly implies a change
- site.pro.body, "…користуватися ним із трьома звичками.", "…користуватися ним, якщо звичок не більше трьох.", "up to three" was lost
- site.tutorial.reminders.footer, "Обидва можна змінити в Налаштування, Сповіщення.", "Обидва можна змінити в розділі Налаштування, Сповіщення.", grammar
- site.features.items.widgets.title, "На екрані «Початок» і на екрані блокування.", "На Початковому екрані й Замкненому екрані.", Apple's Ukrainian names for Home Screen and Lock Screen
- site.features.items.widgets.body, "з екрана «Початок» і таймери, що живуть на екрані блокування", "з Початкового екрана й таймери, що живуть на Замкненому екрані", same
- legal.privacy.thirdParty.body, "Єдиний сторонній SDK у ньому це RevenueCat", "У ньому є лише один сторонній SDK: RevenueCat", missing copula dash; rewritten
- legal.terms.description.body, "MyGrowth це персональний застосунок … для iOS.", "MyGrowth є персональним застосунком … на iOS.", same dash issue, doubled "для"

Translator flags resolved: Home Screen name (fixed to Apple's "Початковий екран"), Paper/Graphite (confirmed), tips[1] example (confirmed, "Тренування" has no distinct plural), GDPR naming (confirmed), liability terms (confirmed).

Still flagged for a native speaker:

| Key | English | Translation | Why |
|---|---|---|---|
| site.hero.phoneAlt, site.features.items.dashboard.* | Becoming | «Стаєш» | app glossary term; informal "ти" form on a "ви" site |
| site.gallery.items[2].alt | days shown up | «Дні, що відображаються» | app glossary mistranslation; fix in the app |
| site.pro.proItems[5] | Custom colours | Кастомні кольори | app glossary term, colloquial; "Власні кольори" is standard |
| site.tutorial.importLogs.columns[2].desc | hours, minutes, km | години, хвилин, км | app glossary mixes cases ("хвилин") |
| site.tutorial.pace.* | Biking | Велосипедування | app glossary term, uncommon word |
| site.features.items.widgets.* | Home Screen, Lock Screen | Початковий екран, Замкнений екран | confirm against current Ukrainian iOS |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | «Об'єднати з наявними» | button not in glossary |
| legal.privacy.rights.export | Settings, Data Management, Export | Налаштування, Управління даними, Експорт | "Export" button not in glossary |
| legal.privacy.stored.items[2] | onboarding status | стан ознайомлення | no settled term |


## Skyline strings, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.skyline.skyline | 3D skyline | 3D-вигляд | "skyline" has no natural Ukrainian toggle label; used "3D view" |
| site.skyline.tooltip, empty | {pct} on {date} / Nothing logged on {date} | {date}: {pct} / {date}: немає записів | reordered to avoid case agreement with the browser date |
| site.skyline.range | {a} to {b} | з {a} по {b} | check with Intl short dates in the browser |
| site.skyline.goal | Runs count the days at or above the {goal} goal. | До серії входять дні з результатом не нижче мети {goal}. | rephrased |
| site.skyline.levelEmpty | Nothing logged | Немає записів | glossary "Not logged" is «Не зафіксовано»; shorter form chosen |
| site.footer.skyline | Skyline chart adapted from | Діаграму skyline створено на основі | followed by the English link title |

## New message, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.meta.home.title | MyGrowth: track your habits daily and build consistency | MyGrowth: відстежуйте звички щодня й набувайте постійності | "набувайте постійності" for "build consistency" |
| site.features.title | Show up daily. Watch it add up. | Щодня по кроку. Дивіться, як росте підсумок. | idiom "add up" rephrased |
| site.year.body (last sentence) | Small days add up. | З маленьких днів складається велике. | idiom rephrased |
| site.features.items.widgets.body | Log from the Home Screen with the Today widget... | Записуйте просто з Початкового екрана у віджеті «Сьогодні»... | Home/Lock Screen names follow existing site copy (not in glossary) |
| site.privacy.title | Your habits are yours. | Ваші звички належать лише вам. | "лише" added for emphasis |

## Review: new message, 2026-11-27

| Key | Before | After | Why |
|---|---|---|---|
| site.features.title | Щодня по кроку. Дивіться, як росте підсумок. | Щодня по кроку. Дивіться, як накопичується результат. | «росте підсумок» reads like accounting; «накопичується результат» is the natural "add up" (parallel to ru) |

Still doubtful: privacy.title adds «лише» (kept, natural emphasis). Privacy body checked: exact meaning. Початковий екран / Замкнений екран match Apple's Ukrainian names.

Confidence: high.

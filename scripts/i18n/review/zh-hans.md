# zh-hans (简体中文)
Confidence: medium (tone follows the App Store copy with 你; several glossary terms are literal and the legal text needs a native check)

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.hero.title | You become what you repeatedly do. | 你反复做的事，造就了你。 | Aphorism, rendered freely; App Store uses 你会成为你反复在做的样子 |
| site.*.Becoming (hero.phoneAlt, features.items.dashboard) | Becoming | 正在成为 | Glossary term reads awkwardly as a noun ("正在成为目标"); kept as the app has it |
| site.nav.theme.light / dark | Paper / Graphite | 纸张 / 石墨灰 | Theme names, not glossary 浅色/深色 |
| site.*.heatmap | heatmap | 热力图 | App Store copy leaves "heatmap" in English |
| site.gallery.items[2].alt | days shown up | 显示的天数 | Glossary term means "displayed days"; kept as the app has it |
| site.tutorial.pace.title, pace.items[0][1] | Pace | 步伐 | Glossary term; the usual running term is 配速 |
| site.tutorial.pace.items | min/km, km/h | 分钟/公里, 公里/小时 | Units follow the glossary (km = 公里) |
| site.tutorial.reminders.items[1][0] | Evening nudge | 晚上提醒 | Glossary term; "nudge" nuance lost |
| site.pro.proItems[6] | Habits on scheduled days | 按计划的日子执行的习惯 | Built on glossary "计划的日子"; stiff |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | 与现有数据合并 | Not in glossary; check against the app |
| site.tutorial.importLogs.tips[1] | 'Workout' and 'workout' both work... | “Workout”和“workout”都可以... | Case example kept in Latin script |
| site.year.todayLabel | Today, {pct}% of the day gone | 今天，已过去{pct}% | "of the day" implied; check it reads clearly next to the tile |
| site.features.items.widgets.eyebrow | Widgets and Live Activity | 小组件与实时活动 | Apple's Chinese name for Live Activities is 实时活动; confirm |
| site settings paths (faq, tutorial) | Settings, Data Management, Import Data | 设置、数据管理、导入数据 | Separated with 、 (Chinese enumeration comma) instead of ， |
| legal.privacy.rights.intro | General Data Protection Regulation | 欧盟《通用数据保护条例》（GDPR） | Official Chinese name; confirm |
| legal.privacy.children.body | COPPA | 美国《儿童在线隐私保护法》（COPPA） | "美国" added for clarity |
| legal.terms.warranties.title | Disclaimer of Warranties | 免责声明 | Broader term; 保证免责声明 is more literal |

## Reviewer
Confidence after review: high (consistent 你 register matching the App Store copy; legal statements complete and precise; remaining items are glossary terms the app itself uses)

Changes: 5
- site.year.todayLabel: 今天，已过去{pct}% → 今天，一天已过去{pct}% ("of the day" was missing)
- site.notFound.title: 这个页面不在这里。 → 此页面不存在。 (literal, unnatural)
- legal.terms.dataPrivacy.item2: 我们不会收集、传输或访问… → 我们不会收集或传输…，也无法访问它们 (English says we cannot access, not only that we do not)
- legal.terms.warranties.title: 免责声明 → 保证免责声明 (免责声明 is broader than a disclaimer of warranties)
- legal.privacy.retention.body: 在应用内删除或卸载应用 → 在应用内将其删除或卸载应用 (ambiguous object)

Translator flags resolved:
- hero.title, nav.theme, 热力图, importLogs.tips[1], pace units 分钟/公里, GDPR 欧盟《通用数据保护条例》, COPPA with 美国: confirmed as fine.
- features.items.widgets.eyebrow: 实时活动 is Apple's Chinese name; confirmed.
- Settings paths with 、: confirmed; it is the Chinese list comma and the script's own punctuation (BRIEF rule 10).
- year.todayLabel and warranties.title: fixed (above).

Still flagged for a native speaker:

| Key | English | Translation | Why |
|---|---|---|---|
| site.hero.phoneAlt, features.items.dashboard.* | Becoming | 正在成为 | Glossary term reads awkwardly as a noun; fix in the app first |
| site.gallery.items[2].alt | days shown up | 显示的天数 | Glossary term means "displayed days" |
| site.tutorial.pace.title, pace.items[0][1] | Pace | 步伐 | Glossary term; runners say 配速, fix in the app first |
| site.tutorial.reminders.items[1][0] | Evening nudge | 晚上提醒 | Glossary term; nuance lost |
| site.pro.proItems[6] | Habits on scheduled days | 按计划的日子执行的习惯 | Built on glossary 计划的日子; stiff |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | 与现有数据合并 | Not in glossary; check against the app |

## Skyline strings, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.skyline.title | A year of consistency | 一致性的一年 | Glossary 一致性 is stiff for a title; 坚持的一年 would be more natural |
| site.skyline.skyline / footer.skyline | 3D skyline | 3D天际线 / 天际线图改编自 | 天际线 is a literal rendering of "skyline"; check it reads as a chart |
| site.skyline.highlight | Highlight days: {level} | 突出显示：{level} | Dropped "days" for brevity in an aria label |

## New message, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.meta.home.title / hero.sub / charts.title | build consistency / See your consistency grow | 让坚持成为日常 / 看着你的坚持不断成长。 | Glossary 一致性 is unnatural for the generic idea; used 坚持 (as the App Store copy does), kept 一致性 only for the chart metric in charts.body |
| site.hero.trust | One small step a day. A year of proof. | 每天一小步，一年的见证。 | 见证 (witness) for "proof" |
| site.features.items.dashboard.title | Who you are becoming, every morning. | 每天早上，看见正在成为的自己。 | Reordered, slightly longer than English |
| site.features.items.events.title | Your year in places, books and trips. | 地方、书和旅行串起你的一年。 | Rewritten as "places, books and trips string together your year" |
| site.year.eyebrow | Every day counts | 每一天都算数 | Idiom, check register |

## Review: new message, 2026-11-27

| Key | Before | After | Why |
|---|---|---|---|
| site.hero.sub | 每天记录习惯，养成坚持，成为你想成为的人。 | 每天记录习惯，学会坚持，成为你想成为的人。 | 养成坚持 is an odd collocation (养成 takes 习惯); 学会坚持 is natural |

Accepted as is: 坚持 for the general idea (matches App Store), 一致性 for the chart metric; hero.trust 见证; dashboard.title reorder; events.title rewrite (reads well); year.eyebrow 每一天都算数 (natural, informal register matches the site).

Confidence: high

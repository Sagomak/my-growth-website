# ja (日本語)
Confidence: medium (natural polite register matching the App Store copy, but several glossary terms are machine-like and the legal text should get a native check)

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.hero.title | You become what you repeatedly do. | 人は、繰り返すことでできている。 | Aphorism, rendered freely ("a person is made of what they repeat"); App Store uses 人は繰り返し行うことで形づくられます |
| site.year.title / features.items.grid.title | One honest picture of a year. | 一年を、一枚の正直な絵に。 | "honest picture" kept literal (正直な絵), as in the App Store copy; may read slightly odd |
| site.nav.theme.light / dark | Paper / Graphite | 紙 / グラファイト | Theme names, not the glossary ライト/ダーク; taken from the App Store wording |
| site.*.heatmap (several) | heatmap | ヒートマップ | App Store copy leaves "heatmap" in English; site uses the katakana word |
| site.gallery.items[2].alt | days shown up | 表示された日数 | Glossary term means "displayed days", not "days you showed up"; kept as the app has it |
| site.gallery.items[3].alt, tutorial.prebuilt.cols[2], tutorial.streaks.tips[1], privacy.stored[0] | target | ターゲット | Glossary term; 目標 would read more naturally |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | 既存のデータと統合 | Not in the glossary; check it matches the app's button label |
| site.tutorial.reminders.items[1][0] | Evening nudge | 夕方のリマインダー | Glossary term, same word as the morning one; "nudge" nuance lost |
| site.tutorial.importLogs.tips[1] | 'Workout' and 'workout' both work... | 「Workout」と「workout」は... | Case example kept in Latin script, since case does not exist in Japanese |
| site.features.items.widgets.eyebrow | Widgets and Live Activity | ウィジェットとライブアクティビティ | Check against Apple's Japanese name for Live Activities |
| site.pro.proItems[6] | Habits on scheduled days | スケジュールされた日の習慣 | Built on glossary "Scheduled days"; stiff |
| site.support.emailCta / legal.contact | Write to | メールの宛先： | Depends on how the email is rendered after it |
| site.support.reviewBefore/Link/After | You can also leave a review on the App Store. It helps more than you know. | また、App Storeでレビューを書いていただくこともできます。想像以上に大きな励みになります。 | Sentence split around the link differs from English order |
| legal.terms.warranties.body | "as is" | 「現状有姿」 | Standard legal term; check preferred wording |
| legal.privacy.rights.intro | General Data Protection Regulation | EU一般データ保護規則（GDPR） | Official Japanese name; confirm |
| legal.privacy.children.body | COPPA | 児童オンラインプライバシー保護法（COPPA） | US law, common Japanese rendering |
| legal.privacy.rights.export | Settings, Data Management, Export | 設定、データ管理、エクスポート | "Export" alone is not a glossary entry |

## Reviewer
Confidence after review: high (site and legal read naturally in a consistent polite register; legal statements all present and precise; remaining items are glossary terms the app itself uses)

Changes: 4
- site.support.title: どうしましたか？ → 何かお困りですか？ (too abrupt for the polite register; now pairs with まだお困りですか？)
- site.features.items.charts.body: 線は自分で描かれていき → 線はひとりでに描かれ (unnatural phrasing for "draw themselves in")
- site.support.emailCta: メールの宛先： → メールを送る： (button reads "{cta} hello@sagomak.com"; 宛先 read like a form label)
- site.legal.contact: メールの宛先： → メールを送る： (same string, kept consistent)

Translator flags resolved:
- hero.title, year.title, nav.theme, heatmap, importLogs.tips[1], reviewBefore/After split, legal "as is" 現状有姿, GDPR EU一般データ保護規則, COPPA 児童オンラインプライバシー保護法, rights.export path: confirmed as fine.
- features.items.widgets.eyebrow: ライブアクティビティ is Apple's Japanese name; confirmed.
- support.emailCta / legal.contact: fixed (above).

Still flagged for a native speaker:

| Key | English | Translation | Why |
|---|---|---|---|
| site.gallery.items[2].alt | days shown up | 表示された日数 | Glossary term means "displayed days"; the app string itself should change |
| site.gallery.items[3].alt, tutorial.prebuilt.cols[2], tutorial.streaks.tips[1], privacy.stored[0], legal stored.items[0] | target | ターゲット | Glossary term; 目標 is more natural, fix in the app first |
| site.tutorial.reminders.items[1][0] | Evening nudge | 夕方のリマインダー | Glossary term, identical in kind to the morning one |
| site.pro.proItems[6] | Habits on scheduled days | スケジュールされた日の習慣 | Built on glossary "Scheduled days"; stiff |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | 既存のデータと統合 | Not in the glossary; check against the app's button label |

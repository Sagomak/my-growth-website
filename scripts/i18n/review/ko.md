# ko (한국어)
Confidence: medium (polite 합니다 register as in the App Store copy; some glossary terms read oddly, legal text needs a native check)

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.hero.title | You become what you repeatedly do. | 사람은 반복하는 것으로 만들어집니다. | Aphorism, taken from the App Store description |
| site.*.Becoming (hero.phoneAlt, features.items.dashboard) | Becoming | 되어가는 중 | Glossary term reads like "in progress"; App Store What's New uses 되고 싶은 모습. Kept glossary term |
| site.year.habit, features.items.widget.name | Reading | 읽기 | Glossary default habit name; 독서 would be more natural |
| site.nav.theme.light / dark | Paper / Graphite | 종이 / 그래파이트 | Theme names, not glossary 라이트/다크 |
| site.gallery.items[2].alt | days shown up | 표시된 일수 | Glossary term means "displayed days"; kept as the app has it |
| site.pro.proItems[2] | All time charts and averages | 모든 시간 차트와 평균 | From glossary "모든 시간 + 평균"; 전체 기간 would be more natural |
| site.pro.free[0] | 3 habits | 3가지 습관 | Glossary; 3가지 means "3 kinds", 습관 3개 more natural |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | 기존 데이터와 병합 | Not in glossary; check against the app |
| site.tutorial.importLogs.tips[1] | 'Workout' and 'workout' both work... | ‘Workout’과 ‘workout’은... | Case example kept in Latin script |
| site.features.items.widgets.eyebrow | Widgets and Live Activity | 위젯과 실시간 현황 | Check against Apple's Korean name for Live Activities |
| site.features.items.timers.body | h, min and s | 시간, 분, 초 | Glossary units are full words in Korean |
| site.a11y.themeSwitch | Switch to {theme}. | {theme}(으)로 전환. | Particle depends on the theme name; (으)로 used as neutral form |
| site.support.reviewLink | leave a review on the App Store | App Store에 리뷰를 남겨 주세요 | Sentence restructured around the link |
| legal.privacy.rights.intro | General Data Protection Regulation | EU 일반 개인정보 보호법(GDPR) | Common Korean rendering; 일반 데이터 보호 규정 is also used |
| legal.privacy.children.body | COPPA | 미국 아동 온라인 개인정보 보호법(COPPA) | "미국" added for clarity; check |
| legal.terms.warranties.body | "as is" | ‘있는 그대로’ | Standard legal term; confirm |
| legal.terms.termination.title | Termination | 해지 | 해지 vs 종료; confirm |

## Reviewer
Confidence after review: high (polite 합니다 register consistent; legal statements complete; remaining items are glossary terms the app itself uses)

Changes: 8
- site.support.reviewBefore: 또는 → 또한 ("or" read oddly; English is "also")
- site.support.reviewLink: App Store에 리뷰를 남겨 주세요 → App Store에 리뷰를 남겨 주실 수도 있습니다 (matches "You can also leave a review"; sentence now flows with reviewBefore/After)
- site.gallery.items[2].alt: 5 km 목표에 맞춘 → 5 km 목표 대비 ("against its goal", not "tailored to")
- site.faq.items[4].a: 확인을 요청합니다. → 확인 메시지가 표시됩니다. (subject was unclear)
- site.faq.items[5].a: App Store에서 현재 가격을 보여줍니다 → App Store에 현재 가격이 표시됩니다 (more natural)
- legal.terms.termination.title: 해지 → 이용 종료 (해지 is contract cancellation; this is access termination)
- legal.terms.termination.body: 접근을 해지하거나 → 접근을 종료하거나 (same reason)
- legal.privacy.retention.body: 앱을 삭제할 때까지 ... 앱을 삭제하면 ... 제거됩니다 → 앱을 제거할 때까지 ... 앱을 제거하면 ... 삭제됩니다 ("delete within the app" and "uninstall" were the same verb)

Translator flags resolved:
- hero.title, nav.theme, importLogs.tips[1], timers.body units (glossary), a11y.themeSwitch (으)로, GDPR EU 일반 개인정보 보호법, COPPA with 미국, "as is" 있는 그대로: confirmed as fine.
- features.items.widgets.eyebrow: 실시간 현황 is Apple's Korean name for Live Activities; confirmed.
- support.reviewLink: fixed (above). legal.terms.termination.title: fixed (above).

Still flagged for a native speaker:

| Key | English | Translation | Why |
|---|---|---|---|
| site.hero.phoneAlt, features.items.dashboard.* | Becoming | 되어가는 중 | Glossary term reads like "in progress"; 되고 싶은 모습 would read better, fix in the app first |
| site.year.habit, features.items.widget.name | Reading | 읽기 | Glossary default habit name; 독서 more natural |
| site.gallery.items[2].alt | days shown up | 표시된 일수 | Glossary term means "displayed days" |
| site.pro.proItems[2] | All time charts and averages | 모든 시간 차트와 평균 | From glossary; 전체 기간 more natural |
| site.pro.free[0] | 3 habits | 3가지 습관 | Glossary; 습관 3개 more natural |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | 기존 데이터와 병합 | Not in glossary; check against the app |

## Skyline strings, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.footer.skyline | Skyline chart adapted from | 스카이라인 차트 출처: | Korean puts the source first; rendered as "Skyline chart source:" so it reads before the link |
| site.skyline.levelEmpty / empty | Nothing logged | 기록 없음 | Glossary "Not logged" is 로그인하지 않음 ("not logged in"), wrong; used 기록 없음 |
| site.skyline.title | A year of consistency | 일관성의 한 해 | Glossary 일관성 is stiff for a title; 꾸준함 would be more natural |
| site.skyline.range | {a} to {b} | {a}부터 {b}까지 | Avoided ~ so nothing reads as a dash |

## New message, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.meta.home.title / hero.sub / charts.title | build consistency / See your consistency grow | 꾸준함을 쌓으세요 / 꾸준함이 자라는 걸 확인하세요. | Glossary 일관성 reads oddly for the generic idea; used 꾸준함, kept 일관성 only for the chart metric in charts.body |
| site.hero.trust | One small step a day. A year of proof. | 하루에 작은 한 걸음. 일 년의 증거. | Slogan rhythm |
| site.features.items.charts.body | Swipe back through your history | 기록을 거슬러 넘겨 보며 | Check naturalness |
| site.features.items.languages.body | with your own colours and icons on every habit | 모든 습관에 나만의 색과 아이콘을 담아. | Ends on a connective form as a tagline; check |
| site.year.eyebrow | Every day counts | 하루하루가 소중합니다 | Idiom, rendered as "every day is precious" |

## Review: new message, 2026-11-27

| Key | Before | After | Why |
|---|---|---|---|
| site.hero.trust | 하루에 작은 한 걸음. 일 년의 증거. | 매일 작은 한 걸음. 일 년이 증명합니다. | Second half was a bare noun phrase that read stiffly; now "a year proves it" |
| site.features.items.charts.body | …기록을 거슬러 넘겨 보며… | …스와이프로 지난 기록을 거슬러 보며… | "넘겨 보며" was awkward and "swipe" was lost |
| site.features.items.languages.body | …모든 습관에 나만의 색과 아이콘을 담아. | …모든 습관에 나만의 색과 아이콘을 입혀 보세요. | Connective ending read unfinished; -세요 matches the site register |

Accepted as is: 꾸준함 for the general idea, 일관성 for the chart metric; year.eyebrow 하루하루가 소중합니다.

Confidence: high

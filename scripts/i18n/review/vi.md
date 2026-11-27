# vi (Tiếng Việt)
Confidence: high (tone and shared wording follow the vi App Store text; a few glossary terms are mistranslated in the app and are flagged)

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.tutorial.backup.restoreSteps[4] | tap Import | chạm Nhập khẩu | Glossary "Import" = "Nhập khẩu" (trade import); should be "Nhập". Kept per glossary; fix in the app. |
| site.gallery.items[2].alt | days shown up | Ngày đã hiển thị | Glossary term means "days displayed", not "days you showed up". Kept per glossary. |
| site.faq.items[3].a, site.tutorial.backup.exportSteps[1] | Export Backup | Xuất bản sao lưu | "Xuất bản" also reads as "publish"; ambiguous glossary term. |
| site.tutorial.reminders.items | Morning reminder / Evening nudge | Nhắc nhở buổi sáng / Nhắc Nhở Buổi Tối | Glossary capitalizes the two inconsistently; kept as given. |
| site.tutorial.pace.title, items | Pace and speed | Tốc độ và vận tốc | Glossary gives "Tốc độ" for both Pace and Speed; used "vận tốc" for speed in prose. |
| site.tutorial.pace.items | min/km, km/h | phút/km, km/h | Glossary min = phút; km/h kept as the common Vietnamese unit. Check what the app shows. |
| site.features.items.timers.body | h, min and s | giờ, phút và giây | Glossary units are full words. |
| site.hero.sub | watch showing up turn into progress | thấy việc có mặt mỗi ngày trở thành tiến bộ | Taken from the App Store description. |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Gộp với dữ liệu hiện có | Not in glossary; check the app's exact label. |
| site.tutorial.importLogs.tips[1] | 'Work out' does not match 'Workout' | 'Tậpluyện' không khớp với 'Tập luyện' | Example localized as a missing space. |
| site.features.items.widgets.title | Home Screen and Lock Screen | Màn hình chính và Màn hình khóa | Apple's Vietnamese names; check. |
| legal.privacy.purchases.body[1] | locale | ngôn ngữ và khu vực | "Locale" has no single Vietnamese word. |

## Reviewer
Confidence after review: high (accurate, natural and consistent with the vi App Store text; the remaining items are app glossary defects, not translation errors)

Changes: 4
- site.features.items.charts.title, "Mọi thói quen, đều được đo.", "Mọi thói quen đều được đo lường.", stray comma split subject and predicate.
- site.tutorial.prebuilt.intro, "MyGrowth gợi ý sẵn các thói quen này, sẵn sàng để theo dõi:", "MyGrowth gợi ý những thói quen này, sẵn sàng để theo dõi:", repeated "sẵn".
- legal.privacy.notCollect.items[4], "Không có thói quen, nhật ký hay ghi chú nào từng được truyền...", "Không bao giờ có thói quen, nhật ký hay ghi chú nào được truyền...", "từng" means "has ever been" (past only); the English states "are ever", a standing guarantee.
- legal.privacy.rights.footer, "cho chúng tôi, bạn hoàn toàn kiểm soát", "cho chúng tôi: bạn hoàn toàn kiểm soát", comma splice.

Translator flags resolved: site.tutorial.pace (tốc độ / vận tốc is the natural pair), site.features.items.timers.body (full-word units follow the glossary), site.hero.sub, site.tutorial.importLogs.tips[1], site.features.items.widgets.title (Apple's Vietnamese names), legal.privacy.purchases.body[1] ("ngôn ngữ và khu vực" is accurate for locale): confirmed. All legal statements checked against the English: complete and precise.

Still flagged for a native speaker:

| Key | English | Translation | Why |
|---|---|---|---|
| site.tutorial.backup.restoreSteps[4] | tap Import | chạm Nhập khẩu | Glossary "Nhập khẩu" means trade import; should be "Nhập". Kept as the app label; fix in the app. |
| site.gallery.items[2].alt | days shown up | Ngày đã hiển thị | Glossary means "days displayed"; fix in the app. |
| site.faq.items[3].a, site.tutorial.backup.exportSteps[1] | Export Backup | Xuất bản sao lưu | "Xuất bản" can read as "publish"; app label kept. |
| site.tutorial.reminders.items | Morning reminder / Evening nudge | Nhắc nhở buổi sáng / Nhắc Nhở Buổi Tối | Inconsistent capitalization in the app glossary. |
| site.tutorial.pace.items | min/km | phút/km | Check the unit the app displays. |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Gộp với dữ liệu hiện có | Not in glossary; match the app's exact label. |

## Skyline strings, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.skyline.title | A year of consistency | Một năm của sự nhất quán | Glossary "Sự nhất quán" is stiff in a short handwritten title |
| site.skyline.skyline / hintOrbit / footer.skyline | 3D skyline | Skyline 3D | Kept "skyline" in English; no established Vietnamese term |
| site.skyline.aria | Example Consistency for every day... | Sự nhất quán ví dụ cho mỗi ngày... | Glossary term plus "ví dụ" reads a bit literal |

## New message, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.meta.home.title / hero.sub / charts.title | build consistency / See your consistency grow | rèn sự kiên trì / Nhìn sự kiên trì của bạn lớn dần | Glossary "Sự nhất quán" reads stiff for the generic idea; used "sự kiên trì" (perseverance) and kept the glossary term only for the chart metric in charts.body |
| site.hero.trust | One small step a day. A year of proof. | Mỗi ngày một bước nhỏ. Một năm làm bằng chứng. | Slogan rhythm |
| site.features.title | Show up daily. Watch it add up. | Có mặt mỗi ngày. Nhìn thành quả cộng dồn. | "add up" idiom |
| site.features.items.widgets.title | Your habits, one glance away. | Thói quen của bạn, chỉ cần một cái nhìn. | Idiom |
| site.features.items.events.body | a year of living fill in | một năm sống được lấp đầy | Abstract phrase, check naturalness |

## Review: new message, 2026-11-27

| Key | Before | After | Why |
|---|---|---|---|
| site.hero.sub | …và trở thành người bạn muốn. | …và trở thành con người bạn mong muốn. | "người bạn muốn" can misparse as "người bạn" (friend) and is truncated |
| site.features.title | …Nhìn thành quả cộng dồn. | …Nhìn thành quả tích lũy dần. | "tích lũy dần" is the natural phrasing for "add up" |
| site.features.items.widgets.title | Thói quen của bạn, chỉ cần một cái nhìn. | Thói quen của bạn, liếc mắt là thấy. | Idiomatic "at a glance" |
| site.features.items.events.body | …nhìn một năm sống được lấp đầy, từng ngày một. | …nhìn một năm cuộc sống được lấp đầy dần, từng ngày một. | "một năm sống" was awkward |

Accepted as is: "sự kiên trì" for the general idea (meta title, hero.sub, charts.title), "Sự nhất quán" kept for the chart metric; hero.trust.

Confidence: high

# id (Bahasa Indonesia)
Confidence: medium (informal "kamu" and wording follow the App Store text; a few glossary terms read oddly or diverge from the App Store copy)

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.gallery.items[2].alt | days shown up | hari yang ditampilkan | glossary term is a mistranslation ("days displayed", not "days you showed up"). Kept as in the app; the app string should be fixed |
| site.features.items.grid.body, site.tutorial.streaks.*, site.gallery.items[1].alt | streaks | rentetan | glossary says "Rentetan"; the App Store text uses the loanword "streak". Kept the app term; check which one users expect |
| site.tutorial.pace.title, site.tutorial.pace.items[0] | Pace and speed / pace in min/km | Pace dan kecepatan / kecepatan dalam min/km | glossary gives "Kecepatan" for both Pace and Speed, so the two items read the same. Title keeps "Pace" to tell them apart |
| site.pro.plans | Monthly, yearly or once for life. | Bulanan, tahunan, atau sekali untuk seumur hidup. | glossary "Yearly" = "Tahun" (a noun); used the natural adjective "tahunan" in the sentence |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Gabungkan dengan yang ada | not in the glossary; check against the app's import sheet button |
| site.tutorial.importLogs.tips[1] | 'Workout' and 'workout' both work, 'Work out' does not match 'Workout' | 'Lari' dan 'lari' ... 'Lari pagi' tidak cocok dengan 'Lari' | English spacing example has no Indonesian equivalent; rewritten with an extra word instead |
| site.year.eyebrow | Your year, at a glance | Setahunmu, dalam sekejap | idiom; check it reads well as a label |
| site.features.items.dashboard.title | Who you are becoming, on one page. | Dirimu kelak, dalam satu halaman. | rewritten with "dirimu kelak" (as the App Store text) |
| site.features.items.widgets.* | Habit Grid widget / Today widget / Home Screen / Lock Screen | widget Grid Kebiasaan / widget Hari ini / Layar Utama / Layar Kunci | widget names not in the glossary; check against the widget gallery in iOS Indonesian |
| site.faq.items[0].a, site.tutorial.pace.items[1] | 7.5 hours, 2.5 L, 20.0 km/h | 7,5 jam, 2,5 L, 20,0 km/h | decimal comma per Indonesian convention; confirm the app formats numbers the same way |
| site.tutorial.reminders.items | Default: 9:00 / 21:00 | Bawaan: 09.00 / 21.00 | Indonesian time format with a full stop; confirm against the app |
| legal.privacy.rights.intro | General Data Protection Regulation | Peraturan Perlindungan Data Umum Uni Eropa (General Data Protection Regulation, GDPR) | no official Indonesian name; descriptive translation plus English name and acronym |
| legal.privacy.stored.items[2] | onboarding status | status orientasi awal | no fixed term; check |
| legal.privacy.purchases.body[1] | locale | lokal | technical term; "lokal" alone may be read as "local". Consider "pengaturan wilayah" |
| legal.terms.governingLaw.body | conflict of law principles | prinsip-prinsip pertentangan hukum | legal term ("hukum perdata internasional" is the field); needs a legal check |

## Reviewer
Confidence after review: high (site and legal read naturally in informal "kamu", match the App Store register and glossary; remaining doubts are app-side glossary strings and two legal terms)
Changes: 10
- site.hero.title: "...yang kamu lakukan berulang." -> "...yang kamu lakukan berulang kali." (natural adverb)
- site.hero.sub: "melihat hadir setiap hari berubah" -> "melihat usahamu setiap hari berubah" ("hadir" as a noun was ungrammatical)
- site.year.eyebrow: "Setahunmu, dalam sekejap" -> "Setahunmu dalam sekali lihat" ("sekejap" means "in an instant", not "at a glance")
- site.year.title: "Satu gambar jujur dari setahun." -> "Gambaran jujur tentang setahun." (unnatural phrasing)
- site.features.items.widget.label: "sekitar tiga bulan kotak" -> "berisi kotak untuk sekitar tiga bulan" (word order)
- site.privacy.never.0: "Kebiasaan, catatan harian, atau catatanmu" -> "Kebiasaan, catatan harian, atau catatan pribadimu" (logs and notes both read "catatan"; distinguished)
- site.notFound.body: "sudah lama" -> "sudah usang" (an old link is "usang")
- legal.privacy.purchases.body[1]: "lokal" -> "pengaturan wilayah" (resolves translator flag; "lokal" reads as "local")
- legal.terms.liability.body: "Sejauh diizinkan secara maksimal oleh hukum" -> "Sejauh maksimum yang diizinkan oleh hukum" (standard Indonesian contract phrasing)
- legal.terms.governingLaw.body: "prinsip-prinsip pertentangan hukum" -> "prinsip-prinsip konflik hukum" (common term in Indonesian contracts)

Resolved translator flags: legal.privacy.purchases.body[1] (fixed), site.year.eyebrow (fixed), site.features.items.dashboard.title (confirmed), site.pro.plans "tahunan" (confirmed), decimal comma and 09.00 time format (confirmed as Indonesian convention; app formatting still worth a glance), widget names / "Layar Kunci" (confirmed, matches the App Store text).

Still flagged for a native speaker:

| Key | English | Translation | Why |
|---|---|---|---|
| site.gallery.items[2].alt | days shown up | hari yang ditampilkan | glossary mistranslation ("days displayed"); fix in the app, then here |
| site.features.items.grid.body, site.tutorial.streaks.* | streaks | rentetan | app term vs "streak" in the App Store text; pick one |
| site.tutorial.pace.title, items[0] | Pace and speed | Pace dan kecepatan / kecepatan dalam min/km | glossary uses "Kecepatan" for both Pace and Speed |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Gabungkan dengan yang ada | check against the app's import button |
| legal.privacy.stored.items[2] | onboarding status | status orientasi awal | no fixed term |
| legal.terms.governingLaw.body | conflict of law principles | prinsip-prinsip konflik hukum | legal term; needs a legal check |

## Skyline strings, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.skyline.skyline | 3D skyline | Skyline 3D | Loanword kept (also in hintOrbit and footer). |
| site.skyline.longest | Longest run | Rentetan terpanjang | Glossary "Streak" = "Rentetan"; reads a little formal. |
| site.skyline.goal | Runs count the days at or above the {goal} goal. | Rentetan menghitung hari yang mencapai tujuan {goal} atau lebih. | Glossary "Goal" = "Tujuan"; "target" may be more natural for a percentage. |

## New message, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.year.body | Small days add up. | Sedikit demi sedikit, lama-lama menjadi bukit. | Replaced with the common proverb; longer than English. |
| site.features.items.dashboard.body | Write down who you want to become | Tulis ingin menjadi siapa dirimu | Natural but colloquial word order. |
| site.features.items.widgets.title | Your habits, one glance away. | Kebiasaanmu, cukup sekali lihat. | Idiom adapted. |
| site.features.eyebrow | How it helps | Manfaatnya untukmu | Rendered as "The benefit for you". |

## Review: new message, 2026-11-27

Second reviewer. Meaning, privacy body, glossary (Konsistensi, Rentetan, Hari ini, Grid Kebiasaan, Layar Utama, Layar Kunci), informal "kamu" register and dashes checked on all listed keys; removed privacy keys are gone.

| Key | Before | After | Why |
|---|---|---|---|
| site.features.items.dashboard.body | Tulis ingin menjadi siapa dirimu, ... | Tuliskan kamu ingin menjadi siapa, ... | Original word order is awkward; new form is natural spoken Indonesian. |
| site.features.items.grid.title | Setiap hari usaha, dalam satu halaman. | Setiap hari usahamu, dalam satu halaman. | "hari usaha" can read as "business day"; matches "setiap hari usahamu" in meta.home.description. |

Still doubtful: the proverb in year.body ("Sedikit demi sedikit, lama-lama menjadi bukit") is longer than the English but a good fit; kept.

Confidence: high.

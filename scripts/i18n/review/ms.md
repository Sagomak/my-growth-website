# ms (Bahasa Melayu)
Confidence: medium (informal "kamu" and wording follow the App Store text; several glossary terms look Indonesian or literal and need a Malaysian native check)

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.tutorial.pace.intro, site.tutorial.pace.items[1] | Biking | Bersepeda | glossary term is Indonesian; Malaysian Malay is "Berbasikal". Kept as in the app; the app string should be checked |
| site.gallery.items[2].alt | days shown up | hari ditunjukkan | glossary term is a mistranslation ("days displayed"). Kept as in the app |
| site.features.items.grid.body, site.tutorial.streaks.* | streaks | rentetan | glossary says "Rentetan"; the App Store text uses "streak". Kept the app term |
| site.tutorial.pace.title, site.tutorial.pace.items[0] | Pace | Pace | glossary keeps the English word "Pace"; reads as a loanword |
| site.tutorial.pace.items[1] | km/h | km/h | Malaysian usage is "km/j"; kept km/h because the glossary keeps "h" for hours |
| site.pro.plans | Monthly, yearly or once for life. | Bulanan, tahunan atau sekali untuk seumur hidup. | glossary "Yearly" = "Tahun"; used the natural "tahunan" in the sentence |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Gabungkan dengan sedia ada | not in the glossary; check against the app's button |
| site.tutorial.importLogs.tips[1] | 'Work out' does not match 'Workout' | 'Senaman pagi' tidak sepadan dengan 'Senaman' | English spacing example rewritten with an extra word |
| site.features.items.dashboard.becomingGoal | someone who keeps their promises | insan yang menunaikan janjinya | idiom; "menepati janji" is an alternative |
| site.faq.items[6].a | than two poorly | daripada dua dengan sambil lewa | idiom; check tone |
| site.privacy.title, site.meta.home.title | your iPhone | iPhone kamu | "iPhonemu" avoided because it reads awkwardly with a brand name; check |
| legal.privacy.rights.intro | General Data Protection Regulation | Peraturan Perlindungan Data Am Kesatuan Eropah (General Data Protection Regulation, GDPR) | no official Malay name; descriptive translation plus English name and acronym |
| legal.privacy.purchases.body[1] | locale | tempatan (locale) | technical term; English kept in brackets |
| legal.terms.liability.body | consequential damages | kerosakan berbangkit | legal term; Malaysian contracts often use "ganti rugi berbangkit". Needs a legal check |
| legal.terms.governingLaw.body | conflict of law principles | prinsip percanggahan undang-undang | legal term; needs a legal check |

## Reviewer
Confidence after review: medium (text reads as Malaysian Malay in informal "kamu"; several glossary terms are Indonesian or literal and must be fixed in the app first, and two legal terms need a lawyer)
Changes: 13
- site.hero.sub: "melihat hadir setiap hari bertukar" -> "melihat usahamu setiap hari bertukar" ("hadir" as a noun was ungrammatical)
- site.year.eyebrow: "Setahunmu, sepintas lalu" -> "Setahunmu dalam sekali pandang" ("sepintas lalu" means cursory, not "at a glance")
- site.features.items.dashboard.body: "lihat sepintas lalu" -> "lihat dengan sekali pandang" (same reason)
- site.features.items.grid.body: "kelihatan sepintas lalu" -> "kelihatan dengan sekali pandang" (same reason)
- site.features.items.charts.body: "Garisan melukis sendiri" -> "Garisan terlukis dengan sendirinya" (natural passive)
- site.features.items.timers.body: "pemasa yang sedang berjalan terus berjalan" -> "pemasa yang sedang berjalan tidak berhenti" (repetition)
- site.features.items.widget.label: "kira-kira tiga bulan petak" -> "dengan petak untuk kira-kira tiga bulan" (word order)
- site.faq.items[6].a: "dengan sambil lewa" -> "secara sambil lewa" (idiomatic preposition; resolves translator flag)
- site.cta.title: "Setahun dari sekarang" -> "Setahun lagi" (calque from English)
- site.notFound.body: "sudah lama" -> "sudah lapuk" (an outdated link is "lapuk")
- legal.privacy.purchases.body[1]: "tempatan (locale)" -> "tetapan rantau (locale)" ("tempatan" means "local"; resolves translator flag)
- legal.terms.liability.body: "Setakat yang maksimum dibenarkan" -> "Setakat maksimum yang dibenarkan" (word order)
- legal.terms.governingLaw.body: "prinsip percanggahan undang-undang" -> "prinsip konflik undang-undang" (Malaysian legal term for conflict of laws)

Resolved translator flags: site.faq.items[6].a (fixed), legal.privacy.purchases.body[1] (fixed), site.features.items.dashboard.becomingGoal "menunaikan janjinya" (confirmed), site.privacy.title "iPhone kamu" (confirmed).

Still flagged for a native speaker:

| Key | English | Translation | Why |
|---|---|---|---|
| site.tutorial.pace.intro, items[1] | Biking | Bersepeda | glossary term is Indonesian; Malaysian is "Berbasikal". Fix in the app |
| site.gallery.items[2].alt | days shown up | hari ditunjukkan | glossary mistranslation; fix in the app |
| site.features.items.grid.body, site.tutorial.streaks.* | streaks | rentetan | app term vs "streak" in the App Store text |
| site.tutorial.pace.title, items[0] | Pace | Pace | English loanword from the glossary |
| site.tutorial.pace.items[1] | km/h | km/h | Malaysian usage is "km/j"; tied to the glossary "h" |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Gabungkan dengan sedia ada | check against the app's button |
| legal.terms.liability.body | consequential damages | kerosakan berbangkit | "ganti rugi berbangkit" may be preferred; legal check |
| legal.terms.governingLaw.body | conflict of law principles | prinsip konflik undang-undang | legal check |

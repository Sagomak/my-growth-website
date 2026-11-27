# fil (Filipino)
Confidence: low (no App Store tone file to match; the glossary has broken entries; Taglish used where apps really phrase UI that way, all of it needs a native check)

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.tutorial.backup.restoreSteps[4] | tap Import | i-tap ang I-importa | glossary "Import" = "I-importa", which looks like a typo for "I-import". Kept as in the app; the app string should be fixed |
| (glossary) Not logged | Not logged | (not used) | glossary entry is corrupt ("Hindi: Hindi: ..." repeated); not used on the site, but the app string is broken and needs fixing |
| site.gallery.items[2].alt | days shown up | mga araw na ipinakita | glossary term is a mistranslation ("days displayed"). Kept as in the app |
| site.gallery.items[2].alt | average | karaniwan | glossary "Average" = "Karaniwan" (also means "ordinary"); in running text elsewhere used the common Taglish "average" |
| site.features.items.grid.body, site.tutorial.streaks.* | streaks | sunod-sunod | glossary term kept; reads fine as a noun but check |
| site.tutorial.pace.* | Pace and speed | Pace at bilis | glossary gives "Bilis" for both Pace and Speed; kept "pace" in English to tell them apart (Taglish) |
| site.tutorial.reminders.items | Morning Reminder / Evening Nudge | Paalaala sa Umaga / Paalala sa Gabi | glossary spells "Paalaala" and "Paalala" differently; kept both as in the app, the app should pick one |
| site.tutorial.pace.intro, site.tutorial.pace.items[1] | Biking | Biking | glossary keeps English |
| site.hero.title | You become what you repeatedly do. | Nagiging ikaw ang paulit-ulit mong ginagawa. | idiom; native check |
| site.hero.sub | watch showing up turn into progress | makita mong nagiging pag-unlad ang araw-araw mong pagsisikap | "showing up" has no direct Filipino equivalent; rendered as daily effort |
| site.features.items.dashboard.title, site.hero.phoneAlt | Becoming goal | layuning Nagiging | glossary term "Nagiging" is a verb form and reads oddly as a label. Kept as in the app |
| site.nav.theme.dark, site.features.items.themes.* | Graphite | Graphite | kept in English (Taglish); "grapito" is rare. Paper translated as "Papel" |
| site.features.items.widgets.body | Habit Grid widget, Today widget | Habit Grid widget, Ngayon widget | widget names not in glossary; "Ngayon" from glossary "Today" |
| site.privacy.never, site.nav.features, many | analytics, crash report, feature, page, tap, save, share, backup, restore, device, data | (kept in English) | Taglish UI vocabulary as Filipino apps and iOS use it; check that the mix is right |
| site.pro.proItems[5] | Custom colours | Mga Pasadyang Kulay | glossary title case kept, odd inside a list |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Isama sa kasalukuyan | not in glossary; check against the app's button |
| site.tutorial.importLogs.tips[1] | 'Work out' does not match 'Workout' | 'Ehersisyo sa umaga' hindi tumutugma sa 'Ehersisyo' | English spacing example rewritten with extra words |
| site.faq.items[6].a | than two poorly | kaysa gawing pabaya ang dalawa | idiom; check tone |
| site.lang.suggest | Available in Filipino | Available sa Filipino | Taglish "Available" is how apps phrase it; "Makukuha sa Filipino" is the formal option |
| legal.privacy.lastUpdated, legal.terms.lastUpdated | November 20, 2026 | Nobyembre 20, 2026 | Filipino month name, US order as used in the Philippines |
| legal.privacy.rights.intro | General Data Protection Regulation | General Data Protection Regulation (GDPR) ng European Union | no Filipino official name; English name kept, which is how it is cited in the Philippines |
| legal.terms.warranties.body | "as is" | "as is" | kept in English, as in Philippine contracts |
| legal.terms.liability.body | incidental, consequential | incidental, consequential | legal terms kept in English; needs a legal check |
| legal.terms.governingLaw.body | conflict of law principles | mga prinsipyo ng conflict of laws | legal term kept in English; needs a legal check |
| legal.terms.ip.title | Intellectual Property | Intellectual Property | kept in English as in Philippine law (IP Code); "Intelektwal na Ari-arian" is the alternative |

## Reviewer
Confidence after review: medium (Taglish register is consistent and reads like Filipino iOS apps; the glossary has broken entries and the Becoming label still reads oddly, so a native check is needed)
Changes: 11
- site.hero.title: "Nagiging ikaw ang paulit-ulit mong ginagawa." -> "Nagiging ikaw kung ano ang paulit-ulit mong ginagawa." (original could read "what you repeatedly do becomes you")
- site.year.body: "Bawat araw na ginagawa mo ito" -> "Bawat araw na ginagawa mo ang gawi mo" ("ito" had no referent)
- site.year.todayLabel: "Ngayon, {pct}% ng araw ang lumipas na" -> "Ngayon, lumipas na ang {pct}% ng araw" (natural word order)
- site.features.items.charts.body: "tumutubo ang mga bar" -> "tumataas ang mga bar" ("tumutubo" is for plants)
- site.features.items.events.body: "na lumitaw" -> "na lumilitaw" (aspect after "panoorin")
- site.gallery.items[0].alt: "Ang Grid tab" -> "Ang tab na Grid" (Filipino word order)
- site.gallery.items[1].alt: "Ang Mga Tsart tab" -> "Ang tab na Mga Tsart" (same)
- site.gallery.items[4].alt: "Ang Mga Kaganapan tab" -> "Ang tab na Mga Kaganapan" (same)
- site.pro.body: "libreng gamitin hanggang tatlong gawi" -> "libreng gamitin para sa hanggang tatlong gawi" (missing preposition)
- site.faq.items[6].a: "kaysa gawing pabaya ang dalawa" -> "kaysa gawin nang pabaya ang dalawa" ("gawing pabaya" meant "make them careless"; resolves translator flag)
- legal.privacy.children.body: "Hindi sinasadyang nangongolekta ang App ng data" -> "Hindi sadyang nangongolekta ang App ng data" (meaning error: the original said the App unintentionally collects data from children)

Resolved translator flags: site.hero.title (fixed), site.faq.items[6].a (fixed), legal.privacy.lastUpdated date format (confirmed), legal.privacy.rights.intro GDPR in English (confirmed), legal.terms.warranties.body "as is" (confirmed).

Still flagged for a native speaker:

| Key | English | Translation | Why |
|---|---|---|---|
| site.tutorial.backup.restoreSteps[4] | tap Import | i-tap ang I-importa | glossary typo for "I-import"; fix in the app, then here |
| (glossary) Not logged | Not logged | (not used) | corrupt glossary entry; fix in the app |
| site.gallery.items[2].alt | days shown up, average | mga araw na ipinakita, karaniwan | glossary mistranslation / ambiguous term |
| site.features.items.dashboard.title, site.hero.phoneAlt | Becoming goal / Who you are becoming | layuning Nagiging / Kung sino ang nagiging ikaw | verb form as a label; title still reads stiffly |
| site.tutorial.reminders.items | Morning Reminder / Evening Nudge | Paalaala sa Umaga / Paalala sa Gabi | inconsistent spelling in the app glossary |
| site.tutorial.pace.* | Pace and speed | Pace at bilis | glossary uses "Bilis" for both |
| site.pro.proItems[5] | Custom colours | Mga Pasadyang Kulay | glossary title case inside a list |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Isama sa kasalukuyan | check against the app's button |
| site.lang.suggest | Available in Filipino | Available sa Filipino | Taglish vs formal "Makukuha sa Filipino" |
| site (many keys) | feature, tap, save, backup, data | kept in English | Taglish mix needs a native check |
| legal.terms.liability.body, governingLaw.body, ip.title | incidental, consequential, conflict of laws, Intellectual Property | kept in English | legal terms; needs a legal check |

# sq (Shqip)
Confidence: medium (no App Store tone file for Albanian, and several glossary terms are wrong or awkward but were kept as the app has them)

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.pro.proItems[0] | Unlimited habits | Habitat të pakufizuar | Glossary term is wrong: "Habitat" is not Albanian for habits (should be "Zakone të pakufizuara"). Kept per glossary; fix in the app too. |
| site.faq.items[4].a, legal privacy.rights.delete | Clear All Data | Pastro të Dhënat Të Gjitha | Glossary term reads unnaturally (natural: "Pastro të gjitha të dhënat"). Kept per glossary. |
| site.faq.items[3].a, site.tutorial.backup.exportSteps[1] | Export Backup | Eksporto Backup | Glossary mixes English "Backup"; elsewhere in prose I used "kopje rezervë". |
| site.gallery.items[2].alt | days shown up | Ditët e shfaqura | Glossary term means "days displayed", not "days you showed up". Kept per glossary. |
| site.tutorial.pace.intro | turn on time tracking | aktivizo matjen e kohës | Glossary "Track time" = "Përgjigjuni kohës" ("respond to time"), a mistranslation, so I described the toggle instead of naming it. App string needs fixing. |
| site.tutorial.pace.title, items | Pace / speed | Ritmi / shpejtësia | Glossary gives "Shpejtësia" for both Pace and Speed; I used "ritmi" for pace in prose. |
| site.features.items.dashboard.eyebrow | Dashboard and Becoming | Dashboard dhe Po bëhesh | "Po bëhesh" (glossary) is a verb phrase; reads oddly as a feature name. |
| site.hero.title | You become what you repeatedly do. | Bëhesh ajo që bën vazhdimisht. | Aphorism, rendered freely. |
| site.hero.sub | watch showing up turn into progress | ta shohësh si këmbëngulja e përditshme kthehet në përparim | "Showing up" idiom rendered as "daily persistence". |
| site.meta.home.description, site.year.gridLabel | heatmap | hartë nxehtësie | Literal calque; native check whether "heatmap" untranslated reads better. |
| site.hero.trust, site.privacy.body | no cloud | pa cloud | English loanword kept; "re" (cloud) would be ambiguous. |
| site.features.items.widgets.body, site.features.items.widget.label | Habit Grid widget | widget me Gridin e zakonit | Widget name not in glossary; described with glossary "Gridi". |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Bashko me ekzistueset | Not in glossary; check the app's exact label. |
| site.tutorial.importLogs.tips[1] | 'Work out' does not match 'Workout' | 'Stër vitje' nuk përputhet me 'Stërvitje' | Example localized with the glossary habit name. |
| legal.privacy.rights.intro | General Data Protection Regulation | Rregullorja e Përgjithshme për Mbrojtjen e të Dhënave (GDPR) | Albania is not in the EU; name follows common Albanian usage. Check. |
| legal.privacy.stored.items[2] | onboarding status | statusi i hyrjes fillestare | No settled Albanian term for "onboarding". |
| legal.terms.acceptance.body | agree to be bound | pranon të jesh i detyruar | Masculine generic "i detyruar" used, standard in legal text. |

## Reviewer
Confidence after review: medium (translation is accurate and natural; remaining doubts are app glossary terms that are wrong in the app itself and need a native speaker and an app fix)

Changes: 7
- site.pro.proItems[0], "Habitat të pakufizuar", "Zakone të pakufizuara", meaning error ("habitat" = habitats); this is a marketing bullet, not a UI label, so the correct word wins. The app string still needs fixing.
- site.features.items.charts.body, "ditë në qëllim", "ditët kur arrin qëllimin", calque; "days on target" now reads naturally.
- site.gallery.items[3].alt, "për Meditimi:", "për Meditimin:", grammar: accusative after "për".
- site.faq.items[3].a, "Me Pro, Cilësimet, ...", "Me Pro, te Cilësimet, ...", the path had no preposition and read as a list of subjects.
- site.support.contactBody, "një defekt", "një gabim", "defekt" reads as a hardware fault; "gabim" is the usual word for a software bug.
- legal.privacy.rights.footer, "drejtuar nesh", "drejtuar neve", grammar: dative after "drejtuar".
- legal.privacy.children.body, "kërkesat për moshën të COPPA dhe GDPR", "kërkesat e COPPA dhe GDPR për moshën", wrong linking article and word order.

Translator flags resolved: site.pro.proItems[0] (fixed, above). site.hero.title, site.hero.sub, site.tutorial.pace (ritmi for pace in prose), site.tutorial.importLogs.tips[1], legal.privacy.rights.intro (GDPR name and acronym are standard Albanian usage), legal.terms.acceptance.body (generic masculine is standard in Albanian legal text): confirmed. All legal statements checked against the English: complete and precise.

Still flagged for a native speaker:

| Key | English | Translation | Why |
|---|---|---|---|
| site.faq.items[4].a, legal.privacy.rights.delete | Clear All Data | Pastro të Dhënat Të Gjitha | Glossary word order is unnatural; kept because it names the app button. Fix in the app to "Pastro të gjitha të dhënat". |
| site.faq.items[3].a, site.tutorial.backup.exportSteps[1] | Export Backup | Eksporto Backup | Glossary mixes in English "Backup"; kept as the app label. |
| site.gallery.items[2].alt | days shown up | Ditët e shfaqura | Glossary means "days displayed"; kept as the app label. Fix in the app. |
| site.tutorial.pace.intro | turn on time tracking | aktivizo matjen e kohës | App toggle "Track time" is mistranslated in the glossary ("Përgjigjuni kohës"); the site describes the toggle instead. Fix in the app. |
| site.features.items.dashboard.eyebrow | Dashboard and Becoming | Dashboard dhe Po bëhesh | Glossary verb phrase reads oddly as a feature name. |
| site.meta.home.description, site.year.gridLabel | heatmap | hartë nxehtësie | Calque; check whether "heatmap" untranslated reads better. |
| site.hero.trust, site.privacy.body | no cloud | pa cloud | Loanword kept; check. |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Bashko me ekzistueset | Not in glossary; match the app's exact label. |
| legal.privacy.stored.items[2] | onboarding status | statusi i hyrjes fillestare | No settled Albanian term. |

## Skyline strings, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.skyline.skyline | 3D skyline | Panoramë 3D | "skyline" rendered as "panoramë"; also in hintOrbit and footer ("Grafiku i panoramës është përshtatur nga"). |
| site.skyline.tooltip | {pct} on {date} | {date}: {pct} | "më {date}" clashes with a weekday-first date, so reordered with a colon. |
| site.skyline.title | A year of consistency | Një vit konsistencë | Check whether "Një vit konsistence" (genitive) is more natural. |
| site.skyline.hintOrbit | ...double click to reset | ...kliko dy herë për ta rikthyer | "rikthyer" (restore) for "reset"; "rivendosur" is the alternative. |

## New message, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.features.title | Show up daily. Watch it add up. | Ji aty çdo ditë. Shiko si shtohet. | "Show up" has no neat equivalent; subject of "shtohet" is implicit. Needs a native check. |
| site.hero.trust | One small step a day. A year of proof. | Një hap i vogël në ditë. Një vit me prova. | "prova" can read as "tests/trials"; "dëshmi" is an alternative. |
| site.year.body | Small days add up. | Ditët e vogla mblidhen bashkë. | Literal rendering. |
| site.features.items.widgets.title | Your habits, one glance away. | Zakonet e tua, një shikim larg. | Calque; no App Store reference for sq. |
| site.meta.home.description | ...on a hand-drawn grid... | ...në një grid të vizatuar me dorë... | "grid" lowercase loan, from glossary "Gridi". |

## Review: new message, 2026-11-27

Second reviewer. Meaning, privacy body, glossary (Konsistencë, Seri, Sot, Gridi), informal "ti" register and dashes checked on all listed keys; removed privacy keys are gone.

| Key | Before | After | Why |
|---|---|---|---|
| site.features.items.widgets.title | Zakonet e tua, një shikim larg. | Zakonet e tua, me një shikim. | Calque of "one glance away"; "me një shikim" (at a glance) is idiomatic and matches earlier site copy. |

Still doubtful: "Ji aty çdo ditë" (features.title) and "Një vit me prova" (hero.trust, "dëshmi" is the alternative) need a native check; no App Store reference exists for sq.

Confidence: medium.

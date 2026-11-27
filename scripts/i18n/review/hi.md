# hi (हिन्दी)
Confidence: medium (fluent, natural copy matched to the hi App Store tone file; several glossary terms read oddly and need a native check)

Punctuation choice: sentences end with the Devanagari danda (।), as the hi App Store metadata does. Question marks, colons and commas are Latin. Digits are Western (0 to 9), as in the app.

| Key | English | Translation | Why flagged |
|---|---|---|---|
| (all) | full stop | । | Danda used for every sentence end, Latin "." kept only in numbers, file extensions and "Inc." |
| site.hero.title | You become what you repeatedly do. | आप वही बनते हैं जो बार-बार करते हैं। | Taken from the tone file's description, second "आप" dropped to keep it short |
| site.*.heatmap | heatmap | heatmap | Kept in Latin script as the tone file does; "हीटमैप" is the alternative |
| site.features.items.grid.body, site.tutorial.streaks.* | streak | स्ट्रीक | Glossary "Streak" is "लगातार" (an adverb, unusable as a noun); used the tone file's "स्ट्रीक" instead |
| site.features.items.charts.consistency | Consistency | स्थिरता | Glossary term; the tone file uses "निरंतरता" for the same idea |
| site.features.items.dashboard.eyebrow | Dashboard and Becoming | Dashboard और बन रहे हैं | Glossary keeps "Dashboard" in Latin; "बन रहे हैं" (Becoming) is a verb phrase and reads oddly as a name |
| site.features.items.dashboard.becomingGoal | someone who keeps their promises | ऐसा इंसान जो अपने वादे निभाता है | Shown after the label "बन रहे हैं"; masculine/neutral "इंसान", check how it reads combined |
| site.year.habit, site.features.items.widget.name | Reading | पढ़ाई | Glossary term; "पढ़ाई" means studying, "पढ़ना" would be closer to reading |
| site.gallery.items[3].alt | Clear and Save | “स्पष्ट करें” और “सहेजें” | Glossary "Clear" = "स्पष्ट करें" (means clarify); kept as the app has it |
| site.gallery.items[2].alt | days shown up | दिखाए गए दिन | Glossary "Days shown up" is a literal mistranslation ("days displayed"); kept as the app has it |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | “मौजूदा डेटा में मिलाएँ” | Not in glossary; check against the app's button |
| site.tutorial.pace.title, items | Pace and speed | गति और रफ़्तार | Glossary uses "गति" for both Pace and Speed; used "रफ़्तार" for speed to tell them apart |
| site.tutorial.reminders.items | Morning reminder / Evening nudge | सुबह की याद दिलाने वाला / शाम का संकेत | Glossary terms, both read awkwardly |
| site.pro.free[1] | Current year | वर्तमान वर्ष | Glossary "Current year only" is "वर्तमान वर्ष केवल" (wrong word order); dropped "केवल" since the English drops "only" |
| site.nav.support, footer.support, legal chrome.support | Support | सहायता | Glossary "Support" = "समर्थन" (endorsement); used "सहायता" for the help page |
| site.nav.theme.light/dark, themes.* | Paper / Graphite | कागज़ / ग्रेफ़ाइट | Theme names follow the tone file; glossary has only Light/Dark |
| site.features.items.widgets.* | Live Activity, Habit Grid widget, Today widget | लाइव ऐक्टिविटी, आदत ग्रिड विजेट, “आज” विजेट | Check against Apple's Hindi iOS term and the widget names in the app |
| site.support.reviewBefore/Link/After | You can also leave a review on the App Store. It helps more than you know. | आप चाहें तो App Store पर समीक्षा लिखें। इससे आपकी सोच से कहीं ज़्यादा मदद मिलती है। | Split rebuilt for Hindi word order |
| site.tutorial.importLogs.tips[1] | 'Workout' and 'workout' | 'Workout' और 'workout' | Kept Latin examples: case has no meaning in Devanagari |
| legal.privacy.rights.export | Settings, Data Management, Export | सेटिंग्स, डेटा प्रबंधन, निर्यात | "Export" alone is not in glossary |
| legal.privacy.rights.intro | General Data Protection Regulation | सामान्य डेटा संरक्षण विनियमन (GDPR) | Common Hindi rendering; no official EU Hindi text exists |
| legal.privacy.retention.title | Data Retention | डेटा प्रतिधारण | Formal legal term, check |
| legal.terms.liability.body | including but not limited to data loss | जिसमें डेटा की हानि शामिल है, पर यह इसी तक सीमित नहीं है | Standard Indian legal phrasing, check |
| site.a11y.themeSwitch | Switch to {theme}. | {theme} पर बदलें। | {theme} is filled with "कागज़"/"ग्रेफ़ाइट"/"सिस्टम"; check the postposition fits all three |

## Reviewer
Confidence after review: high (site and legal copy read naturally and match the English statement for statement; remaining doubts are glossary terms the app itself uses, which only an in-app check can settle)

Changes: 1
- site.gallery.items[2].alt, "5 किमी के लक्ष्य के सामने", "5 किमी के लक्ष्य के मुकाबले", "के सामने" reads as "in front of"; "के मुकाबले" is "measured against"

Translator flags resolved (confirmed, no change): danda punctuation; hero.title; heatmap in Latin (tone file does the same); स्ट्रीक for streak (tone file); सहायता for Support; वर्तमान वर्ष without केवल; गति / रफ़्तार split; GDPR rendering; डेटा प्रतिधारण; liability phrasing (standard Indian legal wording); review sentence split; Latin 'Workout' examples; themeSwitch postposition ("कागज़ पर बदलें", "ग्रेफ़ाइट पर बदलें", "सिस्टम पर बदलें" all fit).

Still flagged for a native speaker:

| Key | English | Translation | Why |
|---|---|---|---|
| site.features.items.charts.consistency | Consistency | स्थिरता | Glossary term; tone file says "निरंतरता" |
| site.features.items.dashboard.eyebrow, becomingLabel | Becoming | बन रहे हैं | Glossary verb phrase used as a feature name |
| site.features.items.dashboard.becomingGoal | someone who keeps their promises | ऐसा इंसान जो अपने वादे निभाता है | Check how it reads after the "बन रहे हैं" label |
| site.year.habit, widget.name | Reading | पढ़ाई | Glossary; "पढ़ाई" leans to "studying" |
| site.gallery.items[3].alt | Clear | “स्पष्ट करें” | Glossary term means "clarify"; app button should be checked |
| site.gallery.items[2].alt | days shown up | दिखाए गए दिन | Glossary mistranslation ("days displayed") |
| site.tutorial.reminders.items | Morning reminder / Evening nudge | सुबह की याद दिलाने वाला / शाम का संकेत | Glossary terms, awkward as names |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | “मौजूदा डेटा में मिलाएँ” | Not in glossary; must match the app button |
| site.features.items.widgets.* | Live Activity | लाइव ऐक्टिविटी | Check against Apple's Hindi iOS term |


## Skyline strings, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.skyline.longest, current, goal | Longest run / Current run | सबसे लंबी स्ट्रीक / मौजूदा स्ट्रीक | site copy uses "स्ट्रीक"; glossary "Streak" is "लगातार", which does not work as a noun here |
| site.skyline.hintFlat | Hover a day | किसी दिन पर पॉइंटर ले जाएँ | "hover" rendered as "move the pointer to" |
| site.skyline.goal | Runs count the days at or above the {goal} goal. | स्ट्रीक में वे दिन गिने जाते हैं जब {goal} का लक्ष्य पूरा हुआ या उससे ज़्यादा रहा। | rephrased |
| site.skyline.aria | Example Consistency for every day ... | {a} से {b} तक हर दिन की उदाहरण स्थिरता, ... | "उदाहरण स्थिरता" a bit stiff |
| site.footer.skyline | Skyline chart adapted from | स्काईलाइन चार्ट का आधार: | Hindi puts "from" after the noun, so rewritten as "basis of the skyline chart:" before the link |

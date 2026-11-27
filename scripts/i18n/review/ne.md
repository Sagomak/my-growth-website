# ne (नेपाली)
Confidence: medium-low (natural standard Nepali with तपाईं and -नुहोस्; no tone file, and the glossary is inconsistent in several places, so a native review is needed)

Punctuation choice: sentences end with the Devanagari danda (।), standard in Nepali print and app copy. Question marks, colons and commas are Latin. Digits are Western (0 to 9) and dates use the Gregorian calendar.

| Key | English | Translation | Why flagged |
|---|---|---|---|
| (all) | full stop | । | Danda used for every sentence end |
| legal.*.lastUpdated | November 20, 2026 | 20 नोभेम्बर 2026 | Gregorian date, Western digits; Nepali readers may expect Devanagari digits |
| site.pro.free[0] | 3 habits | 3 बानीहरू | Glossary uses "बानी" here but "आदत" for Habit everywhere else; kept as the app has it |
| (many) | data | डाटा / डेटा | Glossary mixes both: "डाटा व्यवस्थापन" but "डेटा आयात गर्नुहोस्", "सारा डेटा मेटाउनुहोस्". Prose uses "डाटा"; glossary terms kept as is |
| (many) | colour | रङ / रंगहरू | Prose uses "रङ"; glossary "कस्टम रंगहरू" kept |
| site.tutorial.importLogs.columns[2].desc, faq, streaks | hours, minutes | घंटा, मिनेट्स | Glossary units; "घंटा" vs "घण्टा" (the "h" unit) and the anglicised plural "मिनेट्स" are inconsistent |
| site.features.items.timers.body, pace | h, min, s | घण्टा, मिनेट, सेकेन्ड | Glossary gives full words, not abbreviations; kept |
| site.features.items.grid.body, streaks.* | streak | स्ट्रिक | Glossary "Streak" = "लगातार" (an adjective); used "स्ट्रिक" as a noun |
| site.features.items.charts.consistency | Consistency | सततता | Glossary term; "निरन्तरता" is more common |
| site.tutorial.backup.restoreSteps[3] | Replace all data | “सर्व डाटा परिवर्तन गर्नुहोस्” | Glossary term; "सर्व" is Hindi-like, "सबै" is Nepali |
| site.pro.proItems[2] | All time charts and averages | सर्व समयका चार्ट र औसतहरू | Follows glossary "सर्व समय"; same issue |
| site.gallery.items[3].alt | Clear | “स्पष्ट” | Glossary term; means "evident", not "erase" |
| site.gallery.items[2].alt | days shown up | दिएका दिनहरू | Glossary term, meaning unclear |
| site.tutorial.reminders.items | Morning reminder | सुप्रभात सम्झाउने | Glossary term; "सुप्रभात" means "good morning" |
| site.tutorial.pace | Pace and speed | गति र रफ्तार | Glossary gives "गति" for both; used "रफ्तार" for speed |
| site.year.habit | Reading | पढाइ | Glossary term |
| site.nav.support | Support | सहयोग | Glossary term, used as is |
| site.nav.theme.light/dark | Paper / Graphite | कागज / ग्राफाइट | Theme names; glossary has only Light/Dark |
| site.features.items.dashboard.becomingGoal | someone who keeps their promises | आफ्नो वचन निभाउने मान्छे | Shown after "बन्दै"; check the combination |
| site.hero.sub, year.body | show up | निरन्तरता | Idiom rendered as "consistency / keeping at it" |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | “भइरहेको डाटासँग मिलाउनुहोस्” | Not in glossary; check against the app |
| legal.privacy.rights.intro | General Data Protection Regulation | सामान्य डाटा संरक्षण नियमन (GDPR) | No official Nepali name |
| legal.terms.liability.body | consequential damages; including but not limited to | परिणामस्वरूप हुने क्षति; समावेश छ, तर त्यतिमा मात्र सीमित छैन | Legal phrasing, check |
| site.a11y.themeSwitch | Switch to {theme}. | {theme} मा बदल्नुहोस्। | Variable theme name before postposition |

## Reviewer
Confidence after review: medium (prose is natural standard Nepali with a consistent तपाईं register and the legal text is complete; the glossary itself is inconsistent and Hindi-leaning in places, which needs an in-app fix by a native speaker)

Changes: 3
- site.features.items.themes.body, "लाइट मोड न्यानो कागजमा बस्छ।", "लाइट मोडको पृष्ठभूमि न्यानो कागज हो।", literal "sits on" read unnaturally
- site.tutorial.streaks.tips[2], "सोमबार, बुधबार र शुक्रबार व्यायाम गर्नुहोस्, तीनवटै पूरा गर्नुहोस्, भने त्यो 3 दिनको स्ट्रिक हो।", "सोमबार, बुधबार र शुक्रबार व्यायाम गर्ने तालिका छ र तीनवटै पूरा गर्नुभयो भने, त्यो 3 दिनको स्ट्रिक हो।", "imperative + भने" was ungrammatical
- site.tutorial.backup.restoreSteps[3], "“भइरहेको डाटासँग मिलाउनुहोस्”", "“विद्यमान डाटासँग मिलाउनुहोस्”", "भइरहेको" means "ongoing", not "existing"

Translator flags resolved (confirmed, no change): danda punctuation; स्ट्रिक for streak; गति / रफ्तार split; कागज / ग्राफाइट; निरन्तरता for "show up"; GDPR rendering; liability phrasing; "{theme} मा बदल्नुहोस्" fits all three theme names.

Still flagged for a native speaker:

| Key | English | Translation | Why |
|---|---|---|---|
| legal.*.lastUpdated, (all) | digits | Western 0 to 9 | Nepali readers may expect Devanagari digits |
| site.pro.free[0] | 3 habits | 3 बानीहरू | Glossary uses बानी here, आदत everywhere else |
| (many) | data | डाटा / डेटा | Glossary mixes both spellings |
| (many) | colour | रङ / रंगहरू | Glossary "कस्टम रंगहरू" differs from prose "रङ" |
| site.tutorial.importLogs.columns[2].desc, faq, streaks | hours, minutes | घंटा, मिनेट्स | Glossary units; घंटा vs घण्टा and anglicised मिनेट्स |
| site.features.items.timers.body, pace | h, min, s | घण्टा, मिनेट, सेकेन्ड | Glossary gives full words, not abbreviations |
| site.features.items.charts.consistency | Consistency | सततता | Glossary; "निरन्तरता" is more common |
| site.tutorial.backup.restoreSteps[3], pro.proItems[2] | Replace all data / All time | सर्व डाटा परिवर्तन गर्नुहोस् / सर्व समयका | Glossary "सर्व" is Hindi-like; Nepali is "सबै" |
| site.gallery.items[3].alt | Clear | “स्पष्ट” | Glossary term means "evident", not "erase" |
| site.gallery.items[2].alt | days shown up | दिएका दिनहरू | Glossary term, meaning unclear |
| site.tutorial.reminders.items | Morning reminder | सुप्रभात सम्झाउने | Glossary; "सुप्रभात" means "good morning" |
| site.nav.support | Support | सहयोग | Glossary term, acceptable but "सहायता" also possible |
| site.features.items.dashboard.becomingGoal | someone who keeps their promises | आफ्नो वचन निभाउने मान्छे | Check after the "बन्दै" label |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | “विद्यमान डाटासँग मिलाउनुहोस्” | Not in glossary; must match the app button |

## Skyline strings, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.skyline.longest / current / goal | Longest run / Current run | सबैभन्दा लामो स्ट्रिक / हालको स्ट्रिक | Glossary "Streak" is लगातार, which does not work as a noun here; used स्ट्रिक as the existing site copy (features.grid) does |
| site.footer.skyline | Skyline chart adapted from | स्काइलाइन चार्टको स्रोत: | Nepali puts the source before "adapted"; rendered as "Source of the skyline chart:" so it reads before the link |
| site.skyline.title | A year of consistency | सततताको एक वर्ष | Glossary सततता; site body text also uses निरन्तरता, check which reads better as a title |
| site.skyline.empty / levelEmpty | Nothing logged | केही दर्ता गरिएको छैन / केही दर्ता छैन | Glossary "Not logged" (लगाइएको छैन) reads as "not worn"; not used |

## New message, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.meta.home.title / hero.sub | build consistency | निरन्तरता बनाउनुहोस् | Generic idea uses निरन्तरता (as the site already does); glossary सततता kept only for the Consistency chart metric |
| site.features.items.grid.body | the streaks grow | स्ट्रिक लामो हुँदै | Glossary has लगातार for Streak, but the site already uses स्ट्रिक 9 times; kept स्ट्रिक for consistency, native check wanted |
| site.hero.trust | One small step a day. A year of proof. | दिनको एउटा सानो कदम। एक वर्षको प्रमाण। | Rhythm of a slogan; no App Store reference for ne |
| site.features.title | Show up daily. Watch it add up. | हरेक दिन लागिरहनुहोस्। जोडिँदै गएको हेर्नुहोस्। | "add up" idiom rendered as "watch it accumulate" |
| site.year.body | Small days add up. | साना दिनहरू जोडिँदै ठूलो बन्छन्। | Idiom, rendered as "small days add up into something big" |
| site.features.items.events.body | a year of living fill in | जिउँदै गरेको एक वर्ष दिनदिनै भरिँदै | Abstract phrase, check naturalness |

## Review: new message, 2026-11-27

| Key | Before | After | Why |
|---|---|---|---|
| site.meta.home.description | …र तपाईंको निरन्तरताले तपाईं जस्तो बन्न चाहनुहुन्छ त्यस्तै व्यक्ति बनाउँदै गएको हेर्नुहोस्। | …र तपाईंको निरन्तरताले तपाईंलाई चाहेको व्यक्ति बनाउँदै गएको हेर्नुहोस्। | Relative clause was clunky; shorter and clearer |
| site.year.body | तपाईंले निरन्तरता दिएको हरेक दिनले… | तपाईं लागिपरेको हरेक दिनले… | "gave continuity" lacked an object; लागिपर्नु renders "show up" and echoes features.title |
| site.features.title | …जोडिँदै गएको हेर्नुहोस्। | …प्रगति जोडिँदै गएको हेर्नुहोस्। | Second sentence had no subject; "watch progress add up" |
| site.features.items.events.body | …जिउँदै गरेको एक वर्ष दिनदिनै भरिँदै… | …जीवनको एक वर्ष दिनदिनै भरिँदै… | "a year of life" reads more naturally than "a year being lived" |
| site.features.items.widgets.body | “आज” विजेटबाट होम स्क्रिनबाटै लग गर्नुहोस्… | होम स्क्रिनमा रहेको “आज” विजेटबाट लग गर्नुहोस्… | Removed the double बाट |

Accepted as is: निरन्तरता for the general idea, सततता for the chart metric; स्ट्रिक over glossary लगातार (site uses स्ट्रिक throughout); hero.trust and year.body idiom.
Still doubtful: "निरन्तरता बनाउनुहोस्" (build consistency) is understandable but a native may prefer a different verb; no App Store reference for ne.

Confidence: medium

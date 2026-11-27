# bn (বাংলা)
Confidence: medium (natural standard Bengali, formal আপনি; no tone file to match, and several glossary terms read oddly)

Punctuation choice: sentences end with the danda (।), as Bengali app and web copy does. Question marks, colons and commas are Latin. Digits are Western (0 to 9), as the glossary uses them ("3 অভ্যাস", "30-দিনের"); Bengali digits (০ to ৯) are an option if the app uses them.

| Key | English | Translation | Why flagged |
|---|---|---|---|
| (all) | full stop | । | Danda used for every sentence end |
| (all) | digits, dates | 20 নভেম্বর 2026 | Western digits kept; check whether Bengali numerals are preferred |
| site.features.items.grid.body, site.tutorial.streaks.*, gallery[1].alt | streak | স্ট্রিক | Glossary gives "ধারাবাহিকতা" for both Streak and Consistency; used "স্ট্রিক" for streak so the two are not confused |
| site.pro.freeTitle | Free | মুক্ত | Glossary term; "মুক্ত" means liberated, "ফ্রি" or "বিনামূল্যে" would be natural. Kept as the app has it |
| site.gallery.items[3].alt | Clear | “স্পষ্ট” | Glossary term; means "clear" as in "evident", not "erase" |
| site.gallery.items[2].alt | days shown up | দেখানো দিনগুলো | Glossary mistranslation ("displayed days"); kept |
| site.tutorial.reminders.items | Morning reminder / Evening nudge | সকাল স্মরণিকা / সন্ধ্যার উত্সাহ | Glossary terms; "স্মরণিকা" means souvenir booklet; "উত্সাহ" uses the old spelling of "উৎসাহ" |
| site.faq.items[4].a, legal rights.delete | Clear All Data | সব তথ্য মুছে ফেলুন | Glossary uses "তথ্য" here but "ডেটা" elsewhere; kept |
| site.features.items.dashboard.becomingGoal | someone who keeps their promises | এমন একজন, যিনি কথা রাখেন | Shown after "হয়ে উঠছেন"; check the combination |
| site.features.items.dashboard.eyebrow | Dashboard and Becoming | Dashboard ও হয়ে উঠছেন | Glossary keeps "Dashboard" in Latin; "হয়ে উঠছেন" is a verb phrase used as a name |
| site.nav.support, footer.support | Support | সহায়তা | Glossary "Support" = "সমর্থন" (endorsement); used "সহায়তা" for the help page |
| site.nav.theme.light/dark | Paper / Graphite | কাগজ / গ্রাফাইট | Theme names; glossary has only Light "উজ্জ্বল" / Dark "গাঢ়" |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | “বিদ্যমান ডেটার সঙ্গে মেশান” | Not in glossary; check against the app |
| site.year.body, hero.sub | show up | লেগে থাকা | Idiom rendered as "sticking with it" |
| site.events.legend, water | Water | পানি | Glossary uses Bangladeshi "পানি"; West Bengal readers say "জল" |
| site.tutorial.importLogs.tips[1] | 'Workout' and 'workout' | Latin kept | Case has no meaning in Bengali script |
| legal.privacy.rights.intro | General Data Protection Regulation | সাধারণ ডেটা সুরক্ষা প্রবিধান (GDPR) | No official Bengali name; common rendering |
| legal.privacy.retention.title | Data Retention | ডেটা সংরক্ষণের মেয়াদ | Rendered as "data storage period" |
| legal.terms.warranties.title | Disclaimer of Warranties | ওয়ারেন্টির দাবিত্যাগ | Legal term, check |
| legal.terms.liability.body | consequential damages; including but not limited to | পরিণামগত ক্ষতি; অন্তর্ভুক্ত, তবে কেবল তাতেই সীমাবদ্ধ নয় | Legal phrasing, check |
| site.a11y.themeSwitch | Switch to {theme}. | {theme}-এ বদলান। | Suffix "-এ" after a variable; reads fine for কাগজ/গ্রাফাইট/সিস্টেম, check |
| site.a11y.gridLabel | Example heatmap for {habit} | {habit}-এর উদাহরণ হিটম্যাপ | Possessive suffix attached to a variable habit name |

## Reviewer
Confidence after review: high (natural standard Bengali, consistent আপনি register, legal text complete and precise; remaining doubts are glossary terms fixed by the app)

Changes: 4
- site.features.items.themes.body, "লাইট মোড বসে উষ্ণ কাগজের ওপর।", "লাইট মোডের পটভূমি উষ্ণ কাগজ।", literal "sits on" read unnaturally
- site.features.items.timers.body, "সময়কাল দেখায় ঘঃ, মিঃ আর সেঃ-তে", "সময়কাল দেখানো হয় ঘঃ, মিঃ আর সেঃ-তে", grammar (passive needed, duration is not the agent)
- legal.privacy.rights.export, "রপ্তানি-এর মাধ্যমে", "রপ্তানি-র মাধ্যমে", vowel-final word takes "-র", not "-এর"
- legal.terms.iap.body, "সব কেনাকাটা Apple, App Store-এর মাধ্যমে প্রক্রিয়া করে", "সব কেনাকাটা App Store-এর মাধ্যমে Apple প্রক্রিয়া করে", comma made the agent ambiguous

Translator flags resolved (confirmed, no change): danda punctuation; স্ট্রিক for streak (keeps it apart from ধারাবাহিকতা); সহায়তা for Support; কাগজ / গ্রাফাইট; লেগে থাকা for "show up"; Latin 'Workout' examples; GDPR rendering; ডেটা সংরক্ষণের মেয়াদ; ওয়ারেন্টির দাবিত্যাগ; liability phrasing; "-এ" and "-এর" suffixes after {theme} and {habit}.

Still flagged for a native speaker:

| Key | English | Translation | Why |
|---|---|---|---|
| (all) | digits | Western 0 to 9 | Confirm the app does not use Bengali numerals |
| site.pro.freeTitle | Free | মুক্ত | Glossary; "বিনামূল্যে" or "ফ্রি" is natural |
| site.gallery.items[3].alt | Clear | “স্পষ্ট” | Glossary term means "evident", not "erase" |
| site.gallery.items[2].alt | days shown up | দেখানো দিনগুলো | Glossary mistranslation ("displayed days") |
| site.tutorial.reminders.items | Morning reminder / Evening nudge | সকাল স্মরণিকা / সন্ধ্যার উত্সাহ | Glossary; "স্মরণিকা" means souvenir booklet, "উত্সাহ" old spelling |
| site.faq.items[4].a, legal rights.delete | Clear All Data | সব তথ্য মুছে ফেলুন | Glossary mixes তথ্য and ডেটা |
| site.features.items.dashboard.eyebrow, becomingGoal | Becoming / someone who keeps their promises | হয়ে উঠছেন / এমন একজন, যিনি কথা রাখেন | Verb phrase as a name; check the label plus goal combination |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | “বিদ্যমান ডেটার সঙ্গে মেশান” | Not in glossary; must match the app button |
| site.faq.items[0].a | Water | পানি | Glossary uses Bangladeshi form; West Bengal says "জল" |

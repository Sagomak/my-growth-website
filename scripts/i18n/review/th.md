# th (ไทย)
Confidence: medium (tone follows the th App Store text, but several glossary terms read oddly and Thai date and unit conventions need a native check)

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.nav.support, site.footer.support, site.support.eyebrow, legal.chrome.support | Support | สนับสนุน | Glossary term means "sponsor/support"; for a help page "ช่วยเหลือ" or "ฝ่ายสนับสนุน" is more natural. Kept per glossary. |
| site.gallery.items[2].alt | days shown up | วันที่แสดงอยู่ | Glossary term means "days displayed". Kept per glossary. |
| site.tutorial.pace.title, items | Pace | จังหวะ | Glossary term; runners usually say "เพซ". |
| site.tutorial.pace.items, site.gallery.items[2].alt | min/km, km/h, 5 km | นาที/กม, กม/ชม., 5 กม | Glossary km = "กม" (no dot), h = "ชม."; standard Thai is "กม." Check what the app shows. |
| site.features.items.timers.body | h, min and s | ชม. นาที และ วิ | Glossary abbreviations, matching the App Store text. |
| site.features.items.dashboard.eyebrow, body, hero.phoneAlt | Becoming | กำลังเป็น | Glossary term reads as an incomplete phrase inside a sentence. |
| site.features.items.widgets.eyebrow | Widgets and Live Activity | วิดเจ็ตและกิจกรรมสด | Apple's Thai name for Live Activities; check. |
| site.meta.*.title | Support, MyGrowth | สนับสนุน, MyGrowth | Kept the comma separator from the site title pattern; Thai usually uses a space or "|". |
| legal.privacy.lastUpdated, legal.terms.lastUpdated | November 20, 2026 | 20 พฤศจิกายน 2569 | Buddhist Era year (2569), the usual Thai format for official documents. Confirm vs. 2026. |
| site.tutorial.importLogs.columns[0].desc | YYYY-MM-DD | YYYY-MM-DD (ปี ค.ศ.) | Added "Gregorian year" note so Thai users do not enter Buddhist Era years in the CSV. |
| site.tutorial.importLogs.tips[1] | 'Workout' and 'workout' both work | ('Workout' กับ 'workout' ใช้ได้ทั้งคู่) แต่ 'ออกกำลัง กาย' ไม่ตรงกับ 'ออกกำลังกาย' | Thai has no letter case, so the case example stays in English and the mismatch example uses a split Thai word. |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | รวมกับข้อมูลที่มีอยู่ | Not in glossary; check the app's exact label. |
| site.hero.title | You become what you repeatedly do. | คุณกลายเป็นสิ่งที่คุณทำซ้ำๆ | Taken from the App Store description. |
| legal.privacy.rights.intro | General Data Protection Regulation | กฎระเบียบทั่วไปว่าด้วยการคุ้มครองข้อมูล (GDPR) | Common Thai name; not to be confused with Thailand's PDPA. |
| legal.terms.responsibilities.items[3] | decompile | ถอดรหัสโปรแกรม | Legal-technical term; native check. |

## Reviewer
Confidence after review: medium (the translation is accurate and natural, but several glossary terms (Support, Pace, km, Becoming) read oddly in the app itself and need a native check)

Date decision: kept the Buddhist Era year (20 พฤศจิกายน 2569). Thai-language legal pages of international companies (Google, Apple, Microsoft Thai policies) date them in B.E., and Thai iOS uses the Buddhist calendar by default, so a Thai reader expects 2569. The CSV column description keeps "(ปี ค.ศ.)" so users still enter Gregorian years in import files.

Changes: 2
- site.privacy.stored[2], "การตั้งค่าและความชอบของคุณ", "การตั้งค่าและค่ากำหนดของคุณ", "ความชอบ" means likes or tastes; "ค่ากำหนด" is the standard software term for preferences.
- legal.terms.responsibilities.items[3], "ถอดรหัสโปรแกรม", "ดีคอมไพล์", "ถอดรหัส" means decrypt; "ดีคอมไพล์" is the term used in Thai software licences.

Translator flags resolved: legal.privacy.lastUpdated and legal.terms.lastUpdated (B.E. confirmed, above), legal.terms.responsibilities.items[3] (fixed), site.hero.title, site.features.items.timers.body, site.tutorial.importLogs.columns[0].desc, site.tutorial.importLogs.tips[1], legal.privacy.rights.intro (GDPR name is the usual Thai rendering): confirmed. All legal statements checked against the English: complete and precise.

Still flagged for a native speaker:

| Key | English | Translation | Why |
|---|---|---|---|
| site.nav.support, site.footer.support, site.support.eyebrow, legal.chrome.support, site.meta.support.title | Support | สนับสนุน | Glossary reads as "sponsor"; "ช่วยเหลือ" is more natural for a help page. Kept as the app label; fix in the app. |
| site.gallery.items[2].alt | days shown up | วันที่แสดงอยู่ | Glossary means "days displayed"; fix in the app. |
| site.tutorial.pace.title, items | Pace | จังหวะ | Glossary term; runners say "เพซ". |
| site.tutorial.pace.items, site.gallery.items[2].alt | km | กม | Glossary drops the abbreviation dot (standard "กม."). Check the app. |
| site.features.items.dashboard.eyebrow, body, site.hero.phoneAlt | Becoming | กำลังเป็น | Glossary term reads as an incomplete phrase in sentences. |
| site.features.items.widgets.eyebrow | Live Activity | กิจกรรมสด | Check against Apple's Thai name. |
| site.meta.*.title, legal.meta.*.title | Support, MyGrowth | สนับสนุน, MyGrowth | Comma separator kept from the site pattern; Thai titles often use a space or "|". |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | รวมกับข้อมูลที่มีอยู่ | Not in glossary; match the app's exact label. |

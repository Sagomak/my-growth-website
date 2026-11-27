# tr (Türkçe)
Confidence: medium (informal "sen" as in the App Store copy; glossary collisions around "Hedef" and a few mistranslated glossary terms)

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.features.items.dashboard.becomingLabel | Becoming | Hedef | glossary uses "Hedef" for Becoming, Goal and Target alike; "Dashboard ve Hedef" loses the "becoming" idea |
| site.pro.proItems[1] | Full history | Tam tarih | glossary term kept; "tarih" reads as "date", "Tüm geçmiş" would be correct |
| site.gallery.items[2].alt | days shown up | Gösterilen günler | glossary term kept; means "displayed days" |
| site.tutorial.reminders.items[1][0] | Evening nudge | Akşam Hatırlatıcısı | glossary term; same word as the morning one |
| site.year.todayLabel | Today, {pct}% of the day gone | Bugün, günün %{pct} kısmı geçti | percent sign before the number (Turkish style); phrased with "kısmı" so no vowel-harmony suffix attaches to the variable number |
| site.tutorial.pace.items | 38 min'de, 30 min'de | unit "min" from glossary with a case suffix | reads a little technical |
| site.badge.alt | Download on the App Store | App Store'dan indirin | formal, matching Apple's official Turkish badge text |
| site.support.emailCta / legal.contact | Write to | Yaz: | assumes the email follows; check rendering |
| site.nav.theme.light / dark | Paper / Graphite | Kâğıt / Grafit | not in glossary; check the app's labels |
| site.tutorial.importLogs.tips[1] | 'Work out' does not match 'Workout' | 'Antreman' 'Antrenman' ile eşleşmez | example adapted to a common misspelling |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Mevcut verilerle birleştir | no glossary entry; check the app's option label |
| site.features.items.widgets.body | Habit Grid widget | Habit Grid widget'ı | widget name left in English |
| legal.privacy.rights.intro | General Data Protection Regulation | Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR) | EU regulation, no Turkish official acronym; KVKK not applicable |
| legal.privacy.rights.export | Export | Dışa Aktar | no glossary entry for plain "Export" |
| legal (whole) | (register) | informal "sen" | Turkish legal texts usually use "siz"; kept informal to match the App Store copy, check |

## Reviewer
Confidence after review: medium (website copy and legal text are sound, but the app glossary maps Becoming to "Hedef", which weakens a core concept on the page, and the legal register question is open)

Changes: 2
- site.year.gridLabel: "Örnek heatmap: bir yıllık okuma, her gün için bir kare, bugünle biter." → "Örnek heatmap: bugüne kadar bir yıllık okuma, her gün için bir kare." (smoother; "bugünle biter" dangled)
- site.tutorial.importLogs.tips[0]: "Excel, Google Sheets ve Numbers'ın hepsi olur:" → "Excel, Google Sheets ve Numbers'ın hepsi uygundur:" ("hepsi olur" is too loose for written copy)

Confirmed translator choices: "%{pct}" order is correct Turkish; "{theme} temasına" avoids vowel-harmony problems; "38 min'de" is acceptable; "Yaz:" before the email works; GDPR with the full EU name is right (KVKK does not apply); "kanunlar ihtilafı kurallarına bakılmaksızın" is the standard legal phrase.

Still flagged for a native speaker:

| Key | English | Translation | Why |
|---|---|---|---|
| site.features.items.dashboard.*, site.hero.phoneAlt | Becoming | Hedef | glossary reuses "Hedef" (also Goal, Target); "Dashboard ve Hedef" loses "becoming"; app should use e.g. "Dönüşüm" |
| site.pro.proItems[1] | Full history | Tam tarih | app glossary term reads as "full date"; should be "Tüm geçmiş" in the app, then here |
| site.gallery.items[2].alt | days shown up | Gösterilen günler | app glossary term means "displayed days"; fix in the app |
| site.tutorial.reminders.items[1][0] | Evening nudge | Akşam Hatırlatıcısı | same word as the morning reminder; app glossary choice |
| legal (whole) | (register) | informal "sen" | Turkish legal texts usually use "siz"; kept informal to match the App Store copy, owner to decide |

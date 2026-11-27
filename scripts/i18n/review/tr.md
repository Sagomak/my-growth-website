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

## Formal address (legal), 2026-11-27

Legal pages switched from informal to formal address (sen → siz). Marketing copy (content/site) stays informal. Changed key paths (37):

- legal.meta.privacy.description
- legal.privacy.intro
- legal.privacy.short.body
- legal.privacy.stored.intro
- legal.privacy.stored.footer
- legal.privacy.thirdParty.body
- legal.privacy.rights.title
- legal.privacy.rights.intro
- legal.privacy.rights.access
- legal.privacy.rights.export
- legal.privacy.rights.delete
- legal.privacy.rights.rectify
- legal.privacy.rights.footer
- legal.privacy.retention.body
- legal.privacy.contact.body
- legal.privacy.purchases.body[0]
- legal.privacy.purchases.body[1]
- legal.privacy.purchases.body[2]
- legal.terms.intro
- legal.terms.acceptance.body
- legal.terms.description.body
- legal.terms.responsibilities.items[0]
- legal.terms.responsibilities.items[1]
- legal.terms.responsibilities.items[2]
- legal.terms.responsibilities.items[3]
- legal.terms.dataPrivacy.item1
- legal.terms.dataPrivacy.item2
- legal.terms.dataPrivacy.item3
- legal.terms.ip.body
- legal.terms.iap.body
- legal.terms.liability.body
- legal.terms.dataLoss.body
- legal.terms.modifications.body
- legal.terms.termination.body
- legal.terms.contact.body
- legal.chrome.backHome
- legal.englishLink

Doubts:

- privacy.purchases.body[1] "abonelik geçmişini" and terms.iap.body "satın alma durumunu": the informal form was ambiguous between the compound-noun suffix and the 2nd person possessive. English has "your" in both, so I read them as possessive and changed to "geçmişinizi" and "durumunuzu". Confirm.
- privacy.purchases.body[2] "hesap bilgilerini" → "hesap bilgilerinizi" to match the already 2nd person "adını, e-postanı" in the same list (English has no "your" there).
- terms.termination.body: "ihlal ettiğini" and "zarar verdiğini" left unchanged; their subject is the conduct (3rd person), not the reader. Only "erişimini" → "erişiminizi".
- privacy.retention.body: "silene" and "kaldırana" are person-neutral converbs, left unchanged.
- chrome.backHome "Ana sayfaya dön" → "Ana sayfaya dönün" and englishLink "oku" → "okuyun": navigation labels; Turkish UI often keeps the bare imperative for buttons. Revert these two if the owner prefers short link labels.

## Skyline strings, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.skyline.skyline | 3D skyline | 3D silüet | "silüet" for skyline; "3B" is the TDK-style abbreviation, "3D" kept as more common on the web. |
| site.footer.skyline | Skyline chart adapted from | Silüet grafiği şuradan uyarlandı: | Turkish word order would put the source before the verb; a colon before the link avoids that. |
| site.skyline.range | {a} to {b} | {a} ile {b} arası | Avoids suffix harmony on dates ("'dan/'den"); check after a stat label. |
| site.skyline.levelUnder | Under {pct} | {pct} altı | Legend label; "{pct} altında" is the fuller alternative. |
| site.skyline.goal | Runs count the days at or above the {goal} goal. | Seriler, {goal} hedefine ulaştığın ya da onu geçtiğin günleri sayar. | Dative suffix sits on "hedef", so it works with any {goal} value. |

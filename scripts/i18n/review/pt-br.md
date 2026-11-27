# pt-br (Português (Brasil))
Confidence: high ("você" register and wording taken from the App Store copy; several glossary terms read oddly and the GDPR naming needs a decision)

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.year.habit | Reading | Lendo | glossary habit name is a gerund ("reading" as in "I am reading"); "Leitura" would be natural, kept glossary |
| site.features.items.widget.name | Reading | Lendo | same glossary issue |
| site.hero.sub | watch showing up turn into progress | ver o aparecer virar progresso | taken from the App Store text; "o aparecer" is slightly unusual |
| site.features.items.dashboard.becomingLabel | Becoming | Rumo a | glossary term; incomplete as a bare label, goal written as "ser alguém que cumpre o que promete" so it reads "Rumo a ser alguém..." |
| site.gallery.items[2].alt | days shown up | dias mostrados | glossary "Dias mostrados" means "days displayed"; likely a wrong app string |
| site.tutorial.reminders.items[1][0] | Evening Nudge | Empurrão Noturno | glossary term; literal and a bit odd |
| site.tutorial.pace.intro | Track time | Rastrear tempo | glossary term, kept |
| site.nav.faq | FAQ | Perguntas | "FAQ" is less common in pt-BR; check the nav width |
| site.features.items.widgets.* | Live Activity, Home Screen, Lock Screen | Atividade ao Vivo, Tela de Início, Tela Bloqueada | Apple pt-BR UI names to confirm |
| site.features.items.widgets.body | Habit Grid widget | widget de Grade do hábito | widget name not in glossary |
| site.tutorial.importLogs.tips[1] | 'Work out' does not match 'Workout' | “Treinos” não corresponde a “Treino” | example adapted to a plural instead of a split word |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Mesclar com os existentes | not in glossary; check the app's button label |
| site.lang.suggest | Available in Portuguese | Disponível em português | "do Brasil" omitted for brevity |
| legal.privacy.rights.* | GDPR | RGPD (Regulamento Geral sobre a Proteção de Dados, "conhecido em inglês como GDPR") | EU regulation; Brazilian readers often know it as GDPR, and the local law is the LGPD, which the English does not mention; confirm naming |
| legal.terms.termination.title | Termination | Rescisão | legal term to confirm |
| legal.terms.warranties.body | "as is" | “no estado em que se encontra” | standard rendering, confirm |

## Reviewer
Confidence after review: high (accurate, complete legal text, consistent "você" register matching the App Store copy; open points are glossary strings from the app and the GDPR naming)

Changes: 9
- site.features.title: "Veja crescer." → "Veja tudo crescer." (verb without object read as a fragment)
- site.pro.proItems[2]: "de todo o tempo" → "de todo o histórico" (calque of "all time")
- site.pro.plans: "ou uma vez para sempre." → "ou uma única vez, para sempre." (clearer that it is a one-time purchase)
- site.faq.title: "Perguntas, respondidas." → "Suas dúvidas, respondidas." (calque; "dúvidas" is the natural pt-BR word, as in the support page)
- site.faq.items[0].a: "Uma tela curta se abre" → "Uma pequena tela se abre" ("curta" does not describe a screen)
- site.cta.title: "você vai se alegrar por ter começado" → "você vai ficar feliz por ter começado" (more natural)
- site.notFound.title: "Esta página não está aqui." → "Esta página não existe." (literal)
- site.a11y.mainNav: "Principal" → "Navegação principal" (bare adjective as an aria label)
- legal.terms.termination.title: "Rescisão" → "Encerramento" (the clause ends access, it does not rescind a contract; matches "encerrar" in the body; resolves flag)

Confirmed translator flags: site.nav.faq "Perguntas" (fine and short), legal.terms.warranties.body "no estado em que se encontra" (standard pt-BR rendering of "as is"), Apple UI names Tela de Início, Tela Bloqueada, Atividade ao Vivo (match Apple pt-BR). site.hero.sub kept: it repeats the App Store wording, as the brief requires.

Still flagged for a native speaker:

| Key | English | Translation | Why |
|---|---|---|---|
| site.year.habit, site.features.items.widget.name | Reading | Lendo | glossary habit name is a gerund; "Leitura" would be natural; fix in the app first |
| site.hero.sub | watch showing up turn into progress | ver o aparecer virar progresso | App Store wording; "o aparecer" is unusual |
| site.features.items.dashboard.becomingLabel | Becoming | Rumo a | glossary term; incomplete as a bare label |
| site.gallery.items[2].alt | days shown up | dias mostrados | glossary string means "days displayed"; likely wrong in the app |
| site.tutorial.reminders.items[1][0] | Evening Nudge | Empurrão Noturno | glossary term, literal |
| site.features.items.widgets.body | Habit Grid widget | widget de Grade do hábito | widget name not in glossary |
| site.tutorial.backup.restoreSteps[3] | Merge with existing | Mesclar com os existentes | button label not in glossary |
| legal.privacy.rights.intro | General Data Protection Regulation | Regulamento Geral sobre a Proteção de Dados (RGPD, conhecido em inglês como GDPR) | parenthetical is an addition to the source; owner to decide between RGPD, GDPR or keeping the gloss |


## Skyline strings, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.skyline.tooltip | {pct} on {date} | {date}: {pct} | reordered with a colon, since "em quinta-feira" would need "na" |
| site.skyline.skyline | 3D skyline | Skyline 3D | masculine "o skyline" used in hintOrbit |
| site.skyline.hintOrbit | Drag to turn the skyline, double click to reset | Arraste para girar o skyline, clique duas vezes para redefinir | "clique duas vezes" avoids "duplo clique"; both are natural |

## New message, 2026-11-27

| Key | English | Translation | Why flagged |
|---|---|---|---|
| site.features.eyebrow | How it helps | Como isso ajuda você | slightly wordy; "Como te ajuda" is more colloquial but mixes te/você |
| site.features.title | Show up daily. Watch it add up. | Apareça todo dia. Veja tudo somar. | "aparecer" for "show up", as in the existing site and App Store copy |
| site.hero.trust | One small step a day. A year of proof. | Um pequeno passo por dia. Um ano de provas. | "provas" can also mean "exams" |
| site.features.items.widgets.title | Your habits, one glance away. | Seus hábitos, a um olhar de distância. | literal; alternative "Seus hábitos sempre à vista" |

## Review: new message, 2026-11-27

| Key | Before | After | Why |
|---|---|---|---|
| site.hero.trust | Um pequeno passo por dia. Um ano de provas. | Um pequeno passo por dia. Um ano como prova. | "provas" can read as "exams"; singular "como prova" is unambiguous |
| site.features.items.widgets.title | Seus hábitos, a um olhar de distância. | Seus hábitos, de relance. | literal calque; "de relance" is idiomatic and matches the App Store copy |
| site.features.items.themes.body | Um visual desenhado à mão que faz de abrir o app todo dia um pequeno prazer. ... | Um visual desenhado à mão que torna um pequeno prazer abrir o app todo dia. ... | "faz de abrir" was ungrammatical-sounding |

Still doubtful: site.features.eyebrow "Como isso ajuda você" is a bit wordy but keeps the você register, kept. "aparecer" for "show up" follows the App Store copy. Privacy body exact. Glossary terms (Grade do hábito, widget Hoje, Tela de Início, Tela Bloqueada, Sequência, Constância) correct.

Confidence: high

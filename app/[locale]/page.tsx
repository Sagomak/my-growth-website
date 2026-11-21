import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { en } from "@/content/en";
import { APP_STORE_URL, LANGUAGES, SITE_URL } from "@/lib/site";
import { HABIT, rampVars } from "@/lib/colors";
import { Nav, Footer, AppStoreBadge, Eyebrow, SectionHead } from "@/components/Chrome";
import { InkFrame, Node, InkDivider } from "@/components/Ink";
import { Phone } from "@/components/Phone";
import { Heatmap } from "@/components/Heatmap";
import { WeekStrip } from "@/components/WeekStrip";
import { ConsistencyChart, BarsChart } from "@/components/Charts";
import { Timer } from "@/components/Timer";
import { EventsMosaic } from "@/components/EventsMosaic";
import { Faq } from "@/components/Faq";
import { JsonLd, softwareApp } from "@/components/JsonLd";

export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: "en" }];
}

export const metadata: Metadata = {
  title: en.meta.home.title,
  description: en.meta.home.description,
  alternates: { canonical: "/en/" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/en/`,
    siteName: "MyGrowth",
    title: en.meta.home.title,
    description: en.meta.home.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MyGrowth: hand-drawn habit heatmap and charts" }],
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: en.meta.home.title, description: en.meta.home.description, images: ["/og-image.png"] },
};

const F = en.features.items;

export default function Home() {
  // Build time; the live visuals move to the visitor's own clock on load.
  const now = new Date().toISOString();
  return (
    <>
      <JsonLd data={softwareApp} />
      <Nav />
      <main id="main">
        {/* Hero */}
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <Eyebrow seed="hero">{en.hero.eyebrow}</Eyebrow>
            <h1 id="hero-title">{en.hero.title}</h1>
            <p className="hero-sub">{en.hero.sub}</p>
            <div className="hero-cta">
              <AppStoreBadge height={52} />
            </div>
            <p className="hero-trust">
              <Node seed="hero.trust" size={7} />
              <span>{en.hero.trust}</span>
            </p>
          </div>
          <div className="hero-visual">
            <Phone src="/screens/dashboard.webp" srcDark="/screens/dashboard-dark.webp" alt={en.hero.phoneAlt} priority width={320} vw={64} />
          </div>
        </section>

        {/* Your year */}
        <section className="year wrap" aria-labelledby="year-title">
          <InkFrame seed="home.year" className="year-card" hint={[1056, 330]}>
            <div className="year-head">
              <div>
                <Eyebrow seed="year">{en.year.eyebrow}</Eyebrow>
                <h2 id="year-title" className="year-title">{en.year.title}</h2>
                <p className="muted">{en.year.body}</p>
              </div>
              <WeekStrip initialNow={now} label={en.year.weekLabel} todayLabel={en.year.todayLabel} />
            </div>
            <InkDivider seed="year.divider" className="year-divider" />
            <p className="year-habit hand">{en.year.habit}</p>
            <Heatmap habit="reading" initialNow={now} label={en.year.gridLabel} />
            <div className="legend" aria-hidden="true">
              <span>{en.year.legendLess}</span>
              {[0, 1, 2, 3, 4].map((l) => <i key={l} className={`legend-cell ramp-green l${l}`} />)}
              <span>{en.year.legendMore}</span>
            </div>
          </InkFrame>
        </section>

        {/* Features */}
        <section id="features" className="features wrap" aria-labelledby="features-title">
          <SectionHead id="features-title" seed="features" eyebrow={en.features.eyebrow} title={en.features.title} />

          {/* Dashboard and Becoming */}
          <article className="feature-row">
            <div className="feature-text">
              <Eyebrow seed="f.dashboard">{F.dashboard.eyebrow}</Eyebrow>
              <h3>{F.dashboard.title}</h3>
              <p>{F.dashboard.body}</p>
            </div>
            <div className="feature-visual becoming-visual">
              <div className="becoming">
                <InkFrame seed="dashboard.becoming" variant="plain" lineWidth={2} className="becoming-frame"
                  style={{ "--ink-color": "var(--accent)" } as CSSProperties} hint={[360, 110]}>
                  <p className="becoming-label hand">{F.dashboard.becomingLabel}</p>
                  <p className="becoming-goal hand">{F.dashboard.becomingGoal}</p>
                </InkFrame>
                <Node seed="dashboard.becoming.node" size={16} className="becoming-node" />
              </div>
              <div className="mini-cards" aria-hidden="true">
                {[
                  { n: "Reading", v: "25", u: "pages", c: HABIT.sky, open: false },
                  { n: "Workout", v: "45", u: "min", c: HABIT.orange, open: false },
                  { n: "Meditation", v: "", u: "min", c: HABIT.violet, open: true },
                ].map((h) => (
                  <InkFrame key={h.n} seed={`mini.${h.n}`} className={`mini-card ramp-host${h.open ? " open" : ""}`} hint={[110, 96]}
                    style={{ ...rampVars(h.c), "--ink-color": h.open ? "var(--contour)" : "var(--habit-line)" } as CSSProperties}>
                    <span className="mini-name hand">{h.n}</span>
                    {h.v ? <span className="mini-value num">{h.v}<small>{h.u}</small></span> : <span className="mini-empty" />}
                  </InkFrame>
                ))}
              </div>
            </div>
          </article>

          {/* Grid */}
          <article className="feature-row reverse">
            <div className="feature-text">
              <Eyebrow seed="f.grid">{F.grid.eyebrow}</Eyebrow>
              <h3>{F.grid.title}</h3>
              <p>{F.grid.body}</p>
            </div>
            <div className="feature-visual grid-visual">
              {[
                { k: "workout", n: "Workout", c: HABIT.orange },
                { k: "meditation", n: "Meditation", c: HABIT.violet },
                { k: "water", n: "Water", c: HABIT.sky },
              ].map((h) => (
                <InkFrame key={h.k} seed={`grid.${h.k}`} className="grid-card" hint={[480, 120]}>
                  <p className="grid-name hand">{h.n}</p>
                  <Heatmap habit={h.k} color={h.c} initialNow={now} cell={9} gap={2.5} maxWeeks={53} months={false} deferCells
                    label={`Example heatmap for ${h.n}, one square per day.`} />
                </InkFrame>
              ))}
            </div>
          </article>

          {/* Charts */}
          <article className="feature-row">
            <div className="feature-text">
              <Eyebrow seed="f.charts">{F.charts.eyebrow}</Eyebrow>
              <h3>{F.charts.title}</h3>
              <p>{F.charts.body}</p>
            </div>
            <div className="feature-visual charts-visual">
              <InkFrame seed="charts.consistency" className="chart-card" hint={[520, 280]}>
                <ConsistencyChart label={F.charts.chartLabel} title={F.charts.consistency} sub={F.charts.lastDays} />
              </InkFrame>
              <InkFrame seed="charts.bars" className="chart-card small" hint={[300, 200]}>
                <BarsChart label={F.charts.barsLabel} title={F.charts.minutes} color={HABIT.violet} />
              </InkFrame>
            </div>
          </article>

          {/* Bento */}
          <div className="bento">
            <InkFrame as="article" seed="bento.events" className="tile tile-events" hint={[540, 360]}>
              <Eyebrow seed="f.events">{F.events.eyebrow}</Eyebrow>
              <h3>{F.events.title}</h3>
              <p>{F.events.body}</p>
              <EventsMosaic legend={F.events.legend} />
            </InkFrame>

            <InkFrame as="article" seed="bento.widgets" className="tile tile-widgets" hint={[540, 360]}>
              <div className="tile-split">
                <div>
                  <Eyebrow seed="f.widgets">{F.widgets.eyebrow}</Eyebrow>
                  <h3>{F.widgets.title}</h3>
                  <p>{F.widgets.body}</p>
                </div>
                <InkFrame seed="widget.grid" className="widget-mock" radius={22} hint={[160, 160]}>
                  <p className="widget-name hand">{F.widget.name}</p>
                  <Heatmap habit="widget.reading" initialNow={now} cell={8} gap={2.5} maxWeeks={13} months={false}
                    label={F.widget.label} className="widget-heat" />
                </InkFrame>
              </div>
            </InkFrame>

            <InkFrame as="article" seed="bento.timers" className="tile tile-timers" hint={[350, 330]}>
              <Eyebrow seed="f.timers">{F.timers.eyebrow}</Eyebrow>
              <h3>{F.timers.title}</h3>
              <p>{F.timers.body}</p>
              <Timer label={F.timers.timer} />
            </InkFrame>

            <InkFrame as="article" seed="bento.themes" className="tile tile-themes" hint={[350, 330]}>
              <Eyebrow seed="f.themes">{F.themes.eyebrow}</Eyebrow>
              <h3>{F.themes.title}</h3>
              <p>{F.themes.body}</p>
              <div className="theme-pair">
                <figure>
                  <Phone src="/screens/dashboard.webp" alt="The Dashboard on warm paper." width={120} className="phone-small" />
                  <figcaption className="hand">{F.themes.paper}</figcaption>
                </figure>
                <figure>
                  <Phone src="/screens/dashboard-dark.webp" alt="The Dashboard on soft graphite." width={120} className="phone-small" />
                  <figcaption className="hand">{F.themes.graphite}</figcaption>
                </figure>
              </div>
            </InkFrame>

            <InkFrame as="article" seed="bento.languages" className="tile tile-languages" hint={[350, 330]}>
              <Eyebrow seed="f.languages">{F.languages.eyebrow}</Eyebrow>
              <h3>{F.languages.title}</h3>
              <p>{F.languages.body}</p>
              <ul className="langs" aria-label="Languages">
                {LANGUAGES.map((l) => <li key={l}>{l}</li>)}
              </ul>
            </InkFrame>
          </div>
          {/* Real screenshots */}
          <div className="gallery">
            <Eyebrow seed="gallery">{en.gallery.eyebrow}</Eyebrow>
            <ul className="gallery-row" aria-label={en.gallery.label} tabIndex={0}>
              {en.gallery.items.map((g) => (
                <li key={g.src}>
                  <Phone src={g.src} alt={g.alt} width={220} className="phone-small" />
                  <span className="hand gallery-caption">{g.caption}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Privacy */}
        <section id="privacy" className="privacy wrap" aria-labelledby="privacy-title">
          <SectionHead id="privacy-title" seed="privacy" eyebrow={en.privacy.eyebrow} title={en.privacy.title} body={en.privacy.body} />
          <div className="privacy-cols">
            <InkFrame seed="privacy.stored" className="privacy-card" hint={[520, 230]}>
              <h3 className="card-title">{en.privacy.storedTitle}</h3>
              <ul className="ticks">
                {en.privacy.stored.map((s, i) => (
                  <li key={s}><Node seed={`privacy.s.${i}`} size={8} /><span>{s}</span></li>
                ))}
              </ul>
            </InkFrame>
            <InkFrame seed="privacy.never" className="privacy-card" hint={[520, 230]}>
              <h3 className="card-title">{en.privacy.neverTitle}</h3>
              <ul className="crosses">
                {en.privacy.never.map((s) => (
                  <li key={s}>
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 2.8L9.4 9.2M9.3 2.6L2.7 9.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </InkFrame>
          </div>
          <p className="privacy-note muted">{en.privacy.purchases}</p>
          <p><Link prefetch={false} className="cta-link hand" href="/en/privacy/">{en.privacy.link}<span aria-hidden="true"> ›</span></Link></p>
        </section>

        {/* Pro */}
        <section id="pro" className="pro wrap" aria-labelledby="pro-title">
          <SectionHead id="pro-title" seed="pro" eyebrow={en.pro.eyebrow} title={en.pro.title} body={en.pro.body} />
          <div className="pro-cols">
            <InkFrame seed="pro.free" className="plan" variant="plain" hint={[340, 260]}>
              <h3 className="card-title">{en.pro.freeTitle}</h3>
              <ul className="ticks quiet">
                {en.pro.free.map((s, i) => <li key={s}><Node seed={`pro.f.${i}`} size={7} color="var(--text-muted)" /><span>{s}</span></li>)}
              </ul>
            </InkFrame>
            <InkFrame seed="pro.pro" className="plan plan-pro" hint={[520, 300]}
              style={{ "--ink-color": "var(--accent)" } as CSSProperties} lineWidth={1.6}>
              <h3 className="card-title">{en.pro.proTitle}</h3>
              <ul className="ticks two">
                {en.pro.proItems.map((s, i) => <li key={s}><Node seed={`pro.p.${i}`} size={8} /><span>{s}</span></li>)}
              </ul>
              <p className="plan-price">{en.pro.plans} <a href={APP_STORE_URL}>{en.pro.price}</a></p>
            </InkFrame>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="faq wrap" aria-labelledby="faq-title">
          <SectionHead id="faq-title" seed="faq" eyebrow={en.faq.eyebrow} title={en.faq.title} />
          <Faq items={en.faq.items} base="/en" />
        </section>

        {/* Closing CTA */}
        <section className="closing wrap" aria-labelledby="closing-title">
          <InkFrame seed="home.closing" className="closing-card" hint={[1056, 260]}>
            <h2 id="closing-title">{en.cta.title}</h2>
            <AppStoreBadge height={52} />
          </InkFrame>
        </section>
      </main>
      <Footer />
    </>
  );
}

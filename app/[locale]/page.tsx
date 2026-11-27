import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { APP_STORE_URL, LANGUAGES } from "@/lib/site";
import { LOCALES, info, pathFor, type Locale } from "@/lib/i18n";
import { site, term, fill } from "@/lib/dict";
import { pageMetadata } from "@/lib/seo";
import { HABIT, rampVars } from "@/lib/colors";
import { AppStoreBadge, Eyebrow, SectionHead } from "@/components/Chrome";
import { Shell } from "@/components/Shell";
import { InkFrame, Node } from "@/components/Ink";
import { Phone } from "@/components/Phone";
import { Heatmap } from "@/components/Heatmap";
import { WeekStrip } from "@/components/WeekStrip";
import { ConsistencySkyline } from "@/components/ConsistencySkyline";
import { ConsistencyChart, BarsChart } from "@/components/Charts";
import { Timer } from "@/components/Timer";
import { EventsMosaic } from "@/components/EventsMosaic";
import { Faq } from "@/components/Faq";
import { JsonLd, softwareApp } from "@/components/JsonLd";

export const dynamicParams = false;
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const m = site(locale).meta.home;
  return pageMetadata(locale, "", m.title, m.description);
}

export default async function Home({ params }: Props) {
  const locale = (await params).locale as Locale;
  const t = site(locale);
  const F = t.features.items;
  const tag = info(locale).hreflang;
  const T = (w: string) => term(locale, w);
  // Build time; the live visuals move to the visitor's own clock on load.
  const now = new Date().toISOString();
  return (
    <>
      <JsonLd data={softwareApp(t, locale)} />
      <Shell locale={locale} page="">
        {/* Hero */}
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <Eyebrow seed="hero">{t.hero.eyebrow}</Eyebrow>
            <h1 id="hero-title">{t.hero.title}</h1>
            <p className="hero-sub">{t.hero.sub}</p>
            <div className="hero-cta">
              <AppStoreBadge t={t} locale={locale} height={52} />
            </div>
            <p className="hero-trust">
              <Node seed="hero.trust" size={7} />
              <span>{t.hero.trust}</span>
            </p>
          </div>
          <div className="hero-visual">
            <ConsistencySkyline locale={locale} />
          </div>
        </section>

        {/* Your year */}
        <section className="year wrap" aria-labelledby="year-title">
          <InkFrame seed="home.year" className="year-card" hint={[1056, 520]}>
            <div className="year-layout">
              <div className="year-copy">
                <Eyebrow seed="year">{t.year.eyebrow}</Eyebrow>
                <h2 id="year-title" className="year-title">{t.year.title}</h2>
                <p className="muted">{t.year.body}</p>
                <WeekStrip initialNow={now} label={t.year.weekLabel} todayLabel={t.year.todayLabel} lang={tag} />
              </div>
              <div className="year-phone">
                <Phone src="/screens/dashboard.webp" srcDark="/screens/dashboard-dark.webp" alt={t.hero.phoneAlt} width={280} vw={64} />
              </div>
            </div>
          </InkFrame>
        </section>

        {/* Features */}
        <section id="features" className="features wrap" aria-labelledby="features-title">
          <SectionHead id="features-title" seed="features" eyebrow={t.features.eyebrow} title={t.features.title} />

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
                  { k: "Reading", n: T("Reading"), v: "25", u: T("pages"), c: HABIT.sky, open: false },
                  { k: "Workout", n: T("Workout"), v: "45", u: T("min"), c: HABIT.orange, open: false },
                  { k: "Meditation", n: T("Meditation"), v: "", u: T("min"), c: HABIT.violet, open: true },
                ].map((h) => (
                  <InkFrame key={h.k} seed={`mini.${h.k}`} className={`mini-card ramp-host${h.open ? " open" : ""}`} hint={[110, 96]}
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
                { k: "workout", n: T("Workout"), c: HABIT.orange },
                { k: "meditation", n: T("Meditation"), c: HABIT.violet },
                { k: "water", n: T("Water"), c: HABIT.sky },
              ].map((h) => (
                <InkFrame key={h.k} seed={`grid.${h.k}`} className="grid-card" hint={[480, 120]}>
                  <p className="grid-name hand">{h.n}</p>
                  <Heatmap habit={h.k} color={h.c} initialNow={now} cell={9} gap={2.5} maxWeeks={53} months={false} deferCells
                    label={fill(t.a11y.gridLabel, { habit: h.n })} lang={tag} />
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
                <BarsChart label={F.charts.barsLabel} title={F.charts.minutes} color={HABIT.violet} lang={tag} />
              </InkFrame>
            </div>
          </article>

          {/* Bento */}
          <div className="bento">
            <InkFrame as="article" seed="bento.events" className="tile tile-events" hint={[540, 360]}>
              <Eyebrow seed="f.events">{F.events.eyebrow}</Eyebrow>
              <h3>{F.events.title}</h3>
              <p>{F.events.body}</p>
              <EventsMosaic legend={F.events.legend} label={t.a11y.eventsLabel} />
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
                  <Heatmap habit="widget.reading" initialNow={now} cell={8} gap={2.5} maxWeeks={13} months={false} lang={tag}
                    label={F.widget.label} className="widget-heat" />
                </InkFrame>
              </div>
            </InkFrame>

            <InkFrame as="article" seed="bento.timers" className="tile tile-timers" hint={[350, 330]}>
              <Eyebrow seed="f.timers">{F.timers.eyebrow}</Eyebrow>
              <h3>{F.timers.title}</h3>
              <p>{F.timers.body}</p>
              <Timer label={T(F.timers.timer)} srLabel={t.a11y.timerRunning} units={[T("h"), T("min"), T("s")]} />
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
              <ul className="langs" aria-label={t.a11y.languages}>
                {LANGUAGES.map((l, i) => <li key={l} lang={info(LOCALES[i]).hreflang}>{l}</li>)}
              </ul>
            </InkFrame>
          </div>
          {/* Real screenshots */}
          <div className="gallery">
            <Eyebrow seed="gallery">{t.gallery.eyebrow}</Eyebrow>
            <ul className="gallery-row" aria-label={t.gallery.label} tabIndex={0}>
              {t.gallery.items.map((g) => (
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
          <SectionHead id="privacy-title" seed="privacy" eyebrow={t.privacy.eyebrow} title={t.privacy.title} body={t.privacy.body} />
          <div className="privacy-cols">
            <InkFrame seed="privacy.stored" className="privacy-card" hint={[520, 230]}>
              <h3 className="card-title">{t.privacy.storedTitle}</h3>
              <ul className="ticks">
                {t.privacy.stored.map((s, i) => (
                  <li key={s}><Node seed={`privacy.s.${i}`} size={8} /><span>{s}</span></li>
                ))}
              </ul>
            </InkFrame>
            <InkFrame seed="privacy.never" className="privacy-card" hint={[520, 230]}>
              <h3 className="card-title">{t.privacy.neverTitle}</h3>
              <ul className="crosses">
                {t.privacy.never.map((s) => (
                  <li key={s}>
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 2.8L9.4 9.2M9.3 2.6L2.7 9.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </InkFrame>
          </div>
          <p className="privacy-note muted">{t.privacy.purchases}</p>
          <p><Link prefetch={false} className="cta-link hand" href={pathFor(locale, "privacy")}>{t.privacy.link}<span aria-hidden="true"> ›</span></Link></p>
        </section>

        {/* Pro */}
        <section id="pro" className="pro wrap" aria-labelledby="pro-title">
          <SectionHead id="pro-title" seed="pro" eyebrow={t.pro.eyebrow} title={t.pro.title} body={t.pro.body} />
          <div className="pro-cols">
            <InkFrame seed="pro.free" className="plan" variant="plain" hint={[340, 260]}>
              <h3 className="card-title">{t.pro.freeTitle}</h3>
              <ul className="ticks quiet">
                {t.pro.free.map((s, i) => <li key={s}><Node seed={`pro.f.${i}`} size={7} color="var(--text-muted)" /><span>{s}</span></li>)}
              </ul>
            </InkFrame>
            <InkFrame seed="pro.pro" className="plan plan-pro" hint={[520, 300]}
              style={{ "--ink-color": "var(--accent)" } as CSSProperties} lineWidth={1.6}>
              <h3 className="card-title">{t.pro.proTitle}</h3>
              <ul className="ticks two">
                {t.pro.proItems.map((s, i) => <li key={s}><Node seed={`pro.p.${i}`} size={8} /><span>{s}</span></li>)}
              </ul>
              <p className="plan-price">{t.pro.plans} <a href={APP_STORE_URL}>{t.pro.price}</a></p>
            </InkFrame>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="faq wrap" aria-labelledby="faq-title">
          <SectionHead id="faq-title" seed="faq" eyebrow={t.faq.eyebrow} title={t.faq.title} />
          <Faq items={t.faq.items} locale={locale} />
        </section>

        {/* Closing CTA */}
        <section className="closing wrap" aria-labelledby="closing-title">
          <InkFrame seed="home.closing" className="closing-card" hint={[1056, 260]}>
            <h2 id="closing-title">{t.cta.title}</h2>
            <AppStoreBadge t={t} locale={locale} height={52} />
          </InkFrame>
        </section>
      </Shell>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/Shell";
import { InkFrame } from "@/components/Ink";
import { Rich } from "@/components/Rich";
import { legal } from "@/lib/dict";
import { pageMetadata } from "@/lib/seo";
import { LEGACY_LEGAL, LOCALES, pathFor, type Locale } from "@/lib/i18n";
import { SUPPORT_EMAIL } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const m = legal(locale).meta.privacy;
  return pageMetadata(locale, "privacy", m.title, m.description);
}

/** Translations made for this site carry the note that English prevails. */
export function LanguageNote({ locale, page }: { locale: Locale; page: "privacy" | "terms" }) {
  if (locale === "en" || LEGACY_LEGAL.includes(locale)) return null;
  const L = legal(locale);
  return (
    <p className="doc-note">
      {L.languageNote} <Link prefetch={false} href={pathFor("en", page)} hrefLang="en">{L.englishLink}</Link>
    </p>
  );
}

export default async function Privacy({ params }: Props) {
  const locale = (await params).locale as Locale;
  const P = legal(locale).privacy;
  return (
    <Shell locale={locale} page="privacy" doc>
      <h1>{P.title}</h1>
      <p className="doc-meta">{P.lastUpdated}</p>
      <LanguageNote locale={locale} page="privacy" />
      <p className="doc-intro">{P.intro}</p>

      <section className="doc-section">
        <h2>{P.short.title}</h2>
        <InkFrame seed="privacy.short" jitter="control" radius={12} className="doc-callout" style={{ ["--ink-color" as string]: "var(--accent)" }} hint={[700, 60]}>
          <p>{P.short.body}</p>
        </InkFrame>
      </section>

      <section className="doc-section">
        <h2>{P.stored.title}</h2>
        <p>{P.stored.intro}</p>
        <ul>{P.stored.items.map((i) => <li key={i}>{i}</li>)}</ul>
        <p>{P.stored.footer}</p>
      </section>

      <section className="doc-section">
        <h2>{P.notCollect.title}</h2>
        <ul>{P.notCollect.items.map((i) => <li key={i}>{i}</li>)}</ul>
      </section>

      <section className="doc-section">
        <h2>{P.thirdParty.title}</h2>
        <p>{P.thirdParty.body}</p>
      </section>

      <section className="doc-section" id="purchases">
        <h2>{P.purchases.title}</h2>
        {P.purchases.body.map((p) => <p key={p}>{p}</p>)}
      </section>

      <section className="doc-section">
        <h2>{P.rights.title}</h2>
        <p>{P.rights.intro}</p>
        <ul>
          {[P.rights.access, P.rights.export, P.rights.delete, P.rights.rectify].map((r) => <li key={r}><Rich text={r} /></li>)}
        </ul>
        <p>{P.rights.footer}</p>
      </section>

      <section className="doc-section"><h2>{P.retention.title}</h2><p>{P.retention.body}</p></section>
      <section className="doc-section"><h2>{P.children.title}</h2><p>{P.children.body}</p></section>
      <section className="doc-section"><h2>{P.changes.title}</h2><p>{P.changes.body}</p></section>
      <section className="doc-section">
        <h2>{P.contact.title}</h2>
        <p>{P.contact.body} <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
        <p className="doc-meta">Sagomak</p>
      </section>
    </Shell>
  );
}

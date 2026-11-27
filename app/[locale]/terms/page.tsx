import type { Metadata } from "next";
import { Shell } from "@/components/Shell";
import { Rich } from "@/components/Rich";
import { LanguageNote } from "@/app/[locale]/privacy/page";
import { legal } from "@/lib/dict";
import { pageMetadata } from "@/lib/seo";
import { LOCALES, pathFor, type Locale } from "@/lib/i18n";
import { SUPPORT_EMAIL } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const m = legal(locale).meta.terms;
  return pageMetadata(locale, "terms", m.title, m.description);
}

export default async function Terms({ params }: Props) {
  const locale = (await params).locale as Locale;
  const T = legal(locale).terms;
  const privacyHref = pathFor(locale, "privacy");
  const plain = [T.acceptance, T.description] as const;
  const after = [T.ip, T.iap, T.warranties, T.liability, T.dataLoss, T.modifications, T.termination, T.governingLaw] as const;
  return (
    <Shell locale={locale} page="terms" doc>
      <h1>{T.title}</h1>
      <p className="doc-meta">{T.lastUpdated}</p>
      <LanguageNote locale={locale} page="terms" />
      <p className="doc-intro">{T.intro}</p>
      {plain.map((s) => <section key={s.title} className="doc-section"><h2>{s.title}</h2><p>{s.body}</p></section>)}
      <section className="doc-section">
        <h2>{T.responsibilities.title}</h2>
        <ul>{T.responsibilities.items.map((i) => <li key={i}>{i}</li>)}</ul>
      </section>
      <section className="doc-section">
        <h2>{T.dataPrivacy.title}</h2>
        <ul>
          <li>{T.dataPrivacy.item1}</li>
          <li>{T.dataPrivacy.item2}</li>
          <li><Rich text={T.dataPrivacy.item3} href={privacyHref} /></li>
        </ul>
      </section>
      {after.map((s) => <section key={s.title} className="doc-section"><h2>{s.title}</h2><p><Rich text={s.body} href={`${privacyHref}#purchases`} /></p></section>)}
      <section className="doc-section">
        <h2>{T.contact.title}</h2>
        <p>{T.contact.body} <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
      </section>
    </Shell>
  );
}

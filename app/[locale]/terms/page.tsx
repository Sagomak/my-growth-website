import type { Metadata } from "next";
import { DocShell } from "@/components/DocShell";
import { Rich } from "@/components/Rich";
import { legal, legalAlternates } from "@/lib/legal";
import { LEGAL_LOCALES, SUPPORT_EMAIL, isLocale, type Locale } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return LEGAL_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const l = (isLocale(locale) ? locale : "en") as Locale;
  const m = legal(l).meta.terms;
  return { title: m.title, description: m.description, alternates: legalAlternates(l, "terms"), openGraph: { title: m.title, description: m.description, images: ["/og-image.png"] } };
}

export default async function Terms({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;
  const T = legal(l).terms;
  const privacyHref = `/${l}/privacy/`;
  const plain = [T.acceptance, T.description] as const;
  const after = [T.ip, T.iap, T.warranties, T.liability, T.dataLoss, T.modifications, T.termination, T.governingLaw] as const;
  return (
    <DocShell locale={l}>
      <h1>{T.title}</h1>
      <p className="doc-meta">{T.lastUpdated}</p>
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
    </DocShell>
  );
}

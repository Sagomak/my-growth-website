import type { Metadata } from "next";
import { DocShell } from "@/components/DocShell";
import { InkFrame } from "@/components/Ink";
import { Rich } from "@/components/Rich";
import { legal, legalAlternates } from "@/lib/legal";
import { LEGAL_LOCALES, SUPPORT_EMAIL, isLocale, type Locale } from "@/lib/site";
import { en } from "@/content/en";

export const dynamicParams = false;
export function generateStaticParams() {
  return LEGAL_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const l = (isLocale(locale) ? locale : "en") as Locale;
  const m = legal(l).meta.privacy;
  return { title: m.title, description: m.description, alternates: legalAlternates(l, "privacy"), openGraph: { title: m.title, description: m.description, images: ["/og-image.png"] } };
}

export default async function Privacy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;
  const P = legal(l).privacy;
  return (
    <DocShell locale={l}>
      <h1>{P.title}</h1>
      <p className="doc-meta">{P.lastUpdated}</p>
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
        <p className="doc-meta">{l === "en" ? en.footer.studio : "Sagomak"}</p>
      </section>
    </DocShell>
  );
}

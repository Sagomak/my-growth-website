import type { Metadata } from "next";
import { DocShell } from "@/components/DocShell";
import { InkFrame } from "@/components/Ink";
import { Faq } from "@/components/Faq";
import { JsonLd, faqPage } from "@/components/JsonLd";
import { en } from "@/content/en";
import { APP_STORE_URL, SUPPORT_EMAIL } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: "en" }];
}

export const metadata: Metadata = {
  title: en.meta.support.title,
  description: en.meta.support.description,
  alternates: { canonical: "/en/support/" },
  openGraph: { title: en.meta.support.title, description: en.meta.support.description, images: ["/og-image.png"] },
};

const S = en.support;

export default function Support() {
  return (
    <DocShell>
      <JsonLd data={faqPage(en.faq.items)} />
      <h1>{S.title}</h1>
      <p className="doc-intro">{S.intro}</p>
      <section className="doc-section">
        <h2>{S.faqTitle}</h2>
        <Faq items={en.faq.items} base="/en" />
      </section>
      <InkFrame as="section" seed="support.contact" className="contact-card" hint={[760, 200]}>
        <h2>{S.contactTitle}</h2>
        <p>{S.contactBody}</p>
        <a className="button" href={`mailto:${SUPPORT_EMAIL}?subject=MyGrowth%20Support%20Request`}>{S.emailCta} {SUPPORT_EMAIL}</a>
        <p>{S.reviewBefore}<a href={`${APP_STORE_URL}?action=write-review`}>{S.reviewLink}</a>{S.reviewAfter}</p>
      </InkFrame>
    </DocShell>
  );
}

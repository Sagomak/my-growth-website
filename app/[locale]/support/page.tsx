import type { Metadata } from "next";
import { Shell } from "@/components/Shell";
import { InkFrame } from "@/components/Ink";
import { Faq } from "@/components/Faq";
import { JsonLd, faqPage } from "@/components/JsonLd";
import { site } from "@/lib/dict";
import { pageMetadata } from "@/lib/seo";
import { LOCALES, type Locale } from "@/lib/i18n";
import { APP_STORE_URL, SUPPORT_EMAIL } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const m = site(locale).meta.support;
  return pageMetadata(locale, "support", m.title, m.description);
}

export default async function Support({ params }: Props) {
  const locale = (await params).locale as Locale;
  const t = site(locale);
  const S = t.support;
  return (
    <Shell locale={locale} page="support" doc>
      <JsonLd data={faqPage(t.faq.items, locale)} />
      <h1>{S.title}</h1>
      <p className="doc-intro">{S.intro}</p>
      <section className="doc-section">
        <h2>{S.faqTitle}</h2>
        <Faq items={t.faq.items} locale={locale} />
      </section>
      <InkFrame as="section" seed="support.contact" className="contact-card" hint={[760, 200]}>
        <h2>{S.contactTitle}</h2>
        <p>{S.contactBody}</p>
        <a className="button" href={`mailto:${SUPPORT_EMAIL}?subject=MyGrowth%20Support%20Request`}>{S.emailCta} {SUPPORT_EMAIL}</a>
        <p>{S.reviewBefore}<a href={`${APP_STORE_URL}?action=write-review`}>{S.reviewLink}</a>{S.reviewAfter}</p>
      </InkFrame>
    </Shell>
  );
}

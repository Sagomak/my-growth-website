import { APP_STORE_URL, APP_VERSION, SITE_URL, STUDIO, LANGUAGES } from "@/lib/site";
import { info, pathFor, LOCALE_INFO, type Locale } from "@/lib/i18n";
import type { Site } from "@/lib/dict";

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

const publisher = { "@type": "Organization", name: STUDIO, url: "https://sagomak.com" };

export function softwareApp(t: Site, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "MyGrowth: Habit & Life Tracker",
    alternateName: "MyGrowth",
    description: t.meta.home.description,
    url: `${SITE_URL}${pathFor(locale, "")}`,
    downloadUrl: APP_STORE_URL,
    installUrl: APP_STORE_URL,
    sameAs: [APP_STORE_URL],
    image: `${SITE_URL}/app-icon.png`,
    screenshot: `${SITE_URL}/og-image.png`,
    operatingSystem: "iOS",
    applicationCategory: "LifestyleApplication",
    softwareVersion: APP_VERSION,
    inLanguage: info(locale).hreflang,
    availableLanguage: LOCALE_INFO.map((l, i) => ({ "@type": "Language", name: LANGUAGES[i], alternateName: l.hreflang })),
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher,
    author: publisher,
  };
}

export function faqPage(items: readonly { q: string; a: string }[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: info(locale).hreflang,
    mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  };
}

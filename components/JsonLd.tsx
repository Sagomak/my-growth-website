import { APP_STORE_URL, APP_VERSION, SITE_URL, STUDIO } from "@/lib/site";
import { en } from "@/content/en";

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

const publisher = { "@type": "Organization", name: STUDIO, url: "https://sagomak.com" };

export const softwareApp = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "MyGrowth: Habit & Life Tracker",
  alternateName: "MyGrowth",
  description: en.meta.home.description,
  url: `${SITE_URL}/en/`,
  downloadUrl: APP_STORE_URL,
  installUrl: APP_STORE_URL,
  sameAs: [APP_STORE_URL],
  image: `${SITE_URL}/app-icon.png`,
  screenshot: `${SITE_URL}/og-image.png`,
  operatingSystem: "iOS",
  applicationCategory: "LifestyleApplication",
  softwareVersion: APP_VERSION,
  inLanguage: "en",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free download with optional in-app purchases (MyGrowth Pro)." },
  publisher,
  author: publisher,
};

export function faqPage(items: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  };
}

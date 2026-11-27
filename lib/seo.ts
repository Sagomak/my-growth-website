import type { Metadata } from "next";
import { LOCALE_INFO, info, pathFor, type Locale, type Page } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

/** Title, description, canonical, hreflang for all 25 languages plus
 *  x-default (English), and localized Open Graph text. */
export function pageMetadata(locale: Locale, page: Page, title: string, description: string): Metadata {
  const url = `${SITE_URL}${pathFor(locale, page)}`;
  return {
    title,
    description,
    alternates: {
      canonical: pathFor(locale, page),
      languages: {
        ...Object.fromEntries(LOCALE_INFO.map((l) => [l.hreflang, `${SITE_URL}${pathFor(l.code, page)}`])),
        "x-default": `${SITE_URL}${pathFor("en", page)}`,
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: "MyGrowth",
      title,
      description,
      locale: info(locale).og,
      alternateLocale: LOCALE_INFO.filter((l) => l.code !== locale).map((l) => l.og),
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MyGrowth" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
  };
}

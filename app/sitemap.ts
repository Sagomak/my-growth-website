import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { LOCALE_INFO, PAGES, pathFor } from "@/lib/i18n";

export const dynamic = "force-static";

/** All 25 languages x 5 pages, each with its hreflang alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PAGES.flatMap((page) => LOCALE_INFO.map((l) => ({
    url: `${SITE_URL}${pathFor(l.code, page)}`,
    lastModified,
    priority: page === "" ? 1 : page === "support" || page === "tutorial" ? 0.6 : 0.3,
    alternates: { languages: Object.fromEntries(LOCALE_INFO.map((x) => [x.hreflang, `${SITE_URL}${pathFor(x.code, page)}`])) },
  })));
}

import type { MetadataRoute } from "next";
import { LEGAL_LOCALES, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const en = ["", "/support", "/tutorial"].map((p) => ({
    url: `${SITE_URL}/en${p}/`, lastModified, priority: p === "" ? 1 : 0.6,
  }));
  const legal = (["privacy", "terms"] as const).flatMap((page) =>
    LEGAL_LOCALES.map((l) => ({
      url: `${SITE_URL}/${l}/${page}/`, lastModified, priority: 0.3,
      alternates: { languages: Object.fromEntries(LEGAL_LOCALES.map((x) => [x, `${SITE_URL}/${x}/${page}/`])) },
    })));
  return [...en, ...legal];
}

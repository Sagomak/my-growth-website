import en from "@/content/legal/en.json";
import it from "@/content/legal/it.json";
import es from "@/content/legal/es.json";
import de from "@/content/legal/de.json";
import { LEGAL_LOCALES, SITE_URL, type Locale } from "@/lib/site";

export type Legal = typeof en;
const ALL: Record<Locale, Legal> = { en, it, es, de };
export const legal = (l: Locale): Legal => ALL[l];

/** hreflang alternates for a legal page. */
export function legalAlternates(locale: Locale, page: "privacy" | "terms") {
  return {
    canonical: `/${locale}/${page}/`,
    languages: Object.fromEntries([
      ...LEGAL_LOCALES.map((l) => [l, `${SITE_URL}/${l}/${page}/`]),
      ["x-default", `${SITE_URL}/en/${page}/`],
    ]),
  };
}

import { SITE, LEGAL } from "@/lib/dict.generated";
import en from "@/content/site/en.json";
import enLegal from "@/content/legal/en.json";
import type { Locale } from "@/lib/i18n";

export type Site = typeof en;
export type Legal = typeof enLegal;

/** Copy for a locale. Every locale has the English keys (scripts/check-i18n.mjs). */
export function site(l: Locale): Site {
  return ((SITE as Record<string, unknown>)[l] ?? en) as Site;
}
export function legal(l: Locale): Legal {
  return ((LEGAL as Record<string, unknown>)[l] ?? enLegal) as Legal;
}

/** "{name}" placeholders. */
export const fill = (s: string, vars: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));

import { GLOSSARY } from "@/lib/dict.generated";

/** The app's own word for an English UI term (habit names, units, tabs), from
 *  its string catalog (scripts/i18n/glossary). English is the term itself. */
export function term(l: Locale, en: string): string {
  return GLOSSARY[l]?.[en] ?? en;
}

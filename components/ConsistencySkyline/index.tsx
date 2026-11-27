/* The home hero's Consistency skyline: example data from lib/skyline.json
   (scripts/skyline-data.mjs, eight demo habits), strings from the locale. */
import data from "@/lib/skyline.json";
import { info, type Locale } from "@/lib/i18n";
import { site } from "@/lib/dict";
import { SkylineCard } from "./SkylineCard";

export function ConsistencySkyline({ locale }: { locale: Locale }) {
  const t = site(locale);
  return <SkylineCard values={data.values} end={data.end} lang={info(locale).hreflang} t={t.skyline} less={t.year.legendLess} more={t.year.legendMore} />;
}

"use client";

import { useEffect, useState } from "react";
import { LOCALE_COOKIE, LOCALES, info, pathFor, type Locale, type Page } from "@/lib/i18n";
import { InkFrame } from "@/components/Ink";
import { rememberLocale } from "@/components/LangSwitch";

type Strings = { suggest: string; switchTo: string; dismiss: string };
const DISMISSED = "mg-locale-suggest-dismissed";

/** Browser language tag to a site locale, or null. */
function match(tag: string): Locale | null {
  const t = tag.toLowerCase();
  if (t.startsWith("zh")) return /^(zh-(hans|cn|sg)|zh)$/.test(t) || t.startsWith("zh-hans") ? "zh-hans" : null;
  if (t.startsWith("pt")) return "pt-br";
  if (t === "tl" || t.startsWith("tl-") || t.startsWith("fil")) return "fil";
  if (t.startsWith("nb") || t.startsWith("no")) return null;
  const base = t.split("-")[0];
  return (LOCALES as string[]).includes(base) ? (base as Locale) : null;
}

/** First-visit hint, never a redirect: if the browser prefers another language
 *  the site has, offer it in that language. Dismissed once, gone for good;
 *  never shown after a choice in the switcher. Fixed at the bottom, so the
 *  page never shifts. */
export function LangSuggest({ locale, page, strings }: { locale: Locale; page: Page; strings: Record<string, Strings> }) {
  const [target, setTarget] = useState<Locale | null>(null);
  useEffect(() => {
    try {
      if (localStorage.getItem(DISMISSED) || localStorage.getItem(LOCALE_COOKIE)) return;
    } catch { return; }
    if (document.cookie.includes(`${LOCALE_COOKIE}=`)) return;
    for (const tag of navigator.languages ?? [navigator.language]) {
      const l = match(tag);
      if (l) {
        // The browser's own top supported language decides; none if it is this page.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (l !== locale) setTarget(l);
        return;
      }
    }
  }, [locale]);
  if (!target) return null;
  const s = strings[target];
  const dismiss = () => { try { localStorage.setItem(DISMISSED, "1"); } catch { /* ignore */ } setTarget(null); };
  return (
    <div className="suggest" role="region" aria-label={s.suggest} lang={info(target).hreflang}>
      <InkFrame seed="lang.suggest" className="suggest-card" radius={14} hint={[360, 64]}>
        <p className="suggest-text">{s.suggest}</p>
        <a className="suggest-go hand" href={pathFor(target, page)} hrefLang={info(target).hreflang} onClick={() => rememberLocale(target)}>{s.switchTo}</a>
        <button type="button" className="suggest-x" onClick={dismiss} aria-label={s.dismiss}>
          <svg width="14" height="14" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 2.8L9.4 9.2M9.3 2.6L2.7 9.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </button>
      </InkFrame>
    </div>
  );
}

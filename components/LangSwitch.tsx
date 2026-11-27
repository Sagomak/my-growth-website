"use client";

import { useEffect, useRef } from "react";
import { LOCALE_INFO, LOCALE_COOKIE, pathFor, info, type Locale, type Page } from "@/lib/i18n";
import { InkFrame, Node, Chevron } from "@/components/Ink";

export function rememberLocale(l: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${l}; path=/; max-age=31536000; samesite=lax`;
  try { localStorage.setItem(LOCALE_COOKIE, l); } catch { /* private mode */ }
}

/** Language switcher: a native <details> with 25 plain links to the same page
 *  in each language, so it works without JavaScript. With JS it remembers the
 *  choice (cookie read by the "/" redirect) and closes on Escape or outside
 *  click. */
export function LangSwitch({ locale, page, label, listLabel }: { locale: Locale; page: Page; label: string; listLabel: string }) {
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const close = (e: Event) => {
      if (!el.open) return;
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !el.contains(e.target as Element)) {
        el.open = false;
        if (e instanceof KeyboardEvent) el.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("click", close);
    document.addEventListener("keydown", close);
    return () => { document.removeEventListener("click", close); document.removeEventListener("keydown", close); };
  }, []);
  const current = info(locale);
  return (
    <details className="lang" ref={ref}>
      <summary aria-label={`${label}: ${current.name}`}>
        <InkFrame seed="lang.chip" jitter="control" radius={10} variant="plain" className="lang-chip" hint={[120, 40]}>
          <svg className="lang-globe" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <path d="M12 3.2c4.9.1 8.8 4 8.7 8.9-.1 4.9-4 8.7-8.9 8.7-4.8-.1-8.7-4-8.6-8.9.1-4.8 4-8.8 8.8-8.7" />
              <path d="M3.6 9.3c5.6.6 11.3.5 16.8-.2M3.7 15.1c5.5.6 11.1.5 16.6-.3" />
              <path d="M11.6 3.4C8.4 7.7 8.5 16 12.2 20.7M12.4 3.3c3.3 4.6 3.2 12.6-.1 17.4" />
            </g>
          </svg>
          <span className="lang-name hand">{current.name}</span>
          <span className="lang-code hand" aria-hidden="true">{locale.split("-")[0].toUpperCase()}</span>
          <span className="lang-chev" aria-hidden="true"><Chevron size={12} /></span>
        </InkFrame>
      </summary>
      <InkFrame seed="lang.panel" className="lang-panel" radius={14} hint={[340, 420]}>
        <ul aria-label={listLabel}>
          {LOCALE_INFO.map((l) => (
            <li key={l.code}>
              <a href={pathFor(l.code, page)} hrefLang={l.hreflang} lang={l.hreflang}
                aria-current={l.code === locale ? "page" : undefined}
                onClick={() => rememberLocale(l.code)}>
                {l.code === locale ? <Node seed={`lang.cur`} size={7} /> : <span className="lang-dot" />}
                {l.name}
              </a>
            </li>
          ))}
        </ul>
      </InkFrame>
    </details>
  );
}

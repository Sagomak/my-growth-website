import type { ReactNode } from "react";
import Link from "next/link";
import { Nav, Footer } from "@/components/Chrome";
import { Chevron } from "@/components/Ink";
import { LangSuggest } from "@/components/LangSuggest";
import { LOCALES, pathFor, type Locale, type Page } from "@/lib/i18n";
import { site, legal } from "@/lib/dict";

const suggestStrings = () => Object.fromEntries(LOCALES.map((l) => {
  const s = site(l).lang;
  return [l, { suggest: s.suggest, switchTo: s.switchTo, dismiss: s.dismiss }];
}));

/** Nav, the page, the footer, the language hint. `doc` pages (legal, support,
 *  tutorial) get the narrow column and a back link. */
export function Shell({ locale, page, doc = false, children }: { locale: Locale; page: Page; doc?: boolean; children: ReactNode }) {
  const t = site(locale);
  return (
    <>
      <Nav t={t} locale={locale} page={page} />
      {doc ? (
        <main id="main" className="wrap doc">
          <Link prefetch={false} href={pathFor(locale, "")} className="back"><Chevron size={16} />{legal(locale).chrome.backHome}</Link>
          {children}
        </main>
      ) : (
        <main id="main">{children}</main>
      )}
      <Footer t={t} locale={locale} />
      <LangSuggest locale={locale} page={page} strings={suggestStrings()} />
    </>
  );
}

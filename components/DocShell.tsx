import type { ReactNode } from "react";
import Link from "next/link";
import { Nav, Footer } from "@/components/Chrome";
import { Chevron } from "@/components/Ink";
import type { Locale } from "@/lib/site";
import { legal } from "@/lib/legal";

/** Nav, a back link, the document, the footer. Legal pages in it, es, de keep
 *  their own labels for the back link and the legal footer links. */
export function DocShell({ locale = "en", children }: { locale?: Locale; children: ReactNode }) {
  const L = legal(locale);
  return (
    <>
      <Nav />
      <main id="main" className="wrap doc" lang={locale}>
        <Link prefetch={false} href="/en/" className="back"><Chevron size={16} />{L.chrome.backHome}</Link>
        {children}
      </main>
      <Footer legal={locale === "en" ? undefined : { privacy: L.chrome.privacy, terms: L.chrome.terms, support: L.chrome.support, base: `/${locale}` }} />
    </>
  );
}

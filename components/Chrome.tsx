import Link from "next/link";
import { APP_STORE_URL } from "@/lib/site";

/** The hero skyline is adapted from this MIT component; its terms ask for a visible link. */
const SKYLINE_SOURCE = "https://21st.dev/@kedhareswer/components/contribution-skyline";
import { pathFor, type Locale, type Page } from "@/lib/i18n";
import { fill, type Site } from "@/lib/dict";
import { Node, InkUnderline } from "@/components/Ink";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LangSwitch } from "@/components/LangSwitch";

/** Apple's official badge, unaltered, sized by height. Apple supplies it per
 *  language; the site has the en, it, es and de artwork, English elsewhere. */
const BADGE_LOCALES = ["en", "it", "es", "de"];
export function AppStoreBadge({ t, locale, height = 48 }: { t: Site; locale: Locale; height?: number }) {
  const l = BADGE_LOCALES.includes(locale) ? locale : "en";
  const ratio = 119.66407 / 40; // all four artworks share Apple's 119.66 x 40 box
  return (
    <a href={APP_STORE_URL} className="badge" aria-label={t.badge.aria}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/app-store-badge-${l}.svg`} alt={t.badge.alt} height={height} width={Math.round(height * ratio)} />
    </a>
  );
}

export function AppIcon({ size = 36, priority = false }: { size?: number; priority?: boolean }) {
  // Two images, one shown per theme (CSS), so the manual toggle is followed too.
  return (
    <span className="app-icon" style={{ width: size, height: size }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="only-light" src="/img/icon-light-96.webp" alt="" width={size} height={size} fetchPriority={priority ? "high" : undefined} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="only-dark" src="/img/icon-dark-96.webp" alt="" width={size} height={size} loading="lazy" />
    </span>
  );
}

/** Eyebrow above a title: a green node, then the label in the hand face. */
export function Eyebrow({ children, seed }: { children: string; seed: string }) {
  return (
    <p className="eyebrow">
      <Node seed={`eyebrow.${seed}`} size={8} />
      <span>{children}</span>
    </p>
  );
}

/** Section header: eyebrow, title with a hand-drawn underline, optional body. */
export function SectionHead({ id, eyebrow, title, body, seed }: { id?: string; eyebrow: string; title: string; body?: string; seed: string }) {
  return (
    <header className="section-head">
      <Eyebrow seed={seed}>{eyebrow}</Eyebrow>
      <h2 id={id}>
        <span className="title-ink">{title}<InkUnderline seed={`underline.${seed}`} /></span>
      </h2>
      {body && <p className="section-body">{body}</p>}
    </header>
  );
}

export function Nav({ t, locale, page }: { t: Site; locale: Locale; page: Page }) {
  const home = pathFor(locale, "");
  const links = [
    { href: `${home}#features`, label: t.nav.features },
    { href: `${home}#privacy`, label: t.nav.privacy },
    { href: `${home}#pro`, label: t.nav.pro },
    { href: `${home}#faq`, label: t.nav.faq },
    { href: pathFor(locale, "support"), label: t.nav.support },
  ];
  return (
    <header className="nav">
      <div className="wrap nav-row">
        <Link prefetch={false} href={home} className="nav-brand" aria-label={t.nav.home}>
          <AppIcon size={34} priority />
          <span className="hand brand-word" lang="en">MyGrowth</span>
        </Link>
        <nav aria-label={t.a11y.mainNav} className="nav-links">
          <ul>
            {links.map((n) => (
              <li key={n.href}><a href={n.href} className="hand">{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="nav-end">
          <LangSwitch locale={locale} page={page} label={t.lang.label} listLabel={t.a11y.languages} />
          <ThemeToggle labels={t.nav.theme} switchTemplate={t.a11y.themeSwitch} />
          <details className="nav-menu">
            <summary className="hand">{t.nav.menu}</summary>
            <ul>
              {links.map((n) => (
                <li key={n.href}><a href={n.href} className="hand">{n.label}</a></li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </header>
  );
}

export function Footer({ t, locale, legalLabels }: { t: Site; locale: Locale; legalLabels?: { privacy: string; terms: string } }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <div className="footer-brand">
          <AppIcon size={28} />
          <div>
            <p className="hand footer-name brand-word" lang="en">MyGrowth</p>
            <p className="footer-studio">{t.footer.studio}</p>
          </div>
        </div>
        <ul className="footer-links">
          <li><Link prefetch={false} href={pathFor(locale, "privacy")}>{legalLabels?.privacy ?? t.footer.privacy}</Link></li>
          <li><Link prefetch={false} href={pathFor(locale, "terms")}>{legalLabels?.terms ?? t.footer.terms}</Link></li>
          <li><Link prefetch={false} href={pathFor(locale, "support")}>{t.footer.support}</Link></li>
          <li><Link prefetch={false} href={pathFor(locale, "tutorial")}>{t.footer.tutorial}</Link></li>
        </ul>
      </div>
      <div className="wrap footer-fine">
        <p>{fill(t.footer.copyright, { year })}</p>
        <p>{t.footer.fonts}: <a href="/licenses/Caveat-OFL.txt">Caveat</a>, <a href="/licenses/Nunito-OFL.txt">Nunito</a></p>
        <p>{t.footer.skyline} <a href={SKYLINE_SOURCE} lang="en">Contribution Skyline by Kedhareswer Naidu (21st.dev)</a></p>
      </div>
    </footer>
  );
}

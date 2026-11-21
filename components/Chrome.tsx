import Link from "next/link";
import { en } from "@/content/en";
import { APP_STORE_URL } from "@/lib/site";
import { Node, InkUnderline } from "@/components/Ink";
import { ThemeToggle } from "@/components/ThemeToggle";

/** The official Apple badge, unaltered, sized by height. */
export function AppStoreBadge({ height = 48, className }: { height?: number; className?: string }) {
  return (
    <a href={APP_STORE_URL} className={`badge ${className ?? ""}`} aria-label={en.badge.aria}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/app-store-badge-en.svg" alt={en.badge.alt} width={Math.round((height * 119.66407) / 40)} height={height} />
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

const NAV = [
  { href: "/en/#features", label: en.nav.features },
  { href: "/en/#privacy", label: en.nav.privacy },
  { href: "/en/#pro", label: en.nav.pro },
  { href: "/en/#faq", label: en.nav.faq },
  { href: "/en/support/", label: en.nav.support },
];

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-row">
        <Link prefetch={false} href="/en/" className="nav-brand" aria-label={en.nav.home}>
          <AppIcon size={34} priority />
          <span className="hand">MyGrowth</span>
        </Link>
        <nav aria-label="Main" className="nav-links">
          <ul>
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="hand">{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="nav-end">
          <ThemeToggle />
          <details className="nav-menu">
            <summary className="hand">{en.nav.menu}</summary>
            <ul>
              {NAV.map((n) => (
                <li key={n.href}><a href={n.href} className="hand">{n.label}</a></li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </header>
  );
}

export function Footer({ legal }: { legal?: { privacy: string; terms: string; support: string; base: string } }) {
  const year = new Date().getFullYear();
  const base = legal?.base ?? "/en";
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <div className="footer-brand">
          <AppIcon size={28} />
          <div>
            <p className="hand footer-name">MyGrowth</p>
            <p className="footer-studio">{en.footer.studio}</p>
          </div>
        </div>
        <ul className="footer-links">
          <li><Link prefetch={false} href={`${base}/privacy/`}>{legal?.privacy ?? en.footer.privacy}</Link></li>
          <li><Link prefetch={false} href={`${base}/terms/`}>{legal?.terms ?? en.footer.terms}</Link></li>
          <li><Link prefetch={false} href="/en/support/">{legal?.support ?? en.footer.support}</Link></li>
          <li><Link prefetch={false} href="/en/tutorial/">{en.footer.tutorial}</Link></li>
        </ul>
      </div>
      <div className="wrap footer-fine">
        <p>{en.footer.copyright(year)}</p>
        <p>{en.footer.fonts}: <a href="/licenses/Caveat-OFL.txt">Caveat</a>, <a href="/licenses/Nunito-OFL.txt">Nunito</a></p>
      </div>
    </footer>
  );
}

import { InkFrame, Chevron } from "@/components/Ink";
import { pathFor, type Locale } from "@/lib/i18n";

type Item = { q: string; a: string; link?: { href: string; text: string } };

/** Native disclosure, so it works without JS and with every assistive tech. */
export function Faq({ items, locale }: { items: readonly Item[]; locale: Locale }) {
  return (
    <div className="faq-list">
      {items.map((it, i) => (
        <InkFrame key={it.q} seed={`faq.${i}`} jitter="control" radius={12} className="faq-item" hint={[720, 64]}>
          <details>
            <summary>
              <span className="faq-q">{it.q}</span>
              <span className="faq-chev"><Chevron size={16} /></span>
            </summary>
            <div className="faq-a">
              <p>{it.a}</p>
              {it.link && <p><a className="cta-link hand" href={pathFor(locale, it.link.href as "privacy" | "tutorial")}>{it.link.text}<span aria-hidden="true"> ›</span></a></p>}
            </div>
          </details>
        </InkFrame>
      ))}
    </div>
  );
}

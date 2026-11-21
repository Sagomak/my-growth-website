import { InkFrame, Chevron } from "@/components/Ink";

type Item = { q: string; a: string; link?: { href: string; text: string } };

/** Native disclosure, so it works without JS and with every assistive tech. */
export function Faq({ items, base }: { items: readonly Item[]; base: string }) {
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
              {it.link && <p><a className="cta-link hand" href={`${base}/${it.link.href}/`}>{it.link.text}<span aria-hidden="true"> ›</span></a></p>}
            </div>
          </details>
        </InkFrame>
      ))}
    </div>
  );
}

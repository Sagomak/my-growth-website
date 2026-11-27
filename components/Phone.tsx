/** A plain iPhone-like frame (no Apple product art) around a screenshot.
 *  Screenshots are 1320 x 2868 (6.9-inch), with 440, 520, 660 and 990 px wide
 *  copies for srcset, so the box never shifts.
 *  With `srcDark`, both screenshots are in the markup and CSS shows the
 *  theme's one (.only-light / .only-dark follow html[data-theme], else the
 *  system scheme), so the theme toggle swaps them and nothing touches the DOM
 *  before hydration. Both are lazy: a hidden lazy image is never fetched. */
export function Phone({ src, srcDark, alt, priority = false, className, width = 300, vw = 72 }: {
  src: string; srcDark?: string; alt: string; priority?: boolean; className?: string; width?: number;
  /** Width on small screens, in vw (matches the CSS). */
  vw?: number;
}) {
  const sizes = `(max-width: 600px) min(${vw}vw, ${width}px), ${width}px`;
  const set = (s: string) => [440, 520, 660, 990].map((w) => `${s.replace(/\.webp$/, `-${w}.webp`)} ${w}w`).concat(`${s} 1320w`).join(", ");
  const img = (source: string, cls?: string) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cls} src={source} srcSet={set(source)} sizes={sizes} alt={alt} width={1320} height={2868}
      loading={priority && !srcDark ? "eager" : "lazy"} decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : undefined} />
  );
  return (
    <figure className={`phone ${className ?? ""}`} style={{ maxWidth: width }}>
      <div className="phone-screen">
        {srcDark ? <>{img(src, "only-light")}{img(srcDark, "only-dark")}</> : img(src)}
        <span className="phone-island" aria-hidden="true" />
      </div>
    </figure>
  );
}

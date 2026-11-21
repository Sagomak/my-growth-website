/** A plain iPhone-like frame (no Apple product art) around a screenshot.
 *  Screenshots are 1320 x 2868 (6.9-inch), with 440, 520, 660 and 990 px wide
 *  copies for srcset, so the box never shifts.
 *  With `srcDark`, a <picture> picks the theme's screenshot: one eager fetch
 *  at the right priority. The source follows the system scheme; a saved
 *  manual theme retargets it (inline script below, and ThemeToggle). */
export const THEME_SOURCE_SCRIPT = `(function(s){var t=document.documentElement.dataset.theme;if(s&&t)s.media=t==="dark"?"all":"not all"})(document.currentScript&&document.currentScript.parentNode.querySelector("source[data-theme-source]"))`;

export function Phone({ src, srcDark, alt, priority = false, className, width = 300, vw = 72 }: {
  src: string; srcDark?: string; alt: string; priority?: boolean; className?: string; width?: number;
  /** Width on small screens, in vw (matches the CSS). */
  vw?: number;
}) {
  const sizes = `(max-width: 600px) min(${vw}vw, ${width}px), ${width}px`;
  const set = (s: string) => [440, 520, 660, 990].map((w) => `${s.replace(/\.webp$/, `-${w}.webp`)} ${w}w`).concat(`${s} 1320w`).join(", ");
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} srcSet={set(src)} sizes={sizes} alt={alt} width={1320} height={2868}
      loading={priority ? "eager" : "lazy"} decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : undefined} />
  );
  return (
    <figure className={`phone ${className ?? ""}`} style={{ maxWidth: width }}>
      <div className="phone-screen">
        {srcDark ? (
          <picture>
            <source data-theme-source="" media="(prefers-color-scheme: dark)" srcSet={set(srcDark)} sizes={sizes} />
            {img}
            <script dangerouslySetInnerHTML={{ __html: THEME_SOURCE_SCRIPT }} />
          </picture>
        ) : img}
        <span className="phone-island" aria-hidden="true" />
      </div>
    </figure>
  );
}

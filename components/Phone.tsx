/** A plain iPhone-like frame (no Apple product art) around a screenshot.
 *  Screenshots are 1320 x 2868 (6.9-inch), so the box never shifts. */
export function Phone({ src, alt, priority = false, className, width = 300 }: {
  src: string; alt: string; priority?: boolean; className?: string; width?: number;
}) {
  return (
    <figure className={`phone ${className ?? ""}`} style={{ maxWidth: width }}>
      <div className="phone-screen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={1320} height={2868}
          srcSet={[440, 660, 990].map((w) => `${src.replace(/\.webp$/, `-${w}.webp`)} ${w}w`).concat(`${src} 1320w`).join(", ")}
          loading={priority ? "eager" : "lazy"} decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : undefined}
          sizes={`(max-width: 600px) min(72vw, ${width}px), ${width}px`} />
        <span className="phone-island" aria-hidden="true" />
      </div>
    </figure>
  );
}

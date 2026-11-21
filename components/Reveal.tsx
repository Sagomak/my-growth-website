"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

/** Adds `in` to its element the first time a part of it is in view, once.
 *  Entrances in CSS key off `.in`; without JS nothing waits (see globals). */
export function useInView<T extends Element>(threshold = 0.25) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { setInView(true); io.disconnect(); }
    }, { threshold, rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [inView, threshold]);
  return [ref, inView] as const;
}

export function Reveal({ as: Tag = "div", className, style, children, threshold, ...rest }: {
  as?: ElementType; className?: string; style?: CSSProperties; children: ReactNode; threshold?: number;
  role?: string; "aria-label"?: string;
}) {
  const [ref, inView] = useInView<HTMLElement>(threshold);
  return (
    <Tag ref={ref} className={`${className ?? ""}${inView ? " in" : ""}`} style={style} {...rest}>
      {children}
    </Tag>
  );
}

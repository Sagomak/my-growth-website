"use client";

import { useLayoutEffect, useEffect, useRef, useState, type CSSProperties, type ReactNode, type ElementType } from "react";
import { inkRect, inkLine, rule, blob, CARD, CONTROL, type Jitter } from "@/lib/ink";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/** Measures an element's border box; null until the first measure. */
function useSize<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);
  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const set = () => {
      const w = Math.round(el.offsetWidth * 2) / 2, h = Math.round(el.offsetHeight * 2) / 2;
      setSize((s) => (s && s.w === w && s.h === h ? s : { w, h }));
    };
    set();
    const ro = new ResizeObserver(set);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return [ref, size] as const;
}

type FrameProps = {
  /** Stable key: the same key gives the same outline on every load. */
  seed: string;
  children?: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  radius?: number;
  /** "data" adds the card surface under the ink, "plain" is outline only. */
  variant?: "data" | "plain";
  jitter?: "card" | "control";
  lineWidth?: number;
  /** Size used for the server render, before the real size is known. */
  hint?: [number, number];
  id?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

/** A box with a hand-drawn outline (the app's SGCard / InkOutline). */
export function InkFrame({
  seed, children, as: Tag = "div", className, style, radius = 14, variant = "data",
  jitter = "card", lineWidth, hint = [320, 200], ...rest
}: FrameProps) {
  const [ref, size] = useSize<HTMLElement>();
  const w = size?.w ?? hint[0], h = size?.h ?? hint[1];
  const j: Jitter = jitter === "card" ? CARD : CONTROL;
  const p = inkRect({ seed, width: w, height: h, radius, jitter: j, lineWidth });
  return (
    <Tag ref={ref} className={`ink-host ${className ?? ""}`} style={style} {...rest}>
      <svg className="ink-svg" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden="true" focusable="false">
        {variant === "data" && <path className="ink-fill" d={p.fill} />}
        {p.second && <path className="ink-second" d={p.second} />}
        <path className="ink-line" d={p.ink} />
      </svg>
      <div className="ink-content">{children}</div>
    </Tag>
  );
}

/** An exact horizontal ink line across its box (gridlines, dividers). */
export function InkDivider({ seed, lineWidth = 1, className }: { seed: string; lineWidth?: number; className?: string }) {
  const [ref, size] = useSize<HTMLDivElement>();
  const w = size?.w ?? 600;
  return (
    <div ref={ref} className={className} style={{ height: 4, width: "100%" }} aria-hidden="true">
      <svg viewBox={`0 0 ${w} 4`} width="100%" height="4" preserveAspectRatio="none" style={{ overflow: "visible" }}>
        <path d={inkLine(w, lineWidth, seed)} fill="var(--border)" />
      </svg>
    </div>
  );
}

/** A hand-drawn underline (`SketchyRule`), stretched to its box width. */
export function InkUnderline({ seed, double = false, color = "var(--accent)", width = 2 }: { seed: string; double?: boolean; color?: string; width?: number }) {
  const [ref, size] = useSize<HTMLSpanElement>();
  const w = size?.w ?? 200;
  return (
    <span ref={ref} className="ink-underline" aria-hidden="true">
      <svg viewBox={`0 0 ${w} 8`} width="100%" height="8" preserveAspectRatio="none" style={{ overflow: "visible" }}>
        <path d={rule(w, 8, seed, double)} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" />
      </svg>
    </span>
  );
}

/** The accent node (`SGNodeShape`). Static geometry, no measuring. */
export function Node({ seed, size = 8, color = "var(--accent)", className }: { seed: string; size?: number; color?: string; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true" focusable="false" style={{ overflow: "visible" }}>
      <path d={blob(size, seed)} fill={color} />
    </svg>
  );
}

/** The CTA chevron (`SGChevron`), stroked 1.5 with round caps. */
export function Chevron({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M5.8 3.5L10.6 8L5.8 12.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

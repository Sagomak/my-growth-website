"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/components/Reveal";
import { Node } from "@/components/Ink";

const START = 12 * 60 + 48;

/** A running timer, read the app's way (0h 12min 48s). Ticks once a second
 *  while on screen; the number is exact SF Rounded, the label hand. */
export function Timer({ label, srLabel, units }: { label: string; srLabel: string; units: [string, string, string] }) {
  const [ref, inView] = useInView<HTMLDivElement>(0.1);
  const [s, setS] = useState(START);
  useEffect(() => {
    if (!inView) return;
    const id = window.setInterval(() => setS((v) => v + 1), 1000);
    return () => clearInterval(id);
  }, [inView]);
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
  return (
    <div ref={ref} className="timer">
      <span className="timer-label hand"><Node seed="timer.live" size={9} className="timer-dot" />{label}</span>
      <span className="timer-value num" aria-hidden="true">
        {h}<small>{units[0]}</small> {m}<small>{units[1]}</small> {sec}<small>{units[2]}</small>
      </span>
      <span className="sr-only">{srLabel}</span>
    </div>
  );
}

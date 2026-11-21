"use client";

import { useEffect, useState } from "react";
import { en } from "@/content/en";

type Mode = "system" | "light" | "dark";
const ORDER: Mode[] = ["system", "light", "dark"];
const KEY = "mg-theme";

function apply(mode: Mode) {
  const root = document.documentElement;
  if (mode === "system") delete root.dataset.theme;
  else root.dataset.theme = mode;
  // Theme-aware screenshots (<picture> in Phone): follow the choice.
  document.querySelectorAll<HTMLSourceElement>("source[data-theme-source]").forEach((s) => {
    s.media = mode === "system" ? "(prefers-color-scheme: dark)" : mode === "dark" ? "all" : "not all";
  });
  try {
    if (mode === "system") localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, mode);
  } catch { /* private mode: the choice lasts for this page only */ }
}

/** System, Paper, Graphite. The head script applies the saved choice before
 *  first paint, so there is no flash. */
export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("system");
  useEffect(() => {
    const t = document.documentElement.dataset.theme;
    // Reading the theme the head script already applied, once, after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMode(t === "light" || t === "dark" ? t : "system");
  }, []);
  const next = ORDER[(ORDER.indexOf(mode) + 1) % ORDER.length];
  const name = en.nav.theme[mode];
  return (
    <button type="button" className="theme-toggle" onClick={() => { apply(next); setMode(next); }}
      aria-label={`${en.nav.theme.label}: ${name}. Switch to ${en.nav.theme[next]}.`}>
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        {mode === "dark" ? (
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        ) : mode === "light" ? (
          <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7" />
          </g>
        ) : (
          <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
            <circle cx="12" cy="12" r="8.2" />
            <path d="M12 3.8v16.4A8.2 8.2 0 0 0 12 3.8Z" fill="currentColor" />
          </g>
        )}
      </svg>
      <span className="hand theme-name">{name}</span>
    </button>
  );
}

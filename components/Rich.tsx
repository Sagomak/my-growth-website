import type { ReactNode } from "react";

/** Renders the legal copy's two inline tags: <b>…</b> and <link>…</link>. */
export function Rich({ text, href }: { text: string; href?: string }) {
  const parts: ReactNode[] = [];
  const re = /<(b|link)>(.*?)<\/\1>/g;
  let last = 0, m: RegExpExecArray | null, i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(m[1] === "b" ? <b key={i++}>{m[2]}</b> : <a key={i++} href={href}>{m[2]}</a>);
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

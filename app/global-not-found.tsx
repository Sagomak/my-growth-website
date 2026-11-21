import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import "./components.css";
import { Nav, Footer } from "@/components/Chrome";
import { en } from "@/content/en";

export const metadata: Metadata = { title: en.meta.notFound.title, robots: { index: false } };

const HEAD_SCRIPT = `(function(){var d=document.documentElement;d.classList.add("js");try{var t=localStorage.getItem("mg-theme");if(t==="light"||t==="dark")d.dataset.theme=t}catch(e){}})();`;

export default function GlobalNotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: HEAD_SCRIPT }} /></head>
      <body>
        <Nav />
        <main id="main" className="wrap doc notfound">
          <h1>{en.notFound.title}</h1>
          <p className="doc-intro">{en.notFound.body}</p>
          <p><Link prefetch={false} className="button" href="/en/">{en.notFound.home}</Link></p>
        </main>
        <Footer />
      </body>
    </html>
  );
}

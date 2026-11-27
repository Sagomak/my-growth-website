import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import "../globals.css";
import "../components.css";
import { APP_ID, SITE_URL } from "@/lib/site";
import { LOCALES, info, isLocale } from "@/lib/i18n";
import { site } from "@/lib/dict";

export const dynamicParams = false;
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "MyGrowth",
  authors: [{ name: "Sagomak" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  // Apple Smart App Banner in Safari on iOS.
  other: { "apple-itunes-app": `app-id=${APP_ID}` },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#1e1f1d" },
  ],
};

// Applies a saved theme before first paint and marks JS as present, so
// entrance styles only hide what JS will reveal.
const HEAD_SCRIPT = `(function(){var d=document.documentElement;d.classList.add("js");try{var t=localStorage.getItem("mg-theme");if(t==="light"||t==="dark")d.dataset.theme=t}catch(e){}})();`;

export default async function RootLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = info(locale);
  // Development only: this branch, and the import in it, is removed from the
  // production build, so the static export carries no Agentation code.
  const DevAgentation = process.env.NODE_ENV === "development"
    ? (await import("@/components/DevAgentation")).default
    : null;
  return (
    // Words use Caveat in the 16 locales the app uses it for; the other 9 set
    // words in the rounded sans, as the app does (`no-hand`).
    <html lang={l.hreflang} className={l.hand ? undefined : "no-hand"} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: HEAD_SCRIPT }} />
      </head>
      <body>
        <a href="#main" className="skip">{site(locale).a11y.skip}</a>
        {children}
        {DevAgentation && <DevAgentation />}
      </body>
    </html>
  );
}

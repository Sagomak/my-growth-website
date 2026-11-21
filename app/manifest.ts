import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MyGrowth",
    short_name: "MyGrowth",
    description: "A hand-drawn habit tracker that keeps your data on your iPhone.",
    start_url: "/en/",
    display: "browser",
    background_color: "#f7f4ee",
    theme_color: "#f7f4ee",
    icons: [
      { src: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}

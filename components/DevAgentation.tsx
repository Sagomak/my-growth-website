"use client";

// Agentation, for visual feedback on localhost only. Mounted from the root
// layout behind process.env.NODE_ENV === "development", so the production
// build (static export, Vercel) carries none of it; scripts/verify-export.mjs
// checks the out/ folder for any trace.
import { Agentation } from "agentation";

export default function DevAgentation() {
  return <Agentation endpoint="http://localhost:4747" appName="MyGrowth website" />;
}

# MyGrowth website

The site for MyGrowth 3.0.0, a Sagomak app: https://mygrowth.sagomak.com

Next.js (App Router, static export), TypeScript, plain CSS. No UI kit.

## Run

```sh
npm install
npm run dev          # http://localhost:3000/en/  (Agentation toolbar, dev only)
npm run build        # static export in out/
npm start            # serve out/ locally
```

## Checks

```sh
npm run lint && npm run typecheck
npm run check            # no em/en dashes, contrast pairs, ink geometry tests
npm run verify:export    # after build: old URLs covered, no Agentation, no old brand
python3 scripts/screens.py http://localhost:3000 reports/dev /en/   # screenshots
```

## Where things are

- `lib/ink.ts`: port of the app's `SketchyShapes.swift` (seeded SplitMix64, open tapered ink, overshoot, second pass) to SVG paths.
- `app/globals.css`: colour tokens from the app's `Color+Theme.swift`, light paper and dark graphite.
- `content/en.ts`: English copy. `content/legal/*.json`: privacy and terms in en, it, es, de.
- `vercel.json`: redirects that keep every old URL working (`/`, `/it|es|de/` home, support, tutorial go to `/en/`).
- `public/screens/`: screenshots, 1320 x 2868. Replace a file with the same name, then `python3 scripts/resize-screens.py`.
- `scripts/og/`: the Open Graph card (`node scripts/og/make-og.ts && python3 scripts/og/shot.py`).
- `scripts/fonts.sh`: rebuilds the subset Caveat and Nunito files (SIL OFL, licences in `public/licenses/`).

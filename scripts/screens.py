"""Full-page screenshots of a running site, light and dark, at 390 and 1440.
Scrolls through the page first so every entrance has run (then waits 3.5 s
for the 3 s chart line). Also one reduced-motion pass at 390 light.
Usage: python3 scripts/screens.py <base url> <out dir> [path ...]"""
import sys, pathlib
from playwright.sync_api import sync_playwright

base, out = sys.argv[1].rstrip("/"), pathlib.Path(sys.argv[2])
paths = sys.argv[3:] or ["/en/"]
out.mkdir(parents=True, exist_ok=True)
errors = []
with sync_playwright() as p:
    b = p.chromium.launch()
    runs = [(w, s, "no-preference") for w in (390, 1440) for s in ("light", "dark")] + [(390, "light", "reduce")]
    for width, scheme, motion in runs:
        ctx = b.new_context(viewport={"width": width, "height": 900}, device_scale_factor=2 if width == 390 else 1,
                            color_scheme=scheme, reduced_motion=motion)
        page = ctx.new_page()
        page.on("console", lambda m: m.type in ("error", "warning") and errors.append(f"{m.type}: {m.text[:200]}"))
        page.on("pageerror", lambda e: errors.append(f"pageerror: {e}"))
        for path in paths:
            page.goto(base + path, wait_until="networkidle")
            h = page.evaluate("document.body.scrollHeight")
            for y in range(0, h, 500):
                page.evaluate(f"window.scrollTo({{top: {y}, behavior: 'instant'}})"); page.wait_for_timeout(120)
            page.wait_for_timeout(3500)
            page.evaluate("window.scrollTo({top: 0, behavior: 'instant'})"); page.wait_for_timeout(300)
            overflow = page.evaluate("document.documentElement.scrollWidth - window.innerWidth")
            if overflow > 0: errors.append(f"horizontal overflow {overflow}px at {width} {path}")
            name = (path.strip("/").replace("/", "-") or "root") + f"_{width}_{scheme}" + ("_reduced" if motion == "reduce" else "")
            page.screenshot(path=str(out / f"{name}.png"), full_page=True)
            print("shot", name)
        ctx.close()
    b.close()
print("\n".join(sorted(set(errors))) or "no console errors, no horizontal overflow")

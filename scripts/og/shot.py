"""Open Graph image from the real site.

1. Serves the static export (out/) and opens /en/ in Chromium: paper theme,
   reduced motion (the skyline shows its final 3D view at once), the card
   560 px wide. Hides the toggle, hint and goal line, waits for the canvas
   engine, and captures the skyline card at 2x (scripts/og/skyline.png).
2. Builds scripts/og/og.html around it (make-og.ts) and renders it at 2x,
   then downsamples to 1200 x 630 (crisp edges, small file).
3. Writes public/og/mygrowth-<hash>.png (a new name whenever the picture
   changes, so link previews refetch) and lib/og.json, read by lib/seo.ts and
   JsonLd. Old images are kept.

Needs a built site (npm run build) and Playwright for Python.
Run: npm run og"""
import functools, hashlib, http.server, io, json, pathlib, socketserver, subprocess, threading
from PIL import Image
from playwright.sync_api import sync_playwright

root = pathlib.Path(__file__).resolve().parents[2]
out = root / "out"
assert (out / "en" / "index.html").exists(), "build the site first (npm run build)"

class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
handler = functools.partial(Quiet, directory=str(out))
srv = socketserver.TCPServer(("127.0.0.1", 0), handler)
port = srv.server_address[1]
threading.Thread(target=srv.serve_forever, daemon=True).start()

HIDE = """
.hero-visual [role=group], .hero-visual footer > p, .hero-visual [data-view] > p, .hero-visual [role=tooltip] { display: none !important; }
.hero-visual > * { width: 560px !important; max-width: 560px !important; }
"""

with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport={"width": 1440, "height": 1000}, device_scale_factor=2,
                        color_scheme="light", reduced_motion="reduce")
    page = ctx.new_page()
    page.goto(f"http://127.0.0.1:{port}/en/", wait_until="networkidle")
    page.add_style_tag(content=HIDE)
    page.evaluate("document.fonts.ready")
    page.wait_for_selector("[data-view='3d'][data-ready]", timeout=15000)
    page.wait_for_timeout(800)
    card = page.locator(".hero-visual > .ink-host").first
    card.screenshot(path=str(root / "scripts/og/skyline.png"), omit_background=True)

    subprocess.run(["node", "scripts/og/make-og.ts"], cwd=root, check=True)
    og = b.new_page(viewport={"width": 1200, "height": 630}, device_scale_factor=2)
    og.goto((root / "scripts/og/og.html").as_uri())
    og.evaluate("document.fonts.ready")
    og.wait_for_timeout(300)
    big = og.screenshot()
    b.close()
srv.shutdown()

img = Image.open(io.BytesIO(big)).convert("RGB").resize((1200, 630), Image.LANCZOS)
buf = io.BytesIO()
img.save(buf, "PNG", optimize=True)
data = buf.getvalue()
if len(data) > 300_000:  # palette PNG keeps the flat paper colours exact and the file small
    buf = io.BytesIO()
    img.quantize(colors=256, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).save(buf, "PNG", optimize=True)
    data = buf.getvalue()
name = f"mygrowth-{hashlib.sha256(data).hexdigest()[:10]}.png"
(root / "public/og").mkdir(exist_ok=True)
(root / "public/og" / name).write_bytes(data)
(root / "lib/og.json").write_text(json.dumps({"image": f"/og/{name}", "width": 1200, "height": 630}, indent=2) + "\n")
print(f"wrote public/og/{name} ({len(data) // 1024} KB) and lib/og.json")

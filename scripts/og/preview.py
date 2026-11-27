"""Local link-preview check: reads og:/twitter: tags from the built pages and
renders mock-ups of the cards WhatsApp, iMessage, LinkedIn and X draw, with
the real image, into reports/og/preview.png. Also asserts the tags exist and
the image is 1200 x 630 and under 300 KB.
Run after npm run build: python3 scripts/og/preview.py [locale ...]"""
import html, pathlib, re, sys
from PIL import Image
from playwright.sync_api import sync_playwright

root = pathlib.Path(__file__).resolve().parents[2]
locs = sys.argv[1:] or ["en", "it", "ja"]
cards, problems = [], []
for loc in locs:
    h = (root / "out" / loc / "index.html").read_text()
    meta = lambda attr, key: (re.search(rf'<meta {attr}="{re.escape(key)}" content="([^"]*)"', h) or [None, None])[1]
    title, desc, img = meta("property", "og:title"), meta("property", "og:description"), meta("property", "og:image")
    tw = meta("name", "twitter:image")
    for k, v in [("og:title", title), ("og:description", desc), ("og:image", img), ("twitter:image", tw)]:
        if not v: problems.append(f"{loc}: no {k}")
    local = root / "out" / img.split("mygrowth.sagomak.com/", 1)[1]
    im = Image.open(local)
    if im.size != (1200, 630): problems.append(f"{loc}: image is {im.size}")
    if local.stat().st_size > 300_000: problems.append(f"{loc}: image is {local.stat().st_size // 1024} KB")
    cards.append((loc, html.unescape(title), html.unescape(desc), local.as_uri()))

def card(loc, t, d, src):
    return f"""<section><h2>{loc}</h2><div class="row">
<div class="wa"><img src="{src}"><div class="b"><b>{t}</b><p>{d}</p><small>mygrowth.sagomak.com</small></div></div>
<div class="im"><img src="{src}"><div class="b"><b>{t}</b><small>mygrowth.sagomak.com</small></div></div>
<div class="li"><img src="{src}"><div class="b"><b>{t}</b><small>mygrowth.sagomak.com</small></div></div>
<div class="x"><img src="{src}"><span>mygrowth.sagomak.com</span><div class="b"><small>From mygrowth.sagomak.com</small></div></div>
</div></section>"""

page = f"""<!doctype html><meta charset=utf-8><style>
body{{font:14px -apple-system,system-ui,sans-serif;background:#eee;margin:20px;width:1560px}}
h2{{margin:18px 0 8px;font-size:15px}} .row{{display:flex;gap:18px;align-items:flex-start}}
img{{display:block;width:100%}} .b{{padding:8px 10px}} p{{margin:4px 0;color:#555}} small{{color:#777;display:block}}
.wa{{width:340px;background:#dcf8c6;border-radius:8px;overflow:hidden}} .wa .b{{background:#cfe9ba}}
.im{{width:300px;background:#e9e9eb;border-radius:16px;overflow:hidden}}
.li{{width:400px;background:#fff;border:1px solid #ddd}} .li b{{display:block}}
.x{{width:420px;border-radius:16px;overflow:hidden;position:relative;background:#fff;border:1px solid #ddd}}
.x span{{position:absolute;left:10px;bottom:38px;background:rgba(0,0,0,.6);color:#fff;font-size:12px;padding:1px 6px;border-radius:4px}}
</style><h1>Link previews (mock-ups from the built meta tags)</h1>{''.join(card(*c) for c in cards)}"""
out = root / "reports/og"; out.mkdir(parents=True, exist_ok=True)
(out / "preview.html").write_text(page)
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(viewport={"width": 1600, "height": 900})
    pg.goto((out / "preview.html").as_uri()); pg.wait_for_timeout(300)
    pg.screenshot(path=str(out / "preview.png"), full_page=True); b.close()
print("\n".join(problems) or f"og: tags and image ok for {', '.join(locs)}; reports/og/preview.png")
sys.exit(1 if problems else 0)

"""Render scripts/og/og.html to public/og-image.png at 1200 x 630."""
import pathlib
from playwright.sync_api import sync_playwright

root = pathlib.Path(__file__).resolve().parents[2]
with sync_playwright() as p:
    b = p.chromium.launch()
    page = b.new_page(viewport={"width": 1200, "height": 630}, device_scale_factor=1)
    page.goto((root / "scripts/og/og.html").as_uri())
    page.wait_for_timeout(300)
    page.screenshot(path=str(root / "public/og-image.png"))
    b.close()
print("wrote public/og-image.png")

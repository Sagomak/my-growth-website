"""Placeholder phone screenshots at the 6.9-inch ratio (1320 x 2868), with the
final file names. Replace each file in public/screens/ with the real
screenshot (same name, WebP, 1320 x 2868 or any size at that ratio).
Usage: python3 scripts/placeholders.py <path to Caveat-Bold.ttf>"""
import sys
from PIL import Image, ImageDraw, ImageFont

W, H = 1320, 2868
SCREENS = {
    "dashboard": ("Dashboard", False), "grid": ("Grid", False), "charts": ("Charts", False),
    "events": ("Events", False), "widgets": ("Widgets", False), "timer": ("Timer", False),
    "dashboard-dark": ("Dashboard, graphite", True),
}
font = ImageFont.truetype(sys.argv[1], 120)
small = ImageFont.truetype(sys.argv[1], 64)
for name, (label, dark) in SCREENS.items():
    bg, card, line, text = (("#1E1F1D", "#282927", "#464745", "#9DA5AD") if dark
                            else ("#F7F4EE", "#FFFFFF", "#D8D6D0", "#57606A"))
    im = Image.new("RGB", (W, H), bg)
    d = ImageDraw.Draw(im)
    y = 260
    for h in (300, 520, 360, 360, 360):
        d.rounded_rectangle((80, y, W - 80, y + h), radius=56, fill=card, outline=line, width=6)
        y += h + 60
    d.text((W / 2, 1200), label, font=font, fill=text, anchor="mm")
    d.text((W / 2, 1360), "placeholder 1320 x 2868", font=small, fill=text, anchor="mm")
    im.save(f"public/screens/{name}.webp", quality=70, method=6)
    print(name)

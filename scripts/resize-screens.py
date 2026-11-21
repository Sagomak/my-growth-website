"""Writes the responsive sizes of every screenshot in public/screens/:
<name>.webp (1320 x 2868, the source) -> <name>-440.webp, -660.webp, -990.webp.
Run after dropping in the real screenshots (same names). Needs Pillow.
Usage: python3 scripts/resize-screens.py"""
import pathlib
from PIL import Image

d = pathlib.Path(__file__).resolve().parent.parent / "public" / "screens"
for src in sorted(d.glob("*.webp")):
    if src.stem.rsplit("-", 1)[-1] in ("440", "660", "990"):
        continue
    im = Image.open(src).convert("RGB")
    for w in (440, 660, 990):
        h = round(im.height * w / im.width)
        im.resize((w, h), Image.LANCZOS).save(d / f"{src.stem}-{w}.webp", quality=80, method=6)
    print(src.name)

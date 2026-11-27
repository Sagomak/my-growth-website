"""App screenshots for the site, with content-hashed names.

Reads the App Store originals (1320 x 2868 PNG, MyGrowth_3.0.0_iphone69_NN_<name>.png),
writes public/screens/<name>.<hash>.webp plus -440, -520, -660 and -990 copies
for srcset, and lib/screens.json mapping each name to its path. The hash is
of the original's pixels, so a retaken screenshot gets a new URL and no
browser or CDN can keep showing the old one; the files can therefore be
cached as immutable. Screens the site does not use are skipped.

Usage: python3 scripts/resize-screens.py [originals dir]
(default: the 3.0.0 set in C4MyG/Outputs/v3.0.0/screenshots)"""
import hashlib, json, pathlib, sys
from PIL import Image

root = pathlib.Path(__file__).resolve().parent.parent
src = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else pathlib.Path.home() /
                   "Desktop/MyWorld/4. MyElleLab/Projects/MyDailySuccess/MyGrowth/C4MyG/Outputs/v3.0.0/screenshots")
USED = ["dashboard", "dashboard-dark", "grid", "charts", "habit-chart", "log-sheet", "events"]
out = root / "public/screens"
out.mkdir(exist_ok=True)
paths = {}
for p in sorted(src.glob("MyGrowth_3.0.0_iphone69_[0-9][0-9]_*.png")):
    name = p.stem.split("_", 4)[4]
    if name not in USED:
        continue
    im = Image.open(p).convert("RGB")
    assert im.size == (1320, 2868), f"{p.name} is {im.size}"
    h = hashlib.sha256(im.tobytes()).hexdigest()[:10]
    base = f"{name}.{h}"
    im.save(out / f"{base}.webp", quality=80, method=6)
    for w in (440, 520, 660, 990):
        # Phone-sized copies carry the first paint on mobile: a little lighter.
        q = 66 if w <= 520 else 72 if w == 660 else 80
        im.resize((w, round(im.height * w / im.width)), Image.LANCZOS).save(out / f"{base}-{w}.webp", quality=q, method=6)
    paths[name] = f"/screens/{base}.webp"
    print(name, "->", paths[name])
missing = sorted(set(USED) - set(paths))
assert not missing, f"no original for {missing}"
(root / "lib/screens.json").write_text(json.dumps(paths, indent=2) + "\n")
print("wrote lib/screens.json")

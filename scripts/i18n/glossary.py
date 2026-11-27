"""Extract the app's own terms per locale from MyGrowth's Localizable.xcstrings,
so the site uses the same words as the app (tabs, Becoming, settings paths,
units, default habit names). Writes scripts/i18n/glossary/<site-locale>.json.
Usage: python3 scripts/i18n/glossary.py <path to Localizable.xcstrings>"""
import json, sys, pathlib

TERMS = ["Dashboard", "Grid", "Charts", "Events", "Settings", "Becoming", "Today", "Habits", "Habit",
  "Consistency", "Streak", "Data Management", "Import Data", "Export Backup", "Clear All Data",
  "Download Template", "Notifications", "Privacy Policy", "Terms of Use", "Restore Purchase", "Pro", "Free",
  "Monthly", "Yearly", "Lifetime", "Unlimited habits", "Full history", "Custom colors", "Scheduled days",
  "Specific days", "CSV Import", "JSON Backup", "Current year only", "30-day view", "All time + averages",
  "3 habits", "Merge with existing", "Replace all data", "Import", "Save", "Clear", "Target", "Goal",
  "Not logged", "Days shown up", "Best day", "Average", "Total", "Morning Reminder", "Evening Nudge",
  "Sleep", "Workout", "Meditation", "Running", "Calories", "Water", "Reading", "Biking", "Intervals",
  "hours", "minutes", "km", "kcal", "liters", "pages", "sprints", "h", "min", "s",
  "Track time", "Pace", "Speed", "Distance", "Widgets", "Live Activity", "Timer", "Paper", "Graphite",
  "Light", "Dark", "Support", "Contact Us", "A Sagomak product", "Unlock the full experience"]
SITE = {"pt-BR": "pt-br", "zh-Hans": "zh-hans"}
cat = json.loads(pathlib.Path(sys.argv[1]).read_text())["strings"]
out = pathlib.Path(__file__).resolve().parent / "glossary"
locales = sorted({l for v in cat.values() for l in v.get("localizations", {})} - {"en"})
for loc in locales:
    g = {}
    for t in TERMS:
        u = cat.get(t, {}).get("localizations", {}).get(loc, {}).get("stringUnit")
        # Skip broken catalog values (the fil "Not logged" entry is ~59 KB of repeats).
        if u and u.get("value") and len(u["value"]) <= 120:
            g[t] = u["value"]
    (out / f"{SITE.get(loc, loc)}.json").write_text(json.dumps(g, ensure_ascii=False, indent=1) + "\n")
    print(loc, len(g))

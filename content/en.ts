// English copy for the marketing pages. Rule: no em or en dashes
// (scripts/check-copy.mjs fails the build check on either).
// Wording follows the 3.0.0 App Store metadata (MyG - AppStore/Metadata/v3.0.0/en.txt).

import { LANGUAGE_COUNT } from "@/lib/site";

export const en = {
  meta: {
    home: {
      title: "MyGrowth: a hand-drawn habit tracker that stays on your iPhone",
      description:
        "MyGrowth turns your habits into a hand-drawn heatmap, charts and statistics. Private by design: no account, no cloud, your data stays on your device.",
    },
    support: { title: "Support, MyGrowth", description: "Answers to common questions about MyGrowth, and how to reach us." },
    tutorial: {
      title: "Import and back up your data, MyGrowth",
      description: "Import your habit history from a CSV file, back up and restore MyGrowth, and see the habits it starts with.",
    },
    notFound: { title: "Page not found, MyGrowth" },
  },
  nav: {
    home: "MyGrowth home",
    features: "Features",
    privacy: "Privacy",
    pro: "Pro",
    faq: "FAQ",
    support: "Support",
    menu: "Menu",
    theme: { label: "Theme", system: "System", light: "Paper", dark: "Graphite" },
  },
  badge: { alt: "Download on the App Store", aria: "Download MyGrowth on the App Store" },
  hero: {
    eyebrow: "MyGrowth 3.0",
    title: "You become what you repeatedly do.",
    sub: "MyGrowth turns your habits into a hand-drawn heatmap, charts and statistics, so you can watch showing up turn into progress.",
    trust: "Private by design. No account, no cloud.",
    phoneAlt: "The MyGrowth Dashboard: today's habits as hand-drawn cards under the Becoming goal.",
  },
  year: {
    eyebrow: "Your year, at a glance",
    title: "One honest picture of a year.",
    body: "Every day you show up fills a square. Today's tile in the week strip fills up as the day goes by.",
    habit: "Reading",
    weekLabel: "This week",
    todayLabel: "Today, {pct}% of the day gone",
    legendLess: "Less",
    legendMore: "More",
    gridLabel: "Example heatmap: a year of reading, one square per day, ending today.",
  },
  features: {
    eyebrow: "What is inside",
    title: "Track what matters. Watch it grow.",
    items: {
      dashboard: {
        eyebrow: "Dashboard and Becoming",
        title: "Who you are becoming, on one page.",
        body: "Today's habits as cards under your Becoming goal, in its own hand-drawn frame. Habits you have not logged yet stand out, so you see at a glance what is left.",
        becomingLabel: "Becoming",
        becomingGoal: "someone who reads every day",
      },
      grid: {
        eyebrow: "Grid",
        title: "A year of effort, one honest picture.",
        body: "Every habit gets its own heatmap in its own colour. Patterns, gaps and streaks show at a glance, and streaks follow your schedule, so a rest day never breaks them.",
      },
      charts: {
        eyebrow: "Charts",
        title: "Every habit, measured.",
        body: "Consistency, averages, totals, days on target and best days. Lines draw themselves in and bars grow from the bottom.",
        consistency: "Consistency",
        lastDays: "last 30 days",
        minutes: "Minutes per day",
        chartLabel: "Example Consistency chart: the share of habits done each day over the last 30 days, rising from about 40% to about 90%.",
        barsLabel: "Example bar chart: minutes of reading per day over one week.",
      },
      events: {
        eyebrow: "Events",
        title: "Every place, book and trip gets its own colour.",
        body: "Log the places you visit, the books you read, the trips and the concerts, and watch a whole year of your life appear as one picture.",
        legend: ["Trips", "Books", "Concerts"],
      },
      widgets: {
        eyebrow: "Widgets and Live Activity",
        title: "On your Home Screen and Lock Screen.",
        body: "A Habit Grid widget, a Today widget to log from the Home Screen, and timers that live on your Lock Screen.",
      },
      timers: {
        eyebrow: "Timers and logging",
        title: "Log in seconds. Timers keep running.",
        body: "Tap a card, type a value, save. Durations read as h, min and s, and a running timer keeps going when you leave the app.",
        timer: "Meditation",
      },
      themes: {
        eyebrow: "Paper and graphite",
        title: "Warm paper by day, soft graphite by night.",
        body: "Light mode sits on warm paper. Dark mode is a soft graphite instead of pure black. Words are handwritten, numbers stay crisp and exact.",
        paper: "Paper",
        graphite: "Graphite",
      },
      languages: {
        eyebrow: "Languages",
        title: `In your language. ${LANGUAGE_COUNT} of them.`,
        body: "From English to Japanese, Bengali to Albanian. Your own colours and icons on every habit.",
      },
    },
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Your data stays on your iPhone.",
    body: "No account, no cloud, no tracking. Just you and the proof that you are becoming who you want to be.",
    storedTitle: "Stored on your device",
    stored: [
      "Your habits: names, units, targets, colours and icons",
      "Your daily logs: date, value and optional notes",
      "Your settings and preferences",
    ],
    neverTitle: "Never collected",
    never: [
      "Your habits, logs or notes",
      "Name, email, phone or location",
      "Usage analytics or crash reports",
      "Advertising identifiers, cookies or tracking",
    ],
    purchases: "Pro purchases go through Apple and are checked with RevenueCat, using a random anonymous ID.",
    link: "Read the privacy policy",
  },
  pro: {
    eyebrow: "MyGrowth Pro",
    title: "Pro, when you want the whole story.",
    body: "MyGrowth is free to download and to use with up to three habits. Pro opens everything.",
    freeTitle: "Free",
    free: ["3 habits", "Current year", "30-day charts"],
    proTitle: "Pro",
    proItems: [
      "Unlimited habits",
      "Full history",
      "All time charts and averages",
      "Events",
      "CSV import and backup",
      "Custom colours",
      "Habits on scheduled days",
    ],
    plans: "Monthly, yearly or once for life.",
    price: "See the current price on the App Store.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions, answered.",
    items: [
      {
        q: "How do I log a habit?",
        a: "Tap any habit card on the Dashboard. A short sheet opens: type your value (7.5 hours of sleep, 2.5 L of water) and tap Save. The entry is recorded at once and your heatmap updates.",
      },
      {
        q: "Where is my data stored?",
        a: "Only on your iPhone, in iOS on-device storage. There are no servers, no cloud sync and no accounts. The privacy policy has the full details.",
        link: { href: "privacy", text: "Read the privacy policy" },
      },
      {
        q: "Can I import my history from a spreadsheet?",
        a: "Yes, with Pro. Go to Settings, Data Management, Import Data, and pick a CSV file with the columns date, habit, unit, value and note. The tutorial has a template.",
        link: { href: "tutorial", text: "Open the tutorial" },
      },
      {
        q: "How do I back up or move my data?",
        a: "With Pro, Settings, Data Management, Export Backup saves every habit and log in one CSV file. Import it on the new device with Import Data.",
      },
      {
        q: "How do I delete all my data?",
        a: "Go to Settings, Data Management, Clear All Data. You will be asked to confirm. This is permanent: it wipes every habit, log and preference from your device.",
      },
      {
        q: "What does Pro cost?",
        a: "Pro comes as a monthly or yearly subscription, or a one-time purchase. Prices depend on your country; the App Store shows the current one before you buy.",
      },
      {
        q: "Will there be an Android version?",
        a: "Not for now. We would rather build one platform well than two poorly.",
      },
    ],
  },
  cta: {
    title: "Start today. A year from now you will be glad you did.",
  },
  footer: {
    studio: "A Sagomak app",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    support: "Support",
    tutorial: "Tutorial",
    copyright: (year: number) => `© ${year} Sagomak`,
    fonts: "Fonts under the SIL Open Font License",
  },
  support: {
    eyebrow: "Support",
    title: "How can we help?",
    intro: "Answers to common questions. If you cannot find what you need, write to us.",
    faqTitle: "Frequently asked questions",
    contactTitle: "Still need help?",
    contactBody: "A question, a bug or an idea? We read every email.",
    emailCta: "Write to",
    reviewBefore: "You can also ",
    reviewLink: "leave a review on the App Store",
    reviewAfter: ". It helps more than you know.",
  },
  tutorial: {
    eyebrow: "Tutorial",
    title: "Import your data",
    intro: "Already tracking habits? Bring your history in, in minutes. Import and backup are part of Pro.",
    importLogs: {
      title: "Import daily logs",
      intro: "Import past data for your habits from a CSV file. Each row is one day's entry for one habit.",
      templateLabel: "Template format",
      required: "required",
      columns: [
        { col: "date", required: true, desc: "YYYY-MM-DD. Example: 2026-03-15" },
        { col: "habit", required: true, desc: "Must match an existing habit name in the app (case does not matter)." },
        { col: "unit", required: false, desc: "The habit's unit, for your reference. Examples: hours, minutes, km" },
        { col: "value", required: true, desc: "A number, 0 or greater." },
        { col: "note", required: false, desc: "Optional free text. Leave it blank or leave the column out." },
      ],
      download: "Download the template (CSV)",
      tips: [
        "Excel, Google Sheets and Numbers all work: export as .csv or .txt.",
        "Habit names must match: 'Workout' and 'workout' both work, 'Work out' does not match 'Workout'.",
        "If a date and habit already exist, the import updates the value instead of adding a second one.",
        "You can mix several habits in one file.",
      ],
    },
    backup: {
      title: "Back up and restore",
      intro: "Export all your habits and logs as one CSV file, to restore on a new device or keep an offline copy.",
      exportTitle: "How to export",
      exportSteps: ["Go to Settings, Data Management", "Tap Export Backup", "Save or share the file"],
      restoreTitle: "How to restore",
      restoreSteps: [
        "Go to Settings, Data Management",
        "Tap Import Data",
        "Select your backup file",
        "Choose Merge with existing or Replace all data",
        "Check the summary and tap Import",
      ],
      formatLabel: "Backup format (simplified)",
      autoDetect: "The app tells a backup (it has a #HABITS section) from a plain log file by itself. One import button handles both.",
    },
    prebuilt: {
      title: "Habits to start with",
      intro: "MyGrowth suggests these habits, ready to track:",
      cols: ["Habit", "Unit", "Daily target"],
      note: "You can also create your own habits, with your own name, unit, icon, colour and schedule.",
    },
    reminders: {
      title: "Daily reminders",
      intro: "MyGrowth can send you two notifications a day:",
      items: [
        ["Morning reminder", "a summary of today's scheduled habits. Default: 9:00."],
        ["Evening nudge", "a gentle reminder to log what you missed. Default: 21:00."],
      ],
      footer: "Both can be changed in Settings, Notifications.",
    },
    pace: {
      title: "Pace and speed",
      intro: "For habits like Running and Biking, turn on time tracking in the habit to log distance and time. The app works out:",
      items: [
        ["Running", "pace in min/km. 7 km in 38 min is 5:25 min/km."],
        ["Biking", "speed in km/h. 10 km in 30 min is 20.0 km/h."],
      ],
    },
    streaks: {
      title: "How streaks work",
      tips: [
        "A value of 0 does not count: you have to actually do the habit.",
        "The value has to meet the target: 2 hours of sleep with a target of 8 does not count.",
        "Streaks follow your schedule. Work out Monday, Wednesday and Friday, hit all three, and that is a 3-day streak. Tuesday and Thursday do not break it.",
      ],
    },
    cta: "Ready to import?",
  },
  notFound: {
    title: "This page is not here.",
    body: "The link may be old, or the page has moved.",
    home: "Back to MyGrowth",
  },
  legal: { contact: "Write to" },
};

export type Dict = typeof en;

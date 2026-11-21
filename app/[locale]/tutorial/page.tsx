import type { Metadata } from "next";
import { DocShell } from "@/components/DocShell";
import { InkFrame } from "@/components/Ink";
import { en } from "@/content/en";

export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: "en" }];
}

export const metadata: Metadata = {
  title: en.meta.tutorial.title,
  description: en.meta.tutorial.description,
  alternates: { canonical: "/en/tutorial/" },
  openGraph: { title: en.meta.tutorial.title, description: en.meta.tutorial.description, images: ["/og-image.png"] },
};

const T = en.tutorial;
const TEMPLATE = `date,habit,unit,value,note
2026-01-15,Sleep,hours,7.5,
2026-01-15,Workout,minutes,45,Leg day
2026-01-16,Running,km,6.2,Morning run
2026-01-16,Water,liters,2.5,`;
const BACKUP = `#HABITS
name,unit,icon,color,targetValue,scheduledDays,createdAt
Sleep,hours,🛏️,#39d353,8.0,,2026-04-04
Workout,minutes,💪,#f97316,45.0,"1,3,5",2026-04-04

#LOGS
date,habit,unit,value,note
2025-08-26,Sleep,hours,8.33,
2025-09-15,Workout,minutes,45,Leg day`;
// The app's suggested habits (Habit.defaults), example data left untranslated.
const DEFAULTS = [
  ["Sleep", "hours", "8"], ["Workout", "minutes", "45"], ["Meditation", "minutes", "15"],
  ["Running", "km", "5"], ["Calories", "kcal", "2000"], ["Water", "liters", "2.5"],
  ["Reading", "pages", "25"], ["Biking", "km", "10"], ["Intervals", "sprints", "6"],
];

export default function Tutorial() {
  return (
    <DocShell>
      <h1>{T.title}</h1>
      <p className="doc-intro">{T.intro}</p>

      <section className="doc-section">
        <h2>{T.importLogs.title}</h2>
        <p>{T.importLogs.intro}</p>
        <p style={{ marginTop: 16 }}><b>{T.importLogs.templateLabel}</b></p>
        <pre className="code">{TEMPLATE}</pre>
        <div className="cols">
          {T.importLogs.columns.map((c) => (
            <InkFrame key={c.col} seed={`tut.col.${c.col}`} jitter="control" radius={10} className="col-doc" hint={[700, 60]}>
              <p><code>{c.col}</code>{c.required && <span className="req">{T.importLogs.required}</span>}</p>
              <p>{c.desc}</p>
            </InkFrame>
          ))}
        </div>
        <a className="button" href="/mhs-import-template.csv" download>{T.importLogs.download}</a>
        <ul style={{ marginTop: 20 }}>{T.importLogs.tips.map((t) => <li key={t}>{t}</li>)}</ul>
      </section>

      <section className="doc-section">
        <h2>{T.backup.title}</h2>
        <p>{T.backup.intro}</p>
        <p style={{ marginTop: 16 }}><b>{T.backup.exportTitle}</b></p>
        <ol>{T.backup.exportSteps.map((s) => <li key={s}>{s}</li>)}</ol>
        <p style={{ marginTop: 16 }}><b>{T.backup.restoreTitle}</b></p>
        <ol>{T.backup.restoreSteps.map((s) => <li key={s}>{s}</li>)}</ol>
        <p style={{ marginTop: 16 }}><b>{T.backup.formatLabel}</b></p>
        <pre className="code">{BACKUP}</pre>
        <p style={{ marginTop: 12 }}>{T.backup.autoDetect}</p>
      </section>

      <section className="doc-section">
        <h2>{T.prebuilt.title}</h2>
        <p>{T.prebuilt.intro}</p>
        <table className="simple">
          <thead><tr>{T.prebuilt.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
          <tbody>{DEFAULTS.map((r) => <tr key={r[0]}>{r.map((v, i) => <td key={i} className={i === 2 ? "num" : undefined}>{v}</td>)}</tr>)}</tbody>
        </table>
        <p style={{ marginTop: 12 }}>{T.prebuilt.note}</p>
      </section>

      <section className="doc-section">
        <h2>{T.reminders.title}</h2>
        <p>{T.reminders.intro}</p>
        <ul>{T.reminders.items.map(([k, v]) => <li key={k}><b>{k}</b>: {v}</li>)}</ul>
        <p style={{ marginTop: 12 }}>{T.reminders.footer}</p>
      </section>

      <section className="doc-section">
        <h2>{T.pace.title}</h2>
        <p>{T.pace.intro}</p>
        <ul>{T.pace.items.map(([k, v]) => <li key={k}><b>{k}</b>: {v}</li>)}</ul>
      </section>

      <section className="doc-section">
        <h2>{T.streaks.title}</h2>
        <ul>{T.streaks.tips.map((t) => <li key={t}>{t}</li>)}</ul>
      </section>

      <InkFrame as="section" seed="tutorial.cta" className="contact-card" hint={[760, 150]}>
        <h2>{T.cta}</h2>
        <a className="button" href="/mhs-import-template.csv" download>{T.importLogs.download}</a>
      </InkFrame>
    </DocShell>
  );
}

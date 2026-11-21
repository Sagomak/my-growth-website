// Facts used across the site. One place, so nothing drifts.

export const SITE_URL = "https://mygrowth.sagomak.com";
export const APP_ID = "6761617617";
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_ID}`;
export const SUPPORT_EMAIL = "hello@sagomak.com";
export const STUDIO = "Sagomak";
export const APP_NAME = "MyGrowth";
export const APP_VERSION = "3.0.0";
export const LANGUAGE_COUNT = 25;

/** Locales with real pages. Marketing pages exist in English only for now;
 *  the legal pages keep the translations the old site carried. */
export const LOCALES = ["en", "it", "es", "de"] as const;
export type Locale = (typeof LOCALES)[number];
export const MARKETING_LOCALES = ["en"] as const;
export const LEGAL_LOCALES = LOCALES;

export const isLocale = (v: string): v is Locale => (LOCALES as readonly string[]).includes(v);

/** The 25 app languages, by their own names (from the app's string catalog). */
export const LANGUAGES = [
  "English", "Italiano", "Español", "Deutsch", "Français", "Português (Brasil)", "Dansk",
  "Polski", "Română", "Shqip", "Türkçe", "Bahasa Indonesia", "Bahasa Melayu", "Filipino",
  "Русский", "Українська", "Ελληνικά", "हिन्दी", "বাংলা", "नेपाली", "ไทย", "Tiếng Việt",
  "日本語", "한국어", "简体中文",
] as const;

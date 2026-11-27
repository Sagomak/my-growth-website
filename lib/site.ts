// Facts used across the site. One place, so nothing drifts.
import { LOCALE_INFO } from "@/lib/i18n";

export const SITE_URL = "https://mygrowth.sagomak.com";
export const APP_ID = "6761617617";
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_ID}`;
export const SUPPORT_EMAIL = "hello@sagomak.com";
export const STUDIO = "Sagomak";
export const APP_NAME = "MyGrowth";
export const APP_VERSION = "3.0.0";
export const LANGUAGE_COUNT = LOCALE_INFO.length;

/** The 25 app languages, by their own names. */
export const LANGUAGES = LOCALE_INFO.map((l) => l.name);

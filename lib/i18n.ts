// The 25 languages the app supports, and how the site serves each.
// `code` is the URL segment, `hreflang` the BCP 47 tag (also <html lang>),
// `hand` whether words use Caveat (the app's rule: 16 locales use Caveat,
// 9 render words in the rounded sans), `og` the Open Graph locale.

export const LOCALE_INFO = [
  { code: "en", hreflang: "en", name: "English", og: "en_US", hand: true },
  { code: "it", hreflang: "it", name: "Italiano", og: "it_IT", hand: true },
  { code: "es", hreflang: "es", name: "Español", og: "es_ES", hand: true },
  { code: "de", hreflang: "de", name: "Deutsch", og: "de_DE", hand: true },
  { code: "fr", hreflang: "fr", name: "Français", og: "fr_FR", hand: true },
  { code: "pt-br", hreflang: "pt-BR", name: "Português (Brasil)", og: "pt_BR", hand: true },
  { code: "da", hreflang: "da", name: "Dansk", og: "da_DK", hand: true },
  { code: "pl", hreflang: "pl", name: "Polski", og: "pl_PL", hand: true },
  { code: "ro", hreflang: "ro", name: "Română", og: "ro_RO", hand: true },
  { code: "sq", hreflang: "sq", name: "Shqip", og: "sq_AL", hand: true },
  { code: "tr", hreflang: "tr", name: "Türkçe", og: "tr_TR", hand: true },
  { code: "id", hreflang: "id", name: "Bahasa Indonesia", og: "id_ID", hand: true },
  { code: "ms", hreflang: "ms", name: "Bahasa Melayu", og: "ms_MY", hand: true },
  { code: "fil", hreflang: "fil", name: "Filipino", og: "fil_PH", hand: true },
  { code: "ru", hreflang: "ru", name: "Русский", og: "ru_RU", hand: true },
  { code: "uk", hreflang: "uk", name: "Українська", og: "uk_UA", hand: true },
  { code: "el", hreflang: "el", name: "Ελληνικά", og: "el_GR", hand: false },
  { code: "hi", hreflang: "hi", name: "हिन्दी", og: "hi_IN", hand: false },
  { code: "bn", hreflang: "bn", name: "বাংলা", og: "bn_BD", hand: false },
  { code: "ne", hreflang: "ne", name: "नेपाली", og: "ne_NP", hand: false },
  { code: "th", hreflang: "th", name: "ไทย", og: "th_TH", hand: false },
  { code: "vi", hreflang: "vi", name: "Tiếng Việt", og: "vi_VN", hand: false },
  { code: "ja", hreflang: "ja", name: "日本語", og: "ja_JP", hand: false },
  { code: "ko", hreflang: "ko", name: "한국어", og: "ko_KR", hand: false },
  { code: "zh-hans", hreflang: "zh-Hans", name: "简体中文", og: "zh_CN", hand: false },
] as const;

export type Locale = (typeof LOCALE_INFO)[number]["code"];
export const LOCALES = LOCALE_INFO.map((l) => l.code) as Locale[];
export const DEFAULT_LOCALE: Locale = "en";

/** Legal pages the old site already had in these languages (live before the
 *  translation); every other non-English legal page carries the note that the
 *  English version prevails. */
export const LEGACY_LEGAL: readonly Locale[] = ["it", "es", "de"];

export const isLocale = (v: string): v is Locale => (LOCALES as string[]).includes(v);
export const info = (l: Locale) => LOCALE_INFO.find((x) => x.code === l)!;

/** Site pages, as path suffixes after the locale ("" is home). */
export const PAGES = ["", "privacy", "terms", "support", "tutorial"] as const;
export type Page = (typeof PAGES)[number];

export const pathFor = (l: Locale, page: Page) => `/${l}/${page ? `${page}/` : ""}`;

/** The cookie the language switcher sets; vercel.json reads it for "/". */
export const LOCALE_COOKIE = "mg-locale";

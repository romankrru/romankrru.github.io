export type Lang = "ru" | "en";

export const languages: Record<Lang, string> = {
  ru: "Русский",
  en: "English",
};

export const defaultLang: Lang = "ru";

export const ui = {
  ru: {
    "header.blog": "блог",
    "header.work": "work",
    "header.projects": "projects",
  },
  en: {
    "header.blog": "blog",
    "header.work": "work",
    "header.projects": "projects",
  },
} as const satisfies Record<Lang, Record<string, string>>;

import { defaultLang, type Lang } from "../ui";

export function localizedPath(path: string, lang: Lang): string {
  return lang === defaultLang ? path : `/${lang}${path}`;
}

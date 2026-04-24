import { ui, defaultLang, type Lang } from "./ui";

export function getLangFromUrl(pathname: string): Lang {
  const [, first] = pathname.split("/");
  if (first in ui) {
    return first as Lang;
  }
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

/**
 * Переключает язык в pathname
 * "/about"    → "/en/about"   (ru → en)
 * "/en/about" → "/about"      (en → ru)
 * "/"         → "/en/"        (ru → en)
 * "/en/"      → "/"           (en → ru)
 */
export function switchLang(pathname: string): string {
  const currentLang = getLangFromUrl(pathname);
  const targetLang = currentLang === "ru" ? "en" : "ru";

  // Убираем текущий префикс языка (если есть)
  const strippedPath =
    currentLang === defaultLang
      ? pathname
      : pathname.replace(`/${currentLang}`, "") || "/";

  // Добавляем новый префикс (если нужен)
  return targetLang === defaultLang
    ? strippedPath
    : `/${targetLang}${strippedPath}`;
}

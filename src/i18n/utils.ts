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

export function localizedPath(path: string, lang: Lang): string {
  return lang === defaultLang ? path : `/${lang}${path}`;
}

/**
 * Переключает язык в pathname
 * "/about"                    → "/en/about"                 (ru → en)
 * "/en/about"                 → "/about"                    (en → ru)
 * "/"                         → "/en/"                      (ru → en)
 * "/en/"                      → "/"                         (en → ru)
 * "/en/blog/01-hello-world-en" → "/blog/01-hello-world"     (en → ru, убирает суффикс)
 * "/blog/01-hello-world"      → "/en/blog/01-hello-world-en" (ru → en, добавляет суффикс)
 */
export function switchLang(pathname: string): string {
  const currentLang = getLangFromUrl(pathname);
  const targetLang = currentLang === "ru" ? "en" : "ru";

  // Убираем текущий префикс языка (если есть)
  let strippedPath =
    currentLang === defaultLang
      ? pathname
      : pathname.replace(`/${currentLang}`, "") || "/";

  // Для blog постов: убираем суффикс slug'а при переходе на дефолтный язык
  // или добавляем суффикс при переходе на en
  if (strippedPath.startsWith("/blog/")) {
    const parts = strippedPath.split("/");
    const lastPart = parts[parts.length - 1];
    const currentSuffix = `-${currentLang}`;
    const targetSuffix = `-${targetLang}`;

    if (targetLang === defaultLang && lastPart.endsWith(currentSuffix)) {
      parts[parts.length - 1] = lastPart.replace(currentSuffix, "");
      strippedPath = parts.join("/");
    } else if (targetLang !== defaultLang && !lastPart.endsWith(targetSuffix)) {
      parts[parts.length - 1] = lastPart + targetSuffix;
      strippedPath = parts.join("/");
    }
  }

  // Добавляем новый префикс (если нужен)
  return targetLang === defaultLang
    ? strippedPath
    : `/${targetLang}${strippedPath}`;
}

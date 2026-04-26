import { defaultLang, type Lang } from "@i18n/ui";
import { getLangFromUrl } from "./getLangFromUrl";

function stripLangPrefix(pathname: string, lang: Lang): string {
  if (lang === defaultLang) return pathname;
  return pathname.replace(`/${lang}`, "") || "/";
}

function addLangPrefix(pathname: string, lang: Lang): string {
  return lang === defaultLang ? pathname : `/${lang}${pathname}`;
}

function transformSlug(slug: string, fromLang: Lang, toLang: Lang): string {
  const base = slug.endsWith(`-${fromLang}`)
    ? slug.slice(0, -fromLang.length - 1)
    : slug;

  return toLang === defaultLang ? base : `${base}-${toLang}`;
}

function transformBlogPath(path: string, fromLang: Lang, toLang: Lang): string {
  if (!path.startsWith("/blog/")) return path;

  const segments = path.split("/");
  segments[segments.length - 1] = transformSlug(
    segments[segments.length - 1],
    fromLang,
    toLang,
  );
  return segments.join("/");
}

export function switchLang(pathname: string): string {
  const currentLang = getLangFromUrl(pathname);
  const targetLang: Lang = currentLang === "ru" ? "en" : "ru";

  const stripped = stripLangPrefix(pathname, currentLang);
  const transformed = transformBlogPath(stripped, currentLang, targetLang);
  return addLangPrefix(transformed, targetLang);
}

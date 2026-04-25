import { defaultLang, type Lang } from "../ui";
import { getLangFromUrl } from "./getLangFromUrl";

export function switchLang(pathname: string): string {
  const currentLang = getLangFromUrl(pathname);
  const targetLang = currentLang === "ru" ? "en" : "ru";

  let strippedPath =
    currentLang === defaultLang
      ? pathname
      : pathname.replace(`/${currentLang}`, "") || "/";

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

  return targetLang === defaultLang
    ? strippedPath
    : `/${targetLang}${strippedPath}`;
}
import { ui, defaultLang, type Lang } from "../ui";

export function getLangFromUrl(pathname: string): Lang {
  const [, first] = pathname.split("/");
  if (first in ui) {
    return first as Lang;
  }
  return defaultLang;
}

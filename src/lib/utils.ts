import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { type Lang } from "@i18n/ui";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const localeMap: Record<Lang, string> = {
  ru: "ru-RU",
  en: "en-US",
};

export function formatDate(date: Date, lang: Lang = "en") {
  return Intl.DateTimeFormat(localeMap[lang], {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function dateRange(
  startDate: Date,
  endDate?: Date | string,
  lang: Lang = "en",
): string {
  const locale = localeMap[lang];
  const startMonth = startDate.toLocaleString(locale, { month: "short" });
  const startYear = startDate.getFullYear().toString();
  let endMonth;
  let endYear;

  if (endDate) {
    if (typeof endDate === "string") {
      endMonth = "";
      endYear = endDate;
    } else {
      endMonth = endDate.toLocaleString(locale, { month: "short" });
      endYear = endDate.getFullYear().toString();
    }
  }

  return `${startMonth}${startYear} - ${endMonth}${endYear}`;
}

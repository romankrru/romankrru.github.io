import { getCollection } from "astro:content";
import { type Lang } from "@i18n/ui";

export async function getWorkData(lang: Lang) {
  const collection = (await getCollection("work"))
    .filter((item) => item.data.lang === lang)
    .sort(
      (a, b) =>
        new Date(b.data.dateStart).valueOf() -
        new Date(a.data.dateStart).valueOf(),
    );

  const work = await Promise.all(
    collection.map(async (item) => {
      const { Content } = await item.render();
      return { ...item, Content };
    }),
  );

  return work;
}

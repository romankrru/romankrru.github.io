import { getCollection, type CollectionEntry } from "astro:content";

export async function getWorkData() {
  const collection = (await getCollection("work"))
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
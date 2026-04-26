import { getCollection } from "astro:content";
import { SITE } from "@consts";
import { type Lang } from "@i18n/ui";

export async function getHomeData(lang: Lang) {
  const blog = (await getCollection("blog"))
    .filter((post) => !post.data.draft)
    .filter((post) => post.data.lang === lang)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .slice(0, SITE.NUM_POSTS_ON_HOMEPAGE);

  const projects = (await getCollection("projects"))
    .filter((project) => !project.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .slice(0, SITE.NUM_PROJECTS_ON_HOMEPAGE);

  const work = (await getCollection("work"))
    .filter((workItem) => workItem.data.lang === lang)
    .sort(
      (a, b) =>
        new Date(b.data.dateStart).valueOf() -
        new Date(a.data.dateStart).valueOf(),
    )
    .slice(0, SITE.NUM_WORKS_ON_HOMEPAGE);

  return { blog, projects, work };
}

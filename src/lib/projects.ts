import { getCollection, type CollectionEntry } from "astro:content";

export async function getProjectsData() {
  const projects = (await getCollection("projects"))
    .filter((project) => !project.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return projects;
}
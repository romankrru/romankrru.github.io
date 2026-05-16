import { getCollection } from "astro:content";
import { isVisible } from "@lib/drafts";

export async function getProjectsData() {
  const projects = (await getCollection("projects"))
    .filter(isVisible)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return projects;
}

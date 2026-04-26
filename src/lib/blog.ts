import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPostsByYear = {
  [year: string]: CollectionEntry<"blog">[];
};

export async function getBlogData(lang: string) {
  const data = (await getCollection("blog"))
    .filter((post) => post.data.lang === lang)
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const posts = data.reduce((acc: BlogPostsByYear, post) => {
    const year = post.data.date.getFullYear().toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});

  const years = Object.keys(posts).sort((a, b) => parseInt(b) - parseInt(a));

  return { posts, years };
}

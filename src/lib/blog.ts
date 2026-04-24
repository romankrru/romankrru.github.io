import { getCollection, type CollectionEntry } from "astro:content";

export async function getBlogData() {
  const data = (await getCollection("blog"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  type Acc = {
    [year: string]: CollectionEntry<"blog">[];
  };

  const posts = data.reduce((acc: Acc, post) => {
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
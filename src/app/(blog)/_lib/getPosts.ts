import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "src/app/(blog)/_content");

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    ...data,
    slug,
    content: contentHtml, // Now it's HTML
  };
}

// Get all slugs (filenames without .mdx)
export function getAllSlugs() {
  const files = fs.readdirSync(BLOG_DIR);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

// Get all posts (for index/listing page)
export async function getAllPosts() {
  const slugs = getAllSlugs();

  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug))
  );

  // Sort by date (descending)
  return posts.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
}


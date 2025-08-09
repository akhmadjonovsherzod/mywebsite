import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

export interface BlogMeta {
  title: string;
  description?: string;
  date: string; // ISO string
  tags?: string[];
  slug: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/**
 * Read all MDX files in the blog directory and return their metadata.
 * The slug is derived from the filename. Files must end with .mdx.
 */
export function getAllBlogMeta(): BlogMeta[] {
  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"));
  const posts = files.map((filename) => {
    const filePath = path.join(BLOG_DIR, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    const slug = filename.replace(/\.mdx$/, "");
    return {
      ...(data as Omit<BlogMeta, "slug">),
      slug,
    } as BlogMeta;
  });
  // Sort by date descending
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * Load a blog post by its slug, returning the compiled MDX source and metadata.
 */
export async function getBlogPostBySlug(slug: string) {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const source = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(source);
  const mdx = await compileMDX({ source: content, options: { scope: data } });
  return {
    meta: {
      ...(data as Omit<BlogMeta, "slug">),
      slug,
    } as BlogMeta,
    mdx,
  };
}

/**
 * Utility to format dates for display. Converts ISO strings to a
 * human-readable format like "August 9, 2025". Adjust timezone as needed.
 */
export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
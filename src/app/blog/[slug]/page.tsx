// Note: This route uses synchronous generateStaticParams so the params
// object is synchronous. Typing the params avoids Next.js generic inference.

import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllBlogMeta, getBlogPostBySlug, formatDate } from "@/lib/mdx";

export function generateStaticParams() {
  // Synchronously return params since getAllBlogMeta is not asynchronous.
  return getAllBlogMeta().map((post) => ({ slug: post.slug }));
}

const BlogPostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  try {
    const { meta, mdx } = await getBlogPostBySlug(slug);
    return (
      <div className="py-16 max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>
        <p className="text-sm text-muted-foreground">{formatDate(meta.date)}</p>
        {meta.tags && (
          <ul className="flex flex-wrap gap-2 mb-4">
            {meta.tags.map((tag) => (
              <li key={tag} className="px-2 py-1 text-xs bg-accent rounded-md">
                {tag}
              </li>
            ))}
          </ul>
        )}
        <article className="prose dark:prose-invert max-w-none">
          <MDXRemote source={mdx} />
        </article>
      </div>
    );
  } catch {
    return notFound();
  }
};

export default BlogPostPage;
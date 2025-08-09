import Link from "next/link";
import { getAllBlogMeta, formatDate } from "@/lib/mdx";

export const metadata = {
  title: "Blog",
  description: "Read insights, tutorials and project retrospectives from Sherzodbek Akhmadjonov.",
};

/**
 * Blog index page listing all posts. Sorted by date descending.
 */
export default function BlogPage() {
  const posts = getAllBlogMeta();
  return (
    <div className="py-16 space-y-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="text-muted-foreground max-w-2xl">
        Deep dives into data analytics, web development experiments, and lessons learned along the way.
      </p>
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="border border-border rounded-lg p-6 hover:shadow-sm transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground mb-2">{post.description}</p>
            <p className="text-xs text-muted-foreground mb-3">{formatDate(post.date)}</p>
            {post.tags && (
              <ul className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <li key={tag} className="px-2 py-1 text-xs bg-accent rounded-md">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
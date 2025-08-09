import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import { getAllBlogMeta, formatDate } from "@/lib/mdx";

/**
 * Home page server component. Displays a hero introduction, a selection
 * of featured projects and the latest blog posts. Content is pulled
 * from the file system via helper functions.
 */
export default async function Home() {
  const projects = getAllProjects().slice(0, 2);
  const posts = getAllBlogMeta().slice(0, 3);

  return (
    <div className="py-16 space-y-20">
      {/* Hero Section */}
      <section className="text-center max-w-2xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Hey, I’m Sherzodbek, a Business Informatics student and aspiring data professional.
        </h1>
        <p className="text-lg text-muted-foreground">
          I design and deliver data-driven solutions using Python, Power BI, and other tools, with an emphasis on clear insights, intuitive user experience, and performance.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full border border-border hover:bg-accent transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <article
              key={proj.slug}
              className="border border-border rounded-lg p-6 hover:shadow-sm transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">
                <Link href={`/projects/${proj.slug}`} className="hover:underline">
                  {proj.title}
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {proj.summary}
              </p>
              {proj.tags && (
                <ul className="flex flex-wrap gap-2 mb-3">
                  {proj.tags.map((tag) => (
                    <li key={tag} className="px-2 py-1 text-xs bg-accent rounded-md">
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex gap-4 text-sm">
                {proj.demo && (
                  <Link href={proj.demo} target="_blank" rel="noopener noreferrer" className="underline">
                    Live Demo
                  </Link>
                )}
                {proj.repo && (
                  <Link href={proj.repo} target="_blank" rel="noopener noreferrer" className="underline">
                    GitHub
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Latest Posts</h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug} className="border border-border rounded-lg p-6 hover:shadow-sm transition-shadow">
              <h3 className="text-xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {post.description}
              </p>
              <p className="text-xs text-muted-foreground mb-3">
                {formatDate(post.date)}
              </p>
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
        <div>
          <Link href="/blog" className="text-primary underline">
            View all posts →
          </Link>
        </div>
      </section>
    </div>
  );
}
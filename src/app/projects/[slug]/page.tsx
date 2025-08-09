import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  // Synchronously return params since getAllProjects is not asynchronous.
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const projData = getProjectBySlug(slug);
  if (!projData) return notFound();
  const { meta, content } = projData;
  return (
    <div className="py-16 max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">{meta.title}</h1>
      <p className="text-muted-foreground">{meta.summary}</p>
      <div className="flex gap-4 text-sm mt-4">
        {meta.demo && (
          <a
            href={meta.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Live Demo
          </a>
        )}
        {meta.repo && (
          <a
            href={meta.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </a>
        )}
      </div>
      {content ? (
        <article className="prose dark:prose-invert max-w-none">
          <MDXRemote source={content} />
        </article>
      ) : (
        <p className="text-muted-foreground mt-8">
          Detailed write‑up coming soon. Stay tuned!
        </p>
      )}
    </div>
  );
}
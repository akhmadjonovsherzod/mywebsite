import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export const metadata = {
  title: "Projects",
  description: "Browse projects by Sherzodbek Akhmadjonov, from data analytics to web development.",
};

/**
 * Projects listing page. Displays all projects defined in projects.json.
 */
export default function ProjectsPage() {
  const projects = getAllProjects();
  return (
    <div className="py-16 space-y-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="text-muted-foreground max-w-2xl">
        A selection of my work across data analytics, web and beyond. Click a
        project to read more about the problem, approach and outcomes.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <article
            key={proj.slug}
            className="border border-border rounded-lg p-6 hover:shadow-sm transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/projects/${proj.slug}`} className="hover:underline">
                {proj.title}
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground mb-3">{proj.summary}</p>
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
                <Link
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Live Demo
                </Link>
              )}
              {proj.repo && (
                <Link
                  href={proj.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  GitHub
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
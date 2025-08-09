import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ProjectMeta {
  title: string;
  slug: string;
  summary: string;
  tags?: string[];
  repo?: string;
  demo?: string;
  cover?: string;
  bodyPath?: string;
}

const PROJECTS_JSON = path.join(process.cwd(), "content", "projects", "projects.json");
const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

/**
 * Read the JSON file containing project metadata. Slugs must be unique.
 */
export function getAllProjects(): ProjectMeta[] {
  const raw = fs.readFileSync(PROJECTS_JSON, "utf8");
  const list = JSON.parse(raw) as ProjectMeta[];
  return list;
}

/**
 * Retrieve a project by its slug. If a bodyPath is provided, load and parse
 * the MDX content. Returns null if not found.
 */
export function getProjectBySlug(slug: string): {
  meta: ProjectMeta;
  content: string | null;
} | null {
  const projects = getAllProjects();
  const meta = projects.find((p) => p.slug === slug);
  if (!meta) return null;
  let content: string | null = null;
  if (meta.bodyPath) {
    const mdxPath = path.join(PROJECTS_DIR, meta.bodyPath);
    if (fs.existsSync(mdxPath)) {
      const file = fs.readFileSync(mdxPath, "utf8");
      const parsed = matter(file);
      content = parsed.content;
    }
  }
  return { meta, content };
}
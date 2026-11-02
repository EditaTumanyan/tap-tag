import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

/**
 * Blog articles live in /content/blog as Markdown files: <slug>.md
 * The file name becomes the URL: content/blog/my-article.md -> /blog/my-article
 * Each file starts with a front-matter block (see content/blog/README.md).
 */
const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  updated?: string;
  cover: string; // path under /public, e.g. /blog/my-article.jpg
  coverAlt: string;
  author: string;
  draft: boolean;
  readingMinutes: number;
  html: string;
};

function parseFrontMatter(raw: string, file: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) throw new Error(`${file}: missing front matter (--- block at the top)`);
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (m) data[m[1]] = m[2].trim().replace(/^["']|["']$/g, "");
  }
  return { data, body: match[2] };
}

function readPost(file: string): Post {
  const slug = file.replace(/\.md$/, "");
  const { data, body } = parseFrontMatter(fs.readFileSync(path.join(BLOG_DIR, file), "utf8"), file);
  for (const key of ["title", "description", "date", "cover"]) {
    if (!data[key]) throw new Error(`content/blog/${file}: "${key}" is required`);
  }
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    updated: data.updated || undefined,
    cover: data.cover,
    coverAlt: data.coverAlt || data.title,
    author: data.author || "TapTag Team",
    draft: data.draft === "true",
    readingMinutes: Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 200)),
    html: marked.parse(body, { async: false }),
  };
}

/** Published posts, newest first. Drafts are shown only in local development (npm run dev). */
export function getPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const showDrafts = process.env.NODE_ENV === "development";
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && f !== "README.md")
    .map(readPost)
    .filter((p) => showDrafts || !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

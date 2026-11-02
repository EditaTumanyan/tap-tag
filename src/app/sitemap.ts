import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/seo";
import { businessServices, artistServices } from "@/data/content";
import { getPosts } from "@/lib/blog";

const routes = [
  "/", "/services", "/courses", "/about", "/contact", "/faq", "/privacy-policy",
  ...[...businessServices, ...artistServices].map((s) => `/services/${s.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();
  return [
    ...routes.map((path) => ({ url: `${SITE_URL}${path}` })),
    // The blog appears in the sitemap only once it has published articles.
    ...(posts.length ? [{ url: `${SITE_URL}/blog`, lastModified: posts[0].updated ?? posts[0].date }] : []),
    ...posts.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: p.updated ?? p.date })),
  ];
}

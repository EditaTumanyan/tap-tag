import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/seo";
import { businessServices, artistServices } from "@/data/content";

const routes = [
  "/", "/services", "/courses", "/about", "/contact", "/faq", "/privacy-policy",
  ...[...businessServices, ...artistServices].map((s) => `/services/${s.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({ url: `${SITE_URL}${path === "/" ? "/" : path}` }));
}

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/seo";

const routes = ["/", "/services", "/courses", "/about", "/contact", "/privacy-policy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({ url: `${SITE_URL}${path === "/" ? "/" : path}` }));
}

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/seo";

// Cloudflare prepends its managed AI-crawler rules on top of this file.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

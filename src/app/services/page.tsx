import type { Metadata } from "next";
import { pageMetadata } from "@/data/seo";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = pageMetadata({
  title: "Digital Marketing Services for Businesses & Artists | TapTag",
  description: "Digital marketing services for businesses and artists: strategy, advertising, content, SEO, influencer marketing, and web development.",
  path: "/services",
});

export default async function ServicesPage({ searchParams }: PageProps<"/services">) {
  const { tab } = await searchParams;
  return <ServicesClient tabParam={typeof tab === "string" ? tab : null} />;
}

import type { Metadata } from "next";
import { pageMetadata } from "@/data/seo";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = pageMetadata({
  title: "Portfolio | TapTag",
  description: "Campaigns, launches and platforms TapTag has built for brands and artists across the Armenian and US markets.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return <PortfolioClient />;
}

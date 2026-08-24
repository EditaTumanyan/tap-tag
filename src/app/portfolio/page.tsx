import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio — TapTag",
  description: "Campaigns, launches and platforms TapTag has built for brands and artists across the Armenian and US markets.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}

import type { Metadata } from "next";
import { Suspense } from "react";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services — TapTag",
  description: "Digital marketing services for businesses and artists: strategy, advertising, content, SEO, influencer marketing, and web development.",
};

export default function ServicesPage() {
  return (
    <Suspense fallback={null}>
      <ServicesClient />
    </Suspense>
  );
}

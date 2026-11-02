import type { Metadata } from "next";
import { pageMetadata } from "@/data/seo";
import ContactClient from "./ContactClient";

export const metadata: Metadata = pageMetadata({
  title: "Contact TapTag | Book a Call",
  description: "Tell TapTag about your business, brand, or project — we'll get back to you within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactClient />;
}

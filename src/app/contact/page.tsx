import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact — TapTag",
  description: "Tell TapTag about your business, brand, or project — we'll get back to you within one business day.",
};

export default function ContactPage() {
  return <ContactClient />;
}

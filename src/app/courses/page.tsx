import type { Metadata } from "next";
import { pageMetadata } from "@/data/seo";
import CoursesClient from "./CoursesClient";

export const metadata: Metadata = pageMetadata({
  title: "Digital Marketing Courses in Yerevan | TapTag",
  description: "Three professional pathways in digital marketing: for career seekers, business owners, and artists & managers.",
  path: "/courses",
});

export default function CoursesPage() {
  return <CoursesClient />;
}

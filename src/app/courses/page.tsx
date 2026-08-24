import type { Metadata } from "next";
import CoursesClient from "./CoursesClient";

export const metadata: Metadata = {
  title: "Courses — TapTag",
  description: "Three professional pathways in digital marketing: for career seekers, business owners, and artists & managers.",
};

export default function CoursesPage() {
  return <CoursesClient />;
}

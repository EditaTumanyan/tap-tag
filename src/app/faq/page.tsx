import type { Metadata } from "next";
import FaqGroups from "@/components/FaqGroups";
import CtaBanner from "@/components/CtaBanner";
import { faqGroups } from "@/data/content";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata({
  title: "FAQ | TapTag Digital Marketing Agency",
  description: "Answers to common questions about TapTag: our digital marketing services for businesses and artists, how to get started, and our courses in Yerevan.",
  path: "/faq",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((g) =>
    g.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    }))
  ),
};

export default function FaqPage() {
  return (
    <div className="fade-up">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />

      <div style={{ textAlign: "center", padding: "72px 24px 48px", background: "linear-gradient(180deg,#f6f2ff,#FAFAF8)" }}>
        <h1 className="text-[34px] md:text-[46px] lg:text-[56px]" style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, margin: "0 0 18px", color: "#2b2733", lineHeight: 1.08 }}>
          Frequently Asked <span style={{ color: "#e56a78" }}>Questions</span>
        </h1>
        <p style={{ fontSize: 18, color: "#57517a", maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
          Everything you need to know about working with TapTag and our courses.
        </p>
      </div>

      <div style={{ maxWidth: 820, margin: "0 auto", padding: "24px 24px 88px" }}>
        <FaqGroups />
      </div>

      <CtaBanner heading={<>Still have <span style={{ color: "#973e8f" }}>questions?</span></>} subtext="Tell us about your business or project and we'll get back to you within one business day." buttonLabel="Book a Call" />
    </div>
  );
}

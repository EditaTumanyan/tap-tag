import type { Metadata } from "next";
import Link from "next/link";
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
        {faqGroups.map((group) => (
          <section key={group.title} style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 26, fontWeight: 700, margin: "0 0 12px", color: "#2b2733" }}>{group.title}</h2>
            {group.items.map((f) => (
              <details key={f.q} className="faq-item" style={{ borderBottom: "1px solid #ecebf5" }}>
                <summary
                  style={{ listStyle: "none", cursor: "pointer", padding: "22px 0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, fontFamily: "'Nunito',sans-serif", fontSize: 18, fontWeight: 700, color: "#2b2733" }}
                >
                  <h3 style={{ font: "inherit", margin: 0 }}>{f.q}</h3>
                  <span aria-hidden className="faq-icon" style={{ flexShrink: 0, width: 30, height: 30, borderRadius: "50%", background: "#f4f1fd", color: "#765098", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, transition: "transform .2s" }}>+</span>
                </summary>
                <div style={{ padding: "0 0 24px" }}>
                  <p style={{ fontSize: 16, color: "#57517a", lineHeight: 1.7, margin: 0 }}>{f.a}</p>
                  {f.link && (
                    <Link href={f.link.href} className="hover:text-[#e56a78]" style={{ display: "inline-block", marginTop: 12, color: "#765098", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
                      {f.link.label} →
                    </Link>
                  )}
                </div>
              </details>
            ))}
          </section>
        ))}
      </div>

      <CtaBanner heading={<>Still have <span style={{ color: "#973e8f" }}>questions?</span></>} subtext="Tell us about your business or project and we'll get back to you within one business day." buttonLabel="Book a Call" />
    </div>
  );
}

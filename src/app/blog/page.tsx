import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import { formatDate, getPosts } from "@/lib/blog";
import { pageMetadata } from "@/data/seo";

export function generateMetadata(): Metadata {
  const meta = pageMetadata({
    title: "Blog & Insights | TapTag Digital Marketing Agency",
    description: "Digital marketing insights from TapTag: social media, advertising, branding, SEO and artist growth tips for businesses and creators in Armenia and beyond.",
    path: "/blog",
  });
  // Keep an empty blog out of Google until the first article is published.
  return getPosts().length ? meta : { ...meta, robots: { index: false, follow: true } };
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="fade-up">
      <div style={{ textAlign: "center", padding: "72px 24px 48px", background: "linear-gradient(180deg,#f6f2ff,#FAFAF8)" }}>
        <h1 className="text-[34px] md:text-[46px] lg:text-[56px]" style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, margin: "0 0 18px", color: "#2b2733", lineHeight: 1.08 }}>
          Blog &amp; <span style={{ color: "#e56a78" }}>Insights</span>
        </h1>
        <p style={{ fontSize: 18, color: "#57517a", maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
          Practical ideas on digital marketing, branding and growth from the TapTag team.
        </p>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "24px 24px 88px" }}>
        {posts.length === 0 ? (
          <p style={{ textAlign: "center", fontSize: 18, color: "#8a84a8", padding: "48px 0" }}>Our first articles are coming soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 28 }}>
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="bg-white border-[#e7e4f2] hover:border-[#e56a78] hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(21,18,63,0.28)] transition-all duration-300"
                style={{ borderWidth: 1, borderStyle: "solid", borderRadius: 14, overflow: "hidden", textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column" }}
              >
                <div style={{ position: "relative", aspectRatio: "16/9", background: "#f4f1fd" }}>
                  <Image src={p.cover} alt={p.coverAlt} fill sizes="(min-width:1024px) 400px, (min-width:640px) 50vw, 100vw" style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "22px 24px 26px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ fontSize: 13, color: "#9b93ab", marginBottom: 10 }}>
                    <time dateTime={p.date}>{formatDate(p.date)}</time> · {p.readingMinutes} min read
                    {p.draft && <span style={{ marginLeft: 8, color: "#e56a78", fontWeight: 700 }}>DRAFT</span>}
                  </div>
                  <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 21, fontWeight: 700, margin: "0 0 10px", color: "#2b2733", lineHeight: 1.3 }}>{p.title}</h2>
                  <p style={{ fontSize: 15, color: "#57517a", lineHeight: 1.6, margin: "0 0 18px" }}>{p.description}</p>
                  <span style={{ marginTop: "auto", color: "#765098", fontWeight: 700, fontSize: 15 }}>Read article →</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <CtaBanner heading={<>Ready to grow <span style={{ color: "#973e8f" }}>your brand?</span></>} subtext="Tell us about your business or project, and we'll get back to you within one business day." buttonLabel="Book a Call" />
    </div>
  );
}

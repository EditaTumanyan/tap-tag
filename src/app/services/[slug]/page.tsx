import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GlyphIcon from "@/components/GlyphIcon";
import CtaBanner from "@/components/CtaBanner";
import { glyphs, bizGlyphs, artistGlyphs } from "@/data/glyphs";
import { businessServices, artistServices } from "@/data/content";
import { SITE_URL, pageMetadata } from "@/data/seo";

const allServices = [
  ...businessServices.map((item, i) => ({ item, i, audience: "business" as const })),
  ...artistServices.map((item, i) => ({ item, i, audience: "artist" as const })),
];

function findService(slug: string) {
  return allServices.find((s) => s.item.slug === slug);
}

// Only the slugs listed here exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.item.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const svc = findService((await params).slug);
  if (!svc) return {};
  return pageMetadata({ title: svc.item.seoTitle, description: svc.item.desc, path: `/services/${svc.item.slug}` });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const svc = findService((await params).slug);
  if (!svc) notFound();
  const { item, i, audience } = svc;

  const isBiz = audience === "business";
  const accent = isBiz ? "#765098" : "#973e8f";
  const heroBg = isBiz ? "linear-gradient(120deg,#ede9fe,#f3e8ff)" : "linear-gradient(120deg,#fde9eb,#f5e0f5)";
  const audienceLabel = isBiz ? "For Businesses & Brands" : "For Artists & Public Figures";
  const icon = glyphs[(isBiz ? bizGlyphs : artistGlyphs)[i]];
  const url = `${SITE_URL}/services/${item.slug}`;
  const related = (isBiz ? businessServices : artistServices).filter((s) => s.slug !== item.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: item.title,
      serviceType: item.title,
      description: item.long,
      url,
      provider: { "@type": "ProfessionalService", name: "TapTag", url: SITE_URL },
      areaServed: ["Armenia", "United States"],
      audience: { "@type": "Audience", audienceType: isBiz ? "Businesses and brands" : "Artists and public figures" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: item.title, item: url },
      ],
    },
  ];

  return (
    <div className="fade-up">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <div style={{ background: heroBg }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 24px 64px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: "#8a84a8", marginBottom: 36 }}>
            <Link href="/" className="hover:text-[#2b2733]">Home</Link>
            <span style={{ margin: "0 8px" }}>›</span>
            <Link href={isBiz ? "/services" : "/services?tab=artist"} className="hover:text-[#2b2733]">Services</Link>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#57517a" }}>{item.title}</span>
          </nav>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
            <GlyphIcon paths={icon} color={accent} />
          </div>
          <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: accent, fontWeight: 700, marginBottom: 14 }}>
            {audienceLabel}
          </div>
          <h1 className="text-[34px] md:text-[46px] lg:text-[54px]" style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, margin: "0 0 20px", color: "#2b2733", lineHeight: 1.1 }}>
            {item.title}
          </h1>
          <p style={{ fontSize: 19, color: "#57517a", lineHeight: 1.6, margin: 0, maxWidth: 720 }}>{item.desc}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]" style={{ maxWidth: 960, margin: "0 auto", padding: "64px 24px 80px", gap: 56 }}>
        <div>
          <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 26, fontWeight: 700, margin: "0 0 18px", color: "#2b2733" }}>How TapTag Helps</h2>
          <p style={{ fontSize: 17, color: "#57517a", lineHeight: 1.75, margin: "0 0 32px" }}>{item.long}</p>
          <Link
            href="/contact"
            className="hover:opacity-90 hover:-translate-y-0.5"
            style={{ display: "inline-block", background: accent, color: "#fff", padding: "16px 32px", borderRadius: 8, fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 16, textDecoration: "none", transition: "opacity .2s,transform .18s" }}
          >
            Book a Call
          </Link>
        </div>
        <div style={{ background: "#fff", border: "1px solid #ece8f5", borderRadius: 16, padding: 28, alignSelf: "start" }}>
          <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9b93ab", fontWeight: 700, margin: "0 0 18px" }}>What&rsquo;s Included</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {item.points.map((p) => (
              <li key={p} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span aria-hidden style={{ width: 26, height: 26, flexShrink: 0, borderRadius: "50%", background: "#f6f4fb", color: accent, fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>✓</span>
                <span style={{ fontSize: 16, color: "#2b2733", lineHeight: 1.6 }}>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 88px" }}>
        <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: "clamp(24px,3vw,32px)", fontWeight: 700, margin: "0 0 28px", color: "#2b2733", textAlign: "center" }}>
          More Services {isBiz ? "for Businesses" : "for Artists"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 16 }}>
          {related.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="bg-white border-[#e7e4f2] hover:border-[#e56a78] hover:-translate-y-1 transition-all duration-300"
              style={{ borderWidth: 1, borderStyle: "solid", borderRadius: 12, padding: "18px 20px", textDecoration: "none", color: "#2b2733", fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 16, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
            >
              {s.title}
              <span aria-hidden style={{ color: accent }}>→</span>
            </Link>
          ))}
        </div>
      </div>

      <CtaBanner heading={<>Ready to get started with <span style={{ color: "#973e8f" }}>{item.title}</span>?</>} buttonLabel="Book a Call" />
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import ImageSlot from "@/components/ImageSlot";
import GlyphIcon from "@/components/GlyphIcon";
import CtaBanner from "@/components/CtaBanner";
import { coreValuePaths } from "@/data/glyphs";
import { team, certs, coreValues } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us — TapTag",
  description: "Since 2015, TapTag has been the strategic engine behind 100+ celebrities and 200+ global brands, working across the Armenian and US markets.",
};

const hoverLift =
  "hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(43,39,51,0.24)] hover:border-[#f97316] transition-all duration-300";

export default function AboutPage() {
  return (
    <div className="fade-up">
      <div style={{ textAlign: "center", padding: "72px 24px 56px" }}>
        <h1 className="text-[34px] md:text-[46px] lg:text-[60px]" style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, margin: "0 0 20px", color: "#2b2733", lineHeight: 1.08 }}>
          Our Story, <span style={{ color: "#f97316" }}>Our Mission</span>
        </h1>
        <p style={{ fontSize: 18, color: "#57517a", maxWidth: 720, margin: "0 auto", lineHeight: 1.6 }}>
          Building digital growth through precision, creative vision, and an unwavering commitment to client results.
        </p>
      </div>

      <div style={{ height: 100, background: "linear-gradient(180deg,#f6f2ff,#FAFAF8)" }} />

      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1fr] items-center" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 72px", gap: 56 }}>
        <ImageSlot src="/assets/about-team.jpg" alt="TapTag team collaborating" placeholder="Team or office photo" style={{ width: "100%", aspectRatio: "1/1", borderRadius: 12 }} />
        <div>
          <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 32, fontWeight: 700, margin: "0 0 24px", color: "#2b2733" }}>
            Who <span style={{ color: "#f97316" }}>We Are</span>
          </h2>
          <p style={{ fontSize: 16, color: "#57517a", lineHeight: 1.75, margin: "0 0 18px" }}>
            Since 2015, we&rsquo;ve been the strategic engine behind 100+ celebrities and 200+ global brands. TapTag started as a small team of digital marketers and grew into a full-service agency working across the Armenian and US markets.
          </p>
          <p style={{ fontSize: 16, color: "#57517a", lineHeight: 1.75, margin: "0 0 18px" }}>
            Our mission is to help businesses and artists harness the full potential of digital platforms. We combine precision targeting with data-driven content strategies to build campaigns that don&rsquo;t just reach audiences — they convert them.
          </p>
          <p style={{ fontSize: 16, color: "#57517a", lineHeight: 1.75, margin: 0 }}>
            Today we operate at the intersection of two markets, scaling brands and careers globally with measurable ROI at every step.
          </p>
        </div>
      </div>

      <div style={{ background: "#faf9fd", padding: "64px 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 32, fontWeight: 700, margin: "0 0 12px", color: "#2b2733" }}>
          Meet Our <span style={{ color: "#f97316" }}>Team</span>
        </h2>
        <p style={{ fontSize: 16, color: "#57517a", margin: "0 0 48px" }}>The people behind it.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" style={{ maxWidth: 1100, margin: "0 auto", gap: "32px 24px" }}>
          {team.map((m) => (
            <div key={m.slot}>
              <ImageSlot
                src={"photo" in m ? m.photo : undefined}
                alt={m.name}
                placeholder="Photo"
                style={{ width: 120, height: 120, margin: "0 auto 18px", border: "3px solid #f9d9c0", borderRadius: "50%", background: "#f6dcd2" }}
              />
              <h3 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 16, fontWeight: 700, margin: "0 0 6px", color: "#2b2733" }}>{m.name}</h3>
              <p style={{ fontSize: 14, color: "#57517a", margin: 0 }}>{m.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 14 }}>
            <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 32, fontWeight: 700, margin: "0 0 12px", color: "#2b2733" }}>
              Founder <span style={{ color: "#f97316" }}>Certifications</span>
            </h2>
            <p style={{ fontSize: 17, color: "#57517a", margin: "0 0 40px" }}>Meta certifications held by Tatev Khachatryan, verified on Credly.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 24 }}>
            {certs.map((c) => (
              <div key={c.name} className={`${hoverLift} border-[#e5e2f0]`} style={{ background: "#fff", borderWidth: 1, borderStyle: "solid", borderRadius: 14, padding: "24px 22px 22px", display: "flex", flexDirection: "column" }}>
                {c.available ? (
                  <Image src={c.src} alt={c.name} width={120} height={120} style={{ width: 120, height: 120, objectFit: "contain", margin: "8px auto 24px" }} />
                ) : (
                  <div
                    style={{
                      width: 120,
                      height: 120,
                      margin: "8px auto 24px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg,#f3e8ff,#fde8d7)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#8a7fb5",
                      fontFamily: "'Nunito Sans',sans-serif",
                      fontSize: 12,
                      fontWeight: 600,
                      textAlign: "center",
                      padding: 8,
                    }}
                  >
                    Badge image
                  </div>
                )}
                <h3 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 16, fontWeight: 700, margin: "0 0 6px", color: "#2b2733", lineHeight: 1.35 }}>{c.name}</h3>
                <p style={{ fontSize: 15, color: "#57517a", margin: "auto 0 0" }}>{c.issuer}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <a
              href="https://www.credly.com/users/tatevik-khachatryan/badges"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f97316] border-b-[#f9d9c0] hover:text-[#c2410c] hover:border-b-[#f97316]"
              style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 16, textDecoration: "none", borderBottomWidth: 2, borderBottomStyle: "solid", paddingBottom: 3, transition: "color .2s,border-color .2s" }}
            >
              View all badges on Credly →
            </a>
          </div>
        </div>
      </div>

      <div style={{ background: "#faf9fd", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 32, fontWeight: 700, margin: "0 0 48px", color: "#2b2733", textAlign: "center" }}>
            Our Core <span style={{ color: "#f97316" }}>Values</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 24 }}>
            {coreValues.map((v, i) => (
              <div key={v.title} className="border-[#ecebf5] hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(21,18,63,0.28)] hover:border-[#f97316] transition-all duration-300" style={{ background: "#fff", borderWidth: 1, borderStyle: "solid", borderRadius: 12, padding: "32px 28px", textAlign: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: 12, background: "#fce7f3", margin: "0 auto 22px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <GlyphIcon paths={coreValuePaths[i]} color="#ec4899" />
                </div>
                <h3 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 18, fontWeight: 700, margin: "0 0 12px", color: "#2b2733" }}>{v.title}</h3>
                <p style={{ fontSize: 15, color: "#57517a", lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CtaBanner heading={<>Ready to Start? <span style={{ color: "#ec4899" }}>Talk to Our Team</span></>} subtext="Let's discuss how we can scale your digital presence and hit your growth goals." />
    </div>
  );
}

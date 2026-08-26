import type { Metadata } from "next";
import Image from "next/image";
import ImageSlot from "@/components/ImageSlot";
import GlyphIcon from "@/components/GlyphIcon";
import CtaBanner from "@/components/CtaBanner";
import TeamGrid from "@/components/TeamGrid";
import { coreValuePaths } from "@/data/glyphs";
import { certs, coreValues } from "@/data/content";

const certsLoop = [...certs, ...certs, ...certs, ...certs];

export const metadata: Metadata = {
  title: "About Us — TapTag",
  description: "Founded in Armenia in 2015, TapTag has worked with 300+ businesses and 70+ artists and public figures across Armenia, the United States, and international markets.",
};

const hoverLift =
  "hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(43,39,51,0.24)] hover:border-[#f97316] transition-all duration-300";

export default function AboutPage() {
  return (
    <div className="fade-up">
      <div style={{ textAlign: "center", padding: "72px 24px 56px" }}>
        <h1 className="text-[34px] md:text-[46px] lg:text-[60px]" style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, margin: "0 0 20px", color: "#2b2733", lineHeight: 1.08 }}>
          Our Story. Our Mission. <span style={{ color: "#f97316" }}>Our Impact.</span>
        </h1>
        <p style={{ fontSize: 18, color: "#57517a", maxWidth: 720, margin: "0 auto", lineHeight: 1.6 }}>
          Building digital growth through strategy, creativity, and a relentless focus on results.
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
            Founded in Armenia in 2015, TapTag has grown from a small team of digital marketers into a full-service digital marketing agency working across Armenia, the United States, and international markets.
          </p>
          <p style={{ fontSize: 16, color: "#57517a", lineHeight: 1.75, margin: "0 0 18px" }}>
            We help businesses, artists, and public figures turn digital opportunities into measurable growth. By combining strategic thinking, creative storytelling, data-driven marketing, and hands-on execution, we build digital strategies that connect brands and talent with the right audiences and turn attention into meaningful results.
          </p>
          <p style={{ fontSize: 16, color: "#57517a", lineHeight: 1.75, margin: "0 0 18px" }}>
            Over the years, we&rsquo;ve worked with 300+ businesses and 70+ artists and public figures, while contributing to the digital success of major projects across music, entertainment, sports, and culture — from Eurovision and Junior Eurovision to the European Boxing Championship, concerts, album releases, and major entertainment campaigns.
          </p>
          <p style={{ fontSize: 16, color: "#57517a", lineHeight: 1.75, margin: 0 }}>
            Today, TapTag operates at the intersection of strategy, creativity, technology, and performance, helping businesses and careers grow across borders.
          </p>
        </div>
      </div>

      <div style={{ background: "#faf9fd", padding: "64px 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 32, fontWeight: 700, margin: "0 0 12px", color: "#2b2733" }}>
          Meet Our <span style={{ color: "#f97316" }}>Team</span>
        </h2>
        <p style={{ fontSize: 16, color: "#57517a", margin: "0 0 48px" }}>The people behind the strategy, creativity, and results.</p>
        <TeamGrid />
      </div>

      <div style={{ padding: "64px 0", overflow: "hidden" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 14 }}>
            <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 32, fontWeight: 700, margin: "0 0 12px", color: "#2b2733" }}>
              Industry-Certified <span style={{ color: "#f97316" }}>Expertise</span>
            </h2>
            <p style={{ fontSize: 17, color: "#57517a", margin: "0 0 40px" }}>TapTag&rsquo;s Meta certifications, held by our founder and verified through Credly.</p>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 100, background: "linear-gradient(90deg,#FAFAF8,rgba(250,250,248,0))", zIndex: 2, pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 100, background: "linear-gradient(270deg,#FAFAF8,rgba(250,250,248,0))", zIndex: 2, pointerEvents: "none" }} />
          <div style={{ display: "flex", width: "max-content", animation: "partnerMarquee 130s linear infinite", padding: "12px 0" }}>
            {certsLoop.map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className={`${hoverLift} border-[#e5e2f0]`}
                style={{ flex: "0 0 auto", width: 220, marginRight: 24, background: "#fff", borderWidth: 1, borderStyle: "solid", borderRadius: 14, padding: "26px 24px 24px", display: "flex", flexDirection: "column" }}
              >
                {c.available && (
                  <Image src={c.src} alt={c.name} width={110} height={110} style={{ width: 110, height: 110, objectFit: "contain", margin: "6px auto 22px" }} />
                )}
                <h3 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 15, fontWeight: 700, margin: "0 0 6px", color: "#2b2733", lineHeight: 1.35 }}>{c.name}</h3>
                <p style={{ fontSize: 14, color: "#57517a", margin: "auto 0 0" }}>{c.issuer}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
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

      <CtaBanner heading={<>Ready to Grow <span style={{ color: "#ec4899" }}>With TapTag?</span></>} subtext="Let's talk about your goals and explore how we can turn your next opportunity into measurable growth." />
    </div>
  );
}

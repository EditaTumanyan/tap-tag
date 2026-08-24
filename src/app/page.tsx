import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import GlyphIcon from "@/components/GlyphIcon";
import CountUp from "@/components/CountUp";
import CtaBanner from "@/components/CtaBanner";
import { glyphs } from "@/data/glyphs";
import { featureBoxes, stats, reviews } from "@/data/content";

const gradientText = {
  background: "linear-gradient(90deg,#9333ea,#ec4899,#f97316)",
  WebkitBackgroundClip: "text" as const,
  backgroundClip: "text" as const,
  color: "transparent",
};

const primaryButton = {
  color: "#fff",
  border: "none",
  borderRadius: 6,
  fontFamily: "'Nunito',sans-serif",
  cursor: "pointer",
  textDecoration: "none",
  display: "inline-block",
  transition: "transform .18s,box-shadow .18s,background .18s",
} as const;

const hoverLift =
  "hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(21,18,63,0.28)] hover:border-[#f97316] transition-transform duration-300";
const cardBorder = { borderWidth: 1, borderStyle: "solid" } as const;

export default function Home() {
  return (
    <div className="fade-up">
      <div
        className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] items-center"
        style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 24px 56px", gap: 56 }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "linear-gradient(135deg,#9333ea,#f97316)" }} />
            <span style={{ fontFamily: "'Nunito',sans-serif", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8a7fb5", fontWeight: 600 }}>
              Digital Marketing Agency
            </span>
          </div>
          <h1
            className="text-[40px] md:text-[56px] lg:text-[68px]"
            style={{ fontFamily: "'Nunito',sans-serif", lineHeight: 1.06, fontWeight: 700, color: "#2b2733", margin: "0 0 26px" }}
          >
            From Bold Ideas to <span style={gradientText}>High-Performance</span> Digital Marketing Results
          </h1>
          <p style={{ fontSize: 18, color: "#57517a", lineHeight: 1.7, margin: "0 0 36px" }}>
            Since 2015, we&rsquo;ve been the strategic engine behind 100+ celebrities and 200+ global brands. As a full-service digital marketing agency, we thrive on the collaboration between the Armenian and US markets to scale your digital presence globally. We don&rsquo;t just manage social media marketing; we combine precision targeting with data-driven content strategies to fuel your growth and deliver real results with measurable ROI.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link
              href="/contact"
              className="bg-[#f97316] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(249,115,22,0.55)] hover:bg-[#ea580c]"
              style={{ ...primaryButton, padding: "16px 34px", fontWeight: 700, fontSize: 16 }}
            >
              Book a Free Call
            </Link>
            <Link
              href="/services"
              style={{
                background: "transparent",
                color: "#2b2733",
                border: "1px solid #e0d8ee",
                padding: "16px 32px",
                borderRadius: 6,
                fontFamily: "'Nunito',sans-serif",
                fontWeight: 600,
                fontSize: 16,
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Explore Services
            </Link>
          </div>
        </div>
        <div style={{ background: "linear-gradient(135deg,#9333ea,#ec4899,#f97316)", borderRadius: 18, padding: 14 }}>
          <ImageSlot src="/assets/hero-growth.jpg" alt="Growth chart illustration" placeholder="Hero image" style={{ width: "100%", aspectRatio: "4/5", borderRadius: 12 }} />
        </div>
      </div>

      <div style={{ height: 90, background: "linear-gradient(180deg,#e9d5ff,#FAFAF8)" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: "clamp(32px,5vw,48px)", fontWeight: 700, margin: "0 0 48px", color: "#2b2733", textAlign: "center" }}>
          What We <span style={gradientText}>Offer?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 28 }}>
          {featureBoxes.map((b) => (
            <div key={b.title} className={`${hoverLift} border-[#f2e9f3]`} style={{ background: "#fff", ...cardBorder, borderRadius: 14, padding: "38px 34px", textAlign: "center" }}>
              <div style={{ width: 60, height: 60, borderRadius: 14, background: "linear-gradient(135deg,#fce7f3,#f3e8ff)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                <GlyphIcon paths={glyphs[b.icon]} color="#ec4899" />
              </div>
              <h3 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#2b2733" }}>{b.title}</h3>
              <p style={{ fontSize: 15, color: "#57517a", lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "#faf9fd", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: "clamp(32px,5vw,48px)", fontWeight: 700, margin: "0 0 14px", color: "#2b2733", textAlign: "center" }}>
            Two audiences. One growth engine.
          </h2>
          <p style={{ fontSize: 16, color: "#57517a", textAlign: "center", margin: "0 0 40px" }}>Choose your path</p>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 28 }}>
            <Link
              href="/services?tab=business"
              className="bg-[#1b1738] hover:-translate-y-2 hover:shadow-[0_26px_56px_-22px_rgba(124,58,237,0.6)] hover:bg-[#241c50] transition-all duration-300"
              style={{ position: "relative", overflow: "hidden", cursor: "pointer", borderRadius: 14, padding: "44px 36px", textDecoration: "none", display: "block" }}
            >
              <div style={{ width: 64, height: 64, borderRadius: 16, background: "rgba(168,85,247,0.16)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2.5" y="7" width="19" height="13" rx="2.5" />
                  <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" />
                  <path d="M2.5 12h19" />
                </svg>
              </div>
              <h3 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 28, fontWeight: 700, color: "#fff", margin: "0 0 16px" }}>For Businesses</h3>
              <p style={{ fontSize: 16, color: "#c8c3dd", lineHeight: 1.65, margin: "0 0 28px", maxWidth: 440 }}>
                Performance marketing, brand strategy, and product development for companies ready to scale online.
              </p>
              <span style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 15, color: "#fff" }}>View business services →</span>
            </Link>
            <Link
              href="/services?tab=artist"
              className="hover:-translate-y-2 hover:shadow-[0_26px_56px_-22px_rgba(192,38,211,0.65)] transition-all duration-300"
              style={{
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                background: "linear-gradient(125deg,#7c3aed,#c026d3 42%,#ec4899 70%,#f97316)",
                borderRadius: 14,
                padding: "44px 36px",
                textDecoration: "none",
                display: "block",
              }}
            >
              <div style={{ width: 64, height: 64, borderRadius: 16, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="2.5" width="6" height="11" rx="3" />
                  <path d="M5.5 11.5a6.5 6.5 0 0013 0" />
                  <path d="M12 18v3.5" />
                  <path d="M8.5 21.5h7" />
                </svg>
              </div>
              <h3 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 28, fontWeight: 700, color: "#fff", margin: "0 0 16px" }}>For Artists & Celebrities</h3>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.9)", lineHeight: 1.65, margin: "0 0 28px", maxWidth: 440 }}>
                Global brand strategy, content direction, and rights management for the industry&rsquo;s most influential voices.
              </p>
              <span style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 15, color: "#fff" }}>View artist services →</span>
            </Link>
          </div>
        </div>
      </div>

      <div style={{ padding: "72px 24px", background: "linear-gradient(180deg,#FAFAF8,#fdf6f0)" }}>
        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ maxWidth: 1180, margin: "0 auto", gap: 24 }}>
          {stats.map((st) => (
            <div key={st.label} className={`${hoverLift} border-[#f4e9e0]`} style={{ position: "relative", textAlign: "center", background: "#fff", ...cardBorder, borderRadius: 18, padding: "32px 20px 28px", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: "0 0 auto 0", height: 4, background: "linear-gradient(90deg,#9333ea,#ec4899,#f97316)" }} />
              <CountUp
                target={st.raw}
                final={st.value}
                style={{ fontFamily: "'Nunito',sans-serif", fontSize: 44, fontWeight: 700, ...gradientText, lineHeight: 1, letterSpacing: "-0.02em" }}
              />
              <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 20, fontWeight: 800, color: "#2b2733", marginTop: 6 }}>{st.unit}</div>
              <div style={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9b93ab", fontWeight: 700, marginTop: 10, lineHeight: 1.5 }}>{st.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "72px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: "clamp(32px,5vw,48px)", fontWeight: 700, margin: "0 0 14px", color: "#2b2733", textAlign: "center" }}>
            What Our Clients <span style={gradientText}>Say About Us</span>
          </h2>
          <p style={{ fontSize: 16, color: "#8a84a8", textAlign: "center", margin: "0 0 40px" }}>Brands and artists we&rsquo;ve scaled since 2015.</p>
        </div>
        <div style={{ display: "flex", gap: 28, overflowX: "auto", overflowY: "hidden", scrollSnapType: "x mandatory", padding: "10px 24px 24px" }}>
          {reviews.map((rv) => (
            <div
              key={rv.slot}
              className={`${hoverLift} border-[#f2e9f3]`}
              style={{ flex: "0 0 320px", scrollSnapAlign: "start", background: "#fff", ...cardBorder, borderRadius: 14, padding: "34px 30px", textAlign: "center" }}
            >
              <ImageSlot placeholder="Photo" style={{ width: 72, height: 72, margin: "0 auto 20px", border: "3px solid #fce7f3", borderRadius: "50%", background: "#fdf2f8" }} />
              <div style={{ color: "#ec4899", fontSize: 15, letterSpacing: 3, marginBottom: 18 }}>★★★★★</div>
              <p style={{ fontSize: 15, color: "#57517a", lineHeight: 1.7, margin: "0 0 22px", fontStyle: "italic" }}>{rv.quote}</p>
              <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 16, fontWeight: 700, color: "#2b2733" }}>{rv.name}</div>
              <div style={{ fontSize: 14, color: "#8a84a8", marginTop: 4 }}>{rv.role}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 4 }}>
          {reviews.map((rv) => (
            <span key={rv.slot} style={{ width: 8, height: 8, borderRadius: "50%", background: "#f2ddcb" }} />
          ))}
        </div>
      </div>

      <CtaBanner heading="Ready to grow, get discovered, or get paid what you're owed?" buttonLabel="Start the Conversation" />
    </div>
  );
}

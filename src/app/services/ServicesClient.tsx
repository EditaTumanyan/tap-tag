"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import ImageSlot from "@/components/ImageSlot";
import GlyphIcon from "@/components/GlyphIcon";
import CtaBanner from "@/components/CtaBanner";
import { glyphs, bizGlyphs, artistGlyphs } from "@/data/glyphs";
import { businessServices, artistServices, consultingItems, type ServiceItem } from "@/data/content";

const gradientText = {
  background: "linear-gradient(90deg,#9333ea,#ec4899,#f97316)",
  WebkitBackgroundClip: "text" as const,
  backgroundClip: "text" as const,
  color: "transparent",
};

const artistGradientText = {
  background: "linear-gradient(120deg,#7c3aed,#c026d3,#ec4899)",
  WebkitBackgroundClip: "text" as const,
  backgroundClip: "text" as const,
  color: "transparent",
};

const hoverLift =
  "hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(21,18,63,0.28)] transition-transform duration-300";

type Tab = "business" | "artist" | "consulting";
type OpenSvc = { audience: "business" | "artist"; item: ServiceItem } | null;

const validTabs: Tab[] = ["business", "artist", "consulting"];

const emptySubscribe = () => () => {};
function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export default function ServicesClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const initialTab: Tab = validTabs.includes(tabParam as Tab) ? (tabParam as Tab) : "business";
  const [tab, setTab] = useState<Tab>(initialTab);
  const [openSvc, setOpenSvc] = useState<OpenSvc>(null);
  const mounted = useIsMounted();

  const [prevTabParam, setPrevTabParam] = useState(tabParam);
  if (tabParam !== prevTabParam) {
    setPrevTabParam(tabParam);
    setTab(validTabs.includes(tabParam as Tab) ? (tabParam as Tab) : "business");
  }

  useEffect(() => {
    if (!openSvc) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [openSvc]);

  const accent = openSvc?.audience === "business" ? "#7c3aed" : "#ec4899";
  const headerBg = openSvc?.audience === "business" ? "linear-gradient(120deg,#ede9fe,#f3e8ff)" : "linear-gradient(120deg,#fde8d7,#fce7f3)";

  return (
    <div className="fade-up">
      <div
        className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] items-center"
        style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px 56px", gap: 56 }}
      >
        <div>
          <h1 className="text-[36px] md:text-[50px] lg:text-[66px]" style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, margin: "0 0 24px", color: "#2b2733", lineHeight: 1.06 }}>
            Our Full Spectrum of <span style={gradientText}>Digital Services</span>
          </h1>
          <p style={{ fontSize: 17, color: "#57517a", lineHeight: 1.7, margin: "0 0 32px", maxWidth: 520 }}>
            From strategic planning to execution and growth, we provide comprehensive digital marketing solutions tailored to transform your brand&rsquo;s online presence and drive measurable results.
          </p>
          <span style={{ fontSize: 16, color: "#57517a" }}>100+ celebrities and 200+ brands since 2015</span>
        </div>
        <ImageSlot src="/assets/services-hero.jpg" alt="Digital marketing dashboard and social platforms" placeholder="Services hero image" style={{ width: "100%", aspectRatio: "16/10", borderRadius: 14 }} />
      </div>

      <div style={{ height: 90, background: "linear-gradient(180deg,#e9d5ff,#FAFAF8)" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 48, overflowX: "auto" }}>
          <div style={{ display: "inline-flex", background: "#f4f2f9", borderRadius: 999, padding: 6 }}>
            <button
              onClick={() => setTab("business")}
              style={{
                padding: "12px 22px",
                borderRadius: 999,
                border: "none",
                fontFamily: "'Nunito',sans-serif",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                whiteSpace: "nowrap",
                background: tab === "business" ? "linear-gradient(135deg,#5b3fa8,#7c3aed)" : "transparent",
                color: tab === "business" ? "#fff" : "#57517a",
              }}
            >
              For Businesses
            </button>
            <button
              onClick={() => setTab("artist")}
              style={{
                padding: "12px 22px",
                borderRadius: 999,
                border: "none",
                fontFamily: "'Nunito',sans-serif",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                whiteSpace: "nowrap",
                background: tab === "artist" ? "linear-gradient(125deg,#7c3aed,#c026d3 45%,#ec4899 72%,#f97316)" : "transparent",
                color: tab === "artist" ? "#fff" : "#57517a",
              }}
            >
              For Artists &amp; Celebrities
            </button>
            <button
              onClick={() => setTab("consulting")}
              style={{
                padding: "12px 22px",
                borderRadius: 999,
                border: "none",
                fontFamily: "'Nunito',sans-serif",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                whiteSpace: "nowrap",
                background: tab === "consulting" ? "#f97316" : "transparent",
                color: tab === "consulting" ? "#fff" : "#57517a",
              }}
            >
              Strategic Consulting
            </button>
          </div>
        </div>

        {tab === "business" && (
          <div>
            <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, margin: "0 0 16px", color: "#2b2733", textAlign: "center" }}>
              Strategy &amp; <span style={{ color: "#6d28d9" }}>Execution</span>
            </h2>
            <p style={{ fontSize: 17, color: "#57517a", lineHeight: 1.7, margin: "0 auto 48px", textAlign: "center", maxWidth: 860 }}>
              TapTag provides the data-driven engine your business needs to scale. From strategy to execution, our solutions deliver measurable ROI across Armenian and US markets. We help businesses leverage social media, search engines, app stores, and digital platforms to reach the right audience, convert prospects, and grow revenue sustainably.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 28 }}>
              {businessServices.map((s, i) => (
                <div key={s.num} className={`${hoverLift} bg-white border-[#e7e4f2] hover:border-[#7c3aed]`} style={{ borderWidth: 1, borderStyle: "solid", borderRadius: 14, padding: 32, display: "flex", flexDirection: "column" }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: "#f0ebfd", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                    <GlyphIcon paths={glyphs[bizGlyphs[i]]} color="#7c3aed" />
                  </div>
                  <h3 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 21, fontWeight: 700, margin: "0 0 12px", color: "#2b2733" }}>{s.title}</h3>
                  <p style={{ fontSize: 16, color: "#57517a", lineHeight: 1.65, margin: "0 0 24px" }}>{s.desc}</p>
                  <button
                    onClick={() => setOpenSvc({ audience: "business", item: s })}
                    className="bg-transparent text-[#2b2733] border-[#ddd8f0] hover:bg-[#f4f1fd] hover:border-[#7c3aed] hover:text-[#6d28d9]"
                    style={{ marginTop: "auto", borderWidth: 1, borderStyle: "solid", padding: "13px 20px", borderRadius: 8, fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 15, cursor: "pointer", width: "100%", transition: "background .2s,border-color .2s,color .2s" }}
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "artist" && (
          <div>
            <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, margin: "0 0 16px", color: "#2b2733", textAlign: "center" }}>
              Reach &amp; <span style={artistGradientText}>Growth</span>
            </h2>
            <p style={{ fontSize: 17, color: "#57517a", lineHeight: 1.7, margin: "0 auto 48px", textAlign: "center", maxWidth: 880 }}>
              TapTag is a global digital marketing agency specializing in music marketing, artist branding, and creator growth. We help musicians, singers, and public figures grow their audience, monetize their content, and build long-term influence across Spotify, YouTube, TikTok, Instagram, and major music platforms. By combining creative direction with data-driven promotion, we turn talent into a scalable digital business in Armenian, US, and international markets.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 28 }}>
              {artistServices.map((s, i) => (
                <div key={s.num} className={`${hoverLift} bg-white border-[#f7ece2] hover:border-[#f97316]`} style={{ borderWidth: 1, borderStyle: "solid", borderRadius: 14, padding: 32, display: "flex", flexDirection: "column" }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: "linear-gradient(135deg,#fee9d6,#fde2e9)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                    <GlyphIcon paths={glyphs[artistGlyphs[i]]} color="#f97316" />
                  </div>
                  <h3 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 21, fontWeight: 700, margin: "0 0 12px", color: "#2b2733" }}>{s.title}</h3>
                  <p style={{ fontSize: 16, color: "#57517a", lineHeight: 1.65, margin: "0 0 24px" }}>{s.desc}</p>
                  <button
                    onClick={() => setOpenSvc({ audience: "artist", item: s })}
                    className="bg-transparent text-[#2b2733] border-[#f7ddc6] hover:bg-[#fff7ed] hover:border-[#f97316] hover:text-[#c2410c]"
                    style={{ marginTop: "auto", borderWidth: 1, borderStyle: "solid", padding: "13px 20px", borderRadius: 8, fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 15, cursor: "pointer", width: "100%", transition: "background .2s,border-color .2s,color .2s" }}
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "consulting" && (
          <div>
            <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, margin: "0 0 16px", color: "#2b2733", textAlign: "center" }}>
              Strategic <span style={{ color: "#f97316" }}>Consulting</span>
            </h2>
            <p style={{ fontSize: 17, color: "#57517a", lineHeight: 1.6, margin: "0 auto 48px", textAlign: "center", maxWidth: 680 }}>
              For founders, executives, and artists who need clarity, direction, and high-level strategy — not just execution.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 24 }}>
              {consultingItems.map((label) => (
                <div key={label} className={`${hoverLift} bg-white border-[#f7ece2] hover:border-[#f97316]`} style={{ display: "flex", alignItems: "center", gap: 16, borderWidth: 1, borderStyle: "solid", borderRadius: 14, padding: "24px 26px" }}>
                  <span style={{ width: 32, height: 32, flexShrink: 0, borderRadius: "50%", background: "linear-gradient(135deg,#fee9d6,#fde2e9)", color: "#f97316", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>✓</span>
                  <span style={{ fontSize: 17, color: "#2b2733", fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <CtaBanner heading={<>Ready to Start? <span style={{ color: "#ec4899" }}>Talk to Our Team</span></>} subtext="Let's discuss how we can scale your digital presence and hit your growth goals." />

      {mounted && openSvc && createPortal(
        <div
          onClick={() => setOpenSvc(null)}
          className="fade-up"
          style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(43,39,51,0.55)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", borderRadius: 20, maxWidth: 680, width: "100%", maxHeight: "86vh", overflowY: "auto", boxShadow: "0 40px 90px -30px rgba(43,39,51,0.55)" }}>
            <div style={{ background: headerBg, padding: "36px 32px 30px", position: "relative" }}>
              <button
                onClick={() => setOpenSvc(null)}
                aria-label="Close"
                className="bg-white/75 hover:bg-white"
                style={{ position: "absolute", top: 20, right: 22, width: 36, height: 36, border: "none", borderRadius: "50%", color: "#2b2733", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, cursor: "pointer", transition: "background .2s" }}
              >
                ×
              </button>
              <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: accent, fontWeight: 700, marginBottom: 12 }}>
                {openSvc.audience === "business" ? "For Businesses" : "For Artists & Celebrities"}
              </div>
              <h3 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 30, fontWeight: 700, color: "#2b2733", margin: 0, lineHeight: 1.15 }}>{openSvc.item.title}</h3>
            </div>
            <div style={{ padding: "32px 32px 36px" }}>
              <p style={{ fontSize: 17, color: "#57517a", lineHeight: 1.7, margin: "0 0 26px" }}>{openSvc.item.long}</p>
              <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9b93ab", fontWeight: 700, marginBottom: 16 }}>What&rsquo;s included</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
                {openSvc.item.points.map((p) => (
                  <div key={p} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ width: 26, height: 26, flexShrink: 0, borderRadius: "50%", background: "#f6f4fb", color: accent, fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>✓</span>
                    <span style={{ fontSize: 16, color: "#2b2733", lineHeight: 1.6 }}>{p}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  setOpenSvc(null);
                  router.push("/contact");
                }}
                className="hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: accent, color: "#fff", border: "none", padding: "16px 32px", borderRadius: 8, fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 16, cursor: "pointer", width: "100%", transition: "opacity .2s,transform .18s" }}
              >
                Talk to us about this
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

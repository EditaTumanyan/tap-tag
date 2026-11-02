"use client";

import Link from "next/link";
import { useState } from "react";
import ImageSlot from "@/components/ImageSlot";
import GlyphIcon from "@/components/GlyphIcon";
import CtaBanner from "@/components/CtaBanner";
import { glyphs, bizGlyphs, artistGlyphs } from "@/data/glyphs";
import { businessServices, artistServices, consultingItems } from "@/data/content";

const gradientText = {
  background: "linear-gradient(90deg,#5e3f90,#973e8f,#e56a78)",
  WebkitBackgroundClip: "text" as const,
  backgroundClip: "text" as const,
  color: "transparent",
};

const artistGradientText = {
  background: "linear-gradient(120deg,#765098,#973e8f,#973e8f)",
  WebkitBackgroundClip: "text" as const,
  backgroundClip: "text" as const,
  color: "transparent",
};

const hoverLift =
  "hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(21,18,63,0.28)] transition-transform duration-300";

type Tab = "business" | "artist" | "consulting";

const validTabs: Tab[] = ["business", "artist", "consulting"];

export default function ServicesClient({ tabParam }: { tabParam: string | null }) {
  const initialTab: Tab = validTabs.includes(tabParam as Tab) ? (tabParam as Tab) : "business";
  const [tab, setTab] = useState<Tab>(initialTab);

  const [prevTabParam, setPrevTabParam] = useState(tabParam);
  if (tabParam !== prevTabParam) {
    setPrevTabParam(tabParam);
    setTab(validTabs.includes(tabParam as Tab) ? (tabParam as Tab) : "business");
  }


  return (
    <div className="fade-up">
      <div
        className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] items-center"
        style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px 56px", gap: 56 }}
      >
        <div>
          <h1 className="text-[36px] md:text-[50px] lg:text-[66px]" style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, margin: "0 0 24px", color: "#2b2733", lineHeight: 1.06 }}>
            Digital Marketing Services <span style={gradientText}>Built for Growth</span>
          </h1>
          <p style={{ fontSize: 17, color: "#57517a", lineHeight: 1.7, margin: "0 0 20px", maxWidth: 520 }}>
            With over a decade of experience, TapTag combines creative thinking, strategic expertise, and technical execution to help brands grow in an increasingly digital world. From strategy and content to performance marketing, development, and analytics, we build integrated solutions designed around your goals, audience, and market.
          </p>
          <p style={{ fontSize: 17, color: "#57517a", lineHeight: 1.7, margin: "0 0 32px", maxWidth: 520 }}>
            Whether you&rsquo;re a business looking to scale or an artist or public figure building influence, our services are designed to turn digital presence into measurable results.
          </p>
        </div>
        <ImageSlot src="/assets/services-hero.jpg" alt="Digital marketing dashboard and social platforms" placeholder="Services hero image" style={{ width: "100%", aspectRatio: "16/10", borderRadius: 14 }} />
      </div>

      <div style={{ height: 90, background: "linear-gradient(180deg,#e9d5ff,#FAFAF8)" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: "clamp(26px,3.4vw,38px)", fontWeight: 700, margin: "0 0 32px", color: "#2b2733", textAlign: "center" }}>
          Explore Our Services
        </h2>
        {/* Desktop pill tabs */}
        <div className="hidden md:flex" style={{ justifyContent: "center", marginBottom: 48 }}>
          <div style={{ display: "inline-flex", background: "#f4f2f9", borderRadius: 999, padding: 6 }}>
            <button
              onClick={() => setTab("business")}
              style={{
                padding: "12px 22px", borderRadius: 999, border: "none",
                fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 15, cursor: "pointer", whiteSpace: "nowrap",
                background: tab === "business" ? "linear-gradient(135deg,#4a3278,#765098)" : "transparent",
                color: tab === "business" ? "#fff" : "#57517a",
              }}
            >
              For Businesses &amp; Brands
            </button>
            <button
              onClick={() => setTab("artist")}
              style={{
                padding: "12px 22px", borderRadius: 999, border: "none",
                fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 15, cursor: "pointer", whiteSpace: "nowrap",
                background: tab === "artist" ? "linear-gradient(125deg,#765098,#973e8f 45%,#973e8f 72%,#e56a78)" : "transparent",
                color: tab === "artist" ? "#fff" : "#57517a",
              }}
            >
              For Artists &amp; Public Figures
            </button>
            <button
              onClick={() => setTab("consulting")}
              style={{
                padding: "12px 22px", borderRadius: 999, border: "none",
                fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 15, cursor: "pointer", whiteSpace: "nowrap",
                background: tab === "consulting" ? "#e56a78" : "transparent",
                color: tab === "consulting" ? "#fff" : "#57517a",
              }}
            >
              Strategic Consulting
            </button>
          </div>
        </div>

        {/* Mobile stacked tab cards */}
        <div className="flex md:hidden" style={{ flexDirection: "column", gap: 12, marginBottom: 36 }}>
          {[
            { key: "business" as Tab, label: "For Businesses & Brands", sub: "Strategy, ads, content, SEO & more", gradient: "linear-gradient(135deg,#4a3278,#765098)", dot: "#765098" },
            { key: "artist" as Tab, label: "For Artists & Public Figures", sub: "Brand building, fanbase growth & PR", gradient: "linear-gradient(125deg,#765098,#973e8f,#e56a78)", dot: "#973e8f" },
            { key: "consulting" as Tab, label: "Strategic Consulting", sub: "1-on-1 guidance & digital audits", gradient: "#e56a78", dot: "#e56a78" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              style={{
                width: "100%",
                background: tab === t.key ? t.gradient : "#fff",
                border: `2px solid ${tab === t.key ? "transparent" : "#e8e4f2"}`,
                borderRadius: 16,
                padding: "18px 20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 14,
                textAlign: "left",
                transition: "all 0.2s ease",
                boxShadow: tab === t.key ? "0 8px 24px -8px rgba(94,63,144,0.35)" : "none",
              }}
            >
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: tab === t.key ? "#fff" : t.dot, flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 15, color: tab === t.key ? "#fff" : "#2b2733", marginBottom: 2 }}>{t.label}</div>
                <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 13, color: tab === t.key ? "rgba(255,255,255,0.8)" : "#8a84a8" }}>{t.sub}</div>
              </div>
              <div style={{ marginLeft: "auto", fontFamily: "'Nunito',sans-serif", fontSize: 18, color: tab === t.key ? "#fff" : "#c4bedd" }}>›</div>
            </button>
          ))}
        </div>

        {tab === "business" && (
          <div>
            <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, margin: "0 0 16px", color: "#2b2733", textAlign: "center" }}>
              Digital Solutions for <span style={{ color: "#5e3f90" }}>Businesses &amp; Brands</span>
            </h2>
            <p style={{ fontSize: 17, color: "#57517a", lineHeight: 1.7, margin: "0 auto 48px", textAlign: "center", maxWidth: 860 }}>
              TapTag provides the strategy, creativity, and technology businesses need to grow. From market research and targeted advertising to content, SEO, social media, development, and analytics, our solutions are designed to connect your brand with the right audience, drive measurable results, and create lasting business impact.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 28 }}>
              {businessServices.map((s, i) => (
                <div key={s.num} className={`${hoverLift} bg-white border-[#e7e4f2] hover:border-[#765098]`} style={{ borderWidth: 1, borderStyle: "solid", borderRadius: 14, padding: 32, display: "flex", flexDirection: "column" }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: "#f0ebfd", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                    <GlyphIcon paths={glyphs[bizGlyphs[i]]} color="#765098" />
                  </div>
                  <h3 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 21, fontWeight: 700, margin: "0 0 12px", color: "#2b2733" }}>
                    <Link href={`/services/${s.slug}`} style={{ color: "inherit", textDecoration: "none" }}>{s.title}</Link>
                  </h3>
                  <p style={{ fontSize: 16, color: "#57517a", lineHeight: 1.65, margin: "0 0 24px" }}>{s.desc}</p>
                  <Link
                    href={`/services/${s.slug}`}
                    aria-label={`Learn more about ${s.title}`}
                    className="bg-transparent text-[#2b2733] border-[#ddd8f0] hover:bg-[#f4f1fd] hover:border-[#765098] hover:text-[#5e3f90]"
                    style={{ marginTop: "auto", borderWidth: 1, borderStyle: "solid", padding: "13px 20px", borderRadius: 8, fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 15, cursor: "pointer", width: "100%", textAlign: "center", textDecoration: "none", transition: "background .2s,border-color .2s,color .2s" }}
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "artist" && (
          <div>
            <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, margin: "0 0 16px", color: "#2b2733", textAlign: "center" }}>
              Digital Solutions for <span style={artistGradientText}>Artists &amp; Public Figures</span>
            </h2>
            <p style={{ fontSize: 17, color: "#57517a", lineHeight: 1.7, margin: "0 auto 48px", textAlign: "center", maxWidth: 880 }}>
              TapTag is a digital marketing agency specializing in music marketing, artist branding, and creator growth. We help musicians, singers, and public figures grow their audiences, monetize their work, and build lasting influence across Spotify, YouTube, TikTok, Instagram, and major digital platforms. By combining creative direction, strategic marketing, and data-driven insights, we turn talent and influence into sustainable digital growth across Armenian, US, and international markets.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 28 }}>
              {artistServices.map((s, i) => (
                <div key={s.num} className={`${hoverLift} bg-white border-[#f7ece2] hover:border-[#e56a78]`} style={{ borderWidth: 1, borderStyle: "solid", borderRadius: 14, padding: 32, display: "flex", flexDirection: "column" }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: "linear-gradient(135deg,#fde9eb,#f5e0f2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                    <GlyphIcon paths={glyphs[artistGlyphs[i]]} color="#e56a78" />
                  </div>
                  <h3 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 21, fontWeight: 700, margin: "0 0 12px", color: "#2b2733" }}>
                    <Link href={`/services/${s.slug}`} style={{ color: "inherit", textDecoration: "none" }}>{s.title}</Link>
                  </h3>
                  <p style={{ fontSize: 16, color: "#57517a", lineHeight: 1.65, margin: "0 0 24px" }}>{s.desc}</p>
                  <Link
                    href={`/services/${s.slug}`}
                    aria-label={`Learn more about ${s.title}`}
                    className="bg-transparent text-[#2b2733] border-[#f7d8db] hover:bg-[#fef0f2] hover:border-[#e56a78] hover:text-[#b8435a]"
                    style={{ marginTop: "auto", borderWidth: 1, borderStyle: "solid", padding: "13px 20px", borderRadius: 8, fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 15, cursor: "pointer", width: "100%", textAlign: "center", textDecoration: "none", transition: "background .2s,border-color .2s,color .2s" }}
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "consulting" && (
          <div>
            <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, margin: "0 0 16px", color: "#2b2733", textAlign: "center" }}>
              Strategic <span style={{ color: "#e56a78" }}>Consulting</span>
            </h2>
            <p style={{ fontSize: 17, color: "#57517a", lineHeight: 1.6, margin: "0 auto 48px", textAlign: "center", maxWidth: 680 }}>
              For founders, executives, and artists who need clarity, direction, and high-level strategy — not just execution.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 24 }}>
              {consultingItems.map((label) => (
                <div key={label} className={`${hoverLift} bg-white border-[#f7ece2] hover:border-[#e56a78]`} style={{ display: "flex", alignItems: "center", gap: 16, borderWidth: 1, borderStyle: "solid", borderRadius: 14, padding: "24px 26px" }}>
                  <span style={{ width: 32, height: 32, flexShrink: 0, borderRadius: "50%", background: "linear-gradient(135deg,#fde9eb,#f5e0f2)", color: "#e56a78", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>✓</span>
                  <span style={{ fontSize: 17, color: "#2b2733", fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <CtaBanner heading={<>Ready to take your digital presence to the <span style={{ color: "#973e8f" }}>next level?</span></>} buttonLabel="Start the conversation" />

    </div>
  );
}

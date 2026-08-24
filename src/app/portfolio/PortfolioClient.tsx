"use client";

import { useState } from "react";
import ImageSlot from "@/components/ImageSlot";
import CtaBanner from "@/components/CtaBanner";
import { pfCategories, pfProjects } from "@/data/content";

const hoverLift =
  "hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(43,39,51,0.28)] hover:border-[#f97316] transition-all duration-300";

function initialsOf(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0].toUpperCase())
    .join("");
}

export default function PortfolioClient() {
  const [filter, setFilter] = useState("All");
  const projects = filter === "All" ? pfProjects : pfProjects.filter((p) => p.cat === filter);

  return (
    <div className="fade-up">
      <div style={{ textAlign: "center", padding: "72px 24px 56px" }}>
        <h1 className="text-[38px] md:text-[54px] lg:text-[68px]" style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, margin: "0 0 20px", color: "#2b2733", lineHeight: 1.08 }}>
          Work That <span style={{ color: "#f97316" }}>Moved the Numbers</span>
        </h1>
        <p style={{ fontSize: 18, color: "#57517a", maxWidth: 700, margin: "0 auto", lineHeight: 1.6 }}>
          Campaigns, launches and platforms we&rsquo;ve built for brands and artists across the Armenian and US markets.
        </p>
      </div>

      <div style={{ height: 90, background: "linear-gradient(180deg,#e9d5ff,#FAFAF8)" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 48 }}>
          {pfCategories.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`hover:border-[#f97316] hover:text-[#c2410c] ${
                  active ? "bg-[#f97316] text-white border-[#f97316]" : "bg-transparent text-[#57517a] border-[#f2ddcb]"
                }`}
                style={{
                  padding: "10px 20px",
                  borderRadius: 999,
                  fontFamily: "'Nunito',sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  cursor: "pointer",
                  borderWidth: 1,
                  borderStyle: "solid",
                  transition: "background .2s,color .2s,border-color .2s",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 28 }}>
          {projects.map((p) => (
            <div key={p.slot} className={`${hoverLift} border-[#f7ece2]`} style={{ background: "#fff", borderWidth: 1, borderStyle: "solid", borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", background: "linear-gradient(135deg,#9333ea,#ec4899,#f97316)" }}>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-start", justifyContent: "flex-start", padding: "18px 22px", fontFamily: "'Nunito',sans-serif", fontSize: 32, fontWeight: 700, color: "rgba(255,255,255,0.55)", letterSpacing: "-0.02em", zIndex: 1 }}>
                  {initialsOf(p.name)}
                </div>
                <ImageSlot placeholder="Project image" style={{ width: "100%", aspectRatio: "16/10", position: "relative", color: "#fff" }} />
              </div>
              <div style={{ padding: "26px 28px 28px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 14 }}>
                  <span style={{ background: "linear-gradient(135deg,#fee9d6,#fde2e9)", color: "#c2410c", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", padding: "6px 12px", borderRadius: 999, fontFamily: "'Nunito',sans-serif" }}>
                    {p.cat}
                  </span>
                  <span style={{ fontSize: 13, color: "#a9a2b8" }}>{p.tag}</span>
                </div>
                <h3 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 21, fontWeight: 700, margin: "0 0 10px", color: "#2b2733" }}>{p.name}</h3>
                <p style={{ fontSize: 15, color: "#57517a", lineHeight: 1.6, margin: "0 0 22px" }}>{p.desc}</p>
                <div className="grid grid-cols-3" style={{ gap: 16, marginTop: "auto", paddingTop: 20, borderTop: "1px solid #f6ece4" }}>
                  {p.metrics.map((m) => (
                    <div key={m.l}>
                      <div
                        style={{
                          fontFamily: "'Nunito',sans-serif",
                          fontSize: 22,
                          fontWeight: 700,
                          background: "linear-gradient(120deg,#ec4899,#f97316)",
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: "transparent",
                          lineHeight: 1,
                        }}
                      >
                        {m.v}
                      </div>
                      <div style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#a9a2b8", fontWeight: 600, marginTop: 8 }}>{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CtaBanner
        heading={<>Want results like these? <span style={{ color: "#ec4899" }}>Let&rsquo;s talk.</span></>}
        subtext="Tell us where you are now and where you want to be in twelve months."
      />
    </div>
  );
}

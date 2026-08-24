"use client";

import { useState } from "react";
import Link from "next/link";
import GlyphIcon from "@/components/GlyphIcon";
import CtaBanner from "@/components/CtaBanner";
import { coursePaths } from "@/data/glyphs";
import { courses, standards, addons, faqs, courseAccents } from "@/data/content";

const hoverLift =
  "hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(21,18,63,0.28)] hover:border-[#f97316] transition-all duration-300";

export default function CoursesClient() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="fade-up">
      <div style={{ textAlign: "center", padding: "72px 24px 56px" }}>
        <h1 className="text-[38px] md:text-[54px] lg:text-[68px]" style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, margin: "0 0 20px", color: "#2b2733", lineHeight: 1.08 }}>
          Choose Your <span style={{ color: "#f97316" }}>Professional Pathway</span>
        </h1>
        <p style={{ fontSize: 18, color: "#57517a", maxWidth: 680, margin: "0 auto", lineHeight: 1.6 }}>
          Three tracks. Pick the one that matches where you&rsquo;re headed.
        </p>
      </div>

      <div style={{ height: 90, background: "linear-gradient(180deg,#e9d5ff,#FAFAF8)" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 72px" }}>
        <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, margin: "0 0 28px", color: "#2b2733", textAlign: "center" }}>
          Course <span style={{ color: "#f97316" }}>Catalog</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ background: "#1b1738", borderRadius: 16, padding: "32px 32px", marginBottom: 48, gap: 28 }}>
          {standards.map((std) => (
            <div key={std.label} style={{ display: "flex", alignItems: "flex-start", gap: 14, borderLeft: "2px solid rgba(249,115,22,0.55)", paddingLeft: 16 }}>
              <div>
                <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 16, fontWeight: 700, color: "#fff", lineHeight: 1.3, marginBottom: 6 }}>{std.label}</div>
                <div style={{ fontSize: 13, color: "#a9a2c4", lineHeight: 1.5 }}>{std.detail}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: 28 }}>
          {courses.map((c) => {
            const isExpanded = expanded === c.num;
            const accent = courseAccents[c.num];
            return (
              <div key={c.num} className={`${hoverLift} border-[#ecebf5]`} style={{ borderWidth: 1, borderStyle: "solid", borderRadius: 12, overflow: "hidden", background: "#fff", display: "flex", flexDirection: "column" }}>
                <div style={{ background: "#f4f4f6", padding: "44px 28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <GlyphIcon paths={coursePaths[c.num]} color={accent.accent} size={56} strokeWidth={1.5} />
                </div>
                <div style={{ padding: "24px 28px 28px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 16 }}>
                    <span style={{ background: accent.accent, color: "#fff", fontSize: 13, fontWeight: 700, padding: "6px 14px", borderRadius: 999, fontFamily: "'Nunito',sans-serif" }}>{c.price}</span>
                    <span style={{ fontSize: 14, color: "#8a84a8" }}>{c.duration}</span>
                  </div>
                  <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: accent.accent, fontWeight: 700, marginBottom: 8 }}>
                    {c.audience} · {c.levels.length} levels
                  </div>
                  <h3 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 21, fontWeight: 700, margin: "0 0 12px", color: "#2b2733" }}>{c.name}</h3>
                  <p style={{ fontSize: 15, color: "#57517a", lineHeight: 1.6, margin: "0 0 22px" }}>{c.desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: "auto" }}>
                    <Link
                      href="/contact"
                      className="hover:-translate-y-0.5 hover:opacity-90"
                      style={{ background: accent.accent, color: "#fff", border: "none", padding: "14px 22px", borderRadius: 6, fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 15, cursor: "pointer", width: "100%", textAlign: "center", textDecoration: "none", display: "block", transition: "transform .18s,box-shadow .18s,opacity .18s" }}
                    >
                      {c.cta}
                    </Link>
                    <button
                      onClick={() => setExpanded(isExpanded ? null : c.num)}
                      className="border-[#e3e0ee] text-[#57517a] hover:border-[#f97316] hover:text-[#f97316]"
                      style={{ background: isExpanded ? accent.panel : "transparent", borderWidth: 1, borderStyle: "solid", padding: "12px 22px", borderRadius: 6, fontFamily: "'Nunito',sans-serif", fontWeight: 600, fontSize: 14, cursor: "pointer", width: "100%", transition: "background .2s,border-color .2s,color .2s" }}
                    >
                      {isExpanded ? "Hide curriculum" : "View curriculum"}
                    </button>
                  </div>
                </div>
                {isExpanded && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 16, borderTop: "1px solid #ecebf5", padding: "24px 28px 28px", background: "#fafafc" }}>
                    {c.levels.map((lvl) => (
                      <div key={lvl.title}>
                        <h4 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 16, fontWeight: 700, margin: "0 0 6px", color: "#2b2733" }}>{lvl.title}</h4>
                        <p style={{ fontSize: 14, color: accent.accent, margin: "0 0 12px" }}>{lvl.goal}</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                          {lvl.bullets.map((b) => (
                            <p key={b} style={{ fontSize: 14, color: "#57517a", lineHeight: 1.55, margin: 0 }}>
                              — {b}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ background: "#faf9fd", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: "clamp(26px,4vw,36px)", fontWeight: 700, margin: "0 0 12px", color: "#2b2733", textAlign: "center" }}>
            Strategic <span style={{ color: "#f97316" }}>Add-ons</span>
          </h2>
          <p style={{ fontSize: 16, color: "#57517a", textAlign: "center", margin: "0 0 40px" }}>Included with every path.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 24 }}>
            {addons.map((a) => (
              <div key={a.title} className={`${hoverLift} border-[#ecebf5]`} style={{ background: "#fff", borderWidth: 1, borderStyle: "solid", borderRadius: 12, padding: 28 }}>
                <h3 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 18, fontWeight: 700, margin: "0 0 10px", color: "#2b2733" }}>{a.title}</h3>
                <p style={{ fontSize: 14, color: "#57517a", lineHeight: 1.6, margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: "clamp(26px,4vw,36px)", fontWeight: 700, margin: "0 0 40px", color: "#2b2733", textAlign: "center" }}>
            Questions, <span style={{ color: "#f97316" }}>answered</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {faqs.map((f) => (
              <div key={f.q} style={{ padding: "24px 0", borderBottom: "1px solid #ecebf5" }}>
                <h4 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 17, fontWeight: 700, margin: "0 0 8px", color: "#2b2733" }}>{f.q}</h4>
                <p style={{ fontSize: 15, color: "#57517a", lineHeight: 1.6, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CtaBanner
        heading={<>Ready to Start? <span style={{ color: "#ec4899" }}>Talk to Our Team</span></>}
        subtext="Pick a path and our team will contact you within 24 hours to build your schedule."
      />
    </div>
  );
}

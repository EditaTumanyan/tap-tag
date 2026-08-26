"use client";

import { useState } from "react";
import ImageSlot from "@/components/ImageSlot";
import { team } from "@/data/content";

export default function TeamGrid() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" style={{ maxWidth: 1100, margin: "0 auto", gap: "40px 26px" }}>
      {team.map((m, i) => {
        const isHovered = hovered === i;
        return (
          <div
            key={m.slot}
            style={{ position: "relative" }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              style={{
                position: "absolute",
                bottom: "calc(100% - 36px)",
                left: "50%",
                width: 250,
                marginLeft: -125,
                background: "#fff",
                border: "1px solid #f2e9f3",
                borderRadius: 16,
                boxShadow: "0 24px 50px -20px rgba(21,18,63,0.35)",
                padding: "22px 24px",
                textAlign: "left",
                zIndex: 20,
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? "translateY(0) scale(1)" : "translateY(10px) scale(.96)",
                pointerEvents: "none",
                transition: "opacity .25s, transform .25s",
              }}
            >
              <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f97316", fontWeight: 700, marginBottom: 10 }}>
                {m.role}
              </div>
              <p style={{ fontSize: 14, color: "#57517a", lineHeight: 1.6, margin: 0 }}>{m.bio}</p>
            </div>
            <div style={{ position: "relative", width: "100%", maxWidth: 150, margin: "0 auto 20px" }}>
              <ImageSlot
                src={"photo" in m ? m.photo : undefined}
                alt={m.name}
                placeholder="Photo"
                objectPosition={"imagePosition" in m ? m.imagePosition : undefined}
                scale={"imageScale" in m ? m.imageScale : undefined}
                style={{ width: "100%", aspectRatio: "1/1", border: "3px solid #f9d9c0", borderRadius: "50%", background: "#f6dcd2" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: -14,
                  borderRadius: "50%",
                  border: `2px solid ${isHovered ? "#f97316" : "transparent"}`,
                  transform: isHovered ? "scale(1.04)" : "scale(1)",
                  transition: "border-color .3s, transform .3s",
                  pointerEvents: "none",
                }}
              />
            </div>
            <h3 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 17, fontWeight: 700, margin: "0 0 6px", color: "#2b2733" }}>{m.name}</h3>
            <p style={{ fontSize: 14, color: "#57517a", margin: 0 }}>{m.role}</p>
          </div>
        );
      })}
    </div>
  );
}

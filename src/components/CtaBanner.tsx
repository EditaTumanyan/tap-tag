import Link from "next/link";
import type { ReactNode } from "react";

type CtaBannerProps = {
  heading: ReactNode;
  subtext?: ReactNode;
  buttonLabel?: string;
};

export default function CtaBanner({ heading, subtext, buttonLabel = "Get In Touch" }: CtaBannerProps) {
  return (
    <div style={{ background: "linear-gradient(120deg,#e9d5ff,#fde8d7)", padding: "96px 40px", textAlign: "center" }}>
      <h2
        style={{
          fontFamily: "'Nunito',sans-serif",
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: 700,
          margin: "0 0 20px",
          color: "#2b2733",
          lineHeight: 1.15,
          maxWidth: 820,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {heading}
      </h2>
      {subtext && (
        <p style={{ fontSize: 17, color: "#57517a", maxWidth: 640, margin: "0 auto 40px", lineHeight: 1.6 }}>
          {subtext}
        </p>
      )}
      <Link
        href="/contact"
        className="bg-[#f97316] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(249,115,22,0.55)] hover:bg-[#ea580c]"
        style={{
          display: "inline-block",
          color: "#fff",
          border: "none",
          padding: "18px 40px",
          borderRadius: 6,
          fontFamily: "'Nunito',sans-serif",
          fontWeight: 700,
          fontSize: 16,
          cursor: "pointer",
          marginTop: subtext ? 0 : 20,
          textDecoration: "none",
          transition: "transform .18s,box-shadow .18s,background .18s",
        }}
      >
        {buttonLabel}
      </Link>
    </div>
  );
}

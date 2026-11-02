import Link from "next/link";
import type { FaqItem } from "@/data/content";

/** Accordion of questions (used on /faq and /courses). Answers are always in the HTML, so search engines can read them. */
export default function FaqList({ items, questionTag: Q = "h3" }: { items: FaqItem[]; questionTag?: "h3" | "h4" }) {
  return (
    <div>
      {items.map((f) => (
        <details key={f.q} className="faq-item" style={{ borderBottom: "1px solid #ecebf5" }}>
          <summary
            style={{ listStyle: "none", cursor: "pointer", padding: "22px 0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, fontFamily: "'Nunito',sans-serif", fontSize: 18, fontWeight: 700, color: "#2b2733" }}
          >
            <Q style={{ font: "inherit", margin: 0 }}>{f.q}</Q>
            <span aria-hidden className="faq-icon" style={{ flexShrink: 0, width: 30, height: 30, borderRadius: "50%", background: "#f4f1fd", color: "#765098", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, transition: "transform .2s" }}>+</span>
          </summary>
          <div style={{ padding: "0 0 24px" }}>
            <p style={{ fontSize: 16, color: "#57517a", lineHeight: 1.7, margin: 0 }}>{f.a}</p>
            {f.link && (
              <Link href={f.link.href} className="hover:text-[#e56a78]" style={{ display: "inline-block", marginTop: 12, color: "#765098", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
                {f.link.label} →
              </Link>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}

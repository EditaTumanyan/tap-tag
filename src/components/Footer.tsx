import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/data/content";

const socialIconStyle = { cursor: "pointer", transition: "color .2s,transform .2s" } as const;
const socialIconClass = "text-[#6b6485] hover:text-[#f97316] hover:-translate-y-0.5";

export default function Footer() {
  return (
    <div style={{ borderTop: "1px solid #e5e2f0", padding: "44px 24px 14px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr]"
          style={{ gap: 40, marginBottom: 18 }}
        >
          <div>
            <Image src="/assets/logo-gradient-horizontal.png" alt="TapTag" width={107} height={34} style={{ height: 34, width: "auto", marginBottom: 16 }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {footerLinks.map((fl) => (
              <Link
                key={fl.label}
                href={fl.href}
                className="text-[#2b2733] hover:text-[#f97316]"
                style={{ fontFamily: "'Nunito',sans-serif", fontSize: 16, fontWeight: 400, cursor: "pointer", transition: "color .2s", textDecoration: "none" }}
              >
                {fl.label}
              </Link>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2b2733", fontWeight: 700, marginBottom: 20 }}>
              Connect
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b6485" strokeWidth="1.6">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M3 5.5l9 6.5 9-6.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontFamily: "'Nunito',sans-serif", fontSize: 16, fontWeight: 400, color: "#6b6485" }}>contact@taptag.am</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b6485" strokeWidth="1.6">
                  <path d="M4 5c0 8.3 6.7 15 15 15l2-4-5-2-2 2c-2.2-1-4-2.8-5-5l2-2-2-5-4 1z" strokeLinejoin="round" />
                </svg>
                <span style={{ fontFamily: "'Nunito',sans-serif", fontSize: 16, fontWeight: 400, color: "#6b6485" }}>+374 95 929 030</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b6485" strokeWidth="1.6" style={{ flexShrink: 0, marginTop: 2 }}>
                  <path d="M12 21s7-6.1 7-12a7 7 0 10-14 0c0 5.9 7 12 7 12z" />
                  <circle cx="12" cy="9" r="2.4" />
                </svg>
                <span style={{ fontFamily: "'Nunito',sans-serif", fontSize: 16, fontWeight: 400, color: "#6b6485", lineHeight: 1.5 }}>
                  Griboyedov 60, Yerevan, Armenia, 0051
                </span>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              <a href="https://linkedin.com/company/taptagdigital/" target="_blank" rel="noopener noreferrer" className={socialIconClass} style={socialIconStyle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="2" y="2" width="20" height="20" rx="3" />
                  <line x1="7" y1="10" x2="7" y2="17" />
                  <line x1="7" y1="6.5" x2="7" y2="6.6" strokeLinecap="round" strokeWidth="2.4" />
                  <line x1="12" y1="17" x2="12" y2="10" />
                  <path d="M12 13c0-1.5 1-3 3-3s3 1.5 3 3v4" strokeLinecap="round" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={socialIconClass} style={socialIconStyle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://www.facebook.com/taptagdigital" target="_blank" rel="noopener noreferrer" className={socialIconClass} style={socialIconStyle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M16 3h-2a5 5 0 00-5 5v3H6v4h3v6h4v-6h3l1-4h-4V8a1 1 0 011-1h3z" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <span style={{ fontSize: 13, color: "#9a94b8" }}>© 2026 TapTag. Yerevan, Armenia</span>
      </div>
    </div>
  );
}

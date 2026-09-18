"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/content";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 50, background: "#FAFAF8", borderBottom: "1px solid #e5e2f0" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 24px",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image src="/assets/logo.png" alt="TapTag" width={133} height={44} style={{ height: 44, width: "auto" }} priority />
        </Link>

        <nav className="hidden md:flex" style={{ alignItems: "center", gap: 40 }}>
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`hover:text-[#e56a78] ${active ? "text-[#e56a78]" : "text-[#2b2733]"}`}
                style={{
                  fontFamily: "'Nunito',sans-serif",
                  fontSize: 16,
                  letterSpacing: "0.01em",
                  fontWeight: active ? 600 : 400,
                  cursor: "pointer",
                  borderBottom: active ? "2px solid #e56a78" : "2px solid transparent",
                  paddingBottom: 3,
                  transition: "color .2s",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="hidden md:inline-block bg-[#e56a78] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(229,106,120,0.55)] hover:bg-[#cc5469]"
            style={{
              color: "#fff",
              border: "none",
              padding: "12px 24px",
              borderRadius: 6,
              fontFamily: "'Nunito',sans-serif",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              textDecoration: "none",
              transition: "transform .18s,box-shadow .18s,background .18s",
            }}
          >
            Book a Call
          </Link>
        </nav>

        <button
          className="flex md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8, alignItems: "center", justifyContent: "center" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2b2733" strokeWidth="1.8" strokeLinecap="round">
            <line x1="4" y1="7" x2="20" y2="7" style={{ transition: "transform 0.3s ease, opacity 0.3s ease", transformOrigin: "12px 7px", transform: menuOpen ? "rotate(45deg) translate(0, 5px)" : "none" }} />
            <line x1="4" y1="12" x2="20" y2="12" style={{ transition: "opacity 0.3s ease", opacity: menuOpen ? 0 : 1 }} />
            <line x1="4" y1="17" x2="20" y2="17" style={{ transition: "transform 0.3s ease, opacity 0.3s ease", transformOrigin: "12px 17px", transform: menuOpen ? "rotate(-45deg) translate(0, -5px)" : "none" }} />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden" style={{ display: "flex", flexDirection: "column", gap: 4, padding: "8px 24px 20px", borderTop: "1px solid #e5e2f0", animation: "navSlideDown 0.25s ease both" }}>
          {navItems.map((item, i) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Nunito',sans-serif",
                  fontSize: 16,
                  color: active ? "#e56a78" : "#2b2733",
                  fontWeight: active ? 600 : 400,
                  padding: "10px 0",
                  textDecoration: "none",
                  animation: "navItemIn 0.3s ease both",
                  animationDelay: `${i * 0.06}s`,
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              background: "#e56a78",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: 6,
              fontFamily: "'Nunito',sans-serif",
              fontWeight: 600,
              fontSize: 14,
              textDecoration: "none",
              textAlign: "center",
              marginTop: 8,
              animation: "navItemIn 0.3s ease both",
              animationDelay: `${navItems.length * 0.06}s`,
            }}
          >
            Book a Call
          </Link>
        </nav>
      )}
    </div>
  );
}

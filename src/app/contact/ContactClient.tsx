"use client";

import { useState } from "react";
import { audienceOptions } from "@/data/content";

const inputStyle: React.CSSProperties = {
  padding: "14px 16px",
  borderRadius: 8,
  borderWidth: 1,
  borderStyle: "solid",
  fontSize: 15,
  background: "#fff",
  transition: "border-color .2s,box-shadow .2s",
  width: "100%",
  fontFamily: "'Nunito Sans',sans-serif",
};

const focusClass = "border-[#f7ddc6] focus:outline-none focus:border-[#f97316] focus:shadow-[0_0_0_3px_rgba(249,115,22,0.13)]";

export default function ContactClient() {
  const [audience, setAudience] = useState("business");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="fade-up" style={{ maxWidth: 800, margin: "0 auto", padding: "56px 24px 100px" }}>
      <span style={{ fontFamily: "'Nunito',sans-serif", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f97316", fontWeight: 600 }}>
        Contact
      </span>
      <h1 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 40, fontWeight: 700, margin: "12px 0 16px", color: "#2b2733" }}>Let&rsquo;s build something.</h1>
      <p style={{ fontSize: 17, color: "#57517a", lineHeight: 1.6, margin: "0 0 40px" }}>
        Tell us about your business, brand, or project — we&rsquo;ll get back to you within one business day.
      </p>

      {submitted ? (
        <div style={{ background: "linear-gradient(120deg,#f3e8ff,#fde8d7)", borderRadius: 14, padding: 36 }}>
          <h3 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 22, fontWeight: 700, margin: "0 0 8px", color: "#2b2733" }}>Thanks — message sent.</h3>
          <p style={{ fontSize: 15, color: "#57517a", margin: 0 }}>We&rsquo;ll be in touch shortly.</p>
        </div>
      ) : (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setError(null);
            setSubmitting(true);
            const form = e.currentTarget;
            const formData = new FormData(form);
            try {
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: formData.get("name"),
                  email: formData.get("email"),
                  phone: formData.get("phone"),
                  company: formData.get("company"),
                  audience,
                  message: formData.get("message"),
                }),
              });
              if (!res.ok) {
                throw new Error("Failed to send message.");
              }
              setSubmitted(true);
            } catch {
              setError("Something went wrong. Please try again or email us directly.");
            } finally {
              setSubmitting(false);
            }
          }}
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 20 }}>
            <input required type="text" name="name" placeholder="Name" className={focusClass} style={inputStyle} />
            <input required type="email" name="email" placeholder="Email" className={focusClass} style={inputStyle} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 20 }}>
            <input type="tel" name="phone" placeholder="Phone number" className={focusClass} style={inputStyle} />
            <input type="text" name="company" placeholder="Company or brand name" className={focusClass} style={inputStyle} />
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {audienceOptions.map((opt) => {
              const active = audience === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setAudience(opt.value)}
                  className="hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(21,18,63,0.10)]"
                  style={{
                    padding: "10px 18px",
                    borderRadius: 999,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    border: `1px solid ${active ? "#f97316" : "#f7ddc6"}`,
                    background: active ? "#f97316" : "#fff",
                    color: active ? "#fff" : "#2b2733",
                    transition: "transform .18s,box-shadow .18s",
                  }}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
          <textarea
            name="message"
            placeholder="Tell us about your project"
            rows={5}
            className={focusClass}
            style={{ ...inputStyle, resize: "vertical" }}
          />
          {error && (
            <p style={{ color: "#dc2626", fontSize: 14, margin: 0 }}>{error}</p>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="bg-[#f97316] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(249,115,22,0.55)] hover:bg-[#ea580c]"
            style={{
              color: "#fff",
              border: "none",
              padding: "16px 32px",
              borderRadius: 6,
              fontFamily: "'Nunito',sans-serif",
              fontWeight: 700,
              fontSize: 16,
              cursor: submitting ? "not-allowed" : "pointer",
              opacity: submitting ? 0.7 : 1,
              alignSelf: "flex-start",
              transition: "transform .18s,box-shadow .18s,background .18s",
            }}
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}

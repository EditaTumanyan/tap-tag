"use client";

import { useState } from "react";
import { audienceOptions } from "@/data/content";
import { countryCodes } from "@/data/countryCodes";

const PHONE_PATTERN = /^[0-9]{6,14}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isoToFlagEmoji(iso2: string) {
  return iso2
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}

const fieldHeight = 48;

const inputStyle: React.CSSProperties = {
  height: fieldHeight,
  padding: "0 16px",
  borderRadius: 8,
  borderWidth: 1,
  borderStyle: "solid",
  fontSize: 15,
  background: "#fff",
  boxSizing: "border-box",
  transition: "border-color .2s,box-shadow .2s",
  width: "100%",
  fontFamily: "'Nunito Sans',sans-serif",
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: "none",
  WebkitAppearance: "none",
  MozAppearance: "none",
  paddingRight: 32,
  backgroundImage:
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6'><path d='M1 1l4 4 4-4' stroke='%2357517a' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 12px center",
  backgroundSize: "10px 6px",
  cursor: "pointer",
};

const focusClass = "border-[#f7ddc6] focus:outline-none focus:border-[#f97316] focus:shadow-[0_0_0_3px_rgba(249,115,22,0.13)]";

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "'Nunito',sans-serif",
  fontWeight: 700,
  fontSize: 14,
  color: "#2b2733",
  marginBottom: 8,
};

function errorBorder(hasError: boolean): React.CSSProperties {
  return hasError ? { borderColor: "#dc2626" } : {};
}

function Required() {
  return (
    <span style={{ color: "#dc2626" }} aria-hidden="true">
      {" "}
      *
    </span>
  );
}

function Optional() {
  return <span style={{ color: "#9b93ab", fontWeight: 500 }}> (Optional)</span>;
}

export default function ContactClient() {
  const [audience, setAudience] = useState("business");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [dialCode, setDialCode] = useState("+374");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState<string | null>(null);

  return (
    <div className="fade-up" style={{ maxWidth: 800, margin: "0 auto", padding: "56px 24px 100px" }}>
      <span style={{ fontFamily: "'Nunito',sans-serif", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f97316", fontWeight: 600 }}>
        Contact
      </span>
      <h1 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 40, fontWeight: 700, margin: "12px 0 16px", color: "#2b2733" }}>Let&rsquo;s Start a Conversation</h1>
      {!submitted && (
        <p style={{ fontSize: 17, color: "#57517a", lineHeight: 1.6, margin: "0 0 40px" }}>
          Tell us what you&rsquo;re looking for, and our team will get back to you within one business day.
        </p>
      )}

      {submitted ? (
        <div className="fade-up" style={{ background: "linear-gradient(120deg,#f3e8ff,#fde8d7)", borderRadius: 14, padding: 36 }}>
          <h3 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 22, fontWeight: 700, margin: "0 0 8px", color: "#2b2733" }}>Thank you — message sent!</h3>
          <p style={{ fontSize: 15, color: "#57517a", margin: 0 }}>We&rsquo;ve received your message and will get back to you within one business day.</p>
        </div>
      ) : (
        <form
          noValidate
          onSubmit={async (e) => {
            e.preventDefault();
            setError(null);

            const trimmedName = name.trim();
            const nextNameError = trimmedName ? null : "Please enter your name.";
            const nextEmailError = EMAIL_PATTERN.test(email.trim()) ? null : "Enter a valid email address.";
            const nextPhoneError = PHONE_PATTERN.test(phone) ? null : "Enter a valid phone number (6–14 digits).";

            setNameError(nextNameError);
            setEmailError(nextEmailError);
            setPhoneError(nextPhoneError);

            if (nextNameError || nextEmailError || nextPhoneError) {
              return;
            }

            setSubmitting(true);
            const form = e.currentTarget;
            const formData = new FormData(form);
            try {
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: trimmedName,
                  email: email.trim(),
                  phone: `${dialCode} ${phone}`,
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
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 20, alignItems: "start" }}>
            <div>
              <label htmlFor="name" style={labelStyle}>
                Name
                <Required />
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (nameError) setNameError(null);
                }}
                aria-invalid={!!nameError}
                aria-describedby={nameError ? "name-error" : undefined}
                className={focusClass}
                style={{ ...inputStyle, ...errorBorder(!!nameError) }}
              />
              {nameError && (
                <p id="name-error" style={{ color: "#dc2626", fontSize: 13, margin: "6px 0 0" }}>
                  {nameError}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" style={labelStyle}>
                Email
                <Required />
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError(null);
                }}
                aria-invalid={!!emailError}
                aria-describedby={emailError ? "email-error" : undefined}
                className={focusClass}
                style={{ ...inputStyle, ...errorBorder(!!emailError) }}
              />
              {emailError && (
                <p id="email-error" style={{ color: "#dc2626", fontSize: 13, margin: "6px 0 0" }}>
                  {emailError}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 20, alignItems: "start" }}>
            <div>
              <label htmlFor="phone" style={labelStyle}>
                Phone Number
                <Required />
              </label>
              <div style={{ display: "flex", gap: 8 }}>
                <select
                  value={dialCode}
                  onChange={(e) => setDialCode(e.target.value)}
                  aria-label="Country code"
                  className={focusClass}
                  style={{ ...selectStyle, width: 128, flexShrink: 0 }}
                >
                  {countryCodes.map((c) => (
                    <option key={c.iso2} value={c.dial}>
                      {isoToFlagEmoji(c.iso2)} {c.dial}
                    </option>
                  ))}
                </select>
                <input
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value.replace(/[^0-9]/g, ""));
                    if (phoneError) setPhoneError(null);
                  }}
                  aria-invalid={!!phoneError}
                  aria-describedby={phoneError ? "phone-error" : undefined}
                  className={focusClass}
                  style={{ ...inputStyle, ...errorBorder(!!phoneError) }}
                />
              </div>
              {phoneError && (
                <p id="phone-error" style={{ color: "#dc2626", fontSize: 13, margin: "6px 0 0" }}>
                  {phoneError}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="company" style={labelStyle}>
                Company / Organization
                <Optional />
              </label>
              <input id="company" type="text" name="company" placeholder="Company / Organization (Optional)" className={focusClass} style={inputStyle} />
            </div>
          </div>

          <div role="radiogroup" aria-label="What are you looking for?">
            <div style={labelStyle}>What are you looking for?</div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {audienceOptions.map((opt) => {
                const active = audience === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => setAudience(opt.value)}
                    className="hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(21,18,63,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] focus-visible:ring-offset-2"
                    style={{
                      padding: "10px 18px",
                      borderRadius: 999,
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      border: `1px solid ${active ? "#f97316" : "#f7ddc6"}`,
                      background: active ? "#f97316" : "#fff",
                      color: active ? "#fff" : "#2b2733",
                      transition: "transform .18s,box-shadow .18s,background .18s,border-color .18s",
                    }}
                  >
                    {active && <span aria-hidden="true">✓</span>}
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label htmlFor="message" style={labelStyle}>
              Message
              <Optional />
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your business, brand, career, project, or what you’re looking to achieve."
              rows={5}
              className={focusClass}
              style={{ ...inputStyle, height: "auto", padding: "14px 16px", resize: "vertical" }}
            />
          </div>

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

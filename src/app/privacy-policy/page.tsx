import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — TapTag",
  description: "How TapTag collects, uses, and protects your information.",
};

const h2Style = { fontFamily: "'Nunito',sans-serif", fontSize: 22, fontWeight: 700, margin: "40px 0 12px", color: "#2b2733" } as const;
const pStyle = { fontSize: 16, color: "#57517a", lineHeight: 1.75, margin: "0 0 14px" } as const;
const liStyle = { fontSize: 16, color: "#57517a", lineHeight: 1.75, margin: "0 0 8px" } as const;

export default function PrivacyPolicyPage() {
  return (
    <div className="fade-up">
      <div style={{ textAlign: "center", padding: "72px 24px 40px" }}>
        <h1 className="text-[34px] md:text-[46px]" style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, margin: "0 0 16px", color: "#2b2733", lineHeight: 1.08 }}>
          Privacy <span style={{ color: "#f97316" }}>Policy</span>
        </h1>
        <p style={{ fontSize: 16, color: "#9a94b8" }}>Last updated: August 25, 2026</p>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 96px" }}>
        <p style={pStyle}>
          TapTag operates as a digital marketing agency serving clients across the Armenian and US markets. This Privacy Policy explains how we collect, use, store, and protect information through taptag.am (the &ldquo;Site&rdquo;), as well as the choices and rights available to you.
        </p>

        <h2 style={h2Style}>Information We Collect</h2>
        <p style={pStyle}>We may collect information in the following ways:</p>
        <ul style={{ paddingLeft: 20, margin: "0 0 14px" }}>
          <li style={liStyle}><strong>Information you provide:</strong> Your name, email address, phone number, company name, and any other information you voluntarily submit through contact forms, booking requests, course enrollment forms, or other forms on the Site.</li>
          <li style={liStyle}><strong>Automatically collected information:</strong> Your IP address, browser type, device information, operating system, pages visited, referring pages, and other technical information collected through cookies and similar technologies.</li>
          <li style={liStyle}><strong>Analytics and advertising information:</strong> We may use services such as Google Analytics, Meta Pixel, and TikTok Pixel to understand how visitors use the Site, measure website performance, and evaluate the effectiveness of our advertising campaigns.</li>
        </ul>

        <h2 style={h2Style}>How We Use Your Information</h2>
        <p style={pStyle}>We may use the information we collect to:</p>
        <ul style={{ paddingLeft: 20, margin: "0 0 14px" }}>
          <li style={liStyle}>Respond to inquiries and provide requested services.</li>
          <li style={liStyle}>Process booking requests and course enrollments.</li>
          <li style={liStyle}>Operate, maintain, secure, and improve the Site.</li>
          <li style={liStyle}>Understand Site usage and improve user experience.</li>
          <li style={liStyle}>Send updates, offers, marketing communications, or course-related information where you have provided appropriate consent or where otherwise permitted by law.</li>
          <li style={liStyle}>Measure, analyze, and improve our marketing and advertising activities.</li>
          <li style={liStyle}>Comply with applicable legal and regulatory obligations.</li>
        </ul>

        <h2 style={h2Style}>Sharing of Information</h2>
        <p style={pStyle}>We do not sell your personal information.</p>
        <p style={pStyle}>
          We may share personal information with trusted third-party service providers that support our business operations, including hosting providers, analytics providers, advertising platforms, and other technology or service providers. Such information is shared only to the extent reasonably necessary for them to provide their services.
        </p>
        <p style={pStyle}>
          We may also disclose personal information when required to do so by law, legal process, court order, or governmental authority, or when necessary to protect our rights, property, or safety.
        </p>

        <h2 style={h2Style}>Cookies and Similar Technologies</h2>
        <p style={pStyle}>
          We use cookies and similar technologies to operate the Site, remember preferences, understand website traffic, and measure the effectiveness of our marketing activities.
        </p>
        <p style={pStyle}>
          You can manage or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality or performance of parts of the Site.
        </p>
        <p style={pStyle}>
          Where required by applicable law, we will request your consent before placing non-essential cookies or similar tracking technologies on your device.
        </p>

        <h2 style={h2Style}>Data Retention</h2>
        <p style={pStyle}>
          We retain personal information only for as long as reasonably necessary to fulfill the purposes described in this Privacy Policy, provide our services, maintain appropriate business and financial records, resolve disputes, enforce agreements, and comply with applicable legal obligations.
        </p>

        <h2 style={h2Style}>Your Rights</h2>
        <p style={pStyle}>Depending on your location and applicable law, you may have certain rights regarding your personal information, including the right to:</p>
        <ul style={{ paddingLeft: 20, margin: "0 0 14px" }}>
          <li style={liStyle}>Access the personal information we hold about you.</li>
          <li style={liStyle}>Request correction of inaccurate or incomplete information.</li>
          <li style={liStyle}>Request deletion of your personal information.</li>
          <li style={liStyle}>Object to or request restriction of certain processing activities.</li>
          <li style={liStyle}>Withdraw consent where processing is based on your consent.</li>
          <li style={liStyle}>Request information about how your personal information is processed.</li>
        </ul>
        <p style={pStyle}>
          To exercise any applicable rights or ask questions about your personal information, please contact us at{" "}
          <a href="mailto:contact@taptag.am" style={{ color: "#f97316" }}>contact@taptag.am</a>.
        </p>

        <h2 style={h2Style}>Changes to This Privacy Policy</h2>
        <p style={pStyle}>
          We may update this Privacy Policy from time to time to reflect changes in our practices, services, technologies, or legal requirements. Any changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date.
        </p>

        <h2 style={h2Style}>Contact Us</h2>
        <p style={pStyle}>
          If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
        </p>
        <p style={pStyle}>
          Email: <a href="mailto:contact@taptag.am" style={{ color: "#f97316" }}>contact@taptag.am</a>
          <br />
          Mailing address: Griboyedov 60, Yerevan, Armenia, 0051
        </p>
      </div>
    </div>
  );
}

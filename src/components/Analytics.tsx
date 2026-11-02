"use client";

import Script from "next/script";
import { useEffect } from "react";
import { ANALYTICS_ENABLED, GA_ID, trackEvent } from "@/lib/analytics";

/**
 * Google Analytics tag (once, in the root layout) + "Book a Call" click tracking.
 * Page views on client-side navigation are tracked automatically by GA4 enhanced measurement.
 */
export default function Analytics() {
  useEffect(() => {
    if (!ANALYTICS_ENABLED) return;
    // Every link to /contact (header "Book a Call", page CTAs, footer "Contact") sends book_a_call_click.
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== "/contact") return;
      trackEvent("book_a_call_click", {
        link_text: (link.textContent || "").trim().slice(0, 100),
        page_path: window.location.pathname,
      });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!ANALYTICS_ENABLED) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}

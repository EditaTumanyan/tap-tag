"use client";

import { useEffect } from "react";
import { ANALYTICS_ENABLED, trackEvent } from "@/lib/analytics";

/**
 * "Book a Call" click tracking. (The Google tag itself is in the <head> of app/layout.tsx.)
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

  return null;
}

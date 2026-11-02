// Google Analytics 4 (property for taptag.am)
export const GA_ID = "G-1RGRBZTMKR";

// Only send data from the live site, so local testing doesn't pollute the reports.
export const ANALYTICS_ENABLED = process.env.NODE_ENV === "production";

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", name: string, params?: GtagParams) => void;
  }
}

/** Send a GA4 event. Safe to call anywhere: does nothing if GA isn't loaded (e.g. blocked by an ad blocker). */
export function trackEvent(name: string, params?: GtagParams) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

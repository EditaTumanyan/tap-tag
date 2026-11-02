import type { Metadata } from "next";

export const SITE_URL = "https://taptag.am";
export const OG_IMAGE = "/og-image.jpg"; // 1200×630, place the file in /public

/**
 * Builds a page's metadata: title, description, canonical URL and the
 * Open Graph / Twitter tags used when the link is shared.
 * Next.js replaces (not merges) `openGraph` per page, so each page must set it fully.
 */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "TapTag",
      title,
      description,
      url: path,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "TapTag — Digital Marketing Agency" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "TapTag",
  alternateName: "TapTag Digital",
  description: "Digital marketing agency in Yerevan, Armenia, helping businesses, artists and public figures grow online since 2015.",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo.png`,
  image: `${SITE_URL}${OG_IMAGE}`,
  email: "contact@taptag.am",
  telephone: "+374 95 929030",
  foundingDate: "2015-09-11",
  address: {
    "@type": "PostalAddress",
    streetAddress: "60 Griboyedov St",
    addressLocality: "Yerevan",
    postalCode: "0051",
    addressCountry: "AM",
  },
  areaServed: ["Armenia", "United States"],
  openingHours: "Mo-Fr 10:00-18:00",
  sameAs: [
    "https://www.instagram.com/taptagdigital",
    "https://www.facebook.com/TapTagDigital",
    "https://www.linkedin.com/company/taptagdigital/",
    "https://www.tiktok.com/@taptagdigital",
    "https://www.youtube.com/@TapTagDigital",
  ],
};

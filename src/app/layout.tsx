/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, pageMetadata } from "@/data/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({
    title: "TapTag | Digital Marketing Agency in Yerevan, Armenia",
    description:
      "TapTag is a digital marketing agency in Yerevan, Armenia. Since 2015, we have helped 300+ brands and 70+ artists grow online. Book a call today.",
    path: "/",
  }),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Nunito+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Nunito Sans',sans-serif", background: "#FAFAF8", color: "#2b2733", minHeight: "100vh" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

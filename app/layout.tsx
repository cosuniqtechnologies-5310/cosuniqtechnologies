import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import GsapAnimations from "../components/GsapAnimations";
import ScrollReset from "../components/ScrollReset";

import type { Metadata } from "next";
import Script from "next/script";
import GoogleAnalytics from "../components/GoogleAnalytics";
import ServiceWorkerRegister from "../components/ServiceWorkerRegister";
import { plusJakartaSans } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cosuniq.in"),
  title: {
    default: "Cosuniq Technologies | Creative Digital Agency",
    template: "%s | Cosuniq Technologies",
  },
  description:
    "Cosuniq Technologies — full-service creative agency delivering software, SaaS, CRM, e-commerce, branding & video production. Every brand has a story. We help you build it.",
  keywords: [
    "Cosuniq Technologies",
    "creative agency",
    "digital agency",
    "web development",
    "branding",
    "UI UX design",
    "SaaS development",
    "e-commerce",
    "video production",
    "software development India",
  ],
  authors: [{ name: "Cosuniq Technologies", url: "https://www.cosuniq.in" }],
  creator: "Cosuniq Technologies",
  publisher: "Cosuniq Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.cosuniq.in",
    siteName: "Cosuniq Technologies",
    title: "Cosuniq Technologies | Creative Digital Agency",
    description:
      "Full-service creative agency delivering software, SaaS, CRM, e-commerce, branding & video production. Every brand has a story. We help you build it.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cosuniq Technologies — Creative Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosuniq Technologies | Creative Digital Agency",
    description:
      "Full-service creative agency delivering software, SaaS, CRM, e-commerce, branding & video production.",
    images: ["/assets/og-image.png"],
    creator: "@cosuniq",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/assets/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon.webp", sizes: "192x192", type: "image/webp" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/assets/favicon.png",
    apple: [
      { url: "/assets/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "google097b26a13a458c1c",
  },
  alternates: {
    canonical: "https://www.cosuniq.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfessionalService",
                  "@id": "https://www.cosuniq.in/#organization",
                  "name": "Cosuniq Technologies",
                  "url": "https://www.cosuniq.in",
                  "logo": "https://www.cosuniq.in/assets/cosuniq-technologies.png",
                  "image": "https://www.cosuniq.in/assets/og-image.png",
                  "priceRange": "$$",
                  "description":
                    "Full-service creative agency delivering software, SaaS, CRM, e-commerce, branding & video production.",
                  "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "Tamil Nadu",
                    "addressCountry": "IN"
                  },
                  "knowsAbout": [
                    "Web Development",
                    "Mobile App Development",
                    "UI/UX Design",
                    "Brand Strategy",
                    "AI & Custom Software",
                    "Cloud & DevOps",
                    "E-Commerce Solutions"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+917358696546",
                    "email": "founder@cosuniq.in",
                    "contactType": "customer service",
                    "areaServed": "IN",
                    "availableLanguage": ["en", "ta"],
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/cosuniq",
                    "https://twitter.com/cosuniq",
                    "https://www.instagram.com/cosuniq",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.cosuniq.in/#website",
                  "url": "https://www.cosuniq.in",
                  "name": "Cosuniq Technologies",
                  "publisher": { "@id": "https://www.cosuniq.in/#organization" },
                },
              ],
            }),
          }}
        />
        <ServiceWorkerRegister />
        <GoogleAnalytics />
        <CustomCursor />
        <ScrollReset />
        <GsapAnimations />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );  
}

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
    default: "Cosuniq Technologies | Website Design & Website Development Company",
    template: "%s | Cosuniq Technologies",
  },
  description:
    "Cosuniq Technologies is a premier website design and website development company. We engineer custom websites, Next.js web applications, UI/UX designs, and brand identities across Chennai, Coimbatore, and India.",
  keywords: [
    "Cosuniq Technologies",
    "website development",
    "website design",
    "website development company in chennai",
    "website development company in coimbatore",
    "website designers in chennai",
    "website design company in coimbatore",
    "website creation",
    "website developer near me",
    "website development cost india",
    "ui designs for website",
    "branding design agency",
    "web development company",
    "creative agency",
    "digital agency",
    "UI UX design",
    "SaaS development",
    "e-commerce",
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
    title: "Cosuniq Technologies | Website Design & Website Development Company",
    description:
      "Premier website design and website development company. We engineer custom websites, Next.js web applications, UI/UX designs, and brand identities across Chennai, Coimbatore, and India.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cosuniq Technologies — Website Design & Website Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosuniq Technologies | Website Design & Website Development Company",
    description:
      "Premier website design and website development company delivering custom websites, SaaS, UI/UX, and branding.",
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
                    "Premier website design and website development company delivering custom Next.js web applications, UI/UX designs, SaaS portals, and distinctive brand identities.",
                  "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "Tamil Nadu",
                    "addressCountry": "IN"
                  },
                  "areaServed": [
                    { "@type": "City", "name": "Chennai" },
                    { "@type": "City", "name": "Coimbatore" },
                    { "@type": "City", "name": "Tiruppur" },
                    { "@type": "City", "name": "Pollachi" },
                    { "@type": "City", "name": "Udumalpet" },
                    { "@type": "City", "name": "Palani" },
                    { "@type": "City", "name": "Dharapuram" },
                    { "@type": "City", "name": "Tanjavur" },
                    { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
                    { "@type": "Country", "name": "India" }
                  ],
                  "knowsAbout": [
                    "Website Development",
                    "Website Design",
                    "Website Creation",
                    "UI/UX Design",
                    "Branding Design",
                    "Graphic Design & Collateral",
                    "Next.js Engineering",
                    "Mobile App Development",
                    "AI & Custom Software",
                    "Cloud & DevOps",
                    "E-Commerce Solutions"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Website Design & Digital Engineering Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Website Development & Web Design",
                          "description": "Custom Next.js website design and development, corporate portals, and high-speed web applications."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "UI / UX Design",
                          "description": "Human-centered UI designs for websites, interactive Figma prototypes, and design systems."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Branding Design Agency",
                          "description": "Iconic logo systems, brand guidelines, and distinctive visual identities."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "E-Commerce Website Development",
                          "description": "High-converting online storefronts, headless Shopify, and inventory synchronization."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Mobile Application Development",
                          "description": "Cross-platform iOS and Android mobile apps, PWA, React Native, and Flutter development."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Graphic Design & Marketing Collateral",
                          "description": "Product packaging design, corporate brochures, catalogs, social media creatives, and print media."
                        }
                      }
                    ]
                  },
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

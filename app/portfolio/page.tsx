import type { Metadata } from "next";
import FinalCta from "../../components/FinalCta";
import InitReveal from "../../components/InitReveal";
import InnerBanner from "../../components/InnerBanner";
import PortfolioClient from "../../components/PortfolioClient";

export const metadata: Metadata = {
  title: "Showcase — Our Works & Portfolio",
  description: "Explore Cosuniq Technologies' showcase of selected work — high-converting e-commerce platforms, native mobile applications, custom SaaS products, and brand systems.",
  keywords: ["Cosuniq showcase", "Cosuniq our works", "web development projects", "e-commerce projects", "branding case studies", "mobile app projects"],
  openGraph: {
    title: "Showcase — Our Works | Cosuniq Technologies",
    description: "Explore Cosuniq's selected work — e-commerce, mobile apps, SaaS, and brand platforms.",
    url: "https://cosuniq.in/portfolio",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Cosuniq Showcase" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Showcase — Our Works | Cosuniq Technologies",
    description: "Explore Cosuniq's selected work — e-commerce, mobile apps, SaaS, and brand platforms.",
    images: ["/assets/og-image.png"],
  },
  alternates: { canonical: "https://cosuniq.in/portfolio" },
};

export default function Portfolio() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://cosuniq.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Showcase",
        "item": "https://cosuniq.in/portfolio"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <InitReveal />

      <InnerBanner 
        eyebrow="PORTFOLIO SHOWCASE"
        title="Products we've engineered & shipped."
        description="A curated showcase of software, commerce engines, mobile applications, and brand systems built for ambitious businesses."
        bgImage="/assets/images/laptop.webp"
      />

      <PortfolioClient />

      <FinalCta />
    </>
  );
}

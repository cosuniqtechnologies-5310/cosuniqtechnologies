import type { Metadata } from "next";
import InnerBanner from "../../components/InnerBanner";
import InitReveal from "../../components/InitReveal";
import FinalCta from "../../components/FinalCta";
import BlogClient from "../../components/BlogClient";

export const metadata: Metadata = {
  title: "Insights & Technical Perspectives | Cosuniq Technologies",
  description: "Explore engineering insights, software architecture guides, AI automation strategies, and design thinking from the team at Cosuniq Technologies.",
  keywords: ["Cosuniq insights", "tech insights", "software engineering perspectives", "AI automation insights", "design thinking"],
  openGraph: {
    title: "Insights & Technical Perspectives | Cosuniq Technologies",
    description: "Deep technical articles, software architecture guides, and design perspectives from Cosuniq Technologies.",
    url: "https://cosuniq.in/insights",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Cosuniq Insights" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Technical Perspectives | Cosuniq Technologies",
    description: "Deep technical articles, software architecture guides, and design perspectives from Cosuniq Technologies.",
    images: ["/assets/og-image.png"],
  },
  alternates: { canonical: "https://cosuniq.in/insights" },
};

export default function InsightsPage() {
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
        "name": "Insights",
        "item": "https://cosuniq.in/insights"
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
        eyebrow="PERSPECTIVES & RESEARCH"
        title="Insights"
        description="Thoughts, technical perspectives, and design craft from the team at Cosuniq."
        bgImage="/assets/images/brainstorm.webp"
      />
      <BlogClient />
      <FinalCta />
    </>
  );
}

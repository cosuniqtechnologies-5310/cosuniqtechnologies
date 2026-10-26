import type { Metadata } from "next";
import InnerBanner from "../../components/InnerBanner";
import InitReveal from "../../components/InitReveal";
import FinalCta from "../../components/FinalCta";
import CaseStudiesClient from "../../components/CaseStudiesClient";

export const metadata: Metadata = {
  title: "Case Studies | Proven Work & Results",
  description: "Explore in-depth case studies by Cosuniq Technologies — solving complex software, mobile app, and e-commerce challenges with measurable business impact.",
  keywords: ["Cosuniq case studies", "software engineering case studies", "mobile app success stories", "e-commerce results", "high-performance web apps"],
  openGraph: {
    title: "Case Studies | Cosuniq Technologies",
    description: "Explore in-depth case studies by Cosuniq Technologies — solving complex software, mobile app, and e-commerce challenges.",
    url: "https://www.cosuniq.in/case-studies",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Cosuniq Case Studies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Cosuniq Technologies",
    description: "Explore in-depth case studies by Cosuniq Technologies.",
    images: ["/assets/og-image.png"],
  },
  alternates: { canonical: "https://www.cosuniq.in/case-studies" },
};

export default function CaseStudiesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.cosuniq.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Case Studies",
        "item": "https://www.cosuniq.in/case-studies"
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
        eyebrow="PROVEN ENGINEERING & DESIGN"
        title="Real challenges. Measurable impact."
        description="Every product we ship is built around real business objectives. Explore how we architect, design, and scale high-performance digital products for ambitious brands."
        bgImage="/assets/images/office.webp"
      />
      <CaseStudiesClient />
      <FinalCta />
    </>
  );
}

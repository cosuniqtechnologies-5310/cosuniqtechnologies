import type { Metadata } from "next";
import InnerBanner from "../../components/InnerBanner";
import InitReveal from "../../components/InitReveal";
import FinalCta from "../../components/FinalCta";
import BlogClient from "../../components/BlogClient";

export const metadata: Metadata = {
  title: "Blogs & Engineering Insights | Cosuniq Technologies",
  description: "Deep technical articles, design systems guides, Next.js architectural patterns, and AI automation insights from the engineers and designers at Cosuniq Technologies.",
  keywords: ["Cosuniq blogs", "web development blog", "Next.js articles", "UI UX design best practices", "AI automation insights"],
  openGraph: {
    title: "Blogs & Insights | Cosuniq Technologies",
    description: "Deep technical articles, design system guides, and software engineering insights from Cosuniq.",
    url: "https://www.cosuniq.in/blog",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Cosuniq Blogs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs & Insights | Cosuniq Technologies",
    description: "Deep technical articles, design system guides, and software engineering insights from Cosuniq.",
    images: ["/assets/og-image.png"],
  },
  alternates: { canonical: "https://www.cosuniq.in/blog" },
};

export default function BlogPage() {
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
        "name": "Insights",
        "item": "https://www.cosuniq.in/blog"
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

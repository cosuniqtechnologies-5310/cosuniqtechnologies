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
    url: "https://cosuniq.in/blog",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Cosuniq Blogs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs & Insights | Cosuniq Technologies",
    description: "Deep technical articles, design system guides, and software engineering insights from Cosuniq.",
    images: ["/assets/og-image.png"],
  },
  alternates: { canonical: "https://cosuniq.in/blog" },
};

export default function BlogPage() {
  return (
    <>
      <InitReveal />
      <InnerBanner
        eyebrow="PERSPECTIVES & THOUGHT LEADERSHIP"
        title="Engineering insights & design craft."
        description="Lessons learned building scalable digital products, high-conversion commerce architectures, and pragmatic AI systems for ambitious teams."
        bgImage="/assets/images/brainstorm.webp"
      />
      <BlogClient />
      <FinalCta />
    </>
  );
}

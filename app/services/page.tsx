import type { Metadata } from "next";
import InitReveal from "../../components/InitReveal";
import ServicesPage from "../../components/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Cosuniq's full range of digital services — web development, UI/UX design, e-commerce, custom software, mobile apps, and cloud infrastructure.",
  keywords: ["web development services", "UI UX design", "e-commerce development", "custom software", "mobile app development", "Cosuniq services"],
  openGraph: {
    title: "Services | Cosuniq Technologies",
    description: "Explore Cosuniq's full range of digital services — web development, UI/UX design, e-commerce, custom software, mobile apps, and cloud infrastructure.",
    url: "https://cosuniq.in/services",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Cosuniq Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Cosuniq Technologies",
    description: "Explore Cosuniq's full range of digital services.",
    images: ["/assets/og-image.png"],
  },
  alternates: { canonical: "https://cosuniq.in/services" },
};

export default function Services() {
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
        "name": "What We Do",
        "item": "https://cosuniq.in/services"
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
      <ServicesPage />
    </>
  );
}


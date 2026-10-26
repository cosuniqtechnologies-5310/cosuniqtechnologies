import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Cosuniq Technologies. Share a brief about your project and we'll reply with next steps and a rough timeline.",
  keywords: ["contact Cosuniq", "hire digital agency", "web development inquiry", "project brief", "Cosuniq Technologies contact"],
  openGraph: {
    title: "Contact | Cosuniq Technologies",
    description: "Get in touch with Cosuniq Technologies. Share a brief about your project and we'll reply with next steps.",
    url: "https://www.cosuniq.in/contact",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Contact Cosuniq Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Cosuniq Technologies",
    description: "Get in touch with Cosuniq Technologies. Share a brief about your project.",
    images: ["/assets/og-image.png"],
  },
  alternates: { canonical: "https://www.cosuniq.in/contact" },
};

export default function Contact() {
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
        "name": "Contact",
        "item": "https://www.cosuniq.in/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactClient />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InnerBanner from "../../../components/InnerBanner";
import InitReveal from "../../../components/InitReveal";
import LocationDetailClient from "../../../components/LocationDetailClient";
import { locationsMap } from "../../../components/locationsData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(locationsMap).map(slug => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = locationsMap[slug];

  if (!location) {
    return {
      title: "Location Not Found | Cosuniq Technologies",
    };
  }

  return {
    title: location.metaTitle,
    description: location.metaDesc,
    keywords: [
      ...(location.keywords || []),
      location.cityName,
      `${location.cityName} software company`,
      `${location.cityName} web design`,
      `${location.cityName} website development`,
      "Cosuniq Technologies",
      "Tamil Nadu",
      "India"
    ],
    openGraph: {
      title: location.metaTitle,
      description: location.metaDesc,
      url: `https://www.cosuniq.in/locations/${slug}`,
      images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: `${location.cityName} Digital Services` }],
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDesc,
      images: ["/assets/og-image.png"],
    },
    alternates: { canonical: `https://www.cosuniq.in/locations/${slug}` },
  };
}

export default async function LocationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const location = locationsMap[slug];

  if (!location) {
    notFound();
  }

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
        "name": "What We Do",
        "item": "https://www.cosuniq.in/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": location.cityName,
        "item": `https://www.cosuniq.in/locations/${slug}`
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Software & Web Development in ${location.cityName}`,
    "serviceType": location.heroTitle,
    "description": location.metaDesc,
    "provider": {
      "@type": "ProfessionalService",
      "@id": "https://www.cosuniq.in/#organization",
      "name": "Cosuniq Technologies"
    },
    "areaServed": [
      { "@type": "City", "name": location.cityName },
      { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
      { "@type": "Country", "name": "India" }
    ],
    "url": `https://www.cosuniq.in/locations/${slug}`
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `https://www.cosuniq.in/locations/${slug}#localbusiness`,
    "name": `Cosuniq Technologies - Software Development Company in ${location.cityName}`,
    "url": `https://www.cosuniq.in/locations/${slug}`,
    "logo": "https://www.cosuniq.in/assets/cosuniq-technologies.png",
    "image": "https://www.cosuniq.in/assets/og-image.png",
    "telephone": "+917358696546",
    "email": "founder@cosuniq.in",
    "priceRange": "$$",
    "description": location.metaDesc,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5/233C, Sarathamani Layout, KVS Colony",
      "addressLocality": location.cityName,
      "addressRegion": "Tamil Nadu",
      "postalCode": slug === "udumalpet" ? "642126" : "641001",
      "addressCountry": "IN"
    },
    "geo": slug === "udumalpet" ? {
      "@type": "GeoCoordinates",
      "latitude": 10.5843,
      "longitude": 77.2476
    } : undefined,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "48"
    }
  };

  const faqSchema = location.faqs && location.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": location.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <InitReveal />
      <InnerBanner
        eyebrow={location.eyebrow}
        title={location.heroTitle}
        description={location.heroDesc}
        bgImage={location.bannerImage}
      />
      <LocationDetailClient location={location} />
    </>
  );
}

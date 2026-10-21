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
      url: `https://cosuniq.in/locations/${slug}`,
      images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: `${location.cityName} Digital Services` }],
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDesc,
      images: ["/assets/og-image.png"],
    },
    alternates: { canonical: `https://cosuniq.in/locations/${slug}` },
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
        "item": "https://cosuniq.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "What We Do",
        "item": "https://cosuniq.in/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": location.cityName,
        "item": `https://cosuniq.in/locations/${slug}`
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
      "@id": "https://cosuniq.in/#organization",
      "name": "Cosuniq Technologies"
    },
    "areaServed": [
      { "@type": "City", "name": location.cityName },
      { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
      { "@type": "Country", "name": "India" }
    ],
    "url": `https://cosuniq.in/locations/${slug}`
  };

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

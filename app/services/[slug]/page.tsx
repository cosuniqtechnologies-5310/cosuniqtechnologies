import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InnerBanner from "../../../components/InnerBanner";
import InitReveal from "../../../components/InitReveal";
import ServiceDetailClient from "../../../components/ServiceDetailClient";
import { servicesMap } from "../../../components/servicesData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesMap).map(slug => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesMap[slug];

  if (!service) {
    return {
      title: "Service Not Found | Cosuniq Technologies",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDesc,
    keywords: [service.name, "Cosuniq Technologies", "digital services", "software development", "India"],
    openGraph: {
      title: `${service.name} | Cosuniq Technologies`,
      description: service.metaDesc,
      url: `https://www.cosuniq.in/services/${slug}`,
      images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: service.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} | Cosuniq Technologies`,
      description: service.metaDesc,
      images: ["/assets/og-image.png"],
    },
    alternates: { canonical: `https://www.cosuniq.in/services/${slug}` },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesMap[slug];

  if (!service) {
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
        "name": service.name,
        "item": `https://www.cosuniq.in/services/${slug}`
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.name} Services`,
    "serviceType": service.heroTitle,
    "description": service.heroDesc,
    "provider": {
      "@type": "ProfessionalService",
      "@id": "https://www.cosuniq.in/#organization",
      "name": "Cosuniq Technologies"
    },
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "AdministrativeArea", "name": "Tamil Nadu" }
    ],
    "url": `https://www.cosuniq.in/services/${slug}`
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
        eyebrow={service.eyebrow}
        title={service.heroTitle}
        description={service.heroDesc}
        bgImage={service.bannerImage}
      />
      <ServiceDetailClient service={service} />
    </>
  );
}

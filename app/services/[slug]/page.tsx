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
      url: `https://cosuniq.in/services/${slug}`,
      images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: service.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} | Cosuniq Technologies`,
      description: service.metaDesc,
      images: ["/assets/og-image.png"],
    },
    alternates: { canonical: `https://cosuniq.in/services/${slug}` },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesMap[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
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

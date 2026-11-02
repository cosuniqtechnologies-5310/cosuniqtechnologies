import type { Metadata } from "next";
import Link from "next/link";
import CinematicHero from "../components/CinematicHero";
import LivingBrandHero from "../components/LivingBrandHero";
import OurDifference from "../components/OurDifference";
import AboutCosuniq from "../components/AboutCosuniq";
import FinalCta from "../components/FinalCta";
import CapabilitiesUniverse from "../components/CapabilitiesUniverse";
import WorkSlider from "../components/WorkSlider";
import InitReveal from "../components/InitReveal";
import WorkLifecycle from "../components/WorkLifecycle";
import ResultsShowcase from "../components/ResultsShowcase";

export const metadata: Metadata = {
  title: "Cosuniq Technologies | Top Website Design & Website Development Company",
  description: "Cosuniq Technologies is an industry-leading website design and website development company. We engineer high-speed custom websites, Next.js applications, UI/UX designs, and brand identities across Chennai, Coimbatore, and Tamil Nadu.",
  keywords: [
    "Cosuniq Technologies",
    "Creative Digital Agency",
    "Web Development Company",
    "Custom Software Development",
    "UI UX Design Agency",
    "Mobile App Development",
    "E-commerce Development",
    "Brand Strategy & Identity",
    "website development company in chennai",
    "website development company in coimbatore",
    "website design company in coimbatore",
    "website designers in chennai",
    "website development",
    "website design",
    "website creation",
    "website developer near me",
    "website development cost india",
    "ui designs for website",
    "branding design agency"
  ],
  alternates: { canonical: "https://www.cosuniq.in" },
  openGraph: {
    title: "Cosuniq Technologies | Top Website Design & Website Development Company",
    description: "Full-service creative agency delivering software, SaaS, CRM, e-commerce, branding & mobile apps. Every brand has a story. We help you build it.",
    url: "https://www.cosuniq.in",
    siteName: "Cosuniq Technologies",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Cosuniq Technologies" }],
    type: "website"
  }
};

export default function Home() {
  return (
    <>
      <InitReveal />
      
      <CinematicHero />
      <LivingBrandHero />
      <CapabilitiesUniverse />
      <WorkLifecycle />

      {/* Services are now handled by CapabilitiesUniverse */}

      <WorkSlider />


      {/* RESULTS — Innovative Bento Showcase */}
      <ResultsShowcase />
      
      <OurDifference />
      <AboutCosuniq />
      <FinalCta />

    </>
  );
}

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
  title: "Cosuniq Technologies | Creative Digital Agency & Software Development",
  description: "Cosuniq Technologies is a premier creative digital agency delivering high-performance software, custom web applications, SaaS, e-commerce, and memorable brand identities.",
  keywords: [
    "Cosuniq Technologies",
    "Creative Digital Agency",
    "Web Development Company",
    "Custom Software Development",
    "UI UX Design Agency",
    "Mobile App Development",
    "E-commerce Development",
    "Brand Strategy & Identity"
  ],
  alternates: { canonical: "https://cosuniq.in" },
  openGraph: {
    title: "Cosuniq Technologies | Creative Digital Agency & Software Development",
    description: "Full-service creative agency delivering software, SaaS, CRM, e-commerce, branding & mobile apps. Every brand has a story. We help you build it.",
    url: "https://cosuniq.in",
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

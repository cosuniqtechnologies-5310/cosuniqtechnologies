import type { Metadata } from "next";
import CareersClient from "../../components/CareersClient";
import { OPEN_JOBS } from "../../components/careersData";
import InitReveal from "../../components/InitReveal";

export const metadata: Metadata = {
  title: "Careers & Software Developer Jobs in Udumalpet, Tamil Nadu | Cosuniq",
  description:
    "Explore high-growth tech careers and software developer jobs in Udumalpet at Cosuniq Technologies. We are hiring Full Stack Engineers, React Native Developers, UI/UX Designers, and Walk-in Freshers.",
  keywords: [
    "Software Developer jobs in Udumalpet Tamilnadu",
    "Walk-in Software Developer in Udumalpet",
    "software developer jobs in udumalpet",
    "web developer jobs in udumalpet",
    "full stack developer hiring udumalpet",
    "IT jobs in Udumalpet for freshers",
    "software company jobs in udumalpet",
    "software company internship in udumalpet",
    "Cosuniq Technologies careers",
    "tech jobs western tamil nadu"
  ],
  alternates: {
    canonical: "https://cosuniq.in/careers"
  },
  openGraph: {
    title: "Careers & Software Developer Jobs in Udumalpet | Cosuniq Technologies",
    description:
      "Join Cosuniq Technologies in Udumalpet. Build modern Next.js web applications, custom enterprise software, and mobile platforms with direct technical ownership.",
    url: "https://cosuniq.in/careers",
    siteName: "Cosuniq Technologies",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Careers at Cosuniq Technologies Udumalpet" }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers & Software Developer Jobs in Udumalpet | Cosuniq Technologies",
    description:
      "Explore software engineering, design, and walk-in developer roles at Cosuniq Technologies in Udumalpet, Tamil Nadu.",
    images: ["/assets/og-image.png"]
  }
};

export default function CareersPage() {
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
        "name": "Careers",
        "item": "https://cosuniq.in/careers"
      }
    ]
  };

  // Google for Jobs Schema: Multiple JobPosting entries
  const jobPostingSchemas = OPEN_JOBS.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": `
      <h3>About the Role</h3>
      <p>${job.summary}</p>
      <h3>Key Responsibilities</h3>
      <ul>
        ${job.responsibilities.map((r) => `<li>${r}</li>`).join("")}
      </ul>
      <h3>Requirements & Skills</h3>
      <ul>
        ${job.requirements.map((req) => `<li>${req}</li>`).join("")}
      </ul>
      <p>Location: Udumalpet, Tamil Nadu. Apply directly at Cosuniq Technologies or email founder@cosuniq.in.</p>
    `,
    "identifier": {
      "@type": "PropertyValue",
      "name": "Cosuniq Technologies",
      "value": job.id
    },
    "datePosted": "2026-10-20T00:00:00Z",
    "validThrough": "2027-10-20T23:59:59Z",
    "employmentType": job.id === "walkin-associate-developer" ? ["FULL_TIME", "INTERN"] : "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Cosuniq Technologies",
      "sameAs": "https://cosuniq.in",
      "logo": "https://cosuniq.in/assets/cosuniq-technologies.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5/233C, Sarathamani Layout, KVS Colony",
        "addressLocality": "Udumalpet",
        "addressRegion": "Tamil Nadu",
        "postalCode": "642126",
        "addressCountry": "IN"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": job.id === "walkin-associate-developer" ? 180000 : 300000,
        "maxValue": job.id === "fullstack-developer" ? 720000 : 600000,
        "unitText": "YEAR"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "India"
    }
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {jobPostingSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <InitReveal />
      <CareersClient />
    </>
  );
}

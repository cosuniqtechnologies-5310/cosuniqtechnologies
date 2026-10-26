import type { Metadata } from "next";
import Link from "next/link";
import InitReveal from "../../components/InitReveal";
import styles from "../../components/LegalPage.module.css";

export const metadata: Metadata = {
  title: "Disclaimer | Cosuniq Technologies",
  description:
    "Review the legal disclaimer for Cosuniq Technologies regarding website content, software engineering guides, portfolio case studies, and external resources.",
  keywords: [
    "Cosuniq disclaimer",
    "legal disclaimer",
    "software development disclaimer",
    "technical advice disclaimer",
    "agency terms disclaimer",
  ],
  alternates: { canonical: "https://www.cosuniq.in/disclaimer" },
  openGraph: {
    title: "Disclaimer | Cosuniq Technologies",
    description:
      "Review the legal disclaimer for Cosuniq Technologies regarding content accuracy, technical advisory, and portfolio case studies.",
    url: "https://www.cosuniq.in/disclaimer",
    siteName: "Cosuniq Technologies",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Cosuniq Disclaimer" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | Cosuniq Technologies",
    description: "Read the legal disclaimer for Cosuniq Technologies.",
    images: ["/assets/og-image.png"],
  },
};

export default function DisclaimerPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.cosuniq.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Disclaimer",
        item: "https://www.cosuniq.in/disclaimer",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <InitReveal />
      <div className={styles.legalRoot}>
        <div className="container">
          <div className={styles.legalContainer}>
            <header className={styles.headerBlock}>
              <span className={styles.eyebrow}>LEGAL & ADVISORY</span>
              <h1 className={styles.title}>Legal Disclaimer</h1>
              <p className={styles.effectiveDate}>Effective Date: October 2026 | Last Updated: October 2026</p>
            </header>

            <div className={styles.contentBody}>
              <p>
                The information provided on <code>https://www.cosuniq.in</code> (the “Site”) by Cosuniq Technologies (“we”, “us”, or “our”) is intended for general informational and marketing purposes only. All content, technical articles, and architectural patterns are published in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the completeness, accuracy, adequacy, validity, reliability, or availability of any information on the Site.
              </p>

              <h2>1. Technical Advisory & Educational Content</h2>
              <p>
                Articles, tutorials, benchmarks, and code snippets featured on our Insights blog or Academy are designed for conceptual reference and educational discussion. While prepared by experienced software engineers, technology evolves rapidly, and architectural decisions depend heavily on specific organizational infrastructure, security posture, and runtime environments.
              </p>
              <p>
                Implementing code snippets or infrastructure blueprints published on this site is done at your own discretion and risk. You should independently evaluate, test, and validate any architecture or software pattern prior to deploying in production environments.
              </p>

              <h2>2. No Guarantees on Business Outcomes</h2>
              <p>
                References to conversion rate uplifts, search engine ranking improvements, application speed gains, or cost reductions mentioned in our case studies reflect historical results achieved under specific client project circumstances.
              </p>
              <p>
                Past performance is not a guarantee of future outcomes. Commercial results vary based on industry competition, market conditions, product-market fit, client execution, and third-party platform algorithms (such as Google search ranking updates or advertising network policies).
              </p>

              <h2>3. Case Studies & Client Marks</h2>
              <p>
                All company names, brand logos, trademarks, and registered trademarks displayed on the Site are the intellectual property of their respective owners. Display of client trademarks or case study highlights does not imply endorsement beyond the professional digital engineering and design services performed by Cosuniq Technologies under contract.
              </p>

              <h2>4. External Links & Third-Party Services</h2>
              <p>
                Our Site may contain links to external third-party websites, developer documentation, cloud provider portals, or open-source repositories that are not owned or controlled by Cosuniq Technologies. We have no control over, and assume no responsibility for, the content, privacy policies, terms of service, or operational reliability of any third-party websites or services.
              </p>

              <h2>5. Limitation of Liability</h2>
              <p>
                Under no circumstances shall Cosuniq Technologies, its directors, employees, or partners be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or operational downtime arising from your use of the Site or reliance on any content provided herein.
              </p>

              <div className={styles.contactBox}>
                <h3>Questions Regarding This Disclaimer?</h3>
                <p>If you have any questions or require legal clarification regarding this Disclaimer, please reach out to our legal and management desk:</p>
                <p>Email: <a href="mailto:founder@cosuniq.in">founder@cosuniq.in</a></p>
                <p>Phone: <a href="tel:+917358696546">+91 73586 96546</a></p>
                <p>Headquarters: 5/233C, Sarathamani Layout, KVS Colony, Udumalpet, Tamil Nadu 642126, India.</p>
                <p style={{ marginTop: '1rem' }}>
                  Explore our <Link href="/privacy-policy">Privacy Policy</Link>, <Link href="/cookie-policy">Cookie Policy</Link>, and <Link href="/terms-and-conditions">Terms & Conditions</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

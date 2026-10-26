import type { Metadata } from "next";
import Link from "next/link";
import InitReveal from "../../components/InitReveal";
import styles from "../../components/LegalPage.module.css";

export const metadata: Metadata = {
  title: "Cookie Policy | Cosuniq Technologies",
  description:
    "Learn how Cosuniq Technologies uses cookies, web analytics, and local storage to provide a fast, secure, and high-performance digital experience.",
  keywords: [
    "Cosuniq cookie policy",
    "website cookies",
    "cookie privacy policy",
    "analytics cookies",
    "browser cookie settings",
  ],
  alternates: { canonical: "https://www.cosuniq.in/cookie-policy" },
  openGraph: {
    title: "Cookie Policy | Cosuniq Technologies",
    description:
      "Learn how Cosuniq Technologies uses cookies and local storage to ensure performance and security across our digital agency platform.",
    url: "https://www.cosuniq.in/cookie-policy",
    siteName: "Cosuniq Technologies",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Cosuniq Cookie Policy" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | Cosuniq Technologies",
    description: "Learn how Cosuniq Technologies handles cookies and analytics.",
    images: ["/assets/og-image.png"],
  },
};

export default function CookiePolicyPage() {
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
        name: "Cookie Policy",
        item: "https://www.cosuniq.in/cookie-policy",
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
              <span className={styles.eyebrow}>PRIVACY & TRANSPARENCY</span>
              <h1 className={styles.title}>Cookie Policy</h1>
              <p className={styles.effectiveDate}>Effective Date: October 2026 | Last Updated: October 2026</p>
            </header>

            <div className={styles.contentBody}>
              <p>
                This Cookie Policy explains how Cosuniq Technologies (“Cosuniq”, “we”, “us”, or “our”) uses cookies, web beacons, and local browser storage technologies when you visit our website at <code>https://www.cosuniq.in</code> or interact with our digital services.
              </p>

              <h2>1. What Are Cookies?</h2>
              <p>
                Cookies are small data text files placed on your computer, smartphone, or tablet when you navigate a website. They are widely used by digital platforms to make web applications function reliably, load faster, and provide anonymous performance metrics that help developers optimize user experience.
              </p>

              <h2>2. Categories of Cookies We Use</h2>
              <p>
                We do not sell personal data, nor do we deploy intrusive behavioral ad networks. We use only strictly necessary, functional, and performance measurement cookies:
              </p>

              <h3>A. Strictly Necessary & Security Cookies</h3>
              <p>
                These cookies and HTTP headers are vital for core site functionality, load balancing across the Vercel Global Edge Network, CSRF mitigation, and DDoS prevention. You cannot opt out of these cookies because the website cannot operate securely without them.
              </p>
              <ul>
                <li><strong>Session & Security Tokens:</strong> Ensures secure form submissions and protects against automated spam.</li>
                <li><strong>Vercel Edge Cookies:</strong> Maintains server affinity and high-speed asset delivery across global geographic points of presence.</li>
              </ul>

              <h3>B. Performance & Analytics Cookies</h3>
              <p>
                To understand how visitors discover and interact with our case studies, services, and technical blog posts, we collect aggregated, anonymized telemetry through privacy-conscious analytics tools (e.g. Google Analytics 4).
              </p>
              <ul>
                <li><strong>_ga / _ga_*:</strong> Used by Google Analytics to anonymously distinguish unique visitors and measure page session counts. These cookies do not store personally identifiable data.</li>
                <li><strong>Core Web Vitals Telemetry:</strong> Anonymously captures Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) metrics to keep page speed optimal.</li>
              </ul>

              <h3>C. Functional & Preference Storage</h3>
              <p>
                We may use browser Local Storage to remember UI preferences, such as custom cursor interactions, theme settings, or dismissible announcement banners across browsing sessions.
              </p>

              <h2>3. Managing & Disabling Cookies</h2>
              <p>
                Most modern browsers allow you to manage or block cookies through their privacy settings. Please note that blocking essential cookies may affect the visual layout or responsiveness of certain interactive components:
              </p>
              <ul>
                <li><strong>Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Third-party cookies.</li>
                <li><strong>Apple Safari:</strong> Preferences &gt; Privacy &gt; Prevent cross-site tracking / Block all cookies.</li>
                <li><strong>Mozilla Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Enhanced Tracking Protection.</li>
                <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions &gt; Manage and delete cookies.</li>
              </ul>

              <h2>4. Changes to This Cookie Policy</h2>
              <p>
                We may periodically update this Cookie Policy to reflect technical infrastructure updates, legal requirements, or new features. When updates occur, the “Last Updated” date at the top of this page will be revised accordingly.
              </p>

              <div className={styles.contactBox}>
                <h3>Questions or Concerns?</h3>
                <p>If you have any questions about our use of cookies or privacy practices, please contact our team directly:</p>
                <p>Email: <a href="mailto:founder@cosuniq.in">founder@cosuniq.in</a></p>
                <p>Phone: <a href="tel:+917358696546">+91 73586 96546</a></p>
                <p>Address: 5/233C, Sarathamani Layout, KVS Colony, Udumalpet, Tamil Nadu 642126, India.</p>
                <p style={{ marginTop: '1rem' }}>
                  Read our full <Link href="/privacy-policy">Privacy Policy</Link> and <Link href="/terms-and-conditions">Terms & Conditions</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

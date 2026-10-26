import type { Metadata } from "next";
import Link from "next/link";
import InitReveal from "../../components/InitReveal";
import InnerBanner from "../../components/InnerBanner";
import styles from "../../components/LegalPage.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Cosuniq Technologies",
  description: "Read Cosuniq Technologies' Privacy Policy. Learn how we collect, protect, and handle your personal information and project data.",
  alternates: { canonical: "https://www.cosuniq.in/privacy-policy" },
};

export default function PrivacyPolicyPage() {
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
        "name": "Privacy Policy",
        "item": "https://www.cosuniq.in/privacy-policy"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <InitReveal />
      <InnerBanner
        eyebrow="LEGAL & DATA GOVERNANCE"
        title="Privacy Policy"
        description="How Cosuniq Technologies safeguards your personal information, proprietary project specifications, and intellectual property with enterprise security."
        bgImage="/assets/images/office.webp"
      />
      <div className={styles.legalRoot} style={{ paddingTop: '3.5rem' }}>
        <div className="container">
          <div className={styles.legalContainer}>
            <header className={styles.headerBlock}>
              <span className={styles.eyebrow}>DATA PROTECTION FRAMEWORK</span>
              <p className={styles.effectiveDate}>Effective Date: October 2026 | Last Updated: October 2026</p>
            </header>

            <div className={styles.contentBody}>
              <p>
                Cosuniq Technologies (“Cosuniq”, “we”, “us”, or “our”) is committed to safeguarding the privacy of our website visitors, clients, partners, and academy students. This Privacy Policy details the types of personal and organizational data we collect, how we use and safeguard that data, and your rights regarding your personal information.
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                We collect information you voluntarily provide to us when you communicate with us, request a proposal, book a consultation, enroll in Cosuniq Academy, or interact with our web applications:
              </p>
              <ul>
                <li><strong>Contact Information:</strong> Full name, professional email address, telephone/mobile number, company or brand name, and job title.</li>
                <li><strong>Project Specifications:</strong> Technical scopes, functional requirements, timeline estimates, budget ranges, and design briefs shared during discovery calls.</li>
                <li><strong>Academy Enrollment Data:</strong> Student credentials, educational background, contact preferences, and course completion records.</li>
                <li><strong>Technical & Analytical Data:</strong> IP address, browser type and version, operating system, referrer URL, pages visited, time spent per page, and standard telemetry collected via privacy-focused analytics.</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>
                We use the data we collect solely for legitimate business, contractual, and technical purposes, including:
              </p>
              <ul>
                <li>Responding promptly to project inquiries and delivering custom proposals, estimates, and statements of work.</li>
                <li>Executing, deploying, and maintaining digital software, web applications, mobile apps, and brand systems under contract.</li>
                <li>Coordinating student enrollments, curriculum schedules, and mentor sessions for Cosuniq Academy.</li>
                <li>Monitoring website performance, enhancing user experience, and optimizing Core Web Vitals.</li>
                <li>Complying with applicable legal, taxation, and statutory obligations under Indian and international law.</li>
              </ul>

              <h2>3. Strict No-Sale Policy & Third-Party Sharing</h2>
              <p>
                <strong>Cosuniq Technologies will never sell, lease, or rent your personal information to third parties or data brokers.</strong>
              </p>
              <p>
                We only disclose data to trusted cloud and infrastructure service providers who assist us in operating our digital services (e.g., Vercel, Amazon Web Services, Google Cloud) under strict confidentiality and data processing agreements adhering to industry-standard security protocols.
              </p>

              <h2>4. Data Security & Storage</h2>
              <p>
                We implement robust organizational and technical safeguards to protect your personal data from unauthorized access, alteration, disclosure, or destruction. All web traffic to <code>cosuniq.in</code> is encrypted using Transport Layer Security (TLS 1.3 / HTTPS), and internal database access is strictly restricted through role-based authentication and multi-factor authorization.
              </p>

              <h2>5. Cookies & Tracking Technologies</h2>
              <p>
                We use essential and performance cookies to remember your navigation preferences and understand how visitors interact with our content. You may configure your browser settings to reject cookies at any time; however, some interactive features may experience reduced convenience.
              </p>

              <h2>6. Your Legal Rights</h2>
              <p>
                Depending on your jurisdiction, you possess the right to:
              </p>
              <ul>
                <li>Request access to the personal data we hold about you.</li>
                <li>Request correction of inaccurate or incomplete information.</li>
                <li>Request the deletion of your personal data from our active records, subject to regulatory retention mandates.</li>
                <li>Withdraw consent for marketing communications at any time.</li>
              </ul>

              <h2>7. Updates to this Policy</h2>
              <p>
                We may periodically update this Privacy Policy to reflect modifications in our operational practices or legal requirements. Material changes will be noted with an updated effective date at the top of this document.
              </p>

              <div className={styles.contactBox}>
                <h3>Contact & Grievance Officer</h3>
                <p>For any questions, data requests, or privacy concerns, please contact our Data Governance Officer directly:</p>
                <p><strong>Cosuniq Technologies</strong></p>
                <p>Email: <a href="mailto:founder@cosuniq.in">founder@cosuniq.in</a></p>
                <p>Phone: <a href="tel:+917358696546">+91 73586 96546</a></p>
                <p>Location: Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

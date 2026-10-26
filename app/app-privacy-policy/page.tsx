import type { Metadata } from "next";
import InitReveal from "../../components/InitReveal";
import InnerBanner from "../../components/InnerBanner";
import styles from "../../components/LegalPage.module.css";

export const metadata: Metadata = {
  title: "SKL SCHOOL App Privacy Policy | Cosuniq Technologies",
  description:
    "Privacy, account access and account deletion policy for the SKL SCHOOL mobile application, developed by Cosuniq Technologies for authorized students, teachers and school administrators.",
  alternates: { canonical: "https://www.cosuniq.in/app-privacy-policy" },
};

export default function AppPrivacyPolicyPage() {
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
        name: "SKL SCHOOL App Privacy Policy",
        item: "https://www.cosuniq.in/app-privacy-policy",
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
      <InnerBanner
        eyebrow="APP PRIVACY & ACCOUNT POLICY"
        title="SKL SCHOOL App Policy"
        description="How accounts are accessed, managed and deleted in the SKL SCHOOL application, and how to request removal of a student account and its associated data."
        bgImage="/assets/images/office.webp"
      />
      <div className={styles.legalRoot} style={{ paddingTop: "3.5rem" }}>
        <div className="container">
          <div className={styles.legalContainer}>
            <header className={styles.headerBlock}>
              <span className={styles.eyebrow}>SKL SCHOOL APPLICATION</span>
              <p className={styles.effectiveDate}>
                Effective Date: October 2026 | Last Updated: October 2026
              </p>
            </header>

            <div className={styles.contentBody}>
              <p>
                The SKL SCHOOL application (the “App”) is developed and maintained by Cosuniq
                Technologies (“Cosuniq”, “we”, “us”, or “our”) for use by the school
                institution. This page explains who may use the App, how accounts are created
                and managed, and how account and data deletion is handled.
              </p>

              <h2>Account Access &amp; Management Policy</h2>

              <h2>1. App Access</h2>
              <p>
                The SKL SCHOOL application is <strong>exclusively restricted</strong> to
                authorized students, teachers, and school administrative personnel of the
                institution.
              </p>
              <ul>
                <li>Public or self-registration is disabled.</li>
                <li>
                  Accounts are strictly created and managed by the School Administrator.
                </li>
                <li>
                  Login credentials are issued by the school; users cannot create an account
                  on their own.
                </li>
              </ul>

              <h2>2. Account Deletion Process</h2>
              <p>
                Users (students or parents) <strong>cannot self-delete</strong> their accounts
                directly from the app interface.
              </p>
              <p>
                If a student leaves the school, graduates, or is dismissed, their account is
                manually deactivated and deleted by the School Administrator.
              </p>

              <h2>3. Deletion Request</h2>
              <p>
                To request the deletion of a student account and associated data, users must
                either:
              </p>
              <ul>
                <li>Contact the school administration directly, or</li>
                <li>
                  Submit a request via our support email at{" "}
                  <a href="mailto:cosuniqtechnologies@gmail.com">
                    cosuniqtechnologies@gmail.com
                  </a>
                  .
                </li>
              </ul>
              <p>
                Upon verification by the school authority, the data will be permanently
                removed from our servers within a standard processing timeframe.
              </p>

              <h2>4. Data Handling</h2>
              <p>
                Data in the App is used solely for the school’s academic and administrative
                purposes. Cosuniq Technologies does not sell, lease, or rent personal
                information to third parties. Access to student data is limited to authorized
                school personnel and the technical staff who maintain the App.
              </p>

              <h2>5. Updates to this Policy</h2>
              <p>
                We may update this policy from time to time. Changes will be reflected on this
                page with an updated effective date.
              </p>

              <div className={styles.contactBox}>
                <h3>Support &amp; Deletion Requests</h3>
                <p>
                  For account deletion requests, data queries, or privacy concerns related to
                  the SKL SCHOOL App, please contact:
                </p>
                <p>
                  <strong>Cosuniq Technologies</strong>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:cosuniqtechnologies@gmail.com">
                    cosuniqtechnologies@gmail.com
                  </a>
                </p>
                <p>
                  Phone: <a href="tel:+917358696546">+91 73586 96546</a>
                </p>
                <p>
                  Address: 5/233C, Sarathamani Layout, KVS Colony, Udumalaipettai, Tamil Nadu
                  642126, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

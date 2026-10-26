import type { Metadata } from "next";
import Link from "next/link";
import InitReveal from "../../components/InitReveal";
import styles from "../../components/LegalPage.module.css";

export const metadata: Metadata = {
  title: "Terms and Conditions | Cosuniq Technologies",
  description: "Read the Terms and Conditions of service for Cosuniq Technologies. Outlining client agreements, intellectual property rights, and service standards.",
  alternates: { canonical: "https://www.cosuniq.in/terms-and-conditions" },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <InitReveal />
      <div className={styles.legalRoot}>
        <div className="container">
          <div className={styles.legalContainer}>
            <header className={styles.headerBlock}>
              <span className={styles.eyebrow}>LEGAL & COMPLIANCE</span>
              <h1 className={styles.title}>Terms and Conditions</h1>
              <p className={styles.effectiveDate}>Effective Date: October 2026 | Last Updated: October 2026</p>
            </header>

            <div className={styles.contentBody}>
              <p>
                Welcome to Cosuniq Technologies (“Cosuniq”, “we”, “our”, or “us”). By accessing our website at <code>cosuniq.in</code>, engaging our software development or design services, or enrolling in Cosuniq Academy, you agree to be legally bound by these Terms and Conditions. Please review them carefully before initiating work with us.
              </p>

              <h2>1. Scope of Services</h2>
              <p>
                Cosuniq Technologies delivers professional digital product engineering, including custom web application development, native and cross-platform mobile apps, UI/UX and product design, brand identity systems, e-commerce storefronts, AI workflows, and cloud DevOps infrastructure.
              </p>
              <p>
                Specific deliverables, project milestones, compensation schedules, and technical requirements are formally defined in individual Statements of Work (SOW) or master service contracts executed between Cosuniq and the client.
              </p>

              <h2>2. Intellectual Property & Ownership</h2>
              <p>
                <strong>Client Deliverables:</strong> Upon receipt of full and final contractual payment for a designated project milestone or deliverable, all bespoke source code, application assets, designs, vector graphics, and brand marks created specifically for the client are irrevocably assigned and transferred to the client.
              </p>
              <p>
                <strong>Pre-Existing & Open-Source Components:</strong> Cosuniq retains all ownership rights to any pre-existing codebases, internal development boilerplates, proprietary tooling, or open-source libraries incorporated into the project. The client is granted a perpetual, royalty-free, worldwide license to use, modify, and distribute such embedded libraries strictly in connection with the delivered software.
              </p>

              <h2>3. Client Responsibilities & Approvals</h2>
              <p>
                To maintain project velocity and prevent delivery delays, the client agrees to:
              </p>
              <ul>
                <li>Provide necessary creative assets, copy, server credentials, and API access keys in a timely manner.</li>
                <li>Appoint a primary point of contact authorized to approve sprints, designs, and milestone releases.</li>
                <li>Review submitted deliverables within the agreed review window (typically 5–7 business days).</li>
              </ul>

              <h2>4. Invoicing, Payments & Taxes</h2>
              <p>
                Invoices are issued according to the payment schedule established in the applicable proposal or SOW (e.g., upfront commencement deposit, milestone-based installments, or bi-weekly sprint billing).
              </p>
              <p>
                Invoices are payable within 14 calendar days of issuance unless otherwise stipulated in writing. Applicable statutory taxes (such as GST in India) are added to invoices as required by applicable laws.
              </p>

              <h2>5. Confidentiality & Non-Disclosure</h2>
              <p>
                Both parties agree to hold all proprietary, technical, and commercial information received from the other party in strict confidence. We will never share your trade secrets, unreleased product roadmaps, or customer databases with outside parties.
              </p>

              <h2>6. Warranties & Quality Assurance</h2>
              <p>
                We warrant that all delivered code will perform substantially in accordance with the agreed functional specifications at the time of deployment. Unless otherwise specified in the SOW, Cosuniq provides a complimentary 30-day post-launch warranty period during which critical bugs or deviations from the signed specification are remediated at no additional charge.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, neither party shall be liable to the other for any indirect, incidental, punitive, or consequential damages, including loss of profits, data, or business opportunities. Cosuniq&apos;s cumulative aggregate liability arising from any project contract shall not exceed the total fees paid by the client under that specific SOW.
              </p>

              <h2>8. Governing Law & Dispute Resolution</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the substantive laws of India. Any dispute or claim arising under or related to these Terms shall be subject to the exclusive jurisdiction of the courts located in Chennai, Tamil Nadu, India.
              </p>

              <div className={styles.contactBox}>
                <h3>Questions Regarding Terms</h3>
                <p>If you have any questions or require custom contractual arrangements, please reach out directly:</p>
                <p><strong>Cosuniq Technologies Legal Affairs</strong></p>
                <p>Email: <a href="mailto:founder@cosuniq.in">founder@cosuniq.in</a></p>
                <p>Phone: <a href="tel:+917358696546">+91 73586 96546</a></p>
                <p>Address: Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

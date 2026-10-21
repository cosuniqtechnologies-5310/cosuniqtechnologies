"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { ServiceData } from "./servicesData";
import styles from "./ServiceDetail.module.css";
import FinalCta from "./FinalCta";

export default function ServiceDetailClient({ service }: { service: ServiceData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className={styles.servicePageRoot}>
      {/* 1. DELIVERABLES SECTION */}
      <section className={styles.deliverablesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              WHAT WE DELIVER
            </span>
            <h2 className={styles.headline}>Engineered with precision down to every detail.</h2>
            <p className={styles.subheadline}>
              We partner directly with founders and product teams to deliver end-to-end excellence without shortcuts.
            </p>
          </div>

          <div className={styles.deliverablesGrid}>
            {service.deliverables.map(d => (
              <div key={d.num} className={styles.deliverableCard}>
                <span className={styles.deliverableNum}>{d.num}</span>
                <h3 className={styles.deliverableTitle}>{d.title}</h3>
                <p className={styles.deliverableDesc}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. TECH STACK SECTION */}
      <section className={styles.techSection}>
        <div className="container">
          <div className={styles.sectionHeader} style={{ marginBottom: '2rem' }}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              TOOLS & ECOSYSTEM
            </span>
            <h2 className={styles.headline}>Technologies we master for this discipline.</h2>
            <p className={styles.subheadline}>
              Battle-tested frameworks, modern libraries, and production-proven infrastructure.
            </p>
          </div>

          <div className={styles.techGrid}>
            {service.techStack.map(tech => (
              <div key={tech} className={styles.techItem}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROCESS SECTION */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              HOW WE WORK
            </span>
            <h2 className={styles.headline}>A proven, predictable delivery process.</h2>
            <p className={styles.subheadline}>
              No black boxes. Direct communication, clear milestones, and weekly progress visibility.
            </p>
          </div>

          <div className={styles.processList}>
            {service.process.map(p => (
              <div key={p.step} className={styles.processCard}>
                <div className={styles.processStep}>{p.step}</div>
                <h3 className={styles.processTitle}>{p.title}</h3>
                <p className={styles.processDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CASE STUDY SPOTLIGHT */}
      <section className={styles.spotlightSection}>
        <div className="container">
          <div className={styles.spotlightInner}>
            <div>
              <span className={styles.spotlightTag}>{service.caseStudy.tag}</span>
              <h2 className={styles.spotlightTitle}>{service.caseStudy.title}</h2>
              <p className={styles.spotlightDesc}>{service.caseStudy.desc}</p>
              <Link href={service.caseStudy.link} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--brand)',
                fontWeight: 700,
                fontSize: '1rem'
              }}>
                View Full Technical Case Study <FiArrowRight />
              </Link>
            </div>

            <div className={styles.spotlightMetric}>
              <span className={styles.spotlightMetricVal}>{service.caseStudy.metricVal}</span>
              <span className={styles.spotlightMetricLbl}>{service.caseStudy.metricLbl}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      {service.faqs && service.faqs.length > 0 && (
        <section className={styles.faqSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className={styles.headline}>Everything you need to know.</h2>
            </div>

            <div className={styles.faqList}>
              {service.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className={styles.faqItem}>
                    <button
                      className={styles.faqQuestion}
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <span style={{ fontSize: '1.4rem', color: 'var(--brand)', lineHeight: 1 }}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className={styles.faqAnswer}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 6. FINAL CTA */}
      <FinalCta />
    </div>
  );
}

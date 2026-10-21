"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle, FiChevronDown, FiMapPin } from "react-icons/fi";
import { LocationData, locationsMap } from "./locationsData";
import styles from "./LocationDetail.module.css";
import FinalCta from "./FinalCta";

export default function LocationDetailClient({ location }: { location: LocationData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Other regional locations for natural interlinking
  const otherLocations = Object.values(locationsMap).filter(l => l.slug !== location.slug);

  return (
    <div className={styles.locationPageRoot}>
      {/* BREADCRUMB NAVIGATION */}
      <nav aria-label="Breadcrumb" className={styles.breadcrumbNav}>
        <div className="container">
          <ol className={styles.breadcrumbList}>
            <li className={styles.breadcrumbItem}>
              <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            </li>
            <li className={styles.breadcrumbSeparator}>/</li>
            <li className={styles.breadcrumbItem}>
              <Link href="/services" className={styles.breadcrumbLink}>What We Do</Link>
            </li>
            <li className={styles.breadcrumbSeparator}>/</li>
            <li className={styles.breadcrumbItem}>
              <span className={styles.breadcrumbCurrent}>{location.cityName}</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* 1. LOCAL CONTEXT & COMMERCIAL REALITY */}
      <section className={styles.contextSection}>
        <div className="container">
          <div className={styles.contextInner}>
            <div className={styles.contextText}>
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                REGIONAL CAPABILITY • {location.cityName.toUpperCase()}
              </span>
              <h2>{location.localContext.heading}</h2>
              <p className={styles.contextDesc}>{location.localContext.description}</p>
              <div className={styles.contextHighlight}>
                <FiCheckCircle className={styles.checkIcon} size={18} />
                <span>{location.localContext.highlight}</span>
              </div>
            </div>

            <div className={styles.contextSidebar}>
              <h3 className={styles.sidebarTitle}>Why {location.cityName} Businesses Choose Cosuniq</h3>
              <ul className={styles.sidebarList}>
                <li className={styles.sidebarItem}>
                  <FiCheckCircle className={styles.checkIcon} />
                  <span>Direct founder & engineer communication</span>
                </li>
                <li className={styles.sidebarItem}>
                  <FiCheckCircle className={styles.checkIcon} />
                  <span>Sub-second page speeds & modern Next.js stack</span>
                </li>
                <li className={styles.sidebarItem}>
                  <FiCheckCircle className={styles.checkIcon} />
                  <span>Transparent milestone-driven billing</span>
                </li>
                <li className={styles.sidebarItem}>
                  <FiCheckCircle className={styles.checkIcon} />
                  <span>Tamil Nadu regional business domain understanding</span>
                </li>
                <li className={styles.sidebarItem}>
                  <FiCheckCircle className={styles.checkIcon} />
                  <span>Ongoing maintenance & long-term SLA support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE TARGET SERVICES */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              SPECIALIZED CAPABILITIES
            </span>
            <h2 className={styles.headline}>Targeted digital services for {location.cityName} businesses.</h2>
            <p className={styles.subheadline}>
              Tailored software, responsive websites, and brand assets designed for measurable regional and international performance.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {location.targetServices.map(srv => (
              <div key={srv.num} className={styles.serviceCard}>
                <span className={styles.serviceNum}>{srv.num}</span>
                <h3 className={styles.serviceTitle}>{srv.title}</h3>
                <p className={styles.serviceDesc}>{srv.desc}</p>
                <Link href={srv.serviceLink} className={styles.serviceLink}>
                  Explore {srv.serviceName} <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRACTICAL LOCAL PROBLEMS & SOLUTIONS */}
      <section className={styles.solutionsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              PROBLEM-SOLVING ENGINEERING
            </span>
            <h2 className={styles.headline}>Practical challenges we solve for {location.cityName} companies.</h2>
            <p className={styles.subheadline}>
              We don&apos;t build generic showcase templates. We build systems that resolve daily operational and commercial bottlenecks.
            </p>
          </div>

          <div className={styles.solutionsGrid}>
            {location.practicalSolutions.map((item, idx) => (
              <div key={idx} className={styles.solutionCard}>
                <div className={styles.problemBox}>
                  <span className={styles.problemLabel}>The Challenge</span>
                  <p className={styles.problemText}>{item.problem}</p>
                </div>
                <div>
                  <span className={styles.solutionLabel}>Cosuniq&apos;s Solution</span>
                  <p className={styles.solutionText}>{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REAL CASE STUDY SPOTLIGHT */}
      <section className={styles.spotlightSection}>
        <div className="container">
          <div className={styles.spotlightInner}>
            <div>
              <span className={styles.spotlightTag}>{location.caseStudy.tag}</span>
              <h2 className={styles.spotlightTitle}>{location.caseStudy.title}</h2>
              <p className={styles.spotlightDesc}>{location.caseStudy.desc}</p>
              <Link href={location.caseStudy.link} className={styles.spotlightBtn}>
                View Technical Case Study <FiArrowRight />
              </Link>
            </div>

            <div className={styles.metricBox}>
              <div className={styles.metricValue}>{location.caseStudy.metricVal}</div>
              <div className={styles.metricLabel}>{location.caseStudy.metricLbl}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      {location.faqs && location.faqs.length > 0 && (
        <section className={styles.faqSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                QUESTIONS & ANSWERS
              </span>
              <h2 className={styles.headline}>Frequently asked by {location.cityName} clients.</h2>
            </div>

            <div className={styles.faqList}>
              {location.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}>
                    <button
                      className={styles.faqQuestion}
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <FiChevronDown
                        className={styles.faqIcon}
                        style={{
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                        }}
                      />
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

      {/* 6. REGIONAL COVERAGE & CROSS-LOCATION LINKS */}
      <section style={{ padding: "4rem 0", background: "#FAFAFA", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              WESTERN TAMIL NADU CORRIDOR
            </span>
            <h3 style={{
              fontFamily: "var(--font-plus-jakarta), sans-serif",
              fontSize: "1.6rem",
              fontWeight: 800,
              color: "#111111",
              marginTop: "0.5rem"
            }}>
              Explore digital solutions across neighboring hubs.
            </h3>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem"
          }}>
            {otherLocations.map(loc => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "16px",
                  padding: "1.4rem",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: "all 0.25s ease"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <FiMapPin style={{ color: "var(--brand)" }} size={18} />
                  <span style={{ fontWeight: 700, color: "#222222", fontSize: "0.95rem" }}>
                    {loc.cityName}
                  </span>
                </div>
                <FiArrowRight style={{ color: "var(--brand)" }} size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <FinalCta />
    </div>
  );
}

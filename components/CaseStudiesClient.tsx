"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import styles from "./CaseStudies.module.css";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: "ecommerce" | "mobile" | "saas" | "enterprise";
  categoryLabel: string;
  image: string;
  tagline: string;
  challenge: string;
  solution: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  quote?: string;
  ctaText?: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: "sellgy",
    title: "Sellgy Multi-Vendor Commerce Engine",
    client: "Sellgy Commerce Ecosystem",
    category: "ecommerce",
    categoryLabel: "E-Commerce / Product",
    image: "/assets/images/sellgy_ui.webp",
    tagline: "Building a high-throughput, sub-second checkout digital marketplace platform engineered for hyper-growth.",
    challenge: "Traditional commerce templates crumbled under 10k+ concurrent shopping sessions, causing checkout drop-offs and database transaction locking.",
    solution: "Engineered a headless storefront with Next.js, distributed microservices in Node.js, redis session caching, and multi-payment orchestration.",
    metrics: [
      { value: "4.2x", label: "Faster Checkout" },
      { value: "99.99%", label: "Uptime on Surge" },
      { value: "+64%", label: "Mobile Conversion" }
    ],
    tags: ["Next.js", "Node.js", "Redis", "Stripe Connect", "AWS ECS", "Tailwind CSS"],
    quote: "Cosuniq didn’t just write code — they architected our foundation. We survived our largest flash sale with zero downtime."
  },
  {
    id: "classbell",
    title: "Classbell Educational Communication OS",
    client: "Classbell EdTech",
    category: "mobile",
    categoryLabel: "Mobile / EdTech",
    image: "/assets/images/classbell_ui.webp",
    tagline: "Connecting 120,000+ students, educators, and parents through instantaneous, reliable push notifications and attendance logs.",
    challenge: "High SMS carrier costs and unreliable message delivery led to parent confusion and administrative overhead during school announcements.",
    solution: "Designed and engineered native-feel React Native mobile applications backed by Firebase push gateway and offline-first encrypted SQLite.",
    metrics: [
      { value: "120K+", label: "Daily Notifications" },
      { value: "98.4%", label: "Engagement Rate" },
      { value: "-72%", label: "SMS Cost Reduction" }
    ],
    tags: ["React Native", "Firebase Cloud Messaging", "Node.js", "PostgreSQL", "Offline-First"],
    quote: "Classbell replaced our chaotic communication channels with one fluid app that parents check before coffee every morning."
  },
  {
    id: "shopify-sync",
    title: "Shopify Inventory Sync 4 Enterprise",
    client: "Omnichannel Retail Supply",
    category: "enterprise",
    categoryLabel: "Enterprise / Automation",
    image: "/assets/images/shopify_sync_ui.webp",
    tagline: "Zero-lag automated inventory synchronization across physical warehouses and Shopify Plus storefronts.",
    challenge: "Overselling and manual stock reconciliation across 15,000+ SKUs resulted in costly order cancellations and negative customer reviews.",
    solution: "Created an event-driven webhook processing pipeline with automated reconciliation workers and instant failover safeguards.",
    metrics: [
      { value: "99.8%", label: "Sync Accuracy" },
      { value: "<1.8s", label: "Event Propagation" },
      { value: "-94%", label: "Overselling Tickets" }
    ],
    tags: ["Shopify Plus API", "TypeScript", "Redis Queues", "PostgreSQL", "Docker"],
    quote: "Inventory mismatches used to cost us hundreds of hours each quarter. This engine runs silently and accurately 24/7."
  },
  {
    id: "orangebabe",
    title: "Orangebabe Kids Fashion Experience",
    client: "Orangebabe Apparel",
    category: "ecommerce",
    categoryLabel: "E-Commerce / Brand",
    image: "/assets/images/orangebabe_mockup.webp",
    tagline: "Transforming a playful children’s fashion brand into a modern, delightful, high-converting digital storefront.",
    challenge: "High bounce rates on mobile devices caused by slow asset loading and complicated navigation patterns for busy parents.",
    solution: "Custom mobile-first UI/UX overhaul, micro-animations, visual product bundler, and streamlined single-page checkout.",
    metrics: [
      { value: "+140%", label: "Mobile Conversions" },
      { value: "-38%", label: "Cart Drop-Off" },
      { value: "1.4s", label: "Mobile LCP" }
    ],
    tags: ["Shopify Liquid", "Custom JavaScript", "Responsive UX", "Conversion Design"],
    quote: "Our new store feels as joyful as our brand. Our conversion rate jumped within the first 14 days of launch."
  },
  {
    id: "lumen-crm",
    title: "Lumen Real-Time Financial Ledger",
    client: "Lumen Financial Technologies",
    category: "saas",
    categoryLabel: "SaaS / Fintech",
    image: "/assets/images/dashboard.webp",
    tagline: "Sub-100ms financial queries and immutable audit logging for rapid-growth enterprise transactions.",
    challenge: "Legacy relational reporting queries were taking over 8 seconds to run, throttling executive decision making and compliance exports.",
    solution: "Re-engineered backend data layers with optimized partitioned indexing, React Query state caching, and role-based cryptographic audit trails.",
    metrics: [
      { value: "<110ms", label: "Average Query Latency" },
      { value: "10M+", label: "Records Handled" },
      { value: "100%", label: "Audit Compliance" }
    ],
    tags: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
    quote: "Cosuniq gave us enterprise-grade reporting speed without having to rewrite our underlying accounting systems."
  },
  {
    id: "fitpulse",
    title: "FitPulse IoT Gym OS & Turnstile Access",
    client: "FitPulse Clubs",
    category: "mobile",
    categoryLabel: "Mobile / IoT",
    image: "/assets/images/bento-mobile.webp",
    tagline: "Seamless member booking, trainer scheduling, and contactless QR/RFID physical access control.",
    challenge: "Long front-desk queues during peak gym hours and unauthorized access via shared paper passes.",
    solution: "Engineered cross-platform mobile app paired with hardware webhooks for sub-half-second turnstile opening.",
    metrics: [
      { value: "45K+", label: "Active Members" },
      { value: "0.4s", label: "Turnstile Latency" },
      { value: "+65%", label: "Class Booking Rate" }
    ],
    tags: ["Flutter", "IoT Gateways", "Node.js", "Stripe Billing", "WebSockets"],
    quote: "Members tap their phone, the turnstile opens instantly, and their workout begins. Friction is completely gone."
  }
];

export default function CaseStudiesClient() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredStudies = activeFilter === "all"
    ? caseStudiesData
    : caseStudiesData.filter(s => s.category === activeFilter);

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Category filter tabs */}
        <div className={styles.filterBar}>
          {[
            { id: "all", label: "All Case Studies" },
            { id: "ecommerce", label: "E-Commerce & Retail" },
            { id: "mobile", label: "Mobile Apps & IoT" },
            { id: "saas", label: "SaaS & Platforms" },
            { id: "enterprise", label: "Enterprise Automation" }
          ].map(f => (
            <button
              key={f.id}
              className={`${styles.filterBtn} ${activeFilter === f.id ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Case studies grid */}
        <div className={styles.grid}>
          {filteredStudies.map((study) => (
            <article key={study.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <span className={styles.badgeCategory}>{study.categoryLabel}</span>
                <img
                  src={study.image}
                  alt={study.title}
                  loading="lazy"
                  decoding="async"
                  width={700}
                  height={440}
                />
              </div>

              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{study.title}</h2>
                <p className={styles.cardSubtitle}>{study.tagline}</p>

                {/* Key Metrics */}
                <div className={styles.metricsRow}>
                  {study.metrics.map((m, idx) => (
                    <div key={idx} className={styles.metricItem}>
                      <span className={styles.metricValue}>{m.value}</span>
                      <span className={styles.metricLabel}>{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Challenge & Solution */}
                <div className={styles.sectionPill}>
                  <div className={styles.pillHeading}>The Challenge</div>
                  <div className={styles.pillText}>{study.challenge}</div>
                </div>

                <div className={styles.sectionPill} style={{ marginTop: '0.75rem' }}>
                  <div className={styles.pillHeading}>Cosuniq Solution</div>
                  <div className={styles.pillText}>{study.solution}</div>
                </div>

                {/* Tags */}
                <div className={styles.tagList}>
                  {study.tags.map(t => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>

                {study.quote && (
                  <div className={styles.quoteBlock}>
                    “{study.quote}”
                  </div>
                )}

                <div className={styles.cardFooter}>
                  <span style={{ fontSize: '0.85rem', color: '#777777', fontWeight: 600 }}>Client: {study.client}</span>
                  <Link href="/contact" className={styles.ctaLink}>
                    Discuss similar project <FiArrowRight />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

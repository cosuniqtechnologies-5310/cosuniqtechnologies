"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";

interface WorkProject {
  id: string;
  category: "all" | "ecommerce" | "mobile" | "saas" | "branding";
  categoryName: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  caseStudyUrl?: string;
  metrics?: string;
}

const projects: WorkProject[] = [
  {
    id: "sellgy",
    category: "ecommerce",
    categoryName: "Product / E-Commerce",
    title: "Own Product: Sellgy",
    description: "Our proprietary, scalable e-commerce application engineered for ultra-fast checkout, real-time inventory management, and seamless multi-channel merchant operations.",
    image: "/assets/images/sellgy_ui.webp",
    tags: ["Next.js", "Node.js", "Redis", "Stripe", "Docker"],
    caseStudyUrl: "/case-studies",
    metrics: "4.2x Faster Checkout"
  },
  {
    id: "classbell",
    category: "mobile",
    categoryName: "Mobile Application",
    title: "Classbell OS",
    description: "An intuitive mobile platform designed to streamline parent-teacher communications, daily attendance logs, and instant institutional notifications.",
    image: "/assets/images/classbell_ui.webp",
    tags: ["React Native", "Firebase", "PostgreSQL", "Push Gateway"],
    caseStudyUrl: "/case-studies",
    metrics: "120K+ Daily Notifications"
  },
  {
    id: "shopify-sync",
    category: "saas",
    categoryName: "SaaS / Automation",
    title: "Shopify Inventory Sync 4",
    description: "A robust inventory engine providing seamless, real-time synchronization between multi-warehouse physical stock and high-volume Shopify stores.",
    image: "/assets/images/shopify_sync_ui.webp",
    tags: ["Shopify Plus", "TypeScript", "Redis Queues", "Event Engine"],
    caseStudyUrl: "/case-studies",
    metrics: "99.8% Sync Accuracy"
  },
  {
    id: "orangebabe",
    category: "ecommerce",
    categoryName: "E-Commerce",
    title: "Orangebabe Children's Fashion",
    description: "A vibrant, playful, high-converting e-commerce storefront for children's fashion that dramatically increased mobile engagement and reduced checkout friction.",
    image: "/assets/images/orangebabe_mockup.webp",
    tags: ["Shopify Liquid", "UI/UX Design", "Conversion Rate Optimization"],
    caseStudyUrl: "/case-studies",
    metrics: "+140% Mobile Conversion"
  },
  {
    id: "lumen-crm",
    category: "saas",
    categoryName: "SaaS Platform",
    title: "Lumen Financial Core",
    description: "Real-time analytics dashboard and audit ledger engine engineered for sub-100ms transactional queries and automated regulatory compliance reporting.",
    image: "/assets/images/dashboard.webp",
    tags: ["Next.js", "PostgreSQL", "Partitioned Indexing", "Prisma"],
    caseStudyUrl: "/case-studies",
    metrics: "<110ms Query Latency"
  },
  {
    id: "brand-identity",
    category: "branding",
    categoryName: "Brand Strategy & Design",
    title: "Cosuniq Technologies System",
    description: "Comprehensive visual identity, digital design language, and design token architecture positioning next-generation technology for global scale.",
    image: "/assets/images/hero-brand.webp",
    tags: ["Brand System", "Typography", "Design Tokens", "Figma"],
    metrics: "Complete Brand Ecosystem"
  }
];

export default function PortfolioClient() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filtered = activeTab === "all"
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <section style={{ backgroundColor: 'var(--white)', padding: '4rem 0 6rem' }}>
      <div className="container">
        {/* Navigation link to Case Studies */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '1.25rem 1.75rem',
          background: 'var(--cream)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 106, 0, 0.15)',
          marginBottom: '3rem'
        }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Looking for deep technical proofs?</span>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#333333', fontWeight: 600 }}>Explore our full breakdown of architecture, challenges, and measurable results.</p>
          </div>
          <Link href="/case-studies" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'var(--brand)',
            color: '#ffffff',
            padding: '0.65rem 1.35rem',
            borderRadius: '9999px',
            fontWeight: 700,
            fontSize: '0.88rem'
          }}>
            Explore In-Depth Case Studies <FiArrowRight />
          </Link>
        </div>

        {/* Filter buttons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          justifyContent: 'center',
          marginBottom: '3rem'
        }}>
          {[
            { id: "all", label: "All Projects" },
            { id: "ecommerce", label: "E-Commerce" },
            { id: "mobile", label: "Mobile Apps" },
            { id: "saas", label: "SaaS & Software" },
            { id: "branding", label: "Brand Identity" }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setActiveTab(f.id)}
              style={{
                padding: '0.65rem 1.35rem',
                borderRadius: '9999px',
                border: activeTab === f.id ? '1px solid var(--brand)' : '1px solid rgba(0,0,0,0.08)',
                background: activeTab === f.id ? 'var(--brand)' : '#ffffff',
                color: activeTab === f.id ? '#ffffff' : '#444444',
                fontFamily: 'var(--font-plus-jakarta)',
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                boxShadow: activeTab === f.id ? '0 4px 16px rgba(255, 106, 0, 0.25)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="portfolio-grid">
          {filtered.map(proj => (
            <article key={proj.id} className="portfolio-item reveal" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="portfolio-thumb" style={{ position: 'relative' }}>
                {proj.metrics && (
                  <span style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(17,17,17,0.85)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    zIndex: 2
                  }}>
                    {proj.metrics}
                  </span>
                )}
                <img
                  src={proj.image}
                  alt={proj.title}
                  loading="lazy"
                  decoding="async"
                  width={700}
                  height={440}
                />
              </div>
              <div className="portfolio-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span className="tag">{proj.categoryName}</span>
                <h3>{proj.title}</h3>
                <p style={{ flex: 1 }}>{proj.description}</p>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', margin: '1rem 0' }}>
                  {proj.tags.map(t => (
                    <span key={t} style={{
                      background: '#f2f2f2',
                      fontSize: '0.75rem',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '4px',
                      color: '#555'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                {proj.caseStudyUrl && (
                  <Link href={proj.caseStudyUrl} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    marginTop: 'auto',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: 'var(--brand)'
                  }}>
                    Read technical case study <FiArrowRight />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

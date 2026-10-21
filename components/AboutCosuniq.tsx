"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./AboutCosuniq.module.css";

const Dots = () => (
  <>
    <circle cx="2"  cy="2"  r="1" stroke="rgba(255,255,255,0.4)" strokeWidth="0.85" fill="none" />
    <circle cx="12" cy="2"  r="1" stroke="rgba(255,255,255,0.4)" strokeWidth="0.85" fill="none" />
    <circle cx="22" cy="2"  r="1" stroke="rgba(255,255,255,0.4)" strokeWidth="0.85" fill="none" />
    <circle cx="22" cy="12" r="1" stroke="rgba(255,255,255,0.4)" strokeWidth="0.85" fill="none" />
    <circle cx="22" cy="22" r="1" stroke="rgba(255,255,255,0.4)" strokeWidth="0.85" fill="none" />
    <circle cx="12" cy="22" r="1" stroke="rgba(255,255,255,0.4)" strokeWidth="0.85" fill="none" />
    <circle cx="2"  cy="22" r="1" stroke="rgba(255,255,255,0.4)" strokeWidth="0.85" fill="none" />
    <circle cx="2"  cy="12" r="1" stroke="rgba(255,255,255,0.4)" strokeWidth="0.85" fill="none" />
  </>
);

const VisionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    <ellipse cx="12" cy="12" rx="7" ry="4.5" stroke="#ffffff" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="2.2" stroke="#ffffff" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="0.9" fill="#ffffff" />
  </svg>
);

const MissionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    <circle cx="12" cy="12" r="5" stroke="#ffffff" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="2.2" stroke="#ffffff" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="0.9" fill="#ffffff" />
    <line x1="12" y1="7"  x2="12" y2="5"  stroke="#ffffff" strokeWidth="1.5" />
    <line x1="12" y1="17" x2="12" y2="19" stroke="#ffffff" strokeWidth="1.5" />
    <line x1="7"  y1="12" x2="5"  y2="12" stroke="#ffffff" strokeWidth="1.5" />
    <line x1="17" y1="12" x2="19" y2="12" stroke="#ffffff" strokeWidth="1.5" />
  </svg>
);

export default function AboutCosuniq() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className={styles.section} id="about">

      {/* Background Decorative Geometry */}
      <div className={styles.bgIcons} aria-hidden="true">
        <svg className={`${styles.bgIcon} ${styles.bgIcon1}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
          <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10" />
        </svg>
        <svg className={`${styles.bgIcon} ${styles.bgIcon2}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
          <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" />
        </svg>
        <svg className={`${styles.bgIcon} ${styles.bgIcon3}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M12 2L2 22h20L12 2z" />
        </svg>
        <svg className={`${styles.bgIcon} ${styles.bgIcon4}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
          <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" />
        </svg>
      </div>

      <div className={styles.container}>

        {/* Section Header */}
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrowWrap}>
              <span className={styles.spark}>✦</span>
              About Cosuniq
            </span>
            <h2 className={styles.headline}>
              New by name. Experienced by craft<span className={styles.dot}>.</span>
            </h2>
          </div>
          <Link href="/about" className={styles.cta}>
            Discover COSUNIQ
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {/* Intro paragraph */}
        <p className={styles.introText}>
          COSUNIQ is a creative technology agency bringing together strategy, design, and technology to help ambitious businesses build stronger brands and better digital experiences. We combine fresh thinking with years of hands-on experience to create purposeful, scalable solutions that don&apos;t just look good, but move businesses forward.
        </p>

        {/* 3-Column Innovative Row: Glass Vision | Organic Center Art | Glass Mission */}
        <div className={styles.threeColRow}>
          
          {/* 1. LEFT: OUR VISION (INNOVATIVE FROSTED GLASS) */}
          <article
            className={`${styles.glassCard} ${hovered === "vision" ? styles.glassCardActive : ""}`}
            onMouseEnter={() => setHovered("vision")}
            onMouseLeave={() => setHovered(null)}
          >
            <div className={styles.cardTopRow}>
              <div className={styles.iconBadge}>
                <VisionIcon />
              </div>
              <span className={styles.cardPillTag}>01 / OUR VISION</span>
              <span className={styles.cardCornerArrow} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </div>

            <h3 className={styles.cardTitle}>See what comes next<span className={styles.accentDot}>.</span></h3>
            
            <p className={styles.cardDescription}>
              We envision a world where every ambitious business — regardless of size — has access to world-class creative and technology expertise. To become the most trusted creative technology partner for forward-thinking brands, helping them not just keep up with change, but lead it.
            </p>

            <div className={styles.highlightPill}>
              <span className={styles.sparkIcon}>✦</span>
              <span>We see beyond trends and build for what endures.</span>
            </div>
          </article>

          {/* 2. CENTER: CREATIVE DOODLE ENGINE (ORGANIC, FLOATING, NO WHITE CARD) */}
          <div className={styles.centerArtCol}>
            <div className={styles.artAtmosphereGlow} />

            {/* Creative floating stickers */}
            <div className={`${styles.floatTag} ${styles.floatTagLeft}`}>
              <span>⚡ High-Velocity Code</span>
            </div>
            <div className={`${styles.floatTag} ${styles.floatTagRight}`}>
              <span>🎨 Radical Craft</span>
            </div>

            {/* Doodle Graphic with clean transparent background */}
            <div className={styles.artImageContainer}>
              <img 
                src="/assets/images/cosuniq_doodle_tight.webp" 
                alt="Cosuniq Creative Characters & Code Doodle Art" 
                className={styles.artIllustration}
                loading="lazy"
                decoding="async"
                width={1132}
                height={687}
              />
            </div>

            <div className={styles.artFooterBadge}>
              <span className={styles.spark}>✦</span>
              <span>Creative DNA & Engineering Craft</span>
            </div>
          </div>

          {/* 3. RIGHT: OUR MISSION (INNOVATIVE FROSTED GLASS) */}
          <article
            className={`${styles.glassCard} ${hovered === "mission" ? styles.glassCardActive : ""}`}
            onMouseEnter={() => setHovered("mission")}
            onMouseLeave={() => setHovered(null)}
          >
            <div className={styles.cardTopRow}>
              <div className={styles.iconBadge}>
                <MissionIcon />
              </div>
              <span className={styles.cardPillTag}>02 / OUR MISSION</span>
              <span className={styles.cardCornerArrow} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </div>

            <h3 className={styles.cardTitle}>Build what matters<span className={styles.accentDot}>.</span></h3>
            
            <p className={styles.cardDescription}>
              Our mission is to transform bold ideas into purposeful brands and high-performing digital experiences that create lasting impact. We bring strategy, design, and technology together under one roof — working closely with our clients to deliver solutions that are not just beautiful, but measurably effective.
            </p>

            <div className={styles.highlightPill}>
              <span className={styles.sparkIcon}>✦</span>
              <span>Every project is a commitment to excellence.</span>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}

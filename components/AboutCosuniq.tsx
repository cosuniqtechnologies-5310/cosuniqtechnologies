"use client";

import React from "react";
import Link from "next/link";
import styles from "./AboutCosuniq.module.css";

const VisionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <ellipse cx="12" cy="12" rx="7" ry="4.5" stroke="#FF6B00" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="2.2" stroke="#FF6B00" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="0.9" fill="#FF6B00" />
  </svg>
);

const MissionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <circle cx="12" cy="12" r="5" stroke="#FF6B00" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="2.2" stroke="#FF6B00" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="0.9" fill="#FF6B00" />
    <line x1="12" y1="7"  x2="12" y2="4.5"  stroke="#FF6B00" strokeWidth="1.6" />
    <line x1="12" y1="17" x2="12" y2="19.5" stroke="#FF6B00" strokeWidth="1.6" />
    <line x1="7"  y1="12" x2="4.5"  y2="12" stroke="#FF6B00" strokeWidth="1.6" />
    <line x1="17" y1="12" x2="19.5" y2="12" stroke="#FF6B00" strokeWidth="1.6" />
  </svg>
);

export default function AboutCosuniq() {
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

        {/* Section Header Collage */}
        <div className={styles.headerCollage}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrowWrap}>
              <span className={styles.spark}>✦</span>
              About Cosuniq
            </span>
            <h2 className={styles.headline}>
              New by name.<br />
              Experienced by craft<span className={styles.dot}>.</span>
            </h2>
          </div>

          <div className={styles.headerRight}>
            <p className={styles.introText}>
              COSUNIQ unites strategic clarity, bold design, and engineering precision under one roof. We help ambitious founders and enterprises build enduring digital brands and high-velocity digital products.
            </p>
            <Link href="/about" className={styles.cta}>
              Discover COSUNIQ
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Collage Main Row: Left Hero Artwork Canvas | Right Cloud Chatbox Cards */}
        <div className={styles.collageGrid}>

          {/* LEFT: HERO DOODLE ARTWORK CANVAS (Soft rounded corners, stickers, glow) */}
          <div className={styles.leftArtColumn}>
            <div className={styles.artAtmosphereGlow} aria-hidden="true" />

            {/* Creative floating stickers */}
            <div className={`${styles.floatSticker} ${styles.sticker1}`}>
              <span>⚡ High-Velocity Code</span>
            </div>
            <div className={`${styles.floatSticker} ${styles.sticker2}`}>
              <span>🎨 Radical Imagination</span>
            </div>

            {/* Soft-cornered artwork card */}
            <div className={styles.softArtCard}>
              <img 
                src="/assets/images/cosuniq_doodle_tight.webp" 
                alt="Cosuniq Creative Characters & Code Doodle Art" 
                className={styles.doodleImage}
                loading="lazy"
                decoding="async"
                width={1164}
                height={719}
              />
            </div>

            {/* Bottom capsule badge */}
            <div className={styles.artBottomPill}>
              <span className={styles.spark}>✦</span>
              <span>Where Bold Imagination & Clean Code Meet</span>
            </div>
          </div>

          {/* RIGHT: TWO CLOUD CHATBOX CARDS (Aligned, with chatbox pointers towards artwork) */}
          <div className={styles.rightCardsColumn}>

            {/* 01 / OUR VISION CHATBOX */}
            <article className={`${styles.cloudChatbox} ${styles.chatboxVision}`}>
              <div className={styles.msgHeader}>
                <div className={styles.msgAvatar}>
                  <VisionIcon />
                </div>
                <div>
                  <span className={styles.msgTag}>01 / OUR VISION</span>
                  <span className={styles.msgSubtitle}>Foresight & Longevity</span>
                </div>
              </div>

              <h3 className={styles.msgTitle}>
                See what comes next<span className={styles.orangeDot}>.</span>
              </h3>

              <p className={styles.msgBody}>
                We see beyond temporary trends to architect scalable digital products and enduring brand systems.
              </p>

              <div className={styles.msgBadge}>
                <span className={styles.sparkOrange}>✦</span>
                <span>Built for the Long-Term</span>
              </div>

              {/* Chatbox speech bubble pointer on left edge pointing to artwork */}
              <div className={styles.chatboxTail} aria-hidden="true" />
            </article>

            {/* 02 / OUR MISSION CHATBOX */}
            <article className={`${styles.cloudChatbox} ${styles.chatboxMission}`}>
              <div className={styles.msgHeader}>
                <div className={styles.msgAvatar}>
                  <MissionIcon />
                </div>
                <div>
                  <span className={styles.msgTag}>02 / OUR MISSION</span>
                  <span className={styles.msgSubtitle}>Purposeful Execution</span>
                </div>
              </div>

              <h3 className={styles.msgTitle}>
                Build what matters<span className={styles.orangeDot}>.</span>
              </h3>

              <p className={styles.msgBody}>
                Transforming bold ideas into high-velocity digital experiences with measurable business impact.
              </p>

              <div className={styles.msgBadge}>
                <span className={styles.sparkOrange}>✦</span>
                <span>Execution & Impact</span>
              </div>

              {/* Chatbox speech bubble pointer on left edge pointing to artwork */}
              <div className={styles.chatboxTail} aria-hidden="true" />
            </article>

          </div>

        </div>

      </div>
    </section>
  );
}

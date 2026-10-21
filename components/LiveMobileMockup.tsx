"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./LiveMobileMockup.module.css";

interface LiveMobileMockupProps {
  activeFeature: string | null;
}

// These variants control the snappy crossfade & slide animation when feature changes
const screenVariants: any = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] } }
};

// Custom handcrafted animated UI/UX Studio Doodle
function UIUXDoodle() {
  return (
    <div style={{ position: 'relative', width: '100%', marginBottom: '14px' }}>
      <svg
        viewBox="0 0 240 148"
        width="100%"
        height="148"
        fill="none"
        style={{ display: 'block', overflow: 'visible' }}
      >
        {/* Artboard Canvas Frame */}
        <rect
          x="2"
          y="2"
          width="236"
          height="144"
          rx="14"
          fill="#FFF9F5"
          stroke="#FFE3D1"
          strokeWidth="1.5"
        />

        {/* Window Top Controls */}
        <circle cx="16" cy="14" r="3" fill="#FF5F56" />
        <circle cx="26" cy="14" r="3" fill="#FFBD2E" />
        <circle cx="36" cy="14" r="3" fill="#27C93F" />
        <line x1="2" y1="24" x2="238" y2="24" stroke="#FFEADB" strokeWidth="1" />

        {/* Floating Color Swatches Top Right */}
        <g transform="translate(182, 14)">
          <circle cx="0" cy="0" r="4" fill="#111827" stroke="#ffffff" strokeWidth="1" />
          <circle cx="10" cy="0" r="4" fill="#FF6B00" stroke="#ffffff" strokeWidth="1" />
          <circle cx="20" cy="0" r="4" fill="#FFE0CC" stroke="#ffffff" strokeWidth="1" />
        </g>

        {/* Left Section: Live Mobile Card Wireframe */}
        <rect
          x="14"
          y="32"
          width="82"
          height="104"
          rx="10"
          fill="#ffffff"
          stroke="#FF6B00"
          strokeWidth="1.4"
          strokeDasharray="3 3"
        />

        {/* User Avatar in Card */}
        <circle cx="32" cy="48" r="9" fill="rgba(255, 107, 0, 0.16)" stroke="#FF6B00" strokeWidth="1.2" />
        <path d="M 27 54 C 27 50.5 37 50.5 37 54" stroke="#FF6B00" strokeWidth="1.2" strokeLinecap="round" />

        {/* UI Content lines in card */}
        <line x1="48" y1="45" x2="84" y2="45" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="48" y1="52" x2="72" y2="52" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />

        {/* Interactive CTA button inside Card */}
        <motion.g animate={{ scale: [1, 0.96, 1] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}>
          <rect x="20" y="66" width="70" height="18" rx="9" fill="#FF6B00" />
          <text x="55" y="78.5" fill="#ffffff" fontSize="7.5" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">Book Call</text>
        </motion.g>

        {/* Toggle Switch Component inside Card */}
        <rect x="22" y="93" width="28" height="15" rx="7.5" fill="rgba(255, 107, 0, 0.2)" stroke="#FF6B00" strokeWidth="1" />
        <motion.circle
          cx="42"
          cy="100.5"
          r="5"
          fill="#FF6B00"
          animate={{ cx: [30, 42, 30] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Slider Bar inside Card */}
        <rect x="22" y="117" width="66" height="4" rx="2" fill="#F3F4F6" />
        <motion.rect
          x="22"
          y="117"
          width="42"
          height="4"
          rx="2"
          fill="#FF6B00"
          animate={{ width: [24, 52, 24] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Right Section: Vector Bezier Curve & Pen Tool */}
        {/* Curving vector path */}
        <motion.path
          d="M 112 108 C 130 60, 150 135, 180 75 C 192 50, 210 65, 222 52"
          fill="none"
          stroke="#FF6B00"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 3"
        />

        {/* Tangent control handle lines */}
        <line x1="162" y1="98" x2="198" y2="52" stroke="#9CA3AF" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="162" cy="98" r="2.5" fill="#ffffff" stroke="#9CA3AF" strokeWidth="1.2" />
        <circle cx="198" cy="52" r="2.5" fill="#ffffff" stroke="#9CA3AF" strokeWidth="1.2" />

        {/* Main Vector Anchor Point */}
        <rect x="176" y="71" width="8" height="8" rx="1.5" fill="#ffffff" stroke="#FF6B00" strokeWidth="2" />

        {/* Animated Pen Tool Drawing the Curve */}
        <motion.g
          animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <g transform="translate(182, 44) rotate(-35)">
            <path d="M 0 0 L 6 12 L 2.5 15 L -2.5 15 L -6 12 Z" fill="#111827" stroke="#111827" strokeWidth="0.8" />
            <polygon points="0,0 2,6 -2,6" fill="#FF6B00" />
            <circle cx="0" cy="8.5" r="1.3" fill="#ffffff" />
            <line x1="0" y1="15" x2="0" y2="28" stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </motion.g>

        {/* Interactive Mouse Cursor Clicking on the Button */}
        <motion.g
          animate={{ x: [0, -6, 0], y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <g transform="translate(68, 62)">
            <path
              d="M 0 0 L 10 12 L 6 13 L 9 20 L 7 21 L 4 14 L 0 17 Z"
              fill="#111827"
              stroke="#ffffff"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </g>
        </motion.g>

        {/* Click ripple animation on the card button */}
        <motion.circle
          cx="72"
          cy="75"
          r="8"
          fill="none"
          stroke="#FF6B00"
          strokeWidth="1.5"
          animate={{ scale: [0.5, 1.8], opacity: [0.9, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
        />

        {/* Creative Sparkles & Stars */}
        <motion.path
          d="M 218 108 L 220 112 L 224 113 L 220 114 L 218 118 L 216 114 L 212 113 L 216 112 Z"
          fill="#FF6B00"
          animate={{ scale: [0.7, 1.3, 0.7], rotate: [0, 90, 0] }}
          transition={{ duration: 2.6, repeat: Infinity }}
          style={{ transformOrigin: "218px 113px" }}
        />
        <motion.path
          d="M 120 128 L 121.5 131 L 124.5 132 L 121.5 133 L 120 136 L 118.5 133 L 115.5 132 L 118.5 131 Z"
          fill="#FF6B00"
          animate={{ scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 2.1, repeat: Infinity, delay: 0.5 }}
          style={{ transformOrigin: "120px 132px" }}
        />
      </svg>
    </div>
  );
}

export default function LiveMobileMockup({ activeFeature }: LiveMobileMockupProps) {
  
  // Always use brand orange glow
  const getGlowColor = () => {
    return "rgba(255, 107, 0, 0.25)";
  };

  // Renders different UI screens based on the active feature
  const renderScreenContent = () => {
    switch (activeFeature) {
      case "strategy":
        return (
          <div className={styles.screenContent} key="strategy">
            <div className={styles.header}>
              <h4 className={styles.realTitle}>Strategy & Consulting</h4>
              <p className={styles.realDesc}>Addressing your core brand strategy to connect directly with people.</p>
            </div>
            {/* Bar chart with an upward trend line */}
            <div className={styles.chartArea}>
              <motion.div className={styles.bar} style={{ background: '#eee' }} initial={{ height: 0 }} animate={{ height: '30%' }} transition={{ duration: 0.35, delay: 0.05 }} />
              <motion.div className={styles.bar} style={{ background: '#ddd' }} initial={{ height: 0 }} animate={{ height: '50%' }} transition={{ duration: 0.35, delay: 0.1 }} />
              <motion.div className={styles.bar} style={{ background: '#ccc' }} initial={{ height: 0 }} animate={{ height: '70%' }} transition={{ duration: 0.35, delay: 0.15 }} />
              <motion.div className={styles.bar} style={{ background: '#FF6B00' }} initial={{ height: 0 }} animate={{ height: '100%' }} transition={{ duration: 0.35, delay: 0.2 }} />
              
              {/* Animated Trend Line SVG */}
              <svg className={styles.trendLine} viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path 
                  d="M13,70 L38,50 L63,30 L88,0" 
                  fill="none" 
                  stroke="#111" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.45, delay: 0.2, ease: "easeInOut" }}
                />
                <motion.circle 
                  cx="88" cy="0" r="4" 
                  fill="#FF6B00"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.4, 1] }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                />
              </svg>
            </div>

            {/* Floating Goal Card */}
            <motion.div 
              style={{ background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '12px', display: 'flex', alignItems: 'center', gap: '12px', marginTop: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#FF6B00', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ height: '8px', background: '#111', width: '60%', borderRadius: '4px', marginBottom: '6px' }}></div>
                <div style={{ height: '6px', background: '#ddd', width: '80%', borderRadius: '3px' }}></div>
              </div>
            </motion.div>
          </div>
        );
      
      case "branding":
        return (
          <div className={styles.screenContent} key="branding">
            <div className={styles.header}>
              <h4 className={styles.realTitle}>Brand Identity</h4>
              <p className={styles.realDesc}>Positioning your brand to be exactly what people need it to be.</p>
            </div>
            {/* Typography and Colors */}
            <div className={styles.brandHero}>
              <motion.div 
                className={styles.typographyIcon}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                Aa
              </motion.div>
            </div>
            <div className={styles.skeletonTitle} style={{ margin: '1rem auto 0.5rem', background: '#111', width: '40%' }}></div>
            <div className={styles.skeletonText} style={{ margin: '0 auto 1.5rem', width: '30%' }}></div>
            
            <div className={styles.colorPalette}>
              <motion.div className={styles.colorSwatch} style={{ background: '#111' }} initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 }}></motion.div>
              <motion.div className={styles.colorSwatch} style={{ background: '#FF6B00' }} initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}></motion.div>
              <motion.div className={styles.colorSwatch} style={{ background: '#ccc' }} initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 }}></motion.div>
              <motion.div className={styles.colorSwatch} style={{ background: '#eee' }} initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}></motion.div>
            </div>
          </div>
        );

      case "uiux":
        return (
          <div className={styles.screenContent} key="uiux">
            <div className={styles.header}>
              <h4 className={styles.realTitle}>UI / UX Design</h4>
              <p className={styles.realDesc}>Designing interfaces that perform, delight users, and drive conversions.</p>
            </div>
            
            {/* Beautiful Animated UI/UX Studio Doodle */}
            <UIUXDoodle />

            {/* Design Spec Chips */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '14px' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '99px', background: '#FFF4EC', color: '#FF6B00', border: '1px solid #FFE0CC' }}>
                ✦ Design Systems
              </span>
              <span style={{ fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '99px', background: '#F3F4F6', color: '#4B5563', border: '1px solid #E5E7EB' }}>
                ⚡ Micro-Interactions
              </span>
            </div>

            {/* Interactive Preview Button */}
            <motion.div 
              style={{ 
                width: '85%', 
                margin: '0 auto', 
                padding: '10px 16px', 
                borderRadius: '30px', 
                background: '#111827', 
                color: '#ffffff', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: '8px', 
                fontWeight: 700, 
                fontSize: '13px', 
                boxShadow: '0 4px 14px rgba(0,0,0,0.15)', 
                cursor: 'pointer' 
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Explore Prototypes</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.div>
          </div>
        );
        
      case "webdev":
        return (
          <div className={styles.screenContent} key="webdev">
            <div className={styles.header}>
              <h4 className={styles.realTitle}>Web Development</h4>
              <p className={styles.realDesc}>Creating digital experiences that stand out and capture your audience.</p>
            </div>
            <div className={styles.browserTop}>
              <div className={styles.browserDot}></div>
              <div className={styles.browserDot}></div>
              <div className={styles.browserDot}></div>
            </div>
            <div className={styles.browserContent}>
              {/* Snappy simulated code lines */}
              <div className={styles.codeLine}>
                <motion.span initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 0.25, ease: "linear" }} style={{ background: '#FF6B00' }} />
              </div>
              <div className={styles.codeLine} style={{ width: '80%' }}>
                <motion.span initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 0.25, delay: 0.08, ease: "linear" }} style={{ background: '#111' }} />
              </div>
              <div className={styles.codeLine} style={{ width: '60%' }}>
                <motion.span initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 0.25, delay: 0.16, ease: "linear" }} style={{ background: '#ccc' }} />
              </div>
              
              {/* Resulting UI block pops in without long delay */}
              <motion.div 
                className={styles.skeletonBlock}
                style={{ height: '50px', background: '#f5f5f5', marginTop: '20px', border: '1px solid #ddd' }}
                initial={{ opacity: 0, scale: 0.95, y: 6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3, type: "spring" }}
              ></motion.div>
            </div>
          </div>
        );

      case "mobile":
        return (
          <div className={styles.screenContent} key="mobile" style={{ padding: '20px 10px' }}>
            <div className={styles.header} style={{ padding: '0 10px' }}>
              <h4 className={styles.realTitle}>Mobile App Dev</h4>
              <p className={styles.realDesc}>Putting your business directly in their hands with engaging experiences.</p>
            </div>
            {/* Grid of app icons */}
            <div className={styles.appGrid}>
              {[1,2,3,4,5,6].map((i) => (
                <motion.div 
                  key={i} 
                  className={styles.appIcon}
                  style={{ background: i === 1 ? '#FF6B00' : '#eee' }}
                  whileHover={{ scale: 1.1 }}
                  animate={i === 1 ? { scale: [1, 1.1, 1] } : {}}
                  transition={i === 1 ? { repeat: Infinity, duration: 2 } : {}}
                />
              ))}
            </div>
            {/* App Launch Animation */}
            <motion.div 
              className={styles.appLaunchScreen}
              initial={{ opacity: 0, y: 40, scale: 0.85 }}
              animate={{ opacity: [0, 1, 1, 0], y: [40, 0, 0, 40], scale: [0.85, 1, 1, 0.85] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className={styles.skeletonTitle} style={{ background: '#fff', width: '60%' }}></div>
              <div className={styles.skeletonText} style={{ background: 'rgba(255,255,255,0.7)', width: '40%' }}></div>
            </motion.div>
          </div>
        );

      case "ecommerce":
        return (
          <div className={styles.screenContent} key="ecommerce">
            <div className={styles.header}>
              <h4 className={styles.realTitle}>E-Commerce</h4>
              <p className={styles.realDesc}>Driving your brand's sales directly to the market with built-to-convert stores.</p>
            </div>
            {/* Header with Cart Icon */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ position: 'relative' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <motion.div 
                  className={styles.cartBadge}
                  style={{ background: '#FF6B00', position: 'absolute', top: '-8px', right: '-8px', width: '16px', height: '16px', fontSize: '10px' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.25, 1] }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                >1</motion.div>
              </div>
            </div>

            <div className={styles.productImage} style={{ background: '#f5f5f5', height: '140px', padding: 0 }}>
              {/* Product Placeholder (Shopping Bag) */}
              <motion.div 
                style={{ width: '50px', height: '60px', background: '#ddd', borderRadius: '4px', margin: 'auto', position: 'relative', marginTop: '40px' }}
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Bag Handle */}
                <div style={{ position: 'absolute', top: '-12px', left: '12px', right: '12px', height: '14px', border: '4px solid #ddd', borderBottom: 'none', borderRadius: '10px 10px 0 0' }}></div>
              </motion.div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '20px', marginBottom: 'auto' }}>
              <div>
                <div className={styles.skeletonTitle} style={{ width: '80px', background: '#111', margin: '0 0 8px 0' }}></div>
                <div className={styles.skeletonText} style={{ width: '50px', background: '#ccc', margin: 0 }}></div>
              </div>
              <div style={{ fontWeight: '900', color: '#FF6B00', fontSize: '18px', lineHeight: 1 }}>$99</div>
            </div>
            
            {/* Add to cart click animation */}
            <motion.div 
              className={styles.checkoutBtn}
              style={{ background: '#111', color: '#fff', marginTop: '16px' }}
              animate={{ scale: [1, 0.96, 1], background: ["#111", "#FF6B00", "#111"] }}
              transition={{ duration: 0.45, delay: 0.2, repeat: Infinity, repeatDelay: 2 }}
            >Add to Cart</motion.div>
          </div>
        );

      case "ai":
        return (
          <div className={styles.screenContent} key="ai">
            <div className={styles.header}>
              <h4 className={styles.realTitle}>AI & Custom Software</h4>
              <p className={styles.realDesc}>Building powerful digital tools that streamline your daily operations.</p>
            </div>
            <div className={styles.chatArea}>
              {/* User asks a question */}
              <motion.div 
                className={`${styles.chatBubble} ${styles.chatUser}`}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: 0.05 }}
              >
                <div className={styles.skeletonText} style={{ background: 'rgba(255,255,255,0.8)', marginTop: 0 }}></div>
              </motion.div>
              
              {/* AI Typing Indicator */}
              <motion.div 
                className={styles.typingIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ delay: 0.15, duration: 0.7 }}
              >
                <motion.div className={styles.typingDot} animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.5, delay: 0 }} />
                <motion.div className={styles.typingDot} animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.5, delay: 0.15 }} />
                <motion.div className={styles.typingDot} animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.5, delay: 0.3 }} />
              </motion.div>

              {/* AI Responds without 2.3s delay */}
              <motion.div 
                className={`${styles.chatBubble} ${styles.chatBot}`}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
              >
                <div className={styles.skeletonText} style={{ background: '#999', marginTop: 0, width: '100%', marginBottom: '6px' }}></div>
                <div className={styles.skeletonText} style={{ background: '#999', marginTop: 0, width: '80%', marginBottom: '6px' }}></div>
                <div className={styles.skeletonText} style={{ background: '#999', marginTop: 0, width: '60%' }}></div>
              </motion.div>
            </div>
          </div>
        );

      case "cloud":
        return (
          <div className={styles.screenContent} key="cloud">
            <div className={styles.header}>
              <h4 className={styles.realTitle}>Cloud & DevOps</h4>
              <p className={styles.realDesc}>Reliable infrastructure and deployment pipelines behind every product.</p>
            </div>
            {/* Server Rack layout */}
            <div className={styles.cloudRackArea}>
              {[1, 2, 3].map((server, i) => (
                <div key={server} className={styles.serverRack}>
                  <div className={styles.serverDrive}></div>
                  <div className={styles.serverDrive}></div>
                  <div className={styles.serverLights}>
                    <motion.div 
                      className={styles.serverLight}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                      style={{ background: '#FF6B00' }}
                    />
                    <motion.div 
                      className={styles.serverLight}
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.0, repeat: Infinity, delay: i * 0.25 }}
                      style={{ background: '#10b981' }} /* Keep green for server health */
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      // Default/Fallback or when no specific feature is hovered
      default:
        return (
          <div className={styles.screenContent} key="default">
            <div className={styles.header}>
              <div className={styles.skeletonTitle} style={{ background: '#eee' }}></div>
            </div>
            <motion.div 
              className={styles.pulsingCircle}
              style={{ background: '#FF6B00' }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            <div className={styles.skeletonBlock}></div>
            <div className={styles.skeletonBlock}></div>
            <div className={styles.skeletonBlock}></div>
          </div>
        );
    }
  };

  return (
    <div className={styles.mockupContainer}>
      {/* Background glow behind the phone */}
      <div 
        className={styles.glow} 
        style={{ 
          background: getGlowColor(),
          transition: 'background 0.5s ease'
        }}
      ></div>
      
      {/* Phone Hardware Frame */}
      <div className={styles.phoneFrame}>
        <div className={styles.notch}></div>
        <div className={styles.screen}>
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFeature || "default"}
              variants={screenVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={styles.screenInner}
            >
              {renderScreenContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

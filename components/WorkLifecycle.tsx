"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// ── 01 Origin Doodle: Dewdrop / Seed resting on a curved leaf with gentle sparkle ──
function OriginDoodle() {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      stroke="#FF6B00"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ overflow: "visible" }}
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Handcrafted organic leaf */}
      <motion.path
        d="M 6 44 C 16 46 28 44 42 32 C 54 22 58 14 60 10 C 44 12 30 18 18 28 C 10 35 7 40 6 44 Z"
        fill="rgba(255, 107, 0, 0.12)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
      {/* Leaf central vein & ribs */}
      <path d="M 9 42 C 22 34 36 26 52 16" strokeWidth="1.4" />
      <path d="M 22 34 C 25 30 28 30 30 28" strokeWidth="1.2" />
      <path d="M 33 28 C 36 24 39 25 41 23" strokeWidth="1.2" />

      {/* Nestled origin egg / seed */}
      <motion.path
        d="M 28 17 C 28 17 22 26 22 31 C 22 35.5 25.5 39 30 39 C 34.5 39 38 35.5 38 31 C 38 26 32 17 32 17 C 31 15.5 29 15.5 28 17 Z"
        fill="#ffffff"
        strokeWidth="1.8"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "30px 31px" }}
      />
      {/* Seed inner glow highlight */}
      <path d="M 26 28 C 26 25 28 22 30 21" stroke="#FF6B00" strokeWidth="1.3" />

      {/* Doodle sparkle ✦ */}
      <motion.path
        d="M 48 8 L 49.5 12 L 53.5 13.5 L 49.5 15 L 48 19 L 46.5 15 L 42.5 13.5 L 46.5 12 Z"
        fill="#FF6B00"
        stroke="none"
        animate={{ scale: [0.8, 1.25, 0.8], rotate: [0, 90, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "48px 13.5px" }}
      />
      {/* Subtle floating dot doodles */}
      <circle cx="15" cy="20" r="1.2" fill="#FF6B00" stroke="none" />
      <circle cx="21" cy="14" r="0.8" fill="#FF6B00" stroke="none" />
    </motion.svg>
  );
}

// ── 02 Form Doodle: Expressive crawling caterpillar on a twig with happy antennae ──
function FormDoodle() {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      stroke="#FF6B00"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ overflow: "visible" }}
    >
      {/* Handcrafted twig */}
      <path d="M 4 48 C 16 46 34 49 48 47 C 56 46 59 47 62 48" strokeWidth="1.8" />
      {/* Small leaf sprout from twig */}
      <path
        d="M 12 47 C 10 40 16 35 22 38 C 21 43 17 46 12 47 Z"
        fill="rgba(255, 107, 0, 0.15)"
        strokeWidth="1.3"
      />

      {/* Crawling caterpillar with bouncy gait */}
      <motion.g
        animate={{ x: [0, 3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Body segments */}
        <motion.ellipse
          cx="17" cy="40" rx="5" ry="5.5"
          fill="rgba(255, 107, 0, 0.12)"
          strokeWidth="1.8"
          animate={{ scaleY: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
        />
        <motion.ellipse
          cx="25" cy="36" rx="5.5" ry="6"
          fill="rgba(255, 107, 0, 0.15)"
          strokeWidth="1.8"
          animate={{ scaleY: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
        />
        <motion.ellipse
          cx="34" cy="33" rx="6" ry="6.5"
          fill="rgba(255, 107, 0, 0.18)"
          strokeWidth="1.8"
          animate={{ scaleY: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
        />
        {/* Head */}
        <circle cx="44" cy="31" r="6.5" fill="#ffffff" strokeWidth="1.8" />
        {/* Eye */}
        <circle cx="46" cy="29" r="1.2" fill="#FF6B00" stroke="none" />
        {/* Smile */}
        <path d="M 43 33 Q 46 36 48 33" strokeWidth="1.3" />

        {/* Playful curled antennae */}
        <motion.path
          d="M 45 25 C 46 18 53 17 53 21"
          strokeWidth="1.5"
          animate={{ rotate: [0, 8, 0] }}
          style={{ transformOrigin: "45px 25px" }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M 42 25 C 40 18 34 17 35 21"
          strokeWidth="1.5"
          animate={{ rotate: [0, -8, 0] }}
          style={{ transformOrigin: "42px 25px" }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Little crawling legs */}
        <line x1="17" y1="45" x2="17" y2="48" strokeWidth="1.6" />
        <line x1="25" y1="42" x2="25" y2="48" strokeWidth="1.6" />
        <line x1="34" y1="39" x2="34" y2="48" strokeWidth="1.6" />
      </motion.g>

      {/* Idea / curiosity doodle spark */}
      <motion.path
        d="M 55 18 L 56 20.5 L 58.5 21.5 L 56 22.5 L 55 25 L 54 22.5 L 51.5 21.5 L 54 20.5 Z"
        fill="#FF6B00"
        stroke="none"
        animate={{ scale: [0.7, 1.2, 0.7] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "55px 21.5px" }}
      />
    </motion.svg>
  );
}

// ── 03 Metamorphosis Doodle: Cocoon / Chrysalis hanging from branch with silk wraps & energy ──
function MetamorphosisDoodle() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      stroke="#FF6B00"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ overflow: "visible" }}
    >
      {/* Branch */}
      <path d="M 6 12 C 18 10 38 13 58 11" strokeWidth="2" />
      {/* Little leaf on branch */}
      <path
        d="M 18 11 C 18 5 24 4 28 8 C 24 12 20 11 18 11 Z"
        fill="rgba(255, 107, 0, 0.15)"
        strokeWidth="1.3"
      />

      {/* Hanging silk attachment & Chrysalis with gentle sway */}
      <motion.g
        style={{ transformOrigin: "32px 12px" }}
        animate={{ rotate: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <line x1="32" y1="12" x2="32" y2="20" strokeWidth="2" />

        {/* Cocoon organic pod */}
        <path
          d="M 32 20 C 40 24 46 35 41 47 C 36 55 32 59 32 59 C 32 59 28 55 23 47 C 18 35 24 24 32 20 Z"
          fill="rgba(255, 107, 0, 0.14)"
          strokeWidth="1.8"
        />

        {/* Spiral silk wrapping lines */}
        <path d="M 25 30 C 30 33 34 33 39 30" strokeWidth="1.4" />
        <path d="M 23 37 C 29 41 35 41 41 37" strokeWidth="1.4" />
        <path d="M 25 45 C 29 48 35 48 39 45" strokeWidth="1.4" />
      </motion.g>

      {/* Radiating transformation pulse doodles */}
      <motion.path
        d="M 15 34 C 12 38 12 42 15 46"
        strokeWidth="1.4"
        animate={{ opacity: [0.2, 1, 0.2], x: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M 49 34 C 52 38 52 42 49 46"
        strokeWidth="1.4"
        animate={{ opacity: [0.2, 1, 0.2], x: [0, 2, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Transformation star */}
      <motion.path
        d="M 48 20 L 49 22.5 L 51.5 23.5 L 49 24.5 L 48 27 L 47 24.5 L 44.5 23.5 L 47 22.5 Z"
        fill="#FF6B00"
        stroke="none"
        animate={{ scale: [0.8, 1.25, 0.8] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "48px 23.5px" }}
      />
    </svg>
  );
}

// ── 04 Emergence Doodle: Butterfly unfolding wings breaking free with wing patterns ──
function EmergenceDoodle() {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      stroke="#FF6B00"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ overflow: "visible" }}
      animate={{ y: [0, -2.5, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Central slender body */}
      <line x1="32" y1="20" x2="32" y2="44" strokeWidth="2.2" />
      <circle cx="32" cy="17" r="2.8" fill="#FF6B00" />
      {/* Antenna curls */}
      <path d="M 31 14 C 27 8 20 10 22 14" strokeWidth="1.4" />
      <path d="M 33 14 C 37 8 44 10 42 14" strokeWidth="1.4" />

      {/* Wing fluttering animation */}
      <motion.g
        style={{ transformOrigin: "32px 30px" }}
        animate={{ scaleX: [1, 0.75, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Upper wings */}
        <path
          d="M 30 24 C 12 11 6 27 22 35 C 28 37 30 33 30 30 Z"
          fill="rgba(255, 107, 0, 0.16)"
          strokeWidth="1.8"
        />
        <path
          d="M 34 24 C 52 11 58 27 42 35 C 36 37 34 33 34 30 Z"
          fill="rgba(255, 107, 0, 0.16)"
          strokeWidth="1.8"
        />

        {/* Lower wings */}
        <path
          d="M 30 33 C 14 37 16 51 26 43 C 29 41 30 37 30 35 Z"
          fill="rgba(255, 107, 0, 0.1)"
          strokeWidth="1.8"
        />
        <path
          d="M 34 33 C 50 37 48 51 38 43 C 35 41 34 37 34 35 Z"
          fill="rgba(255, 107, 0, 0.1)"
          strokeWidth="1.8"
        />

        {/* Wing doodle spots */}
        <circle cx="20" cy="25" r="2.2" fill="#FF6B00" stroke="none" />
        <circle cx="44" cy="25" r="2.2" fill="#FF6B00" stroke="none" />
      </motion.g>

      {/* Shattered shell fragments below */}
      <path d="M 24 50 L 20 57 L 27 54 Z" fill="rgba(255, 107, 0, 0.18)" strokeWidth="1.3" />
      <path d="M 40 50 L 44 57 L 37 54 Z" fill="rgba(255, 107, 0, 0.18)" strokeWidth="1.3" />

      {/* Radiating emergence spark */}
      <motion.path
        d="M 12 16 L 13 18.5 L 15.5 19.5 L 13 20.5 L 12 23 L 11 20.5 L 8.5 19.5 L 11 18.5 Z"
        fill="#FF6B00"
        stroke="none"
        animate={{ scale: [0.6, 1.2, 0.6] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "12px 19.5px" }}
      />
      <motion.path
        d="M 52 16 L 53 18.5 L 55.5 19.5 L 53 20.5 L 52 23 L 51 20.5 L 48.5 19.5 L 51 18.5 Z"
        fill="#FF6B00"
        stroke="none"
        animate={{ scale: [0.6, 1.2, 0.6] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        style={{ transformOrigin: "52px 19.5px" }}
      />
    </motion.svg>
  );
}

// ── 05 Flight Doodle: Dynamic soaring butterfly with whimsical loop flight trails ──
function FlightDoodle() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      stroke="#FF6B00"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ overflow: "visible" }}
    >
      {/* Whimsical dashed flight loop trail */}
      <motion.path
        d="M 6 56 C 18 54 26 44 18 36 C 10 28 20 18 32 26 C 37 31 32 40 24 34"
        strokeDasharray="3 4"
        strokeWidth="1.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
      />

      {/* Soaring butterfly ascending towards top right */}
      <motion.g
        animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <g transform="translate(6, -6)">
          {/* Angled body */}
          <line x1="36" y1="26" x2="45" y2="17" strokeWidth="2.2" />
          <circle cx="47" cy="15" r="2.5" fill="#FF6B00" />
          {/* Antenna curls */}
          <path d="M 48 13 C 52 8 57 10 56 14" strokeWidth="1.3" />
          <path d="M 46 12 C 43 7 39 9 41 13" strokeWidth="1.3" />

          {/* Wings fluttering in flight */}
          <motion.g
            style={{ transformOrigin: "40px 21px" }}
            animate={{ scaleX: [1, 0.65, 1] }}
            transition={{ duration: 0.45, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Upper forward wing */}
            <path
              d="M 42 18 C 47 4 60 10 48 22 Z"
              fill="rgba(255, 107, 0, 0.2)"
              strokeWidth="1.8"
            />
            {/* Upper back wing */}
            <path
              d="M 40 20 C 30 8 40 2 44 14 Z"
              fill="rgba(255, 107, 0, 0.14)"
              strokeWidth="1.8"
            />
            {/* Lower wing */}
            <path
              d="M 39 23 C 30 28 36 38 44 27 Z"
              fill="rgba(255, 107, 0, 0.12)"
              strokeWidth="1.8"
            />
          </motion.g>
        </g>
      </motion.g>

      {/* Wind gusts & speed lines */}
      <path d="M 32 10 C 37 8 41 10 43 12" strokeWidth="1.3" />
      <path d="M 28 17 C 32 15 35 16 37 18" strokeWidth="1.3" />

      {/* Joyful floating sparkle */}
      <motion.path
        d="M 57 14 L 58 16.5 L 60.5 17.5 L 58 18.5 L 57 21 L 56 18.5 L 53.5 17.5 L 56 16.5 Z"
        fill="#FF6B00"
        stroke="none"
        animate={{ scale: [0.7, 1.3, 0.7], rotate: [0, 45, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "57px 17.5px" }}
      />
    </svg>
  );
}

export default function WorkLifecycle() {
  return (
    <section className="band band--white" id="work-lifecycle">
      <div className="lifecycle-container">
        
        {/* Top Right: Hi, We are Cosuniq */}
        <div className="lifecycle-gowtham-text">
          <div style={{
            position: 'relative',
            display: 'inline-flex',
            background: '#FF6B00',
            color: '#ffffff',
            fontWeight: 800,
            fontSize: '1rem',
            padding: '0.4rem 1rem',
            borderRadius: '30px',
            boxShadow: '0 4px 12px rgba(255, 107, 0, 0.25)'
          }}>
            Hi,
            <div style={{
              position: 'absolute',
              bottom: '-8px',
              left: '17px',
              width: 0,
              height: 0,
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: '10px solid #FF6B00'
            }} />
          </div>
          <span style={{ fontSize: '1.6rem', fontWeight: 700, color: '#111', letterSpacing: '-0.03em' }}>
            We are Cosuniq,
          </span>
        </div>

        {/* Right Vertical: we love support your business */}
        <div className="lifecycle-support-text">
          we <svg width="1em" height="1em" viewBox="0 0 24 24" fill="#FF6B00" className="lifecycle-heart"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> support your business.
        </div>

        <div className="lifecycle-grid reveal">
          <div className="section-intro process-card" style={{ background: '#FF6B00', borderColor: '#FF6B00', justifyContent: 'center', borderRadius: '12px' }}>
            <span className="eyebrow" style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)', background: 'rgba(255,255,255,0.2)', alignSelf: 'flex-start' }}>
              <span className="spark spark--inline" style={{ background: '#fff' }} />
              Our Approach
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', color: '#fff', margin: 0, fontWeight: 700, letterSpacing: '-0.03em' }}>
              Digital Metamorphosis.
            </h2>
          </div>

          <article className="process-card">
            <span className="process-num">01</span>
            <div style={{ marginBottom: '1.5rem', height: '64px', display: 'flex', alignItems: 'center' }}>
              <OriginDoodle />
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Origin</h3>
            <p style={{ margin: 0, maxWidth: '85%' }}>Strategy, planning, and aligning on goals before the work begins.</p>
          </article>
          
          <article className="process-card">
            <span className="process-num">02</span>
            <div style={{ marginBottom: '1.5rem', height: '64px', display: 'flex', alignItems: 'center' }}>
              <FormDoodle />
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Form</h3>
            <p style={{ margin: 0, maxWidth: '85%' }}>Gathering ideas, laying the strategic foundation, and core design.</p>
          </article>
          
          <article className="process-card">
            <span className="process-num">03</span>
            <div style={{ marginBottom: '1.5rem', height: '64px', display: 'flex', alignItems: 'center' }}>
              <MetamorphosisDoodle />
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Metamorphosis</h3>
            <p style={{ margin: 0, maxWidth: '85%' }}>Intense transformation—building systems and primary development.</p>
          </article>
          
          <article className="process-card">
            <span className="process-num">04</span>
            <div style={{ marginBottom: '1.5rem', height: '64px', display: 'flex', alignItems: 'center' }}>
              <EmergenceDoodle />
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Emergence</h3>
            <p style={{ margin: 0, maxWidth: '85%' }}>Emergence through refinement, rigorous testing, and final polish.</p>
          </article>
          
          <article className="process-card">
            <span className="process-num">05</span>
            <div style={{ marginBottom: '1.5rem', height: '64px', display: 'flex', alignItems: 'center' }}>
              <FlightDoodle />
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Flight</h3>
            <p style={{ margin: 0, maxWidth: '85%' }}>Launch, scalable commercial momentum, and ongoing growth.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

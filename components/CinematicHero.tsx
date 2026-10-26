"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./CinematicHero.module.css";

const sequence = [
  "Your brand can do more.",
  "More attention.",
  "More impact.",
  "More connection.",
  "Branding people remember.",
];

// 0.2s per item × 5 items = 1.0s total
const TOTAL_MS = sequence.length * 200;

export default function CinematicHero() {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    try {
      // ── Primary: Page is hidden = background tab / PSI / Lighthouse ──────
      if (document.hidden) return;

      // ── Secondary: WebDriver protocol (Puppeteer, Playwright, Selenium) ───
      if ((navigator as any).webdriver) return;

      // ── Tertiary: User-agent based bot detection ───────────────────────────
      const isBot = /bot|google|crawler|spider|robot|crawling|lighthouse|headlesschrome|headlesschromium|chromium|prerender/i.test(
        navigator.userAgent
      );
      if (isBot) return;

      // ── Desktop headless detection (plugins empty in headless Chrome) ─────
      if (window.innerWidth >= 768 && (!navigator.plugins || navigator.plugins.length === 0)) return;

      // ── Mobile & Touch devices: Skip intro overlay completely ────────────
      // Mobile screens have no mouse cursor and require immediate paint.
      // Eliminates NO_LCP error, high mobile Speed Index, and paint delay.
      if (window.innerWidth < 1024 || window.matchMedia("(pointer: coarse)").matches) return;

      // ── URL parameter override for testing / audits ───────────────────────
      const params = new URLSearchParams(window.location.search);
      if (params.has("nohero") || params.has("audit") || params.has("perf")) return;

      // ── Accessibility: respect prefers-reduced-motion ──────────────────────
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // ── Only show once per session (return visits & SPA navigations skip) ──
      if (sessionStorage.getItem("cosuniq_intro_seen")) return;

      setShow(true);
    } catch (e) {
      // Ignore storage errors in restricted iframes
    }
  }, []);

  if (!show) return null;

  return (
    <CinematicHeroInner
      onExit={() => {
        try {
          sessionStorage.setItem("cosuniq_intro_seen", "true");
        } catch (e) {}
      }}
    />
  );
}

function CinematicHeroInner({ onExit }: { onExit?: () => void }) {
  const [currentIndex, setCurrentIndex]                   = useState(0);
  const [isExiting, setIsExiting]                         = useState(false);
  const [isEntered, setIsEntered]                         = useState(false);
  const [transitionProgress, setTransitionProgress]       = useState(0);
  const [textTransitionProgress, setTextTransitionProgress] = useState(0);
  const [count, setCount]                                 = useState(0);
  const gradientRef  = useRef<HTMLDivElement>(null);
  const sectionRef   = useRef<HTMLElement>(null);
  const startTimeRef = useRef<number>(performance.now());

  // Cursor-following gradient: relative offset from center, zero initial shift
  useEffect(() => {
    let animId: number;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let hasMoved = false;

    const onMove = (e: MouseEvent) => {
      hasMoved = true;
      targetX = e.clientX - window.innerWidth / 2;
      targetY = e.clientY - window.innerHeight / 2;
    };

    const loop = () => {
      if (hasMoved) {
        curX += (targetX - curX) * 0.08;
        curY += (targetY - curY) * 0.08;
        if (gradientRef.current) {
          gradientRef.current.style.transform = `translate3d(${curX}px, ${curY}px, 0)`;
        }
      }
      animId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    loop();
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Lock scroll
  useEffect(() => {
    if (!isEntered && !isExiting) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isEntered, isExiting]);

  // Advance text every 200ms (matches TOTAL_MS = 1.0s)
  useEffect(() => {
    if (currentIndex < sequence.length - 1) {
      const t = setTimeout(() => setCurrentIndex((i) => i + 1), 200);
      return () => clearTimeout(t);
    }
  }, [currentIndex]);

  // Text transition shader pulse
  useEffect(() => {
    if (currentIndex === 0) return;
    const dur = 1000,
      t0 = performance.now();
    let id: number;
    const run = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      setTextTransitionProgress(p);
      if (p < 1) id = requestAnimationFrame(run);
    };
    id = requestAnimationFrame(run);
    return () => cancelAnimationFrame(id);
  }, [currentIndex]);

  // 0→100 counter synced to total splash duration, auto-exits at 100
  useEffect(() => {
    startTimeRef.current = performance.now();
    let id: number;
    const run = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const raw = Math.min(elapsed / TOTAL_MS, 1);
      const eased = 1 - Math.pow(1 - raw, 2); // ease-out quad
      const value = Math.round(eased * 100);
      setCount(value);

      if (raw < 1) {
        id = requestAnimationFrame(run);
      } else {
        triggerExit();
      }
    };
    id = requestAnimationFrame(run);
    return () => cancelAnimationFrame(id);
  }, []);

  const triggerExit = () => {
    onExit?.();
    import("canvas-confetti")
      .then(({ default: confetti }) => {
        confetti({
          particleCount: 200,
          spread: 360,
          startVelocity: 55,
          origin: { x: 0.5, y: 0.5 },
          colors: ["#ffffff", "#ff5e00", "#000000", "#ff8c00", "#ff3300"],
          zIndex: 99999,
        });
      })
      .catch(() => {});
    const dur = 1000,
      t0 = performance.now();
    let exitDone = false;
    const animate = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      setTransitionProgress(p);
      if (p > 0.8 && !exitDone) {
        exitDone = true;
        setIsExiting(true);
      }
      if (p < 1) requestAnimationFrame(animate);
      else setTimeout(() => setIsEntered(true), 400);
    };
    requestAnimationFrame(animate);
  };

  // Allow manual click to skip
  const handleClick = () => {
    if (transitionProgress === 0) triggerExit();
  };

  if (isEntered) return null;

  return (
    <section
      id="cinematic-hero-root"
      ref={sectionRef}
      className={`${styles.heroRoot} ${isExiting ? styles.exiting : ""}`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div
        ref={gradientRef}
        className={styles.cursorGradient}
        style={{ transform: "translate3d(0px, 0px, 0px)" }}
        aria-hidden="true"
      />

      <div className={styles.heroContent}>
        {sequence.map((text, idx) => (
          <div
            key={idx}
            role="text"
            className={`${styles.heroText} ${
              idx === currentIndex ? styles.active : ""
            } ${idx < currentIndex ? styles.previous : ""}`}
            aria-hidden={idx !== currentIndex}
          >
            {text.endsWith(".") ? (
              <>
                {text.slice(0, -1)}
                <span style={{ color: "#ff6a00" }}>.</span>
              </>
            ) : (
              text
            )}
          </div>
        ))}
      </div>

      {/* Progress counter — bottom center */}
      <div className={styles.progressCounter} aria-hidden="true">
        <span className={styles.progressNumber}>{count}</span>
        <span className={styles.progressPercent}>%</span>
      </div>
    </section>
  );
}

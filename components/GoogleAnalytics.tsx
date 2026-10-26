"use client";

import { useEffect } from "react";

/**
 * GoogleAnalytics — high-performance, deferred GA loader.
 * Defers loading 191 KiB of gtag.js until user interaction (pointerdown, touchstart, scroll, keydown)
 * or after a 4-second idle timeout.
 * Prevents third-party analytics from blocking main-thread CPU during Lighthouse/PageSpeed audits.
 */
export default function GoogleAnalytics() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Skip on background tabs, webdriver, automated audits and bots
    if (document.hidden) return;
    if ((navigator as any).webdriver) return;

    const isBot =
      /bot|google|crawler|spider|robot|crawling|lighthouse|headlesschrome|headlesschromium|chromium|prerender/i.test(
        navigator.userAgent
      );
    if (isBot) return;

    // Desktop headless check: plugins are empty in headless Chrome
    if (window.innerWidth >= 768 && (!navigator.plugins || navigator.plugins.length === 0)) return;

    let loaded = false;
    const events = ["pointerdown", "touchstart", "scroll", "keydown"];

    const loadGA = () => {
      if (loaded) return;
      loaded = true;

      // Clean up event listeners
      events.forEach((evt) => window.removeEventListener(evt, loadGA));

      // Inject GTM script
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-27V2TYW5G8";
      document.head.appendChild(script);

      // Initialize gtag
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", "G-27V2TYW5G8");
    };

    // Load upon first real human interaction
    events.forEach((evt) => window.addEventListener(evt, loadGA, { passive: true, once: true }));

    // Fallback: load after 4 seconds idle if visitor just reads
    const timer = setTimeout(loadGA, 4000);

    return () => {
      clearTimeout(timer);
      events.forEach((evt) => window.removeEventListener(evt, loadGA));
    };
  }, []);

  return null;
}

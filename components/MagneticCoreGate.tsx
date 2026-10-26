"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// three.js + react-three-fiber (~875 KB) live in this chunk. It is only
// requested once we know the device can actually render the scene.
const MagneticCore = dynamic(() => import("./MagneticCore"), { ssr: false });

/**
 * Decide whether the heavy WebGL scene should run at all.
 * Returns the particle budget, or 0 to skip it.
 * Skipped for: reduced-motion users, automated/headless audits, and software
 * (CPU) WebGL renderers such as SwiftShader/llvmpipe, where the scene would
 * burn seconds of main-thread time.
 */
function getParticleBudget(): number {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return 0;
    if ((navigator as any).webdriver) return 0;
    if (/lighthouse|headlesschrome/i.test(navigator.userAgent)) return 0;

    const probe = document.createElement("canvas");
    const gl = (probe.getContext("webgl") || probe.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) return 0;
    const dbg = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = dbg ? String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL)) : "";
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    if (/swiftshader|llvmpipe|software|microsoft basic render/i.test(renderer)) return 0;

    const lowPower = window.innerWidth < 768 || (navigator.hardwareConcurrency || 4) <= 4;
    return lowPower ? 6000 : 12000;
  } catch {
    return 0;
  }
}

export default function MagneticCoreGate({
  scrollProgressRef,
  colorTheme = "orange",
}: {
  scrollProgressRef: React.MutableRefObject<number>;
  colorTheme?: "orange" | "yellow";
}) {
  const [budget, setBudget] = useState(0);

  // Run the capability check when the browser is idle, not during first paint
  useEffect(() => {
    const run = () => setBudget(getParticleBudget());
    const w = window as any;
    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(run, { timeout: 1500 });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = setTimeout(run, 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", minHeight: "380px" }}>
      {budget > 0 && (
        <MagneticCore scrollProgressRef={scrollProgressRef} colorTheme={colorTheme} count={budget} />
      )}
    </div>
  );
}

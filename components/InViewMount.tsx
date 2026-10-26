"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

interface InViewMountProps {
  children: ReactNode;
  /** Reserved size while unmounted, to avoid layout shift. */
  minHeight?: number | string;
  minWidth?: number | string;
  /** Start loading slightly before the element scrolls into view. */
  rootMargin?: string;
  style?: CSSProperties;
  className?: string;
}

/**
 * Mounts decorative, animation-heavy children only while they are near the
 * viewport. Off-screen, children are unmounted so their infinite animations
 * (framer-motion loops, timers) stop costing main-thread time.
 * Only use for decorative content — it is not present in the server HTML.
 */
export default function InViewMount({
  children,
  minHeight,
  minWidth,
  rootMargin = "150px",
  style,
  className,
}: InViewMountProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className} style={{ minHeight, minWidth, ...style }}>
      {visible ? children : null}
    </div>
  );
}

"use client";

import { useRef, useState, useEffect } from "react";

export default function WorkSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    let animId: number;
    const checkOverflow = () => {
      if (sliderRef.current) {
        const isOverflowing = sliderRef.current.scrollWidth > sliderRef.current.clientWidth + 5;
        const hasManyChildren = sliderRef.current.children.length > 3;
        setShowArrows(isOverflowing || hasManyChildren);
      }
    };

    // Defer geometric layout checks to idle or next frame to prevent forced reflow on mount
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(() => checkOverflow(), { timeout: 2000 });
    } else {
      animId = requestAnimationFrame(() => checkOverflow());
    }

    const observer = new ResizeObserver(() => checkOverflow());
    if (sliderRef.current) {
      observer.observe(sliderRef.current);
      if (sliderRef.current.firstElementChild) {
        observer.observe(sliderRef.current.firstElementChild);
      }
    }

    window.addEventListener("resize", checkOverflow, { passive: true });
    return () => {
      observer.disconnect();
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  const slideBy = (dir: number) => {
    if (!sliderRef.current) return;
    const amount = Math.min(380, sliderRef.current.clientWidth * 0.85) * dir;
    sliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section 
      className="band band--black" 
      id="work" 
      style={{ 
        position: 'relative', 
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#0a0a0a'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="slider-head reveal">
          <div>
            <span className="eyebrow" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: 'rgba(255, 255, 255, 0.9)',
              padding: '0.4rem 1rem',
              borderRadius: '30px',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}><span className="spark spark--inline"></span>Featured work</span>
            <h2>Work that’s worked.</h2>
          </div>
          {showArrows && (
            <div className="slider-controls">
              <button type="button" className="slider-btn" aria-label="Previous" onClick={() => slideBy(-1)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <button type="button" className="slider-btn" aria-label="Next" onClick={() => slideBy(1)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          )}
        </div>

        <div className="work-slider" ref={sliderRef}>
          <article className="work-slide">
            <img className="work-slide__bg" src="/assets/images/sellgy_ui-380.webp" srcSet="/assets/images/sellgy_ui-380.webp 380w, /assets/images/sellgy_ui-480.webp 480w, /assets/images/sellgy_ui.webp 700w" sizes="(max-width: 768px) 100vw, 382px" alt="Sellgy high-performance e-commerce platform by Cosuniq Technologies" loading="lazy" decoding="async" width={700} height={440} />
            <div className="work-slide__overlay"></div>
            <div className="work-slide__content">
              <div className="tags"><span>Product</span><span>E-com</span></div>
              <div className="work-slide__meta">
                <h3>Own Product: Sellgy</h3>
                <p>Our proprietary, scalable e-commerce application engineered for high-performance and seamless shopping experiences.</p>
              </div>
            </div>
          </article>

          <article className="work-slide">
            <img className="work-slide__bg" src="/assets/images/classbell_ui-380.webp" srcSet="/assets/images/classbell_ui-380.webp 380w, /assets/images/classbell_ui-480.webp 480w, /assets/images/classbell_ui.webp 700w" sizes="(max-width: 768px) 100vw, 382px" alt="Classbell institutional mobile app engineered by Cosuniq Technologies" loading="lazy" decoding="async" width={700} height={440} />
            <div className="work-slide__overlay"></div>
            <div className="work-slide__content">
              <div className="tags"><span>Mobile App</span></div>
              <div className="work-slide__meta">
                <h3>Classbell</h3>
                <p>An intuitive mobile application designed to seamlessly streamline communications and daily operations.</p>
              </div>
            </div>
          </article>

          <article className="work-slide">
            <img className="work-slide__bg" src="/assets/images/shopify_sync_ui-380.webp" srcSet="/assets/images/shopify_sync_ui-380.webp 380w, /assets/images/shopify_sync_ui-480.webp 480w, /assets/images/shopify_sync_ui.webp 700w" sizes="(max-width: 768px) 100vw, 382px" alt="Shopify real-time inventory synchronization engine" loading="lazy" decoding="async" width={700} height={440} />
            <div className="work-slide__overlay"></div>
            <div className="work-slide__content">
              <div className="tags"><span>Inventory</span><span>Shopify</span></div>
              <div className="work-slide__meta">
                <h3>Shopify Inventory Sync 4</h3>
                <p>A robust inventory management system built to provide seamless, real-time synchronization with Shopify stores.</p>
              </div>
            </div>
          </article>

          <article className="work-slide">
            <img className="work-slide__bg" src="/assets/images/orangebabe_mockup-380.webp" srcSet="/assets/images/orangebabe_mockup-380.webp 380w, /assets/images/orangebabe_mockup-480.webp 480w, /assets/images/orangebabe_mockup.webp 700w" sizes="(max-width: 768px) 100vw, 382px" alt="Orangebabe children e-commerce web platform" loading="lazy" decoding="async" width={700} height={440} />
            <div className="work-slide__overlay"></div>
            <div className="work-slide__content">
              <div className="tags"><span>E-com</span><span>Brand</span></div>
              <div className="work-slide__meta">
                <h3>Orangebabe</h3>
                <p>Developed a vibrant, playful e-commerce platform for children that significantly boosted customer engagement.</p>
              </div>
            </div>
          </article>

          <article className="work-slide">
            <img className="work-slide__bg" src="/assets/images/hero-brand.webp" alt="Cosuniq Technologies creative technology agency" loading="lazy" decoding="async" width={700} height={440} />
            <div className="work-slide__overlay"></div>
            <div className="work-slide__content">
              <div className="tags"><span>Research</span><span>Brand</span></div>
              <div className="work-slide__meta">
                <h3>Cosuniq Technologies</h3>
                <p>In-depth analysis and strategic framework for positioning modern brands in competitive digital markets.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

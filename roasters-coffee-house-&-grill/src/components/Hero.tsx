import React, { useEffect, useRef, useState } from 'react';
import { IMAGES, RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onExploreMenu: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onContact }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Mouse coordinates state for Lerp smoothing
  const mouseTargetRef = useRef({ x: -500, y: -500 });
  const mouseCurrentRef = useRef({ x: -500, y: -500 });
  const gridOffsetRef = useRef({ x: 0, y: 0 });

  // References for DOM elements to mutate directly in rAF for maximum performance
  const spotlightContainerRef = useRef<HTMLDivElement>(null);
  const gridPatternRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if device supports fine cursor or is touch
    const checkTouch = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window || window.innerWidth < 768;
      setIsTouchDevice(isTouch);
    };

    checkTouch();
    window.addEventListener('resize', checkTouch, { passive: true });

    return () => {
      window.removeEventListener('resize', checkTouch);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseTargetRef.current = { x, y };

      // Calculate subtle grid parallax target (max 16px)
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const normX = (x - centerX) / centerX;
      const normY = (y - centerY) / centerY;
      gridOffsetRef.current = {
        x: Math.max(-16, Math.min(16, normX * 16)),
        y: Math.max(-16, Math.min(16, normY * 16)),
      };
    };

    const handleMouseEnter = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseTargetRef.current = { x, y };
      mouseCurrentRef.current = { x, y };
    };

    const handleMouseLeave = () => {
      // Smoothly drift spotlight out of view or to lower center
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseTargetRef.current = { x: rect.width / 2, y: rect.height * 0.7 };
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove, { passive: true });
      container.addEventListener('mouseenter', handleMouseEnter, { passive: true });
      container.addEventListener('mouseleave', handleMouseLeave, { passive: true });
      // Initialize to center
      const rect = container.getBoundingClientRect();
      mouseTargetRef.current = { x: rect.width / 2, y: rect.height * 0.65 };
      mouseCurrentRef.current = { x: rect.width / 2, y: rect.height * 0.65 };
    }

    // High performance rAF loop with lerping: smooth += (target - smooth) * 0.1
    let currentGridX = 0;
    let currentGridY = 0;

    const animate = () => {
      // Lerp mouse cursor
      const cx = mouseCurrentRef.current.x;
      const cy = mouseCurrentRef.current.y;
      const tx = mouseTargetRef.current.x;
      const ty = mouseTargetRef.current.y;

      const nextX = cx + (tx - cx) * 0.1;
      const nextY = cy + (ty - cy) * 0.1;
      mouseCurrentRef.current = { x: nextX, y: nextY };

      // Lerp grid parallax
      currentGridX += (gridOffsetRef.current.x - currentGridX) * 0.08;
      currentGridY += (gridOffsetRef.current.y - currentGridY) * 0.08;

      if (gridPatternRef.current) {
        gridPatternRef.current.style.transform = `translate3d(${currentGridX}px, ${currentGridY}px, 0)`;
      }

      if (spotlightContainerRef.current) {
        // Spotlight mask using exact specified stops:
        // 0%: white, 40%: white, 60%: 0.75 alpha, 75%: 0.4 alpha, 88%: 0.12 alpha, 100%: transparent
        // Radius: 260px
        const maskStyle = `radial-gradient(260px circle at ${nextX.toFixed(1)}px ${nextY.toFixed(1)}px, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.12) 88%, rgba(255,255,255,0) 100%)`;
        spotlightContainerRef.current.style.webkitMaskImage = maskStyle;
        spotlightContainerRef.current.style.maskImage = maskStyle;
      }

      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isTouchDevice]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-[100vh] min-h-[100svh] overflow-hidden bg-[#050505] text-white select-none"
      style={{ minHeight: '100svh' }}
      aria-label="Hero Section"
    >
      {/* Layer 1: Grid Background */}
      <div
        ref={gridPatternRef}
        id="hero-layer-grid"
        className="absolute -inset-10 grid-bg opacity-40 z-0 pointer-events-none transition-transform duration-75 will-change-transform"
      />

      {/* Layer 2: Main Restaurant Background Image */}
      <div
        id="hero-layer-image"
        className="absolute inset-0 z-10 bg-cover bg-center bg-no-repeat opacity-60 grayscale-[15%] transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url("${IMAGES.heroBg}")`,
        }}
      />

      {/* Layer 3: Video Reveal Spotlight */}
      <div
        id="hero-layer-spotlight-video"
        ref={spotlightContainerRef}
        className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-700 ${
          isTouchDevice ? 'opacity-40' : 'opacity-100'
        }`}
        style={{
          clipPath: 'inset(35% 0 0 0)',
          WebkitClipPath: 'inset(35% 0 0 0)',
        }}
      >
        <video
          id="hero-interactive-video"
          src={IMAGES.heroVideo}
          poster={IMAGES.heroVideoPoster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-center filter saturate-[1.1] contrast-[1.1]"
        />
        {/* Soft atmospheric tone over video reveal */}
        <div className="absolute inset-0 bg-amber-950/20 mix-blend-overlay pointer-events-none" />
      </div>

      {/* Layer 4: Atmospheric Gradient Overlay */}
      <div
        id="hero-layer-atmosphere"
        className="absolute inset-0 z-25 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-[#050505]/60 pointer-events-none"
      />

      {/* Hero Editorial Content */}
      <div className="relative z-30 w-full h-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-between pt-32 sm:pt-36 pb-12 sm:pb-16">
        
        {/* Center Hero Heading & Subtitles */}
        <div className="my-auto flex flex-col items-center justify-center text-center">
          <h2 className="font-inter text-xs tracking-[0.4em] mb-4 opacity-75 uppercase text-neutral-300">
            COFFEE HOUSE &amp; GRILL
          </h2>
          <h1
            id="hero-main-title"
            className="font-instrument text-[5rem] xs:text-[6.5rem] sm:text-[9.5rem] md:text-[12rem] lg:text-[14.5rem] leading-[0.85] text-center text-white drop-shadow-2xl select-none tracking-tight font-normal"
          >
            ROASTERS
          </h1>
          
          <div className="mt-8 flex gap-12 sm:gap-24 font-inter text-[10px] sm:text-xs tracking-[0.3em] opacity-60 text-neutral-300">
            <span>ISLAMABAD</span>
            <span>F-6 MARKAZ</span>
          </div>
        </div>

        {/* Hero Actions (Primary Liquid Glass & Minimal Secondary Underline) */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            <button
              id="hero-explore-menu-btn"
              onClick={onExploreMenu}
              className="liquid-glass px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-inter text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black active:scale-95 transition-all duration-300 cursor-pointer shadow-xl"
            >
              EXPLORE MENU
            </button>
            <button
              id="hero-contact-btn"
              onClick={onContact}
              className="font-inter text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-neutral-200 border-b border-white/30 pb-1 hover:border-white hover:text-white transition-all cursor-pointer"
            >
              CONTACT US
            </button>
          </div>

          {/* Bottom Metas & Scroll Indicator */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-neutral-400">
            {/* Bottom Left Info */}
            <div className="flex flex-col items-center sm:items-start gap-0.5 font-inter opacity-60">
              <span className="text-[9px] tracking-widest uppercase text-neutral-500">Location</span>
              <span className="text-[10px] tracking-wide text-neutral-300">1 Agha Khan Rd, F-6 Markaz</span>
            </div>

            {/* Center Scroll Indicator */}
            <div className="flex flex-col items-center gap-1 opacity-70">
              <div className="w-[1px] h-9 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
            </div>

            {/* Bottom Right Info */}
            <div className="flex flex-col items-center sm:items-end gap-0.5 font-inter opacity-60">
              <span className="text-[9px] tracking-widest uppercase text-neutral-500">Connect</span>
              <a href={RESTAURANT_INFO.phoneTel} className="text-[10px] tracking-wide text-neutral-300 hover:text-white transition-colors">
                {RESTAURANT_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

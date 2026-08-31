import React from 'react';
import { IMAGES, RESTAURANT_INFO } from '../data/restaurantData';

export const CinematicBreak: React.FC = () => {
  return (
    <section
      id="cinematic-break"
      className="relative w-full h-[55vh] min-h-[400px] max-h-[600px] overflow-hidden flex items-center justify-center bg-neutral-950"
      aria-label="Atmospheric Showcase"
    >
      {/* Background Image */}
      <img
        src={IMAGES.cinematicBreak}
        alt="Roasters Dining Moment"
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.75]"
      />

      {/* Atmospheric Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] pointer-events-none" />

      {/* Editorial Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-4">
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.4em] text-neutral-300 font-mono block">
          {RESTAURANT_INFO.name}
        </span>
        <h2
          id="cinematic-break-heading"
          className="font-instrument text-4xl sm:text-6xl md:text-7xl text-white font-normal tracking-wide drop-shadow-lg"
        >
          MADE FOR GOOD MOMENTS.
        </h2>
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-neutral-200 font-light">
          {RESTAURANT_INFO.area} · {RESTAURANT_INFO.city}
        </p>
      </div>
    </section>
  );
};

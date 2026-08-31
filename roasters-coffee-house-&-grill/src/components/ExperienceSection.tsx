import React from 'react';
import { IMAGES, RESTAURANT_INFO } from '../data/restaurantData';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32 bg-[#050505] text-white border-b border-white/10 relative overflow-hidden"
      aria-label="The Roasters Experience"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text / Editorial column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_6px_rgba(249,115,22,0.8)]" />
              Distinctive Atmosphere
            </div>

            <h2
              id="experience-heading"
              className="font-instrument text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.05] tracking-tight"
            >
              THE ROASTERS <br />
              <span className="italic text-neutral-400">EXPERIENCE</span>
            </h2>

            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed font-light max-w-xl">
              An ambiance crafted around the warmth of freshly roasted artisan coffee, sizzling grill mastery, and a welcoming dining atmosphere right in the heart of F-6 Markaz, Islamabad.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-white/10">
              <div>
                <span className="block text-xs uppercase tracking-widest text-neutral-500 font-mono">Location</span>
                <span className="text-sm font-medium text-white mt-1 block">F-6 Markaz, Islamabad</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-neutral-500 font-mono">Specialty</span>
                <span className="text-sm font-medium text-white mt-1 block">Coffee &amp; Grill Cuisine</span>
              </div>
            </div>
          </div>

          {/* Right Unique High-Res Photograph */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#0c0c0c] border border-white/10 group">
              <img
                src={IMAGES.experience}
                alt="Roasters Coffee House & Grill Dining Atmosphere"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[10%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-xs">
                <span className="tracking-widest uppercase font-mono text-neutral-300">{RESTAURANT_INFO.name}</span>
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-neutral-300">Islamabad</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

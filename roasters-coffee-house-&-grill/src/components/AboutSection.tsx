import React from 'react';
import { IMAGES, RESTAURANT_INFO } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-[#050505] text-white relative overflow-hidden border-b border-white/10"
      aria-label="About Roasters"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Unique Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0a0a0a] group">
              <img
                src={IMAGES.about}
                alt="Roasters Coffee House & Grill Islamabad Space"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[10%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-neutral-300">
                <span className="font-mono uppercase tracking-widest">{RESTAURANT_INFO.area}, {RESTAURANT_INFO.city}</span>
                <span className="font-mono text-neutral-400">Pakistan</span>
              </div>
            </div>
          </div>

          {/* Right Column: Factual Editorial */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-neutral-400 font-mono">
              Factual Profile
            </span>

            <h2
              id="about-heading"
              className="font-instrument text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.05] tracking-tight"
            >
              ABOUT <br />
              <span className="italic text-neutral-400">ROASTERS</span>
            </h2>

            <div className="space-y-4 text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
              <p>
                <strong className="text-white font-medium">{RESTAURANT_INFO.name}</strong> is a dedicated culinary destination situated at {RESTAURANT_INFO.fullAddress}.
              </p>
              <p>
                Combining rich coffee culture with premium grill dishes, Roasters provides an inviting dining atmosphere for patrons seeking good food and comforting moments in Islamabad.
              </p>
            </div>

            {/* Quick Fact Badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#0c0c0c] border border-white/10">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                  Address
                </span>
                <span className="text-xs text-neutral-200 block">
                  1 Agha Khan Rd, F-6 Markaz, Islamabad
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#0c0c0c] border border-white/10">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                  Contact
                </span>
                <a
                  href={RESTAURANT_INFO.phoneTel}
                  className="text-xs text-white hover:text-orange-400 hover:underline block font-mono transition-colors"
                >
                  {RESTAURANT_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Phone, Compass } from 'lucide-react';
import { IMAGES, RESTAURANT_INFO } from '../data/restaurantData';

interface FinalCTAProps {
  onExploreMenu: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onExploreMenu }) => {
  return (
    <section
      id="final-cta"
      className="relative py-28 sm:py-36 bg-[#050505] text-white overflow-hidden border-b border-white/10"
      aria-label="Call to Action"
    >
      {/* Background Image with Atmospheric Gradient */}
      <img
        src={IMAGES.finalCta}
        alt="Roasters Coffee House & Grill Welcome"
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.3] contrast-[1.1] grayscale-[15%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/90 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <span className="inline-block px-4 py-1.5 rounded-full liquid-glass text-xs font-mono uppercase tracking-[0.25em] text-neutral-300">
          {RESTAURANT_INFO.area} · {RESTAURANT_INFO.city}
        </span>

        <h2
          id="final-cta-heading"
          className="font-instrument text-5xl sm:text-7xl lg:text-8xl text-white font-normal leading-[0.95] tracking-tight drop-shadow-2xl"
        >
          COME TO ROASTERS
        </h2>

        <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto font-light leading-relaxed">
          Join us at 1 Agha Khan Rd, F-6 Markaz for exceptional coffee, artisan grill cuisine, and an inviting ambiance.
        </p>

        {/* Action Buttons: EXPLORE MENU & CALL US */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            id="final-cta-explore-menu"
            onClick={onExploreMenu}
            className="liquid-glass w-full sm:w-auto px-8 py-4 rounded-full text-xs uppercase tracking-widest text-white font-medium hover:bg-white/20 active:scale-95 transition-all duration-300 shadow-xl flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-orange-400" />
            <span>EXPLORE MENU</span>
          </button>

          <a
            id="final-cta-call-us"
            href={RESTAURANT_INFO.phoneTel}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs uppercase tracking-widest text-black bg-white hover:bg-neutral-200 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer font-semibold shadow-xl"
          >
            <Phone className="w-4 h-4 text-black" />
            <span>CALL US</span>
          </a>
        </div>

      </div>
    </section>
  );
};

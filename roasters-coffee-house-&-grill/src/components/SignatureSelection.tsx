import React from 'react';
import { SIGNATURE_ITEMS } from '../data/restaurantData';

export const SignatureSelection: React.FC = () => {
  return (
    <section
      id="signatures"
      className="py-24 sm:py-32 bg-[#080808] text-white border-b border-white/10"
      aria-label="Signature Selection"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-mono block mb-2">
              Curated Highlights
            </span>
            <h2
              id="signatures-heading"
              className="font-instrument text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight"
            >
              SIGNATURE SELECTION
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-light">
            A glimpse into the distinctive categories and creations offered at Roasters Coffee House &amp; Grill.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SIGNATURE_ITEMS.map((card) => (
            <div
              key={card.id}
              id={`signature-card-${card.id}`}
              className="group rounded-3xl overflow-hidden bg-[#0d0d0d] border border-white/10 hover:border-white/20 hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#141414]">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out grayscale-[10%]"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] uppercase font-mono tracking-wider text-white border border-white/10">
                    {card.subtitle}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-instrument text-2xl text-white font-normal group-hover:text-neutral-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-400 italic font-light">
                    {card.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                    Price
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-300 font-medium">
                    {card.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

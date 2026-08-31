import React from 'react';
import { IMAGES } from '../data/restaurantData';

export const DiningBlocks: React.FC = () => {
  const blocks = [
    {
      num: '01',
      title: 'COFFEE',
      subtitle: 'Artisanal Roasts & Brewing',
      description: 'Carefully extracted espresso and fresh brew selections prepared to complement every visit.',
      image: IMAGES.blockCoffee,
    },
    {
      num: '02',
      title: 'GRILL',
      subtitle: 'Charcoal & Searing',
      description: 'Gourmet grilled specialties crafted with rich seasonings and flavorful grill techniques.',
      image: IMAGES.blockGrill,
    },
    {
      num: '03',
      title: 'DINING',
      subtitle: 'Atmosphere & Hospitality',
      description: 'A cozy, comfortable space designed for sharing conversations, family meals, and memorable times.',
      image: IMAGES.blockDining,
    },
  ];

  return (
    <section
      id="dining-pillars"
      className="py-24 sm:py-32 bg-[#080808] text-white border-b border-white/10"
      aria-label="Dining Experience Pillars"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-mono block mb-2">
            The Three Pillars
          </span>
          <h2
            id="dining-pillars-heading"
            className="font-instrument text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight"
          >
            DINING EXPERIENCE
          </h2>
        </div>

        {/* 3 Visual Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blocks.map((block) => (
            <div
              key={block.num}
              id={`dining-pillar-${block.num}`}
              className="group rounded-3xl overflow-hidden bg-[#0d0d0d] border border-white/10 hover:border-white/20 hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Pillar Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#141414]">
                <img
                  src={block.image}
                  alt={`Roasters ${block.title}`}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out grayscale-[10%]"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-xs font-mono text-white font-medium border border-white/10">
                    {block.num}
                  </span>
                </div>
              </div>

              {/* Pillar Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-instrument text-3xl text-white font-normal tracking-tight">
                    {block.title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mt-1">
                    {block.subtitle}
                  </p>
                  <p className="mt-3 text-sm text-neutral-400 font-light leading-relaxed">
                    {block.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-500 font-mono">
                  <span>Roasters Pillar {block.num}</span>
                  <span>F-6 Markaz</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

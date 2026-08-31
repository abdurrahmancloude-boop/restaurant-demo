import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Coffee', 'Food', 'Grill', 'Interior', 'Dining', 'Atmosphere'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 bg-[#050505] text-white border-b border-white/10"
      aria-label="Gallery Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-mono block mb-2">
              Visual Chronicle
            </span>
            <h2
              id="gallery-heading"
              className="font-instrument text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight"
            >
              OUR GALLERY
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-white text-black font-semibold shadow-lg'
                    : 'liquid-glass text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-[#0c0c0c] border border-white/10 hover:border-white/20 cursor-pointer aspect-[4/3] sm:aspect-auto sm:h-[320px] shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out grayscale-[10%]"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                  {item.category}
                </span>
                <h3 className="font-instrument text-xl text-white font-normal mt-0.5">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          id="gallery-lightbox"
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl max-h-[85vh] w-full rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/15 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-auto max-h-[75vh] object-contain mx-auto"
            />
            <div className="p-4 sm:p-6 bg-[#050505] flex items-center justify-between text-white border-t border-white/10">
              <div>
                <h4 className="font-instrument text-2xl text-white">{selectedItem.title}</h4>
                <p className="text-xs text-neutral-400 font-mono uppercase tracking-wider">{selectedItem.category}</p>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="liquid-glass px-5 py-2 rounded-full text-xs uppercase font-mono tracking-wider text-white hover:bg-white/15 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

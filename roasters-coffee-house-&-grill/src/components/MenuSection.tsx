import React, { useState } from 'react';
import { MENU_CATEGORIES, PLACEHOLDER_MENU_ITEMS, IMAGES } from '../data/restaurantData';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Coffee');

  const filteredItems = PLACEHOLDER_MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  );

  const getCategoryImage = (cat: string) => {
    switch (cat) {
      case 'Coffee': return IMAGES.menuCoffee;
      case 'Grill': return IMAGES.menuGrill;
      case 'Breakfast': return IMAGES.menuBreakfast;
      default: return IMAGES.menuDessert;
    }
  };

  return (
    <section
      id="menu"
      className="py-24 sm:py-32 bg-[#050505] text-white relative overflow-hidden border-b border-white/10"
      aria-label="Our Menu"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neutral-800/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-neutral-400 font-mono mb-3">
            Culinary Offerings
          </span>
          <h2
            id="menu-heading"
            className="font-instrument text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight"
          >
            OUR MENU
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light">
            Select a category below to explore our seasonal selections and handcrafted specialties.
          </p>
        </div>

        {/* Category Pill Navigation */}
        <div
          id="menu-category-tabs"
          className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 sm:mb-16 scrollbar-none"
          role="tablist"
        >
          {MENU_CATEGORIES.map((category) => {
            const isSelected = activeCategory === category;
            return (
              <button
                key={category}
                id={`menu-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-white text-black font-semibold shadow-lg scale-105'
                    : 'liquid-glass text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid & Category Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Category Highlight Card */}
          <div className="lg:col-span-4">
            <div className="relative rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 h-full flex flex-col justify-between min-h-[340px] shadow-2xl">
              <div className="relative z-10">
                <span className="text-[11px] uppercase tracking-widest font-mono text-neutral-400 block mb-1">
                  Category Showcase
                </span>
                <h3 className="font-instrument text-3xl text-white font-normal">
                  {activeCategory}
                </h3>
              </div>

              <div className="relative my-6 rounded-2xl overflow-hidden aspect-[4/3] bg-[#141414] border border-white/10">
                <img
                  src={getCategoryImage(activeCategory)}
                  alt={`${activeCategory} Showcase`}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 grayscale-[10%]"
                />
              </div>

              <div className="text-xs text-neutral-400 border-t border-white/10 pt-4 flex items-center justify-between font-mono">
                <span>Roasters Coffee House &amp; Grill</span>
                <span className="text-neutral-500">F-6 Islamabad</span>
              </div>
            </div>
          </div>

          {/* Right: Editable Placeholder Menu Items */}
          <div className="lg:col-span-8 space-y-4">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                id={`menu-item-${item.id}`}
                className="group p-6 rounded-2xl bg-[#0c0c0c] hover:bg-[#121212] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-neutral-500 font-normal">
                      0{index + 1}
                    </span>
                    <h4 className="font-instrument text-2xl text-white font-normal group-hover:text-neutral-200 transition-colors">
                      {item.name}
                    </h4>
                    {item.tag && (
                      <span className="px-2 py-0.5 rounded text-[10px] uppercase font-mono tracking-wider bg-white/10 text-neutral-300">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light italic">
                    {item.description}
                  </p>
                </div>

                <div className="sm:text-right border-t sm:border-t-0 border-white/5 pt-2 sm:pt-0">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-neutral-300 font-medium">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}

            <div className="p-4 rounded-xl bg-white/[0.02] border border-dashed border-white/10 text-center">
              <p className="text-xs text-neutral-400 font-light">
                Please contact Roasters directly for full seasonal menu updates and special dishes.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

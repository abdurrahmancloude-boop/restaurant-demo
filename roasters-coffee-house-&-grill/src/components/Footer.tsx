import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Menu', id: 'menu' },
    { label: 'About', id: 'about' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer
      id="main-footer"
      className="py-16 sm:py-20 bg-[#050505] text-white border-t border-white/10"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-instrument text-3xl sm:text-4xl tracking-widest text-white">
              ROASTERS
            </h3>
            <p className="text-xs uppercase font-mono tracking-widest text-neutral-400">
              {RESTAURANT_INFO.tagline}
            </p>
            <p className="text-xs text-neutral-400 font-light max-w-sm">
              {RESTAURANT_INFO.fullAddress}
            </p>
            <p className="text-xs font-mono text-neutral-300">
              Phone:{' '}
              <a href={RESTAURANT_INFO.phoneTel} className="text-white hover:underline">
                {RESTAURANT_INFO.phoneDisplay}
              </a>
            </p>
          </div>

          {/* Nav Col */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-500 block mb-2">
              Navigation
            </span>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-xs uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Meta */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-500 block mb-2">
              Social Channels
            </span>
            <div className="flex flex-col gap-2">
              <a
                href={RESTAURANT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <span>Facebook</span>
                <span className="text-[10px] font-mono text-neutral-500">({RESTAURANT_INFO.facebookFollowers})</span>
              </a>
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <span>Instagram</span>
                <span className="text-[10px] font-mono text-neutral-500">({RESTAURANT_INFO.instagramFollowers})</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>© {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights reserved.</p>
          <p className="text-neutral-500">F-6 Markaz, Islamabad, Pakistan</p>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const SocialSection: React.FC = () => {
  return (
    <section
      id="social"
      className="py-20 bg-[#080808] text-white border-b border-white/10"
      aria-label="Social Media"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-mono block mb-2">
            Stay Connected
          </span>
          <h2
            id="social-heading"
            className="font-instrument text-3xl sm:text-4xl text-white font-normal"
          >
            FOLLOW ROASTERS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          
          {/* Facebook Card */}
          <a
            id="social-link-facebook"
            href={RESTAURANT_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-3xl bg-[#0d0d0d] hover:bg-[#121212] border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-between shadow-lg hover:shadow-2xl cursor-pointer"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-instrument text-2xl text-white">Facebook</span>
                <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
              </div>
              <p className="text-sm font-mono text-neutral-300 font-medium">
                {RESTAURANT_INFO.facebookFollowers}
              </p>
              <p className="text-[11px] text-neutral-500 font-light font-mono">
                Official Page · {RESTAURANT_INFO.name}
              </p>
            </div>

            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform">
              f
            </div>
          </a>

          {/* Instagram Card */}
          <a
            id="social-link-instagram"
            href={RESTAURANT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-3xl bg-[#0d0d0d] hover:bg-[#121212] border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-between shadow-lg hover:shadow-2xl cursor-pointer"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-instrument text-2xl text-white">Instagram</span>
                <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
              </div>
              <p className="text-sm font-mono text-neutral-300 font-medium">
                {RESTAURANT_INFO.instagramFollowers}
              </p>
              <p className="text-[11px] text-neutral-500 font-light font-mono">
                @roasterspakistan
              </p>
            </div>

            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform">
              ig
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Phone, MapPin, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#050505] text-white relative overflow-hidden border-b border-white/10"
      aria-label="Location and Contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-mono block mb-3">
            Find &amp; Contact Us
          </span>
          <h2
            id="contact-heading"
            className="font-instrument text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight"
          >
            VISIT ROASTERS
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light">
            Conveniently located in F-6 Markaz, Islamabad. Call us directly for inquiries or table arrangements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Contact Card & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-2xl space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-neutral-500 block mb-1">
                  Restaurant
                </span>
                <h3 className="font-instrument text-3xl sm:text-4xl text-white font-normal">
                  {RESTAURANT_INFO.name}
                </h3>
              </div>

              {/* Address details */}
              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500">Address</h4>
                  <p className="text-sm text-neutral-300 mt-1 font-light leading-relaxed">
                    1 Agha Khan Rd<br />
                    F-6 Markaz<br />
                    Islamabad, Pakistan
                  </p>
                </div>
              </div>

              {/* Phone details */}
              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500">Phone</h4>
                  <a
                    href={RESTAURANT_INFO.phoneTel}
                    className="text-base font-mono text-white hover:text-orange-400 transition-colors mt-1 block font-medium"
                  >
                    {RESTAURANT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* CALL US Primary Button */}
            <div className="pt-6 border-t border-white/10">
              <a
                id="contact-call-us-btn"
                href={RESTAURANT_INFO.phoneTel}
                className="liquid-glass w-full py-4 rounded-full flex items-center justify-center gap-3 text-sm uppercase tracking-widest text-white font-medium hover:bg-white/15 active:scale-98 transition-all duration-300 text-center shadow-lg"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>CALL US</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Map / Location Visualization */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl relative min-h-[380px] flex flex-col">
            <div className="p-4 bg-[#0a0a0a] border-b border-white/10 flex items-center justify-between text-xs text-neutral-300">
              <span className="font-mono flex items-center gap-2">
                <Navigation className="w-3.5 h-3.5 text-neutral-400" />
                Location: F-6 Markaz, Islamabad
              </span>
              <span className="font-mono text-neutral-500">1 Agha Khan Rd</span>
            </div>

            <div className="relative w-full flex-1 min-h-[320px]">
              <iframe
                title="Roasters Coffee House & Grill Location Map"
                src="https://maps.google.com/maps?q=Roasters+Coffee+House+%26+Grill+1+Agha+Khan+Rd+F-6+Markaz+Islamabad&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter grayscale contrast-[1.2] invert-[0.9] hue-rotate-[180deg]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Overlay location pin badge */}
              <div className="absolute bottom-4 left-4 p-4 rounded-2xl bg-[#050505]/90 backdrop-blur-md border border-white/15 text-xs text-white max-w-xs shadow-xl">
                <p className="font-instrument text-lg text-white">{RESTAURANT_INFO.name}</p>
                <p className="text-[11px] text-neutral-400 font-light font-mono mt-0.5">1 Agha Khan Rd, F-6 Markaz, Islamabad</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

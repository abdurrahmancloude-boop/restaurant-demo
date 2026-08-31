import React, { useState, useEffect } from 'react';

interface NavigationProps {
  onNavigate: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Menu', id: 'menu' },
    { label: 'About', id: 'about' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled ? 'py-3 bg-neutral-950/75 backdrop-blur-md border-b border-white/10' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            id="nav-brand-logo"
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-2 text-left group cursor-pointer focus:outline-none"
            aria-label="Roasters Coffee House & Grill Home"
          >
            <span className="font-instrument text-2xl sm:text-3xl text-white tracking-widest font-normal transition-transform group-hover:scale-[1.02]">
              ROASTERS
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-amber-500/80" />
          </button>

          {/* Desktop Center: Frosted Glass Pill Navigation */}
          <nav
            id="desktop-nav-menu"
            className="hidden md:flex items-center gap-6 lg:gap-8 px-8 py-2.5 rounded-full liquid-glass text-xs font-medium tracking-widest text-white"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`desktop-nav-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className="text-xs font-medium tracking-widest uppercase hover:opacity-60 transition-opacity cursor-pointer focus:outline-none"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Top Right Desktop CTA: Liquid-glass CTA with orange accent */}
          <div className="hidden md:flex items-center">
            <button
              id="desktop-reserve-cta"
              onClick={() => handleLinkClick('contact')}
              className="liquid-glass rounded-full px-6 py-2.5 flex items-center gap-3 group cursor-pointer hover:bg-white/10 transition-all duration-300 shadow-lg"
            >
              <span className="text-xs font-semibold tracking-wider text-white">RESERVE A TABLE</span>
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
            </button>
          </div>

          {/* Mobile Liquid-glass Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(true)}
              className="liquid-glass w-11 h-11 rounded-full flex flex-col items-center justify-center gap-1.5 p-2 text-white transition-all duration-200 cursor-pointer focus:outline-none"
              aria-label="Open Mobile Menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="w-5 h-[1.5px] bg-white transition-transform duration-200" />
              <span className="w-5 h-[1.5px] bg-white transition-transform duration-200" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Menu */}
      <div
        id="mobile-fullscreen-drawer"
        className={`fixed inset-0 z-[55] bg-[#0a0a0a] flex flex-col justify-between p-6 sm:p-10 transition-opacity duration-500 ease-out md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          minHeight: '100svh',
          width: '100vw',
        }}
        role="dialog"
        aria-modal="true"
      >
        {/* Top bar inside mobile overlay */}
        <div className="flex items-center justify-between">
          <span className="font-instrument text-2xl text-white tracking-widest">ROASTERS</span>
          
          {/* Close button with rotated lines */}
          <button
            id="mobile-menu-close"
            onClick={() => setMobileMenuOpen(false)}
            className={`liquid-glass w-12 h-12 rounded-full flex items-center justify-center relative text-white transition-all duration-500 ease-out cursor-pointer ${
              mobileMenuOpen ? 'rotate-0 scale-100' : '-rotate-90 scale-80'
            }`}
            aria-label="Close Mobile Menu"
          >
            <span className="absolute w-5 h-[1.5px] bg-white rotate-45" />
            <span className="absolute w-5 h-[1.5px] bg-white -rotate-45" />
          </button>
        </div>

        {/* Staggered Navigation Items */}
        <div className="flex flex-col gap-6 my-auto">
          {navLinks.map((link, index) => {
            const delays = ['100ms', '160ms', '220ms', '280ms', '340ms'];
            const delay = delays[index] || `${100 + index * 60}ms`;

            return (
              <button
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className="text-left font-instrument text-4xl sm:text-5xl text-neutral-200 hover:text-white transition-all duration-500 cursor-pointer"
                style={{
                  opacity: mobileMenuOpen ? 1 : 0,
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(24px)',
                  transitionDelay: delay,
                  transitionTimingFunction: 'cubic-bezier(0.77, 0, 0.18, 1)',
                }}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div
          className="pt-6 border-t border-white/10 flex flex-col gap-3"
          style={{
            opacity: mobileMenuOpen ? 1 : 0,
            transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: '400ms',
            transitionTimingFunction: 'cubic-bezier(0.77, 0, 0.18, 1)',
          }}
        >
          <button
            id="mobile-drawer-reserve-cta"
            onClick={() => handleLinkClick('contact')}
            className="liquid-glass w-full py-4 rounded-full flex items-center justify-center gap-2 text-sm uppercase tracking-widest text-white font-medium bg-white/5 active:bg-white/15 transition-all cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Reserve a Table</span>
          </button>

          <div className="text-center text-xs text-neutral-500 tracking-wider">
            1 AGHA KHAN RD, F-6 MARKAZ, ISLAMABAD
          </div>
        </div>
      </div>
    </>
  );
};

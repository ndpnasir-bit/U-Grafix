import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AGENCY_BRAND, NAV_LINKS } from '../data/agencyConfig';

interface NavbarProps {
  onRequestQuote: () => void;
}

export function Navbar({ onRequestQuote }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 border-b ${
        scrolled
          ? 'bg-[#070708]/95 backdrop-blur-md border-white/10'
          : 'bg-[#070708] border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          className="inline-flex items-center gap-2.5 text-white font-display text-lg font-bold tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6FF00]"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <rect x="2" y="2" width="20" height="20" stroke="#FFFFFF" strokeWidth="1.75" />
            <path d="M12 2V22M2 12H22" stroke="#C6FF00" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="3" fill="#C6FF00" />
          </svg>
          <span>{AGENCY_BRAND.name}</span>
        </a>

        {/* Zone 2: 5 Single-line Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#C6FF00] hover:after:w-full after:transition-all after:duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6FF00]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action (+ Mobile Menu Trigger) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onRequestQuote}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-[#070708] bg-[#C6FF00] hover:bg-[#D4FF33] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6FF00]"
          >
            Request Quote
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-white hover:text-[#C6FF00] transition-colors rounded-md border border-white/15 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C6FF00]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0D0D10] border-t border-white/10 px-4 py-5 space-y-2">
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="px-3 py-3 text-base font-medium text-neutral-200 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/10">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onRequestQuote();
              }}
              className="w-full py-3 px-4 text-sm font-semibold text-[#070708] bg-[#C6FF00] hover:bg-[#D4FF33] rounded-md transition-colors cursor-pointer"
            >
              Request Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

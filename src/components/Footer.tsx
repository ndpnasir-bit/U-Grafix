import { AGENCY_BRAND, NAV_LINKS, STUDIO_HUBS } from '../data/agencyConfig';

export function Footer() {
  return (
    <footer className="bg-[#070708] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          <div className="md:col-span-5 space-y-3">
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-white"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" stroke="#FFFFFF" strokeWidth="1.75" />
                <path d="M12 2V22M2 12H22" stroke="#C6FF00" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3" fill="#C6FF00" />
              </svg>
              <span>{AGENCY_BRAND.name}</span>
            </a>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              {AGENCY_BRAND.tagline}. Engineered for precision across digital systems and tactile pressrooms.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-neutral-300">Sections</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#home" className="hover:text-[#C6FF00] transition-colors">
                  Home
                </a>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#C6FF00] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold text-neutral-300">
              Press &amp; Design Hubs
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm text-neutral-400">
              {STUDIO_HUBS.map((hub) => (
                <div key={hub.city}>
                  <div className="text-white font-medium">{hub.city}</div>
                  <div className="text-xs text-neutral-500">{hub.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-500">
          <p>{AGENCY_BRAND.copyright}</p>
          <p className="font-mono text-neutral-400">
            ISO 12647-2 Certified Pre-Press · FSC Chain of Custody
          </p>
        </div>
      </div>
    </footer>
  );
}

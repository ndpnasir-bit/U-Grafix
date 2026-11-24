import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_CONTENT, HERO_METRICS } from '../data/agencyConfig';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onStartProject: () => void;
}

export function Hero({ onStartProject }: HeroProps) {
  return (
    <section
      id="home"
      className="bg-[#070708] text-white border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 lg:pt-20 lg:pb-16">
        {/* Split-screen balanced architectural grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Typographic Column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between py-2"
          >
            <div>
              <p className="font-mono text-xs tracking-wide text-[#C6FF00] mb-5">
                {HERO_CONTENT.hubsLine}
              </p>

              <h1
                className="font-display font-bold tracking-tight text-white text-balance leading-[1.06]"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
              >
                {HERO_CONTENT.headline}
              </h1>

              <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl">
                {HERO_CONTENT.subheadline}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={onStartProject}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#070708] bg-[#C6FF00] hover:bg-[#D4FF33] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6FF00]"
              >
                <span>{HERO_CONTENT.primaryCta}</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                href="#portfolio"
                className="inline-flex items-center gap-1.5 px-2 py-2.5 text-sm font-medium text-neutral-200 hover:text-[#C6FF00] transition-colors duration-150 whitespace-nowrap shrink-0 underline underline-offset-4 decoration-white/25 hover:decoration-[#C6FF00]"
              >
                {HERO_CONTENT.secondaryCta}
              </a>
            </div>
          </motion.div>

          {/* Right Media Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex"
          >
            <div className="relative w-full overflow-hidden rounded-xl border border-white/15 bg-[#111114] aspect-[16/10] lg:aspect-auto lg:min-h-[440px]">
              <ResilientImage
                src={HERO_CONTENT.heroImage}
                alt={HERO_CONTENT.heroImageAlt}
                fallbackTitle="U-GRAFIX Studio Atelier"
                priority
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#070708]/85 via-[#070708]/20 to-transparent pointer-events-none"
              />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <p className="text-sm font-medium text-white">
                    {HERO_CONTENT.captionTitle}
                  </p>
                  <p className="font-mono text-xs text-neutral-300 mt-0.5">
                    {HERO_CONTENT.captionDetail}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Capability & Proof Strip */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HERO_METRICS.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <div className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#C6FF00] tabular-nums">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-white">{metric.label}</div>
              <div className="text-xs text-neutral-400">{metric.context}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

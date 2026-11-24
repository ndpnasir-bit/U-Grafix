import { motion } from 'motion/react';
import { ABOUT_CONTENT } from '../data/agencyConfig';
import { ResilientImage } from './ResilientImage';

export function About() {
  return (
    <section
      id="about"
      className="bg-white text-[#0A0A0B] border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Top Row: Editorial Story & Atelier Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <p className="font-mono text-xs font-medium tracking-wide text-neutral-500 mb-3">
                About U-GRAFIX
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0B] text-balance leading-[1.12]">
                {ABOUT_CONTENT.sectionTitle}
              </h2>
              <p className="mt-6 text-base text-neutral-700 leading-relaxed">
                {ABOUT_CONTENT.leadParagraph}
              </p>
              <p className="mt-4 text-base text-neutral-600 leading-relaxed">
                {ABOUT_CONTENT.bodyParagraph}
              </p>
            </div>

            {/* Attributable Testimonial Adjacent to Claims */}
            <div className="mt-10 p-6 sm:p-8 rounded-xl bg-[#F7F7F5] border border-neutral-200">
              <blockquote className="text-sm sm:text-base text-[#0A0A0B] leading-relaxed font-medium">
                “{ABOUT_CONTENT.testimonial.quote}”
              </blockquote>
              <div className="mt-4 pt-4 border-t border-neutral-200 flex flex-wrap items-center gap-2 text-xs text-neutral-600">
                <span className="font-semibold text-[#0A0A0B]">
                  {ABOUT_CONTENT.testimonial.author}
                </span>
                <span aria-hidden="true">·</span>
                <span>{ABOUT_CONTENT.testimonial.role}</span>
                <span aria-hidden="true">·</span>
                <span>{ABOUT_CONTENT.testimonial.company}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex"
          >
            <div className="relative w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 aspect-[4/3] lg:aspect-auto lg:h-full min-h-[340px]">
              <ResilientImage
                src={ABOUT_CONTENT.image}
                alt={ABOUT_CONTENT.imageAlt}
                fallbackTitle="U-GRAFIX Swiss Offset Pressroom"
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none"
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-white">
                  Zurich Offset &amp; Spectrophotometric Lab
                </p>
                <span className="font-mono text-xs text-[#C6FF00] whitespace-nowrap">
                  D50 Calibrated
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: 3 Architectural Capability Pillars */}
        <div className="mt-14 pt-12 border-t border-neutral-200 grid grid-cols-1 md:grid-cols-3 gap-8">
          {ABOUT_CONTENT.pillars.map((pillar) => (
            <div key={pillar.title} className="space-y-2.5">
              <h3 className="font-display text-lg font-semibold tracking-tight text-[#0A0A0B]">
                {pillar.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PRINT_FINISH_SPECS, SERVICES_LIST } from '../data/agencyConfig';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  const [activeFinishId, setActiveFinishId] = useState(PRINT_FINISH_SPECS[0].id);
  const activeFinish =
    PRINT_FINISH_SPECS.find((item) => item.id === activeFinishId) ??
    PRINT_FINISH_SPECS[0];

  return (
    <section
      id="services"
      className="bg-[#070708] text-white border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="max-w-2xl">
            <p className="font-mono text-xs text-[#C6FF00] mb-3">
              Capabilities &amp; Production
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Integrated design architecture and specialist press execution.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
            Every discipline operates inside one calibrated workflow, eliminating translation loss between digital files and physical print.
          </p>
        </div>

        {/* Dynamic Asymmetric Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.3,
                delay: index * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group flex flex-col justify-between p-6 sm:p-8 rounded-xl border transition-colors duration-200 ${
                service.featured
                  ? 'lg:col-span-2 bg-[#111114] border-white/15 hover:border-[#C6FF00]/60'
                  : 'lg:col-span-1 bg-[#0C0C0E] border-white/10 hover:border-white/30'
              }`}
            >
              <div>
                <div className="flex items-baseline justify-between gap-4 mb-5">
                  <span className="font-mono text-xs font-medium text-[#C6FF00] tabular-nums">
                    {service.number}.
                  </span>
                  <span className="font-mono text-xs text-neutral-400 tabular-nums">
                    Typical Lead: {service.turnaround}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
                  {service.summary}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-neutral-400">
                  {service.deliverables}
                </span>

                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-white group-hover:text-[#C6FF00] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6FF00]"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Interactive Print Finishing & Substrate Inspector */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-[#111114] border border-white/15">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <h3 className="font-display text-xl font-semibold text-white">
                Tactile Finishing &amp; Press Specifications
              </h3>
              <p className="text-sm text-neutral-400 mt-1">
                Inspect our standard production tolerances across substrates and specialty dies.
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Print finishing specifications"
              className="flex flex-wrap items-center gap-1.5 p-1 bg-[#070708] border border-white/10 rounded-lg"
            >
              {PRINT_FINISH_SPECS.map((spec) => {
                const isActive = spec.id === activeFinish.id;
                return (
                  <button
                    key={spec.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFinishId(spec.id)}
                    className={`px-3 py-2 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C6FF00] ${
                      isActive
                        ? 'bg-[#C6FF00] text-[#070708] font-semibold'
                        : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    {spec.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            role="tabpanel"
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div>
              <div className="text-xs text-neutral-400">Reference Substrate</div>
              <div className="mt-1 text-sm font-medium text-white">
                {activeFinish.substrate}
              </div>
            </div>
            <div>
              <div className="text-xs text-neutral-400">Press Technique</div>
              <div className="mt-1 text-sm font-medium text-white">
                {activeFinish.technique}
              </div>
            </div>
            <div>
              <div className="text-xs text-neutral-400">Quality Tolerance</div>
              <div className="mt-1 font-mono text-sm font-medium text-[#C6FF00] tabular-nums">
                {activeFinish.tolerance}
              </div>
            </div>
            <div>
              <div className="text-xs text-neutral-400">Primary Application</div>
              <div className="mt-1 text-sm font-medium text-white">
                {activeFinish.application}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

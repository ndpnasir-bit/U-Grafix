import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
  PortfolioCategory,
  PortfolioProject,
} from '../data/agencyConfig';
import { ResilientImage } from './ResilientImage';

interface PortfolioProps {
  onRequestSimilar: (projectTitle: string) => void;
}

export function Portfolio({ onRequestSimilar }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<PortfolioCategory>('All Work');
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(
    null
  );

  const filteredProjects =
    selectedCategory === 'All Work'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  const navigateLightbox = useCallback(
    (direction: 'prev' | 'next') => {
      if (!activeProject || filteredProjects.length === 0) return;
      const currentIdx = filteredProjects.findIndex(
        (p) => p.id === activeProject.id
      );
      if (currentIdx === -1) return;
      const nextIdx =
        direction === 'next'
          ? (currentIdx + 1) % filteredProjects.length
          : (currentIdx - 1 + filteredProjects.length) % filteredProjects.length;
      setActiveProject(filteredProjects[nextIdx]);
    },
    [activeProject, filteredProjects]
  );

  useEffect(() => {
    if (!activeProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject, navigateLightbox]);

  return (
    <section
      id="portfolio"
      className="bg-[#F7F7F5] text-[#0A0A0B] border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header & Interactive Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-neutral-200">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium text-neutral-500 mb-3">
              Selected Case Studies
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0B] text-balance">
              Physical proof of craft across brand, packaging, and print.
            </h2>
          </div>

          <div
            role="group"
            aria-label="Filter portfolio projects by category"
            className="flex flex-wrap items-center gap-1 p-1 bg-white border border-neutral-200 rounded-lg self-start lg:self-auto"
          >
            {PORTFOLIO_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0A0A0B] ${
                    isActive
                      ? 'bg-[#0A0A0B] text-[#C6FF00] font-semibold'
                      : 'text-neutral-600 hover:text-[#0A0A0B]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Bento Gallery */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, idx) => {
            const isWide =
              selectedCategory === 'All Work'
                ? project.gridSpan === 'wide'
                : idx % 2 === 0;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`${
                  isWide ? 'lg:col-span-7' : 'lg:col-span-5'
                } group bg-white rounded-xl border border-neutral-200 overflow-hidden flex flex-col justify-between transition-colors duration-200 hover:border-[#0A0A0B]`}
              >
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  aria-label={`Inspect case study: ${project.title}`}
                  className="text-left flex flex-col h-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0A0A0B]"
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
                    <ResilientImage
                      src={project.image}
                      alt={project.imageAlt}
                      fallbackTitle={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Unboxed Metadata Line */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 font-mono">
                        <span>{project.client}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.location}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{project.year}</span>
                      </div>

                      <h3 className="mt-3 font-display text-xl sm:text-2xl font-semibold tracking-tight text-[#0A0A0B] group-hover:underline decoration-[#C6FF00] decoration-2 underline-offset-4">
                        {project.title}
                      </h3>

                      <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between gap-4">
                      <span className="text-xs font-medium text-[#0A0A0B]">
                        {project.impactMetric}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A0A0B] whitespace-nowrap shrink-0">
                        Inspect Specs
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Project Lightbox Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 bg-[#070708]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#0D0D10] text-white border border-white/15 rounded-2xl overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar Controls */}
            <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-neutral-400">
                <span className="text-[#C6FF00]">{activeProject.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeProject.client}</span>
                <span aria-hidden="true">·</span>
                <span>{activeProject.location}</span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {filteredProjects.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => navigateLightbox('prev')}
                      aria-label="Previous project"
                      className="w-10 h-10 inline-flex items-center justify-center rounded-md border border-white/15 text-neutral-200 hover:text-white hover:border-white/40 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => navigateLightbox('next')}
                      aria-label="Next project"
                      className="w-10 h-10 inline-flex items-center justify-center rounded-md border border-white/15 text-neutral-200 hover:text-white hover:border-white/40 transition-colors cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  aria-label="Close project specifications"
                  className="w-10 h-10 inline-flex items-center justify-center rounded-md bg-white text-[#070708] hover:bg-[#C6FF00] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 bg-[#070708] aspect-[4/3] lg:aspect-auto">
                <ResilientImage
                  src={activeProject.image}
                  alt={activeProject.imageAlt}
                  fallbackTitle={activeProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between gap-6">
                <div>
                  <h3
                    id="lightbox-title"
                    className="font-display text-2xl font-bold tracking-tight text-white"
                  >
                    {activeProject.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                    {activeProject.challenge}
                  </p>

                  <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
                    <div>
                      <div className="text-xs text-neutral-400">Substrate &amp; Stock</div>
                      <div className="text-sm font-medium text-white mt-0.5">
                        {activeProject.printSpecs.paperStock}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-neutral-400">Ink &amp; Color Process</div>
                      <div className="text-sm font-medium text-white mt-0.5">
                        {activeProject.printSpecs.inkProcess}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-neutral-400">Finishing &amp; Bindery</div>
                      <div className="text-sm font-medium text-white mt-0.5">
                        {activeProject.printSpecs.finishing}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-neutral-400">Production Volume</div>
                      <div className="font-mono text-xs text-[#C6FF00] mt-0.5">
                        {activeProject.printSpecs.pressRun}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-white/10 flex flex-col gap-4">
                  <div className="text-xs text-neutral-300">
                    Measured Outcome:{' '}
                    <span className="font-semibold text-white">
                      {activeProject.impactMetric}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const title = activeProject.title;
                      setActiveProject(null);
                      onRequestSimilar(title);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-[#070708] bg-[#C6FF00] hover:bg-[#D4FF33] rounded-md transition-colors cursor-pointer"
                  >
                    <span>Request Similar Production</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

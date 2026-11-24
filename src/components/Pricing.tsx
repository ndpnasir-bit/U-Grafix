import { useState } from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import {
  CURRENCY_CONFIG,
  CurrencyCode,
  ESTIMATOR_OPTIONS,
  PRICING_TIERS,
} from '../data/agencyConfig';

interface PricingProps {
  onSelectQuoteContext: (contextLabel: string) => void;
}

export function Pricing({ onSelectQuoteContext }: PricingProps) {
  const [scope, setScope] = useState<'design' | 'production'>('design');
  const [currency, setCurrency] = useState<CurrencyCode>('USD');

  // Instant estimator state
  const [formatId, setFormatId] = useState(ESTIMATOR_OPTIONS.formats[0].id);
  const [quantityId, setQuantityId] = useState(ESTIMATOR_OPTIONS.quantities[1].id);
  const [finishId, setFinishId] = useState(ESTIMATOR_OPTIONS.finishes[1].id);

  const curr = CURRENCY_CONFIG[currency];

  const formatMoney = (usdAmount: number) => {
    const converted = Math.round((usdAmount * curr.rate) / 10) * 10;
    return `${curr.symbol}${converted.toLocaleString('en-US')}`;
  };

  const selectedFormat =
    ESTIMATOR_OPTIONS.formats.find((f) => f.id === formatId) ??
    ESTIMATOR_OPTIONS.formats[0];
  const selectedQty =
    ESTIMATOR_OPTIONS.quantities.find((q) => q.id === quantityId) ??
    ESTIMATOR_OPTIONS.quantities[0];
  const selectedFinish =
    ESTIMATOR_OPTIONS.finishes.find((fn) => fn.id === finishId) ??
    ESTIMATOR_OPTIONS.finishes[0];

  const estimatedUsd =
    selectedFormat.baseUsd * selectedQty.multiplier + selectedFinish.surchargeUsd;

  const tiers = PRICING_TIERS[scope];

  return (
    <section
      id="pricing"
      className="bg-[#070708] text-white border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header + Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div className="max-w-2xl">
            <p className="font-mono text-xs text-[#C6FF00] mb-3">
              Transparent Investment
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Clear scopes for studio design and press production.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Scope Switcher */}
            <div
              role="group"
              aria-label="Select pricing scope"
              className="inline-flex items-center p-1 bg-[#111114] border border-white/15 rounded-lg"
            >
              <button
                type="button"
                onClick={() => setScope('design')}
                className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  scope === 'design'
                    ? 'bg-[#C6FF00] text-[#070708] font-semibold'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                Brand &amp; Design
              </button>
              <button
                type="button"
                onClick={() => setScope('production')}
                className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  scope === 'production'
                    ? 'bg-[#C6FF00] text-[#070708] font-semibold'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                Print Production
              </button>
            </div>

            {/* Currency Switcher */}
            <div
              role="group"
              aria-label="Select currency"
              className="inline-flex items-center p-1 bg-[#111114] border border-white/15 rounded-lg"
            >
              {(['USD', 'EUR', 'GBP'] as CurrencyCode[]).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setCurrency(code)}
                  className={`px-2.5 py-2 font-mono text-xs rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    currency === code
                      ? 'bg-white text-[#070708] font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3-Column Pricing Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col justify-between p-6 sm:p-8 rounded-xl border ${
                tier.featured
                  ? 'bg-[#111114] border-[#C6FF00]'
                  : 'bg-[#0C0C0E] border-white/15'
              }`}
            >
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-xs font-medium text-neutral-400">
                    {tier.audience}
                  </span>
                  {tier.featured && (
                    <span className="font-mono text-xs font-semibold text-[#C6FF00] whitespace-nowrap">
                      Most Selected
                    </span>
                  )}
                </div>

                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-white">
                  {tier.name}
                </h3>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold tracking-tight text-white tabular-nums">
                    {formatMoney(tier.basePriceUsd)}
                  </span>
                  <span className="text-xs text-neutral-400">
                    {tier.billingUnit}
                  </span>
                </div>

                <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                  {tier.description}
                </p>

                <ul className="mt-6 pt-6 border-t border-white/10 space-y-3">
                  {tier.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-neutral-200"
                    >
                      <Check
                        className="w-4 h-4 text-[#C6FF00] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-4 font-mono">
                  <span>Estimated Turnaround</span>
                  <span className="text-white tabular-nums">{tier.turnaround}</span>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    onSelectQuoteContext(
                      `${tier.name} (${formatMoney(tier.basePriceUsd)} ${tier.billingUnit})`
                    )
                  }
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold rounded-md transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                    tier.featured
                      ? 'bg-[#C6FF00] text-[#070708] hover:bg-[#D4FF33]'
                      : 'bg-white text-[#070708] hover:bg-[#C6FF00]'
                  }`}
                >
                  <span>Select {tier.name}</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Instant Print Estimate Calculator */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#111114] border border-white/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-white">
                  Instant Print Run Estimator
                </h3>
                <p className="text-sm text-neutral-400 mt-1">
                  Configure format, press quantity, and specialty finish for an indicative production budget.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="est-format"
                    className="block text-xs font-medium text-neutral-300 mb-2"
                  >
                    Print Format
                  </label>
                  <select
                    id="est-format"
                    value={formatId}
                    onChange={(e) => setFormatId(e.target.value)}
                    className="w-full bg-[#070708] border border-white/20 rounded-md px-3 py-2.5 text-sm text-white focus:outline-2 focus:outline-[#C6FF00]"
                  >
                    {ESTIMATOR_OPTIONS.formats.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="est-qty"
                    className="block text-xs font-medium text-neutral-300 mb-2"
                  >
                    Press Quantity
                  </label>
                  <select
                    id="est-qty"
                    value={quantityId}
                    onChange={(e) => setQuantityId(e.target.value)}
                    className="w-full bg-[#070708] border border-white/20 rounded-md px-3 py-2.5 text-sm text-white focus:outline-2 focus:outline-[#C6FF00]"
                  >
                    {ESTIMATOR_OPTIONS.quantities.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="est-finish"
                    className="block text-xs font-medium text-neutral-300 mb-2"
                  >
                    Finishing Standard
                  </label>
                  <select
                    id="est-finish"
                    value={finishId}
                    onChange={(e) => setFinishId(e.target.value)}
                    className="w-full bg-[#070708] border border-white/20 rounded-md px-3 py-2.5 text-sm text-white focus:outline-2 focus:outline-[#C6FF00]"
                  >
                    {ESTIMATOR_OPTIONS.finishes.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-lg bg-[#070708] border border-white/10 flex flex-col justify-between gap-4">
              <div>
                <div className="text-xs text-neutral-400">
                  Indicative Production Estimate
                </div>
                <div className="mt-1 font-display text-3xl font-bold text-[#C6FF00] tabular-nums">
                  {formatMoney(estimatedUsd)}
                </div>
                <div className="mt-1 font-mono text-xs text-neutral-300 tabular-nums">
                  Lead time: {selectedQty.days} · Wet proof included
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  onSelectQuoteContext(
                    `Custom Print Estimate: ${selectedFormat.label}, ${selectedQty.label}, ${selectedFinish.label} (~${formatMoney(estimatedUsd)})`
                  )
                }
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#070708] bg-[#C6FF00] hover:bg-[#D4FF33] rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Attach Estimate to Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

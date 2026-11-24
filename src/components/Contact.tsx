import { useState, useEffect, FormEvent } from 'react';
import { CheckCircle2, Mail, MapPin, Phone, X } from 'lucide-react';
import { AGENCY_BRAND, SERVICES_LIST, STUDIO_HUBS } from '../data/agencyConfig';

interface ContactProps {
  preselectedContext: string;
  onClearContext: () => void;
}

interface FormState {
  fullName: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  brief: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  brief?: string;
}

export function Contact({ preselectedContext, onClearContext }: ContactProps) {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    company: '',
    service: SERVICES_LIST[0].title,
    budget: '$10,000 – $25,000',
    brief: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!preselectedContext) return;
    setSubmitted(false);
    setForm((prev) => ({
      ...prev,
      brief: prev.brief.includes(preselectedContext)
        ? prev.brief
        : prev.brief
          ? `${preselectedContext}\n\n${prev.brief}`
          : `Inquiry regarding: ${preselectedContext}`,
    }));
  }, [preselectedContext]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid work email address.';
    }
    if (!form.brief.trim() || form.brief.trim().length < 15) {
      nextErrors.brief =
        'Please share a brief overview of your project goals or print specs (at least 15 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClearContext();
    setForm({
      fullName: '',
      email: '',
      company: '',
      service: SERVICES_LIST[0].title,
      budget: '$10,000 – $25,000',
      brief: '',
    });
  };

  return (
    <section
      id="contact"
      className="bg-white text-[#0A0A0B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Studio Hubs & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            <div>
              <p className="font-mono text-xs font-medium text-neutral-500 mb-3">
                Commission &amp; Pre-Press Desk
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0B] text-balance">
                Start a conversation with our studio directors.
              </h2>
              <p className="mt-4 text-base text-neutral-600 leading-relaxed">
                Share your timeline, substrate preferences, or brand ambitions. Our Zurich and regional leads reply with a structured production schedule within four business hours.
              </p>

              <div className="mt-8 space-y-3 text-sm">
                <a
                  href={`mailto:${AGENCY_BRAND.email}`}
                  className="flex items-center gap-3 font-medium text-[#0A0A0B] hover:underline decoration-[#C6FF00] decoration-2 underline-offset-4"
                >
                  <Mail className="w-4 h-4 text-neutral-500 shrink-0" aria-hidden="true" />
                  <span>{AGENCY_BRAND.email}</span>
                </a>
                <a
                  href={`mailto:${AGENCY_BRAND.pressEmail}`}
                  className="flex items-center gap-3 text-neutral-600 hover:text-[#0A0A0B]"
                >
                  <Mail className="w-4 h-4 text-neutral-400 shrink-0" aria-hidden="true" />
                  <span>Pre-press &amp; Paper Samples: {AGENCY_BRAND.pressEmail}</span>
                </a>
              </div>
            </div>

            {/* 4 International Studio Hubs */}
            <div className="pt-8 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {STUDIO_HUBS.map((hub) => (
                <div key={hub.city} className="space-y-1.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-base font-bold text-[#0A0A0B]">
                      {hub.city}
                    </h3>
                    <span className="font-mono text-xs text-neutral-500">
                      {hub.timezone}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-neutral-700">{hub.role}</p>
                  <p className="flex items-start gap-1.5 text-xs text-neutral-500 leading-relaxed">
                    <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{hub.address}</span>
                  </p>
                  <p className="flex items-center gap-1.5 font-mono text-xs text-neutral-600 tabular-nums">
                    <Phone className="w-3 h-3 shrink-0" aria-hidden="true" />
                    <span>{hub.phone}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Validated Quote & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-[#F7F7F5] border border-neutral-200">
              {submitted ? (
                <div className="py-10 text-center space-y-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#0A0A0B] text-[#C6FF00] mx-auto">
                    <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#0A0A0B]">
                    Project Brief Received
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#0A0A0B]">{form.fullName}</span>. A senior producer for <span className="font-semibold text-[#0A0A0B]">{form.service}</span> will review your specifications and contact <span className="font-mono text-xs text-[#0A0A0B]">{form.email}</span> within 4 business hours.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0A0A0B] hover:bg-neutral-800 rounded-md transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-neutral-200">
                    <h3 className="font-display text-xl font-bold text-[#0A0A0B]">
                      Request a Custom Proposal
                    </h3>
                    <span className="font-mono text-xs text-neutral-500">
                      {AGENCY_BRAND.responseSla}
                    </span>
                  </div>

                  {preselectedContext && (
                    <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-[#0A0A0B] text-white text-xs">
                      <span className="truncate">
                        Selected Scope: <strong className="text-[#C6FF00]">{preselectedContext}</strong>
                      </span>
                      <button
                        type="button"
                        onClick={onClearContext}
                        aria-label="Clear selected scope"
                        className="text-neutral-300 hover:text-white shrink-0 cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-[#0A0A0B] mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.fullName}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, fullName: e.target.value }))
                        }
                        placeholder="Clara Vance"
                        className="w-full bg-white border border-neutral-300 rounded-md px-3.5 py-2.5 text-sm text-[#0A0A0B] placeholder:text-neutral-400 focus:outline-2 focus:outline-[#0A0A0B]"
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs text-red-600 font-medium">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-[#0A0A0B] mb-1.5"
                      >
                        Work Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, email: e.target.value }))
                        }
                        placeholder="clara@company.com"
                        className="w-full bg-white border border-neutral-300 rounded-md px-3.5 py-2.5 text-sm text-[#0A0A0B] placeholder:text-neutral-400 focus:outline-2 focus:outline-[#0A0A0B]"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-600 font-medium">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-company"
                        className="block text-xs font-semibold text-[#0A0A0B] mb-1.5"
                      >
                        Company / Brand
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={form.company}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, company: e.target.value }))
                        }
                        placeholder="Krono Atelier AB"
                        className="w-full bg-white border border-neutral-300 rounded-md px-3.5 py-2.5 text-sm text-[#0A0A0B] placeholder:text-neutral-400 focus:outline-2 focus:outline-[#0A0A0B]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-budget"
                        className="block text-xs font-semibold text-[#0A0A0B] mb-1.5"
                      >
                        Target Budget
                      </label>
                      <select
                        id="contact-budget"
                        value={form.budget}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, budget: e.target.value }))
                        }
                        className="w-full bg-white border border-neutral-300 rounded-md px-3.5 py-2.5 text-sm text-[#0A0A0B] focus:outline-2 focus:outline-[#0A0A0B]"
                      >
                        <option value="$2,500 – $10,000">$2,500 – $10,000</option>
                        <option value="$10,000 – $25,000">$10,000 – $25,000</option>
                        <option value="$25,000 – $60,000">$25,000 – $60,000</option>
                        <option value="$60,000+ Enterprise">$60,000+ Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-semibold text-[#0A0A0B] mb-1.5"
                    >
                      Primary Discipline
                    </label>
                    <select
                      id="contact-service"
                      value={form.service}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, service: e.target.value }))
                      }
                      className="w-full bg-white border border-neutral-300 rounded-md px-3.5 py-2.5 text-sm text-[#0A0A0B] focus:outline-2 focus:outline-[#0A0A0B]"
                    >
                      {SERVICES_LIST.map((srv) => (
                        <option key={srv.number} value={srv.title}>
                          {srv.number}. {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-brief"
                      className="block text-xs font-semibold text-[#0A0A0B] mb-1.5"
                    >
                      Project Brief &amp; Print Specifications *
                    </label>
                    <textarea
                      id="contact-brief"
                      rows={4}
                      required
                      value={form.brief}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, brief: e.target.value }))
                      }
                      placeholder="Describe deliverables, print quantities, target delivery city, and preferred launch date..."
                      className="w-full bg-white border border-neutral-300 rounded-md px-3.5 py-2.5 text-sm text-[#0A0A0B] placeholder:text-neutral-400 focus:outline-2 focus:outline-[#0A0A0B]"
                    />
                    {errors.brief && (
                      <p className="mt-1.5 text-xs text-red-600 font-medium">
                        {errors.brief}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-neutral-500">
                      NDA protection available upon request prior to file transfer.
                    </p>
                    <button
                      type="submit"
                      className="px-6 py-3 text-sm font-semibold text-[#070708] bg-[#C6FF00] hover:bg-[#D4FF33] border border-[#0A0A0B]/15 rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0B]"
                    >
                      Send Project Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

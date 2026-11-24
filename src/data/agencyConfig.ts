/**
 * U-GRAFIX Agency Configuration
 * --------------------------------------------------------------------------
 * Centralized content & pricing registry for effortless customization.
 * Update studio hubs, services, portfolio projects, pricing tiers, or
 * estimator multipliers here without modifying component markup.
 */

export type CurrencyCode = 'USD' | 'EUR' | 'GBP';

export type PortfolioCategory =
  | 'All Work'
  | 'Brand Identity'
  | 'Packaging'
  | 'Editorial Print'
  | 'Environmental';

export interface NavItem {
  label: string;
  href: string;
}

export interface StudioMetric {
  value: string;
  label: string;
  context: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  summary: string;
  deliverables: string;
  turnaround: string;
  featured?: boolean;
}

export interface PrintFinishSpec {
  id: string;
  name: string;
  substrate: string;
  technique: string;
  tolerance: string;
  application: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: Exclude<PortfolioCategory, 'All Work'>;
  year: string;
  location: string;
  image: string;
  imageAlt: string;
  summary: string;
  challenge: string;
  printSpecs: {
    paperStock: string;
    inkProcess: string;
    finishing: string;
    pressRun: string;
  };
  impactMetric: string;
  gridSpan: 'wide' | 'standard';
}

export interface PricingTier {
  id: string;
  name: string;
  audience: string;
  description: string;
  basePriceUsd: number;
  billingUnit: string;
  featured?: boolean;
  turnaround: string;
  deliverables: string[];
}

export interface StudioHub {
  city: string;
  role: string;
  address: string;
  phone: string;
  timezone: string;
}

export const AGENCY_BRAND = {
  name: 'U-GRAFIX',
  tagline: 'International Graphic Design & Specialist Print House',
  email: 'atelier@u-grafix.com',
  pressEmail: 'prepress@u-grafix.com',
  responseSla: 'Response within 4 business hours',
  foundedYear: 2016,
  copyright: '© 2026 U-GRAFIX International AG. All rights reserved.',
};

export const NAV_LINKS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_CONTENT = {
  hubsLine: 'Zurich · London · Tokyo · New York',
  headline: 'Precision graphic design engineered for physical print.',
  subheadline:
    'We partner with ambitious international brands to architect cohesive identity systems, tactile foil packaging, and archival offset publications delivered directly from our pressrooms.',
  primaryCta: 'Start a Project',
  secondaryCta: 'View Selected Work',
  heroImage: '/src/assets/images/hero_ugrafix_studio_1795548312768.jpg',
  heroImageAlt:
    'U-GRAFIX studio workbench with Swiss grid brand manuals, Pantone neon-lime swatch fan, and brass printing loupe',
  captionTitle: 'Color Lab & Pre-Press Standards',
  captionDetail: 'ISO 12647-2 Fogra51 · Pantone Live Calibrated',
};

export const HERO_METRICS: StudioMetric[] = [
  {
    value: '240+',
    label: 'Global Brand Launches',
    context: 'Across 34 countries since 2016',
  },
  {
    value: '18',
    label: 'Partner Press Facilities',
    context: 'Zurich, Milan, Tokyo, London & NYC',
  },
  {
    value: '0.02mm',
    label: 'Registration Tolerance',
    context: 'Multi-pass foil & offset alignment',
  },
  {
    value: '48h',
    label: 'Hard-Copy Wet Proofing',
    context: 'Courier-dispatched worldwide',
  },
];

export const ABOUT_CONTENT = {
  sectionTitle: 'Where Swiss typographic discipline meets industrial print craft.',
  leadParagraph:
    'Most design agencies hand off flat PDFs and hope for the best on press. U-GRAFIX bridges concept and physical manufacture under one roof—pairing senior identity directors with master lithographers, structural packaging engineers, and colorimetry specialists.',
  bodyParagraph:
    'Every paper weight, foil die temperature, and spot-ink density is tested in our Zurich and Tokyo pre-press labs before a single sheet runs. The result is unmistakable physical authority that translates seamlessly across digital touchpoints.',
  image: '/src/assets/images/about_print_atelier_1795548315274.jpg',
  imageAlt:
    'U-GRAFIX Swiss offset pressroom with precision ink rollers and calibrated D50 color viewing booth',
  pillars: [
    {
      title: '01. Calibrated Pre-Press Color Lab',
      detail:
        'D50 daylight proof booths and spectrophotometric Pantone spot matching eliminate press surprises across continents.',
    },
    {
      title: '02. FSC-Certified Tactile Substrates',
      detail:
        'Curated library of 420+ cotton rag, dyed pulp, and recycled mineral stocks from Fedrigoni, Gmund, and Takeo.',
    },
    {
      title: '03. Turnkey Global Fulfillment',
      detail:
        'Regional press routing minimizes freight carbon and customs delays while keeping unit tolerances identical.',
    },
  ],
  testimonial: {
    quote:
      'U-GRAFIX re-engineered our global packaging line from structural CAD to 80,000 foil-stamped units in six weeks—cutting unit waste by 28% while lifting retail shelf sell-through by 41% in our flagship European doors.',
    author: 'Elena Lindqvist',
    role: 'VP of Brand Experience',
    company: 'Krono Atelier Stockholm',
  },
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    number: '01',
    title: 'Brand Identity & Design Systems',
    summary:
      'Complete visual architecture built for longevity: custom geometric logotypes, multi-script typographic hierarchies, color systems calibrated for both RGB and CMYK/Pantone, and comprehensive brand manuals.',
    deliverables: 'Brand Architecture · Type System · Guidelines Manual',
    turnaround: '4–6 weeks',
    featured: true,
  },
  {
    number: '02',
    title: 'Luxury Packaging & Structural CAD',
    summary:
      'Custom rigid boxes, fluted gift tubes, and sustainable pulp inserts engineered from raw dielines to physical white-sample prototypes and full factory tooling.',
    deliverables: 'CAD Dielines · White Samples · Factory Press Checks',
    turnaround: '5–8 weeks',
    featured: true,
  },
  {
    number: '03',
    title: 'Offset, Foil & Tactile Print Production',
    summary:
      'High-definition stochastic offset printing, multi-level blind debossing, Kurz hot foil stamping, and precision edge-painting executed under strict press supervision.',
    deliverables: 'Wet Proofs · Specialty Finishes · Global Delivery',
    turnaround: '10–14 days',
  },
  {
    number: '04',
    title: 'Editorial Books & Annual Monographs',
    summary:
      'Smyth-sewn architectural monographs, exhibition catalogues, and shareholder reports featuring Swiss exposed spines, French-fold pages, and archival cotton stocks.',
    deliverables: 'Grid Direction · Typesetting · Bindery Supervision',
    turnaround: '4–7 weeks',
  },
  {
    number: '05',
    title: 'Exhibition & Architectural Wayfinding',
    summary:
      'Large-format museum wall graphics, anodized aluminum signage totems, and retail flagship environmental installations built to architectural tolerances.',
    deliverables: 'Spatial Audits · Signage Specs · Site Installation',
    turnaround: '3–6 weeks',
  },
  {
    number: '06',
    title: 'Digital Flagships & Campaign Assets',
    summary:
      'Cohesive motion identities, interactive product lookbooks, and high-speed web experiences engineered to mirror the tactile precision of your printed materials.',
    deliverables: 'UI Systems · Motion Toolkits · Campaign Key Visuals',
    turnaround: '3–5 weeks',
  },
];

export const PRINT_FINISH_SPECS: PrintFinishSpec[] = [
  {
    id: 'foil',
    name: 'Micro-Etched Hot Foil',
    substrate: '450gsm Gmund Cotton Black',
    technique: 'Brass-die thermal transfer at 125°C',
    tolerance: '±0.02mm edge registration',
    application: 'Luxury boxes, cover spines, bespoke certificates',
  },
  {
    id: 'neon-spot',
    name: 'Fluorescent Pantone 809 Spot',
    substrate: '350gsm Fedrigoni Arena Natural',
    technique: 'Double-hit opaque white underbase + neon spot ink',
    tolerance: 'ΔE < 1.2 colorimetric variance',
    application: 'Editorial ribbons, edge painting, brand callouts',
  },
  {
    id: 'deboss',
    name: 'Multi-Level Blind Deboss',
    substrate: '700gsm Duplexed Archival Board',
    technique: 'Sculpted CNC brass counter-die impression',
    tolerance: '0.8mm tactile relief depth',
    application: 'Executive stationery, fragrance sleeves, folders',
  },
  {
    id: 'binding',
    name: 'Exposed Smyth-Sewn Binding',
    substrate: '140gsm Munken Polar Rough',
    technique: 'Neon-lime linen thread lay-flat stitching',
    tolerance: '180° flat-open spine durability',
    application: 'Architectural monographs, lookbooks, brand books',
  },
];

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  'All Work',
  'Brand Identity',
  'Packaging',
  'Editorial Print',
  'Environmental',
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'krono-botanicals',
    title: 'Krono Atelier — Noir Rigid Packaging System',
    client: 'Krono Atelier',
    category: 'Packaging',
    year: '2026',
    location: 'Stockholm / Milan',
    image: '/src/assets/images/portfolio_luxury_packaging_1795548314135.jpg',
    imageAlt:
      'Matte black rigid packaging boxes and fluted paper tube with geometric embossing and neon-lime foil edge trim',
    summary:
      'Structural packaging architecture and zero-plastic rigid box production for a Nordic botanical fragrance house.',
    challenge:
      'Eliminate foam inserts while delivering dramatic unboxing tension and crisp neon-lime foil bevels across 14 SKUs.',
    printSpecs: {
      paperStock: '1200gsm Greyboard wrapped in 140gsm Sirio Ultra Black',
      inkProcess: 'Blind geometric emboss + Pantone 809 edge-foil pass',
      finishing: 'CNC precision fluted cylinders with anti-scuff matte varnish',
      pressRun: '80,000 units · Milan & Gothenburg fulfillment',
    },
    impactMetric: '+41% Retail Sell-Through · -28% Material Waste',
    gridSpan: 'wide',
  },
  {
    id: 'concrete-steel-light',
    title: 'Concrete, Steel & Light — Architectural Monograph',
    client: 'Kunsthalle Zürich Press',
    category: 'Editorial Print',
    year: '2025',
    location: 'Zurich',
    image: '/src/assets/images/portfolio_editorial_monograph_1795548314920.jpg',
    imageAlt:
      'Open hardcover architecture monograph book with bold black Swiss grid typography and neon-lime silk ribbon marker',
    summary:
      '384-page bilingual retrospective monograph featuring duotone plates, Swiss grid typography, and exposed thread binding.',
    challenge:
      'Maintain deep neutral blacks across uncoated cotton paper without shadow plugging on high-contrast architectural plates.',
    printSpecs: {
      paperStock: '150gsm Munken Kristall Rough + 300gsm linen board cover',
      inkProcess: 'Stochastic 300 LPI tritone black + warm grey plates',
      finishing: 'Exposed Smyth-sewn spine with custom Pantone neon ribbon',
      pressRun: '6,500 numbered first-edition copies',
    },
    impactMetric: 'Sold Out First Edition in 11 Weeks · Red Dot Winner',
    gridSpan: 'standard',
  },
  {
    id: 'altus-corporate-identity',
    title: 'Altus Capital — Tactile Identity & Stationery Suite',
    client: 'Altus Ventures',
    category: 'Brand Identity',
    year: '2026',
    location: 'London / New York',
    image: '/src/assets/images/portfolio_brand_stationery_1795548314914.jpg',
    imageAlt:
      'Corporate stationery suite with black and white cotton business cards, neon-lime painted edges, and embossed silver seal',
    summary:
      'Complete visual rebrand and duplexed executive stationery suite engineered for an international infrastructure fund.',
    challenge:
      'Project institutional authority while introducing an unmistakable high-energy edge accent across tactile print collateral.',
    printSpecs: {
      paperStock: '700gsm Duplexed Colorplan Ebony & Pristine White',
      inkProcess: 'Opaque silver foil + Pantone 375C neon edge-gilding',
      finishing: 'Custom blind-debossed monogram seal & die-cut presentation folders',
      pressRun: '12,000 stationery sets across 4 global offices',
    },
    impactMetric: 'Unified 4 Global Offices · 100% Brand Audit Compliance',
    gridSpan: 'standard',
  },
  {
    id: 'design-forward-wayfinding',
    title: 'Design Forward — Museum Wayfinding & Spatial Graphics',
    client: 'Tokyo Contemporary Design Pavilion',
    category: 'Environmental',
    year: '2025',
    location: 'Tokyo',
    image: '/src/assets/images/portfolio_exhibition_wayfinding_1795548315207.jpg',
    imageAlt:
      'Contemporary museum gallery with giant black and white wall typography and neon-lime directional wayfinding totem',
    summary:
      'Monumental architectural typography and modular anodized steel wayfinding totems across 4,200 square meters of exhibition space.',
    challenge:
      'Guide 180,000+ international visitors smoothly through multi-level concrete galleries without visual clutter.',
    printSpecs: {
      paperStock: '3M Non-PVC architectural matte wall vinyl & powder-coated steel',
      inkProcess: 'UV-cured matte black + RAL 1026 luminous lime powder coat',
      finishing: 'Precision laser-cut stencil typography & magnetic signage panels',
      pressRun: '42 directional totems · 680m² mural graphics',
    },
    impactMetric: '185,000 Exhibition Visitors · -35% Gallery Bottlenecks',
    gridSpan: 'wide',
  },
];

export const CURRENCY_CONFIG: Record<
  CurrencyCode,
  { symbol: string; rate: number; label: string }
> = {
  USD: { symbol: '$', rate: 1, label: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.79, label: 'GBP (£)' },
};

export const PRICING_TIERS: Record<'design' | 'production', PricingTier[]> = {
  design: [
    {
      id: 'studio-identity',
      name: 'Studio Identity',
      audience: 'Emerging Luxury & Architectural Brands',
      description:
        'A rigorous foundational identity system engineered for immediate digital and print deployment.',
      basePriceUsd: 6800,
      billingUnit: 'per engagement',
      turnaround: '4 weeks',
      deliverables: [
        'Primary wordmark & geometric symbol suite',
        'Typographic hierarchy & grid specification',
        'Pantone, CMYK & RGB color calibration',
        '60-page digital & print brand manual',
        'Print-ready stationery mechanicals',
      ],
    },
    {
      id: 'flagship-system',
      name: 'Flagship Identity & Packaging',
      audience: 'Global Consumer & Hospitality Launches',
      description:
        'End-to-end visual identity paired with bespoke structural packaging design and physical wet proofing.',
      basePriceUsd: 14500,
      billingUnit: 'per engagement',
      featured: true,
      turnaround: '6–8 weeks',
      deliverables: [
        'Complete Brand Identity & Motion Guidelines',
        'Up to 6 custom structural CAD packaging dielines',
        'Physical white-sample & Pantone wet-proof kit',
        'Specialty foil, emboss & substrate specification',
        'Dedicated press-check supervision on first run',
      ],
    },
    {
      id: 'enterprise-retainer',
      name: 'Global Atelier Retainer',
      audience: 'Multi-Market Enterprises & Cultural Institutions',
      description:
        'Dedicated senior creative direction, ongoing editorial systems, and priority access to our global press network.',
      basePriceUsd: 9200,
      billingUnit: 'per month',
      turnaround: '48h priority SLA',
      deliverables: [
        'Dedicated Senior Art Director & Pre-Press Lead',
        'Unlimited brand collateral & campaign adaptations',
        'Quarterly print production & global logistics routing',
        'Exhibition, lookbook & monograph art direction',
        'Direct wholesale mill paper & foil sourcing',
      ],
    },
  ],
  production: [
    {
      id: 'executive-print-suite',
      name: 'Executive Print Suite',
      audience: 'Stationery, Lookbooks & Press Kits',
      description:
        'Short-run tactile offset and letterpress production on archival European and Japanese cotton stocks.',
      basePriceUsd: 2400,
      billingUnit: 'starting run (500 sets)',
      turnaround: '10 business days',
      deliverables: [
        'D50 hard-copy wet proof prior to press lock',
        'Up to 600gsm duplexed cotton or dyed board',
        '1-pass hot foil stamping or blind debossing',
        'Optional Pantone neon-lime edge painting',
        'Insured DHL Express worldwide door delivery',
      ],
    },
    {
      id: 'commercial-packaging-run',
      name: 'Bespoke Packaging Run',
      audience: 'Rigid Boxes, Sleeves & Fluted Tubes',
      description:
        'Precision structural packaging manufactured to ±0.02mm registration with sustainable zero-plastic inserts.',
      basePriceUsd: 7800,
      billingUnit: 'starting run (1,500 units)',
      featured: true,
      turnaround: '3–4 weeks',
      deliverables: [
        'Custom brass foil & multi-level embossing dies',
        'Molded pulp or fluted board eco-inserts',
        'ISO 12647-2 press sheet sign-off in Zurich or Milan',
        'Anti-scuff soft-touch or raw matte lamination',
        'Palletized global freight & customs clearance',
      ],
    },
    {
      id: 'editorial-monograph-run',
      name: 'Archival Monograph Run',
      audience: 'Books, Catalogues & Collector Editions',
      description:
        'Museum-grade Smyth-sewn hardcover publishing with stochastic screening and custom cloth/foil binding.',
      basePriceUsd: 11400,
      billingUnit: 'starting run (1,000 copies)',
      turnaround: '3–5 weeks',
      deliverables: [
        '300 LPI stochastic duotone or 6-color press',
        'Fedrigoni or Munken FSC archival paper stocks',
        'Exposed or linen hardcover Smyth-sewn bindery',
        'Custom dyed silk ribbon & slipcase options',
        'Split international warehouse distribution',
      ],
    },
  ],
};

export const ESTIMATOR_OPTIONS = {
  formats: [
    { id: 'stationery', label: 'Executive Stationery Suite', baseUsd: 1650 },
    { id: 'monograph', label: 'Hardcover Brand Monograph', baseUsd: 4200 },
    { id: 'packaging', label: 'Custom Rigid Packaging', baseUsd: 3600 },
    { id: 'exhibition', label: 'Exhibition & Signage Kit', baseUsd: 2950 },
  ],
  quantities: [
    { id: '250', label: '250 units', multiplier: 1.0, days: '10 days' },
    { id: '500', label: '500 units', multiplier: 1.45, days: '12 days' },
    { id: '1500', label: '1,500 units', multiplier: 2.35, days: '18 days' },
    { id: '5000', label: '5,000+ units', multiplier: 4.1, days: '24 days' },
  ],
  finishes: [
    { id: 'matte', label: 'Stochastic Matte Offset', surchargeUsd: 0 },
    { id: 'foil', label: 'Neon-Lime / Metallic Hot Foil', surchargeUsd: 680 },
    { id: 'duplex-foil', label: '700gsm Duplex + Blind Deboss + Foil', surchargeUsd: 1350 },
  ],
};

export const STUDIO_HUBS: StudioHub[] = [
  {
    city: 'Zurich',
    role: 'Global HQ & Color Lab',
    address: 'Limmatquai 94, 8001 Zürich, Switzerland',
    phone: '+41 44 580 24 10',
    timezone: 'CET',
  },
  {
    city: 'London',
    role: 'Brand Strategy & Editorial',
    address: '28 Redchurch St, Shoreditch, London E2 7DP',
    phone: '+44 20 7946 0821',
    timezone: 'GMT',
  },
  {
    city: 'Tokyo',
    role: 'Packaging & Mill Sourcing',
    address: '5-7-21 Minami-Aoyama, Minato-ku, Tokyo 107-0062',
    phone: '+81 3 5555 0194',
    timezone: 'JST',
  },
  {
    city: 'New York',
    role: 'Americas Press & Fulfillment',
    address: '148 Lafayette St, SoHo, New York, NY 10013',
    phone: '+1 212 555 0148',
    timezone: 'EST',
  },
];

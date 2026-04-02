// ─────────────────────────────────────────────
// Shared
// ─────────────────────────────────────────────

export interface CtaLink {
  label: string;
  href: string;
}

export interface CtaBanner {
  headline: string;
  subtext: string;
  cta: CtaLink;
}

// ─────────────────────────────────────────────
// Homepage
// ─────────────────────────────────────────────

export interface HomepageHero {
  headline_line1: string;
  headline_line2: string;
  subtext: string;
  subtext_emphasis: string;
  cta_primary: CtaLink;
  cta_secondary: CtaLink;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Segment {
  title: string;
  description: string;
}

export interface CapabilityPreview {
  title: string;
  description: string;
  href: string;
}

export interface Principle {
  title: string;
  description: string;
}

// ─────────────────────────────────────────────
// About
// ─────────────────────────────────────────────

export interface AboutHero {
  eyebrow: string;
  headline: string;
  subtext: string;
}

// ─────────────────────────────────────────────
// Services
// ─────────────────────────────────────────────

export interface MAOutcome {
  label: string;
  description: string;
}

export interface CapitalPillar {
  title: string;
  description: string;
}

export interface Sector {
  title: string;
  description: string;
}

// ─────────────────────────────────────────────
// Team
// ─────────────────────────────────────────────

export interface SeniorPartner {
  id: string;
  name: string;
  title: string;
  bio: string;
  education?: string;
  photo: string;
}

// ─────────────────────────────────────────────
// Transactions
// ─────────────────────────────────────────────

export interface Transaction {
  id: string;
  company: string;
  acquirer: string;
  type: string;
  tagline: string;
  description: string;
  value: string;
  sector: string;
  outcomes_seller: string[];
  outcomes_investors: string[];
}

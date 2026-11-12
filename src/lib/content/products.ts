export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  /** On-site product page. Omitted when a product has no page to link to. */
  href?: string;
};

export const ANRIL: Product = {
  slug: "anril",
  name: "Anril",
  tagline: "AI-Powered Revenue Acceleration Platform",
  description:
    "Anril is Bloom Matrix's flagship product — a multi-tenant SaaS platform that turns inbound enquiries into qualified, routed, and logged revenue activity. It combines intelligent customer engagement, omnichannel communication, CRM capabilities, lead management, AI assistants, AI telecalling, and workflow automation in one system, with each customer managing their own communication channels and business data.",
  features: [
    "Intelligent Customer Engagement",
    "Omnichannel Communication",
    "CRM & Lead Management",
    "AI Assistants & AI Telecalling",
    "Manual Telecalling Tools",
    "Analytics & Workflow Automation",
    "Third-Party Integrations",
  ],
  href: "/products/anril",
};

/**
 * Our live consumer app. Presented without its brand name and with no outside
 * link, by decision of 2026-11-04 — never reintroduce the name on the site.
 */
export const CONSUMER_APP: Product = {
  slug: "consumer-marketplace-app",
  name: "Consumer Marketplace App",
  tagline: "Live Consumer App",
  description:
    "A live consumer app we designed, built and run, on Android and the web. It connects users with 150+ experts through text and voice messages, with in-app payments.",
  features: ["Android & Web", "150+ Experts", "Text & Voice Messages", "In-App Payments"],
};

export const PRODUCTS: Product[] = [ANRIL, CONSUMER_APP];

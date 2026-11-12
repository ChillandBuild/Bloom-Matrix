import type { FAQItem } from "@/lib/schema";

/**
 * Country landing pages (/uae, /uk, /malaysia, /singapore). Copy and keyword
 * placement come from the 2026-11-04 website brief (Google Keyword Planner
 * research per country). Rule from that brief: no page may claim existing
 * clients in any of these countries.
 */

export type CountryBullet = { title: string; body: string };

export type CountryPage = {
  slug: string;
  /** Short eyebrow above the H1. */
  eyebrow: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  /** "What we build for … businesses" */
  buildHeading: string;
  buildLead: string;
  build: CountryBullet[];
  workingHours: string;
  faqHeading: string;
  faqs: FAQItem[];
};

const AI_ASSISTANTS_BODY =
  "answer enquiries on WhatsApp, Instagram and your website around the clock, and qualify leads before your team calls.";
const SAAS: CountryBullet = {
  title: "SaaS platforms",
  body: "multi-tenant software with logins, billing and dashboards, ready to grow.",
};
const AUTOMATION: CountryBullet = {
  title: "Business automation",
  body: "connect your tools and remove manual work in sales, operations and reporting.",
};
const DATA: CountryBullet = {
  title: "Data and analytics",
  body: "dashboards that show your numbers in one place.",
};
const APPS_BODY = "web and mobile apps built from your requirements, from first idea to launch.";

/** The UAE FAQ, with "UAE" swapped for each country's name. */
function countryFaqs(place: string, hoursLabel: string): FAQItem[] {
  return [
    {
      question: `Do you work with companies in ${place}?`,
      answer: `Yes. We work remotely with clients outside India, with calls and WhatsApp during ${hoursLabel} business hours.`,
    },
    {
      question: "How do we start?",
      answer:
        "Message us on WhatsApp or fill in the contact form. We begin with a free discovery call to understand what you need.",
    },
    {
      question: "How is pricing decided?",
      answer: "Each project is quoted after the discovery call, based on scope and timeline.",
    },
    {
      question: "Who owns the code?",
      answer: "Ownership is agreed in writing in the project agreement before work starts.",
    },
  ];
}

export const UAE: CountryPage = {
  slug: "uae",
  eyebrow: "Dubai · UAE",
  title: "App & Software Development Company in Dubai, UAE | Bloom Matrix",
  metaDescription:
    "Mobile app development and custom software for businesses in Dubai and the UAE, with AI built in. Talk to Bloom Matrix on WhatsApp.",
  h1: "App and software development for Dubai and UAE businesses.",
  intro:
    "Bloom Matrix is an AI-first app and software development company. We design, build and run mobile apps, web apps and custom software, from AI assistants that answer customers 24/7 to complete SaaS platforms. We are ready to be the long-term technology partner for businesses in Dubai and across the UAE.",
  buildHeading: "What we build for UAE businesses",
  buildLead:
    "As a custom software development company for Dubai and the wider UAE, we take on the whole build:",
  build: [
    { title: "Mobile and web app development", body: APPS_BODY },
    {
      title: "AI assistants and agents",
      body: `AI chatbots that ${AI_ASSISTANTS_BODY}`,
    },
    SAAS,
    AUTOMATION,
    DATA,
  ],
  workingHours:
    "India is only 1.5 hours ahead of the UAE, so our day overlaps fully with yours.",
  faqHeading: "Questions from UAE businesses",
  faqs: countryFaqs("the UAE", "UAE"),
};

export const UK: CountryPage = {
  slug: "uk",
  eyebrow: "United Kingdom",
  title: "Bespoke Software & App Development Company for UK Businesses | Bloom Matrix",
  metaDescription:
    "Bespoke software development, mobile app development and AI for UK businesses. One long-term technology partner. Talk to Bloom Matrix on WhatsApp.",
  h1: "Bespoke software and app development for UK businesses.",
  intro:
    "Bloom Matrix is an AI-first software development company. We design, build and run bespoke software, mobile apps and AI products, from first idea to launch and beyond, as one long-term technology partner for UK businesses.",
  buildHeading: "What we build for UK businesses",
  buildLead: "Bespoke software development, from a single app to a complete platform:",
  build: [
    {
      title: "Bespoke software development",
      body: "custom web software built from your requirements, from first idea to launch.",
    },
    {
      title: "Mobile app development",
      body: "mobile apps built from your requirements and kept running after launch.",
    },
    { title: "AI assistants and agents", body: AI_ASSISTANTS_BODY },
    SAAS,
    AUTOMATION,
    DATA,
  ],
  workingHours:
    "Our team works India hours, which overlap with UK mornings and early afternoons, and we schedule calls at UK-friendly times.",
  faqHeading: "Questions from UK businesses",
  faqs: countryFaqs("the UK", "UK"),
};

export const MALAYSIA: CountryPage = {
  slug: "malaysia",
  eyebrow: "Malaysia",
  title: "Mobile App Developer & Software Development Company in Malaysia | Bloom Matrix",
  metaDescription:
    "Mobile app development, custom software and AI for businesses in Malaysia, built by Bloom Matrix. Talk to us on WhatsApp.",
  h1: "Mobile app and software development for Malaysian businesses.",
  intro:
    "Bloom Matrix is an AI-first app and software development company. We design, build and run mobile apps, custom software and AI products as one long-term technology partner for businesses in Malaysia.",
  buildHeading: "What we build for Malaysian businesses",
  buildLead: "Mobile app development and custom software, with AI built in:",
  build: [
    { title: "Mobile app development", body: APPS_BODY },
    { title: "AI assistants and agents", body: AI_ASSISTANTS_BODY },
    SAAS,
    AUTOMATION,
    DATA,
  ],
  workingHours:
    "India is only 2.5 hours behind Malaysia, so most of our working day overlaps with yours.",
  faqHeading: "Questions from Malaysian businesses",
  faqs: countryFaqs("Malaysia", "Malaysian"),
};

export const SINGAPORE: CountryPage = {
  slug: "singapore",
  eyebrow: "Singapore",
  title: "App Developer & Custom Software Development in Singapore | Bloom Matrix",
  metaDescription:
    "App development, custom software and AI products for Singapore businesses, built by Bloom Matrix. Talk to us on WhatsApp.",
  h1: "App and custom software development for Singapore businesses.",
  intro:
    "Bloom Matrix is an AI-first app and software development company. We design, build and run mobile apps, custom software and AI products as one long-term technology partner for businesses in Singapore.",
  buildHeading: "What we build for Singapore businesses",
  buildLead: "App development and custom software development, with AI built in:",
  build: [
    { title: "Mobile app development", body: APPS_BODY },
    { title: "AI assistants and agents", body: AI_ASSISTANTS_BODY },
    SAAS,
    AUTOMATION,
    DATA,
  ],
  workingHours:
    "India is only 2.5 hours behind Singapore, so most of our working day overlaps with yours.",
  faqHeading: "Questions from Singapore businesses",
  faqs: countryFaqs("Singapore", "Singapore"),
};

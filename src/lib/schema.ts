import {
  ANRIL_WEBSITE_URL,
  CONTACT_EMAIL,
  LINKEDIN_URL,
  PHONE_DISPLAY,
  SITE_URL,
} from "@/lib/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bloom Matrix",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-bloom-mark-silver-ink-tile.png`,
    email: CONTACT_EMAIL,
    telephone: PHONE_DISPLAY,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    sameAs: [LINKEDIN_URL, ANRIL_WEBSITE_URL],
    description:
      "Bloom Matrix is an AI-first software and mobile app development company. We design, build and run custom software, SaaS platforms and AI assistants for businesses that want one long-term technology partner.",
  };
}

export function anrilSoftwareSchema(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Anril",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: ANRIL_WEBSITE_URL,
    description,
    publisher: {
      "@type": "Organization",
      name: "Bloom Matrix",
      url: SITE_URL,
    },
  };
}

export type FAQItem = { question: string; answer: string };

export function faqPageSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** Renders any schema object as a JSON-LD script tag. `<` is escaped so text
 *  content can never close the script element early. */
export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}

export { SITE_URL };

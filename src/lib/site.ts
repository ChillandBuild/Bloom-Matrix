/**
 * Single source for the company's public contact and registration details.
 * Everything customer-facing (header, footer, contact page, schema, legal
 * pages, country pages) reads from here so a change lands everywhere at once.
 */

export const SITE_URL = "https://www.bloommatrix.in";

export const CONTACT_EMAIL = "contact@bloommatrix.in";

/** International format for tel: links and schema. */
export const PHONE_E164 = "+918807233844";
/** How the number is shown to people. */
export const PHONE_DISPLAY = "+91 88072 33844";

export const WHATSAPP_URL =
  "https://wa.me/918807233844?text=Hi%20Bloom%20Matrix%2C%20I%27d%20like%20to%20discuss%20a%20project";

export const GSTIN = "33ABEFB3573A1Z0";

/** Public address line. Never show the GST registration address. */
export const ADDRESS_LINE = "Coimbatore, Tamil Nadu, India";

export const LINKEDIN_URL = "https://www.linkedin.com/company/142910910/";

export const ANRIL_WEBSITE_URL = "https://anrilaitech.com";

/** Country landing pages. Linked from the footer only — never the top menu. */
export const COUNTRY_PAGES = [
  { label: "UAE", href: "/uae" },
  { label: "UK", href: "/uk" },
  { label: "Malaysia", href: "/malaysia" },
  { label: "Singapore", href: "/singapore" },
] as const;

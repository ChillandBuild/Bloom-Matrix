import Link from "next/link";
import LogoLockup from "@/components/brand/LogoLockup";
import { WhatsAppIcon } from "@/components/WhatsAppButton";
import {
  ADDRESS_LINE,
  CONTACT_EMAIL,
  COUNTRY_PAGES,
  GSTIN,
  LINKEDIN_URL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/site";

const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const ICON_STROKE = "#7A2331";

export default function SiteFooter() {
  return (
    <footer className="bg-ink mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-start px-container-margin pt-14 pb-8 w-full max-w-7xl mx-auto gap-10">
        <div className="space-y-4 text-left max-w-sm">
          <LogoLockup tone="cream" markSize={30} />
          <p className="font-inter text-sm text-cream/70">
            AI-first software and app development. We design, build and run custom software, mobile
            apps and AI products as one long-term technology partner.
          </p>
          <div className="mt-4 space-y-2 font-inter text-xs text-cream/70">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ICON_STROKE} strokeWidth="2" aria-hidden>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-cream transition-colors">
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <WhatsAppIcon size={16} className="text-[#25D366]" />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream transition-colors"
              >
                {PHONE_DISPLAY} (WhatsApp)
              </a>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ICON_STROKE} strokeWidth="2" aria-hidden>
                <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <span>{ADDRESS_LINE}</span>
            </div>
          </div>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bloom Matrix on LinkedIn"
            className="inline-flex items-center justify-center w-9 h-9 rounded-[2px] border border-cream/20 text-cream/70 hover:text-cream hover:border-cream/50 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>
        </div>

        <div className="flex flex-col items-start md:items-end gap-6 self-stretch md:self-auto justify-between">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 md:gap-x-8 md:justify-end">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cream/70 font-inter text-xs uppercase tracking-wider hover:text-cream transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="font-inter text-xs text-cream/60 md:text-right">
            We work with businesses in:{" "}
            {COUNTRY_PAGES.map((country, index) => (
              <span key={country.href}>
                {index > 0 && <span aria-hidden> · </span>}
                <Link href={country.href} className="text-cream/80 hover:text-cream underline underline-offset-4">
                  {country.label}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-container-margin pt-5 pb-24 md:pb-5 flex flex-col md:flex-row md:justify-between gap-2 font-inter text-[11px] text-cream/50 tracking-wide">
          <span>
            Bloom Matrix · Registered in India · GSTIN {GSTIN} · Coimbatore, Tamil Nadu
          </span>
          <span>© 2026 Bloom Matrix. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

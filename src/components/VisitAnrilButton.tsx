import { ANRIL_WEBSITE_URL } from "@/lib/site";

const VARIANTS = {
  solid:
    "bg-ink text-cream hover:opacity-90",
  outline:
    "border border-ink/15 text-ink hover:bg-ink/[0.04]",
} as const;

/** "Visit Anril website" — always opens anrilaitech.com in a new tab. */
export default function VisitAnrilButton({
  variant = "outline",
  className,
}: {
  variant?: keyof typeof VARIANTS;
  className?: string;
}) {
  return (
    <a
      href={ANRIL_WEBSITE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[2px] font-inter font-semibold text-center transition-all ${VARIANTS[variant]} ${className ?? ""}`}
    >
      Visit Anril website
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M7 17L17 7M9 7h8v8" />
      </svg>
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

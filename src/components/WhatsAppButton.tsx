import { WHATSAPP_URL } from "@/lib/site";

export function WhatsAppIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 01-4.82-1.32l-.35-.21-3.58.94.96-3.49-.23-.36a9.43 9.43 0 01-1.45-5.03c0-5.22 4.25-9.46 9.48-9.46a9.4 9.4 0 016.69 2.78 9.4 9.4 0 012.77 6.69c0 5.22-4.25 9.46-9.46 9.46zm8.05-17.52A11.3 11.3 0 0012.04.65C5.77.65.66 5.75.66 12.03c0 2 .52 3.96 1.52 5.69L.57 23.35l5.77-1.51a11.37 11.37 0 005.44 1.38h.01c6.27 0 11.38-5.1 11.38-11.38a11.3 11.3 0 00-3.33-8.05z" />
    </svg>
  );
}

type WhatsAppButtonProps = {
  label?: string;
  className?: string;
};

/** The green "Chat on WhatsApp" button used on the contact, home and country pages. */
export default function WhatsAppButton({
  label = "Chat on WhatsApp",
  className,
}: WhatsAppButtonProps) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-[#0B2E1A] px-6 py-3.5 rounded-[2px] font-inter font-semibold hover:bg-[#1FBE5A] transition-colors ${className ?? ""}`}
    >
      <WhatsAppIcon size={20} />
      {label}
    </a>
  );
}

/** Floating WhatsApp icon pinned to the bottom-right of every page. */
export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Bloom Matrix on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(20,20,20,0.25)] hover:scale-105 transition-transform"
    >
      <WhatsAppIcon size={30} />
    </a>
  );
}

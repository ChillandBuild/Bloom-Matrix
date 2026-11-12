import Link from "next/link";
import Reveal from "@/components/Reveal";
import BrandHeadline, { type HeadlineSegment } from "@/components/brand/BrandHeadline";

type CTALink = {
  href: string;
  label: string;
  /** Plain <a> instead of next/link — needed for paths vercel.json proxies to
   *  another app (e.g. /anril), which this app's client router can't load. */
  isExternalApp?: boolean;
};

type CTABandProps = {
  titleSegments?: HeadlineSegment[];
  description?: string;
  secondaryCta?: CTALink;
};

const DEFAULT_SECONDARY_CTA: CTALink = { href: "/products/anril", label: "Explore Anril" };

const BUTTON_CLASS =
  "bg-oxblood text-cream px-8 py-4 rounded-[2px] font-semibold text-center hover:opacity-90 transition-all";

const DEFAULT_TITLE: HeadlineSegment[] = [
  { text: "Let's build something that " },
  { text: "compounds", emphasis: true },
  { text: "." },
];

export default function CTABand({
  titleSegments = DEFAULT_TITLE,
  description = "Message us on WhatsApp or send an enquiry and talk through what you're building. No sales script, just an engineering-led conversation.",
  secondaryCta = DEFAULT_SECONDARY_CTA,
}: CTABandProps) {
  return (
    <section className="bg-ink py-24">
      <div className="max-w-3xl mx-auto px-container-margin text-center">
        <Reveal>
          <BrandHeadline
            as="h2"
            segments={titleSegments}
            className="text-4xl md:text-5xl text-cream mb-6"
          />
          <p className="font-inter text-cream/70 mb-10 max-w-xl mx-auto">{description}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className={BUTTON_CLASS}>
              Start a project
            </Link>
            {secondaryCta.isExternalApp ? (
              <a href={secondaryCta.href} className={BUTTON_CLASS}>
                {secondaryCta.label}
              </a>
            ) : (
              <Link href={secondaryCta.href} className={BUTTON_CLASS}>
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

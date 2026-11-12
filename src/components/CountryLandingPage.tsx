import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FAQAccordion from "@/components/FAQAccordion";
import WhatsAppButton from "@/components/WhatsAppButton";
import BrandHeadline from "@/components/brand/BrandHeadline";
import type { CountryPage } from "@/lib/content/countries";

const EYEBROW = "font-inter text-xs uppercase tracking-[0.14em] text-oxblood font-bold";

export function countryMetadata(page: CountryPage): Metadata {
  return {
    title: { absolute: page.title },
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: `/${page.slug}`,
    },
  };
}

/** Shared layout for /uae, /uk, /malaysia and /singapore — same design language
 *  as the Services page (numbered rows, hairline rules), with the brief's
 *  sections in order: what we build, why us, FAQ, call to action. */
export default function CountryLandingPage({ page }: { page: CountryPage }) {
  const whyUs = [
    {
      title: "We run our own products.",
      body: "Anril, our AI sales platform, and a live consumer marketplace app are built and run by our team, so we know what it takes to keep software working in the real world.",
    },
    { title: "Your working hours are our working hours.", body: page.workingHours },
    {
      title: "One partner for the whole lifecycle:",
      body: "Discover, Design, Build, Deploy, Evolve.",
    },
  ];

  return (
    <main>
      <PageHero
        eyebrow={page.eyebrow}
        titleSegments={[{ text: page.h1 }]}
        description={page.intro}
        flowerRotation={30}
      />

      <section className="bg-cream py-24">
        <div className="max-w-5xl mx-auto px-container-margin">
          <Reveal className="mb-12">
            <p className={`${EYEBROW} mb-3`}>What we build</p>
            <BrandHeadline
              as="h2"
              segments={[{ text: page.buildHeading }]}
              className="text-3xl md:text-4xl text-ink mb-4"
            />
            <p className="font-inter text-ink/65 leading-relaxed max-w-2xl">{page.buildLead}</p>
          </Reveal>
          <ul className="space-y-0">
            {page.build.map((bullet, index) => (
              <li key={bullet.title}>
                <Reveal delay={Math.min(index * 0.05, 0.2)}>
                  <div className="grid grid-cols-[auto_1fr] gap-6 md:gap-8 items-start border-t border-ink/10 py-6">
                    <span className="font-inter text-xs font-bold tracking-[0.14em] text-oxblood pt-1.5">
                      {`0${index + 1}`}
                    </span>
                    <p className="font-inter text-ink/65 leading-relaxed max-w-3xl">
                      <strong className="font-bm-serif font-normal text-xl text-ink">
                        {bullet.title}:
                      </strong>{" "}
                      {bullet.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream py-24 border-t border-ink/10">
        <div className="max-w-5xl mx-auto px-container-margin">
          <Reveal className="mb-12">
            <p className={`${EYEBROW} mb-3`}>Why us</p>
            <BrandHeadline
              as="h2"
              segments={[{ text: "Why work with " }, { text: "Bloom Matrix", emphasis: true }]}
              className="text-3xl md:text-4xl text-ink"
            />
          </Reveal>
          <ul className="grid md:grid-cols-3 gap-6">
            {whyUs.map((reason, index) => (
              <li key={reason.title}>
                <Reveal delay={index * 0.08} className="h-full">
                  <div className="border border-ink/10 p-6 h-full">
                    <h3 className="font-bm-serif text-xl text-ink mb-2">{reason.title}</h3>
                    <p className="font-inter text-sm text-ink/65 leading-relaxed">{reason.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream py-24 border-t border-ink/10">
        <div className="max-w-3xl mx-auto px-container-margin">
          <Reveal className="mb-12 text-center">
            <p className={`${EYEBROW} mb-3`}>FAQ</p>
            <BrandHeadline as="h2" segments={[{ text: page.faqHeading }]} className="text-4xl text-ink" />
          </Reveal>
          <Reveal delay={0.1}>
            <FAQAccordion items={page.faqs} />
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-24">
        <div className="max-w-3xl mx-auto px-container-margin text-center">
          <Reveal>
            <BrandHeadline
              as="h2"
              segments={[{ text: "Tell us what " }, { text: "you need", emphasis: true }, { text: "." }]}
              className="text-4xl md:text-5xl text-cream mb-6"
            />
            <p className="font-inter text-cream/70 mb-10 max-w-xl mx-auto">
              Message us on WhatsApp or send an enquiry. We begin with a free discovery call to
              understand what you need.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <WhatsAppButton label="Chat with us on WhatsApp" className="px-8 py-4" />
              <Link
                href="/contact"
                className="bg-oxblood text-cream px-8 py-4 rounded-[2px] font-semibold text-center hover:opacity-90 transition-all"
              >
                Send an enquiry
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

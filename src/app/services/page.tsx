import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FAQAccordion from "@/components/FAQAccordion";
import CTABand from "@/components/CTABand";
import BrandHeadline from "@/components/brand/BrandHeadline";
import { SERVICES } from "@/lib/content/services";
import { SERVICES_FAQS } from "@/lib/content/faqs";

export const metadata: Metadata = {
  title: { absolute: "Custom Software & Mobile App Development Services | Bloom Matrix" },
  description:
    "Custom software development, mobile app development, AI assistants, SaaS platforms, business automation and data analytics from Bloom Matrix, an AI-first software development company.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        titleSegments={[
          { text: "Custom software and app development, " },
          { text: "with AI at the core", emphasis: true },
          { text: "." },
        ]}
        description="Bloom Matrix is an AI-first software development company. From custom software development and mobile app development to SaaS platforms, automation and analytics, we design, build and run it all as one long-term technology partner."
        flowerRotation={22}
      />

      <section className="bg-cream py-24">
        <div className="max-w-5xl mx-auto px-container-margin space-y-20">
          {SERVICES.map((service, index) => (
            <Reveal key={service.slug} delay={Math.min(index * 0.06, 0.24)}>
              <div
                id={service.slug}
                className="grid md:grid-cols-[auto_1fr] gap-8 items-start border-t border-ink/10 pt-8"
              >
                <span className="font-inter text-xs font-bold tracking-[0.14em] text-oxblood pt-2">
                  {`0${index + 1}`}
                </span>
                <div>
                  <BrandHeadline
                    as="h2"
                    segments={[{ text: service.title }]}
                    className="text-3xl text-ink mb-3"
                  />
                  <p className="font-inter text-ink/65 leading-relaxed mb-5 max-w-2xl">
                    {service.longDescription}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {service.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="font-inter text-xs text-ink/70 border border-ink/15 rounded-[2px] px-3 py-1.5"
                      >
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-24 border-t border-ink/10">
        <div className="max-w-3xl mx-auto px-container-margin">
          <Reveal className="mb-12 text-center">
            <p className="font-inter text-xs uppercase tracking-[0.14em] text-oxblood font-bold mb-3">
              FAQ
            </p>
            <BrandHeadline
              as="h2"
              segments={[{ text: "Questions about " }, { text: "our services", emphasis: true }, { text: "." }]}
              className="text-4xl text-ink"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <FAQAccordion items={SERVICES_FAQS} />
          </Reveal>
        </div>
      </section>

      <CTABand />
    </main>
  );
}

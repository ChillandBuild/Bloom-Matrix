import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FAQAccordion from "@/components/FAQAccordion";
import CTABand from "@/components/CTABand";
import BrandHeadline from "@/components/brand/BrandHeadline";
import { ABOUT_FAQS } from "@/lib/content/faqs";
import { GSTIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bloom Matrix's founding philosophy, vision, mission, and core values — an AI-first product engineering company built to be a long-term technology partner.",
  alternates: { canonical: "/about" },
};

/**
 * Office / team photos for the trust block. The Admin is sending 2–3; to add
 * one, put the file in public/images/office/ and add an entry here with a
 * short alt text describing the photo. The photo row only renders once at
 * least one entry exists, so the live page never shows empty boxes. No
 * founder names or personal details in photos' alt text or captions.
 */
const OFFICE_PHOTOS: { src: string; alt: string }[] = [];

const CORE_VALUES = [
  {
    title: "Customer First",
    body: "Customer success drives every technical and business decision.",
  },
  {
    title: "Reliability",
    body: "Dependable technology, built for long-term trust.",
  },
  {
    title: "Long-Term Partnerships",
    body: "Bloom Matrix aims to be a customer's long-term technology partner, not a completer of isolated projects.",
  },
];

const CORE_PHILOSOPHY = [
  "Scalable",
  "Maintainable",
  "Intelligent",
  "User-centric",
  "Secure",
  "Continuously evolving",
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Bloom Matrix"
        titleSegments={[
          { text: "Technology should create " },
          { text: "new possibilities", emphasis: true },
          { text: ", not just digitize old ones." },
        ]}
        description="Bloom Matrix is an AI-first product engineering and technology company — designing, engineering, deploying, and continuously evolving software that creates long-term business value."
        flowerRotation={-18}
      />

      <section className="bg-cream py-24">
        <div className="max-w-4xl mx-auto px-container-margin space-y-16">
          <Reveal>
            <h2 className="font-inter text-xs uppercase tracking-[0.14em] text-oxblood font-bold mb-3">
              Founding Philosophy
            </h2>
            <BrandHeadline
              as="p"
              segments={[
                {
                  text: "Businesses often work with multiple vendors for software, AI, websites, mobile applications, analytics, automation, cloud infrastructure, and product development.",
                },
              ]}
              className="text-2xl md:text-3xl text-ink leading-snug mb-4"
            />
            <p className="font-inter text-ink/65 leading-relaxed max-w-2xl">
              Bloom Matrix removes this fragmentation by becoming a single long-term technology
              partner, capable of delivering complete digital solutions from idea to deployment
              and continuous evolution.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-10">
            <Reveal>
              <h2 className="font-inter text-xs uppercase tracking-[0.14em] text-oxblood font-bold mb-3">Vision</h2>
              <p className="font-inter text-ink/65 leading-relaxed">
                To become a globally recognized technology company building intelligent products
                and digital ecosystems that redefine how businesses and communities interact with
                technology.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-inter text-xs uppercase tracking-[0.14em] text-oxblood font-bold mb-3">Mission</h2>
              <p className="font-inter text-ink/65 leading-relaxed">
                To combine artificial intelligence, engineering excellence, and product innovation
                to create scalable digital ecosystems that deliver meaningful business impact.
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <h2 className="font-inter text-xs uppercase tracking-[0.14em] text-oxblood font-bold mb-6">
                Core Values
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6">
              {CORE_VALUES.map((value, index) => (
                <Reveal key={value.title} delay={index * 0.08}>
                  <div className="bg-cream border border-ink/10 p-6 h-full">
                    <BrandHeadline
                      as="h3"
                      segments={[{ text: value.title }]}
                      className="text-xl text-ink mb-2"
                    />
                    <p className="font-inter text-sm text-ink/65 leading-relaxed">
                      {value.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <p className="font-inter text-xs uppercase tracking-[0.14em] text-oxblood font-bold mb-6">
              Every Solution Should Be
            </p>
            <div className="flex flex-wrap gap-3">
              {CORE_PHILOSOPHY.map((item) => (
                <span
                  key={item}
                  className="font-inter text-sm text-ink border border-ink/15 rounded-[2px] px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-24 border-t border-ink/10">
        <div className="max-w-4xl mx-auto px-container-margin">
          <Reveal>
            <div className="border-l-2 border-oxblood pl-6 md:pl-8">
              <BrandHeadline
                as="h2"
                segments={[
                  { text: "A registered technology company " },
                  { text: "in India", emphasis: true },
                ]}
                className="text-3xl md:text-4xl text-ink mb-4"
              />
              <p className="font-inter text-ink/65 leading-relaxed max-w-2xl">
                Bloom Matrix is a registered business in India (GSTIN {GSTIN}), with our
                engineering office in Coimbatore, Tamil Nadu. We design, build and run our own AI
                and software products, and we build custom products for clients.
              </p>
            </div>
          </Reveal>
          {OFFICE_PHOTOS.length > 0 && (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
              {OFFICE_PHOTOS.map((photo) => (
                <Reveal key={photo.src}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover border border-ink/10"
                  />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-cream py-24 border-t border-ink/10">
        <div className="max-w-3xl mx-auto px-container-margin">
          <Reveal className="mb-12 text-center">
            <p className="font-inter text-xs uppercase tracking-[0.14em] text-oxblood font-bold mb-3">FAQ</p>
            <BrandHeadline
              as="h2"
              segments={[{ text: "Questions about " }, { text: "who we are", emphasis: true }, { text: "." }]}
              className="text-4xl text-ink"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <FAQAccordion items={ABOUT_FAQS} />
          </Reveal>
        </div>
      </section>

      <CTABand />
    </main>
  );
}

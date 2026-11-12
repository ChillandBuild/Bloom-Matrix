import Reveal from "@/components/Reveal";
import BrandHeadline from "@/components/brand/BrandHeadline";

export default function PositioningStrip() {
  return (
    <section className="bg-ink py-16">
      <div className="max-w-4xl mx-auto px-container-margin text-center">
        <Reveal>
          <BrandHeadline
            as="p"
            segments={[
              {
                text: "An AI-first software development company for custom software development, mobile app development and AI products. ",
              },
              { text: "One long-term technology partner", emphasis: true },
              { text: ", from idea to launch, and every evolution after." },
            ]}
            className="text-2xl md:text-3xl text-cream leading-snug"
          />
        </Reveal>
      </div>
    </section>
  );
}

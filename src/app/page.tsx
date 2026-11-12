import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import PositioningStrip from "@/components/home/PositioningStrip";
import ValuePropsSticky from "@/components/home/ValuePropsSticky";
import ServiceAreasGrid from "@/components/home/ServiceAreasGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import GlobalDelivery from "@/components/home/GlobalDelivery";
import HowWeWork from "@/components/home/HowWeWork";
import FAQSection from "@/components/home/FAQSection";
import CTABand from "@/components/CTABand";
import { jsonLd, organizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Bloom Matrix | AI-First Software & App Development Company" },
  description:
    "Bloom Matrix is an AI-first software and mobile app development company. We design, build and run custom software, SaaS platforms and AI assistants for businesses that want one long-term technology partner.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organizationSchema())} />
      <Hero />
      <PositioningStrip />
      <ValuePropsSticky />
      <ServiceAreasGrid />
      <FeaturedProducts />
      <GlobalDelivery />
      <HowWeWork />
      <FAQSection />
      <CTABand />
    </main>
  );
}

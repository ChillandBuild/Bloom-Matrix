import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import LegalDocument, { type LegalSection } from "@/components/LegalDocument";
import { CONTACT_EMAIL, GSTIN, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that apply to your use of www.bloommatrix.in, run by Bloom Matrix, a registered business in India.",
  alternates: { canonical: "/terms" },
};

const SECTIONS: LegalSection[] = [
  {
    body: `These terms apply to your use of www.bloommatrix.in, run by Bloom Matrix, a registered business in India (GSTIN ${GSTIN}). By using this website, you agree to them.`,
  },
  {
    heading: "About this website",
    body: "This website gives general information about Bloom Matrix, our services and our products. It is not an offer or a contract. Any project we do for a client is covered by a separate written agreement or proposal, and that agreement decides the scope, price, timelines and ownership.",
  },
  {
    heading: "Our content",
    body: "The text, design, logos and other content on this website belong to Bloom Matrix or are used with permission. Please don't copy or reuse them without our written permission.",
  },
  {
    heading: "Your messages",
    body: (
      <>
        When you contact us, please share only information you are allowed to share. We handle it
        as described in our{" "}
        <Link href="/privacy" className="text-oxblood hover:underline">
          Privacy Policy
        </Link>
        .
      </>
    ),
  },
  {
    heading: "Links to other websites",
    body: "Our website may link to other websites, such as our products' websites or LinkedIn. We are not responsible for the content of websites we don't run.",
  },
  {
    heading: "No guarantees",
    body: "We try to keep this website accurate and available, but we don't promise it will always be complete, current or free of errors. We are not liable for any loss that comes from using this website, to the extent the law allows.",
  },
  {
    heading: "Changes",
    body: "We may update these terms from time to time. The date at the top shows the latest version.",
  },
  {
    heading: "Law",
    body: "These terms are governed by the laws of India, and courts in Tamil Nadu have jurisdiction.",
  },
  {
    heading: "Contact",
    body: (
      <>
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-oxblood hover:underline">
          {CONTACT_EMAIL}
        </a>{" "}
        · WhatsApp{" "}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-oxblood hover:underline">
          {PHONE_DISPLAY}
        </a>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        titleSegments={[{ text: "Terms of Use" }]}
        description="Last updated: 4 November 2026"
        flowerRotation={-12}
      />
      <LegalDocument sections={SECTIONS} />
    </main>
  );
}

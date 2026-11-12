import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LegalDocument, { type LegalSection } from "@/components/LegalDocument";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Bloom Matrix collects, uses and protects the information you share through www.bloommatrix.in, our contact form and WhatsApp.",
  alternates: { canonical: "/privacy" },
};

const EMAIL_LINK = (
  <a href={`mailto:${CONTACT_EMAIL}`} className="text-oxblood hover:underline">
    {CONTACT_EMAIL}
  </a>
);

const SECTIONS: LegalSection[] = [
  {
    body: 'Bloom Matrix ("we", "us") runs www.bloommatrix.in. This policy explains what information we collect through this website and how we use it.',
  },
  {
    heading: "What we collect",
    body: "When you fill in our contact form or message us on WhatsApp, we receive the details you share: your name, company, email address, phone number, budget range and project description. Like most websites, our hosting provider may also record basic technical data such as your browser type, device and pages visited.",
  },
  {
    heading: "How we use it",
    body: "We use your details only to reply to your enquiry, discuss your project, send proposals and provide our services. We do not sell or rent your information to anyone.",
  },
  {
    heading: "Who we share it with",
    body: "We share information only with services that help us run this website and our business, such as website hosting, email and messaging providers, and only as needed for them to do that work. We may also share information if the law requires it.",
  },
  {
    heading: "How long we keep it",
    body: "We keep enquiry details for as long as needed to respond and to work with you, and for any period required by law.",
  },
  {
    heading: "Your choices",
    body: <>You can ask us to show, correct or delete the details we hold about you by writing to {EMAIL_LINK}.</>,
  },
  {
    heading: "Security",
    body: "We take reasonable steps to protect your information, but no website can be fully secure.",
  },
  {
    heading: "Changes",
    body: "We may update this policy from time to time. The date at the top shows the latest version.",
  },
  {
    heading: "Contact",
    body: <>Bloom Matrix, Coimbatore, Tamil Nadu, India. Email: {EMAIL_LINK}</>,
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        titleSegments={[{ text: "Privacy Policy" }]}
        description="Last updated: 4 November 2026"
        flowerRotation={12}
      />
      <LegalDocument sections={SECTIONS} />
    </main>
  );
}

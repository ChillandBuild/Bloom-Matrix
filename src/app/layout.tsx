import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppButton";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bloom Matrix | AI-First Software & App Development Company",
    template: "%s | Bloom Matrix",
  },
  description:
    "Bloom Matrix is an AI-first software and mobile app development company. We design, build and run custom software, SaaS platforms and AI assistants for businesses that want one long-term technology partner.",
  openGraph: {
    title: "Bloom Matrix | AI-First Software & App Development Company",
    description:
      "Custom software, mobile apps, SaaS platforms and AI assistants, designed, built and run by one long-term technology partner.",
    url: SITE_URL,
    siteName: "Bloom Matrix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloom Matrix | AI-First Software & App Development Company",
    description:
      "Custom software, mobile apps, SaaS platforms and AI assistants, designed, built and run by one long-term technology partner.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${lora.variable} ${inter.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-cream text-ink font-inter">
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { CONTACT_EMAIL } from "@/lib/site";

/**
 * Enquiries go to contact@bloommatrix.in, which forwards to the team's Gmail.
 *
 * FALLBACK_RECIPIENT exists because Resend only lets an unverified sender
 * (onboarding@resend.dev) mail the Resend account owner's own address. Until
 * the bloommatrix.in domain is verified in Resend and CONTACT_FROM_EMAIL is set
 * to an address on it, a send to contact@ is rejected — in that case the
 * enquiry is re-sent to the Gmail inbox so no lead is ever lost, and the
 * rejection is logged so the misconfiguration is visible in Vercel logs.
 */
const CONTACT_RECIPIENT = process.env.CONTACT_RECIPIENT || CONTACT_EMAIL;
const FALLBACK_RECIPIENT = "bloommatrixtech@gmail.com";
const FROM_ADDRESS =
  process.env.CONTACT_FROM_EMAIL || "Bloom Matrix Website <onboarding@resend.dev>";

const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(200),
  email: z.string().trim().email("A valid email address is required").max(320),
  company: z.string().trim().max(200).optional().default(""),
  phone: z.string().trim().max(50).optional().default(""),
  projectType: z.string().trim().max(100).optional().default(""),
  budget: z.string().trim().max(50).optional().default(""),
  description: z.string().trim().max(5000).optional().default(""),
  website: z.string().trim().max(200).optional().default(""), // honeypot
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]?.message ?? "Please check the form and try again.";
    return NextResponse.json({ ok: false, error: firstIssue }, { status: 400 });
  }

  const data = parsed.data;

  // Honeypot: silently accept without sending, so bots get a fake success.
  if (data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — contact form submission was not sent.");
    return NextResponse.json(
      {
        ok: false,
        error: `Email delivery is not configured yet. Please email us at ${CONTACT_EMAIL} or message us on WhatsApp.`,
      },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const message = {
    from: FROM_ADDRESS,
    replyTo: data.email,
    subject: `New website enquiry from ${data.fullName}`,
    text: [
      `Full Name: ${data.fullName}`,
      `Company: ${data.company || "—"}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "—"}`,
      `Project Type: ${data.projectType || "—"}`,
      `Budget: ${data.budget || "—"}`,
      "",
      "Description:",
      data.description || "—",
    ].join("\n"),
  };

  try {
    const primary = await resend.emails.send({ ...message, to: CONTACT_RECIPIENT });
    if (!primary.error) {
      return NextResponse.json({ ok: true });
    }

    console.error(
      `Resend rejected delivery to ${CONTACT_RECIPIENT}; retrying to fallback inbox.`,
      primary.error
    );
    const fallback = await resend.emails.send({ ...message, to: FALLBACK_RECIPIENT });
    if (!fallback.error) {
      return NextResponse.json({ ok: true });
    }

    console.error("Resend fallback delivery failed:", fallback.error);
    return NextResponse.json(
      { ok: false, error: "Could not send your message. Please try again shortly." },
      { status: 502 }
    );
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send your message. Please try again shortly." },
      { status: 500 }
    );
  }
}

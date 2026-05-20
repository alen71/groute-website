import { NextResponse } from "next/server";
import { z } from "zod";
import { getResend } from "@/lib/resend";

const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(200),
  company: z.string().min(1).max(200),
  fleetSize: z.string().max(50).optional().default(""),
  message: z.string().min(1).max(2000),
  locale: z.string().max(8).optional().default("en"),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const d = parsed.data;
  const to = process.env.CONTACT_EMAIL_TO;
  if (!to) {
    return NextResponse.json({ error: "server_misconfigured" }, { status: 500 });
  }

  const from = process.env.CONTACT_EMAIL_FROM ?? "groute <onboarding@resend.dev>";

  try {
    const resend = getResend();
    await resend.emails.send({
      from,
      to,
      replyTo: d.email,
      subject: `Demo request — ${d.company} (${d.locale})`,
      text: [
        `Name: ${d.name}`,
        `Email: ${d.email}`,
        `Company: ${d.company}`,
        `Fleet size: ${d.fleetSize || "-"}`,
        `Locale: ${d.locale}`,
        "",
        d.message,
      ].join("\n"),
    });
  } catch (err) {
    console.error("contact send failed", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

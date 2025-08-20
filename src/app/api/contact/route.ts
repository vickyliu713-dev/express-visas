import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let payload: Record<string, string> = {};

    if (contentType.includes("application/json")) {
      payload = (await req.json()) as Record<string, string>;
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const form = await req.formData();
      form.forEach((value, key) => {
        payload[key] = String(value);
      });
    } else if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      form.forEach((value, key) => {
        payload[key] = String(value);
      });
    } else {
      const form = await req.formData().catch(() => undefined);
      if (form) {
        form.forEach((value, key) => {
          payload[key] = String(value);
        });
      }
    }

    const { fullName, country, phone, email, details } = payload;

    const html = `
      <h2>New Visa Application Lead</h2>
      <p><strong>Name:</strong> ${fullName || ""}</p>
      <p><strong>Country:</strong> ${country || ""}</p>
      <p><strong>Phone:</strong> ${phone || ""}</p>
      <p><strong>Email:</strong> ${email || ""}</p>
      <p><strong>Details:</strong><br/>${(details || "").replace(/\n/g, "<br/>")}</p>
    `;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY missing. Email not sent.");
      return NextResponse.json({ ok: true, sent: false });
    }

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Express Visas <noreply@expressvisas.co.uk>",
      to: ["vickyliu713@gmail.com"],
      subject: "New Visa Application Lead",
      html,
      replyTo: email || undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}



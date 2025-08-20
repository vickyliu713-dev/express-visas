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

    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";
    const ua = req.headers.get("user-agent") || "unknown";
    const referer = req.headers.get("referer") || "unknown";

    const html = `
      <h2>New Visa Application Lead</h2>
      <p><strong>Name:</strong> ${fullName || ""}</p>
      <p><strong>Country:</strong> ${country || ""}</p>
      <p><strong>Phone:</strong> ${phone || ""}</p>
      <p><strong>Email:</strong> ${email || ""}</p>
      <p><strong>Details:</strong><br/>${(details || "").replace(/\n/g, "<br/>")}</p>
      <hr/>
      <p><small>IP: ${ip} • UA: ${ua} • Referrer: ${referer}</small></p>
    `;
    const text = `New Visa Application Lead\n\nName: ${fullName || ""}\nCountry: ${
      country || ""
    }\nPhone: ${phone || ""}\nEmail: ${email || ""}\n\nDetails:\n${
      details || ""
    }\n\nIP: ${ip} • UA: ${ua} • Referrer: ${referer}`;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY missing. Email not sent.");
      return NextResponse.json({ ok: true, sent: false });
    }

    const resend = new Resend(apiKey);
    const fromAddress =
      process.env.RESEND_FROM || "Express Visas <onboarding@resend.dev>";
    await resend.emails.send({
      from: fromAddress,
      to: ["vickyliu713@gmail.com"],
      subject: `Express Visas – New Application Lead${
        fullName ? ` from ${fullName}` : ""
      }`,
      html,
      text,
      replyTo: email || undefined,
    });
    // Redirect browsers back to home with a success flag
    const accept = req.headers.get("accept") || "";
    if (accept.includes("text/html")) {
      const url = new URL("/", req.url);
      url.searchParams.set("submitted", "1");
      return NextResponse.redirect(url, 303);
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}



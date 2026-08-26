import { NextRequest, NextResponse } from "next/server";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: NextRequest) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID env vars");
    return NextResponse.json({ error: "Server is not configured for form submissions." }, { status: 500 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, company, audience, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || !name.trim() || typeof email !== "string" || !email.trim()) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const lines = [
    "<b>New contact form submission</b>",
    `<b>Name:</b> ${escapeHtml(name.trim())}`,
    `<b>Email:</b> ${escapeHtml(email.trim())}`,
    typeof phone === "string" && phone.trim() ? `<b>Phone:</b> ${escapeHtml(phone.trim())}` : null,
    typeof company === "string" && company.trim() ? `<b>Company:</b> ${escapeHtml(company.trim())}` : null,
    typeof audience === "string" && audience.trim() ? `<b>Audience:</b> ${escapeHtml(audience.trim())}` : null,
    typeof message === "string" && message.trim() ? `\n<b>Message:</b>\n${escapeHtml(message.trim())}` : null,
  ].filter(Boolean);

  const text = lines.join("\n");

  const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
    }),
  });

  if (!telegramResponse.ok) {
    const errorBody = await telegramResponse.text();
    console.error("Telegram API error:", errorBody);
    return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

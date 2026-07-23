import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const TO_EMAIL = "opr.tr.ctcs@ctcs.kz"

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("[v0] RESEND_API_KEY is not set.")
      return NextResponse.json(
        {
          success: false,
          message: "Сервис отправки писем не настроен. Обратитесь к администратору сайта.",
        },
        { status: 500 },
      )
    }

    const resend = new Resend(apiKey)

    const body = await request.json()
    const { pickup, delivery, transport, size, weight, notes, name, phone, email } = body

    // Until a custom domain is verified in Resend, use the shared onboarding sender.
    const fromAddress = process.env.RESEND_FROM || "CTCS Заявки <onboarding@resend.dev>"

    const rows: Array<[string, string]> = [
      ["Адрес забора", pickup],
      ["Адрес доставки", delivery],
      ["Вид транспорта", transport],
      ["Размер груза", size],
      ["Вес груза", weight],
      ["Дополнительная информация", notes],
      ["Имя", name],
      ["Номер телефона", phone],
      ["E-mail", email],
    ]

    const rowsHtml = rows
      .filter(([, value]) => value)
      .map(
        ([label, value]) =>
          `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#111;">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#333;">${String(
            value,
          ).replace(/</g, "&lt;")}</td></tr>`,
      )
      .join("")

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;">
        <h2 style="color:#111;">Новая заявка на расчёт доставки</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">${rowsHtml}</table>
      </div>
    `

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [TO_EMAIL],
      replyTo: email || undefined,
      subject: `Новая заявка на расчёт доставки${name ? ` — ${name}` : ""}`,
      html,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return NextResponse.json(
        {
          success: false,
          message: "Не удалось отправить заявку. Попробуйте позже.",
        },
        { status: 502 },
      )
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error("[v0] send-quote route error:", err)
    return NextResponse.json(
      {
        success: false,
        message: "Не удалось отправить заявку. Попробуйте позже.",
      },
      { status: 500 },
    )
  }
}

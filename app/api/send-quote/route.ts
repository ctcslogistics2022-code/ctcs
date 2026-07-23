import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configure your email service here
// For development, you can use Mailtrap or similar services
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { pickup, delivery, transport, size, weight, notes, name, phone, email } = body

    // Format the email content
    const htmlContent = `
      <h2>Новая заявка на расчёт доставки</h2>
      
      <h3>Маршрут транспортировки</h3>
      <p><strong>Адрес забора:</strong> ${pickup}</p>
      <p><strong>Адрес доставки:</strong> ${delivery}</p>
      
      <h3>Информация о грузе</h3>
      <p><strong>Вид транспорта:</strong> ${transport}</p>
      <p><strong>Размер груза:</strong> ${size}</p>
      <p><strong>Вес груза:</strong> ${weight}</p>
      <p><strong>Дополнительная информация:</strong> ${notes}</p>
      
      <h3>Контактная информация</h3>
      <p><strong>Имя:</strong> ${name}</p>
      <p><strong>Номер телефона:</strong> ${phone}</p>
      <p><strong>E-mail:</strong> ${email}</p>
    `

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@ctcs.kz',
      to: 'opr.tr.ctcs@ctcs.kz',
      replyTo: email,
      subject: `Новая заявка на расчёт доставки от ${name}`,
      html: htmlContent,
    })

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    )
  }
}

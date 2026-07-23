'use client'

import { useState, type FormEvent } from 'react'
import { MapPin, Package, User, Send, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

function Field({
  label,
  name,
  type = 'text',
  required = false,
  textarea = false,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  textarea?: boolean
}) {
  const base =
    'w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20'
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      {textarea ? (
        <textarea name={name} rows={3} placeholder={label} className={base} />
      ) : (
        <input name={name} type={type} required={required} placeholder={label} className={base} />
      )}
    </label>
  )
}

export function QuoteForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const formData = new FormData(e.currentTarget)
      const data = Object.fromEntries(formData)

      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send quote request')
      }

      setSent(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-accent/30 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-display text-sm font-semibold tracking-[0.3em] text-primary">
            СВЯЖИТЕСЬ С НАМИ
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
            ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
          </h2>
          <p className="mt-3 text-muted-foreground">Заполните форму и отправьте нам</p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          {sent ? (
            <div className="rounded-2xl border border-primary/30 bg-background p-12 text-center shadow-sm">
              <CheckCircle2 className="mx-auto size-14 text-primary" />
              <h3 className="mt-4 font-display text-2xl font-semibold text-navy">
                Заявка отправлена!
              </h3>
              <p className="mt-2 text-muted-foreground">
                Спасибо! Наши специалисты свяжутся с вами в ближайшее время.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-10"
              noValidate
            >
              {error && (
                <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-600">
                  {error}
                </div>
              )}
              <div className="space-y-8">
                <fieldset className="space-y-4">
                  <legend className="flex items-center gap-2 font-display text-lg font-semibold text-navy">
                    <MapPin className="size-5 text-primary" />
                    Маршрут транспортировки
                  </legend>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Адрес забора" name="pickup" />
                    <Field label="Адрес доставки" name="delivery" />
                  </div>
                </fieldset>

                <fieldset className="space-y-4">
                  <legend className="flex items-center gap-2 font-display text-lg font-semibold text-navy">
                    <Package className="size-5 text-primary" />
                    Информация о грузе
                  </legend>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <Field label="Вид транспорта" name="transport" />
                    <Field label="Размер груза" name="size" />
                    <Field label="Вес груза" name="weight" />
                  </div>
                  <Field label="Дополнительная информация" name="notes" textarea />
                </fieldset>

                <fieldset className="space-y-4">
                  <legend className="flex items-center gap-2 font-display text-lg font-semibold text-navy">
                    <User className="size-5 text-primary" />
                    Контактная информация
                  </legend>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <Field label="Имя" name="name" required />
                    <Field label="Номер телефона" name="phone" type="tel" />
                    <Field label="E-mail" name="email" type="email" required />
                  </div>
                </fieldset>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-base font-medium tracking-wide text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto"
              >
                <Send className="size-5" />
                {loading ? 'Отправка...' : 'Запросить расчёт'}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

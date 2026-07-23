import { Users, CalendarClock, BadgeCheck, HeartHandshake } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const ADVANTAGES = [
  {
    icon: Users,
    title: 'КОМАНДА ПРОФЕССИОНАЛОВ',
    text: 'Высококвалифицированные специалисты с многолетним опытом в сфере логистики и таможенного оформления.',
  },
  {
    icon: CalendarClock,
    title: '18-ЛЕТНИЙ ОПЫТ',
    text: 'С 2007 года мы успешно решаем логистические задачи любой сложности для наших клиентов.',
  },
  {
    icon: BadgeCheck,
    title: 'СТАНДАРТЫ КАЧЕСТВА',
    text: 'Строгое соблюдение международных стандартов качества на каждом этапе работы.',
  },
  {
    icon: HeartHandshake,
    title: 'ИНДИВИДУАЛЬНЫЙ СЕРВИС',
    text: 'Персональный подход к каждому клиенту и гибкие решения под ваши задачи.',
  },
]

export function Advantages() {
  return (
    <section id="advantages" className="relative overflow-hidden py-24 sm:py-32">
      <img
        src="/images/containers-band.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/90" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-display text-sm font-semibold tracking-[0.3em] text-primary">
            ПОЧЕМУ ВЫБИРАЮТ НАС
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            НАШИ ПРЕИМУЩЕСТВА
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGES.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal
                key={item.title}
                delay={i * 100}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-primary/60 hover:bg-white/10"
              >
                <span className="grid size-14 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-wide text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

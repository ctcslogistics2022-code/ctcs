import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CountUp } from '@/components/count-up'

const STATS = [
  { end: 18, suffix: '+', label: 'ЛЕТ ОПЫТА' },
  { end: 500, suffix: '+', label: 'КЛИЕНТОВ' },
  { end: 7, suffix: '', label: 'ВИДОВ УСЛУГ' },
  { end: 4, suffix: '', label: 'ОФИСОВ В КЗ' },
]

export function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/about.png"
                alt="Контейнерный терминал CTCS"
                className="h-[420px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 rounded-xl bg-primary px-8 py-6 text-center shadow-xl sm:right-6">
              <p className="font-display text-4xl font-bold text-primary-foreground">2007</p>
              <p className="mt-1 text-xs font-medium tracking-widest text-primary-foreground/80">
                ГОД ОСНОВАНИЯ
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="font-display text-sm font-semibold tracking-[0.3em] text-primary">
              О КОМПАНИИ
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
              CTCS — CENTER TO CREATE SOLUTIONS
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Компания CTCS Logistics была основана в январе 2007 года, как таможенный брокер
                (представитель).
              </p>
              <p>
                Начав свою деятельность с таможенного оформления грузов, CTCS на данный момент
                предоставляет своим Клиентам полный комплекс логистических услуг, включая перевозку
                грузов, экспедирование грузов по всему миру всеми видами транспортных сообщений,
                смешанные (мультимодальные) перевозки, проектную логистику, сертификацию,
                складирование и хранение.
              </p>
              <p>
                CTCS является владельцем складов временного хранения (СВХ), имеет собственные офиса в
                каждом городе западного Казахстана и в Алматы.
              </p>
            </div>
            <a
              href="#services"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-display text-sm font-medium tracking-wide text-white transition-colors hover:bg-secondary"
            >
              Узнать больше
              <ArrowRight className="size-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 100}
              className="rounded-2xl border border-border bg-accent/40 p-8 text-center"
            >
              <p className="font-display text-4xl font-bold text-primary sm:text-5xl">
                <CountUp end={stat.end} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs font-semibold tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

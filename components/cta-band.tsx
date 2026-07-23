import { Phone } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CtaBand() {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-primary-foreground sm:text-4xl">
            ЗАПИШИТЕСЬ НА БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/85">
            Наши специалисты помогут подобрать оптимальное логистическое решение для вашего бизнеса
          </p>
          <a
            href="tel:+77010521680"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-navy px-8 py-4 font-display text-lg font-medium tracking-wide text-white transition-transform hover:scale-105"
          >
            <Phone className="size-5 text-primary" />
            +7 701 052 1680
          </a>
        </Reveal>
      </div>
    </section>
  )
}

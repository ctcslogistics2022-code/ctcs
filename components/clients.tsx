import { Reveal } from '@/components/reveal'

const CLIENTS = [
  'Caspian Trade',
  'Aktau Port',
  'KazMunay',
  'Tengiz Group',
  'Atyrau Oil',
  'Silk Road',
  'Volga Logistics',
  'Nord Cargo',
  'Almaty Freight',
  'Steppe Rail',
  'West Terminal',
  'Mangystau Co',
]

export function Clients() {
  const loop = [...CLIENTS, ...CLIENTS]

  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-display text-sm font-semibold tracking-[0.3em] text-primary">
            ДОВЕРИЕ ЛИДЕРОВ
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
            НАШИ КЛИЕНТЫ
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </Reveal>
      </div>

      <div className="relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-6">
          {loop.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="grid h-24 w-48 shrink-0 place-items-center rounded-xl border border-border bg-accent/30 px-6"
            >
              <span className="font-display text-lg font-semibold tracking-wide text-navy/70">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src="/images/hero-port.png"
        alt="Морской порт с грузовыми контейнерами"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/70 to-navy/90" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 text-center sm:px-6 lg:px-8">
        <h1 className="font-display font-bold leading-none text-white">
          <span className="block text-6xl tracking-tight sm:text-8xl lg:text-[9rem]">CTCS</span>
          <span className="mt-3 block text-base font-medium tracking-[0.35em] text-primary sm:text-2xl lg:text-3xl">
            CENTER TO CREATE SOLUTIONS
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg font-light tracking-wide text-white/80 sm:text-xl">
          Always by your side
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-primary px-8 py-3.5 font-display text-sm font-medium tracking-wide text-primary-foreground transition-transform hover:scale-105"
          >
            Получить консультацию
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/50 px-8 py-3.5 font-display text-sm font-medium tracking-wide text-white transition-colors hover:bg-white hover:text-navy"
          >
            Наши услуги
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Прокрутить вниз"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 transition-colors hover:text-primary"
      >
        <ChevronDown className="size-8 animate-bounce" />
      </a>
    </section>
  )
}

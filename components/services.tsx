'use client'

import { useRef } from 'react'
import {
  Plane,
  Truck,
  TrainFront,
  Layers,
  Boxes,
  FileCheck,
  Warehouse,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const SERVICES = [
  {
    icon: Plane,
    title: 'Авиаперевозки',
    text: 'Быстрая и надёжная доставка грузов воздушным транспортом по всему миру.',
    image: '/images/service-air.png',
  },
  {
    icon: Truck,
    title: 'Автомобильные перевозки',
    text: 'Перевозка грузов автотранспортом по Казахстану и международным маршрутам.',
    image: '/images/service-truck.png',
  },
  {
    icon: TrainFront,
    title: 'Ж/Д перевозки',
    text: 'Железнодорожные перевозки грузов любой сложности и объёма.',
    image: '/images/service-rail.png',
  },
  {
    icon: Layers,
    title: 'Мультимодальные перевозки',
    text: 'Комбинированные перевозки несколькими видами транспорта для оптимальной логистики.',
    image: '/images/service-multimodal.png',
  },
  {
    icon: Boxes,
    title: 'Проектная логистика',
    text: 'Комплексные логистические решения для крупных проектов и негабаритных грузов.',
    image: '/images/service-project.png',
  },
  {
    icon: FileCheck,
    title: 'Таможенное оформление',
    text: 'Полное таможенное сопровождение импортных и экспортных грузов.',
    image: '/images/service-customs.png',
  },
  {
    icon: Warehouse,
    title: 'Обработка и хранение',
    text: 'Складские услуги, хранение, маркировка и обработка грузов на собственных СВХ.',
    image: '/images/service-warehouse.png',
  },
]

export function Services() {
  const trackRef = useRef<HTMLDivElement | null>(null)

  const scroll = (dir: 'prev' | 'next') => {
    const track = trackRef.current
    if (!track) return
    const amount = track.clientWidth * 0.8
    track.scrollBy({ left: dir === 'next' ? amount : -amount, behavior: 'smooth' })
  }

  return (
    <section id="services" className="bg-accent/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-display text-sm font-semibold tracking-[0.3em] text-primary">
            ЧТО МЫ ДЕЛАЕМ
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">НАШИ УСЛУГИ</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </Reveal>

        <div className="relative mt-12">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {SERVICES.map((service, i) => {
              const Icon = service.icon
              return (
                <Reveal
                  key={service.title}
                  delay={(i % 4) * 80}
                  className="group relative w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[320px]"
                >
                  <div className="relative h-[380px]">
                    <img
                      src={service.image || '/placeholder.svg'}
                      alt={service.title}
                      className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/10 transition-colors group-hover:from-secondary" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <span className="grid size-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                        <Icon className="size-6" />
                      </span>
                      <h3 className="mt-4 font-display text-xl font-semibold text-white">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/80">{service.text}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <div className="mt-8 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => scroll('prev')}
              aria-label="Предыдущий слайд"
              className="grid size-12 place-items-center rounded-full border border-navy/20 text-navy transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('next')}
              aria-label="Следующий слайд"
              className="grid size-12 place-items-center rounded-full border border-navy/20 text-navy transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

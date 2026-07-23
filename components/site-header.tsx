'use client'

import { useEffect, useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV = [
  { label: 'ГЛАВНАЯ', href: '#home' },
  { label: 'О КОМПАНИИ', href: '#about' },
  { label: 'УСЛУГИ', href: '#services' },
  { label: 'ПРЕИМУЩЕСТВА', href: '#advantages' },
  { label: 'КОНТАКТЫ', href: '#contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-navy/95 shadow-lg backdrop-blur' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center" aria-label="CTCS Logistics">
          <img
            src="/images/ctcs-logo-white.png"
            alt="CTCS Logistics"
            className="h-11 w-auto sm:h-12"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-sm font-medium tracking-wider text-white/85 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+77122766101"
            className="flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-primary"
          >
            <Phone className="size-4 text-primary" />
            +7 (7122) 766 101
          </a>
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2.5 font-display text-sm font-medium tracking-wide text-primary-foreground transition-transform hover:scale-105"
          >
            Консультация
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-md text-white lg:hidden"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy/98 px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3 font-display text-sm tracking-wider text-white/90"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="tel:+77122766101"
            className="mt-4 flex items-center gap-2 text-sm text-white/90"
          >
            <Phone className="size-4 text-primary" />
            +7 (7122) 766 101
          </a>
        </div>
      )}
    </header>
  )
}

import { Phone, Mail, MapPin } from 'lucide-react'

const NAV = [
  { label: 'Главная', href: '#home' },
  { label: 'О компании', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Контакты', href: '#contact' },
]

const SERVICES = [
  'Авиаперевозки',
  'Автоперевозки',
  'Ж/Д перевозки',
  'Мультимодальные',
  'Таможенное оформление',
]

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <img
            src="/images/ctcs-logo-white.png"
            alt="CTCS Logistics"
            className="h-12 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed">
            Center to Create Solutions — полный комплекс логистических услуг с 2007 года.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold tracking-widest text-white">
            НАВИГАЦИЯ
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold tracking-widest text-white">УСЛУГИ</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold tracking-widest text-white">КОНТАКТЫ</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="flex flex-col">
                <a href="tel:+77122766101" className="transition-colors hover:text-primary">
                  +7 (7122) 766 101
                </a>
                <a href="tel:+77010521680" className="transition-colors hover:text-primary">
                  +7 701 052 1680
                </a>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-primary" />
              <a href="mailto:info@ctcs.kz" className="transition-colors hover:text-primary">
                info@ctcs.kz
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 shrink-0 text-primary" />
              Казахстан, Актау, Атырау, Алматы
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © 2026 CTCS Logistics. Все права защищены.
      </div>
    </footer>
  )
}

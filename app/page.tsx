import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Advantages } from '@/components/advantages'
import { Clients } from '@/components/clients'
import { CtaBand } from '@/components/cta-band'
import { QuoteForm } from '@/components/quote-form'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <SiteHeader />
      <Hero />
      <About />
      <Services />
      <Advantages />
      <Clients />
      <CtaBand />
      <QuoteForm />
      <SiteFooter />
    </main>
  )
}

import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Works } from '@/components/works'
import { About } from '@/components/about'
import { Achievements } from '@/components/achievements'
import { Contact } from '@/components/contact'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      <Works />
      <About />
      <Achievements />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}

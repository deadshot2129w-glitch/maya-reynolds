import { SiteHeader } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { Intro } from '@/components/site/intro'
import { WhoWeHelp } from '@/components/site/who-we-help'
import { Expertise } from '@/components/site/expertise'
import { Services } from '@/components/site/services'
import { Approach } from '@/components/site/approach'
import { Trauma } from '@/components/site/trauma'
import { Therapist } from '@/components/site/therapist'
import { OurOffice } from '@/components/site/our-office'
import { Faq } from '@/components/site/faq'
import { Contact } from '@/components/site/contact'
import { FinalCta } from '@/components/site/final-cta'
import { SiteFooter } from '@/components/site/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen scroll-smooth">
      <SiteHeader />
      <main>
        <Hero />
        <Intro />
        <WhoWeHelp />
        <Services />
        <Expertise />
        <Approach />
        <Trauma />
        <Therapist />
        <OurOffice />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}

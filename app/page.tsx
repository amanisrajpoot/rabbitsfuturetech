import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Stats } from '@/components/sections/stats'
import { WhyUs } from '@/components/sections/why-us'
import { Testimonials } from '@/components/sections/testimonials'
import { CTA } from '@/components/sections/cta'
import { Contact } from '@/components/sections/contact'

export default async function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services limit={6} showViewAll excludeIds={['5', '6', '7']} />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  )
}

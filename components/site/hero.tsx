import Image from 'next/image'
import { MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-5 pb-16 pt-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 lg:px-12 lg:pb-24 lg:pt-4">
        {/* Image column */}
        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm sm:aspect-[5/6] lg:h-full">
            <Image
              src="/images/hero-calm.png"
              alt="Calm Santa Monica coastline at golden hour, evoking a sense of ease and space"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Text column */}
        <div className="flex flex-col justify-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-accent-foreground/70">
            Anxiety, Trauma &amp; Burnout Therapy in Santa Monica, CA
          </p>

          <h1 className="mt-6 text-pretty font-serif text-[2.6rem] font-medium leading-[1.05] text-foreground sm:text-6xl lg:text-[4.2rem]">
            A <span className="font-script text-primary">calmer</span> way to live starts with understanding what you carry.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I&apos;m Dr. Maya Reynolds, a licensed clinical psychologist offering therapy for adults navigating
            anxiety, panic, trauma, and burnout&mdash;so you can move through life feeling steadier, more grounded,
            and more like yourself.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book a Consultation
            </a>
            <a
              href="#specialties"
              className="inline-flex items-center justify-center rounded-full border border-foreground/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Explore Specialties
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 border-t border-border pt-8">
            <div className="relative size-14 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
              <Image
                src="/images/maya-portrait.png"
                alt="Portrait of Dr. Maya Reynolds, PsyD"
                fill
                sizes="56px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="font-serif text-lg font-medium leading-tight text-foreground">Dr. Maya Reynolds, PsyD</p>
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-3.5 text-accent" aria-hidden="true" />
                Licensed Clinical Psychologist &middot; Santa Monica
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

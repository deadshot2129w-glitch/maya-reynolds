import Image from 'next/image'
import { MapPin, Video } from 'lucide-react'

export function OurOffice() {
  return (
    <section id="office" className="scroll-mt-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-accent-foreground/70">Our office</p>
            <h2 className="mt-5 text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
              A calm, private space to arrive as you are.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              My Santa Monica office is designed to feel quiet and grounding&mdash;filled with natural light, warm and
              uncluttered, and comfortable from the moment you walk in. Clients often share that the space itself helps
              them feel more at ease before we&apos;ve even begun.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="leading-relaxed text-foreground">
                  123th Street 45 W<br />Santa Monica, CA 90401
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Video className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="leading-relaxed text-foreground">
                  In-person sessions in Santa Monica, plus secure telehealth for clients located anywhere in
                  California.
                </span>
              </li>
            </ul>

            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Every session&mdash;in person or online&mdash;is held with care for your privacy, comfort, and sense of
              safety.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm sm:mt-10">
              <Image
                src="/images/office-1.jpeg"
                alt="Dr. Maya Reynolds' therapy office with soft seating and large windows with natural light"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
              <Image
                src="/images/office-2.jpeg"
                alt="A bright, uncluttered counseling room with bookshelves, plants, and comfortable seating"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

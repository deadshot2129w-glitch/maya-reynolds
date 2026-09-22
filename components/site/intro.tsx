import Image from 'next/image'

export function Intro() {
  return (
    <section id="about" className="scroll-mt-24 bg-secondary/50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28 lg:px-12">
        <div className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
            <Image
              src="/images/intro-detail.png"
              alt="A quiet, light-filled corner with a linen armchair beside a window"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-accent-foreground/70">
            You don&apos;t have to keep pushing through
          </p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Successful on the outside, exhausted underneath.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Many of the people I work with look like they have it together. They&apos;re thoughtful, capable, and
              driven&mdash;yet quietly carrying constant worry, tension in the body, restless sleep, or the sense that
              they&apos;re always bracing for something to go wrong.
            </p>
            <p>
              Therapy can be the place to finally slow down. Together we make sense of what&apos;s happening beneath the
              surface and begin building more sustainable, grounded ways of living and working&mdash;so change feels
              real, not temporary.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

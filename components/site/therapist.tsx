import Image from 'next/image'

export function Therapist() {
  return (
    <section className="scroll-mt-24 bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 lg:py-28 lg:px-12">
        <div className="relative">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-sm lg:max-w-none">
            <Image
              src="/images/maya-portrait.png"
              alt="Portrait of Dr. Maya Reynolds, PsyD, a licensed clinical psychologist"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-top"
            />
          </div>
        </div>

        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-accent">Meet your therapist</p>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-tight sm:text-5xl">Dr. Maya Reynolds, PsyD</h2>
          <p className="mt-2 text-lg text-background/60">Licensed Clinical Psychologist &middot; Santa Monica, California</p>

          <div className="mt-7 space-y-5 leading-relaxed text-background/80">
            <p>
              I&apos;m a licensed clinical psychologist based in Santa Monica, offering therapy for adults who feel
              overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work
              with are high-achieving, thoughtful, and self-aware&mdash;but internally feel exhausted, stuck in
              overthinking, or emotionally on edge.
            </p>
            <p>
              My work often focuses on anxiety, panic, trauma, and burnout. I integrate evidence-based methods such as
              CBT, EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the
              emotional and physiological sides of what they&apos;re experiencing.
            </p>
            <p>
              I believe therapy works best when clients feel respected, understood, and actively involved. My goal is
              not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with
              yourself over time.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-background px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-background/90"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

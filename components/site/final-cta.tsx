export function FinalCta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 lg:py-32">
        <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
          Take the first step
        </p>
        <h2 className="mt-6 text-balance font-serif text-4xl font-medium leading-tight sm:text-6xl">
          You&apos;ve carried this long enough. Let&apos;s begin, together.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
          Reaching out can feel like the hardest part. When you&apos;re ready, I&apos;ll respond within 24 hours to
          find a time that works for you.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-background px-10 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-background/90"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  )
}

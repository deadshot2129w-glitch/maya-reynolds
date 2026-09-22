const SERVICES = [
  {
    number: '01',
    title: 'Anxiety & Panic Therapy',
    body: 'For the constant worry, racing thoughts, and physical tension that come with anxiety and panic. We build practical skills to calm your nervous system and get relief from the sense of always bracing for what could go wrong.',
  },
  {
    number: '02',
    title: 'Trauma Therapy',
    body: 'Carefully paced work for single-incident and long-standing trauma. Using approaches like EMDR, we focus on safety and regulation first, so you feel steadier in daily life—not only in the therapy room.',
  },
  {
    number: '03',
    title: 'Burnout & Perfectionism',
    body: 'For professionals and creatives running on empty. Together we ease the grip of high internal pressure and reconnect you with more sustainable ways of living and working.',
  },
]

export function Services() {
  return (
    <section id="specialties" className="scroll-mt-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-accent-foreground/70">
            Services &amp; specialties
          </p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Three focused ways we can work together.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.number}
              className="flex flex-col rounded-lg border border-border bg-card p-8 lg:p-10"
            >
              <span className="font-serif text-5xl font-medium text-primary/40">{s.number}</span>
              <h3 className="mt-6 font-serif text-2xl font-medium text-foreground">{s.title}</h3>
              <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{s.body}</p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-primary/70"
              >
                Learn more
                <span aria-hidden="true">&rarr;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

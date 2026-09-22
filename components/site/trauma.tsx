const EXPERIENCES = [
  'Single-incident experiences',
  'Complex or long-standing experiences',
  'Childhood experiences',
  'Relationship experiences',
  'Chronic stress',
]

const PACING = [
  { step: 'Safety', body: 'Establishing a sense of steadiness and trust before anything else.' },
  { step: 'Stabilization', body: 'Building resources and coping so daily life feels more manageable.' },
  { step: 'Regulation', body: 'Learning to work with the body and calm an overactive nervous system.' },
  { step: 'Processing', body: 'Gently addressing difficult experiences at a pace that feels right for you.' },
]

export function Trauma() {
  return (
    <section className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-accent-foreground/70">
              A closer look at trauma work
            </p>
            <h2 className="mt-5 text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
              Trauma work, at a pace that respects your nervous system.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Trauma looks different for everyone. I work with adults across a range of experiences&mdash;from a
              single overwhelming event to patterns that have built up over years.
            </p>
            <ul className="mt-8 space-y-3">
              {EXPERIENCES.map((e) => (
                <li key={e} className="flex items-center gap-3 text-foreground">
                  <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span className="text-lg">{e}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-8 lg:p-10">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-primary">How the work is paced</p>
            <ol className="mt-6 space-y-6">
              {PACING.map((p, i) => (
                <li key={p.step} className="flex gap-5">
                  <span className="font-serif text-2xl font-medium text-primary/50">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-foreground">{p.step}</h3>
                    <p className="mt-1.5 leading-relaxed text-muted-foreground">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

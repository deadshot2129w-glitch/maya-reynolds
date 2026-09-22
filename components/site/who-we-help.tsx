const GROUPS = [
  {
    title: 'Adults navigating anxiety',
    body: 'For those living with constant worry, panic, or a nervous system that never quite powers down—therapy offers tools to feel calmer and more in control.',
  },
  {
    title: 'People recovering from difficult experiences',
    body: 'For adults carrying the weight of past or long-standing experiences that still shape their relationships, confidence, or sense of safety.',
  },
  {
    title: 'Professionals experiencing burnout',
    body: 'For entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through stress.',
  },
  {
    title: 'High-achieving adults with perfectionism',
    body: 'For thoughtful, self-aware people held back by high internal pressure—learning to ease the grip of "never enough."',
  },
]

export function WhoWeHelp() {
  return (
    <section id="who" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-accent-foreground/70">
            Who may benefit from therapy
          </p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Therapy shaped around the life you&apos;re actually living.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {GROUPS.map((g, i) => (
            <div
              key={g.title}
              className="flex flex-col rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/40"
            >
              <span className="font-serif text-2xl text-primary/70">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 font-serif text-2xl font-medium text-foreground">{g.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{g.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

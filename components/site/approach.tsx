import Image from 'next/image'

const QUALITIES = [
  { title: 'Warm & collaborative', body: 'You’re an active partner in the work—never a passive recipient of advice.' },
  { title: 'Structured, with room to breathe', body: 'Sessions are supportive and focused, while leaving space for reflection and depth.' },
  { title: 'Practical tools', body: 'Skills you can use between sessions to steady anxiety and interrupt overthinking.' },
  { title: 'Depth-oriented work', body: 'We look beneath the symptoms to understand what’s really driving them.' },
]

const METHODS = ['Cognitive Behavioral Therapy (CBT)', 'EMDR', 'Mindfulness-Based Practices', 'Body-Oriented Techniques']

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28 lg:px-12">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-accent-foreground/70">How I work</p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            The way I work with you.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            I take a warm, grounded, and collaborative approach that blends evidence-based methods with genuine care.
            Therapy is personalized&mdash;never one-size-fits-all&mdash;so it addresses both the emotional and
            physiological sides of what you&apos;re experiencing.
          </p>

          <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {QUALITIES.map((q) => (
              <div key={q.title}>
                <h3 className="font-serif text-xl font-medium text-foreground">{q.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{q.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-accent-foreground/70">
              Evidence-based methods
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {METHODS.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-medium text-secondary-foreground"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src="/images/approach.png"
              alt="An open notebook and a warm cup of tea by a softly lit window"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

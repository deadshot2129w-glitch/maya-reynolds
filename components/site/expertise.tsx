const AREAS = [
  'Anxiety',
  'Panic',
  'Trauma',
  'Burnout',
  'Perfectionism',
  'Stress',
  'Overthinking',
  'Emotional Exhaustion',
]

export function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-24 bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 lg:py-28 lg:px-12">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-accent">Areas of expertise</p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-medium leading-tight sm:text-5xl">
            The concerns I work with most.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-background/70">
            These often overlap and feed one another. Wherever you&apos;re starting from, our work is tailored to what
            you&apos;re carrying right now.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
          {AREAS.map((area, i) => (
            <li
              key={area}
              className="flex items-baseline gap-4 border-b border-background/15 py-5 text-2xl font-medium sm:text-[1.75rem]"
            >
              <span className="font-sans text-sm font-semibold text-accent">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-serif">{area}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

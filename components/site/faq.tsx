'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    q: 'Where are you located?',
    a: 'My office is in Santa Monica, California at 123th Street 45 W, Santa Monica, CA 90401. I also offer secure telehealth sessions for clients located anywhere in California.',
  },
  {
    q: 'How does online therapy work?',
    a: 'Online sessions take place over a secure, HIPAA-compliant video platform. You’ll receive a private link before each appointment—all you need is a quiet, private space and a stable internet connection. Many clients find telehealth just as effective and often more convenient than in-person visits.',
  },
  {
    q: 'What are your fees and do you take insurance?',
    a: 'I’m an out-of-network provider. I’m happy to provide a monthly superbill you can submit to your insurance for possible reimbursement, depending on your out-of-network benefits. Reach out and I’ll gladly walk you through current fees and options.',
  },
  {
    q: 'What is a Good Faith Estimate?',
    a: 'Under the No Surprises Act, you have the right to receive a Good Faith Estimate of expected costs for services. Before we begin, I’ll provide a written estimate of anticipated fees so you always know what to expect.',
  },
  {
    q: 'What can I expect during my first appointment?',
    a: 'Our first session is about getting to know you—what brings you in, what you’re hoping for, and what’s felt hard lately. There’s no pressure to share more than you’re ready to. Together we’ll begin shaping a plan that fits your goals and pace.',
  },
  {
    q: 'How long does therapy usually last?',
    a: 'It varies. Some clients come for focused, shorter-term work around a specific concern, while others prefer ongoing, depth-oriented support. We’ll regularly revisit your goals so the work continues to fit what you need.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faqs" className="scroll-mt-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:py-28 lg:px-12">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-serif text-5xl font-medium leading-none text-foreground sm:text-6xl">Questions?</h2>
          <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
            Here are some of the most common questions I get about working together.
          </p>
          <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
            If you don&apos;t see your question listed or are ready to schedule a free consult,{' '}
            <a href="#contact" className="text-primary underline underline-offset-4 hover:text-primary/70">
              contact me
            </a>
            .
          </p>
        </div>

        <div>
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="shrink-0 text-primary">
                    {isOpen ? <Minus className="size-5" /> : <Plus className="size-5" />}
                  </span>
                  <span className="flex-1 font-serif text-xl font-medium text-foreground sm:text-2xl">{item.q}</span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="min-h-0">
                    <p className="max-w-2xl pb-6 pl-11 leading-relaxed text-muted-foreground">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

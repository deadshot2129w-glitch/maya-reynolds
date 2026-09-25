'use client'

import { useState, type FormEvent } from 'react'
import { Check, Loader2, MapPin, Mail, Phone } from 'lucide-react'
import { submitContact, type ContactState } from '@/app/actions'

const SESSION_OPTIONS = ['In-person (Santa Monica)', 'Telehealth (anywhere in CA)', 'Not sure yet']
const REFERRAL_OPTIONS = ['Google search', 'Psychology Today', 'Referral from a provider', 'Friend or family', 'Instagram', 'Other']

const inputClass =
  'w-full rounded-md border border-input bg-card px-4 py-3 text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20'

export function Contact() {
  const [state, setState] = useState<ContactState>({ status: 'idle' })
  const [pending, setPending] = useState(false)

  const [message, setMessage] = useState("");
  const maxLength = 1000;

const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  const value = e.target.value;
  if (value.length > 1000) {
    setMessage(value.slice(0, 1000));
  } else {
    setMessage(value);
  }
};

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setPending(true)
    const formData = new FormData(form)
    const result = await submitContact(formData)
    setState(result)
    setPending(false)
    if (result.status === 'success') {
      form.reset()
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-secondary/50">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:py-28 lg:px-12">
        <div>
          <h2 className="font-serif text-5xl font-medium leading-none text-foreground sm:text-6xl">
            Get <span className="font-script text-accent">in touch</span>.
          </h2>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
            Use this form to tell me a little about what brings you to therapy. I&apos;ll respond within 24 hours to
            find a time for a free consultation and make sure we&apos;re a good fit.
          </p>

          <div className="mt-10 space-y-4 border-t border-border pt-8">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <p className="leading-relaxed text-foreground">
                123th Street 45 W<br />Santa Monica, CA 90401
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="size-5 shrink-0 text-primary" aria-hidden="true" />
              <a href="mailto:hello@mayareynoldspsyd.com" className="text-foreground transition-colors hover:text-primary">
                hello@mayareynoldspsyd.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="size-5 shrink-0 text-primary" aria-hidden="true" />
              <a href="tel:+13105551200" className="text-foreground transition-colors hover:text-primary">
                (310) 555-1200
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 sm:p-10">
          {state.status === 'success' ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <span className="flex size-16 items-center justify-center rounded-full bg-accent/20 text-accent-foreground">
                <Check className="size-8 text-primary" />
              </span>
              <h3 className="mt-6 font-serif text-3xl font-medium text-foreground">Thank you for reaching out.</h3>
              <p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">
                Your message has been received. I&apos;ll be in touch within 24 hours to find a time that works for
                you.
              </p>
              <button
                type="button"
                onClick={() => setState({ status: 'idle' })}
                className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-primary underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="First name" name="firstName" error={state.errors?.firstName}>
                  <input id="firstName" name="firstName" type="text" autoComplete="given-name" className={inputClass} />
                </Field>
                <Field label="Last name" name="lastName" error={state.errors?.lastName}>
                  <input id="lastName" name="lastName" type="text" autoComplete="family-name" className={inputClass} />
                </Field>
              </div>

              <Field label="Email" name="email" error={state.errors?.email}>
                <input id="email" name="email" type="email" autoComplete="email" className={inputClass} />
              </Field>

              <Field label="Phone" name="phone" error={state.errors?.phone}>
                <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
              </Field>

              <Field
                label="Are you looking for telehealth or in-person therapy?"
                name="sessionType"
                error={state.errors?.sessionType}
              >
                <select id="sessionType" name="sessionType" defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Select an option
                  </option>
                  {SESSION_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="How did you hear about the practice?" name="referral" error={state.errors?.referral}>
                <select id="referral" name="referral" defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Select an option
                  </option>
                  {REFERRAL_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
              label="What brings you to therapy?"
              name="message"
              error={state.errors?.message}
              hint={`Share as much or as little as you like. (${message.length}/${maxLength})`}
              >
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                value={message}
                onChange={handleChange}
                className={`${inputClass} resize-y`} 
              />
              </Field>

              {state.status === 'error' && state.formError && (
                <p role="alert" className="text-sm text-destructive">
                  {state.formError}
                </p>
              )}

              <button
                type="submit"
                disabled={pending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {pending && <Loader2 className="size-4 animate-spin" />}
                {pending ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  error,
  hint,
  children,
}: {
  label: string
  name: string
  error?: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-muted-foreground">{hint}</p>}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  formError?: string
  errors?: Partial<Record<'firstName' | 'lastName' | 'email' | 'phone' | 'sessionType' | 'referral' | 'message', string>>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[\d\s()+.-]{7,}$/

export async function submitContact(formData: FormData): Promise<ContactState> {
  const get = (key: string) => String(formData.get(key) ?? '').trim()

  const firstName = get('firstName')
  const lastName = get('lastName')
  const email = get('email')
  const phone = get('phone')
  const sessionType = get('sessionType')
  const referral = get('referral')
  const message = get('message')

  const errors: ContactState['errors'] = {}

  if (!firstName) errors.firstName = 'Please enter your first name.'
  if (!lastName) errors.lastName = 'Please enter your last name.'
  if (!email) errors.email = 'Please enter your email.'
  else if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.'
  if (!phone) errors.phone = 'Please enter your phone number.'
  else if (!PHONE_RE.test(phone)) errors.phone = 'Please enter a valid phone number.'
  if (!sessionType) errors.sessionType = 'Please select an option.'
  if (!referral) errors.referral = 'Please select an option.'
  if (!message) errors.message = 'Please tell me a little about what brings you in.'
  else if (message.length < 10) errors.message = 'Please add a little more detail (at least 10 characters).'
  else if (message.length > 1000) errors.message = 'Message cannot exceed 1000 characters.'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', errors, formError: 'Please correct the highlighted fields and try again.' }
  }

  // In a production build this is where the inquiry would be emailed or stored.
  // Kept server-side so validation cannot be bypassed from the client.
  console.log('[v0] New contact inquiry:', { firstName, lastName, email, phone, sessionType, referral })

  await new Promise((resolve) => setTimeout(resolve, 600))

  return { status: 'success' }
}

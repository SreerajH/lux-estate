'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { AGENTS } from '@/lib/properties'
import { BRAND } from '@/lib/brand'
import { cn } from '@/lib/utils'

const OFFICES = [
  { city: 'New York', address: '432 Park Avenue, Suite 5200', phone: '+1 (212) 555-0100' },
  { city: 'Los Angeles', address: '9876 Wilshire Boulevard, Suite 300', phone: '+1 (310) 555-0100' },
  { city: 'Aspen', address: '120 East Main Street', phone: '+1 (970) 555-0100' },
]

const INTERESTS = ['Penthouse', 'Villa', 'Estate', 'Townhouse', 'Off-market only']
const BUDGETS = ['Under $5M', '$5M – $10M', '$10M – $25M', '$25M – $50M', '$50M+']

const ease = [0.16, 1, 0.3, 1] as const

function Chips({ options, value, onChange, multi = false }: { options: string[]; value: string[]; onChange: (v: string[]) => void; multi?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {options.map((o) => {
        const on = value.includes(o)
        return (
          <button
            type="button"
            key={o}
            aria-pressed={on}
            onClick={() => onChange(multi ? (on ? value.filter((x) => x !== o) : [...value, o]) : on ? [] : [o])}
            className={cn(
              'px-4 py-2 text-[13px] border transition-colors duration-300',
              on ? 'bg-noir text-bone border-noir' : 'border-sand text-stone hover:border-noir/40'
            )}
          >
            {o}
          </button>
        )
      })}
    </div>
  )
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [interests, setInterests] = useState<string[]>([])
  const [budget, setBudget] = useState<string[]>([])

  return (
    <div className="bg-noir text-bone">
      <div className="max-w-[1600px] mx-auto px-5 md:px-12 pt-40 md:pt-48 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,560px)] gap-16 lg:gap-24 items-start">
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease }} className="eyebrow text-bronze-soft mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-bronze-soft/70" />
              Private Enquiries
            </motion.p>
            <div className="overflow-hidden">
              <motion.h1 initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 1.3, delay: 0.3, ease }} className="font-display text-[clamp(48px,7vw,116px)] leading-[1.02] tracking-[-0.025em] pb-[0.2em] -mb-[0.1em]">
                Begin, <em className="text-bronze-soft">quietly</em>.
              </motion.h1>
            </div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 1 }} className="mt-8 text-bone/55 text-[17px] leading-relaxed max-w-lg">
              Tell us what you are looking for — or what you are thinking of selling. A senior advisor will reply personally, usually within two hours.
            </motion.p>

            <div className="mt-20">
              <p className="text-[11px] tracking-[0.26em] uppercase text-bone/40 mb-6">Advisors</p>
              <ul className="border-t border-white/10">
                {AGENTS.map((a) => (
                  <li key={a.id} className="grid grid-cols-[56px_1fr] sm:grid-cols-[56px_1fr_auto] gap-5 items-center py-5 border-b border-white/10">
                    <div className="relative w-14 aspect-[3/4] arch bg-char">
                      <Image src={a.photo} alt={a.name} fill sizes="60px" className="object-cover" />
                    </div>
                    <div>
                      <p className="text-[17px] font-medium leading-tight">{a.name}</p>
                      <p className="text-[12px] tracking-[0.14em] uppercase text-bone/40 mt-1">{a.specialty}</p>
                    </div>
                    <div className="col-span-2 sm:col-span-1 sm:text-right text-[13px] space-y-1 pl-[76px] sm:pl-0">
                      <a href={`tel:${a.phone}`} className="block text-bone/75 hover:text-bronze-soft transition-colors">{a.phone}</a>
                      <a href={`mailto:${a.email}`} className="block text-bone/40 hover:text-bronze-soft transition-colors">{a.email}</a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {OFFICES.map((o) => (
                <div key={o.city}>
                  <p className="text-[13px] tracking-[0.2em] uppercase font-medium text-bronze-soft mb-3">{o.city}</p>
                  <p className="text-bone/50 text-[14px] leading-relaxed">{o.address}</p>
                  <p className="text-bone/35 text-[13px] mt-2">{o.phone}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.4, ease }} className="lg:sticky lg:top-28 bg-bone text-noir p-8 md:p-12">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16 text-center">
                  <p className="eyebrow text-bronze mb-6">Received</p>
                  <p className="font-display text-[44px] leading-tight mb-4">Thank you.</p>
                  <p className="text-stone leading-relaxed max-w-sm mx-auto">
                    Your advisor will be in touch shortly. All correspondence with {BRAND.name} is strictly confidential.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  exit={{ opacity: 0 }}
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                  className="space-y-8"
                >
                  <p className="font-display text-[32px] leading-tight">Private enquiry</p>
                  {[
                    { label: 'Full name', type: 'text', auto: 'name', req: true },
                    { label: 'Email', type: 'email', auto: 'email', req: true },
                    { label: 'Telephone', type: 'tel', auto: 'tel', req: false },
                  ].map((f) => (
                    <label key={f.label} className="block">
                      <span className="text-[10px] tracking-[0.28em] uppercase text-taupe">{f.label}</span>
                      <input type={f.type} autoComplete={f.auto} required={f.req} className="field text-noir" />
                    </label>
                  ))}
                  <div>
                    <span className="text-[10px] tracking-[0.28em] uppercase text-taupe">Interested in</span>
                    <Chips options={INTERESTS} value={interests} onChange={setInterests} multi />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.28em] uppercase text-taupe">Budget</span>
                    <Chips options={BUDGETS} value={budget} onChange={setBudget} />
                  </div>
                  <label className="block">
                    <span className="text-[10px] tracking-[0.28em] uppercase text-taupe">Your vision</span>
                    <textarea rows={3} placeholder="Location, timing, the feeling of the place…" className="field text-noir resize-none" />
                  </label>
                  <button type="submit" className="btn btn-dark w-full">
                    Submit private enquiry <span aria-hidden>→</span>
                  </button>
                  <p className="text-[12px] text-taupe text-center">Strictly confidential. Never shared with third parties.</p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

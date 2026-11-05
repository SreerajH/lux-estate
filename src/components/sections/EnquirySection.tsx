'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { AGENTS } from '@/lib/properties'

export default function EnquirySection() {
  const [sent, setSent] = useState(false)

  return (
    <section className="relative bg-loden text-bone py-28 md:py-40 overflow-hidden">
      <div
        aria-hidden
        className="absolute -right-[10vw] -top-[20vw] w-[60vw] h-[60vw] rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, var(--color-bronze-soft), transparent 65%)' }}
      />
      <div className="relative max-w-[1600px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="eyebrow text-bronze-soft mb-6">Private Service</p>
            <h2 className="font-display text-[clamp(38px,4.6vw,72px)] leading-[1.02] tracking-[-0.02em] mb-8">
              Every search begins with a <em className="text-bronze-soft">conversation</em>.
            </h2>
            <p className="text-bone/60 text-[16px] leading-relaxed max-w-md mb-14">
              Share as much or as little as you like. A senior advisor — never an assistant — will reply personally, in confidence.
            </p>

            <div className="flex items-end gap-4">
              {AGENTS.map((a, i) => (
                <div key={a.id} className={i === 1 ? 'w-24 md:w-28' : 'w-20 md:w-24'}>
                  <div className="relative aspect-[3/4] arch bg-loden-deep">
                    <Image src={a.photo} alt={a.name} fill sizes="120px" className="object-cover" />
                  </div>
                </div>
              ))}
              <div className="pl-4 pb-1">
                <p className="text-[11px] tracking-[0.24em] uppercase text-bone/40">Replies within</p>
                <p className="text-[20px] font-light leading-tight mt-1">Two hours</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pt-4"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-full flex flex-col justify-center py-16"
                >
                  <p className="eyebrow text-bronze-soft mb-6">Received</p>
                  <p className="font-display text-[40px] leading-tight mb-4">Thank you.</p>
                  <p className="text-bone/60 max-w-sm leading-relaxed">
                    An advisor will be in touch shortly. Everything you have shared stays between us.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  exit={{ opacity: 0 }}
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8"
                >
                  {[
                    { label: 'Name', type: 'text', placeholder: 'Full name', auto: 'name' },
                    { label: 'Email', type: 'email', placeholder: 'you@domain.com', auto: 'email' },
                    { label: 'Telephone', type: 'tel', placeholder: 'Optional', auto: 'tel' },
                    { label: 'Interest', type: 'text', placeholder: 'e.g. Oceanfront, Malibu', auto: 'off' },
                  ].map((f) => (
                    <label key={f.label} className="block">
                      <span className="text-[10px] tracking-[0.28em] uppercase text-bone/45">{f.label}</span>
                      <input
                        suppressHydrationWarning
                        type={f.type}
                        autoComplete={f.auto}
                        placeholder={f.placeholder}
                        required={f.label === 'Name' || f.label === 'Email'}
                        className="field text-bone"
                      />
                    </label>
                  ))}
                  <label className="block sm:col-span-2">
                    <span className="text-[10px] tracking-[0.28em] uppercase text-bone/45">What are you looking for?</span>
                    <textarea
                      suppressHydrationWarning
                      rows={3}
                      placeholder="Location, timing, the feeling of the place…"
                      className="field text-bone resize-none"
                    />
                  </label>
                  <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4">
                    <p className="text-[12px] text-bone/40 max-w-[28ch] leading-relaxed">
                      Strictly confidential. Never shared, never added to a list.
                    </p>
                    <button type="submit" className="btn btn-light">
                      Send enquiry <span aria-hidden>→</span>
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function EnquirySection() {
  return (
    <section className="bg-graphite py-[120px]">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-gold text-[11px] tracking-[0.3em] uppercase font-body font-medium mb-4">Private Service</p>
            <h2 className="font-display text-ivory font-light leading-tight mb-6" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
              Your Search Begins With a Conversation
            </h2>
            <p className="text-ivory/50 font-body text-base leading-relaxed mb-8 max-w-lg">
              Every great acquisition starts with understanding exactly what you desire. Our advisors offer an entirely discreet, white-glove service tailored to your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-3">
                <div className="w-px h-8 bg-gold/40" />
                <div>
                  <p className="text-ivory/30 text-[10px] tracking-[0.1em] uppercase font-body">Response time</p>
                  <p className="text-ivory text-sm font-body">Within 2 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-px h-8 bg-gold/40" />
                <div>
                  <p className="text-ivory/30 text-[10px] tracking-[0.1em] uppercase font-body">Availability</p>
                  <p className="text-ivory text-sm font-body">24/7 Global</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-obsidian p-8 md:p-10 pulse-gold-border"
            style={{ borderRadius: '4px' }}
          >
            <h3 className="font-display text-ivory text-2xl font-light mb-6">Begin Your Search</h3>
            <div className="space-y-4">
              {[
                { label: 'Full Name', type: 'text', placeholder: 'Your name' },
                { label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                { label: 'Phone', type: 'tel', placeholder: '+1 (000) 000-0000' },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-ivory/40 text-[11px] tracking-[0.1em] uppercase font-body mb-2">
                    {field.label}
                  </label>
                  <input
                    suppressHydrationWarning
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-graphite border border-white/10 text-ivory text-sm font-body px-4 py-3 focus:outline-none focus:border-gold/50 placeholder-ivory/20 transition-colors"
                    style={{ borderRadius: '2px' }}
                  />
                </div>
              ))}
              <div>
                <label className="block text-ivory/40 text-[11px] tracking-[0.1em] uppercase font-body mb-2">
                  Message
                </label>
                <textarea
                  suppressHydrationWarning
                  rows={3}
                  placeholder="Tell us about your ideal property..."
                  className="w-full bg-graphite border border-white/10 text-ivory text-sm font-body px-4 py-3 focus:outline-none focus:border-gold/50 placeholder-ivory/20 transition-colors resize-none"
                  style={{ borderRadius: '2px' }}
                />
              </div>
              <Link
                href="/contact"
                className="block w-full py-4 bg-gold text-obsidian text-center text-[13px] tracking-[0.1em] uppercase font-body font-medium hover:bg-gold-light transition-colors duration-300 mt-2"
                style={{ borderRadius: '2px' }}
              >
                Send Enquiry →
              </Link>
            </div>
            <p className="text-ivory/20 text-[10px] font-body tracking-wide mt-4 text-center">
              Strictly confidential. Your information is never shared.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

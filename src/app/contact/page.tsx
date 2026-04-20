'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import type { Metadata } from 'next'

const AGENTS = [
  {
    name: 'Victoria Ashworth',
    title: 'Senior Estate Director',
    specialty: 'Manhattan Penthouses',
    phone: '+1 (212) 555-0191',
    email: 'v.ashworth@luxeestate.com',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80',
  },
  {
    name: 'Sebastian Harlow',
    title: 'Luxury Portfolio Advisor',
    specialty: 'Coastal Villas',
    phone: '+1 (310) 555-0147',
    email: 's.harlow@luxeestate.com',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
  },
  {
    name: 'Camille Laurent',
    title: 'International Specialist',
    specialty: 'Alpine Retreats',
    phone: '+1 (415) 555-0183',
    email: 'c.laurent@luxeestate.com',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&auto=format&fit=crop&q=80',
  },
]

const OFFICES = [
  { city: 'New York', address: '432 Park Avenue, Suite 5200', phone: '+1 (212) 555-0100' },
  { city: 'Los Angeles', address: '9876 Wilshire Boulevard, Suite 300', phone: '+1 (310) 555-0100' },
  { city: 'Aspen', address: '120 East Main Street', phone: '+1 (970) 555-0100' },
]

const BUDGETS = ['Under $5M', '$5M – $10M', '$10M – $25M', '$25M – $50M', '$50M+', 'Rental']
const INTERESTS = ['Penthouse', 'Villa', 'Estate', 'Townhouse', 'Commercial', 'Off-Market Only']

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="min-h-screen bg-obsidian relative overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ opacity: 0.15 }}>
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(201,169,110,0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 20%, rgba(201,169,110,0.08) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-gold text-[11px] tracking-[0.3em] uppercase font-body font-medium mb-4">Private Enquiries</p>
            <h1 className="font-display text-ivory font-light leading-tight mb-6" style={{ fontSize: 'clamp(36px, 4vw, 60px)' }}>
              Begin Your Search
            </h1>
            <p className="text-ivory/50 font-body text-base leading-relaxed mb-12 max-w-lg">
              Every great acquisition starts with understanding exactly what you desire. Our advisors provide a completely discreet, white-glove service tailored to your vision — and your timetable.
            </p>

            <div className="mb-12">
              <h3 className="text-ivory/40 text-[11px] tracking-[0.2em] uppercase font-body font-medium mb-6">Your Advisors</h3>
              <div className="space-y-4">
                {AGENTS.map((agent, i) => (
                  <motion.div
                    key={agent.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-graphite"
                    style={{ borderRadius: '4px' }}
                  >
                    <div className="relative w-14 h-14 flex-shrink-0 rounded-full overflow-hidden">
                      <Image src={agent.photo} alt={agent.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-ivory font-body font-medium text-sm">{agent.name}</p>
                      <p className="text-ivory/40 text-[11px] font-body">{agent.specialty}</p>
                    </div>
                    <div className="text-right">
                      <a href={`tel:${agent.phone}`} className="flex items-center gap-1.5 text-gold text-[11px] font-body hover:text-gold-light transition-colors mb-1">
                        <Phone size={10} />{agent.phone}
                      </a>
                      <a href={`mailto:${agent.email}`} className="flex items-center gap-1.5 text-ivory/40 text-[11px] font-body hover:text-ivory transition-colors">
                        <Mail size={10} />{agent.email}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-ivory/40 text-[11px] tracking-[0.2em] uppercase font-body font-medium mb-6">Our Offices</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {OFFICES.map((office, i) => (
                  <motion.div
                    key={office.city}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                    className="p-5 border border-white/10"
                    style={{ borderRadius: '4px' }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin size={12} className="text-gold" />
                      <span className="text-gold text-[11px] tracking-[0.1em] uppercase font-body">{office.city}</span>
                    </div>
                    <p className="text-ivory/50 text-sm font-body leading-relaxed mb-2">{office.address}</p>
                    <p className="text-ivory/30 text-[12px] font-body">{office.phone}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            <div className="bg-graphite p-8 md:p-10 pulse-gold-border" style={{ borderRadius: '4px' }}>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                    <div className="w-4 h-4 rounded-full bg-gold" />
                  </div>
                  <h3 className="font-display text-ivory text-2xl font-light mb-3">Enquiry Received</h3>
                  <p className="text-ivory/50 font-body text-sm leading-relaxed">
                    Your advisor will be in touch within 2 hours. All correspondence is strictly confidential.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-ivory text-2xl font-light mb-6">Private Enquiry</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Full Name', type: 'text', placeholder: 'Your name' },
                      { label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                      { label: 'Phone Number', type: 'tel', placeholder: '+1 (000) 000-0000' },
                    ].map((field) => (
                      <div key={field.label}>
                        <label className="block text-ivory/40 text-[10px] tracking-[0.1em] uppercase font-body mb-1.5">{field.label}</label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          className="w-full bg-obsidian border border-white/10 text-ivory text-sm font-body px-4 py-3 focus:outline-none focus:border-gold/50 placeholder-ivory/20 transition-colors"
                          style={{ borderRadius: '2px' }}
                        />
                      </div>
                    ))}

                    <div>
                      <label className="block text-ivory/40 text-[10px] tracking-[0.1em] uppercase font-body mb-1.5">Property Interest</label>
                      <div className="flex flex-wrap gap-2">
                        {INTERESTS.map((i) => (
                          <button key={i} className="px-3 py-1.5 border border-white/15 text-ivory/50 text-[11px] font-body hover:border-gold/50 hover:text-gold transition-all" style={{ borderRadius: '2px' }}>
                            {i}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-ivory/40 text-[10px] tracking-[0.1em] uppercase font-body mb-1.5">Budget Range</label>
                      <div className="flex flex-wrap gap-2">
                        {BUDGETS.map((b) => (
                          <button key={b} className="px-3 py-1.5 border border-white/15 text-ivory/50 text-[11px] font-body hover:border-gold/50 hover:text-gold transition-all" style={{ borderRadius: '2px' }}>
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-ivory/40 text-[10px] tracking-[0.1em] uppercase font-body mb-1.5">Message</label>
                      <textarea
                        rows={4}
                        placeholder="Share your vision for the perfect property..."
                        className="w-full bg-obsidian border border-white/10 text-ivory text-sm font-body px-4 py-3 focus:outline-none focus:border-gold/50 placeholder-ivory/20 transition-colors resize-none"
                        style={{ borderRadius: '2px' }}
                      />
                    </div>

                    <button
                      onClick={() => setSubmitted(true)}
                      className="w-full py-4 bg-gold text-obsidian text-[13px] tracking-[0.1em] uppercase font-body font-medium hover:bg-gold-light transition-colors"
                      style={{ borderRadius: '2px' }}
                    >
                      Submit Private Enquiry →
                    </button>
                  </div>
                  <p className="text-ivory/20 text-[10px] font-body tracking-wide mt-4 text-center">
                    Strictly confidential. Your information is never shared with third parties.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

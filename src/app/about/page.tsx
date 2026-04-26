'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const TEAM = [
  {
    name: 'Victoria Ashworth',
    title: 'Senior Estate Director',
    specialty: 'Manhattan Penthouses',
    phone: '+1 (212) 555-0191',
    photo: '/project/Victoria Ashworth.png',
  },
  {
    name: 'Sebastian Harlow',
    title: 'Luxury Portfolio Advisor',
    specialty: 'Coastal Villas & Estates',
    phone: '+1 (310) 555-0147',
    photo: '/project/Sebastian Harlow.png',
  },
  {
    name: 'Camille Laurent',
    title: 'International Property Specialist',
    specialty: 'Alpine & Mountain Retreats',
    phone: '+1 (415) 555-0183',
    photo: '/project/Camille Laurent.png',
  },
]

const VALUES = [
  { title: 'Discretion', body: 'Every transaction is treated with absolute confidentiality. We do not advertise our clients or transactions.' },
  { title: 'Curation', body: 'We represent fewer than 1% of properties we are approached about. Quality, always over quantity.' },
  { title: 'Expertise', body: 'Eighteen years placing exceptional properties with exceptional people. The experience shows.' },
  { title: 'Access', body: 'Many of our finest properties are never publicly listed. Our network opens doors others cannot.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="relative bg-obsidian pt-20" style={{ minHeight: '70vh' }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&auto=format&fit=crop&q=80"
            alt="Luxe Estate story"
            fill
            className="object-cover"
            style={{ opacity: 0.25 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 to-obsidian" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-10 flex items-center" style={{ minHeight: '70vh' }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="text-gold text-[11px] tracking-[0.3em] uppercase font-body font-medium mb-4">Our Story</p>
            <h1 className="font-display text-ivory font-light leading-tight mb-6" style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}>
              Where Architecture<br />Meets Legacy
            </h1>
            <p className="text-ivory/60 font-body text-lg leading-relaxed max-w-2xl">
              Founded in 2006, Luxe Estate was born from a singular conviction: that the rarest properties deserve representation of equal caliber. We are not a marketplace. We are a private counsel for those who demand more.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-ivory py-[120px]">
        <div className="max-w-[1440px] mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-[120px]">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gold text-[11px] tracking-[0.3em] uppercase font-body font-medium mb-4">Philosophy</p>
              <h2 className="font-display text-obsidian font-light leading-tight mb-6" style={{ fontSize: 'clamp(32px, 3vw, 48px)' }}>
                Less is more. But every detail is intentional.
              </h2>
              <p className="text-slate font-body text-base leading-relaxed mb-4">
                We curate fewer than 250 active listings at any one time. This is by design. Each property in our portfolio has been personally vetted, photographed, and represented by a dedicated advisor who knows it intimately.
              </p>
              <p className="text-slate font-body text-base leading-relaxed">
                Our clients include heads of state, Fortune 100 executives, award-winning architects, and families whose heritage spans centuries. They come to us not for options, but for answers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/3]"
              style={{ borderRadius: '4px', overflow: 'hidden' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1280&auto=format&fit=crop&q=80"
                alt="Luxe Estate interior"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="font-display text-obsidian text-4xl font-light mb-4">Our Principles</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-[120px]">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="p-8 bg-mist"
                style={{ borderRadius: '4px' }}
              >
                <div className="w-8 h-px bg-gold mb-6" />
                <h3 className="font-display text-obsidian text-xl font-medium mb-3">{v.title}</h3>
                <p className="text-slate font-body text-sm leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <p className="text-gold text-[11px] tracking-[0.3em] uppercase font-body font-medium mb-3">The Team</p>
            <h2 className="font-display text-obsidian text-4xl font-light">Your Private Advisors</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[3/4] mb-5 overflow-hidden" style={{ borderRadius: '4px' }}>
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </div>
                <h3 className="font-display text-obsidian text-xl font-medium mb-1">{member.name}</h3>
                <p className="text-slate/60 text-sm font-body mb-1">{member.title}</p>
                <p className="text-gold text-[11px] tracking-[0.08em] uppercase font-body mb-3">{member.specialty}</p>
                <a href={`tel:${member.phone}`} className="text-slate text-sm font-body hover:text-gold transition-colors">{member.phone}</a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

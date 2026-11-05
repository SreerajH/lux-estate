'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { BRAND } from '@/lib/brand'

const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=2400&auto=format&fit=crop&q=80',
    title: 'Villa Solaris',
    place: 'Carbon Beach, Malibu',
    price: '$28,500,000',
    slug: 'villa-solaris-malibu',
  },
  {
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=2400&auto=format&fit=crop&q=80',
    title: 'The Alpine Retreat',
    place: 'Red Mountain, Aspen',
    price: '$32,000,000',
    slug: 'alpine-retreat-aspen',
  },
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2400&auto=format&fit=crop&q=80',
    title: 'Ocean Manor',
    place: 'Palm Island, Miami Beach',
    price: '$22,750,000',
    slug: 'ocean-manor-miami',
  },
]

const DURATION = 7000
const ease = [0.16, 1, 0.3, 1] as const

export default function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setIndex((i) => (i + 1) % SLIDES.length), DURATION)
    return () => clearTimeout(t)
  }, [index])

  const slide = SLIDES[index]
  const letters = BRAND.name.toUpperCase().split('')

  return (
    <section className="relative h-[100svh] min-h-[700px] overflow-hidden bg-noir text-bone grain">
      {/* photography */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
        >
          <div className="absolute inset-0" style={{ animation: `kenburns ${DURATION + 1600}ms cubic-bezier(0.25,0.1,0.25,1) both` }}>
            <Image src={slide.image} alt={`${slide.title}, ${slide.place}`} fill priority sizes="100vw" className="object-cover" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* tonal grade */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/10 to-noir/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-noir/50 via-transparent to-transparent" />

      <div className="relative z-10 h-full max-w-[1600px] mx-auto px-5 md:px-12 flex flex-col justify-end pt-[110px] pb-[3vw]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-6 md:mb-10">
          {/* statement */}
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease }}
              className="eyebrow text-bronze-soft mb-6 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-bronze-soft/70" />
              Est. {BRAND.established} · Worldwide
            </motion.p>
            <h1 className="font-display text-[clamp(38px,min(5vw,8.5svh),78px)] leading-[1.04] tracking-[-0.02em]">
              {['Homes of', 'quiet consequence.'].map((line, i) => (
                <span key={line} className="block overflow-hidden pb-[0.2em] -mb-[0.12em]">
                  <motion.span
                    className="block"
                    initial={{ y: '105%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.3, delay: 1 + i * 0.12, ease }}
                  >
                    {i === 1 ? (
                      <>
                        <em className="text-bronze-soft">quiet</em> consequence.
                      </>
                    ) : (
                      line
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4, ease }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link href="/properties" className="btn btn-light">
                View residences
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Arrange a private viewing
              </Link>
            </motion.div>
          </div>

          {/* slide caption */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="w-full lg:w-[340px] shrink-0"
          >
            <div className="flex items-center justify-between text-[11px] tracking-[0.28em] uppercase text-bone/60 mb-4">
              <span>Now showing</span>
              <span className="font-body tabular-nums">
                0{index + 1} <span className="text-bone/30">/ 0{SLIDES.length}</span>
              </span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.7, ease }}
              >
                <Link href={`/properties/${slide.slug}`} className="group block">
                  <p className="text-[20px] font-medium leading-tight group-hover:text-bronze-soft transition-colors duration-500">
                    {slide.title}
                  </p>
                  <p className="mt-1 text-[13px] tracking-[0.08em] text-bone/60">
                    {slide.place} — {slide.price}
                  </p>
                </Link>
              </motion.div>
            </AnimatePresence>
            <div className="mt-5 flex gap-2">
              {SLIDES.map((s, i) => (
                <button
                  key={s.slug}
                  onClick={() => setIndex(i)}
                  className="relative flex-1 h-6 group"
                  aria-label={`Show ${s.title}`}
                >
                  <span className="absolute inset-x-0 top-1/2 h-px bg-bone/20" />
                  {i === index && (
                    <motion.span
                      key={`bar-${index}`}
                      className="absolute left-0 top-1/2 h-px bg-bone origin-left w-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: DURATION / 1000, ease: 'linear' }}
                    />
                  )}
                  {i < index && <span className="absolute inset-x-0 top-1/2 h-px bg-bone/60" />}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* monumental wordmark */}
        <div
          aria-hidden
          className="flex justify-between font-display uppercase leading-[0.74] select-none -mx-[0.5vw]"
          style={{ fontSize: 'clamp(64px, min(19.5vw, 36svh), 340px)', fontVariationSettings: '"opsz" 96' }}
        >
          {letters.map((ch, i) => (
            <span key={i} className="block overflow-hidden pt-[0.04em]">
              <motion.span
                className="block text-bone/95"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5, delay: 0.15 + i * 0.07, ease }}
              >
                {ch}
              </motion.span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

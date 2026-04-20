'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const WORDS = ['Extraordinary', 'Iconic', 'Rare', 'Timeless', 'Unmatched']

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&auto=format&fit=crop&q=80"
          alt="Luxury estate exterior"
          fill
          priority
          className="object-cover"
          style={{ opacity: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/30 to-obsidian/80" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold text-[12px] tracking-[0.3em] uppercase font-body font-medium mb-8"
        >
          The World&apos;s Most Exclusive Properties
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display font-light text-ivory leading-[1.05] mb-6"
          style={{ fontSize: 'clamp(56px, 8vw, 96px)' }}
        >
          Discover something
          <br />
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="text-gold font-normal"
            >
              {WORDS[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-mist/70 font-body text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          A curated portfolio of the world&apos;s most extraordinary estates, penthouses,
          and villas — available only through private introduction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/properties"
            className="px-10 py-4 bg-gold text-obsidian text-[13px] tracking-[0.1em] uppercase font-body font-medium transition-all duration-300 hover:bg-gold-light"
            style={{ borderRadius: '2px' }}
          >
            Browse Properties
          </Link>
          <Link
            href="/contact"
            className="px-10 py-4 border border-ivory/40 text-ivory text-[13px] tracking-[0.1em] uppercase font-body font-medium transition-all duration-300 hover:border-ivory hover:bg-ivory/5 animate-pulse-gold-border"
            style={{ borderRadius: '2px' }}
          >
            Book a Private Tour
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-ivory/40 text-[10px] tracking-[0.2em] uppercase font-body">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-gold" />
        </motion.div>
      </motion.div>
    </section>
  )
}

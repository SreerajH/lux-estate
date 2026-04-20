'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function CollectionsTeaser() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const titleLeft = useTransform(scrollYProgress, [0.1, 0.6], ['0%', '-8%'])
  const titleRight = useTransform(scrollYProgress, [0.1, 0.6], ['0%', '8%'])
  const scale = useTransform(scrollYProgress, [0, 0.4], [1.1, 1.0])
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0.5, 1])

  const titleStyle = { fontSize: 'clamp(2rem, 5vw, 5rem)' } as React.CSSProperties

  return (
    <section ref={ref} className="relative overflow-hidden bg-obsidian" style={{ minHeight: '80vh' }}>
      <motion.div className="absolute inset-0" style={{ scale, opacity }}>
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&auto=format&fit=crop&q=80"
          alt="Curated estates collection"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-obsidian/60" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gold text-[11px] tracking-[0.3em] uppercase font-body font-medium mb-6"
        >
          2024 Collection
        </motion.p>

        <div className="overflow-hidden w-full px-4">
          <div className="flex flex-col md:flex-row gap-0 items-center justify-center w-full">
            <motion.span
              style={{ x: titleLeft, ...titleStyle }}
              className="font-display text-ivory font-light leading-none px-2 text-center"
            >
              Curated
            </motion.span>
            <span className="font-display text-ivory font-light leading-none hidden md:inline px-4" style={titleStyle}>
              &nbsp;
            </span>
            <motion.span
              style={{ x: titleRight, ...titleStyle }}
              className="font-display text-gold font-light leading-none px-2 text-center"
            >
              Estates
            </motion.span>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-mist/60 font-body text-base md:text-lg max-w-xl mt-6 mb-10 leading-relaxed"
        >
          Scroll to explore our most coveted properties — each one handpicked for its architectural excellence and absolute rarity.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-ivory/40 text-[10px] tracking-[0.3em] uppercase font-body"
        >
          Scroll to explore
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap gap-4 justify-center"
        >
          {['Oceanfront Villas', 'Manhattan Penthouses', 'Alpine Retreats', 'Historic Estates'].map((col) => (
            <Link
              key={col}
              href="/collections"
              className="px-6 py-3 border border-ivory/20 text-ivory/70 text-[12px] tracking-[0.1em] uppercase font-body hover:border-gold hover:text-gold transition-all duration-300"
              style={{ borderRadius: '2px' }}
            >
              {col}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Collection {
  id: string
  name: string
  count: number
  description: string
  image: string
  color: string
}

export default function CollectionsClientWrapper({ collections }: { collections: Collection[] }) {
  return (
    <div className="space-y-6">
      {collections.map((col, i) => (
        <motion.div
          key={col.id}
          id={col.id}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group relative overflow-hidden cursor-pointer"
          style={{ height: '400px', borderRadius: '4px' }}
        >
          <Image
            src={col.image}
            alt={col.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/50 to-transparent" />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{ background: `linear-gradient(to right, ${col.color}E0, transparent)` }}
          />

          <div className="relative z-10 h-full flex items-center px-12">
            <div className="max-w-lg">
              <p className="text-gold text-[11px] tracking-[0.3em] uppercase font-body font-medium mb-3">
                {col.count} Properties
              </p>
              <h2 className="font-display text-ivory font-light leading-tight mb-4" style={{ fontSize: 'clamp(28px, 3vw, 48px)' }}>
                {col.name}
              </h2>
              <p className="text-ivory/60 font-body text-sm leading-relaxed mb-8 max-w-md">
                {col.description}
              </p>
              <Link
                href={`/properties`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold text-[12px] tracking-[0.1em] uppercase font-body hover:bg-gold hover:text-obsidian transition-all duration-300"
                style={{ borderRadius: '2px' }}
              >
                Explore Collection →
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

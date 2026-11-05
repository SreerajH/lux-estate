'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PropertyCard from '@/components/property/PropertyCard'
import { getFeaturedProperties } from '@/lib/properties'

export default function FeaturedListings() {
  const p = getFeaturedProperties().slice(0, 4)

  return (
    <section className="bg-noir text-bone py-28 md:py-40">
      <div className="max-w-[1600px] mx-auto px-5 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-16 md:mb-24"
        >
          <div>
            <p className="eyebrow text-bronze-soft mb-6">Selected Residences — {new Date().getFullYear()}</p>
            <h2 className="font-display text-[clamp(40px,5.5vw,88px)] leading-[0.98] tracking-[-0.02em]">
              The current
              <br />
              <em className="text-bronze-soft">portfolio</em>
            </h2>
          </div>
          <div className="md:max-w-xs">
            <p className="text-bone/55 text-[15px] leading-relaxed mb-8">
              Each residence is visited, photographed and represented by a single advisor who knows every room.
            </p>
            <Link href="/properties" className="link-draw text-[11px] tracking-[0.28em] uppercase text-bone">
              All residences <span aria-hidden>→</span>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16 md:gap-y-24">
          {p[0] && <PropertyCard property={p[0]} index={0} large className="md:col-span-8" />}
          {p[1] && <PropertyCard property={p[1]} index={1} className="md:col-span-4 md:mt-40" />}
          {p[2] && <PropertyCard property={p[2]} index={2} className="md:col-span-4" />}
          {p[3] && <PropertyCard property={p[3]} index={3} large className="md:col-span-8 md:mt-24" />}
        </div>
      </div>
    </section>
  )
}

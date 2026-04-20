'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PropertyCard from '@/components/property/PropertyCard'
import { getFeaturedProperties } from '@/lib/properties'

export default function FeaturedListings() {
  const properties = getFeaturedProperties().slice(0, 4)

  return (
    <section className="bg-obsidian py-[120px]">
      <div className="max-w-[1440px] mx-auto px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
        >
          <div>
            <p className="text-gold text-[11px] tracking-[0.3em] uppercase font-body font-medium mb-3">
              Featured Properties
            </p>
            <h2 className="font-display text-ivory font-light leading-tight" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
              Exceptional Estates,<br />Handpicked for You
            </h2>
          </div>
          <Link
            href="/properties"
            className="mt-6 md:mt-0 text-gold text-[12px] tracking-[0.1em] uppercase font-body border-b border-gold/40 hover:border-gold pb-1 transition-colors duration-200"
          >
            View All Properties →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties[0] && (
            <div className="md:col-span-2">
              <PropertyCard property={properties[0]} large className="h-full" />
            </div>
          )}
          {properties[1] && (
            <PropertyCard property={properties[1]} />
          )}
          {properties[2] && (
            <PropertyCard property={properties[2]} />
          )}
          {properties[3] && (
            <div className="md:col-span-2">
              <PropertyCard property={properties[3]} large className="h-full" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

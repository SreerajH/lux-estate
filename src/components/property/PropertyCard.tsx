'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Bed, Bath, Square } from 'lucide-react'
import { cn, formatNumber } from '@/lib/utils'
import type { Property } from '@/lib/properties'

interface PropertyCardProps {
  property: Property
  large?: boolean
  className?: string
}

export default function PropertyCard({ property, large = false, className }: PropertyCardProps) {
  const [imgIndex, setImgIndex] = useState(0)
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn('group relative bg-graphite overflow-hidden cursor-pointer', className)}
      style={{ borderRadius: '4px', boxShadow: 'var(--shadow-card)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setImgIndex(0) }}
    >
      <Link href={`/properties/${property.slug}`} className="block">
        <div
          className={cn('relative overflow-hidden', large ? 'aspect-[4/3]' : 'aspect-[3/4]')}
        >
          {property.images.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`${property.title} image ${i + 1}`}
              fill
              className={cn(
                'object-cover transition-all duration-600',
                i === imgIndex ? 'opacity-100 scale-[1.04]' : 'opacity-0 scale-100',
                hovered && i === imgIndex ? 'scale-[1.04]' : ''
              )}
              style={{
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                transform: hovered ? 'scale(1.04)' : 'scale(1.0)',
              }}
            />
          ))}

          {property.images.length > 1 && hovered && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {property.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.preventDefault(); setImgIndex(i) }}
                  className={cn('w-1.5 h-1.5 rounded-full transition-all', i === imgIndex ? 'bg-gold w-4' : 'bg-white/50')}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
            </div>
          )}

          {property.tags.length > 0 && (
            <div className="absolute top-4 left-4 z-20">
              <span className="bg-gold text-obsidian text-[10px] tracking-[0.1em] uppercase font-body font-medium px-2 py-1" style={{ borderRadius: '2px' }}>
                {property.tags[0]}
              </span>
            </div>
          )}

          {property.isExclusive && (
            <div className="absolute top-4 right-4 z-20">
              <span className="bg-obsidian/80 border border-gold/50 text-gold text-[10px] tracking-[0.1em] uppercase font-body font-medium px-2 py-1" style={{ borderRadius: '2px' }}>
                Exclusive
              </span>
            </div>
          )}

          <div
            className={cn(
              'absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-obsidian/95 via-obsidian/50 to-transparent p-6 transition-all duration-400',
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
            style={{ transition: 'opacity 0.4s ease, transform 0.4s ease' }}
          >
            <p className="text-ivory/60 text-[10px] tracking-[0.1em] uppercase font-body mb-1">{property.priceLabel}</p>
            <p className="font-display text-ivory font-semibold" style={{ fontSize: '28px' }}>{property.priceDisplay}</p>
            <div className="flex gap-4 mt-3">
              {[
                { icon: Bed, value: property.specs.beds, label: 'Beds' },
                { icon: Bath, value: property.specs.baths, label: 'Baths' },
                { icon: Square, value: formatNumber(property.specs.sqft), label: 'Sq Ft' },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-ivory/70">
                  <Icon size={12} />
                  <span className="text-[12px] font-body">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-display text-ivory text-xl font-normal mb-1 group-hover:text-gold transition-colors duration-200">
            {property.title}
          </h3>
          <div className="flex items-center gap-1 text-ivory/50">
            <MapPin size={11} />
            <span className="text-[12px] font-body">{property.location.neighborhood}, {property.location.city}</span>
          </div>

          <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/10">
            {[
              { icon: Bed, value: `${property.specs.beds} Beds` },
              { icon: Bath, value: `${property.specs.baths} Baths` },
              { icon: Square, value: `${formatNumber(property.specs.sqft)} sq ft` },
            ].map(({ icon: Icon, value }) => (
              <div key={value} className="flex items-center gap-1.5 text-ivory/40">
                <Icon size={11} />
                <span className="text-[11px] font-body tracking-wide">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

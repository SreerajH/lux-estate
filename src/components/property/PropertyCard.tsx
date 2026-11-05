'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { cn, formatNumber } from '@/lib/utils'
import type { Property } from '@/lib/properties'

interface PropertyCardProps {
  property: Property
  large?: boolean
  index?: number
  tone?: 'dark' | 'light'
  className?: string
}

export default function PropertyCard({ property, large = false, index, tone = 'dark', className }: PropertyCardProps) {
  const dark = tone === 'dark'

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn('group', className)}
    >
      <Link href={`/properties/${property.slug}`} className="block">
        <div className={cn('relative overflow-hidden', large ? 'aspect-[16/11]' : 'aspect-[4/5]', dark ? 'bg-char' : 'bg-sand')}>
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            sizes={large ? '(min-width: 1024px) 66vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'}
            className="object-cover transition-transform duration-[1600ms] ease-lux group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/40 via-transparent to-noir/20" />

          <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
            {property.tags[0] ? (
              <span className="text-[10px] tracking-[0.26em] uppercase text-bone bg-noir/35 backdrop-blur-md px-3 py-1.5">
                {property.tags[0]}
              </span>
            ) : (
              <span />
            )}
            {property.isExclusive && (
              <span className="text-[10px] tracking-[0.26em] uppercase text-noir bg-bone/90 px-3 py-1.5">Exclusive</span>
            )}
          </div>

          <span className="absolute bottom-5 right-5 w-11 h-11 rounded-full bg-bone text-noir flex items-center justify-center scale-75 opacity-0 transition-all duration-700 ease-lux group-hover:scale-100 group-hover:opacity-100">
            <ArrowUpRight size={16} strokeWidth={1.25} />
          </span>
        </div>

        <div className={cn('pt-6 border-b pb-6', dark ? 'border-white/10' : 'border-sand')}>
          <div className={cn('flex items-center justify-between text-[11px] tracking-[0.24em] uppercase', dark ? 'text-bone/45' : 'text-taupe')}>
            <span>
              {typeof index === 'number' && <span className={dark ? 'text-bronze-soft' : 'text-bronze'}>No. {String(index + 1).padStart(2, '0')} — </span>}
              {property.location.neighborhood}, {property.location.city}
            </span>
          </div>
          <div className="mt-3 flex items-baseline justify-between gap-6">
            <h3
              className={cn(
                'font-display leading-[1.1] transition-colors duration-500',
                large ? 'text-[clamp(28px,2.6vw,40px)]' : 'text-[26px]',
                dark ? 'text-bone group-hover:text-bronze-soft' : 'text-noir group-hover:text-bronze'
              )}
            >
              {property.title}
            </h3>
            <p className={cn('text-[16px] font-light tracking-[0.02em] whitespace-nowrap', dark ? 'text-bone/80' : 'text-noir/80')}>
              {property.priceDisplay}
            </p>
          </div>
          <p className={cn('mt-3 text-[13px] tracking-[0.06em]', dark ? 'text-bone/45' : 'text-taupe')}>
            {property.specs.beds} bedrooms <span className="mx-2 opacity-50">/</span> {property.specs.baths} baths
            <span className="mx-2 opacity-50">/</span> {formatNumber(property.specs.sqft)} sq ft
          </p>
        </div>
      </Link>
    </motion.article>
  )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Play } from 'lucide-react'
import PageHeader from '@/components/layout/PageHeader'
import { cn } from '@/lib/utils'

const FILTERS = ['All', 'Penthouse', 'Villa', 'Estate']

const TOURS = [
  { id: 't1', title: 'The Meridian Penthouse', location: 'Tribeca, New York', type: 'Penthouse', format: '3D walkthrough', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&auto=format&fit=crop&q=80', duration: '15 min', slug: 'meridian-penthouse-manhattan' },
  { id: 't2', title: 'Villa Solaris', location: 'Carbon Beach, Malibu', type: 'Villa', format: 'Film', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&auto=format&fit=crop&q=80', duration: '8 min', slug: 'villa-solaris-malibu' },
  { id: 't3', title: 'The Alpine Retreat', location: 'Red Mountain, Aspen', type: 'Estate', format: 'Live with advisor', image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1400&auto=format&fit=crop&q=80', duration: '20 min', slug: 'alpine-retreat-aspen' },
  { id: 't4', title: 'Château Blanc', location: 'Gin Lane, Southampton', type: 'Estate', format: '3D walkthrough', image: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=1400&auto=format&fit=crop&q=80', duration: '25 min', slug: 'chateau-blanc-hamptons' },
  { id: 't5', title: 'The Observatory', location: 'Pacific Heights, San Francisco', type: 'Penthouse', format: 'Film', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&auto=format&fit=crop&q=80', duration: '12 min', slug: 'the-observatory-sf' },
  { id: 't6', title: 'Ocean Manor', location: 'Palm Island, Miami Beach', type: 'Villa', format: 'Live with advisor', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&auto=format&fit=crop&q=80', duration: '18 min', slug: 'ocean-manor-miami' },
]

const FORMATS = [
  { name: '3D walkthrough', body: 'Move through every room at your own pace, measured to the centimetre.' },
  { name: 'Film', body: 'A cinematic portrait of the home, shot at golden hour by our in-house crew.' },
  { name: 'Live with advisor', body: 'Your advisor walks the residence with you over private video, answering as you go.' },
]

export default function VirtualToursPage() {
  const [filter, setFilter] = useState('All')
  const tours = filter === 'All' ? TOURS : TOURS.filter((t) => t.type === filter)

  return (
    <div className="bg-noir text-bone">
      <PageHeader
        eyebrow="Private Viewings"
        title={
          <>
            Walk the rooms, from <em className="text-bronze-soft">anywhere</em>
          </>
        }
        intro="Three ways to see a Velmont home before you travel — each available on request, and entirely in private."
      />

      <section className="max-w-[1600px] mx-auto px-5 md:px-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/10">
          {FORMATS.map((f, i) => (
            <div key={f.name} className={cn('py-8 md:py-10', i > 0 && 'md:pl-10 md:border-l border-t md:border-t-0 border-white/10', i < 2 && 'md:pr-10')}>
              <p className="text-[11px] tracking-[0.26em] text-bronze-soft mb-4">0{i + 1}</p>
              <p className="font-display text-[26px] mb-3">{f.name}</p>
              <p className="text-bone/50 text-[15px] leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-5 md:px-12 py-16 md:py-24">
        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-14">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                'relative text-[12px] tracking-[0.26em] uppercase font-medium pb-2 transition-colors duration-500',
                filter === f ? 'text-bone' : 'text-bone/40 hover:text-bone/75'
              )}
            >
              {f}
              {filter === f && <motion.span layoutId="tour-filter" className="absolute -bottom-1 left-0 right-0 h-px bg-bronze-soft" />}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {tours.map((t) => (
              <motion.article
                key={t.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <Link href={`/properties/${t.slug}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-char">
                    <Image src={t.image} alt={t.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-[1600ms] ease-lux group-hover:scale-105" />
                    <div className="absolute inset-0 bg-noir/25 group-hover:bg-noir/10 transition-colors duration-700" />
                    <span className="absolute inset-0 m-auto w-20 h-20 rounded-full border border-bone/60 backdrop-blur-sm bg-noir/10 flex items-center justify-center text-bone transition-all duration-700 ease-lux group-hover:scale-110 group-hover:bg-bone group-hover:text-noir">
                      <Play size={18} strokeWidth={1.25} className="ml-1" />
                    </span>
                    <span className="absolute top-5 left-5 text-[10px] tracking-[0.26em] uppercase bg-noir/40 backdrop-blur-md px-3 py-1.5">{t.format}</span>
                    <span className="absolute bottom-5 right-5 text-[12px] tracking-[0.16em] tabular-nums">{t.duration}</span>
                  </div>
                  <div className="pt-6 pb-6 border-b border-white/10 flex items-baseline justify-between gap-6">
                    <div>
                      <h3 className="font-display text-[28px] leading-tight group-hover:text-bronze-soft transition-colors duration-500">{t.title}</h3>
                      <p className="text-[13px] tracking-[0.06em] text-bone/45 mt-1">{t.location}</p>
                    </div>
                    <span className="text-[11px] tracking-[0.26em] uppercase text-bone/40 shrink-0">{t.type}</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  )
}

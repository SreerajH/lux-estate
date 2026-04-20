'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Maximize } from 'lucide-react'
import type { Metadata } from 'next'

const FILTERS = ['All', 'Penthouse', 'Villa', 'Estate', 'Commercial']

const TOURS = [
  {
    id: 't1',
    title: 'The Meridian Penthouse',
    location: 'Tribeca, New York',
    type: 'Penthouse',
    badge: 'MATTERPORT 3D',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop&q=80',
    duration: '15 min',
    slug: 'meridian-penthouse-manhattan',
  },
  {
    id: 't2',
    title: 'Villa Solaris',
    location: 'Carbon Beach, Malibu',
    type: 'Villa',
    badge: 'VIDEO WALKTHROUGH',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&auto=format&fit=crop&q=80',
    duration: '8 min',
    slug: 'villa-solaris-malibu',
  },
  {
    id: 't3',
    title: 'The Alpine Retreat',
    location: 'Red Mountain, Aspen',
    type: 'Estate',
    badge: 'LIVE TOUR AVAILABLE',
    image: 'https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?w=800&auto=format&fit=crop&q=80',
    duration: '20 min',
    slug: 'alpine-retreat-aspen',
  },
  {
    id: 't4',
    title: 'Château Blanc',
    location: 'Gin Lane, Southampton',
    type: 'Estate',
    badge: 'MATTERPORT 3D',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80',
    duration: '25 min',
    slug: 'chateau-blanc-hamptons',
  },
  {
    id: 't5',
    title: 'The Observatory',
    location: 'Pacific Heights, San Francisco',
    type: 'Penthouse',
    badge: 'VIDEO WALKTHROUGH',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop&q=80',
    duration: '12 min',
    slug: 'the-observatory-sf',
  },
  {
    id: 't6',
    title: 'Ocean Manor',
    location: 'Palm Island, Miami Beach',
    type: 'Villa',
    badge: 'LIVE TOUR AVAILABLE',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=80',
    duration: '18 min',
    slug: 'ocean-manor-miami',
  },
]

const BADGE_COLORS: Record<string, string> = {
  'MATTERPORT 3D': 'bg-gold text-obsidian',
  'VIDEO WALKTHROUGH': 'bg-graphite border border-gold/40 text-gold',
  'LIVE TOUR AVAILABLE': 'bg-green-900/80 border border-green-500/40 text-green-400',
}

export default function VirtualToursPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All' ? TOURS : TOURS.filter((t) => t.type === activeFilter)

  return (
    <div className="min-h-screen bg-obsidian pt-20">
      <div className="max-w-[1440px] mx-auto px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase font-body font-medium mb-3">Virtual Tours</p>
          <h1 className="font-display text-ivory font-light leading-tight mb-4" style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
            Experience Every Property<br />From Anywhere
          </h1>
          <p className="text-ivory/50 font-body text-base max-w-2xl leading-relaxed">
            Immersive 3D tours, cinematic video walkthroughs, and live guided sessions — available on demand, in absolute privacy.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2.5 text-[12px] tracking-[0.08em] uppercase font-body border transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-gold text-obsidian border-gold'
                  : 'border-white/20 text-ivory/60 hover:border-gold/50 hover:text-ivory'
              }`}
              style={{ borderRadius: '2px' }}
            >
              {f}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((tour, i) => (
              <motion.div
                key={tour.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative overflow-hidden bg-graphite"
                style={{ borderRadius: '4px' }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-obsidian/20 transition-all duration-300" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <Link
                      href={`/properties/${tour.slug}`}
                      className="w-16 h-16 rounded-full bg-gold/90 hover:bg-gold text-obsidian flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
                      aria-label={`Play tour for ${tour.title}`}
                    >
                      <Play size={24} fill="currentColor" className="ml-1" />
                    </Link>
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className={`text-[10px] tracking-[0.1em] uppercase font-body font-medium px-2 py-1 ${BADGE_COLORS[tour.badge] || 'bg-graphite text-ivory'}`} style={{ borderRadius: '2px' }}>
                      {tour.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-obsidian/70 text-ivory text-[11px] font-body px-2 py-1" style={{ borderRadius: '2px' }}>
                    {tour.duration}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-ivory text-xl font-normal mb-1 group-hover:text-gold transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-ivory/40 text-[12px] font-body">{tour.location}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                    <span className="text-ivory/30 text-[11px] tracking-[0.08em] uppercase font-body">{tour.type}</span>
                    <Link
                      href={`/properties/${tour.slug}`}
                      className="text-gold text-[11px] tracking-[0.08em] uppercase font-body hover:text-gold-light transition-colors flex items-center gap-1.5"
                    >
                      View Property →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  )
}

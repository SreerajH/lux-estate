import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import CollectionsClientWrapper from './CollectionsClientWrapper'

export const metadata: Metadata = {
  title: 'Collections | Luxe Estate',
  description: 'Explore our curated collections of the world\'s finest properties.',
}

const COLLECTIONS = [
  {
    id: 'oceanfront-villas',
    name: 'Oceanfront Villas',
    count: 24,
    description: 'Where land meets sea in perfect harmony. Our oceanfront collection features the most spectacular waterfront residences on the planet.',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1280&auto=format&fit=crop&q=80',
    color: '#1a2a4a',
  },
  {
    id: 'manhattan-penthouses',
    name: 'Manhattan Penthouses',
    count: 18,
    description: 'The pinnacle of urban living. Sky-high residences commanding the most iconic skyline views in the world.',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1280&auto=format&fit=crop&q=80',
    color: '#1a1a2a',
  },
  {
    id: 'alpine-retreats',
    name: 'Alpine Retreats',
    count: 12,
    description: 'Mountain sanctuaries of extraordinary beauty. Ski-in, ski-out estates where the silence of the mountains meets world-class luxury.',
    image: 'https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?w=1280&auto=format&fit=crop&q=80',
    color: '#1a2a1a',
  },
  {
    id: 'historic-estates',
    name: 'Historic Estates',
    count: 9,
    description: 'Properties of rare architectural pedigree. Landmark homes meticulously preserved and thoughtfully modernized.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1280&auto=format&fit=crop&q=80',
    color: '#2a1a1a',
  },
  {
    id: 'modern-masterpieces',
    name: 'Modern Masterpieces',
    count: 31,
    description: 'Architecture as art. Residences conceived by the world\'s most acclaimed architects — each a singular expression of contemporary living.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1280&auto=format&fit=crop&q=80',
    color: '#1a1a1a',
  },
]

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-obsidian pt-20">
      <div className="max-w-[1440px] mx-auto px-10 py-16">
        <div className="mb-16">
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase font-body font-medium mb-3">Our Collections</p>
          <h1 className="font-display text-ivory font-light leading-tight" style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
            Curated by Category,<br />Defined by Excellence
          </h1>
        </div>

        <CollectionsClientWrapper collections={COLLECTIONS} />
      </div>
    </div>
  )
}

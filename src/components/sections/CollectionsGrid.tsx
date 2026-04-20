'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const COLLECTIONS = [
  { name: 'Oceanfront Villas', count: 24, image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&auto=format&fit=crop&q=80', slug: 'oceanfront-villas' },
  { name: 'Manhattan Penthouses', count: 18, image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop&q=80', slug: 'manhattan-penthouses' },
  { name: 'Alpine Retreats', count: 12, image: 'https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?w=800&auto=format&fit=crop&q=80', slug: 'alpine-retreats' },
  { name: 'Historic Estates', count: 9, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80', slug: 'historic-estates' },
  { name: 'Modern Masterpieces', count: 31, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80', slug: 'modern-masterpieces' },
]

export default function CollectionsGrid() {
  return (
    <section className="bg-ivory py-[120px]">
      <div className="max-w-[1440px] mx-auto px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase font-body font-medium mb-3">Collections</p>
          <h2 className="font-display text-obsidian font-light leading-tight" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
            Curated by Category
          </h2>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {COLLECTIONS.map((col, i) => (
            <motion.div
              key={col.slug}
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 w-72 md:w-80"
            >
              <Link href={`/collections#${col.slug}`} className="group block relative overflow-hidden" style={{ height: '480px', borderRadius: '4px' }}>
                <Image
                  src={col.image}
                  alt={col.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent" />
                <div
                  className="absolute inset-0 bg-obsidian/30 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-gold text-[11px] tracking-[0.15em] uppercase font-body font-medium mb-2">
                    {col.count} Properties
                  </p>
                  <h3 className="font-display text-ivory font-light text-2xl leading-tight">
                    {col.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

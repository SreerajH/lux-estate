'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { COLLECTIONS } from '@/lib/properties'
import { cn } from '@/lib/utils'

export default function CollectionsGrid() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-travertine text-noir py-28 md:py-40">
      <div className="max-w-[1600px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-16 lg:gap-24 items-start">
          <div>
            <p className="eyebrow text-bronze mb-6">Collections</p>
            <h2 className="font-display text-[clamp(36px,4.2vw,64px)] leading-[1.02] tracking-[-0.02em] mb-14 md:mb-20 max-w-[16ch]">
              Five ways of living <em className="text-bronze">well</em>.
            </h2>

            <ul className="border-t border-sand">
              {COLLECTIONS.map((col, i) => (
                <li key={col.id} className="border-b border-sand">
                  <Link
                    href={`/collections#${col.id}`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group grid grid-cols-[48px_1fr_auto] items-baseline gap-4 py-6 md:py-7"
                  >
                    <span className={cn('text-[11px] tracking-[0.24em] transition-colors duration-500', active === i ? 'text-bronze' : 'text-taupe')}>
                      0{i + 1}
                    </span>
                    <span>
                      <span
                        className={cn(
                          'block font-display text-[clamp(26px,2.8vw,44px)] leading-none transition-all duration-700 ease-lux',
                          active === i ? 'text-noir translate-x-2 italic' : 'text-noir/45'
                        )}
                      >
                        {col.name}
                      </span>
                      <span
                        className={cn(
                          'block overflow-hidden transition-all duration-700 ease-lux text-[13px] tracking-[0.12em] uppercase text-taupe',
                          active === i ? 'max-h-10 mt-3 opacity-100 translate-x-2' : 'max-h-0 opacity-0'
                        )}
                      >
                        {col.region}
                      </span>
                    </span>
                    <span className="text-[12px] tracking-[0.16em] text-taupe tabular-nums">{col.count} homes</span>
                  </Link>
                  {/* inline image on small screens */}
                  <div className={cn('lg:hidden relative overflow-hidden transition-all duration-700 ease-lux', active === i ? 'h-64 mb-6' : 'h-0')}>
                    <Image src={col.image} alt={col.name} fill sizes="100vw" className="object-cover" />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block sticky top-28">
            <div className="relative aspect-[4/5] arch bg-sand">
              <AnimatePresence initial={false}>
                <motion.div
                  key={COLLECTIONS[active].id}
                  className="absolute inset-0"
                  initial={{ clipPath: 'inset(100% 0 0 0)' }}
                  animate={{ clipPath: 'inset(0% 0 0 0)' }}
                  exit={{ opacity: 0, transition: { duration: 0.6, delay: 0.5 } }}
                  transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
                >
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image src={COLLECTIONS[active].image} alt={COLLECTIONS[active].name} fill sizes="40vw" className="object-cover" />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={COLLECTIONS[active].id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5 }}
                className="mt-8 text-[15px] leading-relaxed text-stone max-w-md"
              >
                {COLLECTIONS[active].description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

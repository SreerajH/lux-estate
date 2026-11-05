'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { X, ArrowLeft, ArrowRight, Expand } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface PropertyGalleryProps {
  images: string[]
  title: string
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const prev = useCallback(() => setActive((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setActive((i) => (i + 1) % images.length), [images.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') setLightbox(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  return (
    <>
      <div className="relative h-[62svh] md:h-[82svh] min-h-[420px] overflow-hidden bg-char">
        <AnimatePresence initial={false}>
          <motion.div
            key={active}
            className="absolute inset-0"
            initial={{ clipPath: 'inset(0 0 0 100%)' }}
            animate={{ clipPath: 'inset(0 0 0 0%)' }}
            exit={{ opacity: 0.6, transition: { duration: 1 } }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          >
            <Image src={images[active]} alt={`${title} — view ${active + 1}`} fill priority sizes="100vw" className="object-cover" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-noir/50 via-transparent to-transparent pointer-events-none" />

        <div className="absolute bottom-6 md:bottom-10 inset-x-0 max-w-[1600px] mx-auto px-5 md:px-12 flex items-end justify-between text-bone">
          <div className="flex items-center gap-3">
            <button onClick={prev} aria-label="Previous image" className="w-12 h-12 rounded-full border border-bone/40 flex items-center justify-center hover:bg-bone hover:text-noir transition-colors duration-500">
              <ArrowLeft size={16} strokeWidth={1.25} />
            </button>
            <button onClick={next} aria-label="Next image" className="w-12 h-12 rounded-full border border-bone/40 flex items-center justify-center hover:bg-bone hover:text-noir transition-colors duration-500">
              <ArrowRight size={16} strokeWidth={1.25} />
            </button>
            <span className="ml-3 text-[12px] tracking-[0.24em] tabular-nums">
              0{active + 1} <span className="text-bone/40">/ 0{images.length}</span>
            </span>
          </div>
          <button onClick={() => setLightbox(true)} className="flex items-center gap-2 text-[11px] tracking-[0.26em] uppercase hover:text-bronze-soft transition-colors">
            <Expand size={14} strokeWidth={1.25} /> Full screen
          </button>
        </div>
      </div>

      <div className="bg-noir">
        <div className="max-w-[1600px] mx-auto px-5 md:px-12 py-4 flex gap-3 overflow-x-auto no-scrollbar">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              className={cn('relative shrink-0 w-28 md:w-36 aspect-[3/2] overflow-hidden transition-opacity duration-500', i === active ? 'opacity-100' : 'opacity-40 hover:opacity-80')}
            >
              <Image src={img} alt="" fill sizes="150px" className="object-cover" />
              {i === active && <span className="absolute inset-x-0 bottom-0 h-px bg-bronze-soft" />}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-noir/[0.97] flex items-center justify-center"
            onClick={() => setLightbox(false)}
          >
            <button className="absolute top-6 right-6 text-bone/70 hover:text-bone" aria-label="Close">
              <X size={28} strokeWidth={1} />
            </button>
            <div className="relative w-full max-w-6xl aspect-[16/10] mx-6" onClick={(e) => e.stopPropagation()}>
              <Image src={images[active]} alt={title} fill sizes="100vw" className="object-contain" />
            </div>
            <button onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-bone/60 hover:text-bone p-4" aria-label="Previous">
              <ArrowLeft size={28} strokeWidth={1} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-bone/60 hover:text-bone p-4" aria-label="Next">
              <ArrowRight size={28} strokeWidth={1} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface PropertyGalleryProps {
  images: string[]
  title: string
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setActiveIndex((i) => (i + 1) % images.length)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-2 h-[70vh] min-h-[500px]">
        <div className="relative overflow-hidden cursor-pointer" onClick={() => setLightboxOpen(true)}>
          <Image
            src={images[activeIndex]}
            alt={`${title} — image ${activeIndex + 1}`}
            fill
            priority
            className="object-cover transition-opacity duration-400"
          />
          <div className="absolute inset-0 bg-obsidian/0 hover:bg-obsidian/10 transition-all duration-300" />
          <button onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-4 top-1/2 -translate-y-1/2 bg-obsidian/60 hover:bg-obsidian/80 text-ivory p-2 transition-all" style={{ borderRadius: '2px' }} aria-label="Previous image">
            <ChevronLeft size={20} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-4 top-1/2 -translate-y-1/2 bg-obsidian/60 hover:bg-obsidian/80 text-ivory p-2 transition-all" style={{ borderRadius: '2px' }} aria-label="Next image">
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-4 right-4 bg-obsidian/70 text-ivory text-[11px] font-body px-3 py-1.5 tracking-wide" style={{ borderRadius: '2px' }}>
            {activeIndex + 1} / {images.length}
          </div>
        </div>

        <div className="hidden md:flex flex-col gap-2 overflow-y-auto">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative flex-shrink-0 cursor-pointer transition-all duration-200 ${i === activeIndex ? 'ring-2 ring-gold' : 'opacity-60 hover:opacity-100'}`}
              style={{ height: `calc((70vh - ${(images.length - 1) * 8}px) / ${images.length})`, minHeight: '80px' }}
              onClick={() => setActiveIndex(i)}
            >
              <Image src={img} alt={`${title} thumbnail ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-obsidian/98 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button className="absolute top-6 right-6 text-ivory/60 hover:text-ivory" aria-label="Close lightbox">
              <X size={28} />
            </button>
            <div className="relative w-full max-w-5xl aspect-[16/10] mx-8" onClick={(e) => e.stopPropagation()}>
              <Image src={images[activeIndex]} alt={title} fill className="object-contain" />
            </div>
            <button onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-6 top-1/2 -translate-y-1/2 text-ivory/60 hover:text-ivory p-4" aria-label="Previous">
              <ChevronLeft size={32} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-6 top-1/2 -translate-y-1/2 text-ivory/60 hover:text-ivory p-4" aria-label="Next">
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

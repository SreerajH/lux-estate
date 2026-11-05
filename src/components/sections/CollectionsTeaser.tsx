'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'

/**
 * The Aperture — an arched window that opens to full bleed as you scroll.
 * The arch is the site's architectural motif.
 */
export default function CollectionsTeaser() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  // window grows from a narrow arch to the full viewport
  const inset = useTransform(scrollYProgress, [0, 0.55], [30, 0])
  const insetY = useTransform(scrollYProgress, [0, 0.55], [14, 0])
  const radius = useTransform(scrollYProgress, [0, 0.5], [50, 0])
  const clip = useMotionTemplate`inset(${insetY}% ${inset}% 0% ${inset}% round ${radius}vw ${radius}vw 0 0)`
  const imgScale = useTransform(scrollYProgress, [0, 0.6], [1.25, 1])

  const preOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0])
  const postOpacity = useTransform(scrollYProgress, [0.5, 0.68], [0, 1])
  const postY = useTransform(scrollYProgress, [0.5, 0.7], [40, 0])
  const shade = useTransform(scrollYProgress, [0.25, 0.5], [0.1, 0.72])

  return (
    <section ref={ref} className="relative bg-bone" style={{ height: '260vh' }}>
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* intro copy, sits behind the arch */}
        <motion.div
          style={{ opacity: preOpacity }}
          className="absolute inset-x-0 top-[12vh] md:top-[10vh] z-0 text-center px-5 pointer-events-none"
        >
          <p className="eyebrow text-bronze">An Invitation</p>
        </motion.div>

        <motion.div className="absolute inset-0 z-10 bg-noir" style={{ clipPath: clip }}>
          <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=2400&auto=format&fit=crop&q=80"
              alt="Modern residence at night, lit from within"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div className="absolute inset-0 bg-noir" style={{ opacity: shade }} />
          <motion.div
            className="absolute inset-0"
            style={{ opacity: postOpacity, background: 'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(13,12,10,0.55), transparent 75%)' }}
          />
        </motion.div>

        <motion.div
          style={{ opacity: postOpacity, y: postY }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-bone px-5"
        >
          <p className="eyebrow text-bronze-soft mb-8">Off-market</p>
          <h2 className="font-display text-[clamp(38px,6vw,96px)] leading-[1.02] tracking-[-0.02em] max-w-[14ch]">
            Most of our homes are <em className="text-bronze-soft">never</em> listed.
          </h2>
          <p className="mt-8 max-w-md text-bone/85 text-[17px] leading-relaxed">
            Two in three of our sales happen privately, by introduction. Tell us what you are looking for, and we will tell you what exists.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn btn-light">Request private access</Link>
            <Link href="/collections" className="btn btn-ghost">Browse collections</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

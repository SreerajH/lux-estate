'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface PageHeaderProps {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  image?: string
  aside?: ReactNode
}

const ease = [0.16, 1, 0.3, 1] as const

export default function PageHeader({ eyebrow, title, intro, image, aside }: PageHeaderProps) {
  return (
    <header className={`relative bg-noir text-bone overflow-hidden ${image ? 'min-h-[78svh] flex items-end grain' : ''}`}>
      {image && (
        <>
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease }}
          >
            <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-noir/75 via-noir/35 to-noir" />
        </>
      )}
      <div className="relative w-full max-w-[1600px] mx-auto px-5 md:px-12 pt-40 md:pt-48 pb-16 md:pb-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease }}
              className="eyebrow text-bronze-soft mb-7 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-bronze-soft/70" />
              {eyebrow}
            </motion.p>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.3, delay: 0.3, ease }}
                className="font-display text-[clamp(44px,7vw,120px)] leading-[1.02] tracking-[-0.025em] max-w-[15ch] pb-[0.2em] -mb-[0.1em]"
              >
                {title}
              </motion.h1>
            </div>
          </div>
          {(intro || aside) && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease }}
              className="lg:max-w-sm lg:pb-3"
            >
              {intro && <p className="text-bone/60 text-[16px] leading-relaxed">{intro}</p>}
              {aside}
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}

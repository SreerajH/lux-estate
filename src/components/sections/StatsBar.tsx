'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { BRAND } from '@/lib/brand'

const STATS = [
  { value: 2.8, prefix: '$', suffix: 'B', label: 'In residences placed' },
  { value: 250, suffix: '+', label: 'Homes represented' },
  { value: 18, suffix: '', label: 'Years in private practice' },
  { value: 1, prefix: '<', suffix: '%', label: 'Of homes we are shown are accepted' },
]

const STATEMENT =
  'We are not a marketplace. We are a small private office that represents a short list of extraordinary homes — and the people who will live in them next.'

function Counter({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const decimals = target % 1 !== 0 ? 1 : 0

  useEffect(() => {
    if (!inView) return
    const duration = 2200
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      setCount(target * (1 - Math.pow(1 - p, 4)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  )
}

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.22, 1])
  const italic = word === 'extraordinary' || word === 'next.'
  return (
    <motion.span style={{ opacity }} className={italic ? 'text-bronze' : undefined}>
      {word}{' '}
    </motion.span>
  )
}

export default function StatsBar() {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 45%'] })
  const words = STATEMENT.split(' ')

  return (
    <section className="bg-bone text-noir py-28 md:py-40">
      <div className="max-w-[1600px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-16">
          <p className="eyebrow text-bronze pt-3">The House of {BRAND.name}</p>
          <p
            ref={ref}
            className="font-body font-light text-[clamp(24px,2.7vw,40px)] leading-[1.38] tracking-[-0.015em] max-w-[34ch]"
          >
            {words.map((w, i) => (
              <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
            ))}
          </p>
        </div>

        <div className="mt-24 md:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-px bg-sand border-y border-sand">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-bone pt-9 pb-9 pr-5 pl-5 md:pl-8 [&:nth-child(odd)]:pl-0 lg:[&:nth-child(odd)]:pl-8 lg:first:!pl-0"
            >
              <div
                className="font-body font-extralight text-[clamp(44px,4.6vw,68px)] leading-none tracking-[-0.03em] text-noir"
                
              >
                <Counter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="mt-4 text-[12px] tracking-[0.14em] uppercase text-taupe max-w-[18ch] leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

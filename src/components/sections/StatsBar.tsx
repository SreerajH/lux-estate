'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: 250, suffix: '+', label: 'Properties Sold' },
  { value: 2.8, prefix: '$', suffix: 'B', label: 'Total Value' },
  { value: 18, suffix: '', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Discretion Guaranteed' },
]

function Counter({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const start = Date.now()
    const animate = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(parseFloat((target * eased).toFixed(target % 1 !== 0 ? 1 : 0)))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, target])

  return (
    <span ref={ref}>
      {prefix}{target % 1 !== 0 ? count.toFixed(1) : Math.round(count)}{suffix}
    </span>
  )
}

export default function StatsBar() {
  return (
    <section className="bg-obsidian py-16">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/10">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center md:px-8"
            >
              <div className="font-display font-medium text-gold" style={{ fontSize: 'clamp(36px, 4vw, 48px)' }}>
                <Counter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="text-ivory/50 text-xs tracking-[0.1em] uppercase font-body mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

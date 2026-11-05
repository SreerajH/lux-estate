'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHeader from '@/components/layout/PageHeader'
import { AGENTS } from '@/lib/properties'
import { BRAND } from '@/lib/brand'

const PRINCIPLES = [
  { title: 'Discretion', body: 'We do not advertise our clients, our sales, or very often our homes. Confidentiality is the first thing we offer and the last thing we compromise.' },
  { title: 'Curation', body: 'We accept fewer than one in a hundred homes we are shown. A short list, represented properly, serves everyone better than a long one.' },
  { title: 'Intimacy', body: 'One advisor, one home. The person who shows you a residence has walked every room of it, at every hour of the day.' },
  { title: 'Access', body: 'Our finest homes rarely reach the open market. Two decades of relationships open doors that a listing never could.' },
]

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const },
}

export default function AboutPage() {
  return (
    <div className="bg-bone">
      <PageHeader
        eyebrow={`The House · Est. ${BRAND.established}`}
        title={
          <>
            Where architecture meets <em className="text-bronze-soft">legacy</em>
          </>
        }
        intro={`${BRAND.name} began with a single conviction: that the rarest homes deserve representation of equal calibre. We are not a marketplace. We are private counsel.`}
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&auto=format&fit=crop&q=80"
      />

      {/* philosophy */}
      <section className="max-w-[1600px] mx-auto px-5 md:px-12 py-24 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          <motion.div {...fade} className="lg:col-span-5">
            <div className="relative aspect-[3/4] arch bg-sand">
              <Image
                src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1400&auto=format&fit=crop&q=80"
                alt="Classical drawing room with coffered ceiling"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div {...fade} className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow text-bronze mb-8">Philosophy</p>
            <h2 className="font-display text-[clamp(34px,3.8vw,60px)] leading-[1.06] tracking-[-0.02em] text-noir mb-10">
              Less, but every detail <em className="text-bronze">intentional</em>.
            </h2>
            <div className="space-y-6 text-stone text-[17px] leading-[1.8] max-w-xl">
              <p>
                We represent fewer than 250 homes at any one time. This is by design. Each has been personally vetted, photographed and represented by an advisor who knows it intimately.
              </p>
              <p>
                Our clients include founders, architects, collectors and families whose history spans centuries. They come to us not for options, but for answers.
              </p>
            </div>
            <div className="mt-12 flex gap-14">
              <div>
                <p className="font-display text-[54px] leading-none text-noir">18</p>
                <p className="text-[11px] tracking-[0.22em] uppercase text-taupe mt-3">Years</p>
              </div>
              <div>
                <p className="font-display text-[54px] leading-none text-noir">$2.8B</p>
                <p className="text-[11px] tracking-[0.22em] uppercase text-taupe mt-3">Placed</p>
              </div>
              <div>
                <p className="font-display text-[54px] leading-none text-noir">3</p>
                <p className="text-[11px] tracking-[0.22em] uppercase text-taupe mt-3">Offices</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* principles */}
      <section className="bg-noir text-bone py-24 md:py-36">
        <div className="max-w-[1600px] mx-auto px-5 md:px-12">
          <motion.div {...fade} className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(38px,5vw,80px)] leading-[0.98] tracking-[-0.02em]">
              Four <em className="text-bronze-soft">principles</em>
            </h2>
            <p className="text-bone/50 max-w-sm text-[15px] leading-relaxed">Unchanged since the first home we represented.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.title}
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.1 }}
                className="pt-10 pb-6 lg:pr-10 lg:[&:not(:first-child)]:pl-10 lg:[&:not(:first-child)]:border-l border-white/10"
              >
                <p className="text-[11px] tracking-[0.26em] text-bronze-soft mb-10">0{i + 1}</p>
                <h3 className="font-display text-[34px] mb-5">{p.title}</h3>
                <p className="text-bone/55 text-[15px] leading-[1.8]">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* advisors */}
      <section id="advisors" className="scroll-mt-24 max-w-[1600px] mx-auto px-5 md:px-12 py-24 md:py-40">
        <motion.div {...fade} className="text-center mb-16 md:mb-24">
          <p className="eyebrow text-bronze mb-6">Your Private Advisors</p>
          <h2 className="font-display text-[clamp(38px,4.6vw,72px)] leading-[1] tracking-[-0.02em] text-noir">
            Three people. <em className="text-bronze">Every</em> room.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10">
          {AGENTS.map((a, i) => (
            <motion.div key={a.id} {...fade} transition={{ ...fade.transition, delay: i * 0.12 }} className={`group text-center ${i === 1 ? 'md:mt-20' : ''}`}>
              <div className="relative aspect-[3/4] arch bg-sand mb-8 max-w-[360px] mx-auto">
                <Image
                  src={a.photo}
                  alt={a.name}
                  fill
                  sizes="(min-width: 768px) 30vw, 90vw"
                  className="object-cover grayscale-[35%] group-hover:grayscale-0 transition-all duration-[1200ms] ease-lux group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="font-display text-[30px] text-noir leading-tight">{a.name}</h3>
              <p className="text-stone text-[14px] mt-2">{a.title}</p>
              <p className="text-[11px] tracking-[0.24em] uppercase text-bronze mt-4">{a.specialty}</p>
              <a href={`tel:${a.phone}`} className="inline-block mt-5 text-[14px] text-taupe hover:text-noir transition-colors">
                {a.phone}
              </a>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-20">
          <Link href="/contact" className="btn btn-dark">Speak with an advisor</Link>
        </div>
      </section>
    </div>
  )
}

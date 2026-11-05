import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/components/layout/PageHeader'
import { COLLECTIONS } from '@/lib/properties'
import { BRAND } from '@/lib/brand'

export const metadata: Metadata = {
  title: `Collections | ${BRAND.name}`,
  description: "Oceanfront villas, sky penthouses, alpine retreats, historic estates and modern masterpieces.",
}

export default function CollectionsPage() {
  return (
    <div className="bg-bone">
      <PageHeader
        eyebrow="Collections"
        title={
          <>
            Five ways of living <em className="text-bronze-soft">well</em>
          </>
        }
        intro="Our portfolio, gathered by the kind of life a home makes possible — rather than by postcode."
      />

      <div className="max-w-[1600px] mx-auto px-5 md:px-12 py-20 md:py-32 space-y-24 md:space-y-40">
        {COLLECTIONS.map((col, i) => {
          const flip = i % 2 === 1
          return (
            <section
              key={col.id}
              id={col.id}
              className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              <div className={`lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
                <div className={`relative overflow-hidden ${i % 3 === 0 ? 'aspect-[4/5] md:aspect-[5/4] arch' : 'aspect-[5/4]'} bg-sand group`}>
                  <Image
                    src={col.image}
                    alt={col.name}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover transition-transform duration-[2000ms] ease-lux group-hover:scale-105"
                  />
                </div>
              </div>
              <div className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
                <p className="text-[11px] tracking-[0.28em] uppercase text-bronze mb-6">
                  Collection 0{i + 1} <span className="text-taupe">— {col.count} homes</span>
                </p>
                <h2 className="font-display text-[clamp(38px,4.4vw,68px)] leading-[1] tracking-[-0.02em] text-noir mb-6">
                  {col.name}
                </h2>
                <p className="text-[12px] tracking-[0.18em] uppercase text-taupe mb-8">{col.region}</p>
                <p className="text-stone text-[17px] leading-[1.8] max-w-md mb-10">{col.description}</p>
                <Link href="/properties" className="link-draw text-[11px] tracking-[0.28em] uppercase text-noir">
                  View the collection <span aria-hidden>→</span>
                </Link>
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

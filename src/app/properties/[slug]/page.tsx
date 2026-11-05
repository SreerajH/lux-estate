import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PropertyGallery from '@/components/property/PropertyGallery'
import PropertyCard from '@/components/property/PropertyCard'
import { getPropertyBySlug, getRelatedProperties, PROPERTIES } from '@/lib/properties'
import { formatNumber } from '@/lib/utils'
import { BRAND } from '@/lib/brand'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return PROPERTIES.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const property = getPropertyBySlug(slug)
  if (!property) return {}
  return {
    title: `${property.title}, ${property.location.city} | ${BRAND.name}`,
    description: property.description.slice(0, 160),
  }
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug } = await params
  const property = getPropertyBySlug(slug)
  if (!property) notFound()

  const related = getRelatedProperties(property.id, property.type)
  const fallbackRelated = related.length ? related : PROPERTIES.filter((p) => p.id !== property.id).slice(0, 3)

  const specs = [
    { label: 'Bedrooms', value: String(property.specs.beds) },
    { label: 'Bathrooms', value: String(property.specs.baths) },
    { label: 'Interior', value: `${formatNumber(property.specs.sqft)} sq ft` },
    { label: 'Completed', value: String(property.specs.yearBuilt) },
    ...(property.specs.garage ? [{ label: 'Garage', value: `${property.specs.garage} cars` }] : []),
  ]

  const [lead, ...rest] = property.description.split('. ')

  return (
    <div className="bg-bone">
      {/* title band */}
      <section className="bg-noir text-bone pt-36 md:pt-44 pb-12 md:pb-16">
        <div className="max-w-[1600px] mx-auto px-5 md:px-12">
          <nav className="text-[11px] tracking-[0.24em] uppercase text-bone/40 mb-10">
            <Link href="/properties" className="hover:text-bone transition-colors">Residences</Link>
            <span className="mx-3">/</span>
            <span className="text-bone/70">{property.location.city}</span>
          </nav>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <p className="eyebrow text-bronze-soft mb-5">
                {property.location.neighborhood} · {property.location.city}, {property.location.state}
                {property.isExclusive && <span className="text-bone/50"> — Exclusive to {BRAND.name}</span>}
              </p>
              <h1 className="font-display text-[clamp(44px,7vw,112px)] leading-[0.96] tracking-[-0.025em]">{property.title}</h1>
            </div>
            <div className="lg:text-right">
              <p className="text-[10px] tracking-[0.28em] uppercase text-bone/45 mb-2">{property.priceLabel}</p>
              <p className="font-display text-[clamp(30px,3vw,46px)] leading-none" style={{ fontVariationSettings: '"opsz" 96' }}>
                {property.priceDisplay}
              </p>
            </div>
          </div>
        </div>
      </section>

      <PropertyGallery images={property.images} title={property.title} />

      {/* specs rule */}
      <div className="border-b border-sand">
        <div className="max-w-[1600px] mx-auto px-5 md:px-12 grid grid-cols-2 md:grid-cols-5 gap-px bg-sand">
          {specs.map((s) => (
            <div key={s.label} className="bg-bone py-8 pr-4 md:px-8 md:first:pl-0">
              <p className="text-[10px] tracking-[0.28em] uppercase text-taupe mb-2">{s.label}</p>
              <p className="font-display text-[26px] text-noir leading-none">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-5 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 lg:gap-28">
          <div>
            <p className="eyebrow text-bronze mb-8">The Residence</p>
            <p className="font-display text-[clamp(26px,2.6vw,40px)] leading-[1.25] text-noir mb-10 max-w-[30ch]">
              {lead}.
            </p>
            {rest.length > 0 && (
              <p className="text-stone text-[17px] leading-[1.8] max-w-2xl">
                {rest.join('. ')}
              </p>
            )}

            <div className="mt-20">
              <p className="eyebrow text-bronze mb-8">Particulars</p>
              <ol className="grid grid-cols-1 sm:grid-cols-2 border-t border-sand">
                {property.features.map((feat, i) => (
                  <li key={feat} className="flex items-baseline gap-5 py-5 border-b border-sand sm:odd:pr-8 sm:even:pl-8 sm:even:border-l">
                    <span className="text-[11px] tracking-[0.2em] text-taupe tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-display text-[20px] text-noir">{feat}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-20 relative overflow-hidden bg-loden text-bone p-10 md:p-14">
              <p className="eyebrow text-bronze-soft mb-5">Private viewing</p>
              <p className="font-display text-[clamp(28px,2.8vw,40px)] leading-[1.15] max-w-[22ch] mb-8">
                See {property.title} in person, or walk it with your advisor by live video.
              </p>
              <Link href="/contact" className="btn btn-light">Arrange a viewing</Link>
            </div>
          </div>

          <aside>
            <div className="lg:sticky lg:top-28 bg-noir text-bone p-8 md:p-10">
              <p className="eyebrow text-bronze-soft mb-8">Your Advisor</p>
              <div className="flex items-end gap-5 mb-8">
                <div className="relative w-24 aspect-[3/4] arch shrink-0 bg-char">
                  <Image src={property.agent.photo} alt={property.agent.name} fill sizes="100px" className="object-cover" />
                </div>
                <div>
                  <p className="font-display text-[24px] leading-tight">{property.agent.name}</p>
                  <p className="text-[12px] text-bone/50 mt-1">{property.agent.title}</p>
                </div>
              </div>
              <div className="space-y-2 text-[14px] border-t border-white/10 pt-6 mb-8">
                <a href={`tel:${property.agent.phone}`} className="block text-bone/80 hover:text-bronze-soft transition-colors">{property.agent.phone}</a>
                <a href={`mailto:${property.agent.email}`} className="block text-bone/50 hover:text-bronze-soft transition-colors">{property.agent.email}</a>
              </div>
              <form className="space-y-6">
                <input className="field text-bone" placeholder="Your name" aria-label="Your name" />
                <input className="field text-bone" type="email" placeholder="Email" aria-label="Email" />
                <textarea
                  className="field text-bone resize-none"
                  rows={2}
                  aria-label="Message"
                  defaultValue={`I would like to know more about ${property.title}.`}
                />
                <Link href="/contact" className="btn btn-light w-full">Request details</Link>
              </form>
            </div>
          </aside>
        </div>
      </div>

      <section className="bg-travertine py-20 md:py-28">
        <div className="max-w-[1600px] mx-auto px-5 md:px-12">
          <div className="flex items-end justify-between mb-14">
            <h2 className="font-display text-[clamp(32px,3.4vw,52px)] text-noir leading-none">
              You may also <em className="text-bronze">consider</em>
            </h2>
            <Link href="/properties" className="link-draw text-[11px] tracking-[0.28em] uppercase text-noir">
              All residences →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14">
            {fallbackRelated.map((p) => (
              <PropertyCard key={p.id} property={p} tone="light" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

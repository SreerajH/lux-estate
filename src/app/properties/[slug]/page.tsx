import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Bed, Bath, Square, Calendar, Car, Droplets, Eye } from 'lucide-react'
import PropertyGallery from '@/components/property/PropertyGallery'
import PropertyCard from '@/components/property/PropertyCard'
import { getPropertyBySlug, getRelatedProperties, PROPERTIES } from '@/lib/properties'
import { formatNumber as fmtNum } from '@/lib/utils'

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
    title: `${property.title} | Luxe Estate`,
    description: property.description.slice(0, 160),
  }
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug } = await params
  const property = getPropertyBySlug(slug)
  if (!property) notFound()

  const related = getRelatedProperties(property.id, property.type)

  const specs = [
    { icon: Bed, label: 'Bedrooms', value: String(property.specs.beds) },
    { icon: Bath, label: 'Bathrooms', value: String(property.specs.baths) },
    { icon: Square, label: 'Square Feet', value: fmtNum(property.specs.sqft) },
    { icon: Calendar, label: 'Year Built', value: String(property.specs.yearBuilt) },
    ...(property.specs.garage ? [{ icon: Car, label: 'Garage', value: `${property.specs.garage} Cars` }] : []),
    ...(property.specs.pool ? [{ icon: Droplets, label: 'Pool', value: 'Yes' }] : []),
    ...(property.specs.oceanView ? [{ icon: Eye, label: 'Ocean View', value: 'Yes' }] : []),
  ]

  return (
    <div className="min-h-screen bg-ivory">
      <div className="pt-20">
        <PropertyGallery images={property.images} title={property.title} />

        <div className="max-w-[1440px] mx-auto px-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {property.tags.map((tag) => (
                  <span key={tag} className="bg-gold text-obsidian text-[10px] tracking-[0.1em] uppercase font-body font-medium px-3 py-1.5" style={{ borderRadius: '2px' }}>
                    {tag}
                  </span>
                ))}
                {property.isExclusive && (
                  <span className="border border-gold text-gold text-[10px] tracking-[0.1em] uppercase font-body font-medium px-3 py-1.5" style={{ borderRadius: '2px' }}>
                    Exclusive
                  </span>
                )}
              </div>

              <h1 className="font-display text-obsidian font-light leading-tight mb-3" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
                {property.title}
              </h1>
              <div className="flex items-center gap-1.5 text-slate mb-4">
                <MapPin size={14} className="text-gold" />
                <span className="font-body text-base">{property.location.neighborhood}, {property.location.city}, {property.location.state}</span>
              </div>
              <div className="mb-10">
                <p className="text-slate/50 text-[11px] tracking-[0.1em] uppercase font-body mb-1">{property.priceLabel}</p>
                <p className="font-display text-obsidian font-semibold" style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}>
                  {property.priceDisplay}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-6 bg-mist mb-10" style={{ borderRadius: '4px' }}>
                {specs.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="text-center">
                    <Icon size={18} className="text-gold mx-auto mb-2" />
                    <p className="text-obsidian font-body font-medium text-sm">{value}</p>
                    <p className="text-slate/50 text-[10px] tracking-[0.08em] uppercase font-body">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mb-10">
                <h2 className="font-display text-obsidian text-2xl font-medium mb-4">About This Property</h2>
                <p className="text-slate font-body leading-relaxed text-base">{property.description}</p>
              </div>

              <div className="mb-10">
                <h2 className="font-display text-obsidian text-2xl font-medium mb-6">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      <span className="text-slate font-body text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {property.videoTourUrl && (
                <div className="mb-10">
                  <h2 className="font-display text-obsidian text-2xl font-medium mb-6">Virtual Tour</h2>
                  <div className="relative aspect-video bg-obsidian" style={{ borderRadius: '4px', overflow: 'hidden' }}>
                    <iframe
                      src={property.videoTourUrl}
                      title={`${property.title} virtual tour`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <div className="sticky top-28">
                <div className="bg-obsidian p-8" style={{ borderRadius: '4px', boxShadow: 'var(--shadow-gold)' }}>
                  <h3 className="font-display text-ivory text-xl font-light mb-6">Request Information</h3>
                  <div className="space-y-4">
                    {['Full Name', 'Email Address', 'Phone Number'].map((label) => (
                      <div key={label}>
                        <label className="block text-ivory/40 text-[10px] tracking-[0.1em] uppercase font-body mb-1.5">{label}</label>
                        <input
                          type="text"
                          className="w-full bg-graphite border border-white/10 text-ivory text-sm font-body px-4 py-2.5 focus:outline-none focus:border-gold/50 placeholder-ivory/20"
                          style={{ borderRadius: '2px' }}
                          placeholder={label}
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-ivory/40 text-[10px] tracking-[0.1em] uppercase font-body mb-1.5">Message</label>
                      <textarea
                        rows={3}
                        className="w-full bg-graphite border border-white/10 text-ivory text-sm font-body px-4 py-2.5 focus:outline-none focus:border-gold/50 placeholder-ivory/20 resize-none"
                        style={{ borderRadius: '2px' }}
                        placeholder="I am interested in this property..."
                      />
                    </div>
                    <button
                      className="w-full py-3.5 bg-gold text-obsidian text-[12px] tracking-[0.1em] uppercase font-body font-medium hover:bg-gold-light transition-colors"
                      style={{ borderRadius: '2px' }}
                    >
                      Send Enquiry →
                    </button>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-ivory/30 text-[10px] tracking-[0.08em] uppercase font-body mb-3">Your Agent</p>
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <Image src={property.agent.photo} alt={property.agent.name} fill className="object-cover rounded-full" />
                      </div>
                      <div>
                        <p className="text-ivory text-sm font-body font-medium">{property.agent.name}</p>
                        <p className="text-ivory/40 text-[11px] font-body">{property.agent.specialty}</p>
                      </div>
                    </div>
                    <a href={`tel:${property.agent.phone}`} className="block mt-3 text-gold text-sm font-body hover:text-gold-light transition-colors">
                      {property.agent.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-20">
              <div className="flex items-center justify-between mb-10">
                <h2 className="font-display text-obsidian text-3xl font-light">Similar Properties</h2>
                <Link href="/properties" className="text-gold text-[12px] tracking-[0.1em] uppercase font-body border-b border-gold/40 hover:border-gold pb-1 transition-colors">
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((p) => <PropertyCard key={p.id} property={p} />)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

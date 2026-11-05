'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import PropertyCard from '@/components/property/PropertyCard'
import PropertyFilters, { DEFAULT_FILTERS, type Filters } from '@/components/property/PropertyFilters'
import PageHeader from '@/components/layout/PageHeader'
import { PROPERTIES } from '@/lib/properties'

export default function PropertiesPage() {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS)
  const [sortBy, setSortBy] = useState('Featured')

  const filtered = useMemo(() => {
    let result = [...PROPERTIES]
    if (filters.location) result = result.filter((p) => p.location.city === filters.location)
    if (filters.type) result = result.filter((p) => p.type === filters.type.toLowerCase())
    if (filters.beds && filters.beds !== 'Any') {
      const min = parseInt(filters.beds)
      result = result.filter((p) => p.specs.beds >= min)
    }
    result = result.filter((p) => p.price >= filters.minPrice && p.price <= filters.maxPrice)
    if (sortBy === 'Price: high to low') result.sort((a, b) => b.price - a.price)
    else if (sortBy === 'Price: low to high') result.sort((a, b) => a.price - b.price)
    return result
  }, [filters, sortBy])

  return (
    <div className="bg-bone min-h-screen">
      <PageHeader
        eyebrow="Residences"
        title={
          <>
            Homes, <em className="text-bronze-soft">awaiting</em> their next chapter
          </>
        }
        intro="A considered portfolio across five markets. Every residence below has been visited in person by the advisor who represents it."
      />

      <PropertyFilters
        filters={filters}
        onChange={setFilters}
        resultCount={filtered.length}
        totalCount={PROPERTIES.length}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <div className="max-w-[1600px] mx-auto px-5 md:px-12 py-20 md:py-28">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-display text-noir text-[40px] mb-4">Nothing listed — yet.</p>
            <p className="text-taupe mb-10">Many of our homes are offered privately. Tell us what you are looking for.</p>
            <Link href="/contact" className="btn btn-dark">Make a private enquiry</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filtered.map((property, i) => (
              <PropertyCard key={property.id} property={property} index={i} tone="light" className={i % 3 === 1 ? 'lg:mt-20' : ''} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

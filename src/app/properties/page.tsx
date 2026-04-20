'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import PropertyCard from '@/components/property/PropertyCard'
import PropertyFilters from '@/components/property/PropertyFilters'
import { PROPERTIES } from '@/lib/properties'

interface Filters {
  location: string
  minPrice: number
  maxPrice: number
  beds: string
  type: string
}

const DEFAULT_FILTERS: Filters = {
  location: '',
  minPrice: 0,
  maxPrice: 50000000,
  beds: 'Any',
  type: '',
}

export default function PropertiesPage() {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS)
  const [sortBy, setSortBy] = useState('Newest First')

  const filtered = useMemo(() => {
    let result = [...PROPERTIES]

    if (filters.location) {
      result = result.filter(
        (p) => p.location.city.toLowerCase().includes(filters.location.toLowerCase()) ||
          p.location.state.toLowerCase().includes(filters.location.toLowerCase())
      )
    }
    if (filters.type) {
      result = result.filter((p) => p.type === filters.type.toLowerCase())
    }
    if (filters.beds && filters.beds !== 'Any') {
      const minBeds = parseInt(filters.beds)
      result = result.filter((p) => p.specs.beds >= minBeds)
    }
    result = result.filter((p) => p.price >= filters.minPrice && p.price <= filters.maxPrice)

    if (sortBy === 'Price: High to Low') result.sort((a, b) => b.price - a.price)
    else if (sortBy === 'Price: Low to High') result.sort((a, b) => a.price - b.price)

    return result
  }, [filters, sortBy])

  return (
    <div className="min-h-screen bg-obsidian">
      <div className="pt-20">
        <div className="max-w-[1440px] mx-auto px-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-[11px] tracking-[0.3em] uppercase font-body font-medium mb-3">All Properties</p>
            <h1 className="font-display text-ivory font-light leading-tight" style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
              Extraordinary Estates,<br />Awaiting Discovery
            </h1>
          </motion.div>
        </div>

        <PropertyFilters
          filters={filters}
          onChange={setFilters}
          resultCount={filtered.length}
          totalCount={PROPERTIES.length}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <div className="max-w-[1440px] mx-auto px-10 py-16">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-display text-ivory/40 text-3xl font-light mb-4">No properties found</p>
              <p className="text-ivory/30 font-body text-sm">Try adjusting your filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { ChevronDown, Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Filters {
  location: string
  minPrice: number
  maxPrice: number
  beds: string
  type: string
}

interface PropertyFiltersProps {
  filters: Filters
  onChange: (filters: Filters) => void
  resultCount: number
  totalCount: number
  sortBy: string
  onSortChange: (sort: string) => void
}

const LOCATIONS = ['All Locations', 'New York', 'Los Angeles', 'Miami', 'San Francisco', 'Aspen', 'The Hamptons']
const BEDS = ['Any', '2+', '3+', '4+', '5+', '6+']
const TYPES = ['All Types', 'Penthouse', 'Villa', 'Estate', 'Townhouse']
const SORTS = ['Newest First', 'Price: High to Low', 'Price: Low to High', 'Most Viewed']

export default function PropertyFilters({ filters, onChange, resultCount, totalCount, sortBy, onSortChange }: PropertyFiltersProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggle = (name: string) => setOpenDropdown(openDropdown === name ? null : name)

  const activeChips: { label: string; key: keyof Filters }[] = []
  if (filters.location) activeChips.push({ label: filters.location, key: 'location' })
  if (filters.beds !== 'Any' && filters.beds) activeChips.push({ label: `${filters.beds} Beds`, key: 'beds' })
  if (filters.type) activeChips.push({ label: filters.type, key: 'type' })

  const removeFilter = (key: keyof Filters) => {
    const defaults: Partial<Filters> = { location: '', beds: 'Any', type: '', minPrice: 0, maxPrice: 50000000 }
    onChange({ ...filters, [key]: defaults[key] ?? '' })
  }

  return (
    <div className="sticky top-20 z-40 bg-obsidian/95 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-10 py-4">
        <div className="flex flex-wrap items-center gap-3">
          {[
            {
              name: 'location', label: filters.location || 'Location',
              options: LOCATIONS,
              onSelect: (v: string) => onChange({ ...filters, location: v === 'All Locations' ? '' : v }),
            },
            {
              name: 'beds', label: filters.beds === 'Any' || !filters.beds ? 'Beds' : `${filters.beds} Beds`,
              options: BEDS,
              onSelect: (v: string) => onChange({ ...filters, beds: v }),
            },
            {
              name: 'type', label: filters.type || 'Property Type',
              options: TYPES,
              onSelect: (v: string) => onChange({ ...filters, type: v === 'All Types' ? '' : v }),
            },
          ].map((dd) => (
            <div key={dd.name} className="relative">
              <button
                onClick={() => toggle(dd.name)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2.5 border text-[12px] tracking-[0.08em] uppercase font-body transition-all duration-200',
                  openDropdown === dd.name
                    ? 'border-gold text-gold bg-gold/5'
                    : 'border-white/20 text-ivory/70 hover:border-white/40 hover:text-ivory'
                )}
                style={{ borderRadius: '2px' }}
              >
                {dd.label}
                <ChevronDown size={12} className={cn('transition-transform duration-200', openDropdown === dd.name && 'rotate-180')} />
              </button>

              {openDropdown === dd.name && (
                <div
                  className="absolute top-full left-0 mt-2 min-w-[180px] bg-graphite/95 backdrop-blur-xl border border-gold/20 z-50 py-2"
                  style={{ borderRadius: '4px', boxShadow: 'var(--shadow-card-hover)' }}
                >
                  {dd.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { dd.onSelect(opt); setOpenDropdown(null) }}
                      className="w-full text-left px-4 py-2.5 text-ivory/70 text-[12px] font-body hover:text-gold hover:bg-white/5 transition-colors"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button
            className="flex items-center gap-2 px-6 py-2.5 bg-gold text-obsidian text-[12px] tracking-[0.08em] uppercase font-body font-medium hover:bg-gold-light transition-colors ml-auto"
            style={{ borderRadius: '2px' }}
          >
            <Search size={12} />
            Search
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex flex-wrap gap-2">
            {activeChips.map((chip) => (
              <span
                key={chip.key}
                className="flex items-center gap-1.5 px-3 py-1 bg-gold/10 border border-gold/30 text-gold text-[11px] tracking-wide font-body"
                style={{ borderRadius: '2px' }}
              >
                {chip.label}
                <button onClick={() => removeFilter(chip.key)} aria-label={`Remove ${chip.label} filter`}>
                  <X size={10} />
                </button>
              </span>
            ))}
            {activeChips.length > 0 && (
              <button
                onClick={() => onChange({ location: '', minPrice: 0, maxPrice: 50000000, beds: 'Any', type: '' })}
                className="text-ivory/40 text-[11px] font-body hover:text-ivory transition-colors ml-1"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-ivory/40 text-[11px] font-body tracking-wide">
              Showing {resultCount} of {totalCount} properties
            </span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-transparent border border-white/20 text-ivory/70 text-[11px] font-body px-3 py-1.5 focus:outline-none focus:border-gold/50 cursor-pointer"
              style={{ borderRadius: '2px' }}
            >
              {SORTS.map((s) => <option key={s} value={s} className="bg-graphite">{s}</option>)}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

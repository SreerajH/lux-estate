'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PROPERTIES } from '@/lib/properties'

export interface Filters {
  location: string
  minPrice: number
  maxPrice: number
  beds: string
  type: string
}

export const DEFAULT_FILTERS: Filters = { location: '', minPrice: 0, maxPrice: 50000000, beds: 'Any', type: '' }

interface PropertyFiltersProps {
  filters: Filters
  onChange: (filters: Filters) => void
  resultCount: number
  totalCount: number
  sortBy: string
  onSortChange: (sort: string) => void
}

const LOCATIONS = ['All locations', ...Array.from(new Set(PROPERTIES.map((p) => p.location.city)))]
const BEDS = ['Any', '4+', '5+', '6+', '7+']
const TYPES = ['All types', 'Penthouse', 'Villa', 'Estate']
export const SORTS = ['Featured', 'Price: high to low', 'Price: low to high']

export default function PropertyFilters({ filters, onChange, resultCount, totalCount, sortBy, onSortChange }: PropertyFiltersProps) {
  const [open, setOpen] = useState<string | null>(null)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (barRef.current && !barRef.current.contains(e.target as Node)) setOpen(null)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  const chips: { label: string; key: keyof Filters }[] = []
  if (filters.location) chips.push({ label: filters.location, key: 'location' })
  if (filters.beds && filters.beds !== 'Any') chips.push({ label: `${filters.beds} bedrooms`, key: 'beds' })
  if (filters.type) chips.push({ label: filters.type, key: 'type' })

  const dropdowns = [
    {
      name: 'location',
      label: 'Location',
      value: filters.location || 'Anywhere',
      options: LOCATIONS,
      onSelect: (v: string) => onChange({ ...filters, location: v === 'All locations' ? '' : v }),
    },
    {
      name: 'type',
      label: 'Residence',
      value: filters.type || 'All types',
      options: TYPES,
      onSelect: (v: string) => onChange({ ...filters, type: v === 'All types' ? '' : v }),
    },
    {
      name: 'beds',
      label: 'Bedrooms',
      value: filters.beds === 'Any' || !filters.beds ? 'Any' : filters.beds,
      options: BEDS,
      onSelect: (v: string) => onChange({ ...filters, beds: v }),
    },
    {
      name: 'sort',
      label: 'Order',
      value: sortBy,
      options: SORTS,
      onSelect: (v: string) => onSortChange(v),
    },
  ]

  return (
    <div ref={barRef} className="sticky top-[72px] z-30 bg-bone/90 backdrop-blur-xl border-b border-sand text-noir">
      <div className="max-w-[1600px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-[repeat(4,minmax(0,1fr))_auto] md:divide-x divide-sand">
          {dropdowns.map((dd) => (
            <div key={dd.name} className="relative">
              <button
                onClick={() => setOpen(open === dd.name ? null : dd.name)}
                aria-expanded={open === dd.name}
                className="w-full text-left py-4 md:px-6 md:first:pl-0 flex items-center justify-between gap-3 group"
              >
                <span>
                  <span className="block text-[10px] tracking-[0.26em] uppercase text-taupe">{dd.label}</span>
                  <span className="block font-display text-[19px] mt-0.5 group-hover:text-bronze transition-colors">{dd.value}</span>
                </span>
                <ChevronDown size={14} strokeWidth={1.25} className={cn('text-taupe transition-transform duration-300 mr-4 md:mr-0', open === dd.name && 'rotate-180')} />
              </button>
              {open === dd.name && (
                <div className="absolute top-full left-0 md:left-4 mt-px min-w-[220px] bg-bone border border-sand shadow-[0_30px_60px_-20px_rgba(13,12,10,0.25)] py-2 z-50">
                  {dd.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        dd.onSelect(opt)
                        setOpen(null)
                      }}
                      className={cn(
                        'w-full text-left px-5 py-2.5 text-[14px] hover:bg-travertine transition-colors',
                        opt === dd.value ? 'text-bronze' : 'text-stone'
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="hidden md:flex items-center pl-6 text-[11px] tracking-[0.22em] uppercase text-taupe whitespace-nowrap">
            {resultCount} of {totalCount}
          </div>
        </div>

        {chips.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pb-4 -mt-1">
            {chips.map((chip) => (
              <span key={chip.key} className="flex items-center gap-2 pl-3 pr-2 py-1 border border-sand text-[12px] text-stone">
                {chip.label}
                <button
                  onClick={() => onChange({ ...filters, [chip.key]: DEFAULT_FILTERS[chip.key] })}
                  aria-label={`Remove ${chip.label}`}
                  className="hover:text-bronze"
                >
                  <X size={12} strokeWidth={1.25} />
                </button>
              </span>
            ))}
            <button onClick={() => onChange(DEFAULT_FILTERS)} className="text-[12px] text-taupe hover:text-noir underline underline-offset-4 ml-2">
              Clear all
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

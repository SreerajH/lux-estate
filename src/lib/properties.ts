export interface Agent {
  id: string
  name: string
  title: string
  phone: string
  email: string
  photo: string
  specialty: string
}

export interface Property {
  id: string
  slug: string
  title: string
  location: {
    city: string
    state: string
    neighborhood: string
    coordinates: { lat: number; lng: number }
  }
  price: number
  priceDisplay: string
  priceLabel: string
  type: 'penthouse' | 'villa' | 'estate' | 'townhouse' | 'cottage'
  status: 'for-sale' | 'for-rent' | 'off-market' | 'sold'
  specs: {
    beds: number
    baths: number
    sqft: number
    yearBuilt: number
    garage?: number
    pool?: boolean
    oceanView?: boolean
  }
  images: string[]
  videoTourUrl?: string
  matterportUrl?: string
  description: string
  features: string[]
  agent: Agent
  tags: string[]
  isExclusive: boolean
  isFeatured: boolean
}

const AGENTS: Agent[] = [
  {
    id: 'a1',
    name: 'Victoria Ashworth',
    title: 'Senior Estate Director',
    phone: '+1 (212) 555-0191',
    email: 'v.ashworth@luxeestate.com',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80',
    specialty: 'Manhattan Penthouses',
  },
  {
    id: 'a2',
    name: 'Sebastian Harlow',
    title: 'Luxury Portfolio Advisor',
    phone: '+1 (310) 555-0147',
    email: 's.harlow@luxeestate.com',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    specialty: 'Coastal Villas & Estates',
  },
  {
    id: 'a3',
    name: 'Camille Laurent',
    title: 'International Property Specialist',
    phone: '+1 (415) 555-0183',
    email: 'c.laurent@luxeestate.com',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80',
    specialty: 'Alpine & Mountain Retreats',
  },
]

export const PROPERTIES: Property[] = [
  {
    id: 'p1',
    slug: 'meridian-penthouse-manhattan',
    title: 'The Meridian Penthouse',
    location: { city: 'New York', state: 'NY', neighborhood: 'Tribeca', coordinates: { lat: 40.7163, lng: -74.0086 } },
    price: 14250000,
    priceDisplay: '$14,250,000',
    priceLabel: 'Asking Price',
    type: 'penthouse',
    status: 'for-sale',
    specs: { beds: 5, baths: 6, sqft: 6800, yearBuilt: 2022, garage: 2, pool: true, oceanView: false },
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1280&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1280&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1280&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1280&auto=format&fit=crop&q=80',
    ],
    videoTourUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Perched atop one of Tribeca\'s most coveted addresses, The Meridian Penthouse is a masterwork of contemporary design. Six-bedroom, seven-bathroom residence spanning the entire top floor with 360-degree skyline views. Designed by Pritzker laureate architect, featuring hand-selected Italian marble, custom millwork, and a private rooftop terrace with heated pool.',
    features: ['Private rooftop terrace', 'Heated infinity pool', 'Chef\'s kitchen with La Cornue range', 'Home theater', 'Wine cellar', 'Private elevator', 'Smart home system', '24-hour concierge'],
    agent: AGENTS[0],
    tags: ['NEW LISTING', 'VIRTUAL TOUR'],
    isExclusive: true,
    isFeatured: true,
  },
  {
    id: 'p2',
    slug: 'villa-solaris-malibu',
    title: 'Villa Solaris',
    location: { city: 'Malibu', state: 'CA', neighborhood: 'Carbon Beach', coordinates: { lat: 34.0211, lng: -118.7798 } },
    price: 28500000,
    priceDisplay: '$28,500,000',
    priceLabel: 'Asking Price',
    type: 'villa',
    status: 'for-sale',
    specs: { beds: 7, baths: 9, sqft: 11200, yearBuilt: 2020, garage: 4, pool: true, oceanView: true },
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1280&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1280&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1280&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1280&auto=format&fit=crop&q=80',
    ],
    description: 'Set directly on Carbon Beach — Malibu\'s Billionaire\'s Row — Villa Solaris is the definitive expression of California luxury living. Seven bedrooms, nine bathrooms, over 11,000 square feet of indoor-outdoor living space with direct beach access and sweeping Pacific views from every room.',
    features: ['Direct beach access', 'Oceanfront infinity pool', 'Guest house', 'Professional gym', 'Outdoor kitchen & bar', 'Movie screening room', 'Smart home automation', 'Climate-controlled wine room'],
    agent: AGENTS[1],
    tags: ['LAST UNIT'],
    isExclusive: true,
    isFeatured: true,
  },
  {
    id: 'p3',
    slug: 'chateau-blanc-hamptons',
    title: 'Château Blanc',
    location: { city: 'Southampton', state: 'NY', neighborhood: 'Gin Lane', coordinates: { lat: 40.8751, lng: -72.3938 } },
    price: 19800000,
    priceDisplay: '$19,800,000',
    priceLabel: 'Asking Price',
    type: 'estate',
    status: 'for-sale',
    specs: { beds: 8, baths: 10, sqft: 14500, yearBuilt: 1928, garage: 6, pool: true, oceanView: false },
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1280&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1280&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1280&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1280&auto=format&fit=crop&q=80',
    ],
    description: 'Originally constructed in 1928 by noted architect Stanford White, Château Blanc has been meticulously restored to its original grandeur while incorporating every modern amenity. Set on 4.2 acres of manicured grounds on the prestigious Gin Lane.',
    features: ['Historic landmark designation', 'Formal gardens', 'Tennis court', 'Carriage house', 'Original hardwood floors', 'Formal dining room', 'Library with fireplace', 'Staff quarters'],
    agent: AGENTS[0],
    tags: ['HISTORIC'],
    isExclusive: false,
    isFeatured: true,
  },
  {
    id: 'p4',
    slug: 'alpine-retreat-aspen',
    title: 'The Alpine Retreat',
    location: { city: 'Aspen', state: 'CO', neighborhood: 'Red Mountain', coordinates: { lat: 39.1911, lng: -106.8175 } },
    price: 32000000,
    priceDisplay: '$32,000,000',
    priceLabel: 'Asking Price',
    type: 'estate',
    status: 'for-sale',
    specs: { beds: 6, baths: 8, sqft: 9800, yearBuilt: 2019, garage: 3, pool: false, oceanView: false },
    images: [
      'https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?w=1280&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1280&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1280&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1280&auto=format&fit=crop&q=80',
    ],
    description: 'Perched on Red Mountain with direct ski access and 270-degree views of the Elk Mountains, this contemporary masterpiece redefines mountain living. Designed by renowned architect David Adjaye, every room frames a breathtaking mountain panorama.',
    features: ['Ski-in/ski-out access', 'Indoor/outdoor heated pool', 'Mountain panorama views', 'Bespoke chef\'s kitchen', 'Home spa & sauna', 'Snowmelt driveway', 'Smart climate control', 'Helipad'],
    agent: AGENTS[2],
    tags: ['NEW LISTING', 'VIRTUAL TOUR'],
    isExclusive: true,
    isFeatured: true,
  },
  {
    id: 'p5',
    slug: 'ocean-manor-miami',
    title: 'Ocean Manor',
    location: { city: 'Miami Beach', state: 'FL', neighborhood: 'Palm Island', coordinates: { lat: 25.8023, lng: -80.1594 } },
    price: 22750000,
    priceDisplay: '$22,750,000',
    priceLabel: 'Asking Price',
    type: 'villa',
    status: 'for-sale',
    specs: { beds: 6, baths: 7, sqft: 8900, yearBuilt: 2021, garage: 4, pool: true, oceanView: true },
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1280&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1280&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1280&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1280&auto=format&fit=crop&q=80',
    ],
    description: 'An extraordinary waterfront estate on exclusive Palm Island, Ocean Manor offers 120 feet of direct Biscayne Bay frontage. The contemporary residence was designed by the award-winning firm Arquitectonica with interiors by Kelly Wearstler.',
    features: ['120ft water frontage', 'Private deep-water dock', 'Resort-style pool', 'Outdoor entertainment pavilion', 'Smart home technology', 'Impact-resistant windows', 'Generator', 'Elevator'],
    agent: AGENTS[1],
    tags: ['PRICE REDUCED'],
    isExclusive: false,
    isFeatured: false,
  },
  {
    id: 'p6',
    slug: 'the-observatory-sf',
    title: 'The Observatory',
    location: { city: 'San Francisco', state: 'CA', neighborhood: 'Pacific Heights', coordinates: { lat: 37.7925, lng: -122.4382 } },
    price: 11500000,
    priceDisplay: '$11,500,000',
    priceLabel: 'Asking Price',
    type: 'penthouse',
    status: 'for-sale',
    specs: { beds: 4, baths: 4, sqft: 5200, yearBuilt: 2018, garage: 2, pool: false, oceanView: false },
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1280&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1280&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1280&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1280&auto=format&fit=crop&q=80',
    ],
    description: 'Commanding panoramic views of the Golden Gate Bridge, Alcatraz, and the Bay, The Observatory is Pacific Heights\' most coveted penthouse. Four bedrooms, four bathrooms across a single floor with a wrap-around terrace and private rooftop observatory dome.',
    features: ['Panoramic bay views', 'Private rooftop observatory', 'Chef\'s kitchen', 'Wine cellar', 'Smart home automation', 'Heated floors', 'Private parking', 'Concierge services'],
    agent: AGENTS[2],
    tags: ['VIRTUAL TOUR'],
    isExclusive: false,
    isFeatured: false,
  },
]

export function getPropertyBySlug(slug: string): Property | undefined {
  return PROPERTIES.find((p) => p.slug === slug)
}

export function getFeaturedProperties(): Property[] {
  return PROPERTIES.filter((p) => p.isFeatured)
}

export function getRelatedProperties(currentId: string, type: string): Property[] {
  return PROPERTIES.filter((p) => p.id !== currentId && p.type === type).slice(0, 3)
}

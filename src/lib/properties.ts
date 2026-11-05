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

export const AGENTS: Agent[] = [
  {
    id: 'a1',
    name: 'Victoria Ashworth',
    title: 'Senior Estate Director',
    phone: '+1 (212) 555-0191',
    email: 'v.ashworth@velmont.com',
    photo: '/project/victoria-ashworth.jpg',
    specialty: 'Manhattan Penthouses',
  },
  {
    id: 'a2',
    name: 'Sebastian Harlow',
    title: 'Luxury Portfolio Advisor',
    phone: '+1 (310) 555-0147',
    email: 's.harlow@velmont.com',
    photo: '/project/sebastian-harlow.jpg',
    specialty: 'Coastal Villas & Estates',
  },
  {
    id: 'a3',
    name: 'Camille Laurent',
    title: 'International Property Specialist',
    phone: '+1 (415) 555-0183',
    email: 'c.laurent@velmont.com',
    photo: '/project/camille-laurent.png',
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
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=1600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&auto=format&fit=crop&q=80',
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
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600&auto=format&fit=crop&q=80',
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
      'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=1600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&auto=format&fit=crop&q=80',
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
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1600&auto=format&fit=crop&q=80',
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
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=1600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&auto=format&fit=crop&q=80',
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
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&auto=format&fit=crop&q=80',
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

export interface Collection {
  id: string
  name: string
  count: number
  description: string
  image: string
  region: string
}

export const COLLECTIONS: Collection[] = [
  {
    id: 'oceanfront-villas',
    name: 'Oceanfront Villas',
    count: 24,
    region: 'Malibu · Miami · Amalfi',
    description: 'Where the land gives way to water. Residences with the tide at the threshold and nothing but horizon beyond the terrace.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'manhattan-penthouses',
    name: 'Sky Penthouses',
    count: 18,
    region: 'Tribeca · Pacific Heights',
    description: 'Full-floor residences above the city, where the skyline becomes the art collection and the elevator opens into the home.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'alpine-retreats',
    name: 'Alpine Retreats',
    count: 12,
    region: 'Aspen · Gstaad · Courchevel',
    description: 'Ski-in sanctuaries of stone, timber and silence — warm rooms framed by cold, enormous views.',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'historic-estates',
    name: 'Historic Estates',
    count: 9,
    region: 'The Hamptons · Cotswolds',
    description: 'Homes of rare architectural pedigree, restored with patience and quietly brought into the present century.',
    image: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'modern-masterpieces',
    name: 'Modern Masterpieces',
    count: 31,
    region: 'Los Angeles · Ibiza · Lisbon',
    description: 'Residences by the most acclaimed architects of our time — each a singular argument for how to live.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=80',
  },
]

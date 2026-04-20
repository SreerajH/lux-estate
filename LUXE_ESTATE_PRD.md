# LUXE ESTATE — Product Requirements Document
### Luxury Real Estate Website
**Version:** 1.0  
**Author:** Design Lead  
**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · shadcn/ui · Framer Motion · Three.js

---

## 1. Project Overview

**Luxe Estate** is a premium real estate platform targeting ultra-high-net-worth buyers and renters seeking exclusive properties. The site must communicate exclusivity, trust, and refinement through every pixel — from micro-interactions to whitespace ratios to typographic hierarchy.

> Design Philosophy: **"Less is more, but every detail is intentional."**  
> Think: Robb Report meets Apple meets a Swiss architectural firm.

---

## 2. Design System

### 2.1 Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-obsidian` | `#0A0A0B` | Primary backgrounds, hero dark |
| `--color-ivory` | `#F5F0E8` | Light backgrounds, cards |
| `--color-gold` | `#C9A96E` | Accents, CTAs, highlights |
| `--color-gold-light` | `#E8D5A3` | Hover states, borders |
| `--color-mist` | `#E8E4DC` | Dividers, subtle bg |
| `--color-slate` | `#4A4A52` | Body text |
| `--color-graphite` | `#1C1C22` | Card backgrounds |
| `--color-white` | `#FFFFFF` | Pure white text on dark |

### 2.2 Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Display / Hero | `Cormorant Garamond` | 300–400 | 72–120px |
| Heading | `Cormorant Garamond` | 500 | 32–56px |
| Subheading | `Inter` | 400 | 18–24px |
| Body | `Inter` | 400 | 14–16px |
| Label / Tag | `Inter` | 500 | 11–13px, tracked wide |
| Price / Feature | `Cormorant Garamond` | 600 | 28–40px |

**Google Fonts import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap');
```

### 2.3 Spacing Scale
- Base: `8px`
- Section padding: `120px` vertical (desktop), `60px` (mobile)
- Container max-width: `1440px` with `80px` side padding
- Card gap: `24px`

### 2.4 Border Radius
- Cards: `4px` (intentionally minimal — premium doesn't round corners)
- Buttons: `2px`
- Badges/Tags: `2px`
- Images: `0px` (full bleed feels luxurious)

### 2.5 Shadows
```css
--shadow-card: 0 4px 40px rgba(0,0,0,0.08);
--shadow-card-hover: 0 20px 60px rgba(0,0,0,0.15);
--shadow-gold: 0 0 40px rgba(201,169,110,0.15);
```

---

## 3. Site Architecture

```
/                          → Hero Landing
/properties                → All Listings (filterable)
/properties/[slug]         → Single Property Detail
/collections               → Curated Collections (Beachfront, Penthouse, etc.)
/virtual-tours             → 3D/Video Tour Hub
/about                     → Brand Story
/contact                   → Inquiry Form
```

---

## 4. Page-by-Page Specifications

---

### 4.1 Global Navigation

**Component:** Sticky transparent nav that transitions to solid on scroll.

**Layout:**
```
[LOGO: LUXE ESTATE]          [Properties] [Collections] [Virtual Tours] [About]          [Contact Us →]
```

**Behavior:**
- On load: `background: transparent`, white text, no border
- On scroll > 60px: `background: rgba(10,10,11,0.95)`, `backdrop-filter: blur(20px)`, gold bottom border `1px`
- Logo: `Cormorant Garamond` 500, letter-spacing `0.15em`, size `22px`
- Nav links: `Inter` 400, size `13px`, letter-spacing `0.08em`, uppercase
- CTA button: gold outlined with hover fill transition

**Mobile:** Hamburger → full-screen overlay menu with staggered text animation (Framer Motion)

---

### 4.2 Hero Section — `animated-hero` Component (21st.dev)

**Objective:** Cinematic first impression. Immersive, confident, silent luxury.

**Implementation:** Use the **animated-hero** component from document 1.

```tsx
// Hero cycling words (replace defaults)
const titles = ["Extraordinary", "Iconic", "Rare", "Timeless", "Unmatched"];

// Headline structure:
// "Discover something"
// [animated word]
```

**Customization for Luxe Estate:**
- Background: Full-viewport dark with a subtle parallax property image overlay at `opacity: 0.4`
- Headline: `Cormorant Garamond` 300, size `96px`, color `#F5F0E8`
- Animated word: gold `#C9A96E`, weight 500
- Subtext: `Inter` 400, `#E8E4DC` at `0.7` opacity
- CTAs: `"Browse Properties"` (gold fill) + `"Book a Private Tour"` (outline)
- Scroll indicator: Animated downward chevron, gold, pulses softly

**Ambient background effect:** Add `WebGLShader` component (document 3) at very low `opacity: 0.12` underneath the hero image for a subtle living background.

---

### 4.3 Scroll Expansion Feature Showcase — `scroll-expansion-hero` Component (21st.dev)

**Location:** After hero, before property listings — used as a **"Collections Teaser"** section.

**Implementation:** Use **ScrollExpandMedia** component from document 2.

**Configuration:**
```tsx
<ScrollExpandMedia
  mediaType="video"
  mediaSrc="[aerial-property-reel-video-url]"
  bgImageSrc="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920"
  title="Curated Estates"
  date="2024 Collection"
  scrollToExpand="Scroll to explore"
  textBlend
>
  {/* Featured collection cards appear after expansion */}
  <CollectionCards />
</ScrollExpandMedia>
```

**Unsplash image suggestions (confirmed existing):**
- Hero BG: `photo-1600596542815-ffad4c1539a9` (luxury villa exterior)
- BG fallback: `photo-1512917774080-9991f1c4c750` (modern mansion)
- Interior: `photo-1600607687939-ce8a6c25118c` (luxury interior)

**Text styling:**
- `"Curated"` → translates left on scroll (as per component behavior)
- `"Estates"` → translates right on scroll
- Font: `Cormorant Garamond`, size `clamp(3rem, 8vw, 7rem)`, color `#F5F0E8`

---

### 4.4 Stats Bar

**Layout:** Full-width dark strip, 4 stats horizontally.

```
[250+]              [$2.8B]              [18]              [100%]
Properties Sold     Total Value         Years Experience   Discretion Guaranteed
```

**Styling:**
- Background: `#0A0A0B`
- Number: `Cormorant Garamond` 500, 48px, `#C9A96E`
- Label: `Inter` 400, 12px, `#F5F0E8` at `0.5` opacity, letter-spacing `0.1em`, uppercase
- Animate numbers counting up using Framer Motion `useInView` + counter

---

### 4.5 Featured Listings Grid

**Layout:** 3-column asymmetric grid on desktop, 1-column on mobile.

**Card Component:**

```tsx
interface PropertyCard {
  id: string
  images: string[]          // min 3, auto-cycling on hover
  price: string             // "$4,250,000"
  priceLabel: string        // "Starting From" | "Asking Price"
  title: string             // "The Meridian Penthouse"
  location: string          // "Manhattan, New York"
  beds: number
  baths: number
  sqft: number
  tag?: string              // "NEW LISTING" | "VIRTUAL TOUR" | "LAST UNIT"
  isExclusive?: boolean
}
```

**Card Design:**
- Image: full-bleed, `aspect-ratio: 3/4` for portrait, hover scales to `1.04` with `transition: 600ms ease`
- On hover: gradient overlay rises from bottom with price + quick stats
- Tag badge: gold, `Inter` 500, 10px, absolute top-left with `8px` padding
- Price: `Cormorant Garamond` 600, 28px
- Title: `Cormorant Garamond` 400, 20px  
- Location: `Inter` 400, 12px, `opacity: 0.6`, with pin icon (lucide-react `MapPin`)
- Specs row: beds / baths / sqft with minimal lucide icons

**Grid layout:**
```
[Large Card — col span 2]    [Standard Card]
[Standard Card]              [Large Card — col span 2]
```
This creates visual rhythm and hierarchy.

---

### 4.6 Property Detail Page

**Hero:** Full-viewport image gallery with:
- Main image (70% width)
- Thumbnail strip right side (30% width, 4 images, scrollable)
- Floating action bar: `[Virtual Tour]  [Save]  [Share]  [Enquire →]`
- Price floating bottom-left with gold background pill

**Content Layout:**
```
[Gallery — full width hero]

[Property Title + Location + Price]        [Enquiry Form Card — sticky]
[Key Features Icons Row]                   [Agent Photo + Name]
[Description — 2 col on desktop]          [Schedule a Viewing]
[Floor Plan Section]                       [Similar Properties]
[Virtual Tour Embed — full width]
[Map Section]
[Similar Properties Carousel]
```

**Virtual Tour UI:**
- Embedded iframe (Matterport / YouTube 360) with custom overlay controls
- Full-screen toggle button
- Hotspot labels for rooms (custom SVG overlays)
- Loading state: skeleton with shimmer animation

---

### 4.7 WebGL Ambient Background — `web-gl-shader` Component (21st.dev)

**Implementation:** Use **WebGLShader** from document 3.

**Usage locations:**
1. Hero section — `opacity: 0.1`, beneath property image, above obsidian background
2. Contact page — full background at `opacity: 0.2` for atmospheric luxury feel

**Customization:**
```tsx
// Adjust uniforms for a slower, more elegant movement:
xScale: { value: 0.6 }    // Wider, slower waves
yScale: { value: 0.3 }    // Subtle amplitude
distortion: { value: 0.03 } // Minimal chromatic distortion
```

**Integration note:** Wrap in a `<div className="absolute inset-0 z-0 pointer-events-none">` and layer content above with `z-10`.

---

### 4.8 Collections Section

**Curated property types:**
- `Oceanfront Villas`
- `Manhattan Penthouses`
- `Alpine Retreats`
- `Historic Estates`
- `Modern Masterpieces`

**Layout:** Horizontal scrolling cards with parallax effect. Each card:
- Full-height image (`480px`)
- Collection name overlay: large `Cormorant Garamond`, bottom-left
- Property count: `Inter`, small, gold
- Hover: `scale(1.02)` + darken overlay slides down

---

### 4.9 Virtual Tours Hub

**Layout:** Magazine-style editorial grid.

**Features:**
- Filter by: `All` | `Penthouse` | `Villa` | `Estate` | `Commercial`
- Each card has a play button overlay (LiquidButton from 21st.dev)
- Tour type badges: `MATTERPORT 3D` | `VIDEO WALKTHROUGH` | `LIVE TOUR AVAILABLE`

**Video player:**
- Custom controls overlay (no native browser controls)
- Picture-in-picture support
- Fullscreen with animated transition

---

### 4.10 Filters & Search UI

**Location:** `/properties` page, sticky below nav.

**Filter bar:**
```
[Location ↓]  [Price Range ↓]  [Beds ↓]  [Property Type ↓]  [More Filters]    [  🔍 Search  ]
```

**Interaction:**
- Each filter opens a dropdown with glassmorphism panel: `backdrop-filter: blur(20px)`, `border: 1px solid rgba(201,169,110,0.2)`
- Price range: custom dual-handle slider, gold track
- Active filters show as dismissible gold chips below the bar
- Results count updates live: `"Showing 24 of 148 properties"`

**Sort options:** `Newest First` | `Price: High to Low` | `Price: Low to High` | `Most Viewed`

---

### 4.11 Enquiry / Contact Page

**Layout:** Split screen

**Left (60%):**
- Large `Cormorant Garamond` heading: `"Begin Your Search"`  
- Subtext about private, discreet service
- Agent cards: photo, name, specialty, phone
- Office locations with elegant map markers

**Right (40%):**
- Clean form: Name, Email, Phone, Property Interest, Message, Budget Range
- Submit button: LiquidButton with gold border (from 21st.dev, document 3)
- Privacy note: small, muted

**Background:** WebGLShader at `opacity: 0.15` for atmosphere.

---

## 5. Motion & Animation Guidelines

### Philosophy
Motion should feel like a **deep breath** — never rushed, always purposeful.

### Rules
| Interaction | Duration | Easing |
|---|---|---|
| Page transitions | `600ms` | `cubic-bezier(0.76, 0, 0.24, 1)` |
| Card hover | `400ms` | `ease` |
| Nav scroll transition | `300ms` | `ease` |
| Image reveal on scroll | `800ms` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Counter animation | `2000ms` | `easeOut` |
| Menu open | `500ms` | `cubic-bezier(0.76, 0, 0.24, 1)` |

### Scroll Animations (Framer Motion)
All sections use `whileInView` with staggered children:
```tsx
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}
```

---

## 6. Component File Structure

```
src/
├── app/
│   ├── page.tsx                     # Home
│   ├── properties/
│   │   ├── page.tsx                 # Listings
│   │   └── [slug]/page.tsx          # Detail
│   ├── collections/page.tsx
│   ├── virtual-tours/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
│
├── components/
│   ├── ui/                          # shadcn + 21st.dev components
│   │   ├── animated-hero.tsx        # 21st.dev — Hero
│   │   ├── scroll-expansion-hero.tsx # 21st.dev — Scroll expand
│   │   ├── web-gl-shader.tsx        # 21st.dev — WebGL bg
│   │   ├── liquid-glass-button.tsx  # 21st.dev — Button
│   │   ├── button.tsx               # shadcn base
│   │   └── ...
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PageWrapper.tsx
│   │
│   ├── property/
│   │   ├── PropertyCard.tsx
│   │   ├── PropertyGrid.tsx
│   │   ├── PropertyDetail.tsx
│   │   ├── PropertyGallery.tsx
│   │   ├── PropertyFilters.tsx
│   │   └── VirtualTourEmbed.tsx
│   │
│   └── sections/
│       ├── HeroSection.tsx
│       ├── CollectionsTeaser.tsx    # Uses ScrollExpandMedia
│       ├── StatsBar.tsx
│       ├── FeaturedListings.tsx
│       ├── CollectionsGrid.tsx
│       └── EnquirySection.tsx
│
├── lib/
│   ├── utils.ts
│   └── properties.ts               # Mock data / API
│
└── styles/
    └── globals.css                  # Design tokens + base styles
```

---

## 7. Dependencies to Install

```bash
# Core
npx create-next-app@latest luxe-estate --typescript --tailwind --app --src-dir

# shadcn
npx shadcn@latest init

# Animation
npm install framer-motion

# 3D / WebGL (21st.dev component)
npm install three @types/three

# UI Primitives (21st.dev + shadcn)
npm install @radix-ui/react-slot @radix-ui/react-dialog @radix-ui/react-select
npm install class-variance-authority clsx tailwind-merge

# Icons
npm install lucide-react

# Slider (for price filter)
npm install @radix-ui/react-slider

# Carousel (for property images)
npm install embla-carousel-react

# Fonts (via next/font or Google Fonts link)
# Cormorant Garamond + Inter
```

---

## 8. globals.css — Design Token Setup

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --font-display: 'Cormorant Garamond', Georgia, serif;
    --font-body: 'Inter', system-ui, sans-serif;

    --color-obsidian: #0A0A0B;
    --color-ivory: #F5F0E8;
    --color-gold: #C9A96E;
    --color-gold-light: #E8D5A3;
    --color-mist: #E8E4DC;
    --color-slate: #4A4A52;
    --color-graphite: #1C1C22;

    --shadow-card: 0 4px 40px rgba(0,0,0,0.08);
    --shadow-card-hover: 0 20px 60px rgba(0,0,0,0.15);
    --shadow-gold: 0 0 40px rgba(201,169,110,0.15);
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: var(--font-body);
    background-color: var(--color-ivory);
    color: var(--color-slate);
  }

  h1, h2, h3, h4 {
    font-family: var(--font-display);
  }
}
```

---

## 9. Tailwind Config Extensions

```js
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        obsidian: '#0A0A0B',
        ivory: '#F5F0E8',
        gold: {
          DEFAULT: '#C9A96E',
          light: '#E8D5A3',
          dark: '#A68450',
        },
        mist: '#E8E4DC',
        graphite: '#1C1C22',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 0.6s ease both',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
}
```

---

## 10. Mock Property Data Structure

```ts
// lib/properties.ts
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
  images: string[]          // Unsplash URLs
  videoTourUrl?: string
  matterportUrl?: string
  description: string
  features: string[]
  agent: Agent
  tags: string[]            // "NEW LISTING", "PRICE REDUCED", etc.
  isExclusive: boolean
  isFeatured: boolean
}
```

---

## 11. Unsplash Image Strategy

Use these confirmed Unsplash photo IDs for property imagery:

| Use | Photo ID | Description |
|---|---|---|
| Hero BG | `photo-1600596542815-ffad4c1539a9` | Luxury villa exterior |
| Penthouse | `photo-1512917774080-9991f1c4c750` | Modern mansion |
| Interior 1 | `photo-1600607687939-ce8a6c25118c` | Luxury living room |
| Pool Villa | `photo-1613490493576-7fde63acd811` | Pool villa exterior |
| Kitchen | `photo-1556909114-f6e7ad7d3136` | Modern kitchen |
| Master Bath | `photo-1552321554-5fefe8c9ef14` | Luxury bathroom |
| Aerial | `photo-1600047509807-ba8f99d2cdde` | Estate aerial |
| Mountain Estate | `photo-1565183928294-7063f23ce0f8` | Alpine property |
| Beachfront | `photo-1499793983690-e29da59ef1c2` | Oceanfront |
| City Penthouse | `photo-1493809842364-78817add7ffb` | City skyline view |

**URL format:** `https://images.unsplash.com/[photo-id]?w=1280&auto=format&fit=crop&q=80`

---

## 12. Accessibility Standards

- All images: meaningful `alt` text
- Color contrast: minimum 4.5:1 for body text, 3:1 for large text
- Focus states: gold outline `2px solid #C9A96E` with `2px offset`
- Keyboard navigation: all interactive elements reachable
- ARIA labels on icon-only buttons
- Reduced motion: respect `prefers-reduced-motion` — disable all animations

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 13. Performance Budget

| Metric | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID / INP | < 200ms |
| CLS | < 0.1 |
| TTI | < 3.5s |
| Bundle size (initial JS) | < 200KB gzipped |

**Optimizations:**
- All images: `next/image` with `priority` on hero, lazy load rest
- Fonts: `next/font` with `display: swap`
- WebGL shader: load only after hero is visible (dynamic import)
- Property images: progressive loading with blur placeholder

---

## 14. SEO Structure

```tsx
// app/page.tsx
export const metadata: Metadata = {
  title: 'Luxe Estate | Exclusive Luxury Properties Worldwide',
  description: 'Discover the world\'s most exceptional properties. Private villas, penthouses, and estates curated for the discerning buyer.',
  openGraph: {
    type: 'website',
    images: ['/og-image.jpg'],
  },
}
```

**Structured data:** `RealEstateAgent` + `Product` schema for each listing.

---

## 15. Development Phases

### Phase 1 — Foundation (Week 1)
- [x] Project setup (Next.js + shadcn + Tailwind config)
- [x] Design tokens in `globals.css`
- [x] Navbar component with scroll behavior
- [x] Footer component
- [x] Install all 21st.dev components

### Phase 2 — Home Page (Week 2)
- [x] Hero section with `animated-hero` (21st.dev)
- [x] WebGL shader background
- [x] Scroll expansion teaser with `scroll-expansion-hero` (21st.dev)
- [x] Stats bar
- [x] Featured listings section

### Phase 3 — Listings (Week 3)
- [x] Property card component
- [x] Filters & search UI
- [x] `/properties` grid page
- [x] Pagination / infinite scroll

### Phase 4 — Detail & Tours (Week 4)
- [x] Property detail page
- [x] Image gallery
- [x] Virtual tour embed
- [x] Enquiry form
- [x] Agent card

### Phase 5 — Polish (Week 5)
- [x] All motion/animation passes
- [x] Mobile responsiveness audit
- [x] Performance optimization
- [x] SEO + metadata
- [x] Accessibility pass

---

*Document prepared by Design Lead · Luxe Estate v1.0*  
*All design decisions prioritize perceived quality over feature volume.*  
*When in doubt: add more whitespace, reduce noise.*

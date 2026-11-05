import Link from 'next/link'
import { BRAND } from '@/lib/brand'

const COLUMNS: { title: string; links: [string, string][] }[] = [
  {
    title: 'Residences',
    links: [
      ['All residences', '/properties'],
      ['Private viewings', '/virtual-tours'],
      ['Off-market', '/contact'],
    ],
  },
  {
    title: 'Collections',
    links: [
      ['Oceanfront Villas', '/collections#oceanfront-villas'],
      ['Sky Penthouses', '/collections#manhattan-penthouses'],
      ['Alpine Retreats', '/collections#alpine-retreats'],
      ['Historic Estates', '/collections#historic-estates'],
    ],
  },
  {
    title: 'The House',
    links: [
      ['Our story', '/about'],
      ['Advisors', '/about#advisors'],
      ['Enquire', '/contact'],
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-noir text-bone overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 md:px-12 pt-24 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-14 lg:gap-10 pb-20 border-b border-white/[0.08]">
          <div className="max-w-sm">
            <p className="eyebrow text-bronze-soft mb-6">Private Office</p>
            <p className="font-display text-[30px] leading-[1.15] text-bone mb-8">
              For the homes that are never <em className="text-bronze-soft">advertised</em>.
            </p>
            <a href={`mailto:${BRAND.email}`} className="link-draw text-[13px] tracking-[0.12em] text-bone/80">
              {BRAND.email}
            </a>
            <p className="mt-4 text-[13px] tracking-[0.12em] text-bone/50">{BRAND.phone}</p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow text-bone/40 mb-6 !font-body">{col.title}</h4>
              <ul className="space-y-3.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-[15px] text-bone/75 hover:text-bone transition-colors duration-300">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 py-8 text-[11px] tracking-[0.16em] uppercase text-bone/35">
          <p>© {new Date().getFullYear()} {BRAND.name} {BRAND.descriptor}. Est. {BRAND.established}.</p>
          <div className="flex gap-8">
            <span>New York</span>
            <span>Los Angeles</span>
            <span>Aspen</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-bone/70 transition-colors">Privacy</a>
            <a href="#" className="hover:text-bone/70 transition-colors">Terms</a>
            <a href="#" className="hover:text-bone/70 transition-colors">Instagram</a>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="font-display uppercase text-center leading-[0.78] text-bone/[0.05] select-none whitespace-nowrap -mb-[2vw]"
        style={{ fontSize: '19.5vw', fontVariationSettings: '"opsz" 96', letterSpacing: '0.02em' }}
      >
        {BRAND.name}
      </div>
    </footer>
  )
}

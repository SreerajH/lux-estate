import Link from 'next/link'
import { Globe, AtSign, Users, Video } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-obsidian text-ivory">
      <div className="max-w-[1440px] mx-auto px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="font-display text-2xl font-medium tracking-[0.15em] uppercase text-ivory block mb-4">
              Luxe Estate
            </Link>
            <p className="text-ivory/50 text-sm font-body leading-relaxed max-w-xs">
              Curating the world&apos;s most extraordinary properties for the discerning few.
            </p>
            <div className="flex gap-4 mt-6">
              {[Globe, AtSign, Users, Video].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link" className="text-ivory/40 hover:text-gold transition-colors duration-200">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.15em] uppercase text-gold font-body font-medium mb-5">Properties</h4>
            <ul className="space-y-3">
              {['All Listings', 'Featured Properties', 'New Listings', 'Price Reduced', 'Off Market'].map((item) => (
                <li key={item}>
                  <Link href="/properties" className="text-ivory/50 text-sm font-body hover:text-ivory transition-colors duration-200">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.15em] uppercase text-gold font-body font-medium mb-5">Collections</h4>
            <ul className="space-y-3">
              {['Oceanfront Villas', 'Penthouses', 'Alpine Retreats', 'Historic Estates', 'Modern Masterpieces'].map((item) => (
                <li key={item}>
                  <Link href="/collections" className="text-ivory/50 text-sm font-body hover:text-ivory transition-colors duration-200">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.15em] uppercase text-gold font-body font-medium mb-5">Company</h4>
            <ul className="space-y-3">
              {[['About', '/about'], ['Virtual Tours', '/virtual-tours'], ['Contact', '/contact']].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-ivory/50 text-sm font-body hover:text-ivory transition-colors duration-200">{label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-ivory/30 text-xs font-body tracking-wide mb-1">+1 (212) 555-0100</p>
              <p className="text-ivory/30 text-xs font-body tracking-wide">concierge@luxeestate.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ivory/30 text-xs font-body tracking-wide">
            © 2024 Luxe Estate. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-ivory/30 text-xs font-body tracking-wide hover:text-ivory/60 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

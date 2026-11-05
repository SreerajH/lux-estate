'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { BRAND } from '@/lib/brand'

const navLinks = [
  { href: '/properties', label: 'Residences' },
  { href: '/collections', label: 'Collections' },
  { href: '/virtual-tours', label: 'Private Viewings' },
  { href: '/about', label: 'The House' },
]

export function Wordmark({ className, small = false }: { className?: string; small?: boolean }) {
  return (
    <span className={cn('flex flex-col items-center leading-none', className)}>
      <span
        className={cn('font-display uppercase', small ? 'text-[19px] tracking-[0.34em]' : 'text-[22px] tracking-[0.38em]')}
        style={{ fontVariationSettings: '"opsz" 96' }}
      >
        {BRAND.name}
      </span>
      <span className="mt-1.5 text-[8px] tracking-[0.5em] uppercase font-body opacity-60 pl-[0.5em]">
        {BRAND.descriptor}
      </span>
    </span>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 text-bone transition-[background-color,border-color,height] duration-700 ease-lux border-b',
          scrolled || menuOpen
            ? 'bg-noir/[0.94] backdrop-blur-xl border-white/[0.07]'
            : 'bg-transparent border-transparent'
        )}
      >
        <div
          className={cn(
            'max-w-[1600px] mx-auto px-5 md:px-12 grid grid-cols-[1fr_auto_1fr] items-center transition-[height] duration-700 ease-lux',
            scrolled ? 'h-[72px]' : 'h-[92px]'
          )}
        >
          <div className="hidden xl:flex items-center gap-9">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative whitespace-nowrap text-[11px] tracking-[0.24em] uppercase font-body font-normal transition-opacity duration-300',
                    active ? 'opacity-100' : 'opacity-65 hover:opacity-100'
                  )}
                >
                  {link.label}
                  {active && <span className="absolute -bottom-2 left-0 right-0 h-px bg-bronze-soft" />}
                </Link>
              )
            })}
          </div>

          <button
            className="xl:hidden justify-self-start flex flex-col gap-[7px] p-2 -ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={cn('block h-px w-7 bg-bone transition-transform duration-500 ease-lux', menuOpen && 'translate-y-[4px] rotate-45')} />
            <span className={cn('block h-px w-7 bg-bone transition-transform duration-500 ease-lux', menuOpen && '-translate-y-[4px] -rotate-45')} />
          </button>

          <Link href="/" aria-label={`${BRAND.name} home`} className="justify-self-center">
            <Wordmark small={scrolled} />
          </Link>

          <div className="justify-self-end flex items-center gap-8">
            <a href={`tel:${BRAND.phone}`} className="hidden 2xl:block text-[11px] tracking-[0.18em] font-body opacity-60 hover:opacity-100 transition-opacity">
              {BRAND.phone}
            </a>
            <Link
              href="/contact"
              className="hidden sm:inline-flex btn btn-ghost !py-3 !px-6"
            >
              Enquire
            </Link>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-noir text-bone flex flex-col justify-between px-6 pt-32 pb-10"
          >
            <ul className="flex flex-col gap-2">
              {[...navLinks, { href: '/contact', label: 'Enquire' }].map((link, i) => (
                <li key={link.href} className="overflow-hidden pb-2 -mb-2">
                  <motion.div
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.25 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link href={link.href} className="flex items-baseline gap-5 py-1">
                      <span className="text-[10px] tracking-[0.3em] text-bronze-soft font-body">0{i + 1}</span>
                      <span className="font-display text-[44px] leading-[1.1]">{link.label}</span>
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-[12px] tracking-[0.14em] font-body text-bone/50 space-y-1"
            >
              <p>{BRAND.phone}</p>
              <p>{BRAND.email}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

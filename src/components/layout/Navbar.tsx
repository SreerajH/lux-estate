'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/properties', label: 'Properties' },
  { href: '/collections', label: 'Collections' },
  { href: '/virtual-tours', label: 'Virtual Tours' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-obsidian/95 backdrop-blur-xl border-b border-gold/20'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-[1440px] mx-auto px-10 flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-ivory font-display text-[22px] font-medium tracking-[0.15em] uppercase"
          >
            Luxe Estate
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-[13px] tracking-[0.08em] uppercase font-body transition-colors duration-200',
                  pathname === link.href ? 'text-gold' : 'text-ivory/80 hover:text-ivory'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-2.5 border border-gold text-gold text-[12px] tracking-[0.1em] uppercase font-body font-medium transition-all duration-300 hover:bg-gold hover:text-obsidian"
              style={{ borderRadius: '2px' }}
            >
              Contact Us →
            </Link>
          </div>

          <button
            className="md:hidden text-ivory p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-obsidian flex flex-col justify-center items-center"
          >
            <motion.div
              className="flex flex-col items-center gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <Link
                    href={link.href}
                    className="text-ivory font-display text-4xl font-light tracking-wide hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <Link
                  href="/contact"
                  className="mt-4 px-8 py-3 border border-gold text-gold text-sm tracking-widest uppercase font-body hover:bg-gold hover:text-obsidian transition-all"
                  style={{ borderRadius: '2px' }}
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

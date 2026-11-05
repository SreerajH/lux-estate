import type { Metadata } from 'next'
import { Bodoni_Moda, Manrope } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { BRAND } from '@/lib/brand'

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-bodoni',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
})

const title = `${BRAND.name} — ${BRAND.descriptor} | Exceptional Residences Worldwide`
const description =
  "Penthouses, oceanfront villas and historic estates, represented privately. Velmont curates fewer than 1% of the homes it is shown."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    title,
    description,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoni.variable} ${manrope.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

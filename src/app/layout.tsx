import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Luxe Estate | Exclusive Luxury Properties Worldwide',
  description: "Discover the world's most exceptional properties. Private villas, penthouses, and estates curated for the discerning buyer.",
  openGraph: {
    type: 'website',
    title: 'Luxe Estate | Exclusive Luxury Properties Worldwide',
    description: "Discover the world's most exceptional properties.",
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

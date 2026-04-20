import HeroSection from '@/components/sections/HeroSection'
import CollectionsTeaser from '@/components/sections/CollectionsTeaser'
import StatsBar from '@/components/sections/StatsBar'
import FeaturedListings from '@/components/sections/FeaturedListings'
import CollectionsGrid from '@/components/sections/CollectionsGrid'
import EnquirySection from '@/components/sections/EnquirySection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <CollectionsTeaser />
      <FeaturedListings />
      <CollectionsGrid />
      <EnquirySection />
    </>
  )
}

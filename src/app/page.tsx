import { client, FEATURED_POTTERY_QUERY } from '@/lib/sanity'
import { PotteryPiece } from '@/types/sanity'
import Hero from '@/components/Hero'
import FeaturedGallery from '@/components/FeaturedGallery'

export default async function Home() {
  const featuredPieces: PotteryPiece[] = await client.fetch(FEATURED_POTTERY_QUERY)

  return (
    <main>
      <Hero />
      <FeaturedGallery pieces={featuredPieces} />
      <AboutSection />
    </main>
  )
}

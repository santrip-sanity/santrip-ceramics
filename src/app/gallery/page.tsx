import { client, POTTERY_PIECES_QUERY } from '@/lib/sanity'
import { PotteryPiece } from '@/types/sanity'
import GalleryGrid from '@/components/GalleryGrid'

export default async function Gallery() {
  const pieces: PotteryPiece[] = await client.fetch(POTTERY_PIECES_QUERY)

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-neutral-800 mb-6">Gallery</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
          </p>
        </div>
        
        <GalleryGrid pieces={pieces} />
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Gallery - SanTrip Ceramics',
  description: 'Browse our complete collection of handcrafted ceramic pottery pieces, including bowls, vases, sculptures, and more.',
}

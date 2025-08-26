import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import { PotteryPiece } from '@/types/sanity'

interface FeaturedGalleryProps {
  pieces: PotteryPiece[]
}

export default function FeaturedGallery({ pieces }: FeaturedGalleryProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">Featured Pieces</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Take a look at all the pieces. 
          </p>
        </div>

        {pieces.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {pieces.map((piece) => (
              <Link 
                key={piece._id} 
                href={`/gallery/${piece.slug.current}`}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-neutral-100">
                  {piece.featuredImage ? (
                    <Image
                      src={urlFor(piece.featuredImage).width(400).height(400).url()}
                      alt={piece.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-neutral-200 flex items-center justify-center">
                      <span className="text-neutral-400">No image</span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 group-hover:text-neutral-600 transition-colors">
                  {piece.title}
                </h3>
                <p className="text-neutral-600 capitalize">{piece.technique}</p>
                {piece.status === 'available' && piece.price && (
                  <p className="text-lg font-medium text-neutral-800 mt-2">
                    ${piece.price.toLocaleString()}
                  </p>
                )}
                <p className={`text-sm mt-1 ${
                  piece.status === 'available' ? 'text-green-600' : 
                  piece.status === 'sold' ? 'text-red-600' : 'text-neutral-600'
                }`}>
                  {piece.status === 'available' ? 'Available' : 
                   piece.status === 'sold' ? 'Sold' :
                   piece.status === 'exhibition' ? 'Exhibition Only' : 'Personal Collection'}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-neutral-600">No pottery pieces to display yet.</p>
          </div>
        )}

        <div className="text-center">
          <Link 
            href="/gallery" 
            className="inline-flex items-center text-neutral-800 hover:text-neutral-600 transition-colors font-medium"
          >
            View All Pieces
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

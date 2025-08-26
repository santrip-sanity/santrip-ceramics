import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import { PotteryPiece } from '@/types/sanity'

interface GalleryGridProps {
  pieces: PotteryPiece[]
}

export default function GalleryGrid({ pieces }: GalleryGridProps) {
  if (pieces.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-neutral-600">No pottery pieces available yet.</p>
        <p className="text-neutral-500 mt-2">Check back soon for new creations!</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-neutral-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
              </div>
            )}
            
            {/* Status badge */}
            <div className="absolute top-3 right-3">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                piece.status === 'available' ? 'bg-green-100 text-green-800' :
                piece.status === 'sold' ? 'bg-red-100 text-red-800' :
                piece.status === 'exhibition' ? 'bg-blue-100 text-blue-800' :
                'bg-neutral-100 text-neutral-800'
              }`}>
                {piece.status === 'available' ? 'Available' :
                 piece.status === 'sold' ? 'Sold' :
                 piece.status === 'exhibition' ? 'Exhibition' : 'Personal'}
              </span>
            </div>
          </div>
          
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-neutral-800 group-hover:text-neutral-600 transition-colors">
              {piece.title}
            </h3>
            
            {piece.technique && (
              <p className="text-neutral-600 text-sm capitalize">{piece.technique}</p>
            )}
            
            {piece.categories && piece.categories.length > 0 && (
              <p className="text-neutral-500 text-sm">
                {piece.categories.map(cat => cat.title).join(', ')}
              </p>
            )}
            
            {piece.status === 'available' && piece.price && (
              <p className="text-lg font-medium text-neutral-800">
                ${piece.price.toLocaleString()}
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}
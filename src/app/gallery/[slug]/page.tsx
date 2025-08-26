import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { client, POTTERY_PIECE_BY_SLUG_QUERY } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import { PotteryPiece } from '@/types/sanity'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function PotteryPiecePage({ params }: PageProps) {
  const { slug } = await params
  const piece: PotteryPiece = await client.fetch(POTTERY_PIECE_BY_SLUG_QUERY, { slug })

  if (!piece) {
    notFound()
  }

  return (
    <article className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to gallery link */}
        <Link 
          href="/gallery"
          className="inline-flex items-center text-neutral-600 hover:text-neutral-800 transition-colors mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Gallery
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            {/* Featured Image */}
            {piece.featuredImage && (
              <div className="aspect-square relative bg-neutral-100 rounded-lg overflow-hidden">
                <Image
                  src={urlFor(piece.featuredImage).width(600).height(600).url()}
                  alt={piece.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            )}
            
            {/* Additional Images */}
            {piece.images && piece.images.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {piece.images.map((image, index) => (
                  <div key={index} className="aspect-square relative bg-neutral-100 rounded overflow-hidden">
                    <Image
                      src={urlFor(image).width(200).height(200).url()}
                      alt={image.alt || `${piece.title} - Image ${index + 1}`}
                      fill
                      sizes="200px"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-neutral-800 mb-2">{piece.title}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  piece.status === 'available' ? 'bg-green-100 text-green-800' :
                  piece.status === 'sold' ? 'bg-red-100 text-red-800' :
                  piece.status === 'exhibition' ? 'bg-blue-100 text-blue-800' :
                  'bg-neutral-100 text-neutral-800'
                }`}>
                  {piece.status === 'available' ? 'Available' :
                   piece.status === 'sold' ? 'Sold' :
                   piece.status === 'exhibition' ? 'Exhibition Only' : 'Personal Collection'}
                </span>
                
                {piece.status === 'available' && piece.price && (
                  <span className="text-2xl font-bold text-neutral-800">
                    ${piece.price.toLocaleString()}
                  </span>
                )}
              </div>

              {piece.categories && piece.categories.length > 0 && (
                <div className="mb-4">
                  <span className="text-neutral-600">Categories: </span>
                  {piece.categories.map((category, index) => (
                    <span key={category.slug.current} className="text-neutral-800">
                      {category.title}
                      {index < piece.categories!.length - 1 && ', '}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Description */}
            {piece.description && (
              <div className="prose prose-neutral max-w-none">
                <PortableText value={piece.description} />
              </div>
            )}

            {/* Technical Details */}
            <div className="bg-neutral-50 p-6 rounded-lg space-y-4">
              <h3 className="text-lg font-semibold text-neutral-800">Technical Details</h3>
              
              {piece.technique && (
                <div>
                  <span className="font-medium text-neutral-700">Technique: </span>
                  <span className="text-neutral-600 capitalize">{piece.technique}</span>
                </div>
              )}

              {piece.materials && piece.materials.length > 0 && (
                <div>
                  <span className="font-medium text-neutral-700">Materials: </span>
                  <span className="text-neutral-600">{piece.materials.join(', ')}</span>
                </div>
              )}

              {piece.dimensions && (
                <div>
                  <span className="font-medium text-neutral-700">Dimensions: </span>
                  <span className="text-neutral-600">
                    {[piece.dimensions.height, piece.dimensions.width, piece.dimensions.depth]
                      .filter(Boolean)
                      .join(' × ')}
                  </span>
                </div>
              )}

              {piece.createdDate && (
                <div>
                  <span className="font-medium text-neutral-700">Created: </span>
                  <span className="text-neutral-600">
                    {new Date(piece.createdDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              )}
            </div>

            {/* Artist Info */}
            {piece.artist && (
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">Artist</h3>
                <p className="text-neutral-700 font-medium">{piece.artist.name}</p>
                {piece.artist.bio && (
                  <div className="prose prose-sm prose-neutral mt-2 max-w-none">
                    <PortableText value={piece.artist.bio} />
                  </div>
                )}
              </div>
            )}

            {/* Contact for Purchase */}
            {piece.status === 'available' && (
              <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">Interested in this piece?</h3>
                <p className="text-amber-700 mb-4">
                  Contact us to learn more about this pottery piece or to arrange a purchase.
                </p>
                <Link 
                  href="/contact"
                  className="inline-block bg-amber-800 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const piece: PotteryPiece = await client.fetch(POTTERY_PIECE_BY_SLUG_QUERY, { slug })

  if (!piece) {
    return {
      title: 'Pottery Piece Not Found',
    }
  }

  return {
    title: `${piece.title} - SanTrip Ceramics`,
    description: piece.description 
      ? `Handcrafted ${piece.technique || 'pottery'} piece. ${piece.description[0]?.children?.[0]?.text || ''}`
      : `Handcrafted ${piece.technique || 'pottery'} piece by SanTrip Ceramics.`,
    openGraph: {
      title: piece.title,
      description: `Handcrafted ${piece.technique || 'pottery'} piece`,
      images: piece.featuredImage 
        ? [urlFor(piece.featuredImage).width(1200).height(630).url()]
        : [],
    },
  }
}
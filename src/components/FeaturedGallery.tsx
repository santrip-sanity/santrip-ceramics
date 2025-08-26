import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import { PotteryPiece } from '@/types/sanity'

interface FeaturedGalleryProps {
  pieces: PotteryPiece[]
}

export default function FeaturedGallery({ pieces }: FeaturedGalleryProps) {
  return (
    <section className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-neutral-900 mb-6 tracking-tight">Featured Works</h2>
          <div className="w-16 h-px bg-neutral-400 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 max-w-xl mx-auto font-light leading-relaxed">
            A curated selection of recent ceramic pieces, each embodying the delicate balance between form and function
          </p>
        </div>

        {pieces.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {pieces.map((piece) => {
              const hasSlug = piece.slug && piece.slug.current;
              const content = (
                <div className="group cursor-pointer">
                  <div className="relative aspect-square mb-6 overflow-hidden bg-white shadow-sm">
                    {piece.featuredImage ? (
                      <Image
                        src={urlFor(piece.featuredImage).width(500).height(500).url()}
                        alt={piece.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
                        <span className="text-neutral-400 font-light">No image</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-light text-neutral-900 group-hover:text-neutral-600 transition-colors tracking-wide">
                      {piece.title}
                    </h3>
                    <p className="text-sm text-neutral-500 uppercase tracking-widest font-medium">
                      {piece.technique}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      {piece.status === 'available' && piece.price && (
                        <p className="text-lg font-light text-neutral-900">
                          ${piece.price.toLocaleString()}
                        </p>
                      )}
                      <p className={`text-xs uppercase tracking-widest font-medium ${
                        piece.status === 'available' ? 'text-emerald-600' : 
                        piece.status === 'sold' ? 'text-neutral-400' : 'text-neutral-500'
                      }`}>
                        {piece.status === 'available' ? 'Available' : 
                         piece.status === 'sold' ? 'Sold' :
                         piece.status === 'exhibition' ? 'Exhibition' : 'Display'}
                      </p>
                    </div>
                  </div>
                </div>
              );

              return hasSlug ? (
                <Link 
                  key={piece._id} 
                  href={`/gallery/${piece.slug.current}`}
                >
                  {content}
                </Link>
              ) : (
                <div key={piece._id}>
                  {content}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-neutral-600">No pottery pieces to display yet.</p>
          </div>
        )}

        <div className="text-center pt-8">
          <Link 
            href="/gallery" 
            className="inline-block border border-neutral-900 text-neutral-900 px-12 py-4 hover:bg-neutral-900 hover:text-white transition-all duration-300 font-medium tracking-widest text-sm uppercase"
          >
            View All Works
          </Link>
        </div>
      </div>
    </section>
  )
}

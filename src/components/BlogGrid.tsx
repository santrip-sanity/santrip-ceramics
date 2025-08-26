import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import { Post } from '@/types/sanity'

interface BlogGridProps {
  posts: Post[]
}

export default function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-neutral-600">No blog posts available yet.</p>
        <p className="text-neutral-500 mt-2">Check back soon for stories from the studio!</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <article key={post._id} className="group cursor-pointer">
          <Link href={`/blog/${post.slug.current}`}>
            <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg bg-neutral-100">
              {post.mainImage ? (
                <Image
                  src={urlFor(post.mainImage).width(400).height(300).url()}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full bg-neutral-200 flex items-center justify-center">
                  <svg className="w-12 h-12 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-neutral-800 group-hover:text-neutral-600 transition-colors line-clamp-2">
                {post.title}
              </h2>
              
              <div className="flex items-center gap-4 text-sm text-neutral-600">
                {post.author && (
                  <span>By {post.author.name}</span>
                )}
                <span>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category) => (
                    <span 
                      key={category.slug.current}
                      className="px-2 py-1 text-xs bg-neutral-100 text-neutral-600 rounded-full"
                    >
                      {category.title}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        </article>
      ))}
    </div>
  )
}
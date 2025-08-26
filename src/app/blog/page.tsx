import { client, POSTS_QUERY } from '@/lib/sanity'
import { Post } from '@/types/sanity'
import BlogGrid from '@/components/BlogGrid'

export default async function Blog() {
  const posts: Post[] = await client.fetch(POSTS_QUERY)

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-neutral-800 mb-6">Blog</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Stories from the studio, insights into the ceramic process, and musings on art, craft, and creativity.
          </p>
        </div>
        
        <BlogGrid posts={posts} />
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Blog - SanTrip Ceramics',
  description: 'Read stories from our ceramic studio, learn about pottery techniques, and discover the creative process behind our handcrafted pieces.',
}
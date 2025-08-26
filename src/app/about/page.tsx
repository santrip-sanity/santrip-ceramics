import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { client, urlFor, PERSON_QUERY } from '@/lib/sanity'
import { Person } from '@/types/sanity'

export default async function About() {
  const person: Person = await client.fetch(PERSON_QUERY)
  
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {person && (
          <>
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-neutral-800 mb-6">About {person.name}</h1>
              
              {/* Person Image */}
              {person.image && (
                <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden">
                  <Image
                    src={urlFor(person.image).width(400).height(400).url()}
                    alt={person.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
              )}
            </div>

            {/* Person Bio from Sanity */}
            {person.bio && (
              <div className="prose prose-lg prose-neutral mx-auto">
                <PortableText value={person.bio} />
              </div>
            )}
          </>
        )}
        
        {/* Fallback if no person data */}
        {!person && (
          <div className="text-center">
            <h1 className="text-5xl font-bold text-neutral-800 mb-6">About</h1>
            <p className="text-xl text-neutral-600">
              Loading content from studio...
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export const metadata = {
  title: 'About - SanTrip Ceramics',
  description: 'Learn about our ceramic studio, our philosophy, and our commitment to creating beautiful, functional pottery using traditional techniques and contemporary design.',
}

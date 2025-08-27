import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { client, urlFor, PERSON_QUERY } from '@/lib/sanity'
import { Person } from '@/types/sanity'

export default async function About() {
  const person: Person = await client.fetch(PERSON_QUERY)
  
  return (
    <div className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {person && (
          <>
            {/* Header Section */}
            <div className="text-center mb-20">
              <div className="w-16 h-px bg-neutral-400 mx-auto mb-12"></div>
              <h1 className="text-5xl lg:text-6xl font-light text-neutral-900 mb-16 tracking-tight">
                About {person.name}
              </h1>
            </div>

            {/* Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
              
              {/* Person Image */}
              {person.image && (
                <div className="lg:col-span-2">
                  <div className="relative w-80 h-80 mx-auto lg:mx-0 mb-8 overflow-hidden bg-neutral-50 shadow-sm">
                    <Image
                      src={urlFor(person.image).width(600).height(600).url()}
                      alt={person.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Person Bio */}
              <div className={`${person.image ? 'lg:col-span-3' : 'lg:col-span-5'}`}>
                {person.bio && (
                  <div className="prose prose-xl prose-neutral max-w-none">
                    <div className="space-y-8 text-neutral-700 font-light leading-relaxed">
                      <PortableText 
                        value={person.bio}
                        components={{
                          block: {
                            normal: ({children}) => (
                              <p className="text-lg mb-8 leading-relaxed text-neutral-700 font-light">
                                {children}
                              </p>
                            ),
                          },
                          marks: {
                            strong: ({children}) => (
                              <strong className="font-medium text-neutral-900">
                                {children}
                              </strong>
                            ),
                          },
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
        
        {/* Fallback if no person data */}
        {!person && (
          <div className="text-center py-20">
            <div className="w-16 h-px bg-neutral-400 mx-auto mb-12"></div>
            <h1 className="text-5xl lg:text-6xl font-light text-neutral-900 mb-8 tracking-tight">About</h1>
            <p className="text-lg text-neutral-600 font-light">
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

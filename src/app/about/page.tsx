import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'

// Query to get the artist/person info
const PERSON_QUERY = `*[_type == "person"][0] {
  name,
  bio,
  image
}`

interface Person {
  name: string
  bio: any[]
  image?: {
    _type: 'image'
    asset: { _ref: string; _type: 'reference' }
  }
}

async function getPersonData(): Promise<Person | null> {
  try {
    const person = await client.fetch(PERSON_QUERY)
    return person
  } catch (error) {
    console.error('Error fetching person data:', error)
    return null
  }
}

export default async function AboutPage() {
  const person = await getPersonData()

  if (!person) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-neutral-800 mb-6 text-center">About</h1>
          <p className="text-neutral-600 text-center">Content not available.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-neutral-800 mb-6">About {person.name}</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Artist Image */}
          {person.image && (
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                <Image
                  src={urlFor(person.image).width(600).height(800).url()}
                  alt={person.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Artist Bio */}
          <div className="prose prose-lg prose-neutral">
            <h2 className="text-3xl font-bold text-neutral-800 mb-6">My Story</h2>
            <PortableText
              value={person.bio}
              components={{
                block: {
                  normal: ({children}) => <p className="mb-6 text-neutral-700 leading-relaxed">{children}</p>,
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'About - SanTrip Ceramics',
  description: 'Learn about the artist behind SanTrip Ceramics and the philosophy that guides our ceramic practice.',
}

import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'ceo6qysf',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Pottery Pieces Query
export const POTTERY_PIECES_QUERY = `*[_type == "potteryPiece" && defined(publishedAt)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  featuredImage,
  description,
  technique,
  materials,
  dimensions,
  status,
  price,
  createdDate,
  publishedAt,
  categories[]-> {
    title,
    slug
  },
  artist-> {
    name,
    slug
  }
}`

// Featured Pottery Query  
export const FEATURED_POTTERY_QUERY = `*[_type == "potteryPiece" && defined(publishedAt)] | order(publishedAt desc)[0...6] {
  _id,
  title,
  slug,
  featuredImage,
  technique,
  price,
  status
}`

// Single Pottery Piece Query
export const POTTERY_PIECE_QUERY = `*[_type == "potteryPiece" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  featuredImage,
  images,
  description,
  technique,
  materials,
  dimensions,
  status,
  price,
  createdDate,
  publishedAt,
  categories[]-> {
    title,
    slug
  },
  artist-> {
    name,
    slug,
    image,
    bio
  }
}`

// Posts Query
export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  body,
  publishedAt,
  author-> {
    name,
    image
  },
  categories[]-> {
    title,
    slug
  }
}`

// Single Post Query
export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  body,
  publishedAt,
  author-> {
    name,
    image,
    bio
  },
  categories[]-> {
    title,
    slug
  }
}`

// Person Query (for About page)
export const PERSON_QUERY = `*[_type == "person"][0] {
  _id,
  name,
  bio,
  image
}`

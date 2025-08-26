import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'ceo6qysf',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: unknown) => builder.image(source)

// GROQ queries
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

export const POTTERY_PIECE_BY_SLUG_QUERY = `*[_type == "potteryPiece" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  images,
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
    slug,
    image,
    bio
  }
}`

export const POSTS_QUERY = `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  author-> {
    name,
    slug
  },
  categories[]-> {
    title,
    slug
  }
}`

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  body,
  publishedAt,
  author-> {
    name,
    slug,
    image,
    bio
  },
  categories[]-> {
    title,
    slug
  }
}`

export const FEATURED_POTTERY_QUERY = `*[_type == "potteryPiece" && defined(publishedAt)] | order(publishedAt desc)[0...6] {
  _id,
  title,
  slug,
  featuredImage,
  technique,
  price,
  status
}`

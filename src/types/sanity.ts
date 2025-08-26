export interface PotteryPiece {
  _id: string
  title: string
  slug: { current: string }
  images?: Array<{
    asset: unknown
    alt?: string
    caption?: string
  }>
  featuredImage?: {
    asset: unknown
    alt?: string
  }
  description?: any[]
  technique?: string
  materials?: string[]
  dimensions?: {
    height?: string
    width?: string
    depth?: string
  }
  status: 'available' | 'sold' | 'exhibition' | 'personal'
  price?: number
  createdDate?: string
  publishedAt: string
  categories?: Array<{
    title: string
    slug: { current: string }
  }>
  artist?: {
    name: string
    slug: { current: string }
    image?: unknown
    bio?: any[]
  }
}

export interface Post {
  _id: string
  title: string
  slug: { current: string }
  mainImage?: {
    asset: unknown
    alt?: string
  }
  body?: any[]
  publishedAt: string
  author?: {
    name: string
    slug: { current: string }
    image?: unknown
    bio?: any[]
  }
  categories?: Array<{
    title: string
    slug: { current: string }
  }>
}

export interface Category {
  title: string
  slug: { current: string }
}

export interface Person {
  _id: string
  name: string
  bio?: any[]
  image?: {
    asset: unknown
    alt?: string
  }
}

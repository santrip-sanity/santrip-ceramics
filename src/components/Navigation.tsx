'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-neutral-800 hover:text-neutral-600 transition-colors">
            SanTrip Ceramics
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-neutral-700 hover:text-neutral-900 transition-colors">
              Home
            </Link>
            <Link href="/gallery" className="text-neutral-700 hover:text-neutral-900 transition-colors">
              Gallery
            </Link>
            <Link href="/blog" className="text-neutral-700 hover:text-neutral-900 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-neutral-700 hover:text-neutral-900 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-neutral-700 hover:text-neutral-900 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-600 hover:text-neutral-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-neutral-700 hover:text-neutral-900 transition-colors">
                Home
              </Link>
              <Link href="/gallery" className="text-neutral-700 hover:text-neutral-900 transition-colors">
                Gallery
              </Link>
              <Link href="/blog" className="text-neutral-700 hover:text-neutral-900 transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-neutral-700 hover:text-neutral-900 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-neutral-700 hover:text-neutral-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
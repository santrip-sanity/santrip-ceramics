'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-neutral-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-xl font-light text-neutral-900 hover:text-neutral-600 transition-colors tracking-wide">
            SanTrip Ceramics
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            <Link href="/gallery" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors tracking-widest uppercase font-medium">
              Gallery
            </Link>
            <Link href="/about" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors tracking-widest uppercase font-medium">
              About
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
          <div className="md:hidden py-6 border-t border-neutral-100">
            <div className="flex flex-col space-y-6">
              <Link 
                href="/gallery" 
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors tracking-widest uppercase font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/about" 
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors tracking-widest uppercase font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

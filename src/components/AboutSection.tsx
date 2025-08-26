import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-neutral-800 mb-6">
              Crafted with Passion
            </h2>
            <p className="text-lg text-neutral-600 mb-6">
              Each piece at SanTrip Ceramics is born from a deep connection to the earth and 
              a commitment to traditional pottery techniques. We believe that ceramics should 
              not only be beautiful but also functional, bringing joy to everyday moments.
            </p>
            <p className="text-lg text-neutral-600 mb-8">
              Our studio combines time-honored methods with contemporary aesthetics, creating 
              pieces that are both timeless and modern. From wheel-thrown vessels to hand-built 
              sculptures, every creation tells a unique story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/about" 
                className="bg-neutral-800 text-white px-6 py-3 rounded-md hover:bg-neutral-700 transition-colors font-medium text-center"
              >
                Our Story
              </Link>
              <Link 
                href="/blog" 
                className="border border-neutral-800 text-neutral-800 px-6 py-3 rounded-md hover:bg-neutral-800 hover:text-white transition-colors font-medium text-center"
              >
                Read Blog
              </Link>
            </div>
          </div>
          
          <div className="relative">
            {/* Placeholder for potter image or ceramic process */}
            <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-neutral-600">
                <svg className="w-16 h-16 mx-auto mb-4 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <p className="text-sm">Studio workspace</p>
                <p className="text-xs text-neutral-500">Add your studio photos here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
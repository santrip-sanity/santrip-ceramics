import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-neutral-50 to-neutral-100 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl lg:text-7xl font-bold text-neutral-800 mb-6">
          SanTrip Ceramics
        </h1>
        <p className="text-xl lg:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto">
          Handcrafted pottery pieces that blend traditional techniques with contemporary design.
          Each piece tells a story of earth, fire, and artistic expression.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/gallery" 
            className="bg-neutral-800 text-white px-8 py-3 rounded-md hover:bg-neutral-700 transition-colors font-medium"
          >
            View Gallery
          </Link>
          <Link 
            href="/about" 
            className="border border-neutral-800 text-neutral-800 px-8 py-3 rounded-md hover:bg-neutral-800 hover:text-white transition-colors font-medium"
          >
            Learn More
          </Link>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-amber-100 rounded-full opacity-50 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-100 rounded-full opacity-50 blur-xl"></div>
    </section>
  )
}
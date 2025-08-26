import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-white py-32 lg:py-48">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <div className="space-y-8">
            <h1 className="text-7xl lg:text-9xl font-light text-neutral-900 tracking-tight leading-none">
              SanTrip
              <br />
              <span className="text-neutral-600">Ceramics</span>
            </h1>
            <div className="w-24 h-px bg-neutral-300 mx-auto"></div>
          </div>
          
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
            Handcrafted ceramic pieces exploring the intersection of traditional craft and contemporary form
          </p>
          
          <div className="pt-8">
            <Link 
              href="/gallery" 
              className="inline-block border border-neutral-900 text-neutral-900 px-12 py-4 hover:bg-neutral-900 hover:text-white transition-all duration-300 font-medium tracking-widest text-sm uppercase"
            >
              View Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-light tracking-wide">SanTrip Ceramics</h3>
            <p className="text-neutral-300 font-light leading-relaxed max-w-md">
              Handcrafted ceramic pieces exploring the intersection of traditional craft and contemporary form
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-light tracking-wide">Get in Touch</h4>
            <div>
              <a 
                href="https://instagram.com/santrip_ceramics" 
                className="block text-neutral-300 hover:text-white transition-colors font-light tracking-wide"
                target="_blank"
                rel="noopener noreferrer"
              >
                @santrip_ceramics
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 font-light text-sm tracking-wide">
              © 2025 SanTrip Ceramics. All rights reserved.
            </p>
            <p className="text-neutral-500 font-light text-sm tracking-widest uppercase">
              Crafted with care
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

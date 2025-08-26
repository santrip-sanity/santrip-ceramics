import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">SanTrip Ceramics</h3>
            <p className="text-neutral-300 mb-4">
              Handcrafted pottery that brings beauty and functionality to your everyday life. 
              Each piece is created with passion and attention to detail.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-neutral-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/gallery" className="text-neutral-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/blog" className="text-neutral-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-neutral-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-neutral-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Pinterest</a></li>
              <li><a href="mailto:hello@santripceramics.com" className="text-neutral-300 hover:text-white transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-8 pt-8 text-center">
          <p className="text-neutral-400">
            © {currentYear} SanTrip Ceramics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
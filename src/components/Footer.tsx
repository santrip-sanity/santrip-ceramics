export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">SanTrip Ceramics</h3>
            <p className="text-neutral-300 mb-4">
              Handcrafted pottery exploring the beauty of imperfection
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://instagram.com/santrip_ceramics" 
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  @santrip_ceramics
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hello@santripceramics.com" 
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-700 mt-8 pt-8 text-center">
          <p className="text-neutral-400">© 2025 SanTrip Ceramics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function About() {
  return (
    <div className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="w-16 h-px bg-neutral-400 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 font-light leading-relaxed">
            A journey through clay, fire, and artistic expression
          </p>
        </div>

        <div className="space-y-16">
          <section className="text-center">
            <h2 className="text-2xl font-light text-neutral-900 mb-8 tracking-wide uppercase">Process</h2>
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-neutral-700 font-light leading-relaxed">
                Our approach combines time-honored techniques with contemporary innovation. 
                We work primarily with stoneware and porcelain, using both wheel-throwing and hand-building 
                methods to create our pieces.
              </p>
              <p className="text-neutral-700 font-light leading-relaxed">
                From initial shaping to final glaze firing, each step is carefully considered. 
                We embrace the beauty of imperfection – the variations that make each piece truly unique.
              </p>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-light text-neutral-900 mb-8 tracking-wide uppercase">Philosophy</h2>
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-neutral-700 font-light leading-relaxed">
                We believe in the power of handmade objects to connect us to both 
                the natural world and to each other. In an increasingly digital age, we find meaning in 
                the physical act of creation.
              </p>
              <p className="text-neutral-700 font-light leading-relaxed">
                Our work is guided by principles of sustainability and mindful creation. We create pieces 
                designed to last for generations, becoming more beautiful with age and use.
              </p>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-light text-neutral-900 mb-8 tracking-wide uppercase">Studio Visits</h2>
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-neutral-700 font-light leading-relaxed">
                We welcome visitors by appointment to view current work, discuss custom pieces, 
                or explore the world of ceramics together.
              </p>
              <p className="text-neutral-700 font-light leading-relaxed">
                Whether you're a seasoned collector or just beginning to appreciate handmade 
                ceramics, we'd love to share our passion and help you find the perfect piece.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'About - SanTrip Ceramics',
  description: 'Learn about our ceramic studio, our philosophy, and our commitment to creating beautiful, functional pottery using traditional techniques and contemporary design.',
}

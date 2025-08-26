export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-neutral-800 mb-6">About SanTrip Ceramics</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A journey through clay, fire, and artistic expression
          </p>
        </div>

        <div className="prose prose-lg prose-neutral mx-auto">
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-neutral-800 mb-4">Our Story</h2>
              <p>
                SanTrip Ceramics began as a passion project, born from a deep love for the tactile nature 
                of clay and the transformative power of fire. Our studio is a place where traditional 
                pottery techniques meet contemporary design sensibilities.
              </p>
              <p>
                Each piece we create tells a story – not just of the clay from which it&apos;s formed, but 
                of the hands that shaped it, the fire that transformed it, and the vision that guided 
                its creation. We believe that ceramics should be both beautiful and functional, bringing 
                joy and meaning to everyday moments.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-neutral-800 mb-4">Our Process</h2>
              <p>
                Our approach to ceramics combines time-honored techniques with contemporary innovation. 
                We work primarily with stoneware and porcelain, using both wheel-throwing and hand-building 
                methods to create our pieces.
              </p>
              <p>
                From the initial shaping to the final glaze firing, each step is carefully considered. 
                We believe in the beauty of imperfection – the slight variations and unique characteristics 
                that make each piece truly one-of-a-kind.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-neutral-800 mb-4">Philosophy</h2>
              <p>
                At SanTrip Ceramics, we believe in the power of handmade objects to connect us to both 
                the natural world and to each other. In an increasingly digital age, we find meaning in 
                the physical act of creation – the feel of clay between our fingers, the anticipation 
                of opening the kiln, the satisfaction of a perfectly balanced vessel.
              </p>
              <p>
                Our work is guided by principles of sustainability and mindful creation. We source our 
                materials responsibly and create pieces designed to last for generations, becoming more 
                beautiful with age and use.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-neutral-800 mb-4">Visit Our Studio</h2>
              <p>
                Our studio is located in [Your Location]. We welcome visitors by appointment to view 
                our current work, discuss custom pieces, or simply chat about the world of ceramics. 
                We also offer workshops and classes for those interested in learning the craft themselves.
              </p>
              <p>
                Whether you're a seasoned collector or someone just beginning to appreciate handmade 
                ceramics, we&apos;d love to share our passion with you and help you find the perfect piece 
                for your home.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'About - SanTrip Ceramics',
  description: 'Learn about our ceramic studio, our philosophy, and our commitment to creating beautiful, functional pottery using traditional techniques and contemporary design.',
}
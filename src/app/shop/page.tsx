import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ShopItem from '@/components/ShopItem'

// Shop items data - only Tiramisu available for direct order
const shopItems = [
  {
    id: 'tiramisu',
    name: 'Classic Tiramisu',
    description: 'Authentic Italian tiramisu with layers of coffee-soaked ladyfingers, creamy mascarpone filling, and a dusting of cocoa powder. Perfect for special occasions and coffee lovers.',
    price: '€25',
    image: '/images/recipes/Tiramisu.jpg',
    available: true
  }
]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-soft-gray">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-serif text-header-maroon mb-4">
            Shop My Bakes
          </h1>
          <p className="text-xl text-text-light max-w-2xl mx-auto font-sans">
            Freshly baked treats made with love and the finest ingredients. 
            Perfect for special occasions, gifts, or just because you deserve something sweet.
          </p>
        </div>
      </section>

      {/* Shop Items */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shopItems.map((item) => (
              <ShopItem key={item.id} {...item} />
            ))}
          </div>
          
          {/* Message for other cakes */}
          <div className="mt-12 text-center">
            <div className="bg-soft-gray p-8 rounded-xl border border-accent-gold border-opacity-20 max-w-2xl mx-auto">
              <h3 className="text-3xl font-serif text-header-maroon mb-4">
                Want Something Different?
              </h3>
              <p className="text-lg text-text-light mb-6 font-sans">
                I make many more delicious cakes and desserts! From chocolate cakes to fruit tarts, 
                I can create the perfect treat for your special occasion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://instagram.com/my.first.kitchen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Message Me on Instagram
                </a>
                <a 
                  href="mailto:myfirstkitchenden@gmail.com"
                  className="btn-secondary"
                >
                  Email Me
                </a>
              </div>
              <p className="text-sm text-text-light mt-4 font-sans">
                Just let me know what you're looking for and I'll create something special for you! 🍰
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-soft-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-header-maroon mb-6">
            How to Order
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-serif text-header-maroon mb-2">Choose Your Treat</h3>
              <p className="text-text-light font-sans">
                Browse our selection or message me for custom orders and other delicious options.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-serif text-header-maroon mb-2">Contact Me</h3>
              <p className="text-text-light font-sans">
                Message me on Instagram or email me with your order details, including quantity and preferred pickup date.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-serif text-header-maroon mb-2">Pickup & Enjoy</h3>
              <p className="text-text-light font-sans">
                Pick up your fresh-baked treats at the agreed time and enjoy every delicious bite!
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-3xl font-serif text-header-maroon mb-4">Ready to Order?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-serif text-header-maroon mb-2">Instagram</h4>
                <a 
                  href="https://instagram.com/my.first.kitchen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-gold hover:text-deep-maroon transition-colors duration-300 font-medium"
                >
                  @my.first.kitchen
                </a>
                <p className="text-text-light text-sm mt-2 font-sans">Send me a DM with your order</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-serif text-header-maroon mb-2">Email</h4>
                <a 
                  href="mailto:myfirstkitchenden@gmail.com"
                  className="text-accent-gold hover:text-deep-maroon transition-colors duration-300 font-medium"
                >
                  myfirstkitchenden@gmail.com
                </a>
                <p className="text-text-light text-sm mt-2 font-sans">Email me your order details</p>
              </div>
            </div>
            <div className="bg-accent-gold bg-opacity-10 p-4 rounded-lg">
              <p className="text-text-dark font-medium font-sans">
                💡 <strong>Pro tip:</strong> Include your preferred pickup date and any special requests in your message. 
                I'll get back to you within 24 hours with pricing and availability!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 
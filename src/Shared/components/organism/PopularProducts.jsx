import { FiArrowRight } from 'react-icons/fi'
import ProductCard from '../molecules/ProductCard'

const POPULAR_PRODUCTS = [
  {
    id: 1,
    name: 'Nike Mercurial Superfly 9 Academy TF Rosa Espuma Negro',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    rating: 5
  },
  {
    id: 2,
    name: 'Nike Total 90 III Metallic Silver and Black',
    price: 1600,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5',
    rating: 5
  },
  {
    id: 3,
    name: 'Adidas Predator Elite FG - Firm Ground',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda',
    rating: 5,
    badges: ['J', 'U']
  },
  {
    id: 4,
    name: 'adidas F50+ TFG Lamine Yamal 304 - Rosa/Morado Glow/Rosa',
    price: 1900,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570',
    rating: 5
  }
]

const PopularProducts = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Balón decorativo */}
          <div 
            className="absolute -left-40 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-10"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab')",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              zIndex: 0
            }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-center font-serif mb-12">
              Productos Populares
            </h2>

            {/* Grid deslizable */}
            <div className="flex overflow-x-auto pb-6 -mx-4 px-4 gap-6 snap-x snap-mandatory scroll-smooth scrollbar-hide">
              {POPULAR_PRODUCTS.map(product => (
                <div 
                  key={product.id}
                  className="flex-shrink-0 w-72 sm:w-80 snap-start"
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>

            {/* Botón de explorar */}
            <div className="mt-12 text-center">
              <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Explora el menú
                <FiArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularProducts
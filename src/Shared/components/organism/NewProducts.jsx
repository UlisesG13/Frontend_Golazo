import { FiShoppingCart } from 'react-icons/fi'
import RatingStars from '../atom/RatingStars'
import ProductListItem from '../molecules/ProductListItem'

const FEATURED_PRODUCT = {
  name: "Puma Future Ultimate NC 'Mad Brillance Pack'",
  image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  rating: 5,
  price: 800
}

const NEW_PRODUCTS = [
  {
    id: 1,
    name: "Puma Future 7 Match TT (Turf Trainer)",
    price: 1280,
    rating: 5,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    id: 2,
    name: "Nike Phantom GT+ Academy Dynamic",
    price: 1450,
    rating: 5,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
  },
  {
    id: 3,
    name: "Mizuno Morelia Neo Soul",
    price: 1200,
    rating: 4,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570"
  }
]

const NewProducts = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center font-serif mb-12">
          Productos Nuevos
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="lg:pr-8">
            <div className="bg-white rounded-lg p-6">
              <div className="aspect-square bg-white rounded-lg mb-6">
                <img
                  src={FEATURED_PRODUCT.image}
                  alt={FEATURED_PRODUCT.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {FEATURED_PRODUCT.name}
                </h3>

                <div className="flex items-center gap-2">
                  <RatingStars rating={FEATURED_PRODUCT.rating} size="lg" />
                  <span className="text-sm text-gray-500">(5.0)</span>
                </div>

                <div className="text-3xl font-bold text-gray-900">
                  ${FEATURED_PRODUCT.price}
                </div>

                <button className="w-full flex items-center justify-center gap-2 bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors">
                  <FiShoppingCart className="w-5 h-5" />
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Descripción</h4>
              <p className="text-sm text-gray-600">
                Estos guantes Puma Future destacan por su característica palma Nature Core con un agarre superior en todas las condiciones. Sus puntos negros en las palmas proporcionan un control adicional y la tecnología de absorción de impactos protege tus manos durante los partidos más intensos.
                <span className="block mt-2">
                  <a href="#" className="text-teal-600 hover:underline">
                    See More {'>'}
                  </a>
                </span>
              </p>
            </div>

            <div className="bg-white rounded-lg">
              <div className="max-h-[400px] overflow-y-auto">
                {NEW_PRODUCTS.map(product => (
                  <ProductListItem key={product.id} {...product} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="fixed right-4 z-50 space-y-4">
          <button className="w-12 h-12 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-90 transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20M13 7H11V13H17V11H13V7Z"/>
            </svg>
          </button>
          <button className="w-12 h-12 bg-pink-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-90 transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default NewProducts
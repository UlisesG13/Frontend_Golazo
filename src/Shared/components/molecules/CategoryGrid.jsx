import { FiArrowRight, FiSearch } from 'react-icons/fi'

const CATEGORIES = [
  { 
    id: 1,
    title: 'Calzado deportivo',
    image: '/src/assets/img/TacosNike.jpg',
    size: 'large'
  },
  { 
    id: 2,
    title: 'Playeras de Fútbol',
    image: '/src/assets/img/playeraBarca.jpg',
  },
  { 
    id: 3,
    title: 'Calcetas y medias especiales',
    image: '/src/assets/img/calcetas.jpg',
  },
  { 
    id: 4,
    title: 'Espinilleras',
    image: '/src/assets/img/espinilleras.jpg',
  },
  { 
    id: 5,
    title: 'Guantes de Portero',
    image: '/src/assets/img/guantes.jpg',
  },
  { 
    id: 6,
    title: 'Accesorios para Futbolistas',
    image: '/src/assets/img/negritocongorra.jpg',
    badge: '+'
  },

]

const CategoryGrid = () => {
  return (

      <div className="grid grid-cols-12 gap-4">
        {/* Lista de categorías */}
        <div className="col-span-3 space-y-3">
          {CATEGORIES.map(category => (
            <a
              key={category.id}
              href="#"
              className="block text-sm text-gray-700 hover:text-black transition-colors"
            >
              {category.title}
              {category.badge && (
                <span className="ml-1 text-xs text-gray-400">{category.badge}</span>
              )}
            </a>
          ))}
          <button className="mt-4 flex items-center gap-2 text-sm font-medium text-black hover:text-gray-700 transition-colors">
            All Categories
            <FiArrowRight className="w-4 h-9" />
          </button>
        </div>

        {/* Grid de imágenes */}
        <div className="col-span-9 grid grid-cols-2 gap-4">
          {/* Primer producto (grande) */}
          <div className="col-span-2 relative group">
            <img
              src={CATEGORIES[0].image}
              alt={CATEGORIES[0].title}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white px-6 py-2 rounded text-sm font-medium">
                Explora
              </button>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="text-3xl font-bold text-white">
                {CATEGORIES[0].title}
              </h3>
            </div>
          </div>

          {/* Segundo producto */}
          <div className="relative group">
            <img
              src={CATEGORIES[1].image}
              alt={CATEGORIES[1].title}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white px-6 py-2 rounded text-sm font-medium">
                Explora
              </button>
            </div>
          </div>

          {/* Tercer producto */}
          <div className="relative group">
            <img
              src={CATEGORIES[3].image}
              alt={CATEGORIES[3].title}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white px-6 py-2 rounded text-sm font-medium">
                Explora
              </button>
            </div>
          </div>

          {/* Cuarto producto */}
          <div className="relative group">
            <img
              src={CATEGORIES[4].image}
              alt={CATEGORIES[4].title}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white px-6 py-2 rounded text-sm font-medium">
                Explora
              </button>
            </div>
          </div>

            {/* quinto producto */}
          <div className="relative group">
            <img
              src={CATEGORIES[5].image}
              alt={CATEGORIES[5].title}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white px-6 py-2 rounded text-sm font-medium">
                Explora
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CategoryGrid

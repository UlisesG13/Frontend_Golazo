import Navbar from '../components/organism/Navbar'
import Hero from '../components/molecules/Hero'
import CategoryGrid from '../components/molecules/CategoryGrid'
import PopularProducts from '../components/organism/PopularProducts'
import NewProducts from '../components/organism/NewProducts'

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Navbar is fixed so include it once at top-level */}
      <Navbar />

      {/* Hero should occupy the full viewport */}
      <Hero />

      {/* Categorías */}
      <main className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="explora" className="text-4xl font-bold mb-12 text-center font-serif">
            Explora por categoría
          </h2>
          <CategoryGrid />
        </div>
      </main>

      {/* Productos Populares */}
      <PopularProducts />

      {/* Productos Nuevos */}
      <NewProducts />
    </div>
  )
}

export default LandingPage

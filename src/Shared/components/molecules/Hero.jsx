const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{ height: '100vh' }} // asegurar exactamente 100vh visual
    >
      {/* Background image (Unsplash sports / tenis) */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/src/assets/img/pansNike.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        aria-hidden="true"
      />

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* centered content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-white max-w-2xl text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Ofertas Exclusivas en
            <span className="block text-4xl md:text-6xl lg:text-7xl mt-2">Tenis Deportivos</span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/90">Explora diferentes categorías. Encuentra las mejores ofertas.</p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#" className="bg-white text-black px-5 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
              Compra ahora
            </a>
            <a href="#explora" className="border border-white text-white px-5 py-3 rounded hover:bg-white/10 transition-colors">
              Explorar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

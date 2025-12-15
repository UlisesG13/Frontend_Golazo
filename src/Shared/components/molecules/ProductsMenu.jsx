import React from 'react';

/**
 * MOLÉCULA: Menú desplegable con las categorías de productos.
 * Muestra 3 columnas: Tenis, Ropa, Accesorios.
 */
const ProductsMenu = () => {
  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-8 px-4 animate-in fade-in slide-in-from-top-5 duration-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
        
        {/* Columna 1: Tenis */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg text-black border-b border-gray-200 pb-2">Tenis</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600 hover:translate-x-1 transition-all inline-block">Tenis Fútbol soccer</a></li>
            <li><a href="#" className="hover:text-blue-600 hover:translate-x-1 transition-all inline-block">Tenis Fútbol rápido</a></li>
            <li><a href="#" className="hover:text-blue-600 hover:translate-x-1 transition-all inline-block">Sneakers</a></li>
          </ul>
        </div>

        {/* Columna 2: Ropa */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg text-black border-b border-gray-200 pb-2">Ropa</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600 hover:translate-x-1 transition-all inline-block">Gorras</a></li>
            <li><a href="#" className="hover:text-blue-600 hover:translate-x-1 transition-all inline-block">Playeras</a></li>
            <li><a href="#" className="hover:text-blue-600 hover:translate-x-1 transition-all inline-block">Calcetas</a></li>
          </ul>
        </div>

        {/* Columna 3: Accesorios */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg text-black border-b border-gray-200 pb-2">Accesorios</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 cursor-not-allowed" title="Próximamente">Espinilleras</a></li>
            <li><a href="#" className="text-gray-400 cursor-not-allowed" title="Próximamente">Guantes</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ProductsMenu;
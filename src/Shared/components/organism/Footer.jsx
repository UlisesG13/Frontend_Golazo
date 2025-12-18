import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Bloque 1: Marca y Descripción */}
        <div className="space-y-4">
          <h3 className="text-white text-2xl font-bold tracking-tighter">GOLAZO</h3>
        </div>

        {/* Bloque 2: Navegación Tienda */}
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Tienda</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Nuevos Lanzamientos</a></li>
            <li><a href="#" className="hover:text-white transition">Hombres</a></li>
            <li><a href="#" className="hover:text-white transition">Mujeres</a></li>
            <li><a href="#" className="hover:text-white transition">Niños</a></li>
          </ul>
        </div>

        {/* Bloque 3: Navegación Soporte */}
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Soporte</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Estado del pedido</a></li>
            <li><a href="#" className="hover:text-white transition">Envíos y Devoluciones</a></li>
            <li><a href="#" className="hover:text-white transition">Preguntas Frecuentes</a></li>
            <li><a href="#" className="hover:text-white transition">Contacto</a></li>
          </ul>
        </div>

      
      </div>
      
      {/* Barra inferior de Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-stone-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2025 GolazoShop</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacidad</a>
          <a href="#" className="hover:text-white">Términos</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
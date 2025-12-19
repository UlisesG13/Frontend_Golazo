import React, { useState, useRef, useEffect } from 'react';
import Logo from '../atom/Logo.jsx'; // Asegúrate de que las rutas y nombres (mayús/minús) sean correctos
import NavLink from '../atom/Navbarlink.jsx';
import IconButton from '../atom/IconButton.jsx';
import { FiSearch, FiShoppingCart, FiUser, FiChevronDown } from 'react-icons/fi';
// Importamos el nuevo menú
import ProductsMenu from '../molecules/ProductsMenu.jsx';

const Navbar = () => {
  // Estado para controlar si el menú de productos está abierto o cerrado
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const menuRef = useRef(null);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  // Efecto para cerrar el menú si haces clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    // Añadimos 'ref={menuRef}' para detectar clics fuera
    <header 
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isProductsOpen ? 'bg-white shadow-sm' : 'bg-black/20 backdrop-blur-sm'}`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Pasamos una prop 'dark' al Logo si quieres que cambie de color cuando el fondo es blanco */}
        <Logo className={isProductsOpen ? "text-black" : "text-white"} />

        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="#" className={isProductsOpen ? "text-gray-800" : "text-white"}>Home</NavLink>
          
          {/* --- AQUÍ ESTÁ EL CAMBIO PRINCIPAL --- */}
          {/* En lugar de un NavLink simple, usamos un botón para "Products" */}
          <button 
            onClick={toggleMenu}
            className={`flex items-center gap-1 text-sm font-medium transition-colors focus:outline-none
              ${isProductsOpen ? 'text-blue-600' : 'text-white hover:text-gray-200'}
            `}
          >
            Products
            <FiChevronDown className={`transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
          </button>
          {/* ----------------------------------- */}

          <NavLink href="#" className={isProductsOpen ? "text-gray-800" : "text-white"}>Categorias</NavLink>
          <NavLink href="#" className={isProductsOpen ? "text-gray-800" : "text-white"}>About</NavLink>
          <NavLink href="#" className={isProductsOpen ? "text-gray-800" : "text-white"}>Contact Us</NavLink>
        </nav>

        <div className={`flex items-center gap-2 ${isProductsOpen ? "text-gray-800" : "text-white"}`}>
          <IconButton icon={FiSearch} />
          <IconButton icon={FiShoppingCart} />
          <IconButton icon={FiUser} />
        </div>
      </div>

      {/* Renderizado condicional del menú desplegable */}
      {isProductsOpen && <ProductsMenu />}
    </header>
  );
}

export default Navbar;
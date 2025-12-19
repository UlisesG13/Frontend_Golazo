import React from 'react';
// --- 1. IMPORTAR 'Link' Y 'useLocation' DE REACT-ROUTER-DOM ---
import { Link, useLocation } from 'react-router-dom';

/**
 * MOLÉCULA: Un enlace del sidebar.
 * Ahora usa Link de react-router-dom y detecta la ruta activa.
 */
// --- 2. CAMBIAR 'active' POR 'href' EN LOS PROPS ---
const SidebarLink = ({ icon, label, href }) => { 
  
  // --- 3. OBTENER LA UBICACIÓN ACTUAL ---
  const location = useLocation();
  
  // --- 4. CALCULAR SI ESTE ENLACE ESTÁ ACTIVO ---
  const active = location.pathname === href;

  return (
    // --- 5. CAMBIAR 'a' POR 'Link' Y USAR 'to={href}' ---
    <Link
      to={href}
      className={`
        flex items-center w-full px-4 py-3 gap-3 rounded-lg 
        ${active
          ? 'bg-gray-900 text-white' // Estilo activo
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900' // Estilo inactivo
        }
      `}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export default SidebarLink;
import { Bell } from 'lucide-react';
import IconButton from '../atom/IconButton';

// Datos de los enlaces de navegación
const topNavLinks = ['Resumen', 'Classes', 'Students', 'Groups', 'Reportes'];

/**
 * ORGANISMO: La barra de navegación superior.
 * Compuesta por Átomos de enlace y el Átomo 'IconButton'.
 */
const TopNav = () => (
  <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200">
    <div className="flex items-center gap-6">
      {topNavLinks.map((link) => (
        <a key={link} href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
          {link}
        </a>
      ))}
    </div>
    <div className="flex items-center">
      <IconButton>
        <Bell size={20} />
      </IconButton>
      {/* Aquí iría un Átomo de Avatar */}
    </div>
  </header>
);

export default TopNav;
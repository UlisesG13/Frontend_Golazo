import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut 
} from 'lucide-react';
import Logo from '../atom/Logos.jsx';
import SidebarLink from '../molecule/SidebarLink.jsx';

// Datos de los enlaces del Sidebar
const sidebarLinks = [
  { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
  { icon: <Package size={20} />, label: 'Gestión de productos' },
  { icon: <ShoppingCart size={20} />, label: 'Pedidos' },
  { icon: <Users size={20} />, label: 'Clientes' },
  { icon: <BarChart3 size={20} />, label: 'Reportes' },
  { icon: <Settings size={20} />, label: 'Configuración' },
];

/**
 * ORGANISMO: El Sidebar completo.
 * Compuesto por Moléculas 'SidebarLink' y el Átomo 'Logo'.
 */
const Sidebar = () => (
  <aside className="flex flex-col h-screen w-64 border-r border-gray-200 bg-white">
    <div className="p-6">
      <Logo />
    </div>
    <nav className="flex-1 px-4 py-2 space-y-2">
      {sidebarLinks.map((link) => (
        <SidebarLink key={link.label} {...link} />
      ))}
    </nav>
    <div className="p-4 border-t border-gray-200">
      <SidebarLink icon={<LogOut size={20} />} label="Cerrar Sesión" />
    </div>
  </aside>
);

export default Sidebar;
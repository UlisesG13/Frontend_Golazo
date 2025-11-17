import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut, 
  Ticket 
} from 'lucide-react';
// OJO: Revisa que esta ruta a tu logo sea correcta (vi 'Logos.jsx' en un error anterior)
// --- CORREGIDO: Cambiado de 'Logo.jsx' a 'Logos.jsx' ---
import Logo from '../atom/Logos.jsx'; 
import SidebarLink from '../molecule/SidebarLink.jsx';

// --- 1. ¡ACTUALIZADO! AÑADIR 'href' A CADA ENLACE ---
// Estos 'href' deben coincidir con las rutas que definiste en App.jsx
const sidebarLinks = [
  { icon: <LayoutDashboard size={20} />, label: 'Dashboard', href: '/admin' },
  { icon: <Package size={20} />, label: 'Gestión de productos', href: '/admin/productos' },
  { icon: <ShoppingCart size={20} />, label: 'Pedidos', href: '/admin/pedidos' }, // (Añade esta ruta en App.jsx cuando la crees)
  { icon: <Ticket size={20} />, label: 'Promociones', href: '/admin/promociones' },
  { icon: <Users size={20} />, label: 'Clientes', href: '/admin/clientes' }, // (Añade esta ruta en App.jsx cuando la crees)
  { icon: <BarChart3 size={20} />, label: 'Reportes', href: '/admin/reportes' }, // (Añade esta ruta en App.jsx cuando la crees)
  { icon: <Settings size={20} />, label: 'Configuración', href: '/admin/configuracion' }, // (Añade esta ruta en App.jsx cuando la crees)
];

const Sidebar = () => (
  <aside className="flex flex-col h-screen w-64 border-r border-gray-200 bg-white">
    <div className="p-6">
      <Logo />
    </div>
    <nav className="flex-1 px-4 py-2 space-y-2">
      {sidebarLinks.map((link) => (
        // --- 2. PASAR 'href' AL COMPONENTE SidebarLink ---
        <SidebarLink 
          key={link.label} 
          icon={link.icon} 
          label={link.label} 
          href={link.href} 
        />
      ))}
    </nav>
    <div className="p-4 border-t border-gray-200">
      {/* --- 3. ACTUALIZAR TAMBIÉN EL ENLACE DE CERRAR SESIÓN (ahora apunta a '/') --- */}
      <SidebarLink icon={<LogOut size={20} />} label="Cerrar Sesión" href="/" />
    </div>
  </aside>
);

export default Sidebar;
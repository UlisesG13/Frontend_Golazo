import React from 'react';
import Sidebar from '../organism/Sidebar';
import TopNav from '../organism/TopNav';

/**
 * Esta es tu PLANTILLA de Administrador.
 * Pertenece al Nivel 4 (Templates).
 * Define la estructura de la página (Sidebar + Contenido)
 * pero no sabe qué contenido específico mostrará.
 */
const AdminLayout = ({ children }) => (
  <div className="flex h-screen bg-gray-50">
    {/* Organismo: Sidebar */}
    <Sidebar />
    
    <div className="flex flex-col flex-1 overflow-hidden">
      {/* Organismo: TopNav */}
      <TopNav />
      
      {/* 'children' es donde se renderizará tu página (AdminDashboard) */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  </div>
);

export default AdminLayout;
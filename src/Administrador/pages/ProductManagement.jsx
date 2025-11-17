import React from 'react';
// Rutas corregidas para coincidir con tu estructura de carpetas
import AdminLayout from '../components/template/AdminLayout.jsx';
import PageHeader from '../components/organism/PageHeader.jsx';
import StatsGrid from '../components/organism/StatsGrid.jsx';
import SectionHeader from '../components/organism/SectionHeader.jsx';
import ProductListTable from '../components/organism/ProductListTable.jsx';

// Datos simulados para las tarjetas de estadísticas de esta página
const statsData = [
  { title: 'Productos Totales', value: '1' },
  { title: 'Tenis', value: '20' }, // Asumo que "Tenis" es una categoría
  { title: 'Producto mas vendido', value: 'Tenis' },
  { title: 'Ventas totales', value: '2' }, // Este dato ya lo teníamos
];

/**
 * PÁGINA: Gestion de Productos.
 * Ensambla la plantilla y los organismos necesarios para esta vista.
 */
export default function ProductManagementPage() {
  return (
    <AdminLayout>
      {/* Organismo Reutilizado: Solo pasamos un título */}
      <PageHeader title="Gestion de Productos" />

      {/* Organismo Reutilizado: Pasamos los nuevos datos */}
      <div className="mt-8">
        <StatsGrid stats={statsData} />
      </div>

      {/* Organismo Nuevo: El header de la sección "Productos" */}
      <SectionHeader />

      {/* Organismo Nuevo: La tabla de productos */}
      <ProductListTable />
    </AdminLayout>
  );
}
import React from 'react';
import AdminLayout from '../components/template/AdminLayout.jsx';
import PageHeader from '../components/organism/PageHeader.jsx';
import StatsGrid from '../components/organism/StatsGrid.jsx';
import SectionHeader from '../components/organism/SectionHeader.jsx';
import PromotionsListTable from '../components/organism/PromotionsListTable.jsx';

// Datos simulados para las tarjetas de estadísticas de esta página
const statsData = [
  { title: 'Promociones', value: '100' },
  { title: 'Promociones disponibles', value: '20' },
];

/**
 * PÁGINA: Gestion de Promociones.
 * Ensambla la plantilla y los organismos necesarios para esta vista.
 */
export default function PromotionsPage() {
  return (
    <AdminLayout>
      {/* Organismo Reutilizado: Solo pasamos nuevos títulos */}
      <PageHeader 
        title="Promociones" 
        description="Promociones disponibles" 
      />

      {/* Organismo Reutilizado: Pasamos los nuevos datos */}
      <div className="mt-8">
        <StatsGrid stats={statsData} />
      </div>

      {/* Organismo Reutilizado: Título y botón */}
      <SectionHeader />

      {/* Organismo Nuevo: La tabla de promociones */}
      <PromotionsListTable />
    </AdminLayout>
  );
}
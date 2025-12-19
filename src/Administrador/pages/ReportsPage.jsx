import React, { useState } from 'react';
import AdminLayout from '../components/template/AdminLayout.jsx';
import PageHeader from '../components/organism/PageHeader.jsx';
import StatsGrid from '../components/organism/StatsGrid.jsx';
import ReportGeneratorGrid from '../components/organism/ReportGeneratorGrid.jsx';
import CatalogOptionsGrid from '../components/organism/CatalogOptionsGrid.jsx';
import SalesOptionsGrid from '../components/organism/SalesOptionsGrid.jsx';

const statsData = [
  { title: 'Pedidos pendientes', value: '1' },
  { title: 'Ingresos totales', value: '$20' },
  { title: 'Clientes registrados', value: '3' },
  { title: 'Ventas totales', value: '2' },
];

export default function ReportsPage() {
  // Estados para controlar qué opciones se muestran
  const [showCatalogOptions, setShowCatalogOptions] = useState(false);
  const [showSalesOptions, setShowSalesOptions] = useState(false);

  // Función para click en "Catálogo"
  const handleCatalogClick = () => {
    setShowCatalogOptions(prev => !prev);
    setShowSalesOptions(false); // Cierra ventas si está abierto
  };

  // Función para click en "Ventas"
  const handleSalesClick = () => {
    setShowSalesOptions(prev => !prev);
    setShowCatalogOptions(false); // Cierra catálogo si está abierto
  };

  return (
    <AdminLayout>
      <PageHeader title="Reportes" description="Genera tus reportes" />
      
      <div className="mt-8">
        <StatsGrid stats={statsData} />
      </div>

      {/* Pasamos ambas funciones al grid */}
      <ReportGeneratorGrid 
        onCatalogClick={handleCatalogClick} 
        onSalesClick={handleSalesClick} 
      />

      {/* Renderizado condicional de las opciones */}
      {showCatalogOptions && <CatalogOptionsGrid />}
      {showSalesOptions && <SalesOptionsGrid />}
    </AdminLayout>
  );
}
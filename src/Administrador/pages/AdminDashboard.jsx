import React from 'react';
import AdminLayout from '../components/template/AdminLayout.jsx';
import PageHeader from '../components/organism/PageHeader.jsx';
import StatsGrid from '../components/organism/StatsGrid.jsx';
import RecentOrdersTable from '../components/organism/RecentOrdersTable.jsx';

// --- Tus datos (simulados) ---
// En un proyecto real, esto vendría de una API
const statsData = [
  { title: 'Pedidos pendientes', value: '1' },
  { title: 'Ingresos totales', value: '$20' },
  { title: 'Clientes registrados', value: '3' },
  { title: 'Ventas totales', value: '2' },
];

const ordersData = [
  { id: '#GOL-001', cliente: 'Juan Pérez', productos: 'Tenis Fútbol Soccer', total: '$1,299', estado: 'Completado', fecha: 'Hoy' },
  { id: '#GOL-002', cliente: 'María García', productos: 'Playera + Espinilleras', total: '$850', estado: 'Procesando', fecha: 'Ayer' },
  { id: '#GOL-003', cliente: 'Carlos López', productos: 'Tenis Fútbol Rápido', total: '$1,150', estado: 'Pendiente', fecha: '2 días' },
  { id: '#GOL-004', cliente: 'Ana Rodríguez', productos: 'Gorra + Calcetas', total: '$420', estado: 'Completado', fecha: '3 días' },
];

/**
 * Esta es tu PÁGINA de Admin Dashboard.
 * Pertenece al Nivel 5 (Pages).
 * Importa la Plantilla (AdminLayout) y la llena con Organismos.
 */
export default function AdminDashboard() {
  return (
    <AdminLayout>
      <PageHeader
        title="Dashboard"
        greeting="¡BIENVENIDO DE VUELTA!"
        description="Aquí tienes un resumen de tu tienda GOLAZO"
      />
      <div className="mt-8">
        <StatsGrid stats={statsData} />
      </div>
      <div className="mt-8">
        <RecentOrdersTable orders={ordersData} />
      </div>
    </AdminLayout>
  );
}
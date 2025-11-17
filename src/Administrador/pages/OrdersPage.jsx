
import AdminLayout from '../components/template/AdminLayout.jsx';
import PageHeader from '../components/organism/PageHeader.jsx';
import StatsGrid from '../components/organism/StatsGrid.jsx';
import RecentOrdersTable from '../components/organism/RecentOrdersTable.jsx';

// --- Tus datos (simulados) ---
// Estos son los mismos datos que en el Dashboard, tal como muestra la captura
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
 * PÁGINA: Pedidos (Nivel 5)
 * Ensambla los organismos existentes en la plantilla.
 */
export default function OrdersPage() {
  return (
    <AdminLayout>
      {/* 1. Organismo PageHeader (reutilizado) */}
      <PageHeader 
        title="Pedidos" 
        description="Pedidos de Golazo" 
      />
      
      {/* 2. Organismo StatsGrid (reutilizado) */}
      <div className="mt-8">
        <StatsGrid stats={statsData} />
      </div>
      
      {/* 3. Organismo RecentOrdersTable (reutilizado) */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Pedidos recientes</h3>
        <RecentOrdersTable orders={ordersData} />
      </div>
    </AdminLayout>
  );
}
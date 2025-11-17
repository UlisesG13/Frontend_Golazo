import React from 'react';
// Reutilizamos el Átomo de Botón y el Átomo de Badge
import Button from '../atom/Button.jsx';
import Badge from '../atom/Badge.jsx'; // Asegúrate de que la ruta a tu átomo Badge sea correcta

// Datos simulados para la tabla de promociones
const promotionsData = [
  { id: '#PROMO-001', codigo: 'GOLAZO10', usosDisponibles: 50, usosMaximos: 100, activa: true, fechaExp: '25-12-2025' },
  { id: '#PROMO-002', codigo: 'VERANO20', usosDisponibles: 10, usosMaximos: 10, activa: false, fechaExp: '31-08-2025' },
  { id: '#PROMO-003', codigo: 'NUEVOUSER', usosDisponibles: 999, usosMaximos: 1000, activa: true, fechaExp: 'N/A' },
];

// Los nuevos encabezados que definiste
const headers = [
  'ID PROMOCION', 
  'CODIGO', 
  'USOS DISPONIBLES', 
  'USOS MAXIMOS', 
  'ACTIVA', 
  'FECHA EXPIRACION',
  'ACCIONES' // Añadí acciones
];

/**
 * ORGANISMO: La tabla que lista las promociones y sus acciones.
 */
const PromotionsListTable = () => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {promotionsData.map((promo) => (
            <tr key={promo.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-700">{promo.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{promo.codigo}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{promo.usosDisponibles}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{promo.usosMaximos}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {/* Reutilizamos el Badge para el estado */}
                {promo.activa 
                  ? <Badge text="Activa" variant="Completado" /> 
                  : <Badge text="No" variant="Pendiente" />
                }
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{promo.fechaExp}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm flex items-center gap-2">
                <Button variant="secondary">Editar</Button>
                <Button variant="danger">Desactivar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default PromotionsListTable;
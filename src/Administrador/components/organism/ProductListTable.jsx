import React from 'react';
import Button from '../atom/Button.jsx';

// Datos simulados para la tabla de productos
const productsData = [
  { id: '#PROD-001', nombre: 'Tenis Fútbol Soccer' },
  { id: '#PROD-002', nombre: 'Playera Deportiva' },
  { id: '#PROD-003', nombre: 'Balón de Fútbol' },
];

/**
 * ORGANISMO: La tabla que lista los productos y sus acciones.
 */
const ProductListTable = () => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {['ID PRODUCTO', 'NOMBRE', 'ACCIONES'].map((header) => (
              <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {productsData.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-700">{product.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.nombre}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm flex items-center gap-2">
                <Button variant="primary">Ver datos completos</Button>
                <Button variant="secondary">Editar</Button>
                <Button variant="danger">Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ProductListTable;
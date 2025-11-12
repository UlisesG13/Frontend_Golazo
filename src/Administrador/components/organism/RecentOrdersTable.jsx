import Badge from '../atom/Badge.jsx';

/**
 * ORGANISMO: La tabla de pedidos recientes.
 * Compuesta por Átomos de texto y la Molécula 'Badge'.
 */
const RecentOrdersTable = ({ orders }) => (
  <div className="mt-8 bg-white border border-gray-200 rounded-lg shadow-sm">
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-900">Pedidos recientes</h3>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {['ID PEDIDO', 'CLIENTE', 'PRODUCTOS', 'TOTAL', 'ESTADO', 'FECHA'].map((header) => (
              <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.cliente}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.productos}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.total}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <Badge text={order.estado} variant={order.estado} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default RecentOrdersTable;
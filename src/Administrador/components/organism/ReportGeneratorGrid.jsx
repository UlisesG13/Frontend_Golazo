import React from 'react';
// Asegúrate de que la ruta apunte a tu archivo 'ReportCard.jsx' (singular)
import ReportCard from '../molecule/ReportCard.jsx'; 

// Datos para las tarjetas de reportes con sus IDs únicos
const reportCardsData = [
  { id: 'catalog', title: 'Genera Catalogo de productos', actionText: 'Click aqui!' },
  { id: 'sales', title: 'Genera Reporte de ventas hechas', actionText: 'Click aqui!' },
  { id: 'pending', title: 'Genera Reporte de ventas pendientes', actionText: 'Click aqui!' },
  { id: 'placeholder', title: 'GOLAZO', actionText: '', isPlaceholder: true },
];

/**
 * ORGANISMO: Muestra el título y la cuadrícula de reportes.
 * Recibe las funciones para manejar los clics de las diferentes tarjetas.
 */
const ReportGeneratorGrid = ({ onCatalogClick, onSalesClick }) => (
  <div className="mt-10">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">Pedidos recientes</h3>
    
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {reportCardsData.map((card) => {
        
        // Lógica para asignar la función correcta según el ID de la tarjeta
        const clickHandler = 
          card.id === 'catalog' ? onCatalogClick :
          card.id === 'sales'   ? onSalesClick :
          undefined; // Las otras tarjetas (pending, placeholder) no hacen nada

        return (
          <ReportCard
            key={card.id}
            title={card.title}
            actionText={card.actionText}
            isPlaceholder={card.isPlaceholder}
            // Pasamos la función correspondiente (o undefined)
            onClick={clickHandler}
          />
        );
      })}
    </div>
  </div>
);

export default ReportGeneratorGrid;
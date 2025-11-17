import React from 'react';
// Importamos la molécula reutilizable
// Asegúrate de que sea 'OptionCard.jsx' (singular) o 'OptionCards.jsx' (plural) según tu archivo
import OptionCard from '../molecule/OptionCard.jsx'; 

// Datos para las nuevas tarjetas de ventas
const options = [
  { text: 'Todo el año' },
  { text: 'Ultimo mes' },
  { text: 'Ultima semana' },
];

/**
 * ORGANISMO: Muestra la cuadrícula de 3 opciones 
 * para el reporte de ventas.
 */
const SalesOptionsGrid = () => (
  <div className="mt-8">
    {/* Título de la sección */}
    <h3 className="text-xl font-semibold text-gray-900 mb-4">Opciones</h3>
    
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {options.map((opt) => (
        <OptionCard key={opt.text} text={opt.text} />
      ))}
    </div>
  </div>
);

export default SalesOptionsGrid;
import React from 'react';

/**
 * MOLÉCULA: Una tarjeta simple para las sub-opciones de reporte.
 * (Guardado como 'OptionCards.jsx' para seguir tu patrón plural)
 */
const OptionCard = ({ text }) => (
  <button
    type="button"
    className="flex items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm h-36
               hover:shadow-md hover:border-gray-300 transition-shadow duration-200 focus:outline-none 
               focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  >
    <h3 className="text-xl font-bold text-gray-900">{text}</h3>
  </button>
);

export default OptionCard;
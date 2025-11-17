import React from 'react';

/**
 * MOLÉCULA: Una tarjeta clickeable para generar un reporte.
 * (Archivo nombrado 'ReportCard.jsx' (singular)
 * --- 1. ACEPTAR 'onClick' COMO PROP ---
 */
const ReportCard = ({ title, actionText, isPlaceholder = false, onClick }) => {
  
  // Lógica para la tarjeta placeholder (sin cambios)
  if (isPlaceholder) {
    return (
      <div className="flex items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm h-36">
        <span className="text-gray-400 font-medium">{title}</span>
      </div>
    );
  }

  // Lógica para las tarjetas normales
  return (
    <button
      type="button"
      // --- 2. ASIGNAR EL EVENTO 'onClick' AL BOTÓN ---
      onClick={onClick}
      // Deshabilitar el botón si no tiene una función onClick (ej. "ventas hechas")
      disabled={!onClick} 
      className={`
        flex flex-col justify-center text-left p-6 bg-white border border-gray-200 rounded-lg shadow-sm h-36
        transition-shadow duration-200 
        ${/* --- 3. CAMBIAR ESTILO SI ES CLICKEABLE O NO --- */ ''}
        ${onClick 
          ? 'hover:shadow-md hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer' // Estilo Clickeable
          : 'opacity-70 cursor-not-allowed' // Estilo para tarjetas no clickeables
        }
      `}
    >
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <h3 className="mt-2 text-2xl font-bold text-gray-900">{actionText}</h3>
    </button>
  );
};

export default ReportCard;
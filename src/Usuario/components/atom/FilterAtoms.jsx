import React from 'react';
import { Check } from 'lucide-react';

/**
 * ATOM: FilterChip
 * Botón pequeño para selección única o múltiple (ej. Tallas)
 */
export const FilterChip = ({ label, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 text-sm font-medium rounded transition-all duration-200 border
        ${isSelected 
          ? 'bg-black text-white border-black' 
          : 'bg-white text-gray-700 border-gray-200 hover:border-black'
        }
      `}
    >
      {label}
    </button>
  );
};

/**
 * ATOM: FilterCheckbox
 * Checkbox estilizado para listas (ej. Marcas, Tipos)
 */
export const FilterCheckbox = ({ label, isChecked, onChange }) => {
  return (
    <label className="flex items-center space-x-3 cursor-pointer group select-none">
      <div className="relative flex items-center justify-center w-5 h-5">
        <input 
          type="checkbox" 
          className="peer sr-only" 
          checked={isChecked} 
          onChange={onChange}
        />
        {/* Caja del checkbox */}
        <div className={`
          w-5 h-5 border rounded transition-all duration-200
          ${isChecked ? 'bg-black border-black' : 'bg-white border-gray-300 group-hover:border-black'}
        `}></div>
        {/* Icono Check */}
        <Check 
          size={12} 
          className={`
            absolute text-white transition-opacity duration-200 pointer-events-none
            ${isChecked ? 'opacity-100' : 'opacity-0'}
          `} 
        />
      </div>
      <span className={`text-sm transition-colors ${isChecked ? 'text-black font-medium' : 'text-gray-600 group-hover:text-black'}`}>
        {label}
      </span>
    </label>
  );
};
import React from 'react';
import { Filter, ChevronDown, LayoutGrid, List } from 'lucide-react';

const ProductSortBar = ({ 
  totalResults, 
  startRange, 
  endRange, 
  onToggleSidebar 
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-4 border-b border-gray-100 gap-4">
      
      {/* Botón Trigger de Filtros (Solo Móvil) */}
      <button 
        onClick={onToggleSidebar}
        className="lg:hidden flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm font-bold transition-colors"
      >
        <Filter size={16} />
        Filtros
      </button>

      {/* Contador de Resultados */}
      <div className="text-sm text-gray-500">
        Mostrando <span className="font-bold text-gray-900">{startRange}-{endRange}</span> de <span className="font-bold text-gray-900">{totalResults}</span> productos
      </div>

      {/* Controles de Derecha */}
      <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
        
        {/* Dropdown Ordenar */}
        <div className="flex items-center gap-2 relative group cursor-pointer">
            <span className="text-sm text-gray-500">Ordenar por:</span>
            <button className="flex items-center gap-1 text-sm font-bold text-gray-900 hover:text-gray-600">
                Relevancia <ChevronDown size={14} />
            </button>
            {/* Aquí iría el dropdown menu absolute */}
        </div>

        {/* Switch de Vista (Grid/List) */}
        <div className="flex border border-gray-200 rounded-md p-0.5">
            <button className="p-1.5 bg-gray-100 rounded text-black shadow-sm">
                <LayoutGrid size={16} />
            </button>
            <button className="p-1.5 text-gray-400 hover:bg-gray-50 hover:text-gray-600 rounded transition-colors">
                <List size={16} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSortBar;
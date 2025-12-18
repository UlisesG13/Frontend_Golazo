import React from 'react';
import { X } from 'lucide-react';
import FilterSection from '../molecule/FilterSection.jsx';
import { FilterChip, FilterCheckbox } from '../atom/FilterAtoms'; // Asumiendo ruta relativa

const ProductFilterSidebar = ({ isOpen, onClose }) => {
  return (
    <aside className={`
      fixed inset-y-0 left-0 z-50 w-72 bg-white transform transition-transform duration-300 ease-in-out shadow-2xl 
      lg:shadow-none lg:transform-none lg:static lg:block lg:w-64 lg:border-r lg:border-gray-100 lg:pr-8
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      {/* Header Móvil */}
      <div className="flex justify-between items-center lg:hidden mb-6 px-6 pt-6">
        <span className="text-xl font-bold">Filtros</span>
        <button onClick={onClose}>
          <X size={24} />
        </button>
      </div>

      <div className="px-6 lg:px-0 overflow-y-auto h-full pb-20">
        
        {/* Sección: Tallas (Usa Atom FilterChip) */}
        <FilterSection title="Tallas">
          <div className="grid grid-cols-4 gap-2">
            {['24', '25', '26', '27', '28', '29', '30'].map((size) => (
              <FilterChip 
                key={size} 
                label={size} 
                isSelected={false} // Aquí conectarías tu lógica de estado
                onClick={() => console.log(`Talla ${size}`)} 
              />
            ))}
          </div>
        </FilterSection>

        {/* Sección: Corte (Usa Atom FilterCheckbox) */}
        <FilterSection title="Tipo de Corte">
          <div className="space-y-3">
            {['Tierra Firme', 'Terreno Blando', 'Césped Artificial', 'Indoor'].map((item) => (
              <FilterCheckbox
                key={item}
                label={item}
                isChecked={false}
                onChange={() => {}}
              />
            ))}
          </div>
        </FilterSection>

        {/* Sección: Rango de Precio (Elemento nativo html estilizado) */}
        <FilterSection title="Precio">
           <input 
             type="range" 
             className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black" 
           />
           <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
             <span>$1,200</span>
             <span>$5,000+</span>
           </div>
        </FilterSection>

        {/* Sección: Marcas (Usa Atom FilterCheckbox) */}
        <FilterSection title="Marcas">
          <div className="space-y-3">
            {['Nike', 'Adidas', 'Puma', 'Mizuno', 'Charly'].map((brand) => (
              <FilterCheckbox
                key={brand}
                label={brand}
                isChecked={brand === 'Nike'} // Ejemplo activado
                onChange={() => {}}
              />
            ))}
          </div>
        </FilterSection>

      </div>
    </aside>
  );
};

export default ProductFilterSidebar;
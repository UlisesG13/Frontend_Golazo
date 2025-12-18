import React from 'react';

/**
 * MOLECULE: FilterSection
 * Contenedor que agrupa un título y sus opciones (átomos)
 */
const FilterSection = ({ title, children, className = "" }) => {
  return (
    <div className={`mb-8 ${className}`}>
      <h3 className="font-bold text-gray-900 mb-4 text-xs uppercase tracking-widest">
        {title}
      </h3>
      <div className="w-full">
        {children}
      </div>
    </div>
  );
};

export default FilterSection;
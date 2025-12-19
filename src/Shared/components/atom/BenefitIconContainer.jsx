import React from 'react';

/**
 * ÁTOMO: Un contenedor circular para los iconos de la sección de beneficios.
 */
export const BenefitIconContainer = ({ children }) => (
  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
    {children}
  </div>
);

/**
 * ÁTOMO: Imagen para la galería.
 */
export const GalleryImage = ({ src, alt, className = '' }) => (
  <div className={`overflow-hidden rounded-lg ${className}`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      onError={(e) => {
        e.target.src = 'https://placehold.co/300x400/eeeeee/aaaaaa?text=Error';
      }}
    />
  </div>
);
import React from 'react';

/**
 * ÁTOMO: Botón genérico reutilizable.
 * Acepta una 'variant' para cambiar su estilo y color.
 */
const Button = ({ children, variant = 'primary', onClick }) => {
  const baseStyle = 'px-4 py-2 text-sm font-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-1';

  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'bg-yellow-400 text-gray-900 hover:bg-yellow-500 focus:ring-yellow-400',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
    success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500',
  };

  return (
    <button
      type="button"
      className={`${baseStyle} ${variants[variant] || variants.primary}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
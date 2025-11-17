import React from 'react';
// Importa la nueva molécula que acabamos de crear
// --- RUTA CORREGIDA ---
// Cambiado de 'OptionCards.jsx' (plural) a 'OptionCard.jsx' (singular)
import OptionCard from '../molecule/OptionCard.jsx';

// Datos para las nuevas tarjetas
const options = [
  { text: 'Por marca' },
  { text: 'Por talla' },
  { text: 'Por modelo' },
];

/**
 * ORGANISMO: Muestra la cuadrícula de 3 opciones 
 * ("Por marca", "Por talla", "Por modelo").
 */
const CatalogOptionsGrid = () => (
  <div className="mt-8">
    {/* Usamos 'lg:grid-cols-4' para mantener consistencia. La 4ta columna quedará vacía. */}
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {options.map((opt) => (
        <OptionCard key={opt.text} text={opt.text} />
      ))}
    </div>
  </div>
);

export default CatalogOptionsGrid;
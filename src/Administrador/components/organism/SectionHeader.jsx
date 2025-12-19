import React from 'react';
import { Plus } from 'lucide-react';
import Button from '../atom/Button.jsx';

/**
 * ORGANISMO: Un header de sección con un título y un botón de acción.
 */
const SectionHeader = () => (
  <div className="flex justify-between items-center mt-10 mb-4">
    <h2 className="text-2xl font-semibold text-gray-900">Productos</h2>
    <Button variant="success">
      <Plus size={18} />
      Agregar
    </Button>
  </div>
);

export default SectionHeader;
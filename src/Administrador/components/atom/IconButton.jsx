
/**
 * ÁTOMO: Un wrapper de ícono para unificar estilos.
 */
const IconButton = ({ children }) => (
  <button className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
    {children}
  </button>
);

export default IconButton;
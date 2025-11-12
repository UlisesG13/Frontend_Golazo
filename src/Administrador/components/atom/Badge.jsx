const Badge = ({ text, variant }) => {
  const baseStyle = 'px-3 py-1 text-xs font-medium rounded-full';
  const variants = {
    Completado: 'bg-green-100 text-green-800',
    Procesando: 'bg-blue-100 text-blue-800',
    Pendiente: 'bg-yellow-100 text-yellow-800',
  };
  return <span className={`${baseStyle} ${variants[variant] || 'bg-gray-100 text-gray-800'}`}>{text}</span>;
};

export default Badge;
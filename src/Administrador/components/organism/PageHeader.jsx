/**
 * ORGANISMO: El header de la página.
 * Compuesto por Átomos de Texto (h1, h2, p).
 */
const PageHeader = ({ title, greeting, description }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
    <h2 className="mt-2 text-xl font-semibold text-gray-700">{greeting}</h2>
    <p className="mt-1 text-gray-500">{description}</p>
  </div>
);

export default PageHeader;
const StatCard = ({ title, value }) => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
    <p className="text-sm font-medium text-gray-500">{title}</p>
    <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
  </div>
);

export default StatCard;
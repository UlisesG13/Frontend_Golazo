const SidebarLink = ({ icon, label, active = false }) => (
  <a
    href="#"
    className={`
      flex items-center w-full px-4 py-3 gap-3 rounded-lg 
      ${active
        ? 'bg-gray-900 text-white'
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }
    `}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </a>
);

export default SidebarLink;
const NavLink = ({ children, href = "#", className = "" }) => (
  <a 
    href={href} 
    className={`hover:text-gray-200 transition-colors text-sm font-medium ${className || 'text-white'}`}
  >
    {children}
  </a>
);

export default NavLink;
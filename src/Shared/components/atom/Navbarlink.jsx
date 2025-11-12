const NavLink = ({ children, href = "#" }) => (
  <a href={href} className="text-white hover:text-gray-200 transition-colors text-sm font-medium">
    {children}
  </a>
);

export default NavLink;
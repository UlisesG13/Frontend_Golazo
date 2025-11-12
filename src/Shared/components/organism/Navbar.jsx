import Logo from '../atom/logo'
import NavLink from '../atom/Navbarlink'
import IconButton from '../atom/IconButton'
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black/20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Categorias</NavLink>
          <NavLink href="#">Contact Us</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <IconButton icon={FiSearch} />
          <IconButton icon={FiShoppingCart} />
          <IconButton icon={FiUser} />
        </div>
      </div>
    </header>
  )
}

export default Navbar

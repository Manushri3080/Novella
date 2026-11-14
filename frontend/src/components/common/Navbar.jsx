
import { Link } from 'react-router'
import {
  Search,
  UserRound,
  Heart,
  ShoppingBag,
  Menu,
  X,
} from 'lucide-react'
import { useState } from 'react'
import logo from '../../assets/logo1.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'SHOP', path: '/shop' },
    { name: 'COLLECTIONS', path: '/collection' },
    { name: 'OUR SPACES', path: '/space' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-[#faf9f6]">
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-5 md:px-10">

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[11px] tracking-[0.18em] text-stone-700 transition-colors duration-300 hover:text-stone-400"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <img
            src={logo}
            alt="Novella Atelier"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Action Icons */}
        <div className="ml-auto flex items-center gap-4 md:gap-6">
          <Link to="/shop" aria-label="Search">
            <Search size={19} strokeWidth={1.5} />
          </Link>

          <Link to="/login" aria-label="Account">
            <UserRound size={19} strokeWidth={1.5} />
          </Link>

          <Link to="/wishlist" aria-label="Wishlist" className="hidden sm:block">
            <Heart size={19} strokeWidth={1.5} />
          </Link>

          <Link to="/cart" aria-label="Shopping bag">
            <ShoppingBag size={19} strokeWidth={1.5} />
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="flex flex-col gap-5 border-t border-stone-200 bg-[#faf9f6] px-6 py-6 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-xs tracking-[0.18em] text-stone-700"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Navbar


import { Link } from 'react-router'
import { Camera, ArrowUpRight } from 'lucide-react'
import logo from '../../assets/logo1.png'

function Footer() {
  return (
    <footer className="bg-[#25231f] text-[#f5f1e9]">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-12">

        {/* Footer Top */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/20 pb-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img
                src={logo}
                alt="Novella Atelier"
                className="mb-6 h-14 w-auto brightness-0 invert"
              />
            </Link>

            <p className="max-w-sm text-sm leading-7 text-stone-300">
              Thoughtfully curated spaces, timeless aesthetics, and
              meaningful design. Discover a world where every detail
              tells a story.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="mb-6 text-xs tracking-[0.2em] text-stone-400">
              EXPLORE
            </h3>

            <ul className="space-y-4 text-sm text-stone-200">
              <li><Link to="/shop" className="transition hover:text-white">Shop</Link></li>
              <li><Link to="/collection" className="transition hover:text-white">Collections</Link></li>
              <li><Link to="/space" className="transition hover:text-white">Our Spaces</Link></li>
              <li><Link to="/about" className="transition hover:text-white">Our Story</Link></li>
            </ul>
          </div>

          {/* Customer Links */}
          <div>
            <h3 className="mb-6 text-xs tracking-[0.2em] text-stone-400">
              CUSTOMER CARE
            </h3>

            <ul className="space-y-4 text-sm text-stone-200">
              <li><Link to="/contact" className="transition hover:text-white">Contact Us</Link></li>
              <li><Link to="/faq" className="transition hover:text-white">FAQs</Link></li>
              <li><Link to="/shipping" className="transition hover:text-white">Shipping & Returns</Link></li>
              <li><Link to="/privacy" className="transition hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 pt-8 text-xs text-stone-400 md:flex-row">
          <p>© {new Date().getFullYear()} Novella Atelier. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Camera size={18} />
            </a>

            <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-4.5 w-4.5 items-center justify-center rounded-full border border-stone-400 text-xs font-semibold">
                f
            </a>

            <Link to="/contact" className="flex items-center gap-1 transition hover:text-white">
              Get in touch <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

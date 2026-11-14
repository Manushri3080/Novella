
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import heroImage from '../../assets/hero.png'

function Herosection() {
  return (
    <section className="bg-[#faf9f6]">
      <div className="mx-auto grid min-h-162.5 max-w-[1600px] grid-cols-1 items-center gap-10 px-6 py-12 md:px-12 lg:grid-cols-2 lg:gap-16 lg:py-16">

        {/* Left: Editorial Content */}
        <div className="flex flex-col items-start justify-center">
          <p className="mb-6 text-[11px] tracking-[0.3em] text-stone-500">
            THE ART OF THOUGHTFUL LIVING
          </p>

          <h1 className="max-w-xl font-serif text-5xl leading-[1.15] tracking-tight text-[#292720] md:text-6xl lg:text-7xl">
            Spaces that tell
            <span className="block italic text-stone-500">
              your story.
            </span>
          </h1>

          <p className="mt-7 max-w-md text-sm leading-7 text-stone-600 md:text-base">
            Discover thoughtfully curated pieces that bring character,
            warmth, and timeless elegance into every corner of your home.
          </p>

          <Link
            to="/shop"
            className="group mt-9 inline-flex items-center gap-4 border-b border-stone-800 pb-3 text-xs tracking-[0.2em] text-stone-800 transition-all duration-300 hover:gap-6"
          >
            EXPLORE THE COLLECTION
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>

          <p className="mt-16 text-[10px] tracking-[0.25em] text-stone-400">
            CURATED WITH INTENTION · DESIGNED TO LAST
          </p>
        </div>

        {/* Right: Hero Image */}
        <div className="relative h-105 overflow-hidden md:h-137.5 lg:h-155">
          <img
            src={heroImage}
            alt="Novella Atelier editorial collection"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />

          <div className="absolute bottom-5 right-5 bg-[#faf9f6]/90 px-5 py-3">
            <p className="text-[10px] tracking-[0.2em] text-stone-700">
              NOVELLA ATELIER
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Herosection

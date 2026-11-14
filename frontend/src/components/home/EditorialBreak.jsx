
import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import secondImage from '../../assets/hero12.jpg'

function EditorialBreak() {
  return (
    <section className="bg-[#eae6dd] px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Editorial Image */}
        <div className="relative h-105 overflow-hidden md:h-150">
          <img
            src={secondImage}
            alt="A glimpse into the Novella design philosophy"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />

          <div className="absolute bottom-5 left-5 border border-white/70 px-4 py-3 text-[9px] tracking-[0.25em] text-white">
            THE NOVELLA JOURNAL
          </div>
        </div>

        {/* Editorial Content */}
        <div className="flex flex-col items-start lg:py-12">
          <p className="mb-7 text-[10px] tracking-[0.3em] text-stone-500">
            BEYOND THE ORDINARY
          </p>

          <h2 className="max-w-xl font-serif text-5xl leading-[1.2] text-[#292720] md:text-6xl">
            A home is more
            <span className="block italic text-stone-500">
              than a place.
            </span>
            <span className="block">It's a feeling.</span>
          </h2>

          <p className="mt-8 max-w-md text-sm leading-8 text-stone-600 md:text-base">
            We believe the spaces we live in should reflect the stories
            we carry. Every object, every texture, and every detail has
            the power to make a space feel uniquely yours.
          </p>

          <Link
            to="/about"
            className="group mt-10 inline-flex items-center gap-4 border-b border-stone-800 pb-3 text-[11px] tracking-[0.2em] text-stone-800 transition-all duration-300 hover:gap-6"
          >
            DISCOVER OUR STORY
            <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  )
}

export default EditorialBreak


import { Link } from 'react-router'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import heroImage from '../../assets/hero.png'
import secondImage from '../../assets/hero12.jpg'

const products = [
  {
    id: 1,
    name: 'The Sculptural Form',
    category: 'DECORATIVE OBJECTS',
    price: '₹2,499',
    image: heroImage,
  },
  {
    id: 2,
    name: 'The Art of Stillness',
    category: 'CURATED INTERIORS',
    price: '₹3,299',
    image: secondImage,
  },
]

function FeatureProducts() {
  return (
    <section className="bg-[#faf9f6] px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1600px]">

        {/* Section Heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[10px] tracking-[0.3em] text-stone-500">
              A SELECTION OF OUR FAVOURITES
            </p>

            <h2 className="font-serif text-4xl text-[#292720] md:text-5xl">
              Pieces worth <span className="italic text-stone-500">keeping.</span>
            </h2>
          </div>

          <Link
            to="/shop"
            className="group inline-flex items-center gap-3 border-b border-stone-800 pb-2 text-[11px] tracking-[0.18em] transition-all hover:gap-5"
          >
            VIEW ALL PIECES
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10">
          {products.map((product) => (
            <Link
              to="/shop"
              key={product.id}
              className="group block"
            >
              <div className="relative mb-5 h-95 overflow-hidden bg-[#f0ede6] md:h-120">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <span className="absolute right-4 top-4 bg-[#faf9f6] px-4 py-2 text-[9px] tracking-[0.15em] text-stone-700">
                  EDITOR'S PICK
                </span>

                <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#faf9f6] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-[9px] tracking-[0.2em] text-stone-500">
                    {product.category}
                  </p>

                  <h3 className="font-serif text-xl text-[#292720]">
                    {product.name}
                  </h3>
                </div>

                <p className="pt-4 text-sm text-stone-700">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FeatureProducts

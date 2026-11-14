
const brandValues = [
  'TIMELESS DESIGN',
  'THOUGHTFUL DETAILS',
  'CURATED LIVING',
  'ARTISANAL SPIRIT',
]

function BrandStrip() {
  return (
    <section className="border-y border-stone-200 bg-[#f3f0e9] py-10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">

        <p className="mb-8 text-center text-[10px] tracking-[0.3em] text-stone-500">
          THE NOVELLA PHILOSOPHY
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-20">
          {brandValues.map((value) => (
            <p
              key={value}
              className="text-center font-serif text-sm tracking-[0.12em] text-stone-700 transition-colors duration-300 hover:text-stone-400 md:text-base"
            >
              {value}
            </p>
          ))}
        </div>

      </div>
    </section>
  )
}

export default BrandStrip

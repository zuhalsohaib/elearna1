import { A, C, priceText } from "../data/data";

export default function CourseCard({ c, add }) {
  return (
    <article className="group bg-white transition-shadow duration-300 hover:shadow-[0_1.25rem_2.5rem_rgba(15,34,39,.15)]">
      <div className="relative">
        {/* image zooms in when you hover the card */}
        <div className="overflow-hidden">
          <img className="aspect-[256/160] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" src={C + c.img} alt={c.title} />
        </div>
        {/* price / Free button: turns yellow and grows when you hover it */}
        <button
          className="absolute -bottom-[1.625rem] right-5 z-[2] grid h-[3.25rem] w-[3.25rem] place-items-center rounded-full bg-royal font-head text-[0.9375rem] font-semibold text-white transition duration-300 hover:scale-110 hover:bg-accent hover:text-ink"
          title={c.price ? "Add to cart" : "Free"}
          onClick={() => c.price && add(c)}
        >
          {priceText(c.price)}
        </button>
      </div>
      <div className="px-5 py-[1.375rem]">
        <small className="mt-1.5 block text-[0.6875rem] uppercase">{c.cat}</small>
        <h5 className="mb-3 mt-2 min-h-[2.875rem] text-lg font-medium">{c.title}</h5>
        <div className="flex items-center gap-1.5 text-xs text-muted"><img className="h-3 w-auto" src={A + "66c6fb8b857efb6c4c737b5d_Rating.svg"} alt="" /><span>{c.rating} ({c.reviews})</span></div>
        <div className="relative mt-5 h-[3.125rem] border-t border-line">
          <div className="flex h-full group-hover:hidden">
            <span className="flex flex-1 items-center justify-center gap-2 text-xs"><img className="w-3" src={A + "66c6fb8b420a4f79326c2e96_Books.svg"} alt="" />{c.lessons} Lessons</span>
            <span className="flex flex-1 items-center justify-center gap-2 border-l border-line text-xs"><img className="w-3" src={A + "66c6fb8b73655bcf79451768_Person.svg"} alt="" />{c.enrolled} Enrolled</span>
          </div>
          <a href="#courses" className="absolute inset-x-0 top-3.5 hidden h-8 items-center justify-center bg-accent text-[0.8125rem] group-hover:flex">Course Details</a>
        </div>
      </div>
    </article>
  );
}

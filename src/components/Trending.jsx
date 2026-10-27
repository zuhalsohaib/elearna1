import { A, C, COURSES, priceText } from "../data/data";
import Reveal from "./Reveal";
import { wrap, label, h2, btnYellow } from "../styles/ui";

// Which side the white box opens on (cards on the right edge open it to the left)
const SIDE = [
  "left-[27%]",
  "right-[27%] lg:left-[27%] lg:right-auto",
  "left-[27%]",
  "right-[27%]",
];
const POINTS = ["Lorem ipsum dolor sit amet consectetur", "Lorem ipsum dolor", "Lorem ipsum dolor sit"];

export default function Trending({ add }) {
  const list = [COURSES[8], COURSES[3], COURSES[4], COURSES[5]];
  return (
    <section className="bg-soft pt-[6.875rem]">
      <div className={wrap}>
        <Reveal><div className={label}>Trending courses</div><h2 className={h2}>Explore our top programs</h2></Reveal>
        <div className="mt-[1.875rem] grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 lg:grid-cols-4">
          {list.map((c, i) => (
            <Reveal key={c.id} delay={i * 120} className="group relative hover:z-30">
              {/* the card: on hover the image grows to cover it and the text turns white */}
              <article className="relative aspect-[3/4] overflow-hidden bg-white">
                <div className="absolute inset-x-0 top-0 h-[55%] overflow-hidden transition-[height] duration-500 ease-out group-hover:h-full">
                  <img className="h-full w-full object-cover" src={C + c.img} alt={c.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <button
                  className="absolute right-3 top-3 z-10 grid h-[3.875rem] w-[3.875rem] place-items-center rounded-full bg-royal font-head text-lg font-semibold text-white transition duration-300 hover:scale-110 hover:bg-accent hover:text-ink"
                  title={c.price ? "Add to cart" : "Free"}
                  onClick={() => c.price && add(c)}
                >
                  {priceText(c.price)}
                </button>
                <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-7">
                  <small className="block text-[0.6875rem] uppercase text-[#4b5b5f] transition-colors duration-300 group-hover:text-white/80">{c.cat}</small>
                  <h5 className="mb-3 mt-2 text-lg font-medium leading-snug transition-colors duration-300 group-hover:text-white">{c.title}</h5>
                  <div className="flex items-center gap-1.5 text-xs text-muted transition-colors duration-300 group-hover:text-white">
                    <img className="h-3 w-auto" src={A + "66c6fb8b857efb6c4c737b5d_Rating.svg"} alt="" /><span>{c.rating} ({c.reviews})</span>
                  </div>
                </div>
              </article>

              {/* the white box that opens next to the card */}
              <div className={`invisible absolute top-[2%] z-20 w-[117%] bg-white p-6 opacity-0 shadow-[0_1.5rem_3.75rem_rgba(15,34,39,.3)] transition duration-300 max-sm:hidden group-hover:visible group-hover:opacity-100 ${SIDE[i]}`}>
                <h5 className="text-[1.1875rem] font-medium leading-snug">{c.title}</h5>
                <p className="my-3.5 text-[0.8125rem] uppercase tracking-wide text-muted">• {c.lessons} Lessons • {c.enrolled} Enrolled</p>
                <p className="text-[0.875rem] leading-relaxed text-muted">Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.</p>
                <ul className="my-3.5 space-y-1.5 text-[0.8125rem] text-muted">
                  {POINTS.map((t) => <li key={t} className="flex gap-2.5"><span>✓</span>{t}</li>)}
                </ul>
                <a href="#courses" className={`${btnYellow} block w-full !py-3 text-center`}>Course Details</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { A, C, priceText } from "../../data/data";
import Reveal from "../Reveal";

// Image card with the text on top.
// On hover: the picture zooms and the price / Free button gets big and turns yellow.
export default function OverlayCard({ c, add, delay = 0 }) {
  return (
    <Reveal delay={delay} className="group">
      <article className="relative aspect-[4/5] overflow-hidden bg-dark">
        <img className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" src={C + c.img} alt={c.title} />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.9),rgba(0,0,0,.5)_38%,transparent_68%)]" />
        <button
          className="absolute right-[6%] top-[5%] z-10 grid aspect-square w-[18%] min-w-[3.5rem] place-items-center rounded-full bg-royal font-head text-[clamp(.9rem,1.1vw,1.2rem)] font-semibold text-white shadow-[0_0_0_0_rgba(255,180,11,0)] transition-all duration-500 ease-out group-hover:scale-[1.3] group-hover:bg-accent group-hover:text-ink group-hover:shadow-[0_0_0_0.625rem_rgba(255,180,11,.28)] hover:!scale-[1.45]"
          title={c.price ? "Add to cart" : "Free"}
          onClick={() => c.price && add(c)}
        >
          {priceText(c.price)}
        </button>
        <div className="absolute inset-x-0 bottom-0 z-10 px-[9%] pb-[8%] text-white">
          <small className="block text-xs font-medium uppercase tracking-wide text-white/80">{c.cat}</small>
          <h5 className="mb-3 mt-3 text-[clamp(1.1rem,1.5vw,1.6rem)] font-semibold leading-snug">{c.title}</h5>
          <div className="flex items-center gap-1.5 text-[0.8125rem] text-white/80"><img className="h-3.5 w-auto" src={A + "66c6fb8b857efb6c4c737b5d_Rating.svg"} alt="" /><span>{c.rating} ({c.reviews})</span></div>
        </div>
      </article>
    </Reveal>
  );
}

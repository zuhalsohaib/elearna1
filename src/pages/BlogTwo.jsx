import { useEffect, useRef } from "react";
import Layout from "../components/Layout";
import BlogHero from "../components/blog/BlogHero";
import CTA from "../components/CTA";
import Reveal from "../components/Reveal";
import { byId } from "../data/blog";
import { wrapM } from "../styles/ui";

// The picture slides up and down inside its frame while you scroll the page.
function ScrollImg({ src, alt, ratio }) {
  const box = useRef(null), img = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const run = () => {
      raf = 0;
      if (!box.current || !img.current) return;
      const r = box.current.getBoundingClientRect();
      const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      img.current.style.transform = `translateY(${(-p * 14).toFixed(2)}%) scale(1.3)`;
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(run); };
    run();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={box} className={`overflow-hidden ${ratio}`}><img ref={img} src={src} alt={alt} className="h-full w-full object-cover will-change-transform" /></div>;
}

const WIDE = "aspect-[125/82]", TALL = "aspect-[125/152]";
const COL_A = [[2, WIDE], [3, TALL], [4, WIDE], [5, WIDE]];
const COL_B = [[6, WIDE], [7, WIDE], [8, TALL], [9, WIDE]];
const card = "group block overflow-hidden bg-white shadow-[0_0.75rem_2.25rem_rgba(15,34,39,.1)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_1.5rem_3.5rem_rgba(15,34,39,.18)]";

function Small({ id, ratio, i }) {
  const p = byId(id);
  return (
    <Reveal delay={i * 80}>
      <a href="#top" className={card}>
        <ScrollImg src={p.img} alt={p.title} ratio={ratio} />
        <div className="px-[1.1rem] pb-[1.2rem] pt-[0.9rem]">
          <p className="text-[0.6875rem] uppercase text-muted">{p.short} <span className="mx-1.5 text-ink">•</span> <b className="font-medium text-ink">{p.author}</b></p>
          <h5 className="mt-2.5 text-[0.95rem] font-medium leading-snug transition-colors duration-300 group-hover:text-royal">{p.title}</h5>
        </div>
      </a>
    </Reveal>
  );
}

export default function BlogTwo(props) {
  const f = byId(1);
  return (
    <Layout {...props} boxed>
      <BlogHero />
      <section className="bg-white py-[6.5rem]">
        <div className={`${wrapM} grid grid-cols-1 items-start gap-[1.25rem] sm:grid-cols-2 lg:grid-cols-[2.1fr_1fr_1fr]`}>
          {/* big post stays in place while the small ones scroll past */}
          <Reveal dir="left" className="sm:col-span-2 lg:sticky lg:top-28 lg:col-span-1">
            <a href="#top" className={card}>
              <ScrollImg src={f.img} alt={f.title} ratio="aspect-[262/312]" />
              <div className="px-[2rem] pb-[2.4rem] pt-[1.6rem]">
                <p className="text-[0.75rem] uppercase text-muted">{f.short} <span className="mx-1.5 text-ink">•</span> <b className="font-medium text-ink">{f.author}</b></p>
                <h3 className="mt-4 text-[1.6rem] leading-[1.25] transition-colors duration-300 group-hover:text-royal">{f.title}</h3>
                <p className="mt-5 leading-[1.8] text-muted">Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat elementum ut sit ut. Cras mattis aliquam arcu mauris sagittis fames eu diam vulputate.</p>
              </div>
            </a>
          </Reveal>
          <div className="flex flex-col gap-[1.25rem]">{COL_A.map(([id, r], i) => <Small key={id} id={id} ratio={r} i={i} />)}</div>
          <div className="flex flex-col gap-[1.25rem]">{COL_B.map(([id, r], i) => <Small key={id} id={id} ratio={r} i={i} />)}</div>
        </div>
      </section>
      <CTA variant="image" />
    </Layout>
  );
}

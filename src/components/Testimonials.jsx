import { useState } from "react";
import { A, TESTI } from "../data/data";
import Counter from "./Counter";
import Reveal from "./Reveal";
import ArrowButtons from "./ArrowButtons";
import { wrap, label } from "../styles/ui";

const stat = "flex items-center gap-4";
const statLabel = "max-w-[6.25rem] text-[0.8125rem] uppercase leading-[1.9] text-[#8a9ea2]";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTI[i];
  const n = TESTI.length;
  return (
    <section className="bg-dark bg-[radial-gradient(56.25rem_31.25rem_at_70%_20%,#1b3a3c,transparent)] py-[6.875rem] text-white">
      <div className={`${wrap} grid grid-cols-1 gap-[3.125rem] lg:grid-cols-[1fr_1.1fr] lg:gap-[6.25rem]`}>
        <Reveal dir="left">
          <div className={label}>Our testimonials</div>
          <h2 className="mb-9 max-w-[26.875rem] text-[clamp(2rem,3.4vw,3rem)]">Trusted by our successful students</h2>
          <div className="max-w-[30.375rem] overflow-hidden">
            <img key={i} className="aspect-[486/330] w-full animate-img-in object-cover" src={A + t.img} alt={t.name} />
          </div>
        </Reveal>
        <Reveal dir="right" delay={150}>
          <div className="mt-[3.75rem] flex flex-wrap gap-[1.875rem] sm:gap-[3.125rem]">
            <div className={stat}><Counter to={70} suffix="M" /><i className="h-[2.375rem] w-px bg-white" /><span className={statLabel}>Successful students</span></div>
            <div className={stat}><Counter to={25} suffix="K" /><i className="h-[2.375rem] w-px bg-white" /><span className={statLabel}>Global job placements</span></div>
          </div>
          <div key={i} className="animate-fade-up-fast">
            <blockquote className="mb-[1.875rem] mt-[3.125rem] text-[1.1875rem] leading-[1.75] text-[#7f9498]">“{t.text}”</blockquote>
            <h5 className="text-xl">{t.name}</h5>
            <small className="text-sm uppercase text-[#8a9ea2]">{t.role}</small>
          </div>
          <ArrowButtons className="mt-[1.875rem]" onPrev={() => setI((i + n - 1) % n)} onNext={() => setI((i + 1) % n)} />
        </Reveal>
      </div>
    </section>
  );
}

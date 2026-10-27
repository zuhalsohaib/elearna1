import { CATS2 } from "../../data/home2";
import { Icon } from "../Icons";
import Reveal from "../Reveal";
import { wrapL, label, btnDark } from "../../styles/ui";

export default function Home2Categories() {
  return (
    <section className="bg-white pb-[7.5rem] pt-[9.375rem]">
      <div className={`${wrapL} grid grid-cols-1 gap-12 lg:grid-cols-2`}>
        <Reveal dir="left">
          <div className={`${label} !text-[0.9375rem]`}>Top Categories</div>
          <h2 className="mb-[2.125rem] max-w-[30rem] text-[clamp(2.4rem,3.4vw,3.4rem)] leading-[1.15]">Discover leading categories</h2>
          <a href="#courses" className={`${btnDark} !px-[3.125rem] !py-[0.9375rem]`}>Get Started</a>
        </Reveal>
        <div className="grid w-full max-w-[44.3125rem] grid-cols-2 gap-[2.125rem] justify-self-end sm:grid-cols-3">
          {CATS2.map(([n, c, ic], i) => (
            <Reveal key={n} delay={i * 100} className="h-full">
              <a href="#courses" className="block h-full border border-[#e3eaed] px-3 pb-8 pt-[1.375rem] text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_1rem_2.25rem_rgba(15,34,39,.1)]">
                <span className="mx-auto mb-4 grid h-[4.875rem] w-[4.875rem] place-items-center rounded-full bg-soft"><Icon n={ic} /></span>
                <h5 className="min-h-[3.125rem] text-[1.1875rem] font-medium leading-[1.3]">{n}</h5>
                <p className="mt-2 text-[1.0625rem] text-muted">{c} Courses</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

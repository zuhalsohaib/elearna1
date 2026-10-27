import { A, CATS } from "../data/data";
import { Icon } from "./Icons";
import Reveal from "./Reveal";
import VideoCall from "./VideoCall";
import { wrap, label, h2, btnYellow, btnDark } from "../styles/ui";

export default function Categories() {
  return (
    <section className="bg-white py-[6.875rem]">
      <div className={wrap}>
        <Reveal className="mx-auto mb-[3.375rem] max-w-[40rem] text-center"><div className={label}>Top Categories</div><h2 className={`${h2} mt-1.5`}>Discover leading categories to elevate your journey</h2></Reveal>
        <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-3 lg:grid-cols-6">
          {CATS.map(([n, c, ic], i) => (
            <Reveal key={i} delay={i * 100} className="h-full"><a href="#courses" className="block h-full border border-line bg-white px-3.5 pb-[1.875rem] pt-5 text-center transition hover:-translate-y-1 hover:shadow-[0_0.875rem_1.875rem_rgba(15,34,39,.1)]">
              <span className="mx-auto mb-3.5 grid h-[4.375rem] w-[4.375rem] place-items-center rounded-full bg-soft"><Icon n={ic} /></span>
              <h5 className="min-h-12 text-lg font-medium leading-[1.3]">{n}</h5>
              <p className="mt-2 text-muted">{c} Courses</p>
            </a></Reveal>
          ))}
        </div>
        <div className="mt-20 grid grid-cols-1 gap-[2.1875rem] xl:grid-cols-2">
          <Reveal dir="left"><div className="flex h-[18rem] items-center bg-soft bg-[length:auto_100%] bg-right bg-no-repeat px-6 sm:px-[3.125rem]" style={{ backgroundImage: `url(${A}66c86806b094d5e2529855a0_Woman%20Using%20Laptop.webp)` }}>
            <div><h4 className="mb-[2.125rem] max-w-[16.25rem] text-[1.5625rem] leading-[1.3]">Quick access to the popular courses</h4><a href="#courses" className={`${btnYellow} !px-[2.8125rem] !py-[0.9375rem]`}>View Courses</a></div>
          </div></Reveal>
          <Reveal dir="right"><div className="flex h-[18rem] items-center justify-between gap-6 bg-[#f0efe8] px-6 sm:pl-[3.875rem] sm:pr-[3.125rem] xl:pl-10 xl:pr-[1.875rem]">
            <div className="min-w-0"><h4 className="mb-[2.125rem] max-w-[16.25rem] text-[1.5625rem] leading-[1.3]">Develop your skills online!</h4><a href="#top" className={`${btnDark} whitespace-nowrap !px-8 !py-[0.9375rem]`}>Apply Now</a></div>
            <VideoCall />
          </div></Reveal>
        </div>
      </div>
    </section>
  );
}

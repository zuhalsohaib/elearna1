import { wrapL } from "../../styles/ui";

// The photo is loaded from /public/home2-hero.jpg. If that file is missing, the dark gradient is shown instead.
const BG = "linear-gradient(180deg,rgba(0,0,0,.3),rgba(0,0,0,.05) 45%,rgba(0,0,0,.4)), url(/home2-hero.jpg), linear-gradient(135deg,#0a1220,#17344d 55%,#33261b)";

export default function Home2Hero() {
  return (
    <section id="top" style={{ backgroundImage: BG }} className="relative flex min-h-[47.5rem] items-end bg-[#0b1522] bg-cover bg-center pb-[7.5rem] pt-[12.5rem] text-white lg:min-h-screen">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-[37%] select-none">
        <div className={`${wrapL} animate-fade-up`}>
          <p className="bg-gradient-to-b from-white/50 to-white/5 bg-clip-text font-head text-[clamp(3.5rem,6.4vw,7.5rem)] font-bold uppercase leading-[.8] text-transparent">
            PERSONAL<br /><span className="ml-[1.9em]">COACH</span>
          </p>
        </div>
      </div>
      <div className={`${wrapL} relative w-full`}>
        <div className="animate-fade-up lg:ml-[53%]">
          <div className="mb-3 text-base font-medium uppercase">Online learning</div>
          <h1 className="text-[clamp(2.4rem,3.6vw,4.2rem)] font-medium leading-[1.02]">
            Transform <em className="not-italic text-accent">learning</em> with flexible online education
          </h1>
        </div>
      </div>
    </section>
  );
}

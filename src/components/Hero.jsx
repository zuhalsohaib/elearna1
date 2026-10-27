import { A } from "../data/data";
import { btnGhost, label } from "../styles/ui";
import heroBg from "../assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section id="top" style={{ backgroundImage: `url(${heroBg})` }} className="flex items-center bg-dark bg-cover bg-center bg-no-repeat pb-[3.75rem] pt-[8.125rem] text-white lg:min-h-[57.5rem] lg:pt-[6.25rem]">
      <div className="mx-auto grid w-full max-w-[93.75rem] grid-cols-1 items-center px-[1.875rem] lg:grid-cols-2">
        <div className="relative mx-auto mb-10 aspect-[715/760] animate-fade-up w-full max-w-[44.6875rem] lg:mx-0 lg:mb-0 lg:mr-[1.875rem] lg:justify-self-end">
          <img className="absolute bottom-[17%] left-0 w-[38%]" src={A + "66c6fb8bdcbb90074c85249f_Half%20Moon.svg"} alt="" />
          <img className="absolute bottom-0 right-0 w-[92%]" src={A + "66c6fb8ca55c188e59cf91d8_Banner%20Girl.webp"} alt="Hero Girl" />
          <img className="absolute bottom-[24.5%] left-[7.5%] w-[38%]" src={A + "66c6fb8b79cb093fa869be54_Achievements.webp"} alt="Achievements" />
          <img className="absolute bottom-[1.5%] right-[1.5%] w-[38%] animate-slide-in-left" src={A + "66f638f0e915508fda239b73_Trusted%20By%20Image.avif"} alt="Trusted" />
          <img className="absolute left-[12%] top-[16.5%] w-[6%]" src={A + "66c6fb8bfbf579e1a5ff1577_Blue%20Circle.svg"} alt="" />
          <img className="absolute left-[17%] top-[33.5%] w-[1.6%]" src={A + "66c6fb8b857efb6c4c737b8a_Yellow%20Dot.svg"} alt="" />
          <img className="absolute left-[101%] top-[59%] w-[2%]" src={A + "66c6fb8b857efb6c4c737b8a_Yellow%20Dot.svg"} alt="" />
        </div>
        <div className="animate-fade-up lg:pl-[3.75rem]">
          <div className={`${label} !text-[0.9375rem]`}>Online learning</div>
          <h1 className="mb-[1.625rem] mt-2 max-w-[33.75rem] text-[clamp(2.6rem,4.4vw,4.1rem)] leading-[1.08]">More then <em className="not-italic text-accent">25000+</em> education courses online</h1>
          <p className="mb-[2.125rem] max-w-[31.25rem] leading-[1.85]">Lorem ipsum dolor sit amet consectetur. Gravida enim risus sollicitudin mauris tincidunt commodo ornare.</p>
          <a href="#contact" className={btnGhost}>Get Started</a>
        </div>
      </div>
    </section>
  );
}

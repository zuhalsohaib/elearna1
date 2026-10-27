import { A, LOGOS } from "../data/data";
import Reveal from "./Reveal";

export default function Logos({ dark = false }) {
  return (
    <section className={`${dark ? "bg-dark text-[#b8c4c7]" : "bg-soft"} pb-[5.625rem] pt-[4.875rem] text-center`}>
      <Reveal><p className="text-[1.0625rem]">Learn from 350+ leading universities and companies with us</p></Reveal>
      <Reveal delay={200} className="mx-auto mt-[2.125rem] max-w-[78.125rem]"><div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        {[0, 1].map((k) => (
          <div className="flex shrink-0 animate-marquee gap-[5.625rem] pr-[5.625rem]" key={k}>
            {LOGOS.concat(LOGOS).map((l, i) => <img key={i} className={`h-14 w-auto ${dark ? "opacity-60 brightness-0 invert" : "opacity-50 grayscale"}`} src={A + l} alt="Clients Logo" />)}
          </div>
        ))}
      </div></Reveal>
    </section>
  );
}

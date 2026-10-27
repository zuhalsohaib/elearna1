import { useState } from "react";
import { UNLOCK } from "../../data/home2";
import Reveal from "../Reveal";
import { label } from "../../styles/ui";

const DESC = "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.";

export default function Unlocking({ eyebrow = "Unlocking Potential", heading = "Discover the boundless advantages and transformative power of eLearning for professional growth" }) {
  const [on, setOn] = useState(0);
  return (
    <section className="bg-[#f2f6f7]">
      <Reveal className="mx-auto max-w-[56.25rem] px-5 pb-[3.75rem] pt-[6.25rem] text-center">
        <div className={label}>{eyebrow}</div>
        <h2 className="text-[clamp(1.5rem,1.75vw,2.05rem)] leading-[1.25]">{heading}</h2>
      </Reveal>
      <div className="relative grid grid-cols-1 overflow-hidden bg-dark md:grid-cols-4">
        {/* the pictures sit behind the 4 columns and fade into each other */}
        {UNLOCK.map(([, , img], i) => (
          <img key={i} src={img} alt="Potential Image" className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${on === i ? "scale-100 opacity-100" : "scale-105 opacity-0"}`} />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(5,12,16,.85),rgba(5,12,16,.15)_55%,transparent)]" />
        {UNLOCK.map(([n, t], i) => (
          <div
            key={n}
            onMouseEnter={() => setOn(i)}
            onClick={() => setOn(i)}
            className={`relative z-10 flex min-h-[10.625rem] cursor-pointer flex-col justify-end border-white/20 px-6 pb-7 text-white md:min-h-[42.5rem] xl:px-[2.9375rem] ${i ? "border-t md:border-l md:border-t-0" : ""}`}
          >
            <span className={`font-head text-[2rem] font-medium transition-transform duration-500 ${on === i ? "-translate-y-1" : ""}`}>{n}</span>
            <h5 className="mt-5 font-head text-[1.375rem] font-medium">{t}</h5>
            <div className={`overflow-hidden transition-all duration-500 ease-out ${on === i ? "mt-4 max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
              <p className="text-[0.9375rem] leading-[1.85] text-white/80">{DESC}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

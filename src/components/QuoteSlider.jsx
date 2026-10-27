import { useState } from "react";
import { A } from "../data/data";
import { QUOTES } from "../data/home2";
import Reveal from "./Reveal";
import ArrowButtons from "./ArrowButtons";

// Centered quote with arrows. Used on Home Two (white) and About One (soft background).
export default function QuoteSlider({ soft = false }) {
  const [i, setI] = useState(0);
  const q = QUOTES[i];
  const n = QUOTES.length;
  return (
    <section className={soft ? "bg-soft py-[7.5rem]" : "bg-white pb-[6.875rem] pt-[3.125rem]"}>
      <Reveal className="mx-auto max-w-[63.125rem] px-5 text-center">
        <img src={A + "66cff274c1ce9bc0b1d47e56_Quote%20Icons.svg"} alt="Quote" className="mx-auto mb-[2.125rem] h-[5rem] sm:h-[7.0625rem]" />
        <div key={i} className="animate-fade-up-fast">
          <blockquote className="text-[clamp(1.1rem,1.25vw,1.35rem)] leading-[1.5]">“{q.text}”</blockquote>
          <h5 className="mt-[2.125rem] text-[1.375rem] font-normal">{q.name}</h5>
          <small className="mt-1 block text-sm uppercase text-muted">{q.role}</small>
        </div>
        <ArrowButtons tone="light" className="mt-[1.375rem] justify-center" onPrev={() => setI((i + n - 1) % n)} onNext={() => setI((i + 1) % n)} />
      </Reveal>
    </section>
  );
}

import { useState } from "react";
import { A } from "../../data/data";
import Reveal from "../Reveal";
import { label } from "../../styles/ui";

const QS = ["How do I enroll in an online course?", "Are there any prerequisites for enrolling in online courses?", "What are the technical requirements for online learning?", "What if I encounter technical difficulties?", "Are there live classes, or can I learn at my own pace?"];
const ANS = "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.";

// "Frequently asked questions" - click a question to open its answer.
export default function Faq() {
  const [open, setOpen] = useState(null);
  return (
    <div className="mx-auto max-w-[55rem] px-5">
      <Reveal className="mb-10 grid items-center gap-8 sm:grid-cols-[0.9fr_1.1fr]">
        <img src={A + "66de9b24cdbecf88f8d1b2da_FAQ%20Icons.svg"} alt="FAQ" className="mx-auto w-full max-w-[16rem] animate-float-slow" />
        <div><div className={label}>Contact us</div><h2 className="text-[clamp(2.2rem,3vw,3.2rem)] leading-[1.1]">Frequently asked questions</h2></div>
      </Reveal>
      <div className="border-b border-line">
        {QS.map((q, i) => (
          <Reveal key={q} delay={i * 80}>
            <div className={i ? "border-t border-line" : ""}>
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-6 px-7 py-[1.1rem] text-left font-head text-[1.0625rem] font-medium transition hover:text-royal">
                {q}<span className={`text-[1.6rem] font-light leading-none transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden"><p className="px-7 pb-6 leading-[1.8] text-muted">{ANS}</p></div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

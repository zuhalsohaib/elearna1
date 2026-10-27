import { A } from "../../data/data";
import Reveal from "../Reveal";

const INFO = [
  ["66de9b23b2f8295c624d2080_Home%20Icon.svg", "Area location", ["410 Sandtown, California", "94001, USA"]],
  ["66de9b254c2ae5562dd60344_Books%20Icon.svg", "Contact details", ["888-123-4567", "info@example.com"]],
  ["66de9b2343d23f2fb8c7598d_Clock%20Icons.svg", "Opening hours", ["Monday-Friday", "10:30a.m-7:00p.m"]],
];

export default function InfoRow() {
  return (
    <div className="grid gap-10 text-left md:grid-cols-3 md:gap-0">
      {INFO.map(([ic, t, ls], i) => (
        <Reveal key={t} delay={i * 130} className={`group flex items-start justify-center gap-4 ${i ? "md:border-l md:border-line" : ""}`}>
          <img src={A + ic} alt="" className="h-[2.4rem] w-auto transition duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
          <div>
            <h5 className="mb-2 text-[1.1rem] font-medium">{t}</h5>
            {ls.map((l) => <p key={l} className="text-[0.9rem] leading-[1.7] text-muted">{l}</p>)}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

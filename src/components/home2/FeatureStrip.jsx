import { A } from "../../data/data";
import { FEATS } from "../../data/home2";
import Reveal from "../Reveal";
import { wrapL } from "../../styles/ui";

export default function FeatureStrip() {
  return (
    <div className={`${wrapL} relative z-10 -mt-14`}>
      <Reveal>
        <div className="grid grid-cols-1 gap-8 rounded-[0.25rem] bg-white px-8 py-[3.875rem] shadow-[0_1.5rem_4.375rem_rgba(15,34,39,.1)] md:grid-cols-3">
          {FEATS.map(([ic, t]) => (
            <div key={t} className="group flex items-center gap-[1.125rem]">
              <img src={A + ic} alt="Icon" className="h-[3.25rem] w-[3.25rem] transition duration-300 group-hover:scale-110" />
              <div><h5 className="text-[1.5625rem] font-medium leading-tight">{t}</h5><p className="text-[1.0625rem] text-muted">Lorem ipsum dolor sit amet</p></div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

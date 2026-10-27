import { COURSES2 } from "../../data/home2";
import OverlayCard from "./OverlayCard";
import Reveal from "../Reveal";
import { wrapM, label, h2 } from "../../styles/ui";

export default function Home2Courses({ add }) {
  return (
    <section id="courses" className="bg-soft py-[6.875rem]">
      <div className={wrapM}>
        <Reveal className="mb-[2.125rem]"><div className={`${label} !mb-1.5`}>Online learning</div><h2 className={h2}>Top online courses</h2></Reveal>
        <div className="grid grid-cols-1 gap-[2rem] sm:grid-cols-2 lg:grid-cols-3">
          {COURSES2.map((c, i) => <OverlayCard key={c.id} c={c} add={add} delay={(i % 3) * 120} />)}
        </div>
        <Reveal className="mt-[3.75rem] flex justify-center"><div className="rounded-[2.5rem] bg-dark px-7 py-3.5 text-center text-[0.8125rem] text-white">We assist you in finding the ideal tutor at no cost. <a href="#courses" className="font-medium underline">Browse All Available Courses</a></div></Reveal>
      </div>
    </section>
  );
}

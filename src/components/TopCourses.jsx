import { useState } from "react";
import { COURSES } from "../data/data";
import CourseCard from "./CourseCard";
import Reveal from "./Reveal";
import { wrap, label, h2 } from "../styles/ui";

const TABS = ["All courses", "Design", "Development", "Management", "Finance"];

export default function TopCourses({ add }) {
  const [tab, setTab] = useState("All courses");
  const list = (tab === "All courses" ? COURSES : COURSES.filter((c) => c.cat === tab)).slice(0, 6);
  return (
    <section id="courses" className="bg-soft py-[6.875rem]">
      <div className={wrap}>
        <Reveal className="mb-[2.125rem]"><div className="flex flex-wrap items-end justify-between gap-4">
          <div><div className={`${label} !mb-1.5`}>Online learning</div><h2 className={h2}>Top online courses</h2></div>
          <div className="flex gap-6 pb-2.5">{TABS.map((t) => <button key={t} onClick={() => setTab(t)} className={`text-[0.8125rem] tracking-[.3px] ${t === tab ? "font-medium text-ink" : "text-muted"}`}>{t}</button>)}</div>
        </div></Reveal>
        <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 lg:grid-cols-3">{list.map((c, i) => <Reveal key={c.id} delay={(i % 3) * 120}><CourseCard c={c} add={add} /></Reveal>)}</div>
        <Reveal className="mt-[3.75rem] flex justify-center"><div className="rounded-[2.5rem] bg-dark px-7 py-3.5 text-center text-[0.8125rem] text-white">We assist you in finding the ideal tutor at no cost. <a href="#courses" className="font-medium underline">Browse All Available Courses</a></div></Reveal>
      </div>
    </section>
  );
}

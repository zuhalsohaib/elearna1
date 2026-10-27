import { A } from "../../data/data";
import Counter from "../Counter";
import Reveal from "../Reveal";
import teacher from "../../assets/teacher-wave.jpg";
import teacherVideo from "../../assets/teacher.mp4";
import { wrapM, label, btnDark } from "../../styles/ui";

const STATS = [[1.5, 1, "K", "Finish seasons"], [7.8, 1, "K", "Enrolled"], [100, 0, "%", "Job placement"]];

export default function Home2Why() {
  return (
    <section className="bg-white py-[6.25rem]">
      <div className={wrapM}>
        <Reveal className="text-center"><div className={`${label} !text-[0.9375rem]`}>Why we are</div><h2 className="text-[clamp(2rem,2.6vw,2.9rem)]">World-class learning from anywhere</h2></Reveal>
        <div className="mt-[1.875rem] grid grid-cols-1 items-center gap-[3.75rem] lg:grid-cols-[1fr_0.9fr]">
          <Reveal dir="left">
            <div className="relative mx-auto aspect-[629/568] w-full max-w-[39.3125rem]">
              <div className="absolute left-[11.8%] top-0 aspect-square w-[29.9%] animate-float-slow rounded-full bg-accent" />
              <div className="absolute left-[2.5%] top-[34%] aspect-square w-[59.3%] rounded-full border-2 border-[#ececec]" />
              <video src={teacherVideo} poster={teacher} autoPlay muted loop playsInline style={{ borderRadius: "2.75rem 0.25rem 0.25rem 0.25rem" }} className="absolute left-0 top-[19%] z-[2] h-[50.4%] w-[38.5%] animate-float object-cover shadow-[0_1.25rem_3.125rem_rgba(15,34,39,.15)]" />
              <img src={A + "66cff274cdd4c2243b9ba324_Woman%20Image.webp"} alt="Girl Image" className="absolute left-[41.8%] top-[7%] h-[83%] w-[58.2%] rounded-[0.25rem] object-cover shadow-[0_1.25rem_3.125rem_rgba(15,34,39,.15)]" />
            </div>
          </Reveal>
          <Reveal dir="right">
            <p className="text-[1.0625rem] leading-[1.7] text-muted">Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.</p>
            <div className="my-9 flex flex-wrap items-center gap-x-[3.125rem] gap-y-6">
              {STATS.map(([to, d, s, l], i) => (
                <div key={l} className="contents">
                  {i > 0 && <i className="hidden h-[5.125rem] w-px bg-ink sm:block" />}
                  <div><Counter to={to} decimals={d} suffix={s} /><p className="mt-2 text-[0.9375rem] uppercase tracking-wide">{l}</p></div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-5 bg-soft px-10 py-[1.875rem]">
              <div><h5 className="mb-2 text-[1.1875rem]">Still have questions?</h5><p className="max-w-[16.875rem] text-[0.9375rem] text-muted">Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.</p></div>
              <a href="#contact" className={`${btnDark} !px-8`}>Get Started</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

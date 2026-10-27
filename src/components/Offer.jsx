import { A } from "../data/data";
import useInView from "../hooks/useInView";
import Reveal from "./Reveal";
import { wrap, label, h2, btnDark } from "../styles/ui";

function Collage() {
  const [ref, seen] = useInView(0.25);
  const shadow = "shadow-[0_1.875rem_3.75rem_rgba(15,34,39,.2)]";
  return (
    <div ref={ref} className="relative mx-auto h-[32.5rem] w-full max-w-[38.75rem] sm:h-[38.75rem]">
      <div className="absolute right-0 top-0 h-[66%] w-1/2 animate-float-slow">
        <img className={`h-full w-full object-cover ${shadow} transition duration-1000 ease-out ${seen ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`} src={A + "66c6fb8b45a3029806674bb6_Woman%20Image%20Holding%20Copy.webp"} alt="Woman" />
      </div>
      <div className="absolute bottom-0 left-[8%] h-[63%] w-1/2 animate-float" style={{ animationDelay: "1s" }}>
        <img className={`h-full w-full object-cover ${shadow} transition delay-300 duration-1000 ease-out ${seen ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`} src={A + "66c6fb8bbdff100351a1e011_Man%20Image%20Holding%20Graph.webp"} alt="Man" />
      </div>
      <div className="absolute left-0 top-[8%] z-[2] w-[41%] animate-float" style={{ animationDelay: "2s" }}>
        <img className={`w-full shadow-[0_1.125rem_2.5rem_rgba(0,0,0,.2)] transition delay-700 duration-700 ease-out ${seen ? "scale-100 opacity-100" : "scale-50 opacity-0"}`} src={A + "66d92b103999266e87ca5747_Free%20Course.avif"} alt="Course Count" />
      </div>
    </div>
  );
}

export default function Offer() {
  return (
    <section className="bg-white py-[6.875rem]">
      <div className={`${wrap} grid grid-cols-1 items-center gap-[4.375rem] lg:grid-cols-2`}>
        <Collage />
        <Reveal dir="right">
          <div className={label}>What we offer</div>
          <h2 className={`${h2} mb-3.5 mt-2 max-w-[32.5rem]`}>Personalized learning for your ambitions</h2>
          <p className="text-muted">Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.</p>
          <ul className="mb-[2.375rem] mt-[1.625rem] grid list-disc grid-cols-1 gap-x-5 gap-y-3 pl-5 font-medium sm:grid-cols-2">
            {["Skill-based instruction", "Analytics and insights", "Global certification", "Customizable courses"].map((t) => <li key={t}>{t}</li>)}
          </ul>
          <div className="flex flex-wrap items-center justify-between gap-5 bg-soft px-9 py-[1.875rem]">
            <div><h5 className="mb-2 text-[1.1875rem]">Still have questions?</h5><p className="max-w-[16.25rem] text-[0.9375rem] text-muted">Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.</p></div>
            <a href="#contact" className={btnDark}>Get Started</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

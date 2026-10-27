import { POSTS } from "../../data/home2";
import Reveal from "../Reveal";
import { wrapM, label } from "../../styles/ui";

export default function Blog({ plain = false }) {
  return (
    <section className={`${plain ? "bg-white" : "bg-soft"} py-[6.875rem]`}>
      <div className={wrapM}>
        <Reveal className="mx-auto mb-[3.125rem] max-w-[45rem] text-center">
          <div className={`${label} !text-[0.9375rem]`}>Education Blog</div>
          <h2 className="text-[clamp(2rem,2.6vw,2.9rem)]">Our news and ideas</h2>
          <p className="mt-3.5 text-[1.0625rem] leading-[1.7] text-muted">Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis.</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-3">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 120} className="h-full">
              <a href="#top" className="group block h-full overflow-hidden rounded-[0.25rem] bg-white shadow-[0_1.25rem_3.125rem_rgba(15,34,39,.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_1.75rem_3.75rem_rgba(15,34,39,.14)]">
                <div className="overflow-hidden"><img src={p.img} alt="Blog Image" className="aspect-[410/296] w-full object-cover transition-transform duration-700 group-hover:scale-110" /></div>
                <div className="px-10 pb-10 pt-9">
                  <small className="text-[0.8125rem] font-medium uppercase tracking-wide">{p.cat}</small>
                  <h5 className="mb-6 mt-4 text-[1.3125rem] font-medium leading-snug transition-colors duration-300 group-hover:text-royal">{p.title}</h5>
                  <p className="text-[1.0625rem] text-muted">{p.date}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

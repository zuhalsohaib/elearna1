import { btnDark, btnOutline, btnYellow, wrapL } from "../styles/ui";
import Reveal from "./Reveal";

// variant "yellow" = yellow banner (Home One style); variant "image" = photo banner (Blog / Contact Two style).
// Photo: /public/about-students.jpg
export default function CTA({ variant = "yellow" }) {
  if (variant === "image") {
    return (
      <section id="contact" style={{ backgroundImage: "linear-gradient(rgba(15,34,39,.72),rgba(15,34,39,.72)), url(/about-students.jpg)" }} className="bg-cover bg-[position:center_70%] py-[6rem] text-white lg:py-[7.5rem]">
        <div className={`${wrapL} flex flex-wrap items-center justify-between gap-8 lg:px-[9%]`}>
          <Reveal dir="left"><h2 className="max-w-[24rem] text-[clamp(1.9rem,2.4vw,2.6rem)] leading-[1.2]">Are you ready to start your journey?</h2></Reveal>
          <Reveal dir="right" className="flex flex-wrap gap-[1.5rem]">
            <a href="#top" className="inline-block rounded-[0.125rem] border border-white px-[2.25rem] py-3.5 font-medium transition hover:bg-white hover:text-ink">Browse Courses</a>
            <a href="#top" className={btnYellow}>Became An Instructor</a>
          </Reveal>
        </div>
      </section>
    );
  }
  return (
    <section id="contact" className="bg-[linear-gradient(#f3f8fa_50%,#14282d_50%)] px-5">
      <Reveal className="mx-auto max-w-[67.1875rem]"><div className="flex flex-wrap items-center justify-between gap-[1.875rem] bg-accent px-7 py-[3.125rem] sm:px-20">
        <h2 className="max-w-[21.25rem] text-[1.875rem]">Are you ready to start your journey?</h2>
        <div className="flex flex-wrap gap-[1.5625rem]"><a href="#courses" className={btnDark}>Browse Courses</a><a href="#top" className={btnOutline}>Became A Teacher</a></div>
      </div></Reveal>
    </section>
  );
}

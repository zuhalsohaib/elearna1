import { LOGO } from "../data/data";
import Reveal from "./Reveal";
import { wrapM } from "../styles/ui";

const POPULAR = ["Finance", "Management", "Design", "Web development"];
const CMS = ["Course details", "Instructor details", "Blog details"];
const COMPANY = ["About", "Courses", "Blog", "Contact", "License", "Pricing"];

// variant "one" = Home One footer (Quick links), variant "two" = Home Two footer (Need help? column)
const V = {
  one: {
    cols: [["Quick links", ["Home", "Events", "Career", "Instructor"]], ["Popular courses", POPULAR], ["Company", [...COMPANY, "404"]], ["CMS", CMS]],
    root: "pt-[4.375rem]",
    grid: "mx-auto max-w-[67.1875rem] px-5 lg:grid-cols-[1.7fr_1fr_1.1fr_1.1fr_1fr] gap-[1.875rem]",
    logo: "mb-[1.375rem] h-[1.625rem]", p: "max-w-[14.375rem] text-[0.9375rem] leading-[1.9]",
    h: "mb-[1.375rem] text-[1.0625rem]", a: "mb-3 text-[0.9375rem]",
    barOuter: "mt-[4.375rem] max-w-[90rem] border-[#34484c]", bar: "px-5 py-[1.625rem] text-[0.8125rem] sm:px-[3.75rem]",
  },
  two: {
    cols: [["Popular courses", POPULAR], ["Company", COMPANY], ["CMS", CMS]],
    root: "pt-[6.25rem]",
    grid: `${wrapM} lg:grid-cols-[23.8125rem_16.6875rem_12.9375rem_15.875rem_1fr] gap-10 lg:gap-0`,
    logo: "mb-5 h-[1.875rem]", p: "max-w-[16.875rem] text-[1.0625rem] leading-[1.75]",
    h: "mb-[1.625rem] text-[1.1875rem]", a: "mb-[0.9375rem] text-base",
    barOuter: "mt-[2.5rem] max-w-[107.5rem] border-[#3a4e52]", bar: `${wrapM} py-[1.375rem] text-[0.9375rem]`,
  },
};

export default function Footer({ variant = "one" }) {
  const v = V[variant];
  const help = "text-base text-[#7f9498]";
  const helpLink = "block font-head text-[1.375rem] font-medium transition-colors hover:text-accent";
  return (
    <footer className={`bg-dark ${v.root} text-white`}>
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${v.grid}`}>
        <Reveal>
          <img src={LOGO} alt="Elearna" className={v.logo} />
          <p className={`text-[#7f9498] ${v.p}`}>Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras.</p>
        </Reveal>
        {v.cols.map(([h, ls], i) => (
          <Reveal key={h} delay={(i + 1) * 120}>
            <h6 className={`font-head font-medium ${v.h}`}>{h}</h6>
            {ls.map((l) => <a key={l} href="#top" className={`block text-[#7f9498] transition-colors duration-200 hover:text-accent ${v.a}`}>{l}</a>)}
          </Reveal>
        ))}
        {variant === "two" && (
          <Reveal delay={480}>
            <h6 className={`font-head font-medium ${v.h}`}>Need help?</h6>
            <p className={help}>Call us</p>
            <a href="tel:+18881234567" className={`mb-4 ${helpLink}`}>(888) 123 4567</a>
            <p className={help}>Need support?</p>
            <a href="mailto:info@example.com" className={helpLink}>info@example.com</a>
          </Reveal>
        )}
      </div>
      <div className={`mx-auto border-t ${v.barOuter}`}>
        <div className={`flex flex-wrap justify-between gap-2.5 uppercase text-[#8a9ea2] ${v.bar}`}>
          <span>Design by <b className="font-medium text-white">Radiant Templates</b></span>
          <span>Powered by <b className="font-medium text-white">Webflow</b></span>
        </div>
      </div>
    </footer>
  );
}

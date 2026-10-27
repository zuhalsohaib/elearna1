import { wrapL } from "../styles/ui";

// Photo hero with a dark layer, small label and big title. Used on the About Two, Blog and Contact pages.
// align "end" = text at the bottom, "center" = text in the middle. inset = extra left space for the text.
export default function PageHero({ image, overlay = 0.5, position = "center", eyebrow, title, align = "center", inset = "", titleClass = "text-[clamp(3rem,5vw,5rem)]" }) {
  const place = align === "end" ? "items-end pb-[6rem] pt-[11rem] lg:pb-[7rem]" : "items-center pt-24";
  return (
    <header id="top" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,${overlay}),rgba(0,0,0,${overlay})), url(${image})`, backgroundPosition: position }} className={`flex min-h-[32rem] bg-cover text-white lg:min-h-[38rem] ${place}`}>
      <div className={`${wrapL} w-full ${inset}`}>
        <div className="animate-fade-up">
          {eyebrow && <div className="mb-4 text-base font-medium uppercase">{eyebrow}</div>}
          <h1 className={`leading-[1.05] ${titleClass}`}>{title}</h1>
        </div>
      </div>
    </header>
  );
}

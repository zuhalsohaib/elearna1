import { A } from "../../data/data";
import { CLIENTS } from "../../data/home2";
import Reveal from "../Reveal";
import { wrapM, label, btnYellow } from "../../styles/ui";

// The photo is loaded from /public/home2-offer.jpg. If that file is missing, the dark gradient is shown instead.
const BG = "linear-gradient(90deg,rgba(0,0,0,.55),rgba(0,0,0,.12) 65%), url(/home2-offer.jpg), linear-gradient(135deg,#10252b,#1f4a52 60%,#3a4a46)";

export default function Home2Offer() {
  return (
    <section id="contact">
      <div style={{ backgroundImage: BG }} className="flex min-h-[35rem] items-center bg-dark bg-cover bg-center pb-[6.875rem] pt-[5.625rem] text-white lg:h-[39.4375rem]">
        <div className={`${wrapM} w-full`}>
          <Reveal dir="left" className="max-w-[35rem]">
            <div className={`${label} !text-[0.9375rem]`}>What we offer</div>
            <h2 className="mb-3 text-[clamp(2rem,2.6vw,3rem)] leading-[1.1]">Personalized learning for your ambitions</h2>
            <p className="mb-[2.125rem] text-[1.0625rem] leading-8 text-white/90">Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.</p>
            <a href="#courses" className={`${btnYellow} !px-[2.75rem] !py-[0.9375rem]`}>Get Course</a>
          </Reveal>
        </div>
      </div>
      <div className={`${wrapM} relative z-10 -mt-20 pb-[3.75rem]`}>
        <Reveal>
          <div className="rounded-[0.25rem] bg-white px-5 pb-10 pt-[3rem] text-center shadow-[0_1.5rem_4.375rem_rgba(15,34,39,.12)]">
            <p className="text-[1.0625rem]">Learn from 350+ leading universities and companies with us</p>
            <div className="mt-[2.125rem] flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
              {[0, 1].map((k) => (
                <div key={k} className="flex shrink-0 animate-marquee gap-[5.625rem] pr-[5.625rem]">
                  {CLIENTS.concat(CLIENTS).map((l, i) => <img key={i} className="h-[3.25rem] w-auto" src={A + l} alt="Clients" />)}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

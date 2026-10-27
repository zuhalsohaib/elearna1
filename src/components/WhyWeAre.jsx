import { A } from "../data/data";
import Reveal from "./Reveal";
import { wrap, label, h2 } from "../styles/ui";

const WHY = [
  ["66c6fb8bee2a8ef26987f800_Books%20Icons.svg", "Learn anything"],
  ["66c6fb8bdf096206b7f4e62e_Money%20Bag%20ICon.svg", "Save money"],
  ["66c6fb8bf82fe9cef5f78d5e_Course%20Icon.svg", "Flexible courses"],
  ["66c6fb8b98a2dc7066c69460_Verified%20Icon.svg", "Unlimited certificate"],
];

export default function WhyWeAre() {
  return (
    <section className="bg-soft pb-[6.875rem] pt-[7.5rem]">
      <div className={wrap}>
        <Reveal className="mx-auto mb-[3.75rem] max-w-[40rem] text-center"><div className={label}>Why we are</div><h2 className={`${h2} mt-1.5`}>Elevate your professional journey</h2><p className="mt-3.5 text-muted">Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.</p></Reveal>
        <div className="grid grid-cols-1 gap-[1.875rem] text-center sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(([ic, t], i) => <Reveal key={t} delay={i * 120}><img className="mx-auto mb-[1.375rem] h-11" src={A + ic} alt="" /><h5 className="mb-[1.125rem] text-lg font-medium">{t}</h5><p className="mx-auto max-w-[14.375rem] text-[0.9375rem] text-muted">Lorem ipsum dolor sit amet conse non quis id viverra id proin.</p></Reveal>)}
        </div>
      </div>
    </section>
  );
}

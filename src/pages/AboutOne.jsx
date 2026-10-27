import Layout from "../components/Layout";
import Logos from "../components/Logos";
import CTA from "../components/CTA";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import QuoteSlider from "../components/QuoteSlider";
import InstructorPhoto, { Stars } from "../components/InstructorPhoto";
import useInView from "../hooks/useInView";
import { wrap, label, h2, btnDark } from "../styles/ui";
import { BOX_TEXT, STORY_TEXT, STORY_MORE, OFFER_TEXT } from "../data/text";
import teacherVideo from "../assets/teacher.mp4";
import teacherPoster from "../assets/teacher-wave.jpg";

const BOXES = [["01", "Flexibility and convenience"], ["02", "Course accessibility"], ["03", "Cost-effectiveness"], ["04", "Personalized learning"]];
const STRIP = [["◎", "150+ online courses"], ["✒", "Personalized learning"], ["⟳", "Lifetime update"]];
const STATS = [[1.5, "K", 1, "Finish seasons"], [7.8, "K", 1, "Enrolled"], [100, "%", 0, "Job placement"]];
const BIG = "text-[clamp(2.2rem,3.6vw,3.4rem)] leading-[1.12]";

function Story() {
  return (
    <section className="pb-[6rem]">
      <div className={`${wrap} grid items-start gap-[4rem] lg:grid-cols-2 lg:gap-[5rem]`}>
        <Reveal dir="up" className="relative -mt-[8rem]">
          <img src="/about-students.jpg" alt="Students learning together" className="block w-full rounded shadow-[0_2.5rem_4rem_rgba(15,34,39,.2)]" />
          <Reveal dir="left" delay={500} className="absolute -bottom-12 left-[5%] w-[90%] sm:left-1/2 sm:w-[44%] sm:min-w-[15rem]">
            <div className="rounded-[2rem] bg-white px-3 py-4 text-center shadow-[0_1.25rem_3rem_rgba(0,0,0,.15)]">
              <small className="block text-[0.95rem] text-muted">Trusted By</small>
              <b className="font-head text-[1.1rem] font-medium">15000+ enrolled students</b>
              <img src="/about-avatars.jpg" alt="" className="mx-auto my-1.5 h-8 rounded-full" />
              <Stars />
            </div>
          </Reveal>
        </Reveal>
        <div className="mt-24 lg:mt-28">
          <Reveal dir="right"><div className={label}>Our story</div><h2 className={`mb-4 ${BIG}`}>Limitless learning and get more possibilities</h2></Reveal>
          <Reveal dir="right" delay={150}><p className="leading-[2] text-muted">{STORY_TEXT + STORY_MORE}</p></Reveal>
          <Reveal delay={300} className="mt-8 flex flex-wrap gap-y-6">
            {STATS.map(([n, s, d, t], i) => (
              <div key={t} className={`px-4 sm:px-6 ${i ? "border-l border-ink" : "pl-0"}`}><Counter to={n} suffix={s} decimals={d} /><span className="mt-2 block text-[0.95rem] font-medium uppercase">{t}</span></div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Strip() {
  return (
    <section className="px-5">
      <Reveal className="mx-auto grid max-w-[90rem] gap-8 rounded bg-dark px-8 py-14 text-white shadow-[0_0_4rem_rgba(0,0,0,.08)] md:grid-cols-3">
        {STRIP.map(([ic, t]) => (
          <div key={t} className="group flex items-center gap-4 transition duration-300 hover:-translate-y-1.5">
            <span className="grid h-[3.25rem] w-[3.25rem] shrink-0 place-items-center rounded-full border border-white text-xl transition duration-500 group-hover:rotate-[360deg] group-hover:border-accent group-hover:bg-accent group-hover:text-ink">{ic}</span>
            <div><h5 className="text-[1.5rem] font-medium">{t}</h5><p className="text-[#b8c4c7]">Lorem ipsum dolor sit amet</p></div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

function Why() {
  return (
    <section className="pb-12 pt-28 text-center">
      <div className={wrap}>
        <Reveal><div className={label}>Why we are</div><h2 className={`${h2} mx-auto mt-2 max-w-[58rem] !leading-[1.25]`}>We believe in our good education and development system and we know how to work together to reach greater success</h2></Reveal>
      </div>
      {/* boxes cover the full width of the website; the Get Started button shows on hover (always visible on touch screens) */}
      <div className="mt-16 grid w-full text-left shadow-[0_2rem_4rem_rgba(15,34,39,.08)] sm:grid-cols-2 lg:grid-cols-4">
        {BOXES.map(([n, t], i) => (
          <Reveal key={n} delay={i * 120}>
            <div className="group relative h-full overflow-hidden bg-white px-[max(2.5rem,3vw)] pb-12 pt-14 transition duration-500 hover:-translate-y-3.5 hover:shadow-[0_2rem_3.5rem_rgba(15,34,39,.2)]">
              <span className="absolute left-0 top-0 h-1 w-0 bg-royal transition-all duration-500 group-hover:w-full" />
              <div className="font-head text-[2.4rem] text-royal">{n}</div>
              <h3 className="mb-4 mt-5 text-[1.6rem]">{t}</h3>
              <p className="leading-[2] text-muted">{BOX_TEXT}</p>
              <a href="#contact" className={`${btnDark} max-h-0 translate-y-6 overflow-hidden !border-0 !py-0 opacity-0 transition-all duration-500 group-hover:mt-7 group-hover:max-h-14 group-hover:translate-y-0 group-hover:!py-3.5 group-hover:opacity-100 [@media(hover:none)]:mt-7 [@media(hover:none)]:max-h-14 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100 [@media(hover:none)]:!py-3.5`}>Get Started</a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Offer() {
  const [ref, seen] = useInView(0.2);
  const slide = (from) => `transition duration-1000 ${seen ? "translate-x-0 opacity-100" : `${from} opacity-0`}`;
  return (
    <section className="py-24">
      <div className={`${wrap} grid items-center gap-[4rem] lg:grid-cols-2 lg:gap-[5rem]`}>
        {/* picture collage: every size is a % of the box, so it shrinks smoothly on phones */}
        <div ref={ref} className="relative mx-auto aspect-[38/36] w-full max-w-[38rem]">
          <div className="absolute left-[12%] top-0 aspect-square w-[34%] animate-float-slow rounded-full bg-accent" />
          <div className="absolute bottom-0 left-[3%] aspect-square w-[63%] rounded-full border-2 border-line" />
          <img src="/about-woman.jpg" alt="Student" className={`absolute right-0 top-[8.3%] h-[88.9%] w-[55%] rounded object-cover shadow-[0_2rem_3rem_rgba(0,0,0,.18)] ${slide("translate-x-20")}`} />
          <video src={teacherVideo} poster={teacherPoster} autoPlay muted loop playsInline className={`absolute left-0 top-[20.8%] z-10 h-[54%] w-[37%] rounded-t-2xl object-cover shadow-[0_1.2rem_2.5rem_rgba(0,0,0,.2)] delay-300 ${slide("-translate-x-20")}`} />
        </div>
        <Reveal dir="right">
          <div className={label}>What we offer</div>
          <h2 className={`mb-4 max-w-[32rem] ${BIG} !leading-[1.1]`}>Personalized learning for your ambitions</h2>
          <p className="text-muted">{OFFER_TEXT}</p>
          <ul className="mb-9 mt-6 grid list-disc gap-x-5 gap-y-3 pl-5 font-medium sm:grid-cols-2">{["Skill-based instruction", "Analytics and insights", "Global certification", "Customizable courses"].map((t) => <li key={t}>{t}</li>)}</ul>
          <div className="flex flex-wrap items-center justify-between gap-5 bg-soft px-6 py-8 sm:px-9">
            <div><h5 className="mb-2 text-[1.2rem]">Still have questions?</h5><p className="max-w-[16rem] text-[0.95rem] text-muted">Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.</p></div>
            <a href="#contact" className={btnDark}>Get Started</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Instructor() {
  return (
    <section className="py-20">
      <div className={`${wrap} grid items-center gap-12 lg:grid-cols-2`}>
        <Reveal className="lg:text-right">
          <h2 className="text-[clamp(2.4rem,4.2vw,4rem)]">Became an instructor</h2>
          <p className="my-5 leading-[2] text-muted">Lorem ipsum dolor sit amet consectetur. Sed ultricies fames scelerisque urna quis semper amet. Nisl tincidunt tortor nullam est nec commodo orci dictum in. Lorem consectetur donec purus sagittis.</p>
          <a href="#contact" className={btnDark}>Start Teaching Today</a>
        </Reveal>
        <Reveal dir="right" className="px-4 sm:px-0 lg:ml-auto"><InstructorPhoto className="max-w-[29rem]" /></Reveal>
      </div>
    </section>
  );
}

export default function AboutOne(props) {
  return (
    <Layout {...props} footer="one">
      <header id="top" className="relative h-[28rem] overflow-hidden bg-dark pt-36 text-center text-white sm:h-[32rem] sm:pt-40">
        <div className="animate-fade-up px-5"><div className="text-sm font-medium uppercase">About us</div><h1 className="mx-auto mt-4 max-w-[48rem] text-[clamp(2.6rem,5.4vw,4.6rem)] leading-[1.1]">You’re sincerely determined to grow</h1></div>
      </header>
      <Story /><Strip /><Why /><Offer /><Logos dark /><Instructor /><QuoteSlider soft /><CTA />
    </Layout>
  );
}

import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import Logos from "../components/Logos";
import Unlocking from "../components/home2/Unlocking";
import Blog from "../components/home2/Blog";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import InstructorPhoto from "../components/InstructorPhoto";
import { wrapM, label, btnYellow } from "../styles/ui";
import { STORY_TEXT, STORY_MORE, OFFER_TEXT } from "../data/text";

const BOOKS = [["/about2-p1.jpg", "Web design"], ["/about2-p2.jpg", "Marketing"], ["/about2-p3.jpg", "Finance"], ["/about2-p4.jpg", "Development"]];
const BIG = "text-[clamp(2.2rem,3.4vw,3.4rem)] leading-[1.12]";
const smallCount = "text-[clamp(1.5rem,3.4vw,3.4rem)]";

function Story() {
  return (
    <section className="py-[6.5rem] lg:py-[9rem]">
      <div className={`${wrapM} grid items-center gap-[4.5rem] lg:grid-cols-2 lg:gap-[7.5rem]`}>
        <Reveal dir="left">
          <div className="relative mx-auto aspect-[622/666] w-full max-w-[39rem]">
            <img src="/about-students.jpg" alt="Students" className="absolute left-0 top-0 h-[44.7%] w-[75%] rounded object-cover shadow-[0_1.75rem_3.5rem_rgba(15,34,39,.18)]" />
            <img src="/about2-woman.jpg" alt="Student with headphones" className="absolute left-[28.5%] top-[27.9%] h-[72%] w-[71.5%] rounded object-cover shadow-[0_1.75rem_3.5rem_rgba(15,34,39,.22)]" />
            <div className="absolute left-[80%] top-[1%] flex gap-1.5 text-ink [writing-mode:vertical-rl]">
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.12em]">Year of experiance</span>
              <span className="font-head text-[clamp(3rem,6vw,6.5rem)] font-medium leading-none">25</span>
            </div>
          </div>
        </Reveal>
        <Reveal dir="right">
          <div className={label}>Our story</div>
          <h2 className={`mb-6 ${BIG}`}>Limitless learning and get more possibilities</h2>
          <p className="mb-6 leading-[1.9] text-muted">{STORY_TEXT + STORY_MORE}</p>
          <p className="leading-[1.9] text-muted">{STORY_TEXT}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="pb-[6rem] pt-4">
      <div className={wrapM}>
        <Reveal><div className={label}>Our philosophy</div><h2 className="mb-10 text-[clamp(2rem,2.8vw,3rem)]">Get instant access courses</h2></Reveal>
        <div className="grid gap-[1.875rem] sm:grid-cols-2 lg:grid-cols-4">
          {BOOKS.map(([img, t], i) => (
            <Reveal key={t} delay={i * 120} className="group">
              <div className="relative aspect-[300/368] [perspective:1200px]">
                {/* the back page that shows when the cover opens */}
                <div className="absolute inset-0 rounded bg-[#b4b5ba]">
                  <span className="absolute right-[0.9rem] top-1/2 -translate-y-1/2 font-head text-[1.2rem] text-ink opacity-0 transition duration-500 [writing-mode:vertical-rl] group-hover:opacity-100 group-hover:delay-300">{t}</span>
                </div>
                {/* the cover opens like a book on hover */}
                <div className="absolute inset-0 origin-left overflow-hidden rounded transition duration-700 ease-out group-hover:shadow-[0_2rem_3rem_rgba(15,34,39,.3)] group-hover:[transform:rotateY(-28deg)]">
                  <img src={img} alt={t} className="h-full w-full object-cover" />
                  <span className="absolute right-5 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-xl opacity-0 transition duration-500 group-hover:opacity-100">→</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const BOX = "absolute grid h-[27.8%] place-items-center text-center";
function Vision() {
  return (
    <section className="py-[7rem]">
      <div className={`${wrapM} grid items-center gap-[4.5rem] lg:grid-cols-2 lg:gap-[7rem]`}>
        <Reveal dir="left">
          <div className="relative mx-auto aspect-[660/508] w-full max-w-[41rem]">
            <img src="/about2-v1.jpg" alt="Student" className="absolute left-0 top-0 h-[66.3%] w-[47.7%] rounded-sm object-cover" />
            <div className={`${BOX} left-[52.3%] top-0 w-[30.8%] bg-dark text-accent`}><div><Counter to={1.5} decimals={1} suffix="K" className={smallCount} /><p className="mt-2 text-[0.7rem] font-medium uppercase sm:text-[0.85rem]">Finish seasons</p></div></div>
            <img src="/about2-v2.jpg" alt="Teacher" className="absolute left-[52.3%] top-[33.7%] h-[66.3%] w-[47.7%] rounded-sm object-cover" />
            <div className={`${BOX} left-[16.5%] top-[72.2%] w-[31%] bg-accent text-ink`}><div><Counter to={100} suffix="%" className={smallCount} /><p className="mt-2 text-[0.7rem] font-medium uppercase sm:text-[0.85rem]">Job placement</p></div></div>
          </div>
        </Reveal>
        <Reveal dir="right">
          <div className={label}>Our vision</div>
          <h2 className={`mb-6 max-w-[29rem] ${BIG}`}>75K+ student joined with us to achieve their goals</h2>
          <p className="mb-8 leading-[1.9] text-muted">{OFFER_TEXT}</p>
          <ul className="list-disc space-y-3 pl-5 text-muted">{[0, 1, 2].map((k) => <li key={k}>Lorem ipsum dolor sit amet consectetur id quam mauris mus.</li>)}</ul>
        </Reveal>
      </div>
    </section>
  );
}

function Banner() {
  return (
    <section className="bg-white pb-6 pt-28">
      <div className={wrapM}>
        <div className="relative flex min-h-[15rem] items-center rounded-sm bg-dark px-8 py-12 text-white sm:px-[4.5rem]">
          <Reveal dir="left" className="max-w-[26rem]">
            <h2 className="mb-4 text-[clamp(1.8rem,2.2vw,2.3rem)]">Became an instructor</h2>
            <p className="mb-6 text-[0.95rem] leading-[1.8] text-white/80">{OFFER_TEXT}</p>
            <a href="#top" className={btnYellow}>Start Teaching Today</a>
          </Reveal>
          <Reveal dir="right" className="absolute bottom-0 right-[7%] hidden w-[17rem] md:block"><InstructorPhoto /></Reveal>
        </div>
      </div>
    </section>
  );
}

export default function AboutTwo(props) {
  return (
    <Layout {...props}>
      <PageHero image="/about2-hero.jpg" overlay={0.55} eyebrow="About us" title="You’re sincerely determined to grow" inset="lg:pl-[8%]" titleClass="max-w-[36rem] text-[clamp(2.6rem,4.2vw,4.4rem)]" />
      <Story />
      <Philosophy />
      <Unlocking eyebrow="Why we are" heading="We believe in our good education and development system and we know how to work together to reach greater success" />
      <Logos />
      <Vision />
      <Banner />
      <Blog plain />
    </Layout>
  );
}

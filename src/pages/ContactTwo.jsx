import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";
import Reveal from "../components/Reveal";
import ContactForm from "../components/contact/ContactForm";
import InfoRow from "../components/contact/InfoRow";
import Faq from "../components/contact/Faq";
import { CONTACT_TEXT } from "../data/text";
import { wrapM, label } from "../styles/ui";

// Pictures: public/contact2-hero.jpg (top) and public/contact2-photo.jpg (people photo). Replace them with your own files.
export default function ContactTwo(props) {
  return (
    <Layout {...props} boxed>
      <PageHero image="/contact2-hero.jpg" overlay={0.4} title="Contact us" />

      <section className="px-5 pb-[5rem] pt-[6rem] text-center">
        <div className={wrapM}>
          <Reveal className="mx-auto max-w-[44rem]">
            <div className={label}>Contact us</div>
            <h2 className="mb-5 text-[clamp(2rem,3.1vw,3.3rem)] leading-[1.18]">Get details information about online courses, contact us. we’re happy to discuss</h2>
            <p className="mx-auto max-w-[36rem] leading-[1.9] text-muted">{CONTACT_TEXT}</p>
          </Reveal>
          <div className="mt-12"><InfoRow /></div>
        </div>
      </section>

      <section className="bg-white pb-[1px]">
        {/* big words slide across behind the form card */}
        <div aria-hidden className="flex h-[8.6rem] select-none items-center overflow-hidden">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 animate-marquee whitespace-nowrap">
              {[0, 1, 2].map((j) => <span key={j} className="px-8 font-head text-[clamp(3.5rem,6vw,6.2rem)] font-bold uppercase leading-none text-[#ececf4]">Get in touch with me today</span>)}
            </div>
          ))}
        </div>
        <div className="relative">
          <div style={{ backgroundImage: "url(/contact2-photo.jpg)" }} className="h-[20rem] bg-cover bg-center sm:h-[26rem] lg:min-h-[34rem]" />
          <Reveal dir="up" className="relative z-10 mx-auto -mt-16 w-[92%] max-w-[34rem] pb-10 lg:absolute lg:-top-[8.6rem] lg:left-[54.9%] lg:mt-0 lg:w-[max(27.2%,26rem)] lg:max-w-none lg:pb-0">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="bg-soft pb-[6.5rem] pt-[5.5rem]"><Faq /></section>

      <CTA variant="image" />
    </Layout>
  );
}

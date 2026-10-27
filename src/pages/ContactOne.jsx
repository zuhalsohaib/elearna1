import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";
import Reveal from "../components/Reveal";
import ContactForm from "../components/contact/ContactForm";
import InfoRow from "../components/contact/InfoRow";
import Faq from "../components/contact/Faq";
import { A } from "../data/data";
import { CONTACT_TEXT } from "../data/text";
import { wrapL, wrapM, label } from "../styles/ui";

// Hero photo comes from the website images (Contact Us One). To use your own, change the address below.
const HERO = A + "66de9b2474f1094cb7ea1767_Contact%20Us%20One.webp";

export default function ContactOne(props) {
  return (
    <Layout {...props} footer="one">
      <PageHero image={HERO} overlay={0.55} position="70% 30%" title="Contact us" />

      <section className="pb-[6rem]">
        <div className={`${wrapL} grid gap-12 lg:grid-cols-[1fr_40rem] lg:gap-[4rem]`}>
          <Reveal dir="left" className="pt-10 lg:pt-[6.5rem]">
            <div className={label}>Contact us</div>
            <h2 className="mb-5 max-w-[40rem] text-[clamp(2.2rem,3.2vw,3.5rem)] leading-[1.12]">Are you interested in online learning? Contact us</h2>
            <p className="max-w-[40rem] leading-[1.9] text-muted">{CONTACT_TEXT} Tristique nullam risus semper habitant urna nisl nam elit at.</p>
            <p className="mt-14 text-[4.2rem] leading-none text-ink" style={{ fontFamily: "'Mrs Saint Delafield', cursive" }}>Brayden Beckham</p>
            <h5 className="mt-2 text-[1.1rem] font-medium">Brayden Backham</h5>
            <small className="uppercase text-muted">Director</small>
          </Reveal>
          <Reveal dir="right" className="relative z-10 lg:-mt-[7.5rem]"><ContactForm /></Reveal>
        </div>
      </section>

      <section className="pb-[5.5rem] text-center">
        <div className={wrapM}>
          <Reveal><div className={label}>Contact details</div><h2 className="mb-12 text-[clamp(2.2rem,3vw,3.2rem)]">Find our location</h2></Reveal>
          <InfoRow />
        </div>
      </section>

      <section className="px-5 pb-[6rem]">
        <div className="mx-auto max-w-[67rem] bg-gradient-to-b from-soft to-white pb-[4rem] pt-[4.5rem]"><Faq /></div>
      </section>

      <CTA />
    </Layout>
  );
}

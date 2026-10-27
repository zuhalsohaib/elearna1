import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import Categories from "../components/Categories";
import TopCourses from "../components/TopCourses";
import Offer from "../components/Offer";
import Testimonials from "../components/Testimonials";
import Trending from "../components/Trending";
import WhyWeAre from "../components/WhyWeAre";
import CTA from "../components/CTA";

export default function HomeOne({ add, ...page }) {
  return (
    <Layout {...page} footer="one">
      <Hero />
      <Logos />
      <Categories />
      <TopCourses add={add} />
      <Offer />
      <Testimonials />
      <Trending add={add} />
      <WhyWeAre />
      <CTA />
    </Layout>
  );
}

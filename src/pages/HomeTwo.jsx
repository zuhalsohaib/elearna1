import Layout from "../components/Layout";
import Home2Hero from "../components/home2/Home2Hero";
import FeatureStrip from "../components/home2/FeatureStrip";
import Home2Categories from "../components/home2/Home2Categories";
import Unlocking from "../components/home2/Unlocking";
import Home2Courses from "../components/home2/Home2Courses";
import Home2Why from "../components/home2/Home2Why";
import Home2Offer from "../components/home2/Home2Offer";
import QuoteSlider from "../components/QuoteSlider";
import Blog from "../components/home2/Blog";

export default function HomeTwo({ add, ...page }) {
  return (
    <Layout {...page} boxed>
      <Home2Hero />
      <FeatureStrip />
      <Home2Categories />
      <Unlocking />
      <Home2Courses add={add} />
      <Home2Why />
      <Home2Offer />
      <QuoteSlider />
      <Blog />
    </Layout>
  );
}

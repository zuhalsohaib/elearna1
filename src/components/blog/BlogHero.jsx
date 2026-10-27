import PageHero from "../PageHero";

// Same hero on Blog One and Blog Two. Photo: /public/blog-hero.jpg
export default function BlogHero() {
  return <PageHero image="/blog-hero.jpg" overlay={0.58} align="end" eyebrow="News and journals" title="Planning to transition to a new career?" titleClass="max-w-[40rem] text-[clamp(2.6rem,4.2vw,4.6rem)]" />;
}

import { useState } from "react";
import Layout from "../components/Layout";
import BlogHero from "../components/blog/BlogHero";
import CTA from "../components/CTA";
import Reveal from "../components/Reveal";
import { BLOG } from "../data/blog";
import { wrapM } from "../styles/ui";

const PER = 6;
const PAGES = Math.ceil(BLOG.length / PER);

export default function BlogOne(props) {
  const [page, setPage] = useState(1);
  const posts = BLOG.slice((page - 1) * PER, page * PER);
  return (
    <Layout {...props} boxed>
      <BlogHero />
      <section className="bg-white py-[6.5rem]">
        <div className={wrapM}>
          <div key={page} className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.id} delay={i * 100} className="h-full">
                <a href="#top" className="group block h-full overflow-hidden rounded-[0.25rem] border border-line bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_1.5rem_3.5rem_rgba(15,34,39,.12)]">
                  <div className="overflow-hidden"><img src={p.img} alt={p.title} className="aspect-[255/185] w-full object-cover transition-transform duration-700 group-hover:scale-110" /></div>
                  <div className="px-[2.1rem] pb-[2.2rem] pt-[1.9rem]">
                    <small className="text-[0.75rem] font-medium uppercase tracking-wide">{p.cat}</small>
                    <h5 className="mb-7 mt-4 text-[1.2rem] font-medium leading-snug transition-colors duration-300 group-hover:text-royal">{p.title}</h5>
                    <p className="text-[0.95rem] text-muted">{p.date}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-4 text-[0.8rem]">
            <span>{page} / {PAGES}</span>
            {page < PAGES
              ? <button onClick={() => setPage(page + 1)} className="transition hover:text-royal">Next →</button>
              : <button onClick={() => setPage(page - 1)} className="transition hover:text-royal">← Previous</button>}
          </div>
        </div>
      </section>
      <CTA variant="image" />
    </Layout>
  );
}

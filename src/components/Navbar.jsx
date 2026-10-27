import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { LOGO, NAV, FREE, PAID } from "../data/data";
import { Chev } from "./Icons";

const ITEMS = ["Home", "Courses", "Pages", "Blog", "Contact"];
const panel = "absolute left-[-1.125rem] top-full z-50 mt-2.5 flex min-w-[12.5rem] flex-col rounded bg-white p-3.5 text-ink shadow-[0_1.125rem_2.5rem_rgba(0,0,0,.25)] max-lg:static max-lg:mt-0 max-lg:min-w-0 max-lg:shadow-none";
const plink = "rounded-[0.1875rem] px-2.5 py-[0.4375rem] text-[0.9375rem] transition duration-200 hover:translate-x-1 hover:text-accent";

function TopBar() {
  return (
    <div className="hidden border-b border-white/15 text-[0.9375rem] md:block">
      <div className="mx-auto flex h-11 max-w-[93.5rem] items-center justify-between px-5">
        <p>Are you interested in online coaching? <a href="#contact" className="transition hover:text-accent">Contact us.</a></p>
        <div className="flex gap-[2.125rem]"><a href="mailto:support@example.com" className="transition hover:text-accent">support@example.com</a><span>Call: (888) 123 4567</span></div>
      </div>
    </div>
  );
}

export default function Navbar({ count, openCart, boxed = false }) {
  const [open, setOpen] = useState(null);
  const [mob, setMob] = useState(false);
  const [stuck, setStuck] = useState(false);
  useEffect(() => {
    const f = () => setStuck(window.scrollY > 40);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const ref = useRef(null);
  useEffect(() => {
    const f = (e) => ref.current && !ref.current.contains(e.target) && setOpen(null);
    document.addEventListener("mousedown", f);
    return () => document.removeEventListener("mousedown", f);
  }, []);
  return (
    <header ref={ref} className={`fixed inset-x-0 top-0 z-50 text-white transition-[background-color,box-shadow] duration-300 ${stuck ? "bg-dark/95 shadow-[0_0.5rem_1.5rem_rgba(0,0,0,.25)] backdrop-blur" : ""} ${boxed ? "" : "pt-1.5"}`}>
      {boxed && <TopBar />}
      <div className={`relative flex items-center justify-between ${boxed ? "mx-auto h-[5.5rem] max-w-[93.5rem] px-5" : "h-14 px-[4vw]"}`}>
        <Link to="/" className="shrink-0"><img src={LOGO} alt="Elearna" className={boxed ? "h-8" : "h-7"} /></Link>
        <nav className={`${mob ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col bg-white px-5 py-2.5 text-ink shadow-lg lg:inset-x-auto lg:left-1/2 lg:top-auto lg:flex lg:-translate-x-1/2 lg:flex-row lg:gap-[1.625rem] lg:bg-transparent lg:p-0 lg:text-white lg:shadow-none`}>
          {ITEMS.map((k) => (
            <div className="relative" key={k}>
              <button className="flex items-center gap-[0.4375rem] py-2 text-base font-medium" onClick={() => setOpen(open === k ? null : k)}>
                {k} <Chev className={`transition-transform duration-200 ${open === k ? "rotate-180" : ""}`} />
              </button>
              {open === k && (k === "Courses" ? (
                <div className={`${panel} lg:left-[-12.5rem] lg:min-w-[40rem] lg:flex-row lg:gap-[1.875rem] lg:p-6`}>
                  <div className="flex flex-col"><h6 className="font-head text-lg">Free courses</h6><p className="mb-2.5 text-sm text-muted">Free learning resources for skill development.</p>{FREE.map((l) => <a key={l} href="#courses" className={plink}>{l}</a>)}</div>
                  <div className="flex flex-col"><h6 className="font-head text-lg">Paid courses</h6><p className="mb-2.5 text-sm text-muted">Courses are available upon purchase.</p>{PAID.map((l) => <a key={l} href="#courses" className={plink}>{l}</a>)}</div>
                </div>
              ) : (
                <div className={panel}>
                  {NAV[k].map(([l, to]) => <Link key={l} to={to} className={plink} onClick={() => { setOpen(null); setMob(false); }}>{l}</Link>)}
                </div>
              ))}
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-3.5 font-medium">
          <button className="relative mr-[1.875rem] h-[1.875rem]" onClick={openCart} aria-label="Cart">
            <svg width="22" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.3"><path d="M5 8h14l1 13H4L5 8z M9 8V6a3 3 0 016 0v2" /></svg>
            <b className="absolute -right-3 -top-0.5 grid h-[1.125rem] w-[1.125rem] place-items-center rounded-full bg-accent text-[0.6875rem] text-ink">{count}</b>
          </button>
          <a href="#top" className="max-sm:hidden">Login</a>
          <i className="h-5 w-px bg-white/60 max-sm:hidden" />
          <a href="#top" className="max-sm:hidden">Register</a>
          <button className="text-[1.625rem] lg:hidden" onClick={() => setMob(!mob)} aria-label="Menu">☰</button>
        </div>
      </div>
    </header>
  );
}

import { useEffect, useRef, useState } from "react";

// Scroll animation: the content fades in and slides in when it enters the screen.
// dir = "up" | "down" | "left" | "right"   delay = milliseconds
const hidden = { up: "translate-y-10", down: "-translate-y-10", left: "-translate-x-12", right: "translate-x-12" };

export default function Reveal({ dir = "up", delay = 0, className = "", children }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [settled, setSettled] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShow(true);
        setTimeout(() => setSettled(true), delay + 900);
        o.disconnect();
      }
    }, { threshold: 0.12 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [delay]);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: settled ? "0ms" : `${delay}ms` }}
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:!translate-x-0 motion-reduce:!translate-y-0 motion-reduce:!opacity-100 ${show ? "translate-x-0 translate-y-0 opacity-100" : `opacity-0 ${hidden[dir]}`} ${className}`}
    >
      {children}
    </div>
  );
}

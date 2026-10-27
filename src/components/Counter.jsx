import { useState, useEffect } from "react";
import useInView from "../hooks/useInView";

export default function Counter({ to, suffix = "", decimals = 0, className = "text-[clamp(2.4rem,4vw,3.4rem)]" }) {
  const [ref, seen] = useInView();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    let p = 0;
    const t = setInterval(() => { p = Math.min(1, p + 0.025); setN(to * p); if (p >= 1) clearInterval(t); }, 30);
    return () => clearInterval(t);
  }, [seen, to]);
  return <span ref={ref} className={`font-head font-medium leading-none ${className}`}>{n.toFixed(decimals)}{suffix}</span>;
}

// Round previous / next buttons (used by every testimonial slider)
export default function ArrowButtons({ onPrev, onNext, tone = "dark", className = "" }) {
  const cls = `h-[2.375rem] w-[2.375rem] rounded-full border border-[#8a9ea2] transition duration-300 hover:border-accent hover:bg-accent hover:text-ink ${tone === "dark" ? "text-white" : "text-ink"}`;
  return (
    <div className={`flex gap-2 ${className}`}>
      {[["←", onPrev, "Previous"], ["→", onNext, "Next"]].map(([s, f, a]) => <button key={a} aria-label={a} onClick={f} className={cls}>{s}</button>)}
    </div>
  );
}

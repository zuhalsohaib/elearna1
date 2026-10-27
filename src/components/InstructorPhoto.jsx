// Instructor photo with the rating bubble (About One and About Two)
export const Stars = () => <div className="text-[0.75rem] tracking-widest text-accent">★★★★★ <span className="tracking-normal text-muted">4.94 (625)</span></div>;

export default function InstructorPhoto({ className = "" }) {
  return (
    <div className={`relative w-full ${className}`}>
      <img src="/about-instructor.jpg" alt="Instructor" className="block w-full animate-float-slow" />
      <div className="absolute left-0 top-[24%] grid h-[21%] w-[47%] place-items-center rounded-full bg-white pt-1 text-ink shadow-[0_1rem_2.5rem_rgba(0,0,0,.18)] sm:-left-[10%]">
        <img src="/about-avatars.jpg" alt="" className="h-[40%] rounded-full" /><Stars />
      </div>
    </div>
  );
}

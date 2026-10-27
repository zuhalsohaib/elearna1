import { useRef, useState } from "react";
import teacherVideo from "../assets/teacher.mp4";

const circle = "grid h-9 w-9 place-items-center rounded-full shadow-md transition hover:scale-110";
const svg = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };

export default function VideoCall() {
  const vid = useRef(null);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);
  const toggleSound = () => { vid.current.muted = !muted; setMuted(!muted); };
  const togglePlay = () => { paused ? vid.current.play() : vid.current.pause(); setPaused(!paused); };
  return (
    <div className="relative hidden h-[13.875rem] w-[18.75rem] shrink-0 xl:w-[17.6875rem] overflow-hidden rounded-xl sm:block">
      <video ref={vid} src={teacherVideo} autoPlay muted loop playsInline className="h-full w-full object-cover" />
      <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-3">
        <span className={`${circle} bg-[#22c55e]`} aria-label="Add"><svg {...svg} stroke="#fff"><path d="M12 5v14M5 12h14" /></svg></span>
        <button onClick={toggleSound} className={`${circle} bg-white`} aria-label="Sound">
          <svg {...svg} stroke="#0f2227"><path d="M12 15a3 3 0 003-3V6a3 3 0 00-6 0v6a3 3 0 003 3zM19 11a7 7 0 01-14 0M12 18v3" />{muted && <path d="M4 4l16 16" />}</svg>
        </button>
        <button onClick={togglePlay} className={`${circle} bg-white`} aria-label="Play or pause">
          <svg {...svg} stroke="#0f2227"><path d="M3 7h11v10H3zM14 10l7-3v10l-7-3" />{paused && <path d="M3 3l18 18" />}</svg>
        </button>
        <span className={`${circle} bg-[#e11d48]`} aria-label="End call"><svg {...svg} stroke="#fff" className="rotate-[135deg]"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" /></svg></span>
      </div>
    </div>
  );
}

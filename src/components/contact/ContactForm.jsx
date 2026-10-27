import { useState } from "react";
import { btnDark } from "../../styles/ui";

const field = "w-full rounded-[0.1875rem] border border-[#d3dadc] bg-white px-6 py-4 font-body text-base text-ink outline-none transition placeholder:text-[#b5bec1] focus:border-ink focus:shadow-[0_0_0_3px_rgba(15,34,39,.08)]";

// Contact form card (used on Contact One and Contact Two). Sending only shows the thank-you message:
// connect it to your own server / form service inside onSubmit.
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 6000);
  };
  return (
    <form onSubmit={submit} className="rounded-[0.25rem] bg-white px-7 pb-10 pt-9 shadow-[0_1.75rem_4.5rem_rgba(15,34,39,.14)] sm:px-[2.9rem]">
      <h3 className="text-[clamp(1.9rem,2.4vw,2.6rem)]">Fill out for contact</h3>
      <p className="mb-8 mt-3 text-muted">Lorem ipsum dolor sit amet consectetur libero donec.</p>
      <div className="space-y-[1.4rem]">
        <input className={field} name="name" placeholder="Your name*" required />
        <input className={field} type="email" name="email" placeholder="Your email*" required />
        <input className={field} name="subject" placeholder="Subject" />
        <textarea className={`${field} h-[11rem] resize-y`} name="message" placeholder="Your message*" required />
      </div>
      <label className="mb-8 mt-5 flex cursor-pointer items-center gap-3 text-muted"><input type="checkbox" className="h-4 w-4 accent-[#0f2227]" />Save information for the next time comment.</label>
      <button type="submit" className={`${btnDark} !px-[3rem] !py-[1.15rem]`}>Send Message</button>
      {sent && <p role="status" className="mt-5 animate-fade-up-fast rounded bg-[#ddf6d2] px-4 py-3 text-[0.95rem] text-[#1f5c0e]">Thank you! Your submission has been received!</p>}
    </form>
  );
}

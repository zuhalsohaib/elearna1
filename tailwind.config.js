/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#14282d",
        ink: "#0f2227",
        accent: "#ffb40b",
        royal: "#1f47d6",
        soft: "#eef5f8",
        muted: "#6f7c80",
        line: "#dce7ea",
      },
      fontFamily: {
        body: ["Outfit", "sans-serif"],
        head: ["Space Grotesk", "sans-serif"],
      },
      keyframes: {
        marquee: { to: { transform: "translateX(-100%)" } },
        fadeUp: { from: { opacity: "0", transform: "translateY(40px)" }, to: { opacity: "1", transform: "none" } },
        slideInLeft: { from: { opacity: "0", transform: "translateX(-140px)" }, to: { opacity: "1", transform: "none" } },
        imgIn: { from: { opacity: "0", transform: "scale(1.1) translateX(-40px)" }, to: { opacity: "1", transform: "none" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "fade-up": "fadeUp .9s ease-out .2s both",
        "fade-up-fast": "fadeUp .6s ease-out both",
        "slide-in-left": "slideInLeft 1s ease-out .8s both",
        "img-in": "imgIn .7s ease-out both",
        float: "float 5s ease-in-out infinite",
        "float-slow": "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

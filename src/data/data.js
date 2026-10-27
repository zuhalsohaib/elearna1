
export const A = "https://cdn.prod.website-files.com/668cb7adec02e140422345de/";
export const C = "https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/";
export const LOGO = A + "66c6fb8bf82fe9cef5f78d65_Elearna.svg";

export const COURSES = [
  { id: 1, title: "Crisis management and problem-solving strategies", cat: "Management", rating: "4.88", reviews: "210", lessons: 6, enrolled: "8k", price: 0, img: "6710c8cf232065a7046261dc_Course%20Image-7.webp" },
  { id: 2, title: "Advanced photoshop techniques for designers", cat: "Design", rating: "5.00", reviews: "1.2K", lessons: 8, enrolled: "25k", price: 0, img: "6710bcf4976ba1d072d8b476_Course%20Image-4-2.webp" },
  { id: 3, title: "Operations management and process improvement", cat: "Finance", rating: "5.00", reviews: "812", lessons: 12, enrolled: "23k", price: 0, img: "66eb9e25c4d132b7abc4dcb2_Course%20Small%20Image-8.webp" },
  { id: 4, title: "Database integration with MongoDB", cat: "Development", rating: "4.49", reviews: "756", lessons: 10, enrolled: "7k", price: 59, img: "66eb9e1184c0c12d2244968d_Course%20Small%20Image-9.webp" },
  { id: 5, title: "Risk management and business continuity", cat: "Management", rating: "4.88", reviews: "210", lessons: 3, enrolled: "8k", price: 49, img: "66eb9e363f6e47ec5245cf09_Course%20Small%20Image-7.webp" },
  { id: 6, title: "Full-stack development with the MERN stack", cat: "Development", rating: "5.00", reviews: "985", lessons: 12, enrolled: "22k", price: 72, img: "66eb9e61096e930736b651e4_Course%20Small%20Image-5.webp" },
  { id: 7, title: "Design systems and pattern libraries", cat: "Design", rating: "5.00", reviews: "1.2K", lessons: 8, enrolled: "25k", price: 99, img: "66fe66442929de6e874b3284_Course%20Image.webp" },
  { id: 8, title: "Learn interactive Web Design by building real projects", cat: "Design", rating: "4.49", reviews: "756", lessons: 12, enrolled: "23k", price: 79, img: "66eba4fcd2cfcf11fe70ccfe_Course%20Small%20Image-4.webp" },
  { id: 9, title: "Building single page applications with angular", cat: "Development", rating: "5.00", reviews: "328", lessons: 6, enrolled: "12k", price: 0, img: "66eb9dfb3e87f8984b5a15b6_Course%20Small%20Image.webp" },
  { id: 10, title: "Grow your brand and reach your audience", cat: "Management", rating: "4.88", reviews: "210", lessons: 10, enrolled: "8k", price: 49, img: "66eb9fb02faddeb03288c28e_Course%20Small%20Image-2.webp" },
  { id: 11, title: "The complete guide to personal and business finance", cat: "Finance", rating: "4.88", reviews: "210", lessons: 10, enrolled: "8k", price: 99, img: "66eb9ece25b132baef1462d5_Course%20Small%20Image-3.webp" },
];
// Menu items: [label, page address]
export const NAV = {
  Home: [["Home One", "/"], ["Home Two", "/home-two"]],
  Pages: [["About One", "/about-one"], ["About Two", "/about-two"]],
  Blog: [["Blog One", "/blog-one"], ["Blog Two", "/blog-two"]],
  Contact: [["Contact One", "/contact-one"], ["Contact Two", "/contact-two"]],
};
export const FREE = ["Corporate Finance And Investments", "Advanced Photoshop Techniques", "Crisis Management", "Single Page Applications With Angular"];
export const PAID = ["Personal And Business Finance", "Management And Process Improvement", "Interactive Web Design", "Design Systems And Pattern Libraries", "Grow Your Brand And Reach Your Audience", "Risk Management", "Database Integration With MongoDB", "Full-Stack Development with MERN Stack"];
export const ICONS = {
  layers: "M12 3l9 5-9 5-9-5 9-5z M3 12l9 5 9-5 M3 16l9 5 9-5",
  pen: "M4 20l1-4L16 5l3 3L8 19l-4 1z M14 7l3 3 M3 21h6",
  chart: "M4 20h16 M7 20v-6 M12 20V9 M17 20v-9 M16 4l3 3",
  mega: "M4 10v4h3l7 4V6L7 10H4z M17 9a4 4 0 010 6 M6 14l1 5",
  code: "M3 5h18v14H3z M3 9h18 M10 12l-2 2 2 2 M14 12l2 2-2 2",
  text: "M5 5h14v14H5z M9 9h6 M12 9v7 M3 3h4v4H3z M17 3h4v4h-4z",
};
export const CATS = [["Creative web design", 8, "pen"], ["Finance accounting", 10, "chart"], ["IT and software", 5, "pen"], ["Digital marketing", 4, "mega"], ["Web development", 8, "code"], ["Content writing", 3, "text"]];
export const TESTI = [
  { text: "Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.", name: "Linda Grady", role: "Co-assistant manager", img: "66cd560b74d8d4d4ed334d02_Testimonial%20Author%20Image.avif" },
  { text: "Lorem ipsum dolor sit amet consectetur. Molestie faucibus nibh felis tempor vel aliquet cursus placerat duis. Est felis pulvinar tortor ut nibh montes ante gravida velit. Facilisi posuere in sed mattis blandit duis aliquet.", name: "Jim Adams", role: "Designer", img: "66cd64ef67641295ddd2ffc9_Testimonial%20Author%20Image-2.avif" },
];
export const LOGOS = ["66c6fb8bca715a603abbc84f_Clients%20Logo.svg", "66c6fb8b87b34b4188395ff2_Clients%20Logo-4.svg", "66c6fb8beb3991b3db5cd5ff_Clients%20Logo-6.svg", "66c6fb8bb6896643f3baa632_Clients%20Logo-2.svg", "66c6fb8bf82fe9cef5f78d2a_Clients%20Logo-3.svg", "66c6fb8bf99901dda5c25e7e_Clients%20Logo-5.svg"];

export const priceText = (p) => (p === 0 ? "Free" : `$${p}`);

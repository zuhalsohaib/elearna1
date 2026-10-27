import { A, C } from "./data";

// 9 posts. Blog One shows 6 on page 1 and 3 on page 2. Blog Two shows all of them.
// Posts 1-3 use the website images; posts 4-9 use the pictures in /public (blog-*.jpg) - replace them with your own if you like.
export const BLOG = [
  { id: 1, cat: "Career", title: "Improve knowledge retention with visual learning", date: "October 4, 2024", short: "4.10.2024", author: "Nina Leffler", img: A + "66c86806b094d5e2529855a0_Woman%20Using%20Laptop.webp" },
  { id: 2, cat: "Development", title: "Master online learning with proven strategies", date: "October 4, 2024", short: "4.10.2024", author: "Samantha Dicki", img: C + "66eb9ece25b132baef1462d5_Course%20Small%20Image-3.webp" },
  { id: 3, cat: "Teaching", title: "How to enhance your learning experience today", date: "October 3, 2024", short: "3.10.2024", author: "Edwin Waters", img: C + "66ebac3db9565bc62a90430e_Course%20Portrait%20Image-5.webp" },
  { id: 4, cat: "Career", title: "The evolution of teaching tools in the 21st century", date: "September 17, 2024", short: "17.9.2024", author: "Edward Braun", img: "/blog-evolution.jpg" },
  { id: 5, cat: "Development", title: "The role of parental involvement in academic achievement", date: "September 16, 2024", short: "16.9.2024", author: "Jesse Johnson", img: "/blog-parental.jpg" },
  { id: 6, cat: "Teaching", title: "The role of technology in modern classrooms", date: "September 14, 2024", short: "14.9.2024", author: "Samantha Dicki", img: "/blog-technology.jpg" },
  { id: 7, cat: "Development", title: "How globalization is shaping curriculum development", date: "September 13, 2024", short: "13.9.2024", author: "Edwin Waters", img: "/blog-globalization.jpg" },
  { id: 8, cat: "Teaching", title: "How personalized learning is changing education", date: "September 12, 2024", short: "12.9.2024", author: "Gerald Nienow", img: "/blog-personalized.jpg" },
  { id: 9, cat: "Career", title: "Empowering teachers with continuous professional development", date: "September 11, 2024", short: "11.9.2024", author: "Nina Leffler", img: "/blog-empowering.jpg" },
];
export const byId = (id) => BLOG.find((p) => p.id === id);

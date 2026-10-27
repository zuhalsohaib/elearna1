import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import CartDrawer from "./components/CartDrawer";
import HomeOne from "./pages/HomeOne";
import HomeTwo from "./pages/HomeTwo";
import AboutOne from "./pages/AboutOne";
import AboutTwo from "./pages/AboutTwo";
import BlogOne from "./pages/BlogOne";
import BlogTwo from "./pages/BlogTwo";
import ContactOne from "./pages/ContactOne";
import ContactTwo from "./pages/ContactTwo";

// Page addresses (the same addresses are used by the menu in data/data.js)
const ROUTES = [
  ["/", HomeOne], ["/home-one", HomeOne], ["/home-two", HomeTwo],
  ["/about-one", AboutOne], ["/about-two", AboutTwo],
  ["/blog-one", BlogOne], ["/blog-two", BlogTwo],
  ["/contact-one", ContactOne], ["/contact-two", ContactTwo],
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "instant" }); }, [pathname]);
  return null;
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);
  const add = (c) => {
    setCart((p) => (p.some((x) => x.id === c.id) ? p : [...p, c]));
    setOpen(true);
  };
  const remove = (id) => setCart((p) => p.filter((x) => x.id !== id));
  const page = { count: cart.length, openCart: () => setOpen(true), add };
  return (
    <>
      <ScrollToTop />
      <CartDrawer cart={cart} open={open} close={() => setOpen(false)} remove={remove} />
      <Routes>
        {ROUTES.map(([path, Page]) => <Route key={path} path={path} element={<Page {...page} />} />)}
        <Route path="*" element={<HomeOne {...page} />} />
      </Routes>
    </>
  );
}

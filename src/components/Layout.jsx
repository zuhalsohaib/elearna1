import Navbar from "./Navbar";
import Footer from "./Footer";

// Every page = navbar + content + footer. footer: "one" (Home One style) or "two" (Home Two style).
export default function Layout({ count, openCart, boxed = false, footer = "two", children }) {
  return (
    <>
      <Navbar count={count} openCart={openCart} boxed={boxed} />
      {children}
      <Footer variant={footer} />
    </>
  );
}

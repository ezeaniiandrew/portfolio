import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { ScrollRestoration } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Layout() {
  const location = useLocation();
  // Hide footer on contact page
  const hideFooter = location.pathname === "/contact";

  return (
    <main className="grid grid-cols-12 gap-y-20">
      <AnimatePresence mode="wait">
        <NavBar />
        <Outlet />
        {!hideFooter && <Footer />}
      </AnimatePresence>
      <ScrollRestoration />
    </main>
  );
}

export default Layout;

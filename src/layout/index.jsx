import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { ScrollRestoration } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  // Hide footer on contact page
  const hideFooter = location.pathname === "/contact";

  return (
    <main className="grid grid-cols-12 gap-y-20">
      <>
        <NavBar />
        <Outlet />
        {!hideFooter && <Footer />}
      </>
      <ScrollRestoration />
    </main>
  );
}

export default Layout;

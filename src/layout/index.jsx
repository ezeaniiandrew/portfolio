import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout() {
  return (
    <main className="grid grid-cols-12 gap-y-20">
      <>
        <NavBar />
        <Outlet />
        <Footer />
      </>
    </main>
  );
}

export default Layout;

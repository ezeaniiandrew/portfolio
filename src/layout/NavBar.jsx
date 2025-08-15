import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { socialLinks } from "../data";
import { useScroll, useTransform } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 0.1], ["100%", "90%"]);
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["0px", "9999px"]
  );
  const marginInline = useTransform(scrollYProgress, [0, 0.1], ["0", "auto"]);

  return (
    <div className="fixed text-white md:mt-2 md:grid md:grid-cols-12 w-full h-screen md:h-auto z-50">
      <div className="fixed top-2 w-[100vw] z-20 grid grid-cols-12 md:rounded-none md:hidden">
        <motion.div
          style={{
            width,
            marginInline,
            borderRadius,
            top,
          }}
          className="flex backdrop-blur-md justify-between items-center col-start-1 -col-end-1 py-6 px-5"
        >
          <NavLink to="/" className="text-4xl md:text-2xl md:hidden">
            AIE
          </NavLink>
          <div onClick={toggleMenu} className="md:hidden text-4xl">
            {!isOpen ? <GiHamburgerMenu /> : <AiOutlineClose />}
          </div>
        </motion.div>
      </div>

      <div
        className={`flex flex-col gap-20 items-start pt-10 px-10 md:pt-0 md:flex-row md:items-center md:justify-between md:h-20 md:col-start-2 md:col-end-12 h-full bg-nav-bg-black md:p-5 md:rounded-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 md:transition-none md:translate-x-0`}
      >
        <NavLink to="/" className="text-4xl md:text-2xl hidden md:block">
          AIE
        </NavLink>
        <nav className="mt-28 md:mt-0">
          <ul className="flex flex-col items-start md:flex-row md:items-center md:justify-center gap-6 md:gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="text-4xl md:text-base"
                onClick={() => setIsOpen(false)}
              >
                <NavLink to={link.path}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="flex items-center justify-center gap-5 md:gap-4 lg:gap-5">
          {socialLinks.developer.map((profile) => (
            <li key={profile.link} className="text-4xl md:text-base">
              <a
                href={`https://${profile.link}`}
                target="_blank"
                rel="noreferrer"
              >
                <profile.icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

import { FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { useEffect } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  { link: "www.linkedin.com/in/ezeani-andrew", icon: FaLinkedin },
  { link: "github.com/ezeaniiandrew", icon: VscGithub },
  { link: "linktr.ee/ezeaniiandrew", icon: SiLinktree },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed md:mt-2 md:grid md:grid-cols-12 w-full h-screen md:h-auto">
      <div className="fixed top-0 w-[100vw] z-20 grid grid-cols-12 md:rounded-none md:hidden">
        <motion.div
          initial={{ backgroundColor: "transparent", width: "100%" }}
          animate={{
            backgroundColor: isScrolled && !isOpen ? "black" : "transparent",
            width: isScrolled || isOpen ? "90%" : "100%",
            marginInline: isScrolled && "auto",
          }}
          transition={{ duration: 0.3 }}
          className="flex justify-between items-center col-start-1 -col-end-1 py-6 px-5 rounded-full "
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
        className={`flex flex-col gap-20 items-start pt-10 px-10 md:pt-0 md:flex-row md:items-center md:justify-between md:mx-auto md:h-20 md:col-start-2 md:col-end-12 md:w-full h-full bg-nav-bg-black md:p-5 md:rounded-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 md:transition-none md:translate-x-0`}
      >
        <NavLink to="/" className="text-4xl md:text-2xl hidden md:block">
          AIE
        </NavLink>
        <nav className="mt-28 md:mt-0">
          <ul className="flex flex-col items-start md:flex-row md:items-center md:justify-center gap-6 md:gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <li key={link.name} className="text-4xl md:text-base">
                <NavLink to={link.path}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <ul className="flex items-center justify-center gap-5 md:gap-4 lg:gap-5">
            {socialLinks.map((profile) => (
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
    </div>
  );
};

export default NavBar;

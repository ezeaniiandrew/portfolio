import { FaBehance, FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiTestinglibrary,
  SiTailwindcss,
  SiFramer,
  SiVitest,
} from "react-icons/si";

export const socialLinks = {
  developer: [
    { link: "github.com/ezeaniiandrew", icon: VscGithub },
    { link: "linktr.ee/ezeaniiandrew", icon: SiLinktree },
  ],
  designer: [
    { link: "https://www.behance.net/arif07", icon: FaBehance },
    { link: "www.linkedin.com/in/ezeani-andrew", icon: FaLinkedin },
  ],
};

export const skillSets = [
  { icon: FaHtml5, color: "#E34F26", name: "HTML5" },
  { icon: FaCss3Alt, color: "#1572B6", name: "CSS3" },
  { icon: FaSass, color: "#CC6699", name: "Sass" },
  { icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
  { icon: FaReact, color: "#61DAFB", name: "React" },
  { icon: SiVitest, color: "#6E9F18", name: "Vitest" },
  { icon: SiNextdotjs, color: "#FFFFFF", name: "Next.js" },
  { icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
  { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { icon: SiTestinglibrary, color: "#E33332", name: "React Testing Library" },
  { icon: SiFramer, color: "#0055FF", name: "Framer Motion" },
  { icon: SiTailwindcss, color: "#38B2AC", name: "Tailwind CSS" },
];

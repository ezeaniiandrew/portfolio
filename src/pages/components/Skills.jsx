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

const skillSets = [
  { icon: <FaHtml5 color="#E34F26" />, name: "HTML5" },
  { icon: <FaCss3Alt color="#1572B6" />, name: "CSS3" },
  { icon: <FaSass color="#CC6699" />, name: "Sass" },
  { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },
  { icon: <FaReact color="#61DAFB" />, name: "React" },
  { icon: <SiVitest color="#6E9F18" />, name: "Vitest" },
  { icon: <SiNextdotjs color="#FFFFFF" />, name: "Next.js" },
  { icon: <SiFirebase color="#FFCA28" />, name: "Firebase" },
  { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
  { icon: <SiTestinglibrary color="#E33332" />, name: "React Testing Library" },
  { icon: <SiFramer color="#0055FF" />, name: "Framer Motion" },
  { icon: <SiTailwindcss color="#38B2AC" />, name: "Tailwind CSS" },
];

function Skills() {
  return (
    <section className="col-start-1 md:col-start-2 -col-end-1 md:col-end-12 dark:text-brand-tertiary-light flex flex-col gap-10 items-center justify-center">
      <h2 className="text-3xl md:text-[3.375rem] font-semibold mb-4 capitalize text-brand-secondary">
        My skills
      </h2>
      <div className="flex flex-col md:flex-row w-full md:w-auto px-5 md:px-0 md:flex-wrap gap-4 md:justify-center">
        {skillSets.map((skill, index) => (
          <div
            key={index}
            className="flex items-center p-4 rounded-lg border border-tertiary-light"
          >
            <div className="mr-2">{skill.icon}</div>
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

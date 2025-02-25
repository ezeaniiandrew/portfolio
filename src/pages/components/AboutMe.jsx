import star from "../../assets/star.svg";
import aboutMeImg from "../../assets/about-me-img.png";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

function AboutMe() {
  return (
    <section
      id="about-me"
      className="col-start-1 md:col-start-2 -col-end-1 md:col-end-12 grid grid-cols-12 dark:text-brand-tertiary-light justify-center"
    >
      <blockquote className="text-sm md:text-lg col-start-1 -col-end-1 md:col-start-3 md:col-end-11">
        &quot;Building on the web isn&apos;t just about writing code; it&apos;s
        about creating digital experiences that are beautiful, functional, and
        accessible to everyone.&quot;
      </blockquote>
      <div className="col-span-12 flex flex-col md:flex-row gap-10 mt-5 px-5 md:px-0 justify-around">
        <div>
          <img src={star} alt="" />
          <div className="-mt-20">
            <img src={aboutMeImg} alt="" width={570} height={680} />
          </div>
        </div>
        <div className="text-left md:mt-20 flex flex-col gap-5 md:gap-0 justify-between md:w-[40%]">
          <h2 className="uppercase text-3xl font-semibold">about me</h2>
          <RiCheckboxBlankCircleFill width={8} height={8} color="#707070" />
          <p>I am Andrew Ezeani.</p>
          <RiCheckboxBlankCircleFill width={8} height={8} color="#707070" />
          <p>
            A creative frontend developer focusing on React.js. Proficiency in
            HTML, CSS, JavaScript, and front-end frameworks.
          </p>
          <RiCheckboxBlankCircleFill width={8} height={8} color="#707070" />
          <p>I have been working with web technologies for 3 plus years.</p>
          <RiCheckboxBlankCircleFill width={8} height={8} color="#707070" />
          <p>
            During this period, I gained hands-on experience with developing the
            frontend for web applications, testing, accessibility and source
            control.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

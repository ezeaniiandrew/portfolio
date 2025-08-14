import star from "../../assets/star.svg";
import aboutMeImage from "../../assets/dp.jpg";
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
            <img
              src={aboutMeImage}
              alt="Portrait of Andrew Ezeani"
              className="max-w-[280px] md:max-w-[350px] rounded-xl shadow-lg transition-transform duration-500 ease-out hover:scale-105 hover:rotate-1 hover:shadow-[0_12px_40px_rgba(254,178,115,0.4)]"
              width="350"
              height="467"
              loading="lazy"
            />
            {/* <img src={aboutMeImg} alt="" width={570} height={680} /> */}
          </div>
        </div>
        <div className="text-left md:mt-20 flex flex-col gap-5 md:gap-0 justify-between md:w-[40%]">
          <h2 className="uppercase text-3xl font-semibold">about me</h2>
          <RiCheckboxBlankCircleFill width={8} height={8} color="#707070" />
          <p>I am Andrew Ezeani.</p>
          <RiCheckboxBlankCircleFill width={8} height={8} color="#707070" />
          <p>
            A frontend engineer with 3+ years of experience building responsive,
            user-focused web interfaces.
          </p>
          <RiCheckboxBlankCircleFill width={8} height={8} color="#707070" />
          <p>
            I help businesses bring their ideas to life through fast,
            accessible, and maintainable front-end development. Whether
            you&apos;re starting from scratch or refining an existing product, I
            turn complex problems into smooth, scalable solutions. I work best
            with teams that value thoughtful design, clear communication, and
            dependable execution.
          </p>
          <RiCheckboxBlankCircleFill width={8} height={8} color="#707070" />
          <p>
            If you&apos;re looking for a frontend engineer who&apos;s as
            invested in your product&apos;s success as you are, I&apos;m your
            guy — let&apos;s build something great together.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

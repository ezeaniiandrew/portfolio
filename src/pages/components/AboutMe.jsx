import star from "../../assets/star.svg";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { Button } from "../../components";

function AboutMe() {
  return (
    <section
      id="about-me"
      className="col-start-1 md:col-start-2 -col-end-1 md:col-end-12 grid grid-cols-12 dark:text-brand-tertiary-light justify-center"
    >
      <div className="col-span-12 grid grid-cols-2 gap-y-12 px-5">
        <div className="col-span-2 md:col-start-1 md:col-end-2 grid place-content-center">
          <img src={star} alt="" />
          <div className="-mt-20">
            <img
              src="https://res.cloudinary.com/ezmedia/image/upload/f_auto,q_auto,w_auto/dp_tas23x.jpg"
              alt="Portrait of Andrew Ezeani"
              className="max-w-[280px] md:max-w-[400px] rounded-xl shadow-lg transition-transform duration-500 ease-out hover:scale-105 hover:rotate-1 hover:shadow-[0_12px_40px_rgba(254,178,115,0.4)]"
              loading="eager"
            />
          </div>
        </div>
        <div className="col-span-2 md:col-start-2 md:-col-end-1 text-left flex flex-col gap-5 justify-between">
          <h2 className="uppercase text-3xl font-semibold">about me</h2>
          <RiCheckboxBlankCircleFill width={8} height={8} color="#707070" />
          <p>Hi, I am Andrew Ezeani.</p>
          <RiCheckboxBlankCircleFill width={8} height={8} color="#707070" />
          <p>
            A frontend engineer with 3+ years of experience building responsive,
            user-focused web applications.
          </p>
          <RiCheckboxBlankCircleFill width={8} height={8} color="#707070" />
          <p>
            I help businesses bring their ideas to life through fast,
            SEO-optimized, and maintainable web applications. Whether
            you&apos;re starting from scratch or refining an existing product, I
            can help you transform your idea into a digital experience that
            engages users, drives growth, and delivers results.
          </p>
          <RiCheckboxBlankCircleFill width={8} height={8} color="#707070" />
          <p>
            Beyond client projects, I&apos;ve also contributed to open-source. I
            work well both independently and as part of a team, and I thrive in
            environments that value thoughtful design, clear communication, and
            dependable execution. If you&apos;re looking for a frontend engineer
            who&apos;s as invested in your product&apos;s success as you are,
            I&apos;m your guy — let&apos;s build something great together.
          </p>
        </div>
        <Button
          text="Get in touch"
          className="capitalize h-16 text-base md:justify-self-center col-span-2 max-sm:w-full"
          as={"link"}
          href="mailto:ezeaniiandrew@example.com"
        />
      </div>
    </section>
  );
}

export default AboutMe;

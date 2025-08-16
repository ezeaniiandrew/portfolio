import { Button } from "../components";
import { socialLinks } from "../data";

function Footer() {
  return (
    <footer className="col-start-1 md:col-start-2 -col-end-1 md:col-end-12 dark:text-paragraph-tertiary pb-20 text-left">
      <section className="flex max-sm:gap-11 flex-col md:flex-row md:items-center justify-between pt-[58px] pb-[72px] px-5 md:px-[50px] border-paragraph-tertiary-2 border">
        <h3 className="font-bold max-w-[fit-content] text-2xl md:text-[2.625rem] md:leading-[48px] flex flex-col">
          Got a project in mind? <span>Let’s talk</span>
        </h3>
        <Button
          text="Get in touch"
          className="capitalize h-16 text-base max-sm:w-full"
          as={"link"}
          href="mailto:ezeaniiandrew@example.com"
        />
      </section>
      <section className="max-sm:px-5 mt-20 flex flex-col md:flex-row max-sm:gap-4 md:items-center justify-between">
        <p>
          Designed by{" "}
          <a
            href="https://www.behance.net/arif07"
            className="text-brand-secondary"
          >
            Khandaker Ariful Haque
          </a>
        </p>
        <ul className="flex md:items-center md:justify-center gap-5 md:gap-4 lg:gap-5">
          {socialLinks.designer.map((profile) => (
            <li key={profile.link} className="text-xl">
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
      </section>
    </footer>
  );
}

export default Footer;

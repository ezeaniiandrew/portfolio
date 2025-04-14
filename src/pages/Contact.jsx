import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { Button } from "../components";
import { FaX } from "react-icons/fa6";

function Contact() {
  return (
    <section className="col-start-1 md:col-start-2 -col-end-1 md:col-end-12 dark:text-brand-tertiary-light flex flex-col gap-10 items-center justify-center">
      <div
        id="hero"
        className="w-full h-[100dvh] grid place-content-center pb-32 pt-32 relative overflow-hidden"
      >
        <div className="relative z-10">
          <h2 className="text-6xl md:text-7xl font-bold dark:text-white capitalize leading-loose">
            Contact me.
          </h2>
          <p className="text-lg md:text-xl font-semibold mt-4 mx-auto max-w-2xl">
            Have a project in mind? Let&apos;s work together to bring your ideas
            to life.
          </p>
        </div>
      </div>
      <div className="text-left px-[30px] py-[40px] w-[min(1110px,_100%)] border-2 border-paragraph-tertiary-2 bg-contact-bg grid grid-cols-[repeat(2,min(310px,100%)_min(680px,100%))] gap-3">
        <div className="w-[min(28ch,100%)]">
          <h2 className="font-semibold text-2xl text-paragraph-tertiary">
            Get in Touch
          </h2>
          <p className="text-sm mt-1">
            Feel free to reach out to me for collaborations, inquiries, or just
            to say hi. I look forward to connecting with you!
          </p>
          <div className="mt-4 flex gap-3">
            {[
              {
                handle: "Ezeani Andrew",
                icon: FaLinkedin,
                link: "https://www.linkedin.com/in/ezeani-andrew",
              },
              {
                handle: "ezeaniiandrew",
                icon: FaX,
                link: "https://x.com/ezeaniiandrew?t=u_jEKLbCfhvo_RxHlcVluA&s=09",
              },
              {
                icon: FaDiscord,
                link: "https://discordapp.com/users/951795273502441514",
              },
            ].map((social) => (
              <a
                className="flex gap-2 items-center"
                key={social.link}
                target="_blank"
                rel="noopener noreferrer"
                href={social.link}
              >
                <span className="w-[50px] h-[50px]  border rounded-[10px] border-paragraph-tertiary p-[15px] grid place-content-center">
                  <social.icon size={25} />
                </span>
                {/* <p>{social.handle}</p> */}
              </a>
            ))}
          </div>
        </div>
        <form className="grid grid-cols-2 gap-y-6 gap-x-4">
          <div className="col-start-1 col-end-2 border border-paragraph-tertiary-2 rounded-[10px]">
            <label className="sr-only" htmlFor="name">
              Type your name
            </label>
            <input
              className="w-full py-4 px-2 bg-transparent"
              type="text"
              id="name"
              name="name"
              placeholder="Type your name"
              required
            />
          </div>
          <div className="col-start-2 col-end-3 border border-paragraph-tertiary-2 rounded-[10px]">
            <label className="sr-only" htmlFor="email">
              Type your email
            </label>
            <input
              className="w-full py-4 px-2 bg-transparent"
              type="email"
              name="email"
              id="email"
              placeholder="Type your email"
              required
            />
          </div>
          <div className="col-start-1 -col-end-1 border border-paragraph-tertiary-2 rounded-[10px]">
            <label className="sr-only" htmlFor="subject">
              What&apos;s the subject of your message
            </label>
            <input
              className="w-full py-4 px-2 bg-transparent"
              type="text"
              id="subject"
              name="subject"
              placeholder="What's the subject of your message?"
              required
            />
          </div>
          <div className="col-start-1 -col-end-1 border border-paragraph-tertiary-2 rounded-[10px]">
            <label className="sr-only" htmlFor="message">
              Type your message
            </label>
            <textarea
              className="w-full pt-4 px-2 bg-transparent h-[199px]"
              name="message"
              id="message"
              placeholder="Type your message"
              required
            ></textarea>
          </div>
          <Button text={"send"} className="capitalize w-[200px]" />
        </form>
      </div>
    </section>
  );
}

export default Contact;

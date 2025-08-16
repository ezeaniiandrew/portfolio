import { Button } from "../../components";

function Hero({ headline, subText, highlightedText, showCta }) {
  return (
    <section
      className={`${
        showCta && "pt-12"
      } px-5 gap-6 bg-hero-image grid place-content-center text-brand-tertiary-light col-start-1 -col-end-1 bg-[#111111] h-screen bg-cover bg-no-repeat md:bg-center`}
    >
      <h1 className="text-5xl text-center text-balance md:text-7xl font-bold text-white capitalize leading-tight">
        {headline} {""}
        {highlightedText && (
          <span className="text-brand-secondary">{highlightedText}</span>
        )}
      </h1>
      {subText && (
        <p className="text-2xl md:text-3xl text-center font-light max-w-3xl mx-auto text-balance">
          {subText}
        </p>
      )}
      {showCta && (
        <Button
          text="Get in touch"
          className="capitalize mt-8 h-16 text-base md:max-w-80 md:mx-auto"
          as={"link"}
          href="mailto:ezeaniiandrew@example.com"
        />
      )}
    </section>
  );
}

export default Hero;

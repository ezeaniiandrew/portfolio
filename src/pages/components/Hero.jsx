function Hero({ headline, subText, highlightedText }) {
  return (
    <section className="px-5 bg-hero-image grid place-content-center text-brand-tertiary-light col-start-1 -col-end-1 bg-[#111111] h-screen bg-cover bg-no-repeat md:bg-center">
      <h1 className="text-5xl text-center text-balance md:text-7xl font-bold text-white capitalize leading-tight">
        {headline} {""}
        {highlightedText && (
          <span className="text-brand-secondary">{highlightedText}</span>
        )}
      </h1>
      {subText && (
        <p className="mt-6 text-2xl md:text-3xl text-center font-light max-w-3xl mx-auto text-balance">
          {subText}
        </p>
      )}
    </section>
  );
}

export default Hero;

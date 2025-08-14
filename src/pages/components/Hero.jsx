import { FaAsterisk } from "react-icons/fa";

function Hero() {
  return (
    <section className="px-5 bg-not-found-bg grid place-content-center dark:text-brand-tertiary-light col-start-1 -col-end-1 bg-[#111111] h-screen bg-cover bg-no-repeat bg-[top_10rem_left_-45rem] md:bg-center">
      {/* <section className="md:text-left text-6xl md:text-9xl font-bold dark:text-white capitalize row-start-3 row-end-7 md:row-start-4 md:row-end-11 col-start-1 md:col-start-2 md:px-0 -col-end-1 md:col-end-8 mt-4 md:mt-0"> */}
      <h1 className="md:text-left grid place-content-center gap-4 text-6xl md:text-9xl font-bold dark:text-white uppercase">
        Frontend <span>developer</span>
      </h1>
      {/* </section> */}
      {/* <div className="row-start-11 row-end-13 col-start-3 col-end-10 md:col-start-9 md:col-end-12">
        <div className="flex items-center justify-center capitalize gap-2 font-semibold md:text-xl dark:text-white mb-1">
          <p>open to work</p>
          <FaAsterisk />
        </div>
        <p>Remote | Hybrid</p>
      </div> */}
    </section>
  );
}

export default Hero;

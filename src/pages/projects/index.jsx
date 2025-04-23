import { Link } from "react-router-dom";

function Projects() {
  return (
    <section className="col-start-1 md:col-start-2 -col-end-1 md:col-end-12 dark:text-brand-tertiary-light flex flex-col gap-10 items-center justify-center">
      <div
        id="hero"
        className="w-full h-[100dvh] grid place-content-center pb-32 pt-32 relative overflow-hidden"
      >
        <div className="relative z-10">
          <h2 className="text-6xl md:text-7xl font-bold dark:text-white capitalize leading-tight md:leading-snug lg:leading-loose">
            my work, my pride.
          </h2>
          <p className="text-lg md:text-xl font-semibold mt-4 mx-auto max-w-2xl">
            Explore a collection of projects where I turn ideas into functional
            and impactful web experiences.
          </p>
        </div>
      </div>
      <div className="w-full mt-7 bg-brand-secondary rotate-1 py-5 px-3 text-7xl text-nowrap overflow-x-hidden">
        <p className="text-paragraph-black uppercase">
          WEB DEVELOPMENT . Frontend Engineer . Testing . Accessibility . Web
          Design
        </p>
      </div>
      <div className="w-full">
        <h2 className="mt-20 text-3xl md:text-[3.375rem] py-5 font-semibold mb-4 capitalize text-brand-secondary">
          my Projects
        </h2>
        <div>
          <div className="w-full grid-cols-[repeat(auto-fit,_minmax(min(300px,_100%),_1fr))] grid gap-8 px-5">
            {Array.from({ length: 6 }, (_, i) => (
              <article key={i}>
                <div className="h-[376px] bg-gray-500 rounded-xl"></div>
                <div className="flex justify-between items-center text-paragraph-tertiary mt-2">
                  <h3 className="text-xl leading-8 capitalize">project one</h3>
                  <Link
                    to={`/projects/${i + 1}`}
                    type="button"
                    className="uppercase text-xs leading-3 p-[10px] border rounded-[100px] border-paragraph-tertiary"
                  >
                    view details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

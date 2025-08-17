import { Link } from "react-router-dom";
import { projects } from "../../data";
import { motion } from "framer-motion";

function ExploreProjects() {
  return (
    <section className="col-start-1 md:col-start-2 -col-end-1 md:col-end-12 dark:text-brand-tertiary-light flex flex-col gap-10 items-center justify-center">
      <div className="mb-4">
        <h2 className="text-3xl md:text-[3.375rem] mb-2 font-semibold capitalize text-brand-secondary">
          Stuffs I have built
        </h2>
        <p className="text-center tracking-[0.4em]">With the things I know</p>
      </div>
      <div className="w-full grid-cols-[repeat(auto-fit,_minmax(min(300px,_100%),_1fr))] grid gap-8 px-5">
        {projects.map((project) => (
          <article
            key={project.name}
            className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(254,178,115,0.4)]"
          >
            <Link
              to={`/projects/${project.name.toLowerCase()}`}
              className="block group"
            >
              <motion.div
                layoutId={`image-${project.name}`}
                className="overflow-hidden bg-brand-tertiary-light"
              >
                <img
                  src={project.coverImageTop}
                  alt={project.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>

              <div className="p-4 flex justify-between items-center">
                <motion.h3
                  layoutId={`title-${project.name}`}
                  className="text-lg font-semibold capitalize text-paragraph-black group-hover:text-brand-secondary transition-colors duration-300"
                >
                  {project.name}
                </motion.h3>
                <span className="text-xs px-4 py-1 bg-paragraph-black text-heading-1 border border-brand-secondary rounded-full capitalize transition-all duration-300 group-hover:bg-brand-secondary group-hover:text-white">
                  view details
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExploreProjects;

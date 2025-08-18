import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { getSkillsByNames, projects } from "../data";
import { CodeBlock, dracula } from "react-code-blocks";
import Badge from "../components/Badge";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export function ProjectDetail() {
  const { projectName } = useParams();
  const { state } = useLocation();
  const direction = state?.direction || "next";

  const selectedProject = projects.find(
    (project) => project.name.toLowerCase() === projectName
  );
  const projectId = projects.indexOf(selectedProject);
  const nextProjectIndex = projectId >= projects.length - 1 ? 0 : projectId + 1;
  const PreviousProjectIndex =
    projectId - 1 < 0 ? projects.length - 1 : projectId - 1;

  return (
    <PageTransition className="col-start-1 md:col-start-2 -col-end-1 md:col-end-12 dark:text-brand-tertiary-light">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedProject.name}
          initial={{ opacity: 0, x: direction === "next" ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction === "next" ? -50 : 50 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full pb-6 pt-32 grid grid-cols-12 gap-y-16 gap-x-8"
        >
          <h1 className="text-[54px] font-semibold leading-snug text-heading-1 max-w-[737px] mx-auto row-start-1 col-start-2 col-end-12">
            {selectedProject.name}
          </h1>
          <div className="row-start-2 col-span-12">
            <img
              src={selectedProject?.coverImageTop}
              alt={`Screenshot of ${selectedProject.name} homepage hero section`}
              height={778}
            />
          </div>
          <div className="px-5 md:px-0 md:row-start-3 col-start-1 -col-end-1 md:col-end-9 text-left">
            <h2 className="font-semibold text-[32px] leading-loose text-paragraph-tertiary">
              Overview
            </h2>
            <p>{selectedProject?.overview}</p>

            <h2 className="mt-8 font-semibold text-[32px] leading-loose text-paragraph-tertiary">
              Tech Stack
            </h2>
            <ul className="flex flex-wrap gap-2">
              <Badge badges={getSkillsByNames(selectedProject?.techStack)} />
            </ul>
          </div>
          <aside className="text-left md:row-start-3 col-start-1 -col-end-1 grid gap-y-4 md:col-start-10 md:col-end-13 bg-brand-secondary rounded-[10px] p-5 text-paragraph-black grid-cols-6 md:grid-cols-1 md:gap-y-6 gap-x-2">
            <div className="col-start-1 col-end-3 md:col-span-full">
              <h3 className="text-xl font-medium capitalize">
                {selectedProject?.designer}
              </h3>
              <p>Designer</p>
            </div>
            <div className="col-start-3 col-end-5 md:col-span-full">
              <h3 className="text-xl font-medium capitalize">
                {selectedProject?.duration}
              </h3>
              <p>Duration</p>
            </div>
            <div className="col-start-5 col-end-7 md:col-span-full">
              <h3 className="text-xl font-medium capitalize">
                {selectedProject?.year}
              </h3>
              <p>Year</p>
            </div>
            <Link
              to={selectedProject?.liveLink}
              target="_blank"
              className="col-span-3 md:col-span-full p-2 capitalize border border-black font-medium outline-1 rounded-lg flex items-center justify-center gap-2"
              aria-label={`Visit the ${selectedProject?.name} website (opens in a new tab)`}
            >
              <span>live site</span>
              <span>
                <MdArrowOutward />
              </span>
            </Link>
            <Link
              to={selectedProject?.githubRepo}
              target="_blank"
              className="col-span-3 -col-end-1 md:col-span-full p-2 capitalize border border-black font-medium outline-1 rounded-lg flex items-center justify-center gap-2 "
              aria-label={`Visit the ${selectedProject?.name} project Github repository (opens in a new tab)`}
            >
              <span>Github</span>
              <span>
                <MdArrowOutward />
              </span>
            </Link>
          </aside>
          <div className="col-span-12">
            <span className="sr-only">
              Video preview of the {selectedProject.name} project
            </span>
            <video
              src={selectedProject?.preview}
              className="w-full"
              controls
              aria-label={`Video preview of the ${selectedProject.name} project`}
            >
              <p>
                Your browser does not support video playback. Here’s a{" "}
                <a href={selectedProject?.preview}>link to the video</a>.
              </p>
            </video>
          </div>
          <div className="px-5 md:px-0 col-span-12 text-left">
            <h2 className="font-semibold text-[32px] leading-loose text-paragraph-tertiary">
              Challenge
            </h2>
            <p className="mb-4">{selectedProject?.challenges?.intro}</p>
            <ul className="list-disc list-inside">
              {selectedProject?.challenges?.list?.map((item, index) => (
                <li key={index} className="flex flex-col gap-2 mb-4">
                  <p className="font-bold">&#9679; {item?.title}</p>
                  <p>{item?.description}</p>
                  {item?.code && (
                    <CodeBlock
                      text={item?.code}
                      language="css"
                      showLineNumbers={true}
                      theme={dracula}
                      startingLineNumber={1}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-5 md:px-0 col-span-12 text-left">
            <h2 className="font-semibold text-[32px] leading-loose text-paragraph-tertiary">
              Results
            </h2>
            <p className="mb-4">{selectedProject?.result}</p>
          </div>
          <div className="col-span-12 grid grid-cols-12 gap-4">
            <div className="col-start-1 col-end-7">
              <img
                src={selectedProject?.mobileImages[0] || ""}
                alt={`Mobile view Screenshot of ${selectedProject.name} homepage hero section.`}
                height={560}
              />
            </div>
            <div className="col-start-7 col-end-13">
              <img
                src={selectedProject?.mobileImages[1] || ""}
                alt={`Mobile view screenshot of a page from the ${selectedProject.name} project.`}
                height={560}
              />
            </div>
            <div className="col-span-12">
              <img
                src={selectedProject?.coverImageBottom || ""}
                alt={`Screenshot of a page from the ${selectedProject.name} project.`}
              />
            </div>
          </div>
        </motion.div>

        <div className="px-5 md:px-0 flex justify-between items-center mt-10">
          <Link
            to={`/projects/${projects[
              PreviousProjectIndex
            ].name.toLowerCase()}`}
            state={{ direction: "prev" }}
            className={`outline p-3 outline-1 rounded-lg flex items-center justify-center gap-2 ${
              parseFloat(projectId) <= 1
                ? "text-paragraph-tertiary outline-paragraph-tertiary"
                : ""
            }`}
          >
            <span>
              <FaArrowLeft className="inline-block" />
            </span>
            <span>Previous</span>
          </Link>
          <Link
            to={`/projects/${projects[nextProjectIndex].name.toLowerCase()}`}
            state={{ direction: "next" }}
            className="outline p-3 outline-1 rounded-lg w-24 flex items-center justify-center gap-2"
          >
            <span>Next</span>
            <span>
              <FaArrowRight className="inline-block" />
            </span>
          </Link>
        </div>
      </AnimatePresence>
    </PageTransition>
  );
}

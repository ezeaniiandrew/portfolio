import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { getSkillsByNames, projects } from "../../data";
import { CodeBlock, dracula } from "react-code-blocks";
import Badge from "../../components/Badge";

function ProjectDetail() {
  const { projectName } = useParams();
  const selectedProject = projects.find(
    (project) => project.name.toLowerCase() === projectName
  );
  const projectId = projects.indexOf(selectedProject);
  const nextProjectIndex = projectId >= projects.length - 1 ? 0 : projectId + 1;
  const PreviousProjectIndex =
    projectId - 1 < 0 ? projects.length - 1 : projectId - 1;

  return (
    <section className="col-start-1 md:col-start-2 -col-end-1 md:col-end-12 dark:text-brand-tertiary-light">
      <div className="w-full pb-6 pt-32 grid grid-cols-12 gap-y-16 gap-x-8">
        <h1 className="text-[54px] font-semibold leading-snug text-heading-1 max-w-[737px] mx-auto row-start-1 col-start-2 col-end-12">
          {selectedProject.name}
        </h1>
        <div className="row-start-2 col-span-12">
          <img src={selectedProject?.coverImageTop} alt="" height={778} />
        </div>
        <div className="px-5 md:px-0 md:row-start-3 col-start-1 -col-end-1 md:col-end-9 text-left">
          <h2 className="font-semibold text-[32px] leading-loose text-paragraph-tertiary">
            Overview
          </h2>
          <p>{selectedProject?.overview}</p>

          <h2 className="mt-8 font-semibold text-[32px] leading-loose text-paragraph-tertiary">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            <Badge badges={getSkillsByNames(selectedProject?.techStack)} />
          </div>
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
            className="col-span-3 md:col-span-full outline p-2 capitalize font-medium outline-1 rounded-lg flex items-center justify-center gap-2 "
          >
            <span>live site</span>
            <span>
              <MdArrowOutward />
            </span>
          </Link>
          <Link
            to={selectedProject?.githubRepo}
            target="_blank"
            className="col-span-3 -col-end-1 md:col-span-full outline p-2 capitalize font-medium outline-1 rounded-lg flex items-center justify-center gap-2 "
          >
            <span>Github</span>
            <span>
              <MdArrowOutward />
            </span>
          </Link>
        </aside>
        <div className="col-span-12">
          <video src={selectedProject?.preview} controls></video>
          {/* <img src={selectedProject?.preview} alt="" height={778} /> */}
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
        <div className="col-start-1 col-end-7">
          <img
            src={selectedProject?.mobileImages[0] || ""}
            alt="image here"
            height={560}
          />
        </div>
        <div className="col-start-7 col-end-13">
          <img
            src={selectedProject?.mobileImages[1] || ""}
            alt="image here"
            height={560}
          />
        </div>
        <div className="col-span-12">
          <img src={selectedProject?.coverImageBottom || ""} alt="image here" />
        </div>
      </div>

      <div className="px-5 md:px-0 flex justify-between items-center mt-10">
        <Link
          to={`/projects/${projects[PreviousProjectIndex].name.toLowerCase()}`}
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
          className="outline p-3 outline-1 rounded-lg w-24 flex items-center justify-center gap-2"
        >
          <span>Next</span>
          <span>
            <FaArrowRight className="inline-block" />
          </span>
        </Link>
      </div>
    </section>
  );
}

export default ProjectDetail;

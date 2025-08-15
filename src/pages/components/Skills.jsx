import { skillSets } from "../../data";

function Skills() {
  return (
    <section className="col-start-1 md:col-start-2 -col-end-1 md:col-end-12 dark:text-brand-tertiary-light flex flex-col gap-10 items-center justify-center">
      <h2 className="text-3xl md:text-[3.375rem] font-semibold mb-4 capitalize text-brand-secondary">
        Things I know
      </h2>
      <div className="flex w-full md:w-auto items-center justify-center px-5 md:px-0 flex-wrap gap-4 md:justify-center">
        {skillSets.map((skill, index) => (
          <div
            key={index}
            className="flex items-center px-3 py-1 border border-slate-400 rounded-full text-sm font-medium
                 transition-all duration-200 ease-out hover:shadow-md hover:-translate-y-1"
          >
            <div className="mr-2">
              <skill.icon color={skill.color} />
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

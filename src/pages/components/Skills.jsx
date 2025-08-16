import { skillSets } from "../../data";
import Badge from "./Badge";

function Skills() {
  return (
    <section className="col-start-1 md:col-start-2 -col-end-1 md:col-end-12 dark:text-brand-tertiary-light flex flex-col gap-10 items-center justify-center">
      <h2 className="text-3xl md:text-[3.375rem] font-semibold mb-4 capitalize text-brand-secondary">
        Things I know
      </h2>
      <div className="flex w-full md:w-auto items-center justify-center px-5 md:px-0 flex-wrap gap-4 md:justify-center">
        <Badge badges={skillSets} />
      </div>
    </section>
  );
}

export default Skills;

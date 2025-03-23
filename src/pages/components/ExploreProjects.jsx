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
        {Array.from({ length: 6 }, (_, i) => (
          <article key={i}>
            <div className="h-[376px] bg-gray-500 rounded-xl"></div>
            <div className="flex justify-between items-center text-paragraph-tertiary mt-2">
              <h3 className="text-xl leading-8 capitalize">project one</h3>
              <button
                type="button"
                className="uppercase text-xs leading-3 p-[10px] border rounded-[100px] border-paragraph-tertiary"
              >
                view details
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExploreProjects;

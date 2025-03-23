const articles = [
  {
    title: "How to efficiently manage CSS classes in React.",
    summary:
      "Managing CSS classes in React can be tricky. Especially once you start conditionally updating styles based on state. In this article, I outline a few approaches and compare their merits.",
    platform: "FrontendMentor",
    date: "February 13, 2022",
    link: "https://www.frontendmentor.io/articles/how-to-efficiently-manage-css-classes-in-react-XD9hHfdS1J",
  },
  {
    title: "How to Create a User Onboarding Tour with Driver.js",
    summary:
      "User onboarding tours are essential for guiding new users through your application's features, enhancing user experience, and boosting product adoption. This article provides a comprehensive guide on building such tours using Driver.js. It covers setting up Driver.js in your project, creating interactive tours, and customizing them to align with your application's design and user needs.",
    platform: "OpenReplay",
    date: "October 7, 2024",
    link: "https://blog.openreplay.com/creating-onboarding-tours-with-driver-js/",
  },
  {
    title: "Create a Screen Recorder with JavaScript",
    summary:
      "Screen recording lets you capture your computer’s visual and audio activity, creating a video record of what is happening on your screen. It’s useful for tutorials, presentations, gameplay sessions, and software demonstrations. This article will teach you how to build one with JavaScript.",
    platform: "OpenReplay",
    date: "July 12, 2024",
    link: "https://blog.openreplay.com/create-a-screen-recorder-with-javascript/",
  },
  {
    title:
      "How To Create Absolute Imports In Vite React App: A step-by-step Guide",
    summary:
      "Managing relative imports in large React applications can be cumbersome, leading to complex and error-prone paths. Absolute imports simplify module referencing, improving code maintainability and readability. This article provides a step-by-step guide to setting up absolute imports in a Vite-powered React project, including configuration adjustments and VS Code integration.",
    platform: "Dev.to",
    date: "February 24, 2023",
    link: "https://dev.to/andrewezeani/how-to-create-absolute-imports-in-vite-react-app-a-step-by-step-guide-28co",
  },
  {
    title:
      "How To Create a React Application on an Android Device: A Step-by-Step Guide",
    summary:
      "Access to a computer can be a barrier for many aspiring developers. This article demonstrates how to overcome this obstacle by building a React Todo application entirely on an Android smartphone. It covers setting up the development environment using Termux and Acode, creating the React app with Vite, and managing the project with GitHub.",
    platform: "Dev.to",
    date: "September 24, 2023",
    link: "https://dev.to/andrewezeani/how-to-build-react-applications-using-an-android-phone-a-step-by-step-guide-4amh",
  },
  {
    title: "Bugs, Errors, and Lessons: My Beginner's Debugging Experience",
    summary:
      "When I started my frontend development journey, I encountered my fair share of frustrating bugs and unexpected errors. In this article, I share my experiences debugging early projects, the challenges I faced, and the lessons I learned along the way.",
    platform: "Dev.to",
    date: "August 1, 2023",
    link: "https://dev.to/andrewezeani/bugs-errors-and-lessons-a-beginners-debugging-experience-4502",
  },
];

function ArticlesSection() {
  return (
    <section className="col-start-1 md:col-start-2 -col-end-1 md:col-end-12 dark:text-brand-tertiary-light flex flex-col gap-10 items-center justify-center">
      <div className="mb-4">
        <h2 className="text-3xl md:text-[3.375rem] mb-2 font-semibold capitalize text-brand-secondary">
          Articles I have Written
        </h2>
        <p className="text-center tracking-[0.4em]">about the things I know</p>
      </div>
      <div>
        <div className="px-5">
          {articles.map((article, i) => (
            <article
              key={i}
              className="md:grid md:grid-cols-4 md:items-baseline"
            >
              <div className="relative isolate flex flex-col items-start rounded-2xl px-4 py-6 hover:bg-brand-tertiary-light/20 md:col-span-3">
                <h2 className="text-base text-left md:leading-10 md:text-3.5 font-semibold tracking-tight text-white">
                  <a href={article.link} target="_blank" rel="noreferrer">
                    <span className="absolute inset-0 z-10"></span>
                    {article.title}
                  </a>
                </h2>
                <time
                  className="relative order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 md:hidden"
                  dateTime="2022-02-13"
                >
                  <span
                    className="absolute inset-y-0 left-0 flex items-center"
                    aria-hidden="true"
                  >
                    <span className="h-4 w-0.5 rounded-full bg-zinc-200"></span>
                  </span>
                  {article.date}
                </time>
                <p className="mt-2 text-sm text-left text-paragraph-tertiary text-balance">
                  {article.summary}
                </p>
                <div className="flex justify-between w-full items-center">
                  <div
                    aria-hidden="true"
                    className="mt-4 flex items-center text-sm font-medium text-teal-500 "
                  >
                    {article.platform}
                  </div>
                  <div
                    aria-hidden="true"
                    className="mt-4 flex items-center text-sm font-medium text-brand-secondary"
                  >
                    Read article &rarr;
                  </div>
                </div>
              </div>
              <time
                className="order-first hidden text-sm text-left basis-1/3 text-zinc-400 md:block"
                dateTime="2022-02-13"
              >
                February 13, 2022
              </time>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArticlesSection;

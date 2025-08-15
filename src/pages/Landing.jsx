import {
  AboutMe,
  ArticlesSection,
  ExploreProjects,
  Hero,
  Skills,
} from "./components";

function Landing() {
  return (
    <>
      <Hero
        headline="Building Web Experiences That"
        subText="I create clean, interactive, and performant web applications that make your ideas and business succeed."
        highlightedText="Deliver Results"
      />
      <AboutMe />
      <Skills />
      <ExploreProjects />
      <ArticlesSection />
    </>
  );
}

export default Landing;

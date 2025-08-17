import PageTransition from "../components/PageTransition";
import {
  AboutMe,
  ArticlesSection,
  ExploreProjects,
  Hero,
  Skills,
} from "./components";

function Landing() {
  return (
    <PageTransition>
      <Hero
        headline="Building Web Experiences That"
        subText="I create clean, interactive, and performant web applications that make your ideas and business succeed."
        highlightedText="Deliver Results"
      />
      <AboutMe />
      <Skills />
      <ExploreProjects />
      <ArticlesSection />
    </PageTransition>
  );
}

export default Landing;

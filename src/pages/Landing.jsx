// import NavBar from "../components/NavBar";
// import Footer from "../layout/Footer";
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
      {/* <NavBar /> */}
      <Hero />
      <AboutMe />
      <Skills />
      <ExploreProjects />
      <ArticlesSection />
      {/* <Footer /> */}
    </>
  );
}

export default Landing;

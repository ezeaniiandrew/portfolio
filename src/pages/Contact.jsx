import PageTransition from "../components/PageTransition";
import { Hero } from "./components";

export function Contact() {
  return (
    <PageTransition>
      <Hero
        headline="Let’s Build Something"
        highlightedText="Great Together"
        subText="Whether it’s a fresh idea or a growing project, I’m here to bring it to life with creativity, care, and a focus on delivering real value to your users."
        showCta={true}
      />
    </PageTransition>
  );
}

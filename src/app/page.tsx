import ElasticLine from "@/components/fancy/elastic-line";
import { LineSeparator } from "@/components/LineSeparator";
import { AboutMe } from "@/components/portfolio/AboutMe";
import { Banner } from "@/components/portfolio/Banner";
import { ContactMe } from "@/components/portfolio/ContactMe";
import { Education } from "@/components/portfolio/Education";
import { Projects } from "@/components/portfolio/Projects";
import { Resume } from "@/components/portfolio/Resume";
import { Skills } from "@/components/portfolio/Skills";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <div>
      <Banner />
      <TracingBeam className="px-11 md:px-8 lg:px-2 ">
        <AboutMe>
          <LineSeparator />
          <Education />
          <LineSeparator />
          <Resume />
          <LineSeparator />
          <Skills />
          <LineSeparator />
        </AboutMe>
        <Projects />
      </TracingBeam>
      <div className="mx-11">
        <ContactMe />
      </div>
    </div>
  );
}

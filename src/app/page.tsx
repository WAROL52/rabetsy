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
import { CvType } from "../../public/cv";

export default async function Home() {
  const data: CvType = await (
    await fetch(
      "https://raw.githubusercontent.com/WAROL52/rabetsy/refs/heads/main/public/fr.cv.json"
    )
  ).json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
      <Banner data={data} />
      <TracingBeam className="px-11 md:px-8 lg:px-2 ">
        <AboutMe data={data}>
          <LineSeparator />
          <Education data={data} />
          <Resume data={data} />
          <Skills data={data} />
          <LineSeparator />
        </AboutMe>
        <Projects data={data} />
      </TracingBeam>
      <div className="mx-11">
        <ContactMe data={data} />
      </div>
    </div>
  );
}

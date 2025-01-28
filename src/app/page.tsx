import { AboutMe } from "@/components/portfolio/AboutMe";
import { Banner } from "@/components/portfolio/Banner";
import { Projects } from "@/components/portfolio/Projects";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Projects />
    </div>
  );
}

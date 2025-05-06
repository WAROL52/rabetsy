"use client";

import { CvTypeProps } from "../../../public/cv";
import { TracingBeam } from "../ui/tracing-beam";
import { Resume } from "./Resume";

export type AboutMeProps = {
  children: React.ReactNode;
}&CvTypeProps;

export function AboutMe({ children,data }: AboutMeProps) {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold">
						  {data.sections.aboutMe.title}
		</h1>
        {data.sections.aboutMe.descriptions.map((description, index) => (
		  <p key={index} className="text-lg ">
			{description}
		  </p>
		))}
      </div>
      {children}
    </div>
  );
}

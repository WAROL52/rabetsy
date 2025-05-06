"use client";

import { CvTypeProps } from "../../../public/cv";
import ContactForm from "../forms/contactForm";
import { Section } from "../Section";

export type ContactMeProps = {} & CvTypeProps;

export function ContactMe({ data }: ContactMeProps) {
  return (
    <div className="flex justify-center ">
      <Section
        title={data.sections.contactMe.title}
        description={data.sections.contactMe.descriptions.join(" ")}
      >
        <ContactForm />
      </Section>
    </div>
  );
}

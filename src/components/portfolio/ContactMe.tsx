"use client";

import ContactForm from "../forms/contactForm";
import { Section } from "../Section";

export type ContactMeProps = {};

export function ContactMe({}: ContactMeProps) {
  return (
    <div className="flex justify-center">
      <Section
        title="Contact Me"
        description="Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know."
      >
        <ContactForm />
      </Section>
    </div>
  );
  return (
    <section className="">
      <div className="bg-transparent py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

type InputProps = {
  name: string;
  placeholder?: string;
  type?: string;
};

function Input({ name, placeholder, type }: InputProps) {
  return (
    <input
      name={name}
      type={type}
      className="shadow-sm bg-muted border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-purple-500/30 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
      placeholder={placeholder}
      required
    />
  );
}

"use client";

export type SectionProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function Section({ title, children, description }: SectionProps) {
  return (
    <div className="bg-transparent max-w-screen-md my-8">
      <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="mb-4 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
        {description}
      </p>
      <div>{children}</div>
    </div>
  );
}

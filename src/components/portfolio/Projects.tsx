"use client";

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export type PropjetsProps = {};

export function Projects({}: PropjetsProps) {
  return (
    <div className="">
      <Section title="Projects" description="Here are some of my projects.">
        <Component />
      </Section>
    </div>
  );
  return (
    <div className="bg-transparent py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Contact Me
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Got a technical issue? Want to send feedback about a beta feature? Need
        details about our Business plan? Let us know.
      </p>
      <div>
        <Component />
      </div>
    </div>
  );
  return <Component />;
}

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, LaptopMinimal, Smartphone } from "lucide-react";

export default function Component() {
  return (
    <Tabs defaultValue="web" className="">
      <ScrollArea>
        <TabsList className="mb-2 gap-1 bg-transparent flex justify-start">
          <TabsTrigger
            value="web"
            className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
          >
            <Globe
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            Web
          </TabsTrigger>
          <TabsTrigger
            value="mobile"
            className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
          >
            <Smartphone
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            Mobile
          </TabsTrigger>
          <TabsTrigger
            value="desktop"
            className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
          >
            <LaptopMinimal
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            Desktop
          </TabsTrigger>
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <TabsContent value="web">
        <CardHoverEffectDemo />
      </TabsContent>
      <TabsContent value="mobile">
        <CardHoverEffectDemo />
      </TabsContent>
      <TabsContent value="desktop">
        <CardHoverEffectDemo />
      </TabsContent>
    </Tabs>
  );
}
import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="mx-2">
      <ProjectFilter />
      <HoverEffect items={projects} />
    </div>
  );
}
function ProjectFilter() {
  return (
    <div className="flex justify-between px-2">
      <div>
        <FilterByRadio />
      </div>
      <div>
        <NumberToShow />
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useId } from "react";

function FilterByRadio() {
  const id = useId();

  const items = [
    { value: "0", label: "Tout" },
    { value: "1", label: "React" },
    { value: "2", label: "Vue" },
    { value: "3", label: "Next" },
    { value: "4", label: "Nest" },
  ];

  return (
    <fieldset className="space-y-4">
      {/* <legend className="text-sm font-medium leading-none text-foreground">
        Techno utilisée
      </legend> */}
      <RadioGroup className="flex flex-wrap gap-2" defaultValue="0">
        {items.map((item) => (
          <div
            key={`${id}-${item.value}`}
            className="relative flex flex-col items-start gap-4 rounded-lg border border-input p-3 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem
                id={`${id}-${item.value}`}
                value={item.value}
                className="after:absolute after:inset-0"
              />
              <Label htmlFor={`${id}-${item.value}`}>{item.label}</Label>
            </div>
          </div>
        ))}
      </RadioGroup>
    </fieldset>
  );
}

import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Section } from "../Section";

const Square = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <span
    data-square
    className={cn(
      "flex size-5 items-center justify-center rounded bg-muted text-xs font-medium text-muted-foreground",
      className
    )}
    aria-hidden="true"
  >
    {children}
  </span>
);

function NumberToShow() {
  const id = useId();
  return (
    <div className="space-y-2">
      {/* <Label htmlFor={id}>Nombre de projet</Label> */}
      <Select defaultValue="6">
        <SelectTrigger
          id={id}
          className="ps-2 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_[data-square]]:shrink-0"
        >
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
          <SelectGroup>
            <SelectLabel className="ps-2">Nombre de projets</SelectLabel>
            <SelectItem value="6">
              <Square className="bg-indigo-400/20 text-indigo-500">6</Square>
              <span className="truncate">6 Projets</span>
            </SelectItem>
            <SelectItem value="9">
              <Square className="bg-purple-400/20 text-purple-500">9</Square>
              <span className="truncate">9 Projets</span>
            </SelectItem>
            <SelectItem value="12">
              <Square className="bg-rose-400/20 text-rose-500">12</Square>
              <span className="truncate">12 Projets</span>
            </SelectItem>
            <SelectItem value="0">
              <Square className="bg-rose-400/20 text-rose-500">*</Square>
              <span className="truncate">Tous les Projets</span>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

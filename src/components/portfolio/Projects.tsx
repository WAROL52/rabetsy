"use client";

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export type PropjetsProps = {} & CvTypeProps;

export function Projects({ data }: PropjetsProps) {
  return (
    <div className="">
      <Section
        title={data.sections.projects.title}
        description={data.sections.projects.descriptions.join(" ")}
      >
        <Component data={data} />
      </Section>
    </div>
  );
}

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, LaptopMinimal, Smartphone } from "lucide-react";

export default function Component({ data }: PropjetsProps) {
  return (
    <Tabs
      defaultValue={data.sections.projects.tags.at(0)?.name || "#"}
      className=""
    >
      <ScrollArea>
        <TabsList className="mb-2 gap-1 bg-transparent flex justify-start">
          {data.sections.projects.tags.map((tag) => (
            <TabsTrigger
              key={tag.name}
              value={tag.name}
              className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
            >
              <img
                src={tag.icon}
                alt={tag.name}
                className="h-4 w-4 rounded-full border-2 border-white dark:border-slate-900"
              />
              {tag.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {data.sections.projects.tags.map((tag) => (
        <TabsContent value={tag.name} className="space-y-4" key={tag.name}>
          <CardHoverEffectDemo tag={tag} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo({
  tag,
}: {
  tag: PropjetsProps["data"]["sections"]["projects"]["tags"][number];
}) {
  const [techno, setTechno] = React.useState("all");
  const [taken, setTaken] = React.useState(6);
  const takeCount = taken <= 0 ? Infinity : taken;
  const projects = tag.projects
    .filter((project) => {
      if (techno === "all") return true;
      return project.techno.includes(techno);
    })
    .slice(0, takeCount);
  const allTechno = tag.projects
    .map((project) => project.techno)
    .reduce((acc, techno) => {
      techno.forEach((t) => {
        if (!acc.includes(t)) acc.push(t);
      });
      return acc;
    }, [] as string[]);
  return (
    <div className="mx-2">
      <ProjectFilter
        techno={techno}
        setTechno={setTechno}
        taken={taken}
        setTaken={setTaken}
        allTechno={allTechno}
      />
      <HoverEffect items={projects} />
    </div>
  );
}
function ProjectFilter({
  techno,
  setTechno,
  taken,
  setTaken,
  allTechno,
}: {
  techno: string;
  setTechno: React.Dispatch<React.SetStateAction<string>>;
  taken: number;
  setTaken: React.Dispatch<React.SetStateAction<number>>;
  allTechno: string[];
}) {
  return (
    <div className="flex justify-between px-2">
      <div>
        <FilterByRadio
          techno={techno}
          setTechno={setTechno}
          allTechno={allTechno}
        />
      </div>
      <div>
        <NumberToShow taken={taken} setTaken={setTaken} />
      </div>
    </div>
  );
}

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useId } from "react";

function FilterByRadio({
  techno,
  setTechno,
  allTechno,
}: {
  techno: string;
  setTechno: React.Dispatch<React.SetStateAction<string>>;
  allTechno: string[];
}) {
  const id = useId();

  const items = [
    { value: "all", label: "Tout" },
    ...allTechno.map((item) => ({
      value: item,
      label: item,
    })),
  ];

  return (
    <fieldset className="space-y-4">
      <RadioGroup
        className="flex flex-wrap gap-2"
        value={techno}
        onValueChange={setTechno}
      >
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
import React from "react";
import { CvTypeProps } from "../../../public/cv";

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

function NumberToShow({
  taken,
  setTaken,
}: {
  taken: number;
  setTaken: React.Dispatch<React.SetStateAction<number>>;
}) {
  const id = useId();
  return (
    <div className="space-y-2">
      {/* <Label htmlFor={id}>Nombre de projet</Label> */}
      <Select
        value={String(taken)}
        onValueChange={(val) => setTaken(Number(val))}
      >
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

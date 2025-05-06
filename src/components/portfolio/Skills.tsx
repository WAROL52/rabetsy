"use client";

import { Section } from "../Section";

export type SkillsProps = {} & CvTypeProps;

export function Skills({ data }: SkillsProps) {
  return (
    <Section
      title={data.sections.skills.title}
      description={data.sections.skills.descriptions.join(",")}
    >
      <Component data={data} />
    </Section>
  );
}

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, LaptopMinimal, Smartphone } from "lucide-react";
import { CharBarMixed } from "../charts/ChartBarMixed";
import { ProgressBarMeteorite } from "../ProgressBarMeteorite";
import { CvTypeProps } from "../../../public/cv";

export default function Component({ data }: CvTypeProps) {
  return (
    <Tabs
      defaultValue={data.sections.skills.tags.at(0)?.name || "web"}
      className=""
    >
      <ScrollArea>
        <TabsList className="mb-2 gap-1 bg-transparent flex justify-start">
          {data.sections.skills.tags.map((tag) => (
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
      {data.sections.skills.tags.map((tag) => (
        <TabsContent value={tag.name} className="space-y-4" key={tag.name}>
          {tag.techno.map((techno) => (
            <ProgressBarMeteorite
              key={techno.name}
              label={techno.name}
              value={techno.value}
            />
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
}

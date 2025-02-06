"use client";

import { Section } from "../Section";

export type SkillsProps = {};

export function Skills({}: SkillsProps) {
  return (
    <Section title="Skills" description="Here are some of my skills.">
      <Component />
    </Section>
  );
}

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, LaptopMinimal, Smartphone } from "lucide-react";
import { CharBarMixed } from "../charts/ChartBarMixed";
import { ProgressBarMeteorite } from "../ProgressBarMeteorite";

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
      <TabsContent value="web" className="space-y-4">
        <ProgressBarMeteorite label="React" value={90} />
        <ProgressBarMeteorite label="NextJs" value={75} />
        <ProgressBarMeteorite label="NestJs" value={50} />
        <ProgressBarMeteorite label="Adonis" value={60} />
      </TabsContent>
      <TabsContent value="mobile" className="space-y-4">
        <ProgressBarMeteorite label="React Native" value={80} />
        <ProgressBarMeteorite label="Expo" value={70} />
        <ProgressBarMeteorite label="Flutter" value={50} />
        <ProgressBarMeteorite label="Android Studio" value={40} />
      </TabsContent>
      <TabsContent value="desktop" className="space-y-4">
        <ProgressBarMeteorite label="C/C++" value={80} />
        <ProgressBarMeteorite label="Tauri" value={45} />
        <ProgressBarMeteorite label="Electron" value={60} />
        <ProgressBarMeteorite label="Python" value={90} />
      </TabsContent>
    </Tabs>
  );
}

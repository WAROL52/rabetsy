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
import { ProgressBar } from "../ProgressBar";

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
        <ProgressBar label="React" progress={90} />
        <ProgressBar label="NextJs" progress={75} />
        <ProgressBar label="NestJs" progress={50} />
        <ProgressBar label="Adonis" progress={60} />
      </TabsContent>
      <TabsContent value="mobile" className="space-y-4">
        <ProgressBar label="React Native" progress={80} />
        <ProgressBar label="Expo" progress={70} />
        <ProgressBar label="Flutter" progress={50} />
        <ProgressBar label="Android Studio" progress={40} />
      </TabsContent>
      <TabsContent value="desktop" className="space-y-4">
        <ProgressBar label="C/C++" progress={80} />
        <ProgressBar label="Tauri" progress={45} />
        <ProgressBar label="Electron" progress={60} />
        <ProgressBar label="Python" progress={90} />
      </TabsContent>
    </Tabs>
  );
}

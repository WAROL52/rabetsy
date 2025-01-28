"use client";

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export type PropjetsProps = {};

export function Projects({}: PropjetsProps) {
  return <Component />;
  return (
    <Tabs defaultValue="account" className="my-4 container mx-auto">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
}

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, LaptopMinimal, Smartphone } from "lucide-react";

export default function Component() {
  return (
    <Tabs defaultValue="web" className="my-16 container mx-auto">
      <ScrollArea>
        <TabsList className="mb-3 gap-1 bg-transparent flex justify-center">
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
        <p className="p-4 pt-1 text-center text-xs text-muted-foreground">
          Content for Tab 1 web
        </p>
      </TabsContent>
      <TabsContent value="mobile">
        <p className="p-4 pt-1 text-center text-xs text-muted-foreground">
          Content for Tab 2 mobile
        </p>
      </TabsContent>
      <TabsContent value="desktop">
        <p className="p-4 pt-1 text-center text-xs text-muted-foreground">
          Content for Tab 3 desktop
        </p>
      </TabsContent>
    </Tabs>
  );
}

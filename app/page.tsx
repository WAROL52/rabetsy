"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Terminal,
  Database,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/zippystarter/container";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ProjectImage } from "@/components/project-image";
import GithubContrib from "@/components/github-contrib";
import { portfolio } from "@/app/data";
import { useMemo, useState } from "react";

export default function Home() {
  const { personal, social, stats, hero, projects, skills, experience } = portfolio;
  const [activeProjectFilters, setActiveProjectFilters] = useState<string[]>([]);
  const contactHref = `mailto:${personal.email}`;
  const phoneHref = `tel:${personal.phone.replace(/\s+/g, "")}`;
  const githubUsername = social?.github ? social.github.split('/').filter(Boolean).pop() : "Warol52";
  const availableProjectFilters = useMemo(() => {
    const uniqueTags = new Set<string>();

    projects.forEach((project) => {
      project.tags.forEach((tag) => uniqueTags.add(tag));
    });

    return ["All", ...Array.from(uniqueTags).sort((first, second) => first.localeCompare(second))];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeProjectFilters.length === 0) {
      return projects;
    }

    return projects.filter((project) =>
      activeProjectFilters.some((filter) => project.tags.includes(filter))
    );
  }, [activeProjectFilters, projects]);

  const toggleProjectFilter = (filter: string) => {
    if (filter === "All") {
      setActiveProjectFilters([]);
      return;
    }

    setActiveProjectFilters((currentFilters) => {
      if (currentFilters.includes(filter)) {
        return currentFilters.filter((item) => item !== filter);
      }

      return [...currentFilters, filter];
    });
  };

  const isFilterActive = (filter: string) => {
    if (filter === "All") {
      return activeProjectFilters.length === 0;
    }

    return activeProjectFilters.includes(filter);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Container
        component="header"
        wrapperClassName="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
        className="mx-auto max-w-7xl flex items-center justify-between h-16 uppercase"
      >
        <div className="text-xl font-bold font-mono tracking-tighter">
          {personal.firstName}
          <span className="text-primary">_</span>
          {personal.lastName}
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground ">
          <Link href="#projects" className="hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-primary transition-colors">
            Skills
          </Link>
          <Link href="#experience" className="hover:text-primary transition-colors">
            Experience
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <Link
          href={personal.resume}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "font-mono text-xs border-primary/50 hover:bg-primary/10 hover:text-primary hover:border-primary"
          )}
        >
          resume.pdf
        </Link>
      </Container>
      

      <Container
        wrapperClassName="relative min-h-screen flex items-center pt-16 overflow-hidden"
        className="mx-auto max-w-7xl flex-1"
      >
        <div className="absolute inset-0 z-0">
            <div className="relative w-screen h-screen bg-background overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/hero-bg.jpg')] before:absolute before:inset-0 before:bg-primary before:mix-blend-color-dodge dark:before:mix-blend-color" />
          </div>
            <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/50 to-background" />
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {hero.badge}
            </div>
            <h1 className="text-6xl md:text-8xl font-display tracking-tighter leading-[0.9]">
              {hero.titleTop}
              <br />
              {hero.titleMiddle}
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-foreground">
                {hero.titleBottom}
              </span>
            </h1>
            <p className="md:text-xl text-muted-foreground max-w-md leading-relaxed">
              {personal.tagline}
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-mono text-muted-foreground">
              <span>{personal.role}</span>
              <span>•</span>
              <span>{personal.location}</span>
              <span>•</span>
              <Link href={personal.website} className="hover:text-primary transition-colors">
                {personal.website.replace(/^https?:\/\//, "")}
              </Link>
            </div>
            <div className="flex gap-4 pt-4 items-center">
              <Link
                href="#projects"
                className={cn("uppercase", buttonVariants({ size: "lg" }))}
              >
                View projects <ArrowRight className="size-4" />
              </Link>
              <div className="flex gap-2">
                <Link
                  href={social.github}
                  className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href={social.linkedin}
                  className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href={contactHref}
                  className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative h-125 w-full border border-border/30 bg-card/10 backdrop-blur-sm p-8">
            <div className="absolute top-0 left-0 size-4 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute top-0 right-0 size-4 border-t-2 border-r-2 border-primary"></div>
            <div className="absolute bottom-0 left-0 size-4 border-b-2 border-l-2 border-primary"></div>
            <div className="absolute bottom-0 right-0 size-4 border-b-2 border-r-2 border-primary"></div>

            <div className="h-full w-full flex flex-col justify-between font-mono text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>SYS.STATUS: {personal.available ? "NORMAL" : "OFFLINE"}</span>
                <span>UPTIME: {stats.uptime}</span>
              </div>
              <div className="space-y-2">
                <div className="h-1 w-full bg-secondary overflow-hidden">
                  <div className="h-full bg-primary w-[75%]"></div>
                </div>
                <div className="flex justify-between">
                  <span>ACTIVE_PROJECTS</span>
                  <span>{stats.activeProjects}</span>
                </div>
                <div className="h-1 w-full bg-secondary overflow-hidden">
                  <div className="h-full bg-primary w-[42%]"></div>
                </div>
                <div className="flex justify-between">
                  <span>EXPERIENCE</span>
                  <span>{stats.experience}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="block text-4xl font-bold text-foreground">
                  {String(stats.activeProjects).padStart(2, "0")}
                </span>
                <span>ACTIVE_PROJECTS</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container
        id="projects"
        component="section"
        wrapperClassName="py-24 border-t border-border"
        className="mx-auto max-w-7xl flex-1"
      >
        <div className="grid justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-display tracking-tighter mb-4">
              SELECTED
              <br />
              WORKS
            </h2>
            <div className="h-1 w-24 bg-primary"></div>
          </div>
          <p className="text-muted-foreground max-w-sm text-left">{personal.shortBio}</p>
        </div>
		<div className="mb-6">
          <GithubContrib username={githubUsername} />
		</div>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          {availableProjectFilters.map((filter) => {
            const isActive = isFilterActive(filter);

            return (
              <button
                key={filter}
                type="button"
                onClick={() => toggleProjectFilter(filter)}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-mono transition-colors",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-primary hover:text-foreground"
                )}
              >
                {filter}
              </button>
            );
          })}
          {activeProjectFilters.length > 0 && (
            <button
              type="button"
              onClick={() => setActiveProjectFilters([])}
              className="rounded-full border border-border bg-background px-3 py-1 text-xs font-mono text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              Clear
            </button>
          )}
        </div>

        <div className="mb-6 text-sm text-muted-foreground font-mono">
          {filteredProjects.length} project{filteredProjects.length > 1 ? "s" : ""} shown
          {activeProjectFilters.length > 0 && (
            <span className="ml-2">• {activeProjectFilters.length} filter{activeProjectFilters.length > 1 ? "s" : ""} active</span>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.title}
              className={cn(
                "pt-0 group bg-card border-border hover:border-primary/50 transition-all duration-300 rounded-none overflow-hidden flex w-full max-w-md md:w-80 lg:w-96 flex-none flex-col"
              )}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <div className="flex flex-1 flex-col gap-4 p-6">
                <CardHeader className="grid gap-4 p-0">
                  <CardTitle className="text-2xl font-display group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-mono text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="p-0 flex-1">
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardContent>
              </div>
              <CardFooter className="flex justify-between pt-0 px-6 pb-6">
                <Link
                  href={project.link}
                  className="text-sm font-display flex items-center hover:text-primary transition-colors gap-2"
                >
                  LIVE DEMO <ExternalLink className="size-3" />
                </Link>
                <Link
                  href={project.repo}
                  className="text-sm font-display flex items-center hover:text-primary transition-colors gap-2"
                >
                  CODE <Github className="size-3" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>

      <Container
        id="skills"
        component="section"
        wrapperClassName="py-24 bg-secondary/20 border-t border-border"
        className="mx-auto max-w-7xl flex-1"
      >
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-4xl font-display tracking-tighter mb-6">TECH_STACK</h2>
            <p className="text-muted-foreground mb-8">{personal.shortBio}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Code2 className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">CLEAN_CODE</span>
              </div>
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Database className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">SCALABLE_DB</span>
              </div>
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Cpu className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">PERFORMANCE</span>
              </div>
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Terminal className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">DEVOPS</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 grid sm:grid-cols-4 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-6">
                <h3 className="text-xl font-display border-b border-primary/30 pb-2 inline-block">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center justify-between group">
                      <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill}
                      </span>
                      <div className="h-0.5 w-12 bg-secondary group-hover:bg-primary transition-colors"></div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Container id="experience" className="py-24 border-t border-border max-w-7xl mx-auto">
        <h2 className="text-4xl font-display mb-12 uppercase">Experience Log</h2>

        <div className="grid gap-6">
          {experience.map((item) => (
            <Card key={`${item.company}-${item.period}`} className="rounded-none border-border bg-card">
              <CardHeader className="grid gap-3 md:grid-cols-[1fr_auto] md:items-start">
                <div>
                  <CardTitle className="text-2xl font-display">{item.company}</CardTitle>
                  <CardDescription className="text-base">{item.role}</CardDescription>
                </div>
                <div className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                  {item.period}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>

      <Container id="contact" className="py-24 bg-card border-t border-border">
        <div className="max-w-2xl justify-self-center">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display mb-4">INITIATE_CONTACT</h2>
            <p className="text-muted-foreground">
              Have a project in mind or want to discuss the next system? Send a signal.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 mb-8 text-sm">
            <Link href={contactHref} className="rounded-none border border-border bg-background px-4 py-3 hover:border-primary transition-colors">
              {personal.email}
            </Link>
            <Link href={phoneHref} className="rounded-none border border-border bg-background px-4 py-3 hover:border-primary transition-colors">
              {personal.phone}
            </Link>
          </div>

          <form className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-mono text-muted-foreground">
                  NAME
                </label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-mono text-muted-foreground">
                  EMAIL
                </label>
                <Input id="email" type="email" placeholder={personal.email} />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-mono text-muted-foreground">
                MESSAGE
              </label>
              <Textarea
                id="message"
                placeholder={`Hello ${personal.firstName}, I would like to talk about...`}
                className="min-h-37.5"
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              SEND TRANSMISSION
            </Button>
          </form>
        </div>
      </Container>

      <Container
        component="footer"
        className="py-8 border-t border-border bg-background text-center max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs font-mono text-muted-foreground">
            © 2026 {personal.firstName.toUpperCase()} {personal.lastName}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6 text-xs font-mono text-muted-foreground">
            <Link href={social.github} className="hover:text-primary transition-colors">
              GITHUB
            </Link>
            <Link href={social.linkedin} className="hover:text-primary transition-colors">
              LINKEDIN
            </Link>
            <Link href={contactHref} className="hover:text-primary transition-colors">
              EMAIL
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "GitHub", icon: Github, href: "https://github.com" },
  ];

  return (
    <footer className="border-t bg-background ">
      <div className="mx-auto container py-8 md:py-12">
        <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0">
          <div className="flex flex-col items-center space-y-4 md:items-start">
            <Logo />
            <nav className="flex flex-wrap justify-center gap-4 md:justify-start">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-col items-center space-y-4 md:items-end">
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              © {2025}{" "}
              <Link
                href={"https://github.com/WAROL52"}
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                WAROL52
              </Link>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

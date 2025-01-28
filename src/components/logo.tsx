"use client";

import Link from "next/link";
import ColourfulText from "./ui/colourful-text";

export type LogoProps = {};

export function Logo({}: LogoProps) {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <span className="inline-block font-bold ">
        <ColourfulText text="WAROL52" />
      </span>
    </Link>
  );
}

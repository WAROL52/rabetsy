"use client";

import { useTheme } from "next-themes";
import { PropsWithChildren, useEffect, useState } from "react";
import { Particles } from "./ui/particles";

export function BgParticul({ children }: PropsWithChildren) {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className=" relative flex min-h-[1000px] w-full flex-col  overflow-hidden rounded-lg bg-background md:shadow-xl">
      <div>{children}</div>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}

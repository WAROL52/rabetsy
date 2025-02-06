"use client";

import { PropsWithChildren, useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

export type ScrollAreaControllerProps = PropsWithChildren;

export function ScrollAreaController({ children }: ScrollAreaControllerProps) {
  const area = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: area,
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });
  const className = cn("");

  return (
    <div className={cn(" w-full h-[93vh] overflow-auto", className)} ref={area}>
      <motion.div
        className={cn(
          "fixed inset-x-0 z-[1000] h-1 origin-left bg-gradient-to-r from-secondary via-[#F38CB8] to-primary",
          "top-[65px]"
        )}
        style={{
          scaleX,
        }}
      />
      {children}
    </div>
  );
}

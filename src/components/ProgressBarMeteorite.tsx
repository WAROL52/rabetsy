"use client";

import { cn } from "@/lib/utils";
import { useInterval, useInViewport, useMouse } from "@mantine/hooks";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SlowMousePointerFinger } from "./SlowMousePointerFinger";

export type ProgressBarMeteoriteProps = {
  value: number;
  label: string;
};

export function ProgressBarMeteorite({
  value: valueMax = 60,
  label,
}: ProgressBarMeteoriteProps) {
  const [value, setValue] = useState(valueMax);
  const { ref, inViewport } = useInViewport<HTMLDivElement>();
  useEffect(() => {
    if (inViewport) {
      setValue(valueMax);
    }
  }, [inViewport, valueMax]);
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium ">{label}</span>
        <span className="text-sm font-medium "></span>
      </div>
      <motion.div ref={ref} className="w-full bg-muted rounded-full h-3 flex">
        <motion.div
          className="bg-secondary h-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600"
          initial={{ width: 0 }}
          animate={{ width: inViewport ? (value % 100) + "%" : 0 }}
          transition={{ duration: 3, type: "tween", ease: "circOut" }}
        />
        <motion.div
          className="relative w-[30px] cursor-pointer "
          initial={{ rotate: "0" }}
          animate={{ rotate: !inViewport ? "180deg" : "0deg" }}
          transition={{ duration: 0.7, type: "tween", ease: "circInOut" }}
          whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
          drag
          //   dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
          dragElastic={0.2}
          dragSnapToOrigin={!inViewport}
        >
          <Rocket className="absolute bottom-[-6px] text-primary rotate-45 " />
          {/* <SlowMousePointerFinger /> */}
        </motion.div>
      </motion.div>
    </div>
  );
}

function Rocket({ className }: { className: string }) {
  const [show, setShow] = useState(true);
  const interval = useInterval(() => setShow((s) => !s), 500);
  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);
  const color = show ? "text-primary" : "text-primary/75";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-rocket", className)}
    >
      <path
        className={cn(color)}
        d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
      />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

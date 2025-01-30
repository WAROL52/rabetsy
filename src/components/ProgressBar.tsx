"use client";

import { cn } from "@/lib/utils";

export type ProgressBarProps = {
  label: string;
  progress: number;
  color?: string;
  hiddenProgress?: boolean;
};

export function ProgressBar({
  label,
  progress,
  color = "bg-gradient-to-r from-fuchsia-600 to-purple-600",
  hiddenProgress = false,
}: ProgressBarProps) {
  const progressString = `${progress}%`;
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium ">{label}</span>
        <span className="text-sm font-medium ">
          {!hiddenProgress && progressString}{" "}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className={cn(" h-2.5 rounded-full", color)}
          style={{ width: progressString }}
        />
      </div>
    </div>
  );
}

"use client";

import ElasticLine from "./fancy/elastic-line";

export type LineSeparatorProps = {};

export function LineSeparator({}: LineSeparatorProps) {
  return (
    <ElasticLine
      releaseThreshold={50}
      strokeWidth={1}
      animateInTransition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: 0.15,
      }}
    />
  );
}

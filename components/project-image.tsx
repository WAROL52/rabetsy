"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectImageProps {
  src: string;
  alt: string;
  sizes?: string;
}

const FALLBACK_IMAGE = "/project-placeholder-1.jpg";

export function ProjectImage({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: ProjectImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(() => {
    if (!src || src.includes("#")) {
      return FALLBACK_IMAGE;
    }

    return src;
  });

  return (
    <div
      className={cn(
        "bg-primary relative aspect-square overflow-hidden border-b border-border transition-opacity duration-500",
        loaded ? "opacity-100" : "opacity-0"
      )}
    >
      <Image
        src={imageSrc}
        alt={alt}
        fill
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        onError={() => setImageSrc(FALLBACK_IMAGE)}
        className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale mix-blend-luminosity dark:mix-blend-darken"
      />
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

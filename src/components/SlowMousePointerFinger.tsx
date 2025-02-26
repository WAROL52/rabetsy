"use client";

import type React from "react";
import { useState, useEffect, useRef, useMemo } from "react";
import { motion, useMotionValue } from "framer-motion";
import { RocketMagic } from "./RocketMagic";
import { useInViewport } from "@mantine/hooks";

export const SlowMousePointerFinger: React.FC<{ isVisible: boolean }> = ({
  isVisible,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rocketRef = useRef<HTMLDivElement>(null);

  const win = useMemo(() => window, []);
  const rocketX = useMotionValue(win.innerWidth / 2);
  const rocketY = useMotionValue(win.innerHeight / 2);
  const rotation = useMotionValue(0);
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    const id = setTimeout(() => {
      setShow(isVisible);
    }, 1000);
    return () => clearTimeout(id);
  }, [isVisible]);
  const velocityX = useRef(0);
  const velocityY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updateRocket = () => {
      const currentX = rocketX.get();
      const currentY = rocketY.get();

      const dx = mousePosition.x - currentX;
      const dy = mousePosition.y - currentY;
      const angle = Math.atan2(dy, dx);

      // Update rotation
      rotation.set(angle * (180 / Math.PI) + 90);

      // Update velocity
      const acceleration = 0.5;
      velocityX.current += Math.cos(angle) * acceleration;
      velocityY.current += Math.sin(angle) * acceleration;

      // Apply drag
      const drag = 0.95;
      velocityX.current *= drag;
      velocityY.current *= drag;

      // Update position
      rocketX.set(currentX + velocityX.current);
      rocketY.set(currentY + velocityY.current);

      requestAnimationFrame(updateRocket);
    };

    const animationFrame = requestAnimationFrame(updateRocket);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [mousePosition, rocketX, rocketY, rotation]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <motion.div
        ref={rocketRef}
        style={{
          position: "absolute",
          //   left: rocketX,
          //   top: rocketY,
          rotate: rotation,
          x: "-50%",
          y: "-80%",
        }}
        animate={mousePosition}
        transition={{
          type: "tween",
          duration: 3,
          ease: "easeInOut",
        }}
      >
        {(show || isVisible) && <RocketMagic isVisible={isVisible} />}
        {/* <svg
          width="60"
          height="100"
          viewBox="0 0 60 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 0C13.4315 0 0 13.4315 0 30V70C0 86.5685 13.4315 100 30 100C46.5685 100 60 86.5685 60 70V30C60 13.4315 46.5685 0 30 0ZM30 10C41.0457 10 50 18.9543 50 30V70C50 81.0457 41.0457 90 30 90C18.9543 90 10 81.0457 10 70V30C10 18.9543 18.9543 10 30 10Z"
            fill="#FFD1B0"
          />
          <path d="M30 0L30 100" stroke="#8B4513" strokeWidth="5" />
          <circle cx="30" cy="20" r="5" fill="#8B4513" />
        </svg> */}
      </motion.div>
    </div>
  );
};

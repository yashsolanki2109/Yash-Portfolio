"use client";

import { useEffect, useRef } from "react";

export default function Spotlight() {
  const rafRef = useRef<number | null>(null);
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
    };
    const tick = () => {
      document.documentElement.style.setProperty(
        "--spot-x",
        `${posRef.current.x}px`
      );
      document.documentElement.style.setProperty(
        "--spot-y",
        `${posRef.current.y}px`
      );
      rafRef.current = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", handleMove);
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 mix-blend-multiply dark:mix-blend-lighten"
      style={{
        background:
          "radial-gradient(500px 500px at var(--spot-x, 50%) var(--spot-y, 50%), rgba(3,105,161,0.18), rgba(2,132,199,0.08) 40%, transparent 65%)",
      }}
    />
  );
}

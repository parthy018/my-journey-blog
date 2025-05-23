
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampContainer({
  children,
  className,
  width = "w-full",
  height = "h-full",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  width?: string;
  height?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  if (!isClient) {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-background",
          className,
          width,
          height
        )}
        {...props}
      >
        <div className="h-full w-full">{children}</div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative overflow-hidden bg-background",
        className,
        width,
        height
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-[120px] scale-y-[0.8] w-1/2 h-1/3 rounded-full"
          style={{
            top: mousePosition.y,
            left: mousePosition.x,
          }}
        />
      </div>

      <div className="h-full w-full">{children}</div>
    </div>
  );
}

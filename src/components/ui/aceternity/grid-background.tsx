
"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface GridBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  dotColor?: string;
  dotSize?: number;
  dotSpacing?: number;
  blur?: number;
}

export const GridBackground = ({
  className,
  dotColor = "rgba(var(--primary-rgb), 0.2)",
  dotSize = 1,
  dotSpacing = 20,
  blur = 0,
  children,
  ...props
}: GridBackgroundProps) => {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(${dotColor} ${dotSize}px, transparent 0)`,
          backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
          backgroundPosition: "0 0",
          filter: blur ? `blur(${blur}px)` : "none",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

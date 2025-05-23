
"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

interface SparkleProps {
  size: number;
  color: string;
  style: React.CSSProperties;
}

const DEFAULT_COLOR = "hsl(var(--primary))";

const generateSparkle = (color: string = DEFAULT_COLOR) => {
  const size = Math.floor(Math.random() * 10 + 10);
  return {
    id: String(Math.random()),
    color,
    size,
    style: {
      position: "absolute" as const,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      zIndex: 1,
      // Use a slightly randomized animation duration
      animationDuration: `${0.6 + Math.random() * 0.6}s`,
    },
  };
};

const Sparkle = ({ color, size, style }: SparkleProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className="animate-sparkle"
    >
      <path
        d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
        fill={color}
      />
    </svg>
  );
};

interface SparklesProps extends React.HTMLAttributes<HTMLDivElement> {
  sparkleCount?: number;
  minDelay?: number;
  maxDelay?: number;
  color?: string;
}

export const Sparkles = ({
  children,
  sparkleCount = 5,
  minDelay = 400,
  maxDelay = 900,
  color,
  className,
  ...props
}: SparklesProps) => {
  const [sparkles, setSparkles] = useState<Array<any>>([]);
  const { theme } = useTheme();
  
  // Use theme-based color if none provided
  const sparkleColor = color || (theme === "dark" ? "hsl(154 94% 47%)" : "hsl(149 100% 42%)");

  const generateSparkles = () => {
    const createdSparkles = Array.from({ length: sparkleCount }).map(() =>
      generateSparkle(sparkleColor)
    );
    setSparkles(createdSparkles);
  };

  useEffect(() => {
    generateSparkles();
    
    const randomInterval = Math.floor(
      Math.random() * (maxDelay - minDelay) + minDelay
    );
    
    const intervalId = setInterval(generateSparkles, randomInterval);
    return () => clearInterval(intervalId);
  }, [sparkleColor, sparkleCount]);

  return (
    <span className={cn("relative inline-block", className)} {...props}>
      {sparkles.map(sparkle => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </span>
  );
};


"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Item {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: Item[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      setTimeout(() => {
        setStart(true);
      }, 0);
    }
  }, [isClient]);

  const getSpeed = () => {
    switch (speed) {
      case "fast":
        return 40;
      case "normal":
        return 70;
      case "slow":
        return 100;
      default:
        return 70;
    }
  };

  const directionModifier = direction === "left" ? -1 : 1;

  if (!isClient) {
    return (
      <div
        className={cn(
          "flex flex-nowrap gap-4 overflow-hidden",
          className
        )}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="w-[350px] max-w-full flex-shrink-0 relative"
          >
            {/* Card content rendered server-side */}
            <ProjectCard item={item} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-nowrap gap-4 overflow-hidden",
        className
      )}
    >
      <motion.div
        className="flex gap-4 flex-nowrap"
        initial={{ x: 0 }}
        animate={{
          x: start
            ? directionModifier * (items.length * -350 - items.length * 16)
            : 0,
        }}
        transition={{
          duration: items.length * getSpeed(),
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          pauseAnimation: pauseOnHover ? "paused" : "running",
        }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="w-[350px] max-w-full flex-shrink-0 relative"
          >
            <ProjectCard item={item} />
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex gap-4 flex-nowrap"
        initial={{ x: 0 }}
        animate={{
          x: start
            ? directionModifier *
              (items.length * -350 - items.length * 16) +
              (items.length * 350 + items.length * 16)
            : (items.length * 350 + items.length * 16),
        }}
        transition={{
          duration: items.length * getSpeed(),
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          pauseAnimation: pauseOnHover ? "paused" : "running",
        }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="w-[350px] max-w-full flex-shrink-0 relative"
          >
            <ProjectCard item={item} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ item }: { item: Item }) => {
  return (
    <Link to={`/projects`} className="block h-full group">
      <div className="relative h-full rounded-xl overflow-hidden border border-border bg-card shadow-md hover:shadow-xl transition-all duration-300">
        <div className="h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </div>
      </div>
    </Link>
  );
};

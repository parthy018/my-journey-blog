
"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
interface StickyScrollRevealProps {
  content: {
    id: string;
    title: string;
    description: string;
    image?: string;
    date?: string;
    badges?: string[];
  }[];
  contentClassName?: string;
  revealClassName?: string;
  stickyClassName?: string;
}

export const StickyScrollReveal = ({
  content,
  contentClassName,
  revealClassName,
  stickyClassName,
}: StickyScrollRevealProps) => {
  const [activeCard, setActiveCard] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [refLoaded, setRefLoaded] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    refs.current = refs.current.slice(0, content.length);
    if (refs.current.every(ref => ref !== null)) {
      setRefLoaded(true);
    }
  }, [content.length]);

  useEffect(() => {
    if (!refLoaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = refs.current.findIndex((ref) => ref === entry.target);
            setActiveCard(index);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [refLoaded]);

  return (
    <div ref={containerRef} className="relative">
      <div className="relative flex flex-col md:flex-row items-start">
        <div className={cn("w-full md:w-2/5 sticky top-20", stickyClassName)}>
          <div className="relative h-[75vh] w-full overflow-hidden rounded-lg bg-muted/20 border border-border shadow-xl">
            {content.map((item, i) => (
              <motion.div
                key={i}
                className={cn(
                  "absolute inset-0 h-full w-full p-6 flex flex-col",
                  revealClassName
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeCard === i ? 1 : 0,
                  y: activeCard === i ? 0 : 20,
                  filter: activeCard === i ? "blur(0px)" : "blur(5px)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {item.image && (
                  <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                {item.date && (
                  <p className="text-sm text-primary mb-2">{item.date}</p>
                )}
                {item.badges && item.badges.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.badges.map((badge, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-muted-foreground flex-1">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className={cn("w-full md:w-3/5 pl-0 md:pl-10", contentClassName)}>
          <div className="space-y-24 pb-40">
            {content.map((item, i) => (
              <div
                key={i}
                ref={(el) => (refs.current[i] = el)}
                className={cn(
                  "min-h-[50vh] py-10",
                  activeCard === i ? "opacity-100" : "opacity-40"
                )}
              >
                <div className="border border-border bg-card/50 p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  {item.date && (
                    <p className="text-primary font-medium mb-2">{item.date}</p>
                  )}
                  {item.badges && item.badges.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.badges.map((badge, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-lg text-muted-foreground">{item.description}</p>
                  <button
                    onClick={() => navigate(`/blog/${item.id}`)}
                    className="mt-4 px-5 py-2 rounded-lg border-2 border-primary bg-primary text-black font-semibold transition-colors duration-300 hover:bg-primary/90"
                  >
                    Read More
                  </button>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

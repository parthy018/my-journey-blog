
"use client";

import React, { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";

interface TypewriterProps extends React.HTMLAttributes<HTMLDivElement> {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  cursorBlink?: boolean;
  loop?: boolean;
}

export const Typewriter = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1500,
  cursorBlink = true,
  loop = true,
  className,
  ...props
}: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words?.length) {
      return;
    }

    let timer: NodeJS.Timeout;
    const currentWord = words[index];

    const handleTyping = () => {
      if (isDeleting) {
        // Deleting text
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        
        if (displayedText.length <= 1) {
          setIsDeleting(false);
          setIndex((index + 1) % words.length);
          // Delay before starting the next word
          timer = setTimeout(handleTyping, delayBetweenWords);
          return;
        }
        
        timer = setTimeout(handleTyping, deletingSpeed);
      } else {
        // Typing text
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        
        if (displayedText.length === currentWord.length) {
          // Finished typing
          if (!loop && index === words.length - 1) {
            // If not looping and reached the last word, stop
            return;
          }
          
          // Delay before deleting
          setIsDeleting(true);
          timer = setTimeout(handleTyping, delayBetweenWords);
          return;
        }
        
        timer = setTimeout(handleTyping, typingSpeed);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, index, isDeleting, words, typingSpeed, deletingSpeed, delayBetweenWords, loop]);

  const cursorClass = useMemo(
    () => cn("animate-pulse", cursorBlink ? "animate-blink" : ""),
    [cursorBlink]
  );

  return (
    <div className={cn("inline-flex items-center", className)} {...props}>
      <span>{displayedText}</span>
      <span className={cursorClass}>|</span>
    </div>
  );
};

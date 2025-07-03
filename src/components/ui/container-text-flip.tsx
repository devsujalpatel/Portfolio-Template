"use client";

import React, { useState, useEffect, useId, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

export interface ContainerTextFlipProps {
  words?: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 500,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const measureRef = useRef<HTMLSpanElement>(null); // for measuring text

  const updateWidthForWord = () => {
    if (measureRef.current) {
      const textWidth = measureRef.current.offsetWidth + 30;
      setWidth(textWidth);
    }
  };

  useEffect(() => {
    updateWidthForWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <>
      {/* Hidden off-screen text measurer */}
      <span
        ref={measureRef}
        className={cn("absolute left-[-9999px] top-[-9999px] whitespace-nowrap", textClassName)}
      >
        {words[currentWordIndex]}
      </span>

      <motion.div
        layout
        layoutId={`words-here-${id}`}
        animate={{ width }}
        transition={{ duration: animationDuration / 2000 }}
        className={cn(
          "relative inline-block rounded-md py-1 text-center text-sm font-semibold text-zinc-500 md:text-sm dark:text-zinc-500 border border-zinc-200 dark:border-zinc-800 shadow-lg overflow-hidden",
          className
        )}
      >
        <div className="relative h-[1.5em] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={words[currentWordIndex]}
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{
                duration: animationDuration / 1000,
                ease: "easeInOut",
              }}
              className={cn("absolute left-0 right-0", textClassName)}
            >
              {words[currentWordIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}

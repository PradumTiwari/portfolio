"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  const colors = [
    "rgba(125, 211, 252, 0.5)", // sky-300 with 30% opacity
    "rgba(249, 168, 212, 0.5)", // pink-300 with 30% opacity
    "rgba(134, 239, 172, 0.5)", // green-300 with 30% opacity
    "rgba(253, 224, 71, 0.5)",  // yellow-300 with 30% opacity
    "rgba(252, 165, 165, 0.5)", // red-300 with 30% opacity
    "rgba(216, 180, 254, 0.5)", // purple-300 with 30% opacity
    "rgba(147, 197, 253, 0.5)", // blue-300 with 30% opacity
    "rgba(165, 180, 252, 0.5)", // indigo-300 with 30% opacity
    "rgba(196, 181, 253, 0.5)", // violet-300 with 30% opacity
  ];
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      style={{
        transform: `skewX(-48deg) skewY(14deg) scale(1.5) rotate(0deg) translate(-15%, -15%)`, // Adjusted scale and translation
        backgroundColor: "black", // Explicitly set the background color to black
        position: "absolute",
        top: 0,
        left: 0,
        width: "130%", // Increased width to cover rotated space
        height: "130%", // Increased height to cover rotated space
      }}
      className={cn(
        "p-4 flex z-0", // Removed absolute positioning and width/height from here
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row${i}`}
          className="w-12 h-6 border-l border-slate-700/50 relative" // Smaller squares and faded borders
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(), // Use the color with reduced opacity
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col${j}`}
              className="w-12 h-6 border-r border-t border-slate-700/50 relative" // Smaller squares and faded borders
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-4 w-8 -top-[10px] -left-[18px] text-slate-700/50 stroke-[1px] pointer-events-none" // Faded icon
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
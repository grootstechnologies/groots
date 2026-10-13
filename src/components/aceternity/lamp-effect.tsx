"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[40rem] flex-col items-center justify-center overflow-hidden bg-white w-full rounded-md z-0",
        className,
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        {/* Left lamp cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "12rem" }}
          whileInView={{ opacity: 1, width: "28rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem]"
          style={{
            background:
              "conic-gradient(from 70deg at center top, #0878E8 0deg, transparent 180deg)",
          }}
        >
          <div className="absolute w-[28rem] h-20 left-1/2 -translate-x-1/2 bg-white top-1/2 -translate-y-1/2" />
        </motion.div>
        {/* Right lamp cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "12rem" }}
          whileInView={{ opacity: 1, width: "28rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] overflow-visible"
          style={{
            background:
              "conic-gradient(from 290deg at center top, #0878E8 0deg, transparent 180deg)",
          }}
        >
          <div className="absolute w-[28rem] h-20 right-1/2 -translate-x-1/2 bg-white top-1/2 -translate-y-1/2" />
        </motion.div>
        {/* Horizontal white bar to "cut" the lamp */}
        <div className="absolute top-1/2 h-40 w-[80rem] -translate-y-1/2 bg-white" />
      </div>
      <div className="relative z-10 flex flex-col items-center px-5 pb-20 pt-4">
        {children}
      </div>
    </div>
  );
};

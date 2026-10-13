"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-12 md:py-20 px-4 md:px-8 lg:px-10">
        <div ref={ref} className="relative max-w-7xl mx-auto">
          {data.map((entry, index) => (
            <div
              key={`timeline-${index}`}
              className="flex justify-start pt-8 md:pt-16 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-24 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-9 w-9 absolute left-[3px] md:left-0 rounded-full bg-gradient-to-br from-[#32D583] to-[#0878E8] flex items-center justify-center text-white font-bold text-sm ring-4 ring-white z-10 shadow-md">
                  {index + 1}
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 text-[#071D3A] dark:text-white font-bold">
                  {entry.title}
                </h3>
              </div>

              <div className="relative pl-12 md:pl-4 w-full md:w-3/4">
                <h3 className="md:hidden block text-xl mb-4 text-[#071D3A] dark:text-white font-bold left-2 whitespace-pre">
                  {entry.title}
                </h3>
                {entry.content}
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-0 left-[10px] top-4 w-px overflow-hidden bg-gradient-to-b from-transparent via-neutral-200 to-[#0878E8]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-px bg-[#0878E8] [box-shadow:0_0_8px_rgba(22,101,52,0.6)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

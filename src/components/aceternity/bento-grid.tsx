"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-7xl mx-auto md:auto-rows-[18rem]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-white/[0.1] p-4 flex flex-col space-y-4 justify-between overflow-hidden",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-1">
        {icon}
        <div className="font-bold text-neutral-700 dark:text-neutral-100 mb-1 mt-1 text-base md:text-lg">
          {title}
        </div>
        <div className="font-normal text-neutral-500 dark:text-neutral-400 text-sm">
          {description}
        </div>
      </div>
    </div>
  );
};

"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(function Card({
  card,
  index,
  hovered,
  setHovered,
}: {
  card: { title: string; description: string; tag?: string; accent?: string };
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-2xl relative bg-gray-100 overflow-hidden h-64 md:h-80 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300" />
      {card.accent && (
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${card.accent}40, transparent 60%)`,
          }}
        />
      )}
      <div className="absolute inset-0 px-6 py-8 flex flex-col justify-end">
        <div
          className={cn(
            "transform-g transition-transform duration-300",
            hovered === index ? "translate-y-0 opacity-100" : "translate-y-2 opacity-80",
          )}
        >
          {card.tag && (
            <span
              className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide mb-2"
              style={{
                backgroundColor: card.accent ? `${card.accent}25` : "#0878E825",
                color: card.accent || "#0878E8",
              }}
            >
              {card.tag}
            </span>
          )}
          <div
            className="text-lg font-bold text-zinc-900 mb-1"
            style={{
              textShadow: "0 1px 2px rgba(255,255,255,0.6)",
            }}
          >
            {card.title}
          </div>
          <p
            className="text-sm text-zinc-700 leading-snug"
            style={{
              textShadow: "0 1px 2px rgba(255,255,255,0.6)",
            }}
          >
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
});

export const FocusCards = ({ cards }: { cards: any[] }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {cards.map((card, index) => (
        <Card
          key={typeof card.title === "string" ? card.title : index}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
};

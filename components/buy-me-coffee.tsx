"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Coffee, CupSoda } from "lucide-react";

interface BuyMeCoffeeButtonProps {
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  className?: string;
}

const sizeVariants = {
  sm: {
    button: "px-4 py-2 text-sm gap-2",
    icon: "w-4 h-4",
    heart: "w-3 h-3",
  },
  md: {
    button: "p-1 px-5",
    icon: "w-5 h-5",
    heart: "w-4 h-4",
  },
  lg: {
    button: "px-8 py-4 text-lg gap-3",
    icon: "w-6 h-6",
    heart: "w-5 h-5",
  },
  xl: {
    button: "px-10 py-5 text-xl gap-4",
    icon: "w-8 h-8",
    heart: "w-6 h-6",
  },
};

export function BuyMeCoffeeButton({
  size = "lg",
  href = "https://buymeacoffee.com/myname14sas",
  className,
}: BuyMeCoffeeButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = sizeVariants[size];

  return (
    <button
      className={cn(
        "group relative inline-flex items-center rounded-full",
        "bg-gradient-to-r from-primary to-yellow-500 hover:from-yellow-600 hover:to-yellow-600",
        "text-white font-semibold tracking-wide",
        "shadow-lg hover:shadow-xl transform hover:scale-105",
        "transition-all duration-300 ease-out",
        " border-amber-400/20 hover:border-amber-300/40",
        "overflow-hidden",
        sizeClasses.button,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        window.open(href, "_blank");
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

      <div
        className={cn(
          "relative z-10 transition-all duration-300",
          isHovered ? "scale-90 animate-bounce" : "scale-75"
        )}
      >
        <Coffee className="stroke-black stroke-2"  />
      </div>
    </button>
  );
}

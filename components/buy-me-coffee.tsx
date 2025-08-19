"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface BuyMeCoffeeButtonProps {
  size?: "sm" | "md" | "lg" | "xl"
  href?: string
  className?: string
}

const sizeVariants = {
  sm: {
    button: "px-4 py-2 text-sm gap-2",
    icon: "w-4 h-4",
    heart: "w-3 h-3",
  },
  md: {
    button: "px-6 py-3 text-base gap-2.5",
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
}

export function BuyMeCoffeeButton({
  size = "lg",
  href = "https://buymeacoffee.com/myname14sas",
  className,
}: BuyMeCoffeeButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const sizeClasses = sizeVariants[size]

  return (
    <button
      className={cn(
        "group relative inline-flex items-center rounded-full",
        "bg-gradient-to-r from-primary to-orange-500 hover:from-amber-600 hover:to-orange-600",
        "text-white font-semibold tracking-wide",
        "shadow-lg hover:shadow-xl transform hover:scale-105",
        "transition-all duration-300 ease-out",
        "border-2 border-amber-400/20 hover:border-amber-300/40",
        "overflow-hidden",
        sizeClasses.button, // Apply size-specific padding, text size, and gap
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        window.open(href, "_blank")
      }}
    >
      {/* Animated background shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

      {/* Coffee SVG Icon */}
      <div className="relative z-10">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            "transition-all duration-300",
            sizeClasses.icon, // Apply size-specific icon dimensions
            isHovered ? "animate-bounce" : "",
          )}
        >
          {/* Coffee cup */}
          <path
            d="M17 10H19C20.1046 10 21 10.8954 21 12V13C21 14.1046 20.1046 15 19 15H17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-pulse"
          />
          <path
            d="M6 10V15C6 16.6569 7.34315 18 9 18H13C14.6569 18 16 16.6569 16 15V10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="4"
            y="6"
            width="14"
            height="4"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
            fillOpacity="0.1"
          />

          {/* Steam lines */}
          <path
            d="M8 6V4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className={cn("transition-all duration-500", isHovered ? "animate-pulse opacity-100" : "opacity-60")}
          />
          <path
            d="M11 6V4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className={cn(
              "transition-all duration-500 delay-100",
              isHovered ? "animate-pulse opacity-100" : "opacity-60",
            )}
          />
          <path
            d="M14 6V4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className={cn(
              "transition-all duration-500 delay-200",
              isHovered ? "animate-pulse opacity-100" : "opacity-60",
            )}
          />
        </svg>
      </div>

      {/* Text */}
      <span className="relative z-10 font-mono font-bold">Buy Me a Coffee</span>

      {/* Heart icon that appears on hover */}
      <div
        className={cn(
          "relative z-10 transition-all duration-300",
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75",
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={cn("animate-pulse", sizeClasses.heart)} // Apply size-specific heart dimensions
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </button>
  )
}

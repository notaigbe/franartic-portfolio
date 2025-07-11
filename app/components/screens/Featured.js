"use client";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { useDragScroll } from "@/app/hooks/useDragScroll";
import { useState } from "react";

export default function Featured({ data }) {
  const { scrollRef, dragHandlers } = useDragScroll();

  // Track which image overlay is open on mobile
  const [activeOverlay, setActiveOverlay] = useState(null);

  // Helper to detect touch device
  const isTouchDevice = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center text-[#492f05] px-8 max-w-6xl z-10 p-2 mx-auto w-full">
      <div className="mb-6 animate-bounce-slow w-full flex justify-start">{data.icon}</div>
      <div className="mb-8 w-full">
        <div className="text-sm font-light tracking-widest uppercase opacity-80 mb-2">
          {data.subtitle}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up tracking-tight">
          {data.title}
        </h1>
        <p className="text-xl md:text-2xl leading-relaxed font-light mb-6 animate-fade-in-up-delay max-w-3xl mx-auto">
          {data.content}
        </p>
      </div>

      <div
        className="overflow-x-auto cursor-grab active:cursor-grabbing hide-scrollbar rounded-xl w-full"
        ref={scrollRef}
        {...dragHandlers}
      >
        <div className="flex w-max auto-scroll-x auto-scroll-paused space-x-4">
          {data.images.concat(data.images).map((img, index) => {
            const details = data.details && data.details[index % data.details.length];
            const isActive = activeOverlay === index;
            return (
              <div
                key={index}
                className="relative group flex-shrink-0"
                style={{ width: 240, height: 320 }}
                onTouchStart={e => {
                  if (!isActive) {
                    setActiveOverlay(index);
                  }
                }}
                onMouseLeave={() => {
                  if (activeOverlay !== null) setActiveOverlay(null);
                }}
              >
                <Image
                  src={img}
                  alt={details?.title ? `${details.title} (${details.year})` : `Featured ${index + 1}`}
                  className={`w-60 h-80 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110${isActive ? " scale-110" : ""}`}
                  width={254}
                  height={328}
                />
                <div className={`absolute inset-0 bg-black/90 rounded-xl flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  {details ? (
                    <>
                      <span className="text-white text-xl font-semibold mb-1">{details.title}</span>
                      <span className="text-white text-lg mb-1">{details.year}</span>
                      <span className="text-white text-lg">{details.role}</span>
                    </>
                  ) : (
                    <span className="text-white text-sm opacity-80">No details</span>
                  )}
                </div>
                {/* Tap outside to close on mobile */}
                {isActive && (
                  <div
                    className="fixed inset-0 z-40"
                    style={{ touchAction: "none" }}
                    onClick={() => setActiveOverlay(null)}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

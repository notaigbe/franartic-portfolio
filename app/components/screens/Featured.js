"use client";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { useDragScroll } from "@/app/hooks/useDragScroll";

export default function Featured({ data }) {
  const { scrollRef, dragHandlers } = useDragScroll();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center text-white px-8 max-w-6xl z-10 p-2 mx-auto w-full">
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
          {data.images.concat(data.images).map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Featured ${index + 1}`}
              className="w-60 h-80 object-cover rounded-xl shadow-lg flex-shrink-0"
              width={254}
              height={328}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

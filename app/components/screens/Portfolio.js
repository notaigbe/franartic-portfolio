"use client";
import ImageWithSkeleton from "../ImageWithSkeleton";
import { useState } from "react";

export default function Portfolio({ data }) {
  const [activeOverlay, setActiveOverlay] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center text-center text-[#492f05] px-8 max-w-6xl z-10 p-2 mx-auto w-full">
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in-up-delay-2 w-full">
        {data.images?.map((image, index) => {
          const isActive = activeOverlay === index;
          return (
            <div
              key={index}
              className="relative group"
              onTouchStart={e => {
                if (!isActive) setActiveOverlay(index);
              }}
              onMouseLeave={() => {
                if (activeOverlay !== null) setActiveOverlay(null);
              }}
            >
              <div className={`w-full h-60 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 group-hover:scale-105${isActive ? " scale-105" : ""}`}>
                <ImageWithSkeleton
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-2xl flex items-end p-4 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                <span className="text-white text-sm font-medium">
                  {data.details && data.details[index]?.description}
                </span>
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
  );
}

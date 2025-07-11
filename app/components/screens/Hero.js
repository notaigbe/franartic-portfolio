"use client";
import ImageWithSkeleton from "../ImageWithSkeleton";
import { Sparkles } from "lucide-react";

export default function Hero({ data }) {
  return (
    <div className="flex flex-col items-center justify-center text-center text-[#492f05] px-8 max-w-4xl z-10 p-16 mx-auto w-full h-full min-h-[60vh]">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8 w-full">
        <div className="relative flex-shrink-0 flex items-center justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl animate-bounce-slow">
            <ImageWithSkeleton
              src={data.image}
              alt="Francisca Otaigbe"
              className="w-full h-full object-cover"
              fetchpriority="high"
              width={400}
              height={600}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-md rounded-full p-3 border border-white/30">
            {data.icon}
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start justify-center w-full">
          <div className="text-sm font-light tracking-widest uppercase opacity-80 mb-2 text-center md:text-left">
            {data.subtitle}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up tracking-tight text-center md:text-left">
            {data.title}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed font-light mb-6 animate-fade-in-up-delay max-w-lg text-center md:text-left">
            {data.content}
          </p>
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium animate-fade-in-up-delay-2">
            <Sparkles className="w-4 h-4 mr-2" />
            {data.accentText}
          </div>
        </div>
      </div>
    </div>
  );
}

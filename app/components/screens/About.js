"use client";
import ImageWithSkeleton from "../ImageWithSkeleton";
import { Sparkles } from "lucide-react";

export default function About({ data }) {
  return (
    <div className="text-[#492f05] px-8 max-w-6xl mx-auto z-10">
      <div className="text-center mb-6 animate-bounce-slow">
        {data.icon}
      </div>
      <div className="text-center mb-8">
        <div className="text-sm font-light tracking-widest uppercase opacity-80 mb-2">
          {data.subtitle}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up tracking-tight">
          {data.title}
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-8 animate-fade-in-up-delay">
        <div className="w-full md:w-1/4 flex-shrink-0 rounded-2xl overflow-hidden shadow-xl">
          <ImageWithSkeleton
            src={data.images?.[0]}
            alt="About"
            className="w-full h-auto object-cover"
            width={400}
            height={600}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="w-full md:w-3/4 text-lg md:text-xl leading-relaxed font-light whitespace-pre-line">
          {data.content}
        </div>
      </div>
      <div className="flex justify-center mt-10 animate-fade-in-up-delay-3">
        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium">
          <Sparkles className="w-4 h-4 mr-2" />
          {data.accentText}
        </div>
      </div>
    </div>
  );
}

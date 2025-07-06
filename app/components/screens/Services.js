"use client";
import ImageWithSkeleton from "../ImageWithSkeleton";
import { Sparkles } from "lucide-react";

export default function Services({ data }) {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white px-8 max-w-6xl z-10 p-2 mx-auto w-full">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in-up-delay-2 w-full">
        {data.images?.map((image, index) => (
          <div key={index} className="relative group">
            <div className="w-full h-48 rounded-2xl overflow-hidden shadow-xl transform group-hover:scale-105 transition-all duration-300">
              <ImageWithSkeleton
                src={image}
                alt={`Service ${index + 1}`}
                className="w-full h-full object-cover"
                width={400}
                height={400}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
      <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium animate-fade-in-up-delay-3">
        <Sparkles className="w-4 h-4 mr-2" />
        {data.accentText}
      </div>
    </div>
  );
}

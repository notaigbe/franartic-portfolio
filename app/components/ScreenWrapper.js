"use client";

export default function ScreenWrapper({ bgColor, isAnimating, children }) {
  return (
    <div
      className={`${bgColor} w-full min-h-screen flex items-center justify-center relative transition-all duration-700 ease-in-out ${
        isAnimating ? "scale-105 opacity-40" : "scale-100 opacity-100"
      }`}
    >
      {/* Background Bubbles */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse delay-1000" />

      {/* Scrollable Content */}
      <div className="overflow-y-auto hide-scrollbar max-h-[calc(100vh-8rem)] w-full">
        {children}
      </div>
    </div>
  );
}

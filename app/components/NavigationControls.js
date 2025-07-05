import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NavigationControls = ({
  prevScreen,
  nextScreen,
  currentScreen,
  isAnimating,
  screensLength,
}) => (
  <div>
    {/* Desktop Controls */}
    <div className="absolute inset-0 hidden md:flex items-center justify-between px-8 pointer-events-none">
      <button
        onClick={prevScreen}
        disabled={currentScreen === 0 || isAnimating}
        className={`
          pointer-events-auto group
          w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/20
          flex items-center justify-center
          transition-all duration-300 hover:bg-black/60 hover:scale-110
          ${currentScreen === 0 ? "opacity-30 cursor-not-allowed" : "opacity-80 hover:opacity-100"}
        `}
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform cursor-pointer" />
      </button>
      <button
        onClick={nextScreen}
        disabled={currentScreen === screensLength - 1 || isAnimating}
        className={`
          pointer-events-auto group
          w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/20
          flex items-center justify-center
          transition-all duration-300 hover:bg-black/60 hover:scale-110
          ${currentScreen === screensLength - 1 ? "opacity-30 cursor-not-allowed" : "opacity-80 hover:opacity-100"}
        `}
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform cursor-pointer" />
      </button>
    </div>
    {/* Mobile Controls */}
    <div className="fixed bottom-4 right-4 flex md:hidden space-x-3 z-50">
      <button
        onClick={prevScreen}
        disabled={currentScreen === 0 || isAnimating}
        className={`
          group w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20
          flex items-center justify-center transition-all duration-300
          hover:bg-black/60 hover:scale-110
          ${currentScreen === 0 ? "opacity-30 cursor-not-allowed" : "opacity-80 hover:opacity-100"}
        `}
      >
        <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextScreen}
        disabled={currentScreen === screensLength - 1 || isAnimating}
        className={`
          group w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20
          flex items-center justify-center transition-all duration-300
          hover:bg-black/60 hover:scale-110
          ${currentScreen === screensLength - 1 ? "opacity-30 cursor-not-allowed" : "opacity-80 hover:opacity-100"}
        `}
      >
        <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
      </button>
    </div>
  </div>
);

export default NavigationControls;

import React from "react";

const ScreenIndicators = ({ screens, currentScreen, goToScreen }) => (
  <div className="absolute bottom-8 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-4 z-50">
    {screens.map((screen, index) => (
      <button
        key={index}
        onClick={() => goToScreen(index)}
        className={`
          relative group transition-all duration-300 hover:scale-125
          ${index === currentScreen ? "scale-125" : ""}
        `}
      >
        <div
          className={`
            w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300
            ${
              index === currentScreen
                ? "bg-amber-400 shadow-lg ring-2 md:ring-4 ring-amber-400/30"
                : "bg-white/60 hover:bg-white/80"
            }
          `}
        />
      </button>
    ))}
  </div>
);

export default ScreenIndicators;

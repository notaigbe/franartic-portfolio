import React from "react";

const FloatingElements = ({ floatingElements }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {floatingElements.map((element, index) => (
      <div
        key={index}
        className="absolute animate-float text-white/20"
        style={{
          left: `${Math.random() * 80 + 10}%`,
          top: `${Math.random() * 80 + 10}%`,
          animationDelay: element.delay,
          animationDuration: "6s",
        }}
      >
        {element.icon}
      </div>
    ))}
  </div>
);

export default FloatingElements;

import React from "react";
import {
  Sparkles,
  Star,
  Heart,
  Award,

} from "lucide-react";

const floatingElements = [
  { icon: <Heart className="w-4 h-4" />, delay: "0s" },
  { icon: <Sparkles className="w-3 h-3" />, delay: "2s" },
  { icon: <Star className="w-3 h-3" />, delay: "4s" },
  { icon: <Award className="w-4 h-4" />, delay: "6s" },
];

const FloatingElements = () => (
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

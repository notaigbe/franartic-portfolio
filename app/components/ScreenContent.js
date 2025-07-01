import React from "react";
import Image from "next/image";
import { Sparkles, Star, ChevronLeft, ChevronRight } from "lucide-react";

// This component expects props: currentScreen, currentScreenData, testimonials, testimonialNav, scrollRef, dragHandlers, currentTestimonial
const ScreenContent = ({
  currentScreen,
  currentScreenData,
  testimonials,
  currentTestimonial,
  nextTestimonial,
  prevTestimonial,
  scrollRef,
  dragHandlers,
}) => {
  // Testimonial carousel logic
  if (currentScreen === 6 && testimonials) {
    const t = testimonials[currentTestimonial];
    return (
      <div className="text-center text-white px-8 max-w-4xl z-10 p-2">
        <div className="mb-6 animate-bounce-slow">{currentScreenData.icon}</div>
        <div className="mb-8">
          <div className="text-sm font-light tracking-widest uppercase opacity-80 mb-2">
            {currentScreenData.subtitle}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up tracking-tight">
            {currentScreenData.title}
          </h1>
        </div>
        <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-8 border border-white/20 animate-fade-in-up-delay-2">
          <div className="flex items-center justify-between mb-4">
            <button onClick={prevTestimonial} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-4">
              <Image src={t.image} alt={t.name} className="w-16 h-16 rounded-full border-2 border-white/30" width={50} height={50} />
              <div className="text-left">
                <h3 className="font-semibold text-lg">{t.name}</h3>
                <p className="text-white/80 text-sm">{t.occasion}</p>
                <div className="flex space-x-1 mt-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <button onClick={nextTestimonial} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <blockquote className="text-lg md:text-xl italic leading-relaxed">{t.text}</blockquote>
        </div>
      </div>
    );
  }
  // Other screens: just render children (the content is handled in parent for now)
  return (
    <>{/* The parent will render the correct content for other screens */}</>
  );
};

export default ScreenContent;

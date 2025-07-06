"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials({
  data,
  testimonials,
  currentTestimonial,
  nextTestimonial,
  prevTestimonial,
}) {
  const testimonial = testimonials[currentTestimonial];

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center text-white px-8 max-w-4xl z-10 p-2 mx-auto w-full">
      <div className="mb-6 animate-bounce-slow w-full flex justify-start">{data.icon}</div>
      <div className="mb-4 w-full">
        <div className="text-sm font-light tracking-widest uppercase opacity-80 mb-2">
          {data.subtitle}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up tracking-tight">
          {data.title}
        </h1>
      </div>
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl animate-fade-in-up-delay-2 w-full max-w-xl mx-auto">
        <div className="flex justify-center mb-6">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={96}
            height={96}
            className="rounded-full w-24 h-24 object-cover border-4 border-white/20 shadow-lg"
          />
        </div>
        <p className="text-lg md:text-xl leading-relaxed font-light mb-4">
          “{testimonial.text}”
        </p>
        <div className="text-sm font-medium mb-2">{testimonial.name}</div>
        <div className="text-xs opacity-70">{testimonial.occasion}</div>
        <div className="flex justify-center mt-4 gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-amber-400" fill="currentColor" />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={prevTestimonial}
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextTestimonial}
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}

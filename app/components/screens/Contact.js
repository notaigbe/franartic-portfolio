"use client";
import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Sparkles } from "lucide-react";

export default function Contact({ data }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center text-[#492f05] px-8 max-w-4xl z-10 mx-auto w-full">
      <div className="mb-6 animate-bounce-slow w-full flex justify-start">{data.icon}</div>
      <div className="mb-4 w-full">
        <div className="text-sm font-light tracking-widest uppercase opacity-80 mb-2">
          {data.subtitle}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up tracking-tight">
          {data.title}
        </h1>
      </div>
      <p className="text-xl md:text-2xl leading-relaxed font-light mb-6 animate-fade-in-up-delay max-w-3xl mx-auto">
        {data.content}
      </p>
      {/* <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium animate-fade-in-up-delay-2 mb-8">
        <Sparkles className="w-4 h-4 mr-2" />
        {data.accentText}
      </div> */}
      <div className="space-y-4 animate-fade-in-up-delay-3 w-full">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+2348066838876"
            className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </a>
          <div className="flex md:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:franarticartistry@gmail.com"
              className="bg-[#492f05] px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 flex items-center transform hover:-translate-y-1"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
            </a>
            <a
              href="https://wa.me/2348066838876"
              className="bg-teal-800 text-white-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FaWhatsapp className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
        <div className="text-sm opacity-80">
          📍 Available in Lagos, Nigeria and for travel
        </div>
      </div>
    </div>
  );
}

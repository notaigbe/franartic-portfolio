"use client";
import { useState, useEffect } from "react";
import ImageWithSkeleton from "../ImageWithSkeleton";
import { X, ChevronDown, ChevronUp } from "lucide-react";

export default function OtherProjects({ data }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleImageClick = (image, index) => {
    setSelectedImage({ src: image, index });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      
      // Show back-to-top when user is near the bottom (within 300px)
      const isNearBottom = scrollHeight - (scrollTop + clientHeight) < 300;
      setShowBackToTop(isNearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center text-[#492f05] px-8 max-w-6xl z-10 p-2 mx-auto w-full">
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
            <div key={index} className="relative group cursor-pointer">
              <div 
                className="w-full h-48 rounded-2xl overflow-hidden shadow-xl transform group-hover:scale-105 transition-all duration-300"
                onClick={() => handleImageClick(image, index)}
              >
                <ImageWithSkeleton
                  src={image}
                  alt={`Other ${index + 1}`}
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator / Back to Top Button */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center transition-all duration-300">
        {showBackToTop ? (
          <button
            onClick={scrollToTop}
            className="flex flex-col items-center group cursor-pointer hover:scale-110 transition-transform"
            aria-label="Back to top"
          >
            <ChevronUp className="w-8 h-8 text-[#492f05] opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="text-sm font-light tracking-wide text-[#492f05] opacity-60 group-hover:opacity-100 mt-1 transition-opacity">
              Back to top
            </span>
          </button>
        ) : (
          <div className="flex flex-col items-center animate-bounce pointer-events-none">
            <ChevronDown className="w-8 h-8 text-[#492f05] opacity-60" />
            <span className="text-sm font-light tracking-wide text-[#492f05] opacity-60 mt-1">
              Scroll for more
            </span>
          </div>
        )}
      </div>

      {/* Full-screen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-amber-400 transition-colors z-50 bg-black/50 rounded-full p-2 backdrop-blur-sm"
            aria-label="Close image"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <ImageWithSkeleton
              src={selectedImage.src}
              alt={`Full view ${selectedImage.index + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
              width={1920}
              height={1080}
              style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "90vh" }}
            />
          </div>

          {/* Image counter */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
            {selectedImage.index + 1} / {data.images?.length}
          </div>
        </div>
      )}
    </>
  );
}
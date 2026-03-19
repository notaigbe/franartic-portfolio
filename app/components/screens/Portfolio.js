"use client";
import { useState } from "react";
import ImageWithSkeleton from "../ImageWithSkeleton";
import { X, ChevronDown } from "lucide-react";

export default function Portfolio({ data }) {
  const [activeOverlay, setActiveOverlay] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image, index) => {
    setSelectedImage({ src: image, index });
    setActiveOverlay(null);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center text-[#492f05] px-8 max-w-6xl z-10 p-2 mx-auto w-full">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in-up-delay-2 w-full">
          {data.images?.map((image, index) => {
            const isActive = activeOverlay === index;
            return (
              <div
                key={index}
                className="relative group cursor-pointer"
                onTouchStart={e => {
                  if (!isActive) setActiveOverlay(index);
                }}
                onMouseLeave={() => {
                  if (activeOverlay !== null) setActiveOverlay(null);
                }}
              >
                <div 
                  className={`w-full h-60 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 group-hover:scale-105${isActive ? " scale-105" : ""}`}
                  onClick={() => handleImageClick(image, index)}
                >
                  <ImageWithSkeleton
                    src={image}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-full object-cover"
                    width={400}
                    height={400}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-2xl flex items-end p-4 transition-opacity duration-300 pointer-events-none ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  <span className="text-white text-sm font-medium">
                    {data.details && data.details[index]?.description}
                  </span>
                </div>
                {isActive && (
                  <div
                    className="fixed inset-0 z-40"
                    style={{ touchAction: "none" }}
                    onClick={() => setActiveOverlay(null)}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Fixed Scroll Down Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center animate-bounce">
        <ChevronDown className="w-8 h-8 text-[#492f05] opacity-60" />
        <span className="text-sm font-light tracking-wide text-[#492f05] opacity-60 mt-1">
          Scroll for more
        </span>
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

          {/* Image counter and description */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm mb-2">
              {selectedImage.index + 1} / {data.images?.length}
            </div>
            {data.details && data.details[selectedImage.index]?.description && (
              <div className="text-white bg-black/50 px-6 py-3 rounded-full backdrop-blur-sm max-w-md">
                {data.details[selectedImage.index].description}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
"use client";
import { useState, useEffect, useRef } from "react";
import ImageWithSkeleton from "../ImageWithSkeleton";
import { X, ChevronDown, ChevronUp, Maximize, RefreshCw } from "lucide-react";

export default function OtherProjects({ data }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAtBottom, setIsAtBottom] = useState(false);
  
  // Transform States
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const lastImageRef = useRef(null);
  const containerRef = useRef(null);

  const handleImageClick = (image, index) => {
    setSelectedImage({ src: image, index });
    resetTransform();
  };

  const closeModal = () => {
    setSelectedImage(null);
    resetTransform();
  };

  const resetTransform = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // --- Pan & Zoom Logic ---

  const handleMouseDown = (e) => {
    if (scale === 1) return;
    setIsDragging(true);
    setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY * -0.01;
    const newScale = Math.min(Math.max(1, scale + delta), 4);
    setScale(newScale);
    if (newScale === 1) setPosition({ x: 0, y: 0 });
  };

  // --- Lifecycle & Observers ---

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedImage]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsAtBottom(entry.isIntersecting), { threshold: 0.1 });
    if (lastImageRef.current) observer.observe(lastImageRef.current);
    return () => observer.disconnect();
  }, [data.images]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Grid Content */}
      <div className="relative flex flex-col items-center text-center text-[#492f05] px-8 max-w-6xl p-2 mx-auto w-full z-10">
        <div className="mb-6 animate-bounce-slow w-full flex justify-start">{data.icon}</div>
        <div className="mb-8 w-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{data.title}</h1>
          <p className="text-xl md:text-2xl font-light mb-10 max-w-3xl mx-auto">{data.content}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 w-full">
          {data.images?.map((image, index) => (
            <div
              key={index}
              ref={index === data.images.length - 1 ? lastImageRef : null}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl"
              onClick={() => handleImageClick(image, index)}
            >
              <div className="w-full h-64 transform transition-transform duration-500 md:group-hover:scale-105">
                <ImageWithSkeleton src={image} alt="Project" className="w-full h-full object-cover" width={500} height={500} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Persistent Button */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100]">
        <button
          onClick={isAtBottom ? scrollToTop : undefined}
          className={`flex flex-col items-center group transition-all duration-500 ${isAtBottom ? "cursor-pointer" : "opacity-40 cursor-default"}`}
        >
          <div className={`p-4 rounded-full shadow-2xl transition-all duration-700 ${isAtBottom ? "bg-[#492f05] text-white rotate-0" : "bg-white/80 text-[#492f05] rotate-180"}`}>
            <ChevronUp className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest mt-2 text-[#492f05]">
            {isAtBottom ? "Back to Top" : "Scroll"}
          </span>
        </button>
      </div>

      {/* Pro Zoom Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/98 z-[9999] flex flex-col md:flex-row animate-fade-in overflow-hidden">
          
          {/* Controls Overlay */}
          <div className="absolute top-6 right-6 flex gap-3 z-[10000]">
             <button onClick={resetTransform} className="p-3 bg-white/10 rounded-full text-white/70 hover:text-white backdrop-blur-md" title="Reset View">
              <RefreshCw className="w-5 h-5" />
            </button>
            <button onClick={closeModal} className="p-3 bg-white/10 rounded-full text-white/70 hover:text-white backdrop-blur-md">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Left: Interactive Image Viewport */}
          <div 
            ref={containerRef}
            className="flex-[2] relative w-full h-[60vh] md:h-full flex items-center justify-center overflow-hidden bg-black/20"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
          >
            <div 
              className="transition-transform duration-75 ease-out will-change-transform"
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              }}
            >
              <ImageWithSkeleton
                src={selectedImage.src}
                alt="Panable View"
                className="max-w-screen max-h-screen object-contain pointer-events-none select-none"
                width={2000}
                height={1500}
              />
            </div>

            {/* Hint for Desktop */}
            <div className="absolute bottom-6 left-6 text-white/30 text-[10px] uppercase tracking-widest hidden md:block">
              Use Mouse Wheel to Zoom • Drag to Pan
            </div>
          </div>

          {/* Right: Static Info Panel (Desktop) / Bottom Panel (Mobile) */}
          <div className={`flex-1 bg-black md:bg-transparent p-8 md:p-16 flex flex-col justify-center transition-opacity duration-300 ${scale > 1.2 ? 'md:opacity-100 opacity-0' : 'opacity-100'}`}>
            <div className="max-w-sm">
              <p className="text-amber-500 font-mono text-xs tracking-[0.4em] mb-2 uppercase">Project {selectedImage.index + 1}</p>
              <h2 className="text-white text-5xl font-black mb-6">Discovery</h2>
              <div className="h-1 w-12 bg-amber-500 mb-6" />
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                {data.details?.[selectedImage.index]?.description || "Explore the fine details of this piece. On mobile, use two fingers to pinch and zoom. On desktop, use your scroll wheel."}
              </p>
              <button onClick={closeModal} className="border border-white/20 text-white/80 py-3 px-10 rounded-full hover:bg-white hover:text-black transition-all text-xs font-bold uppercase tracking-widest">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
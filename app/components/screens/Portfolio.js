"use client";
import { useState, useEffect, useRef } from "react";
import ImageWithSkeleton from "../ImageWithSkeleton";
import { X, ChevronDown, ChevronUp, RefreshCw, ZoomIn, ZoomOut } from "lucide-react";

export default function Portfolio({ data }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAtBottom, setIsAtBottom] = useState(false);
  
  // ✅ Zoom & Pan State
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const bottomBoundaryRef = useRef(null);

  // --- Handlers ---
  const handleImageClick = (image, index) => {
    setSelectedImage({ src: image, index });
    resetZoom();
    document.dispatchEvent(new CustomEvent("portfolioModalOpen", { detail: true }));
  };

  const closeModal = () => {
    setSelectedImage(null);
    resetZoom();
    document.dispatchEvent(new CustomEvent("portfolioModalOpen", { detail: false }));
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- Zoom/Pan Logic ---
  const handleWheel = (e) => {
    if (!selectedImage) return;
    e.preventDefault();
    const delta = e.deltaY * -0.01;
    const newScale = Math.min(Math.max(1, scale + delta), 4);
    setScale(newScale);
    if (newScale === 1) setPosition({ x: 0, y: 0 });
  };

  const onMouseDown = (e) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const onMouseUp = () => setIsDragging(false);

  // --- Effects ---
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsAtBottom(entry.isIntersecting), { threshold: 0.1 });
    if (bottomBoundaryRef.current) observer.observe(bottomBoundaryRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "unset";
  }, [selectedImage]);

  return (
    <>
      <div className="relative flex flex-col items-center text-center text-[#492f05] px-8 max-w-6xl p-2 mx-auto w-full z-10">
        <div className="mb-6 animate-bounce-slow w-full flex justify-start">{data.icon}</div>
        
        <div className="mb-8 w-full">
          <div className="text-sm font-light tracking-widest uppercase opacity-80 mb-2">{data.subtitle}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{data.title}</h1>
          <p className="text-xl md:text-2xl font-light mb-10 max-w-3xl mx-auto">{data.content}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {data.images?.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl active:scale-95 transition-transform"
              onClick={() => handleImageClick(image, index)}
            >
              <div className="w-full h-60 transform transition-transform duration-500 md:group-hover:scale-110">
                <ImageWithSkeleton src={image} alt={`Portfolio ${index + 1}`} className="w-full h-full object-cover" width={400} height={400} />
              </div>
            </div>
          ))}
        </div>
        <div ref={bottomBoundaryRef} className="h-20 w-full" aria-hidden="true" />
      </div>

      {/* ✅ PERSISTENT TOGGLE BUTTON */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100]">
        <button
          onClick={isAtBottom ? scrollToTop : undefined}
          className={`flex flex-col items-center transition-all duration-500 ease-in-out ${isAtBottom ? "cursor-pointer scale-110" : "cursor-default pointer-events-none opacity-60"}`}
        >
          <div className={`p-4 rounded-full shadow-2xl transition-all duration-500 ${isAtBottom ? "bg-[#492f05] text-white rotate-0" : "bg-white/80 backdrop-blur-md text-[#492f05] animate-bounce rotate-180"}`}>
            <ChevronUp className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-bold uppercase mt-2 tracking-widest text-[#492f05]">
            {isAtBottom ? "Back to Top" : "Scroll"}
          </span>
        </button>
      </div>

      {/* ✅ PAN & ZOOM MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/98 z-[9999] flex flex-col md:flex-row animate-fade-in"
          onWheel={handleWheel}
        >
          {/* Controls Overlay — desktop only */}
          <div className="absolute bottom-6 right-6 md:flex hidden items-center gap-4 z-[10000]">
            <button onClick={resetZoom} className="p-3 bg-white/10 rounded-full text-white/70 hover:text-white backdrop-blur-md transition-all" title="Reset Zoom">
              <RefreshCw className="w-5 h-5" />
            </button>
            <button onClick={closeModal} className="p-3 bg-white/10 rounded-full text-white/70 hover:text-white backdrop-blur-md transition-all">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Left: Interactive Image Viewport */}
          <div 
            className="flex-[3] relative w-full h-full flex items-center justify-center overflow-hidden cursor-zoom-out"
            onClick={closeModal}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            <div 
              className="transition-transform duration-75 ease-out will-change-transform"
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithSkeleton
                src={selectedImage.src}
                alt="Selected view"
                className="max-w-screen max-h-screen object-contain rounded shadow-2xl select-none pointer-events-none"
                width={1600}
                height={1200}
              />
            </div>
            {/* Desktop Instruction */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/20 text-[10px] uppercase tracking-[0.3em] hidden md:block">
              Wheel to Zoom • Drag to Pan
            </div>
          </div>

              {/* Mobile Controls — between image and details */}
            <div className="md:hidden flex items-center justify-center gap-4 z-[10000] bg-black">
              <button onClick={resetZoom} className="p-3 bg-white/10 rounded-full text-white/70 transition-all" title="Reset Zoom">
                <RefreshCw className="w-5 h-5" />
              </button>
              <button onClick={closeModal} className="p-3 bg-white/10 rounded-full text-white/70 transition-all">
                <X className="w-6 h-6" />
              </button>
            </div>
          {/* Right: Info Panel */}
          <div 
            className={`flex-[1.5] bg-black md:bg-transparent p-8 md:p-12 flex flex-col justify-center space-y-6 transition-opacity duration-300 ${scale > 1.1 ? 'md:opacity-100 opacity-0' : 'opacity-100'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-2">
              <span className="text-amber-500 font-mono text-xs tracking-[0.4em] uppercase">
                Catalog {selectedImage.index + 1}
              </span>
              <h2 className="text-white text-4xl md:text-6xl font-bold">Details</h2>
            </div>
            <div className="h-1 w-16 bg-amber-500" />
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
              {data.details?.[selectedImage.index]?.description || "A professional showcase of high-quality work. Use your mouse wheel or pinch to see fine details."}
            </p>
            {/* <button onClick={closeModal} className="w-fit border-2 border-white/20 text-white/90 py-4 px-10 rounded-full hover:bg-white hover:text-black transition-all text-xs uppercase font-black md:static fixed bottom-8 left-1/2 -translate-x-1/2 z-[10001] md:translate-x-0 md:bottom-auto">
              Close
            </button> */}
          </div>
        </div>
      )}
    </>
  );
}
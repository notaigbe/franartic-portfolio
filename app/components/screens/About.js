"use client";
import { useState, useRef, useEffect } from "react";
import ImageWithSkeleton from "../ImageWithSkeleton";
import { Sparkles, Play, X, Pause, Volume2, VolumeX } from "lucide-react";

export default function About({ data }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const videos = [
    {
      id: "1",
      src: "/assets/videos/reel1.mp4", // Replace with your local video path
      thumbnail: "/assets/videos/reel1-thumb.jpg", // Replace with your thumbnail
      title: "Behind the Scenes 1"
    },
    {
      id: "2",
      src: "/assets/videos/reel2.mp4", // Replace with your local video path
      thumbnail: "/assets/videos/reel2-thumb.jpg", // Replace with your thumbnail
      title: "Behind the Scenes 2"
    }
  ];

  const openVideo = (video) => {
    setSelectedVideo(video);
    setIsPlaying(true);
  };

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setSelectedVideo(null);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (selectedVideo && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [selectedVideo]);

  return (
    <>
      <div className="text-[#492f05] px-8 max-w-6xl mx-auto z-10 pb-32">
        <div className="text-center mb-6 animate-bounce-slow">
          {data.icon}
        </div>
        <div className="text-center mb-8">
          <div className="text-sm font-light tracking-widest uppercase opacity-80 mb-2">
            {data.subtitle}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up tracking-tight">
            {data.title}
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-8 animate-fade-in-up-delay">
          <div className="w-full md:w-1/4 flex-shrink-0 rounded-2xl overflow-hidden shadow-xl">
            <ImageWithSkeleton
              src={data.images?.[0]}
              alt="About"
              className="w-full h-auto object-cover"
              width={400}
              height={600}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="w-full md:w-3/4 text-lg md:text-xl leading-relaxed font-light whitespace-pre-line">
            {data.content}
          </div>
        </div>

        <div className="flex justify-center mt-10 animate-fade-in-up-delay-3">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            {data.accentText}
          </div>
        </div>
      </div>

      {/* Fixed Video Thumbnails Bar */}
      <div className="fixed bottom-20 md:bottom-0 left-0 right-0 backdrop-blur-xs border-t border-[#492f05]/10 z-40 px-4 py-4">
        <div className="max-w-6xl mx-auto overflow-hidden">
          <div className="flex sm:items-end sm:justify-end items-center justify-center gap-3 flex-wrap">
            {videos.map((video, index) => (
              <button
                key={index}
                onClick={() => openVideo(video)}
                className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex-shrink-0"
                aria-label={`Play ${video.title}`}
              >
                <div className="w-16 h-24 sm:w-20 sm:h-28 md:w-24 md:h-36 bg-gradient-to-br from-gray-800 to-gray-900 relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                    <div className="bg-white/40 rounded-full p-2 transform group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 md:w-6 md:h-6 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
        >
          {/* Tappable backdrop */}
          <div 
            className="absolute inset-0"
            onClick={closeVideo}
          />

          {/* Video Container */}
          <div 
            className="relative w-full max-w-md mx-auto z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video Player */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video
                ref={videoRef}
                className="w-full aspect-[9/16] object-cover"
                src={selectedVideo.src}
                playsInline
                loop
                onEnded={() => setIsPlaying(false)}
              />
              
              {/* Video Controls Overlay */}
              <div className="absolute bottom-25 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-20 pb-4 px-4">
                {/* Play/Pause and Mute Controls */}
                <div className="flex items-center justify-center gap-4 mb-4">
                  <button
                    onClick={togglePlayPause}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all transform hover:scale-110 active:scale-95"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-white fill-white" />
                    ) : (
                      <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                    )}
                  </button>
                  
                  <button
                    onClick={toggleMute}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all transform hover:scale-110 active:scale-95"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-6 h-6 text-white" />
                    ) : (
                      <Volume2 className="w-6 h-6 text-white" />
                    )}
                  </button>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeVideo}
                  className="w-full flex items-center justify-center gap-2 bg-transparent hover:bg-white/20 active:bg-white/30 text-white px-6 py-4 rounded-full shadow-lg transform hover:scale-105 active:scale-95 transition-all"
                  aria-label="Close video"
                >
                  <X className="w-6 h-6 stroke-[3]" />
                  <span className="font-semibold text-base">Close</span>
                </button>
              </div>
            </div>
            
            {/* Video Title */}
            <div className="text-center mt-4">
              <p className="text-white text-sm md:text-base font-medium">
                {selectedVideo.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

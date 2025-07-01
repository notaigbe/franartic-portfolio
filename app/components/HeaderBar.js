import React from "react";
import Image from "next/image";

const HeaderBar = () => (
  <header>
    {/* Progress Bar */}
    <div className="absolute top-0 left-0 w-full h-1 bg-black/30">
      {/* Progress bar is handled in parent with inline style */}
    </div>
    {/* Brand badge and mobile social icons */}
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-3 md:space-y-0 z-50">
      <div className="bg-white/10 backdrop-blur-lg text-white px-5 py-2 rounded-full text-2xl font-medium border border-white/20 shadow-lg ring-1 ring-white/10 shimmer">
        ✨ Franartic
      </div>
      <div className="flex space-x-4 md:hidden">
        <a href="https://www.instagram.com/franartic" className="w-8 h-8 md:w-10 md:h-10 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-all border border-white/20 text-xs md:text-sm">
          <Image src="/assets/img/icons/instagram.svg" alt="Instagram" className="w-5 h-5" width={24} height={24} />
        </a>
        <a href="https://www.facebook.com/franartic" className="w-8 h-8 md:w-10 md:h-10 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-all border border-white/20 text-xs md:text-sm">
          <Image src="/assets/img/icons/facebook.svg" alt="Facebook" className="w-5 h-5" width={24} height={24} />
        </a>
        <a href="https://www.x.com/franartic" className="w-8 h-8 md:w-10 md:h-10 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-all border border-white/20 text-xs md:text-sm">
          <Image src="/assets/img/icons/x.svg" alt="Twitter" className="w-5 h-5" width={24} height={24} />
        </a>
        <a href="https://www.tiktok.com/@franartic" className="w-8 h-8 md:w-10 md:h-10 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-all border border-white/20 text-xs md:text-sm">
          <Image src="/assets/img/icons/tiktok.svg" alt="tiktok" className="w-5 h-5" width={24} height={24} />
        </a>
      </div>
    </div>
    {/* Social Icons for desktop */}
    <div className="hidden md:flex absolute top-4 right-4 space-x-4 z-50">
      <a href="https://www.instagram.com/franartic" className="w-8 h-8 md:w-10 md:h-10 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-all border border-white/20 text-xs md:text-sm">
        <Image src="/assets/img/icons/instagram.svg" alt="Instagram" className="w-5 h-5" width={24} height={24} />
      </a>
      <a href="https://www.facebook.com/franartic" className="w-8 h-8 md:w-10 md:h-10 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-all border border-white/20 text-xs md:text-sm">
        <Image src="/assets/img/icons/facebook.svg" alt="Facebook" className="w-5 h-5" width={24} height={24} />
      </a>
      <a href="https://www.x.com/franartic" className="w-8 h-8 md:w-10 md:h-10 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-all border border-white/20 text-xs md:text-sm">
        <Image src="/assets/img/icons/x.svg" alt="Twitter" className="w-5 h-5" width={24} height={24} />
      </a>
      <a href="https://www.tiktok.com/@franartic" className="w-8 h-8 md:w-10 md:h-10 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-all border border-white/20 text-xs md:text-sm">
        <Image src="/assets/img/icons/tiktok.svg" alt="tiktok" className="w-5 h-5" width={24} height={24} />
      </a>
    </div>
  </header>
);

export default HeaderBar;

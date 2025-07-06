"use client";
import { useRef, useEffect } from "react";

export default function MobileMenu({ screens, currentScreen, goToScreen, isOpen, setIsOpen }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !e.target.closest('[aria-label="Toggle mobile menu"]')
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  return (
    <>
      {/* Toggle Button */}
      <button
        aria-label="Toggle mobile menu"
        className="fixed top-4 right-4 z-[110] p-2 md:hidden bg-black/20 backdrop-blur-sm rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Slide-down Menu */}
      <nav
        aria-label="Mobile Navigation"
        ref={menuRef}
        className={`fixed top-2 right-4 w-64 md:hidden z-[105] bg-stone/90 backdrop-blur-lg shadow-2xl rounded-b-2xl overflow-hidden transition-transform duration-300 ease-in-out origin-top-right
          ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}
        `}
      >
        <div className="pt-12 pb-4 px-4">
          {screens.map((screen, index) => (
            <button
              key={screen.id}
              onClick={() => {
                goToScreen(index);
                setIsOpen(false);
              }}
              className={`w-full text-left py-3 px-4 mb-2 rounded-lg transition-colors flex items-center gap-3 ${
                currentScreen === index
                  ? "bg-white/20 text-white"
                  : "text-white/60 hover:bg-white/10"
              }`}
            >
              <span className="w-6 h-6 flex items-center justify-center">{screen.icon}</span>
              <span className="text-base font-medium">{screen.title}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
